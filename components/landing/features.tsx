import {
  Zap,
  Shield,
  GitBranch,
  Eye,
  Wrench,
  Database,
  Cpu,
  Layers,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Template-Based Structured Output",
    description:
      "Fill-in-the-blank templates instead of JSON Schema. Purpose-built so small models actually produce valid structured data.",
  },
  {
    icon: Shield,
    title: "Automatic JSON Repair",
    description:
      "Built-in repair with LaTeX protection. Handles malformed output, leading text, and escape corruption — automatically.",
  },
  {
    icon: GitBranch,
    title: "Workflow Engine",
    description:
      "Build complex multi-step agent pipelines with Step, Condition, Router, Loop, and Parallel execution patterns.",
  },
  {
    icon: Eye,
    title: "Workflow Visualization",
    description:
      "Generate Mermaid flowcharts from your workflows. Export as SVG, PNG, or display interactively with three color themes.",
  },
  {
    icon: Wrench,
    title: "Rich Tool Ecosystem",
    description:
      "DuckDuckGo search, Calculator, Python execution, MCP tools, and more. Build custom tools with simple decorators.",
  },
  {
    icon: Cpu,
    title: "Multi-Model Support",
    description:
      "OpenAI, Anthropic, Google, Ollama, Groq — or any OpenAI-compatible endpoint. Run local or in the cloud.",
  },
  {
    icon: Database,
    title: "Storage & Knowledge",
    description:
      "Postgres, SQLite, Redis, MongoDB backends. Knowledge bases with pgvector, Chroma, LanceDB, and Qdrant.",
  },
  {
    icon: Layers,
    title: "Agent Teams",
    description:
      "Coordinate multiple agents. Route tasks, share context, and build complex multi-agent systems with teams.",
  },
];

export function Features() {
  return (
    <section className="relative border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
      <div className="bg-grid-pattern absolute inset-0 opacity-50" />

      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-kern-light">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need for{" "}
            <span className="text-gradient">small model agents</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Production-ready features optimized for models that run on consumer hardware — not 200B parameter clusters.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-white/5 bg-white/[0.02] transition-all hover:border-kern/20 hover:bg-kern/[0.04]"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-kern/10 text-kern-light transition-colors group-hover:bg-kern/20">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-sm font-semibold text-white">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-zinc-500">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
