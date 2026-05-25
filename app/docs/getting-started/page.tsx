import { CodeBlock } from "@/components/docs/code-block";
import Link from "next/link";

const installCode = `pip install kern-ai`;

const quickStartCode = `from kern import Agent
from kern.models.openai import OpenAIChat

agent = Agent(
    model=OpenAIChat(
        id="local-model",
        base_url="http://localhost:8080/v1",
    ),
    description="You are a helpful assistant.",
)

result = agent.run("What is quantum computing?")
print(result.content)`;

const structuredOutputCode = `from pydantic import BaseModel, Field

class ResearchTopic(BaseModel):
    title: str = Field(description="Topic title")
    summary: str = Field(description="Brief summary")
    difficulty: str = Field(description="Beginner, Intermediate, or Advanced")

agent = Agent(
    model=OpenAIChat(id="local-model", base_url="http://localhost:8080/v1"),
    output_schema=ResearchTopic,
)

result = agent.run("Explain quantum entanglement")
print(result.content)  # ResearchTopic object`;

const nextSteps = [
  {
    title: "Agents",
    description: "Learn how to configure agents with custom instructions, memory, and reasoning strategies.",
    href: "/docs/agents",
  },
  {
    title: "Models",
    description: "Explore supported model providers and how to connect local and remote LLMs.",
    href: "/docs/models",
  },
  {
    title: "Tools",
    description: "Give your agents abilities — from web search to database queries and custom functions.",
    href: "/docs/tools",
  },
  {
    title: "Workflows",
    description: "Chain agents together into multi-step pipelines with conditional routing and loops.",
    href: "/docs/workflows",
  },
];

export default function GettingStartedPage() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Getting <span className="text-gradient">Started</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Build production-ready AI agents optimized for small language models.
          Kern gives you structured outputs, automatic JSON repair, and workflow
          visualization out of the box.
        </p>
      </div>

      <div className="border-t border-border/50" />

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <p className="text-muted-foreground">
          Kern requires <span className="text-foreground font-medium">Python 3.9+</span>. Install it with pip:
        </p>
        <CodeBlock code={installCode} language="bash" filename="terminal" />
      </section>

      <div className="border-t border-border/50" />

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Quick Start</h2>
        <p className="text-muted-foreground">
          Create your first agent in a few lines of code. The example below uses a
          local model served via an OpenAI-compatible API (such as llama.cpp,
          Ollama, or vLLM) running on{" "}
          <span className="text-foreground font-medium">localhost:8080</span>.
        </p>
        <CodeBlock
          code={quickStartCode}
          language="python"
          filename="agent.py"
        />
        <p className="text-sm text-muted-foreground">
          The agent sends your prompt to the local model, handles the response, and
          returns a structured result. No API keys needed for local models.
        </p>
      </section>

      <div className="border-t border-border/50" />

      {/* Structured Output */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Using Structured Output
        </h2>
        <p className="text-muted-foreground">
          Kern uses template-based structured output to ensure small models return
          valid JSON. Define a{" "}
          <span className="text-foreground font-medium">Pydantic</span> model and
          pass it as{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
            output_schema
          </code>{" "}
          — Kern handles prompt construction, extraction, and automatic JSON
          repair.
        </p>
        <CodeBlock
          code={structuredOutputCode}
          language="python"
          filename="structured.py"
        />
        <p className="text-sm text-muted-foreground">
          The result&apos;s <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">.content</code> is
          a validated Pydantic object — ready to use in your application without
          manual parsing.
        </p>
      </section>

      <div className="border-t border-border/50" />

      {/* Next Steps */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Next Steps</h2>
          <p className="text-muted-foreground">
            Dive deeper into Kern&apos;s capabilities.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {nextSteps.map((step) => (
            <Link
              key={step.href}
              href={step.href}
              className="group rounded-lg border border-border/50 bg-card p-5 transition-colors hover:border-kern/30 hover:bg-card/80"
            >
              <h3 className="font-semibold text-foreground group-hover:text-kern transition-colors">
                {step.title}
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {step.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
