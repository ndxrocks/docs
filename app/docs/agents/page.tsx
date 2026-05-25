import { CodeBlock } from "@/components/docs/code-block";
import { Badge } from "@/components/ui/badge";

const basicAgentCode = `from kern import Agent
from kern.models.openai import OpenAIChat

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    description="You are a helpful research assistant.",
)`;

const fullAgentCode = `from kern import Agent
from kern.models.openai import OpenAIChat

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    description="You are a research assistant.",
    output_schema=ResearchSummary,
    tools=[DuckDuckGo()],
)
result = agent.run("Research quantum computing")
print(result.content)`;

const runAgentCode = `from kern import Agent
from kern.models.openai import OpenAIChat

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    description="You are a helpful assistant.",
)

# Standard run — returns a RunOutput object
result = agent.run("Explain transformer architectures")
print(result.content)
print(result.tool_calls)  # List of tool calls made

# Streaming run — yields tokens as they arrive
for chunk in agent.run_stream("Write a haiku about debugging"):
    print(chunk.content, end="", flush=True)`;

const runOutputCode = `# RunOutput attributes
result.content       # The agent's response (str or Pydantic object)
result.tool_calls    # List of tool calls made during the run
result.model         # The model used for the response
result.messages      # Full message history for this run
result.usage         # Token usage statistics`;

const structuredOutputCode = `from pydantic import BaseModel, Field
from kern import Agent
from kern.models.openai import OpenAIChat

class ResearchSummary(BaseModel):
    title: str = Field(description="Research topic title")
    key_findings: list[str] = Field(description="List of key findings")
    confidence: float = Field(description="Confidence score 0-1")

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    description="You are a research assistant.",
    output_schema=ResearchSummary,
)

result = agent.run("Summarize recent breakthroughs in fusion energy")
print(result.content.title)
print(result.content.key_findings)`;

const toolsCode = `from kern import Agent
from kern.models.openai import OpenAIChat
from kern.tools.duckduckgo import DuckDuckGo

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    description="You are a research assistant with web access.",
    tools=[DuckDuckGo()],
    show_tool_calls=True,
)

result = agent.run("What are the latest developments in AI?")
print(result.content)`;

const agentTeamsCode = `# Agent teams
from kern import Agent, Team
from kern.models.openai import OpenAIChat
from kern.tools.duckduckgo import DuckDuckGo

researcher = Agent(
    name="Researcher",
    model=OpenAIChat(id="gpt-4o-mini"),
    description="You gather and summarize information.",
    tools=[DuckDuckGo()],
)

writer = Agent(
    name="Writer",
    model=OpenAIChat(id="gpt-4o-mini"),
    description="You write polished, engaging articles.",
)

team = Team(agents=[researcher, writer])
result = team.run("Write about AI")
print(result.content)`;

const parameters = [
  {
    name: "model",
    type: "Model",
    description:
      "The language model to use. Pass any supported model instance (OpenAIChat, Claude, Gemini, Ollama, etc.).",
  },
  {
    name: "description",
    type: "str",
    description:
      "The system prompt that defines the agent's role and behavior. This is the primary way to steer agent output.",
  },
  {
    name: "output_schema",
    type: "BaseModel",
    description:
      "A Pydantic model class defining the expected output structure. Kern generates fill-in-the-blank templates instead of raw JSON Schema for better small-model compatibility.",
  },
  {
    name: "tools",
    type: "list[Tool]",
    description:
      "A list of tool instances the agent can call. Includes built-in tools (DuckDuckGo, Calculator) and custom tools.",
  },
  {
    name: "show_tool_calls",
    type: "bool",
    description:
      "When True, tool calls are included in the agent's response output. Defaults to False.",
  },
];

