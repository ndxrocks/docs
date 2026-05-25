export type PostContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "code"; code: string; language?: string }
  | { type: "figure"; url: string; alt: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  tag: string;
  date: string;
  readingTime: string;
  cover: string;
  inline: string;
  inlineAlt: string;
  content: PostContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "small-models-structured-output",
    title: "Why small models fail at structured output",
    description: "An in-depth analysis of why sub-7B models struggle with strict JSON schemas, and how to fix it with templates, JSON repair, and validation loops.",
    tag: "Reliability",
    date: "May 12, 2026",
    readingTime: "8 min read",
    cover: "/blog/structured-output.jpg",
    inline: "/blog/structured-output-2.jpg",
    inlineAlt: "Schema validator with a feedback repair loop between JSON output and validation gates",
    content: [
      {
        type: "p",
        text: "Structured outputs (typically JSON schema compliance) are the essential bridge between large language models and traditional software systems. If an agent's output is not syntactically valid JSON matching a specific schema, downstream application code fails. While frontier models like GPT-4 or Claude 3.5 Sonnet achieve extremely high schema compliance out of the box, small models (under 7B parameters, such as Llama-3-8B or Qwen-2.5-7B) struggle. At a smaller parameter scale, models lack the deep grammatical grounding necessary to consistently guarantee syntactical correctness under pressure.",
      },
      { type: "h2", text: "The Anatomy of a Syntactic Breakdown" },
      {
        type: "p",
        text: "When a small model is prompted to output structured JSON, it is forced to perform two complex tasks simultaneously: semantic reasoning (deciding what information to output) and syntactic formatting (adhering to braces, quotation marks, and comma placement). For small models, maintaining this dual focus leads to cognitive overload. Common failure modes include:",
      },
      {
        type: "ul",
        items: [
          "Syntax Errors: Mismatched braces, trailing commas at the end of objects, or unescaped control characters inside strings.",
          "Conversational Bloat: Prefixing the JSON with conversational text ('Here is the JSON review you requested:') or wrapping it in Markdown code blocks.",
          "Schema Hallucination: Inventing new keys, omitting required fields, or changing key spelling entirely.",
        ],
      },
      {
        type: "figure",
        url: "/blog/structured-output-2.jpg",
        alt: "A schema validator with a repair loop between JSON and Repair gates",
      },
      { type: "h2", text: "The Problem with Complex JSON Schemas" },
      {
        type: "p",
        text: "Most developers attempt to enforce structured output by feeding a raw JSON Schema definition directly to the model's prompt. While this works for large models, it is highly ineffective for smaller models. A JSON Schema is itself a complex, nested specification. Asking a 3B model to parse a schema definition in its context window and generate a matching instance in real-time is prone to errors. The model often gets confused by the schema's meta-properties, leading to key drift or empty objects.",
      },
      { type: "h2", text: "The Solution: Template Contracts" },
      {
        type: "p",
        text: "To solve this, we must replace complex schema definitions with template-based contracts. Instead of telling the model *how* the schema is defined, we provide a concrete example template and ask it to 'fill in the blanks'. This reduces the task from compiling specification code to template matching, which small models can perform with significantly higher accuracy.",
      },
      {
        type: "code",
        language: "python",
        code: `# Defining a template-based contract instead of standard JSON Schema
contract_template = """{
  "rating": {{rating}},
  "sentiment": "{{sentiment}}",
  "explanation": "{{explanation}}"
}"""

# Feed this template directly to the model for simpler extraction tasks`,
      },
      { type: "h2", text: "Healing JSON and Validation Retries" },
      {
        type: "p",
        text: "Even with template contracts, syntax errors still happen. The reliability layer must absorb these failures by running an automatic JSON healing loop. When a parsing error occurs, a fault-tolerant parser identifies the error's position (such as a missing closing quote or trailing comma) and fixes it programmatically. If the JSON is severely broken, the framework sends the exact validation error back to the model as feedback, prompting a quick correction. This retry cycle guarantees that 98%+ of tasks complete successfully, keeping latency and API costs close to the small-model floor.",
      },
    ],
  },
  {
    slug: "local-llms-production",
    title: "Making local LLMs production reliable",
    description: "A comprehensive playbook for deploying llama.cpp, Ollama, and Kern in production and regulated environments.",
    tag: "Deployment",
    date: "May 5, 2026",
    readingTime: "9 min read",
    cover: "/blog/local-llms.jpg",
    inline: "/blog/local-llms-2.jpg",
    inlineAlt: "Close-up of a glowing GPU compute chip on a circuit board",
    content: [
      {
        type: "p",
        text: "Running language models locally on your own hardware is crucial for privacy, data compliance, and long-term cost efficiency. However, moving local LLMs from prototype to production is notoriously difficult. While the model weights themselves are stable, the software wrappers (like llama.cpp or Ollama) often struggle under real production workloads. Common issues include queue depth explosions, memory fragmentation on the GPU, and lack of robust error fallback strategies.",
      },
      { type: "h2", text: "Challenges of Local Hardware Orchestration" },
      {
        type: "p",
        text: "When executing model requests locally, you are constrained by raw GPU compute and VRAM capacity. Unlike cloud APIs that scale horizontally, local deployments face physical hardware boundaries. Without proper gateway management, a burst in traffic can cause request times to spike, GPU context switching to stall, and the inference engine to crash. Key infrastructure hurdles include:",
      },
      {
        type: "ul",
        items: [
          "Concurrency Limits: Local engines usually process only 1 to 4 requests concurrently per GPU; excess requests must be queued.",
          "Head-of-Line Blocking: A single long-running generation task can stall the queue, delaying short extraction tasks.",
          "Timeout Failures: Standard clients lack request-level timeouts that integrate with GPU backpressure queues, causing web socket hang-ups.",
        ],
      },
      {
        type: "figure",
        url: "/blog/local-llms-2.jpg",
        alt: "Close-up of a glowing GPU compute chip on a circuit board",
      },
      { type: "h2", text: "The Production Wrapper Architecture" },
      {
        type: "p",
        text: "To run local models reliably, you must place a specialized proxy layer between your application code and the inference engine. This wrapper handles backpressure, timeouts, and structured output checking. By routing traffic through a queue-aware gateway, we can manage request concurrency and prevent GPU overload.",
      },
      {
        type: "code",
        language: "python",
        code: `# Configuration for a local inference engine with a reliability proxy
from kern.models.local import LocalEngine

model = LocalEngine(
    endpoint="http://localhost:8080/v1",
    concurrency_limit=2,
    request_timeout=30.0,
    queue_max_size=100
)`,
      },
      { type: "h2", text: "Implementing Fallback Routing" },
      {
        type: "p",
        text: "A production-grade architecture must support automatic fallback routing. When the local GPU queue is full or a timeout is reached, the request should automatically route to an alternative endpoint (such as a hosted API or a secondary GPU node). Because the proxy enforces identical structured interfaces across all models, this transition is invisible to the application layer. By managing retries and fallbacks at the proxy layer, you maintain a high success rate even during local hardware disruptions.",
      },
    ],
  },
  {
    slug: "benchmarking-ai-workflows",
    title: "Benchmarking AI workflows",
    description: "Why single-prompt metrics fail to represent agent performance, and how to measure multi-step system success.",
    tag: "Benchmarks",
    date: "April 24, 2026",
    readingTime: "10 min read",
    cover: "/blog/benchmarks.jpg",
    inline: "/blog/benchmarks-2.jpg",
    inlineAlt: "Leaderboard chart with stacked glowing bars in cyan and violet",
    content: [
      {
        type: "p",
        text: "Traditional AI benchmarks (like MMLU, GSM8k, or HumanEval) measure isolated, single-turn prompts. They evaluate whether a model can answer a trivia question or write a single python function. While useful for comparing base model capabilities, these scores do not predict the reliability of actual agent workflows. In a real-world system, an agent runs in a loop, calls tools, validates inputs, and coordinates with other agents in a multi-step graph.",
      },
      { type: "h2", text: "The Compound Error Problem" },
      {
        type: "p",
        text: "In multi-step agent workflows, errors compound exponentially. If an agent workflow has five sequential steps, and each individual step has a 95% success rate, the overall workflow success rate drops to just 77% (0.95^5). For smaller models, where individual tool calls or extraction tasks might have an 85% success rate, a five-step workflow is almost guaranteed to fail (0.85^5 = 44%). Traditional benchmarks miss this compound fragility entirely.",
      },
      {
        type: "figure",
        url: "/blog/benchmarks-2.jpg",
        alt: "Leaderboard chart with stacked glowing bars in cyan and violet",
      },
      { type: "h2", text: "Key Metrics to Track Instead" },
      {
        type: "p",
        text: "To understand agent performance under load, we must shift our metrics from base model scores to system-level telemetry. The key indicators of agentic reliability include:",
      },
      {
        type: "ul",
        items: [
          "End-to-End Task Completion: The percentage of runs that output a valid, correct final response.",
          "Repair Rate: The number of JSON healing or validation retry cycles triggered per task.",
          "Fallback Rate: How often the system had to escalate a task to a larger, secondary model.",
          "P95 Latency (inclusive of retries): The total time taken to return a validated output, accounting for healing cycles.",
        ],
      },
      {
        type: "code",
        language: "python",
        code: `# Running an automated workflow evaluation script
from kern.eval import Evaluator
from my_agent import workflow

evaluator = Evaluator(dataset="test_cases.jsonl")
results = evaluator.run(workflow, concurrency=5)
print(f"End-to-End Success: {results.success_rate}%")
print(f"Average Repair Attempts: {results.avg_repairs}")`,
      },
      { type: "h2", text: "Building a Continuous Evaluation Harness" },
      {
        type: "p",
        text: "Ensuring long-term reliability requires running automated regressions nightly against test datasets. When a model provider releases a new checkpoint or a developer modifies a prompt, the system should re-run the evaluation harness. By trending metrics like repair rates and end-to-end task completion over time, you can catch performance regressions before they impact production users.",
      },
    ],
  },
  {
    slug: "ai-reliability-infrastructure",
    title: "AI reliability infrastructure",
    description: "Why reliability is the missing layer in the modern AI stack, and why application code shouldn't handle non-deterministic errors.",
    tag: "Thesis",
    date: "April 12, 2026",
    readingTime: "6 min read",
    cover: "/blog/reliability.jpg",
    inline: "/blog/reliability-2.jpg",
    inlineAlt: "Mesh network of glowing nodes representing resilient fallback paths",
    content: [
      {
        type: "p",
        text: "Every generation of software infrastructure has a missing primitive that is eventually absorbed into the platform layer. In the early web, it was caching and load balancing. In the microservices era, it was container orchestration and service meshes. In the AI era, the missing primitive is reliability—the capacity to make non-deterministic language models behave reliably within deterministic software systems.",
      },
      { type: "h2", text: "The Scaffolding Problem" },
      {
        type: "p",
        text: "Currently, most engineering teams build their own reliability code directly inside the application layer. When developers write an agent, they surround the model call with custom regex parsing, exception handlers, exponential backoff, JSON repair functions, and model fallback logic. This approach creates cluttered, load-bearing boilerplate code that is difficult to test, maintain, and reuse.",
      },
      {
        type: "figure",
        url: "/blog/reliability-2.jpg",
        alt: "Mesh network of glowing nodes representing resilient fallback paths",
      },
      { type: "h2", text: "Decoupling Logic from Mitigation" },
      {
        type: "p",
        text: "The core principle of AI reliability infrastructure is the separation of concerns: application code should describe *what* the agent is supposed to do, while the infrastructure layer handles *how* to recover when a non-deterministic failure occurs. The same way Kubernetes restarts a crashed container without the application knowing, a reliability framework should automatically repair bad JSON, retry tool calls, or fall back to secondary models.",
      },
      {
        type: "code",
        language: "python",
        code: `# Clean application logic separated from error recovery
from kern import Agent
from my_schemas import Report

# The agent handles error routing and schema parsing under the hood
agent = Agent(
    model="local-model",
    output_schema=Report,
    auto_repair=True,
    fallback_model="gpt-4o"
)
report = agent.run("Generate market summary")`,
      },
      { type: "h2", text: "Reliability as a Foundational Layer" },
      {
        type: "p",
        text: "By absorbing these error-handling mechanisms into a dedicated framework, you establish a standard control plane for your AI systems. Every agent in the codebase automatically inherits JSON repair, tool-call retries, and fallback options. This architecture makes your applications simpler and easier to maintain, allowing you to scale up agent deployments safely and predictably.",
      },
    ],
  },
  {
    slug: "observability-ai-agents",
    title: "Observability for AI agents",
    description: "Design patterns for tracing non-deterministic agent workflows, and the metrics SREs should monitor.",
    tag: "Observability",
    date: "March 30, 2026",
    readingTime: "8 min read",
    cover: "/blog/observability.jpg",
    inline: "/blog/observability-2.jpg",
    inlineAlt: "Observability dashboard close-up with cyan and violet trend lines",
    content: [
      {
        type: "p",
        text: "Standard application logging (such as structured JSON logs or text printouts) is insufficient for diagnosing issues in agentic systems. Because agents operate in loops and call external tools based on non-deterministic model outputs, linear logs cannot answer key questions during outages. To debug a failing agent, you must trace the exact sequence of tool calls, prompt iterations, and repair attempts that occurred during the execution.",
      },
      { type: "h2", text: "The Correct Span Shape for Agents" },
      {
        type: "p",
        text: "Traditional tracing treats each HTTP request as a single span. For agents, we must design a hierarchical span tree that maps to the execution graph. Every agent invocation represents a root span, with nested child spans for each step in the workflow. Key attributes that should be attached to each span include:",
      },
      {
        type: "ul",
        items: [
          "Root Span: Invocation parameters, system prompt, and final output status.",
          "Model Spans: Model name, tokens used (prompt and completion), finish reason, and temperature.",
          "Tool Spans: Tool name, input arguments, raw string output, and execution latency.",
          "Repair Spans: The syntax error message, repair strategy used, and number of iterations.",
        ],
      },
      {
        type: "figure",
        url: "/blog/observability-2.jpg",
        alt: "Observability dashboard close-up with cyan and violet trend lines",
      },
      { type: "h2", text: "Native OpenTelemetry Tracing" },
      {
        type: "p",
        text: "Integrating observability directly into the agent framework boundary ensures every span is captured automatically. By exporting trace data via OpenTelemetry, you can visualize execution graphs and pinpoint bottlenecks inside standard APM tools (like Datadog, Honeycomb, or Jaeger).",
      },
      {
        type: "code",
        language: "python",
        code: `# Wire OpenTelemetry tracing to the framework client
from kern.obs import trace_agent
from opentelemetry import trace

tracer = trace.get_tracer(__name__)

with tracer.start_as_current_span("run_agent") as span:
    # Captures nested spans for LLM calls and tool execution automatically
    result = my_agent.run("Process billing query")`,
      },
      { type: "h2", text: "Metrics that Matter" },
      {
        type: "p",
        text: "While monitoring latency and token costs is important, the metrics that indicate system drift are repair rates, tool retry frequencies, and fallback escalations. An increase in repair rates usually indicates a change in the model's behavior or a data shift in user inputs. By setting alerts on these system-level metrics, you can identify and resolve prompts or schema issues before they impact end-users.",
      },
    ],
  },
];
