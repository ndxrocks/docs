import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { CodeBlock } from "@/components/docs/code-block";
import { Mermaid } from "./mermaid";

export function CardGroup({ children, cols = 2 }: { children: React.ReactNode; cols?: number }) {
  const gridCols = cols === 3 ? "md:grid-cols-3" : cols === 4 ? "md:grid-cols-4" : "md:grid-cols-2";
  return (
    <div className={`grid gap-4 my-6 grid-cols-1 ${gridCols}`}>
      {children}
    </div>
  );
}

// Content uses paths like /agents/... but routes are /docs/agents/...
function fixHref(href: string): string {
  if (href.startsWith("/") && !href.startsWith("/docs/") && !href.startsWith("/docs")) {
    return "/docs" + href;
  }
  return href;
}

export function Card({ title, icon, href, children }: { title: string; icon?: string; href?: string; children?: React.ReactNode }) {
  const isExternal = href?.startsWith("http");
  const resolvedHref = href && !isExternal ? fixHref(href) : href;
  const Wrapper = href ? (isExternal ? "a" : Link) : "div";
  const props = href ? (isExternal ? { href, target: "_blank", rel: "noopener noreferrer" } : { href: resolvedHref }) : {};

  return (
    <Wrapper
      {...(props as any)}
      className="group block rounded-xl border border-white/10 bg-black/40 hover:bg-white/5 p-5 transition-all duration-200"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon && <span className="text-sm font-bold text-kern-light bg-kern/10 rounded px-1.5 py-0.5">{icon}</span>}
          <h3 className="font-semibold text-foreground group-hover:text-kern-light transition-colors">{title}</h3>
        </div>
        {href && (
          <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        )}
      </div>
      {children && <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>}
    </Wrapper>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-blue-500/20 bg-blue-500/5 p-4 text-sm text-muted-foreground leading-relaxed">
      <strong className="text-blue-400 font-semibold block mb-1">Note</strong>
      {children}
    </div>
  );
}

export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-sm text-muted-foreground leading-relaxed">
      <strong className="text-amber-400 font-semibold block mb-1">Warning</strong>
      {children}
    </div>
  );
}

export function Info({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-sky-500/20 bg-sky-500/5 p-4 text-sm text-muted-foreground leading-relaxed">
      <strong className="text-sky-400 font-semibold block mb-1">Info</strong>
      {children}
    </div>
  );
}

export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-muted-foreground leading-relaxed">
      <strong className="text-emerald-400 font-semibold block mb-1">Tip</strong>
      {children}
    </div>
  );
}

export function CodeGroup({ children }: { children: React.ReactNode }) {
  return <div className="my-6 space-y-4">{children}</div>;
}

export function Steps({ children }: { children: React.ReactNode }) {
  return <div className="relative pl-6 border-l border-white/10 my-8 space-y-8">{children}</div>;
}

export function Step({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute -left-[31px] top-1.5 flex h-2.5 w-2.5 items-center justify-center rounded-full bg-kern border-2 border-black" />
      <h4 className="text-base font-semibold text-foreground mb-2">{title}</h4>
      <div className="text-sm text-muted-foreground leading-relaxed">{children}</div>
    </div>
  );
}

export function Frame({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <figure className="my-6 rounded-xl border border-white/10 bg-black/20 p-2 text-center">
      {children}
      {caption && <figcaption className="text-xs text-muted-foreground mt-2">{caption}</figcaption>}
    </figure>
  );
}

