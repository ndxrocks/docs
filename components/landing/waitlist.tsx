"use client";

import { useState } from "react";
import { Loader2, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export function Waitlist() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email");
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
      {/* Purple glow behind */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-kern/8 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-2xl text-center">
        <Badge
          variant="outline"
          className="mb-6 border-kern/30 bg-kern/8 px-4 py-1.5 text-kern-light"
        >
          <Rocket className="mr-2 h-3.5 w-3.5" />
          Coming Soon
        </Badge>

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          End-to-End <span className="text-gradient">Agent Infrastructure</span>
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-zinc-400">
          Fully managed agent infrastructure — deployment, monitoring,
          scaling, and observability for agents powered by small models.
          Join the waitlist to be first in line.
        </p>

        <div className="mx-auto mt-8 max-w-md">
          {submitted ? (
            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-6">
              <p className="font-semibold text-green-400">You&apos;re on the list!</p>
              <p className="mt-1 text-sm text-zinc-400">
                We&apos;ll notify you when we launch.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setError(""); }}
                  className="h-12 border-white/10 bg-white/5 text-white placeholder:text-zinc-600 focus-visible:ring-kern"
                />
                {error && (
                  <p className="mt-1.5 text-xs text-red-400">{error}</p>
                )}
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-12 bg-kern px-6 text-white shadow-lg shadow-kern/20 hover:bg-kern-light"
              >
                {isSubmitting ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Join Waitlist"
                )}
              </Button>
            </form>
          )}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-zinc-600">
          <span>Hosted agent deployment</span>
          <span className="text-zinc-800">&middot;</span>
          <span>Real-time monitoring</span>
          <span className="text-zinc-800">&middot;</span>
          <span>Auto-scaling</span>
          <span className="text-zinc-800">&middot;</span>
          <span>Small model optimization</span>
        </div>
      </div>
    </section>
  );
}
