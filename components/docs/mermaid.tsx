"use client";
import React, { useEffect, useRef, useState } from "react";

export function Mermaid({ chart }: { chart: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let active = true;
    const renderChart = async () => {
      try {
        const { default: mermaid } = await import("mermaid");
        mermaid.initialize({
          startOnLoad: false,
          theme: "dark",
          securityLevel: "loose",
          themeVariables: {
            background: "transparent",
            primaryColor: "#0D0D14",
            primaryTextColor: "#ffffff",
            lineColor: "#ffffff",
            primaryBorderColor: "#ffffff",
          }
        });
        const id = `mermaid-${Math.floor(Math.random() * 100000)}`;
        const { svg: renderedSvg } = await mermaid.render(id, chart);
        if (active) {
          setSvg(renderedSvg);
          setError(false);
        }
      } catch (err) {
        console.error("Mermaid render error:", err);
        if (active) {
          setError(true);
        }
      }
    };

    renderChart();
    return () => {
      active = false;
    };
  }, [chart]);

  if (error) {
    return (
      <div className="my-8 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 font-mono text-xs">
        Failed to render Mermaid diagram. Please verify the syntax.
      </div>
    );
  }

  if (svg) {
    return (
      <div 
        className="my-8 flex justify-center bg-black/40 p-6 rounded-xl border border-white/10 overflow-x-auto w-full" 
        dangerouslySetInnerHTML={{ __html: svg }} 
      />
    );
  }

  return (
    <div className="my-8 flex justify-center items-center bg-black/40 p-6 h-48 rounded-xl border border-white/10 font-mono text-xs text-muted-foreground animate-pulse w-full">
      Rendering diagram...
    </div>
  );
}
