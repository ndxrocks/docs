import { CodeBlock } from "@/components/docs/code-block";

export default function WorkflowsPage() {
  return (
    <div className="space-y-10">
      {/* Title & Overview */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Workflows</h1>
        <p className="mt-3 text-muted-foreground leading-7">
          Kern workflows let you compose multi-step agent pipelines with
          sequential execution, conditional branching, routing, loops, and
          parallel execution. Chain agents together to solve complex tasks that
          no single agent can handle alone.
        </p>
      </div>

      {/* Creating a Workflow */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Creating a Workflow
        </h2>
        <p className="text-muted-foreground leading-7">
          A workflow is defined by a name and an ordered list of steps. Each
          step delegates to an <span className="text-gradient font-medium">Agent</span> that
          performs a specific task. Steps execute sequentially by default -- the
          output of one step flows as context into the next.
        </p>
        <CodeBlock
          filename="research_write.py"
          language="python"
          code={`from kern import Agent
from kern.workflow import Workflow
from kern.workflow.step import Step

researcher = Agent(name="Researcher", model=..., description="Research topics")
writer = Agent(name="Writer", model=..., description="Write articles")

workflow = Workflow(
    name="Research & Write",
    steps=[
        Step(name="Research", agent=researcher),
        Step(name="Write", agent=writer),
    ],
)

result = workflow.run("Write about quantum computing")`}
        />
        <p className="text-muted-foreground leading-7">
          The workflow passes the initial prompt to the first step, then pipes
          each step&apos;s output forward as input to the next step in the list.
        </p>
      </section>

      {/* Step Types */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">Step Types</h2>
        <p className="text-muted-foreground leading-7">
          Beyond basic sequential steps, Kern provides composable step types
          that let you express branching, routing, repetition, and concurrency
          within a single workflow definition.
        </p>

        {/* Step */}
        <div className="space-y-3">
          <h3 className="text-xl font-medium">Step</h3>
          <p className="text-muted-foreground leading-7">
            The fundamental building block. A <span className="text-gradient font-medium">Step</span> delegates
            execution to a single agent. Every workflow is composed of one or
            more steps arranged in the desired order.
          </p>
          <CodeBlock
            filename="basic_step.py"
            language="python"
            code={`from kern.workflow.step import Step

step = Step(name="Analyze", agent=analyst_agent)`}
          />
        </div>

        {/* Condition */}
        <div className="space-y-3">
          <h3 className="text-xl font-medium">Condition</h3>
          <p className="text-muted-foreground leading-7">
            A <span className="text-gradient font-medium">Condition</span> evaluates an expression against the
            current workflow state and branches to one of two sub-steps. Use it
            to implement quality gates, approval flows, or any binary
            decision logic.
          </p>
          <CodeBlock
            filename="condition.py"
            language="python"
            code={`from kern.workflow.step import Condition

Condition(
    name="Quality Check",
    condition="quality_score > 7",
    true_step=Step(name="Publish", agent=publisher),
    false_step=Step(name="Revise", agent=editor),
)`}
          />
        </div>

        {/* Router */}
        <div className="space-y-3">
          <h3 className="text-xl font-medium">Router</h3>
          <p className="text-muted-foreground leading-7">
            A <span className="text-gradient font-medium">Router</span> inspects the workflow state and
            dynamically selects which agent to run next from a map of named
            destinations. This is useful when the next step depends on a
            categorical value such as a topic, language, or intent.
          </p>
          <CodeBlock
            filename="router.py"
            language="python"
            code={`from kern.workflow.step import Router

Router(
    name="Route by Topic",
    key="topic",
    routes={
        "tech": Step(name="Tech Writer", agent=tech_writer),
        "science": Step(name="Science Writer", agent=science_writer),
        "finance": Step(name="Finance Writer", agent=finance_writer),
    },
)`}
          />
        </div>

        {/* Loop */}
        <div className="space-y-3">
          <h3 className="text-xl font-medium">Loop</h3>
          <p className="text-muted-foreground leading-7">
            A <span className="text-gradient font-medium">Loop</span> repeats
            a step (or sub-workflow) until a termination condition is met.
            Optionally set <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm text-kern-light">max_iterations</code> as a safety bound
            to prevent infinite loops.
          </p>
          <CodeBlock
            filename="loop.py"
            language="python"
            code={`from kern.workflow.step import Loop

Loop(
    name="Refine Until Ready",
    step=Step(name="Improve", agent=editor),
    until="review_score >= 8",
    max_iterations=5,
)`}
          />
        </div>

        {/* Parallel */}
        <div className="space-y-3">
          <h3 className="text-xl font-medium">Parallel</h3>
          <p className="text-muted-foreground leading-7">
            A <span className="text-gradient font-medium">Parallel</span> step
            runs multiple agents simultaneously and collects their outputs
            before continuing. This is ideal for independent sub-tasks such as
            researching different topics in parallel or generating multiple
            content variants at once.
          </p>
          <CodeBlock
            filename="parallel.py"
            language="python"
            code={`from kern.workflow.step import Parallel

workflow = Workflow(
    name="Multi-Research",
    steps=[
        Parallel(
            name="Research Topics",
            steps=[
                Step(name="Tech Research", agent=tech_researcher),
                Step(name="Science Research", agent=science_researcher),
            ],
        ),
        Step(name="Synthesize", agent=writer),
    ],
)`}
          />
        </div>

        {/* Combined example */}
        <div className="space-y-3">
          <h3 className="text-xl font-medium">Combining Step Types</h3>
          <p className="text-muted-foreground leading-7">
            Step types compose freely. The example below chains a research step,
            a condition branch, and parallel summarization into a single
            pipeline.
          </p>
          <CodeBlock
            filename="pipeline.py"
            language="python"
            code={`from kern.workflow.step import Condition, Parallel

workflow = Workflow(
    name="Content Pipeline",
    steps=[
        Step(name="Research", agent=researcher),
        Condition(
            name="Quality Check",
            condition="quality_score > 7",
            true_step=Step(name="Publish", agent=publisher),
            false_step=Step(name="Revise", agent=editor),
        ),
    ],
)`}
          />
        </div>
      </section>

      {/* Running a Workflow */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Running a Workflow
        </h2>
        <p className="text-muted-foreground leading-7">
          Call <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm text-kern-light">workflow.run()</code> with
          an initial prompt to execute the full pipeline. The method returns
          a result object containing the final output along with metadata from
          every step that was executed.
        </p>
        <CodeBlock
          filename="run_workflow.py"
          language="python"
          code={`result = workflow.run("Write about quantum computing")

# Access the final output
print(result.output)

# Inspect individual step results
for step_result in result.steps:
    print(f"{step_result.name}: {step_result.output[:80]}...")`}
        />
        <p className="text-muted-foreground leading-7">
          You can also pass additional context or configuration via keyword
          arguments to <code className="rounded bg-white/5 px-1.5 py-0.5 text-sm text-kern-light">run()</code> to
          control model parameters, tool access, or memory scope per execution.
        </p>
      </section>

      {/* Visualization */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Visualization
        </h2>
        <p className="text-muted-foreground leading-7">
          Kern can render an interactive diagram of any workflow, showing step
          types, data flow, and branching logic. This is especially helpful
          when debugging complex pipelines or onboarding new team members.
        </p>
        <p className="text-muted-foreground leading-7">
          See the{" "}
          <a
            href="/docs/visualization"
            className="text-kern-light underline underline-offset-4 hover:text-kern-light/80 transition-colors"
          >
            Visualization docs
          </a>{" "}
          for setup instructions and usage examples.
        </p>
      </section>
    </div>
  );
}
