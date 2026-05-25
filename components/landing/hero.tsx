"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/docs/code-block";

function TerminalAnimation() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setStep(1), 800);
    const t2 = setTimeout(() => setStep(2), 2000);
    const t3 = setTimeout(() => setStep(3), 3500);
    const t4 = setTimeout(() => setStep(4), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  return (
    <div className="min-w-0 rounded-xl border border-border/50 bg-[#09090b] shadow-2xl text-left overflow-hidden h-full flex flex-col font-mono text-sm">
      <div className="flex items-center gap-2 border-b border-border/50 bg-muted/20 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="size-3 rounded-full bg-red-500/80" />
          <div className="size-3 rounded-full bg-yellow-500/80" />
          <div className="size-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 text-xs text-muted-foreground">Terminal</div>
      </div>
      <div className="p-4 flex-1 text-zinc-300 flex flex-col gap-2 overflow-x-auto">
        <div className="flex items-center gap-2">
          <span className="text-kern-light">~</span>
          <span>$</span>
          {step >= 0 && (
            <span className="inline-block relative">
               pip install kern-ai
               {step === 0 && <span className="absolute -right-2 top-0 bottom-0 w-2 bg-zinc-300 animate-pulse"></span>}
            </span>
          )}
        </div>
        {step >= 1 && (
          <div className="text-zinc-500 whitespace-nowrap">
            Collecting kern...
          </div>
        )}
        {step >= 2 && (
          <div className="text-zinc-500 whitespace-nowrap">
            Downloading kern-0.1.0-py3-none-any.whl (42 kB)
            <br />
            <span className="text-green-500">━━━━━━━━━━━━━━━━━━━━</span> 42/42 kB 2.1 MB/s
          </div>
        )}
        {step >= 3 && (
          <div className="text-zinc-500">
            Installing collected packages: kern
          </div>
        )}
        {step >= 4 && (
          <div className="text-zinc-300">
            Successfully installed kern-0.1.0
            <br />
            <div className="mt-2 flex items-center gap-2">
              <span className="text-kern-light">~</span>
              <span>$</span>
              <span className="inline-block w-2 h-4 bg-zinc-300 animate-pulse"></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}


const agentCode = `from kern import Agent
from kern.models.openai import OpenAIChat

agent = Agent(
    model=OpenAIChat(
        id="local-model",
        base_url="http://localhost:8080/v1",
    ),
    output_schema=MovieReview,
)

result = agent.run("Review The Matrix")
print(result.content)`;

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Grid background */}
      <div className="bg-grid-pattern absolute inset-0 hero-mask" />

      {/* Purple radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-kern/10 blur-[150px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-kern/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pt-28 lg:px-8 lg:pt-36">
        <div className="text-center">
          <Badge
            variant="outline"
            className="mb-8 border-kern/30 bg-kern/8 px-4 py-1.5 text-kern-light"
          >
            <Sparkles className="mr-2 h-3.5 w-3.5" />
            Open Source &middot; Apache 2.0
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-8xl">
            Small Models.
            <br />
            <span className="text-gradient">Big Impact.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
            An agent framework purpose-built for{" "}
            <span className="font-medium text-white">1-7B parameter models</span>.
            Template-based structured output, automatic JSON repair, and
            workflow visualization — all from a few lines of Python.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/docs/getting-started"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-kern px-8 text-sm font-semibold text-white shadow-lg shadow-kern/25 transition-all hover:bg-kern-light hover:shadow-kern/40"
            >
              Get Started
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://github.com/ndxrocks/kern"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 text-sm font-semibold text-zinc-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              Star on GitHub
            </a>
          </div>
        </div>

        {/* Code examples — hidden on small screens, stacked on md, side-by-side on lg */}
        <div className="mx-auto mt-16 max-w-4xl">
          {/* Mobile: simple install command */}
          <div className="md:hidden rounded-lg border border-border/50 bg-[#0D0D14] px-4 py-3 font-mono text-sm text-zinc-300">
            <span className="text-kern-light">$</span> pip install kern-ai
          </div>
          {/* md+: full terminal + code block */}
          <div className="hidden md:grid gap-4 lg:grid-cols-[1fr_2fr]">
            <TerminalAnimation />
            <CodeBlock
              code={agentCode}
              language="python"
              filename="agent.py"
              className="text-left"
            />
          </div>
        </div>

        {/* Stats / social proof strip */}
        <div className="mx-auto mt-16 flex max-w-2xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-zinc-500">
          <span className="flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-green-500" />
            Python 3.9+
          </span>
          <span>Fork of Agno v2.5</span>
          <span>Apache 2.0 License</span>
          <span>Works with any OpenAI-compatible API</span>
        </div>
      </div>
    </section>
  );
}
