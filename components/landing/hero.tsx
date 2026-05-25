"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function CodeEditor() {
  return (
    <div className="flex-1 p-4 font-mono text-[11px] sm:text-xs overflow-y-auto bg-[#1a1b26] text-[#a9b1d6] border-b border-black/30 select-none leading-relaxed min-h-[220px] whitespace-pre">
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">1</span>
        <span className="text-[#bb9af7]">from</span> pydantic <span className="text-[#bb9af7]">import</span> BaseModel, Field
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">2</span>
        <span className="text-[#bb9af7]">from</span> kern <span className="text-[#bb9af7]">import</span> Agent
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">3</span>
        <span className="text-[#bb9af7]">from</span> kern.models.openai <span className="text-[#bb9af7]">import</span> OpenAIChat
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">4</span>
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">5</span>
        <span className="text-[#bb9af7]">class</span> <span className="text-[#2ac3de]">MovieReview</span>(<span className="text-[#e0af68]">BaseModel</span>):
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">6</span>
        {"    "}title: <span className="text-[#2ac3de]">str</span>
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">7</span>
        {"    "}rating: <span className="text-[#2ac3de]">float</span> = <span className="text-[#7aa2f7]">Field</span>(description=<span className="text-[#9ece6a]">&quot;1-10&quot;</span>)
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">8</span>
        {"    "}genre: <span className="text-[#2ac3de]">str</span>
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">9</span>
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">10</span>
        agent = <span className="text-[#7aa2f7]">Agent</span>(
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">11</span>
        {"    "}model=<span className="text-[#7aa2f7]">OpenAIChat</span>(id=<span className="text-[#9ece6a]">&quot;local-llama&quot;</span>),
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">12</span>
        {"    "}output_schema=MovieReview,
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">13</span>
        )
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">14</span>
        result = agent.<span className="text-[#7aa2f7]">run</span>(<span className="text-[#9ece6a]">&quot;Review The Matrix&quot;</span>)
      </div>
      <div>
        <span className="text-[#565f89] mr-4 inline-block text-right w-4 select-none">15</span>
        <span className="text-[#2ac3de]">print</span>(result.content)
      </div>
    </div>
  );
}