export function Pre({ children }: { children: React.ReactNode }) {
  // When MDX renders a fenced code block, it creates <pre><code className="language-xxx">...</code></pre>
  // Because we override `code` in mdxComponents, children.type is our custom component, NOT "code".
  // So we check the props for className containing "language-" instead.
  if (React.isValidElement(children)) {
    const codeProps = children.props as any;
    const className = codeProps?.className || "";
    const codeContent = codeProps?.children;

    if (typeof codeContent === "string" || className.includes("language-")) {
      const match = /language-(\w+)/.exec(className);
      const language = match ? match[1] : "python";
      const code = typeof codeContent === "string" ? codeContent : "";
      
      if (language === "mermaid") {
        return <Mermaid chart={code.trim()} />;
      }
      
      return <CodeBlock code={code.trim()} language={language} className="my-6" />;
    }
  }
  return (
    <pre className="my-6 overflow-x-auto rounded-lg border border-white/10 bg-[#0D0D14] p-4 font-mono text-sm leading-relaxed text-foreground">
      {children}
    </pre>
  );
}

// Fallback Snippet component (should be resolved by preprocessor, but just in case)
function Snippet({ file }: { file?: string }) {
  return null;
}

// Mintlify Check component — renders as a success/completion callout
function Check({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4 text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">✓</span>
      <div>{children}</div>
    </div>
  );
}

export function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <details className="my-4 rounded-lg border border-white/10 bg-black/20 p-4 transition-all duration-200 group">
      <summary className="font-semibold text-sm text-foreground cursor-pointer select-none list-none flex items-center justify-between group-open:text-kern-light transition-colors">
        <span>{title}</span>
        <span className="transition-transform duration-200 group-open:rotate-180 text-muted-foreground text-xs">▼</span>
      </summary>
      <div className="mt-3 text-sm text-muted-foreground leading-relaxed">
        {children}
      </div>
    </details>
  );
}

export function AccordionGroup({ children }: { children: React.ReactNode }) {
  return <div className="my-6 space-y-4">{children}</div>;
}

export const mdxComponents = {
  // Layout components
  CardGroup,
  Card,
  Note,
  Warning,
  Info,
  Tip,
  CodeGroup,
  Steps,
  Step,
  Frame,
  Snippet,
  Check,
  Accordion,
  AccordionGroup,

  // HTML overrides
  h1: (props: any) => <h1 className="text-3xl font-bold tracking-tight text-white mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-semibold tracking-tight text-white mt-8 mb-4 border-b border-white/10 pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-semibold tracking-tight text-white mt-6 mb-3" {...props} />,
  h4: (props: any) => <h4 className="text-lg font-semibold tracking-tight text-white mt-4 mb-2" {...props} />,
  p: (props: any) => <p className="text-muted-foreground leading-relaxed mb-4" {...props} />,
  ul: (props: any) => <ul className="list-disc pl-5 mb-4 space-y-2 text-muted-foreground" {...props} />,
  ol: (props: any) => <ol className="list-decimal pl-5 mb-4 space-y-2 text-muted-foreground" {...props} />,
  li: (props: any) => <li className="text-muted-foreground" {...props} />,
  code: (props: any) => <code className="rounded bg-[#0D0D14] border border-white/5 px-1.5 py-0.5 font-mono text-xs text-kern-light" {...props} />,
  pre: Pre,
  table: (props: any) => (
    <div className="my-6 w-full overflow-x-auto rounded-lg border border-white/10">
      <table className="w-full min-w-[500px] text-sm border-collapse" {...props} />
    </div>
  ),
  thead: (props: any) => <thead className="border-b border-white/10 text-left" {...props} />,
  tbody: (props: any) => <tbody className="divide-y divide-white/5" {...props} />,
  tr: (props: any) => <tr className="border-b border-white/5 hover:bg-white/5 transition-colors" {...props} />,
  th: (props: any) => <th className="px-4 py-3 font-semibold text-white text-left" {...props} />,
  td: (props: any) => <td className="px-4 py-3 text-muted-foreground" {...props} />,
  a: (props: any) => {
    const href = props.href || "";
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    if (isExternal) {
      return <a className="text-kern-light hover:underline font-medium" target="_blank" rel="noopener noreferrer" {...props} />;
    }
    return <Link className="text-kern-light hover:underline font-medium" {...props} href={fixHref(href)} />;
  },
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-kern bg-kern/5 pl-4 py-2 my-4 text-muted-foreground italic rounded-r-md" {...props} />
  ),
};
