import { CodeBlock } from "@/components/docs/code-block";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function VisualizationPage() {
  return (
    <div className="space-y-8">
      <div>
        <Badge variant="outline" className="mb-3 border-kern/30 bg-kern/5 text-kern-light">
          New Feature
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight">Workflow Visualization</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Generate Mermaid flowcharts from your workflow definitions. Visualize agent pipelines,
          conditional branching, parallel execution, and more — directly from code.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Basic Visualization</h2>
        <p className="text-muted-foreground">
          Every workflow has a <code className="rounded bg-accent px-1.5 py-0.5 text-sm text-kern-light">.visualize()</code> method
          that generates a Mermaid flowchart from its steps.
        </p>
        <CodeBlock
          code={`from kern import Agent
from kern.workflow import Workflow
from kern.workflow.step import Step, Condition

researcher = Agent(name="Researcher", ...)
writer = Agent(name="Writer", ...)
editor = Agent(name="Editor", ...)

workflow = Workflow(
    name="Content Pipeline",
    steps=[
        Step(name="Research", agent=researcher),
        Step(name="Draft", agent=writer),
        Condition(
            name="Quality Check",
            condition="quality_score > 7",
            true_step=Step(name="Publish", agent=editor),
            false_step=Step(name="Revise", agent=writer),
        ),
    ],
)

# Generate Mermaid text
mermaid_text = workflow.visualize(output_file=None)
print(mermaid_text)`}
          language="python"
          filename="visualize.py"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Export Options</h2>
        <p className="text-muted-foreground">
          Visualizations can be exported in multiple formats — Mermaid text, SVG, PNG, or displayed interactively.
        </p>
        <CodeBlock
          code={`# Export as PNG (uses mermaid.ink API)
workflow.visualize(
    output_file="pipeline.png",
    theme="default",
)

# Export as SVG
workflow.visualize(
    output_file="pipeline.svg",
    theme="default",
)

# Show interactively (opens with Pillow)
workflow.visualize(show=True)

# Get raw Mermaid text
mermaid_code = workflow.visualize(output_file=None)`}
          language="python"
          filename="export.py"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Color Themes</h2>
        <p className="text-muted-foreground">
          Three built-in themes for different contexts — default (colorful), monotone, and black.
        </p>
        <CodeBlock
          code={`# Default theme — colorful nodes
workflow.visualize(output_file="pipeline.png", theme="default")

# Monotone theme — single color
workflow.visualize(output_file="pipeline.png", theme="monotone")

# Black theme — dark backgrounds
workflow.visualize(output_file="pipeline.png", theme="black")`}
          language="python"
          filename="themes.py"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Supported Step Types</h2>
        <p className="text-muted-foreground">
          All six workflow step types are fully supported in visualizations:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { type: "Step", desc: "Single agent execution — shown as a rounded rectangle" },
            { type: "Steps", desc: "Sequential steps — chained linearly" },
            { type: "Condition", desc: "Branching logic — shown with true/false paths" },
            { type: "Router", desc: "Multi-way routing — fan-out to different agents" },
            { type: "Loop", desc: "Repeated execution — shown with a loop-back arrow" },
            { type: "Parallel", desc: "Concurrent execution — shown as parallel branches" },
          ].map((item) => (
            <div key={item.type} className="rounded-lg border border-border/50 bg-card/50 p-4">
              <p className="font-mono text-sm font-medium text-kern-light">{item.type}</p>
              <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Custom Ink Server</h2>
        <p className="text-muted-foreground">
          By default, visualization uses the public mermaid.ink API. For self-hosted deployments,
          set the <code className="rounded bg-accent px-1.5 py-0.5 text-sm text-kern-light">MERMAID_INK_SERVER</code> environment
          variable or pass it directly.
        </p>
        <CodeBlock
          code={`# Via environment variable
import os
os.environ["MERMAID_INK_SERVER"] = "https://your-ink-server.com"

# Or pass directly
workflow.visualize(
    output_file="pipeline.png",
    ink_server="https://your-ink-server.com",
)`}
          language="python"
          filename="config.py"
        />
      </div>

      <div className="rounded-lg border border-kern/20 bg-kern/5 p-5">
        <h3 className="font-semibold text-kern-light">Next Step</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Learn how to build the workflows that power these visualizations in the{" "}
          <Link href="/docs/workflows" className="text-kern-light hover:underline">
            Workflows guide
          </Link>.
        </p>
      </div>
    </div>
  );
}