function TerminalPanel() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev < 4 ? prev + 1 : 0));
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[180px] flex flex-col bg-[#16161e] text-[10px] sm:text-xs font-mono select-none">
      {/* Panel header tabs */}
      <div className="flex items-center gap-4 bg-[#1f2335] px-4 py-1.5 border-t border-b border-black/30 text-[#565f89] font-sans text-[10px] font-medium">
        <span className="hover:text-zinc-300 cursor-pointer">PROBLEMS</span>
        <span className="hover:text-zinc-300 cursor-pointer">OUTPUT</span>
        <span className="hover:text-zinc-300 cursor-pointer">DEBUG CONSOLE</span>
        <span className="text-[#a9b1d6] border-b border-kern pb-0.5 cursor-pointer font-bold">TERMINAL</span>
      </div>
      
      {/* Terminal console */}
      <div className="p-4 flex-grow overflow-y-auto flex flex-col gap-1.5 text-[#a9b1d6] scrollbar-none">
        <div className="flex items-center gap-1.5">
          <span className="text-[#9ece6a]">~</span>
          <span className="text-[#2ac3de]">$</span>
          <span>python agent.py</span>
          {step === 0 && <span className="w-1.5 h-3.5 bg-[#a9b1d6] animate-pulse ml-0.5" />}
        </div>
        
        {step >= 1 && (
          <div className="text-[#565f89]">
            [Kern] Validating output against MovieReview schema...
          </div>
        )}
        
        {step >= 2 && (
          <div className="text-[#ff9e64]">
            [Kern] Warning: Malformed JSON output. Missing matching closing brace &apos;&#123;&apos;.
          </div>
        )}
        
        {step >= 3 && (
          <div className="text-[#bb9af7]">
            [Kern] Healing output using automatic JSON repair engine...
          </div>
        )}
        
        {step >= 4 && (
          <div className="text-[#9ece6a]">
            [Kern] Success! Validated output returned:
            <pre className="text-[#a9b1d6] mt-1 pl-4 border-l border-[#565f89] text-[10px]">
              {`{
  "title": "The Matrix",
  "rating": 9.5,
  "genre": "Sci-Fi"
}`}
            </pre>
            <div className="flex items-center gap-1.5 mt-2">
              <span className="text-[#9ece6a]">~</span>
              <span className="text-[#2ac3de]">$</span>
              <span className="w-1.5 h-3.5 bg-[#a9b1d6] animate-pulse" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function VSCodeMockup() {
  return (
    <div className="w-full max-w-xl rounded-xl border border-white/5 bg-[#1a1b26] shadow-2xl overflow-hidden flex flex-col font-mono h-[430px]">
      {/* VS Code title bar */}
      <div className="flex items-center justify-between border-b border-black/40 bg-[#1f2335] px-4 py-2 text-xs text-[#a9b1d6] font-sans">
        <div className="flex gap-1.5">
          <div className="size-2.5 rounded-full bg-[#ff5f56]" />
          <div className="size-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="size-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[10px] sm:text-[11px] text-[#a9b1d6]/80 select-none">agent.py - kern-docs - VS Code</div>
        <div className="w-10" />
      </div>

      {/* Editor tabs */}
      <div className="flex bg-[#1f2335] border-b border-black/40 font-sans text-[10px] text-[#a9b1d6] select-none">
        <div className="bg-[#1a1b26] border-r border-[#15161e] px-4 py-1.5 border-t border-t-kern text-zinc-100 flex items-center gap-1.5">
          <span className="text-orange-500 text-[9px]">Py</span>
          <span>agent.py</span>
        </div>
        <div className="px-4 py-1.5 hover:bg-[#1a1b26]/50 cursor-pointer flex items-center gap-1.5 text-[#a9b1d6]/60">
          <span className="text-[#565f89] text-[9px]">{}</span>
          <span>package.json</span>
        </div>
      </div>

      {/* Code Editor body */}
      <CodeEditor />

      {/* Terminal panel */}
      <TerminalPanel />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Grid background */}
      <div className="bg-grid-pattern absolute inset-0 hero-mask" />

      {/* Purple radial glow */}
      <div className="pointer-events-none absolute left-1/3 top-0 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-kern/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-0 top-1/4 -z-10 h-[350px] w-[350px] rounded-full bg-kern/5 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pt-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, description, actions */}
          <div className="lg:col-span-7 flex flex-col text-left items-start">
            <Badge
              variant="outline"
              className="mb-6 border-kern/30 bg-kern/8 px-4 py-1.5 text-kern-light"
            >
              <Sparkles className="mr-2 h-3.5 w-3.5" />
              Open Source &middot; Apache 2.0
            </Badge>

            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold tracking-tight text-white leading-[1.1]">
              Small Models.
              <br />
              <span className="text-gradient">Big Impact.</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              An agent framework purpose-built for{" "}
              <span className="font-medium text-white">1-7B parameter models</span>.
              Template-based structured output, automatic JSON repair, and
              workflow visualization — all from a few lines of Python.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href="/docs/getting-started"
                className="group inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-kern px-6 text-sm font-semibold text-white shadow-lg shadow-kern/25 transition-all hover:bg-kern-light hover:shadow-kern/40"
              >
                Get Started
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="https://github.com/ndxrocks/kern"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 text-sm font-semibold text-zinc-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
              >
                <svg className="size-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                Star on GitHub
              </a>
            </div>

            {/* Social Specs Strip */}
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-xs text-zinc-500">
              <span className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-green-500/80" />
                Python 3.9+
              </span>
              <span>•</span>
              <span>Fork of Agno v2.5</span>
              <span>•</span>
              <span>Apache 2.0 License</span>
            </div>
          </div>

          {/* Right Column: Unified VS Code Code/Terminal Mockup */}
          <div className="hidden lg:flex lg:col-span-5 justify-center w-full min-w-0">
            <VSCodeMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