export default function AgentsPage() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          <span className="text-gradient">Agents</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Agents are the core building block in Kern. An agent wraps a language
          model with instructions, tools, and structured output — turning a raw
          LLM into a purposeful, task-oriented assistant optimized for small
          models (1-7B parameters).
        </p>
      </div>

      <div className="border-t border-border/50" />

      {/* Creating an Agent */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Creating an Agent
        </h2>
        <p className="text-muted-foreground">
          At minimum, an agent needs a <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">model</code> and a{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">description</code>. The
          description acts as the system prompt and defines what the agent does.
          Import from <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">kern</code>, not{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">agno</code>.
        </p>
        <CodeBlock
          code={basicAgentCode}
          language="python"
          filename="agent.py"
        />
      </section>

      <div className="border-t border-border/50" />

      {/* Agent Configuration */}
      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Agent Configuration
          </h2>
          <p className="text-muted-foreground">
            Agents accept several configuration parameters that control behavior,
            output format, and available capabilities.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50 text-left">
                <th className="pb-3 pr-4 font-semibold text-foreground">
                  Parameter
                </th>
                <th className="pb-3 pr-4 font-semibold text-foreground">
                  Type
                </th>
                <th className="pb-3 font-semibold text-foreground">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              {parameters.map((param) => (
                <tr
                  key={param.name}
                  className="border-b border-border/30"
                >
                  <td className="py-3 pr-4">
                    <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-kern-light">
                      {param.name}
                    </code>
                  </td>
                  <td className="py-3 pr-4 text-muted-foreground">
                    {param.type}
                  </td>
                  <td className="py-3 text-muted-foreground">
                    {param.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <CodeBlock
          code={fullAgentCode}
          language="python"
          filename="configured_agent.py"
        />
      </section>

      <div className="border-t border-border/50" />

      {/* Running an Agent */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Running an Agent
        </h2>
        <p className="text-muted-foreground">
          Kern provides two ways to run an agent.{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">agent.run()</code> executes
          synchronously and returns a complete{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">RunOutput</code> object.{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">agent.run_stream()</code>{" "}
          yields chunks as tokens arrive — ideal for interactive UIs.
        </p>
        <CodeBlock
          code={runAgentCode}
          language="python"
          filename="run.py"
        />

        <div className="space-y-2">
          <h3 className="text-lg font-semibold tracking-tight">
            The RunOutput Object
          </h3>
          <p className="text-muted-foreground">
            Both <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">run()</code> and{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">run_stream()</code> produce a{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">RunOutput</code> with these
            attributes:
          </p>
          <CodeBlock
            code={runOutputCode}
            language="python"
            filename="run_output.py"
          />
        </div>
      </section>

      <div className="border-t border-border/50" />

      {/* Structured Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Structured Output
        </h2>
        <div className="flex items-center gap-2">
          <Badge variant="secondary">output_schema</Badge>
          <Badge variant="outline">Template-Based</Badge>
        </div>
        <p className="text-muted-foreground">
          Pass a Pydantic model as{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">output_schema</code> to get
          typed, validated responses. Unlike Agno's{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">response_model</code>, Kern uses{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">output_schema</code> and defaults
          to JSON mode enabled. Instead of sending raw JSON Schema to the model, Kern generates
          fill-in-the-blank templates — which dramatically improves reliability on
          small models (1-7B parameters) that struggle with complex schema instructions.
        </p>
        <CodeBlock
          code={structuredOutputCode}
          language="python"
          filename="structured.py"
        />
        <p className="text-sm text-muted-foreground">
          The result's <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">.content</code> is a
          validated Pydantic object. Kern handles prompt construction, extraction,
          and automatic JSON repair behind the scenes.
        </p>
      </section>

      <div className="border-t border-border/50" />

      {/* Tools */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Tools</h2>
        <p className="text-muted-foreground">
          Tools give agents the ability to take actions beyond text generation —
          searching the web, running calculations, querying databases, and more.
          Pass a list of tool instances to the{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">tools</code> parameter. Set{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">show_tool_calls=True</code> to
          include tool call details in the response.
        </p>
        <CodeBlock
          code={toolsCode}
          language="python"
          filename="tools.py"
        />
      </section>

      <div className="border-t border-border/50" />

      {/* Agent Teams */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Agent Teams
        </h2>
        <p className="text-muted-foreground">
          Combine multiple agents into a{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">Team</code> to tackle complex
          tasks. Each agent has its own role, model, and tools. The team
          coordinator manages routing, context sharing, and result aggregation.
        </p>
        <CodeBlock
          code={agentTeamsCode}
          language="python"
          filename="team.py"
        />
        <p className="text-sm text-muted-foreground">
          Teams can include agents with different models — for example, a
          lightweight local model for research and a larger model for writing.
          The team runs agents in sequence by default, passing context between them.
        </p>
      </section>
    </div>
  );
}
