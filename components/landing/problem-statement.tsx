"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Animated counter ─── */
function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
  startOnView = true,
}: {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  startOnView?: boolean;
}) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(!startOnView);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!startOnView || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHasStarted(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnView]);

  useEffect(() => {
    if (!hasStarted) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.round(eased * end));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [hasStarted, end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

/* ─── Live error ticker ─── */
const ERROR_MESSAGES = [
  { type: "JSON", msg: 'Expected "}" but found EOF at position 247' },
  { type: "Schema", msg: "Missing required field: confidence" },
  { type: "Type", msg: 'Field "rating" expected float, got string' },
  { type: "JSON", msg: "Unterminated string literal at line 3" },
  { type: "Schema", msg: "Extra field: reasoning (not in schema)" },
  { type: "Parse", msg: "Markdown fence leaked into JSON output" },
  { type: "JSON", msg: "Trailing comma after last object property" },
  { type: "Type", msg: 'Field "label" expected enum, got freeform' },
];

function ErrorTicker() {
  const [errors, setErrors] = useState<
    { id: number; type: string; msg: string; fading: boolean }[]
  >([]);
  const counterRef = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const template =
        ERROR_MESSAGES[counterRef.current % ERROR_MESSAGES.length];
      const newErr = {
        id: counterRef.current,
        ...template,
        fading: false,
      };
      counterRef.current += 1;

      setErrors((prev) => {
        const next = [newErr, ...prev].slice(0, 5);
        return next;
      });

      // fade out the oldest visible error
      setTimeout(() => {
        setErrors((prev) =>
          prev.map((e, i) => (i === prev.length - 1 ? { ...e, fading: true } : e))
        );
      }, 2200);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-1.5 font-mono text-[11px] leading-snug min-h-[120px]">
      {errors.map((err) => (
        <div
          key={err.id}
          className="flex items-start gap-2 transition-all duration-500"
          style={{ opacity: err.fading ? 0 : 1, transform: err.fading ? "translateY(4px)" : "none" }}
        >
          <span className="shrink-0 mt-0.5 size-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-red-400/90">
            [{err.type}]{" "}
            <span className="text-red-400/60">{err.msg}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

/* ─── Main Section ─── */
export function ProblemStatement() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* section glow */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          left: "50%",
          top: "50%",
          marginLeft: -250,
          marginTop: -250,
          width: 500,
          height: 500,
          background: "#8A2EFF",
          filter: "blur(120px)",
          opacity: 0.15,
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 max-w-12 bg-gradient-to-r from-transparent to-kern/50" />
          <span className="text-xs uppercase tracking-[0.2em] text-kern-light/70 font-medium">
            The Problem
          </span>
          <div className="h-px flex-1 max-w-12 bg-gradient-to-l from-transparent to-kern/50" />
        </div>

        {/* The statement */}
        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
          <span className="text-white">Small models are </span>
          <span className="text-gradient">cheap.</span>
          <br />
          <span className="text-white/40">But they break.</span>
        </h2>

        <p className="mt-6 text-center text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
          Running 1-7B parameter models cuts your inference cost by{" "}
          <span className="font-semibold text-white">10-50×</span>. But smaller
          models produce malformed JSON, miss schema fields, and hallucinate
          structures that crash your pipeline.
        </p>

        {/* Evidence grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Failure rate */}
          <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 overflow-hidden transition-colors hover:border-red-500/20 hover:bg-red-500/[0.02]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-xs uppercase tracking-[0.15em] text-red-400/70 font-medium">
              Structured Output Failures
            </div>
            <div className="mt-4 text-5xl sm:text-6xl font-extrabold text-red-400 font-mono tabular-nums">
              <AnimatedCounter end={38} suffix="%" />
            </div>
            <p className="mt-3 text-sm text-zinc-500 leading-relaxed">
              of 3B model responses fail JSON schema validation on first attempt
              — missing fields, wrong types, malformed syntax.
            </p>
          </div>

          {/* Card 2: Live error feed */}
          <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 overflow-hidden transition-colors hover:border-orange-500/20 hover:bg-orange-500/[0.02]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-xs uppercase tracking-[0.15em] text-orange-400/70 font-medium mb-4">
              Typical Failure Modes
            </div>
            <ErrorTicker />
          </div>

          {/* Card 3: Cost comparison */}
          <div className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8 overflow-hidden transition-colors hover:border-emerald-500/20 hover:bg-emerald-500/[0.02]">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-xs uppercase tracking-[0.15em] text-emerald-400/70 font-medium">
              Cost Per 1M Tokens
            </div>
            <div className="mt-4 space-y-4">
              {/* GPT-4o */}
              <div>
                <div className="flex items-baseline justify-between text-sm mb-1.5">
                  <span className="text-zinc-400">GPT-4o</span>
                  <span className="font-mono text-zinc-300 font-semibold">$5.00</span>
                </div>
                <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-zinc-500 to-zinc-400"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
              {/* Llama 3B */}
              <div>
                <div className="flex items-baseline justify-between text-sm mb-1.5">
                  <span className="text-zinc-400">Llama 3B (local)</span>
                  <span className="font-mono text-emerald-400 font-semibold">$0.00</span>
                </div>
                <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400"
                    style={{ width: "3%" }}
                  />
                </div>
              </div>
              {/* Llama 7B */}
              <div>
                <div className="flex items-baseline justify-between text-sm mb-1.5">
                  <span className="text-zinc-400">Mistral 7B (hosted)</span>
                  <span className="font-mono text-emerald-400 font-semibold">$0.10</span>
                </div>
                <div className="h-2 rounded-full bg-white/[0.04] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400"
                    style={{ width: "5%" }}
                  />
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-emerald-400/60 font-medium">
              50× cheaper — if you can make them reliable.
            </p>
          </div>
        </div>

        {/* Bottom kicker */}
        <div className="mt-12 text-center">
          <p className="text-sm text-zinc-500 max-w-xl mx-auto">
            The savings are real. The reliability gap is the only thing standing
            between you and production-grade small model workflows.{" "}
            <span className="text-kern-light font-medium">
              Kern closes that gap.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
