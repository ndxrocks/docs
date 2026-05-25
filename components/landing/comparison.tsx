import { Check, X, Minus } from "lucide-react";

const rows = [
  { feature: "Structured output for <7B models", kern: "yes", agno: "no", langchain: "no" },
  { feature: "Automatic JSON repair", kern: "yes", agno: "no", langchain: "no" },
  { feature: "Template-based output (no JSON Schema)", kern: "yes", agno: "no", langchain: "no" },
  { feature: "LaTeX protection in JSON", kern: "yes", agno: "no", langchain: "no" },
  { feature: "Workflow engine", kern: "yes", agno: "yes", langchain: "yes" },
  { feature: "Workflow visualization", kern: "yes", agno: "no", langchain: "no" },
  { feature: "Multi-model support", kern: "yes", agno: "yes", langchain: "yes" },
  { feature: "Agent teams", kern: "yes", agno: "yes", langchain: "yes" },
  { feature: "Tool ecosystem", kern: "yes", agno: "yes", langchain: "yes" },
  { feature: "Knowledge bases + Vector DB", kern: "yes", agno: "yes", langchain: "yes" },
  { feature: "Lightweight / minimal deps", kern: "yes", agno: "yes", langchain: "no" },
  { feature: "Optimized for local models", kern: "yes", agno: "no", langchain: "no" },
];

function Cell({ value }: { value: string }) {
  if (value === "yes") {
    return (
      <td className="px-4 py-3.5 text-center">
        <Check className="mx-auto h-4 w-4 text-kern-light" />
      </td>
    );
  }
  if (value === "no") {
    return (
      <td className="px-4 py-3.5 text-center">
        <X className="mx-auto h-4 w-4 text-zinc-700" />
      </td>
    );
  }
  return (
    <td className="px-4 py-3.5 text-center">
      <Minus className="mx-auto h-4 w-4 text-zinc-700" />
    </td>
  );
}

export function Comparison() {
  return (
    <section className="border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-kern-light">
            Comparison
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Why <span className="text-gradient">Kern</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            Built on Agno with critical optimizations for models that run on consumer hardware.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-xl border border-white/5 bg-white/[0.02]">
          <table className="w-full min-w-[500px] text-sm">
            <thead>
              <tr className="border-b border-white/5">
                <th className="px-5 py-4 text-left text-sm font-medium text-zinc-400">Feature</th>
                <th className="px-5 py-4 text-center text-sm font-semibold text-kern-light">Kern</th>
                <th className="px-5 py-4 text-center text-sm font-medium text-zinc-400">Agno</th>
                <th className="px-5 py-4 text-center text-sm font-medium text-zinc-400">LangChain</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={`border-b border-white/[0.03] last:border-0 ${i % 2 === 0 ? 'bg-white/[0.01]' : ''}`}>
                  <td className="px-5 py-3.5 text-zinc-300">{row.feature}</td>
                  <Cell value={row.kern} />
                  <Cell value={row.agno} />
                  <Cell value={row.langchain} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
