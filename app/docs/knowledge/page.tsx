import { CodeBlock } from "@/components/docs/code-block";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function KnowledgePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Knowledge Base</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Give your agents access to external knowledge. Kern supports PDFs, URLs, text files,
          SQL databases, and vector databases for retrieval-augmented generation.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">How Knowledge Works</h2>
        <p className="text-muted-foreground">
          When you attach a knowledge base to an agent, Kern automatically searches it on each run
          and injects relevant context into the agent&apos;s instructions. This gives your small models
          the information they need without bloating the prompt.
        </p>
        <CodeBlock
          code={`from kern import Agent
from kern.knowledge.base import AgentKnowledge

agent = Agent(
    knowledge=AgentKnowledge(
        vector_db=...,  # Your vector DB
    ),
)`}
          language="python"
          filename="knowledge.py"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Vector Databases</h2>
        <p className="text-muted-foreground">
          Kern supports multiple vector database backends for storing and retrieving knowledge embeddings:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: "pgvector", desc: "PostgreSQL extension for vector similarity search" },
            { name: "Chroma", desc: "Open-source embedding database" },
            { name: "LanceDB", desc: "Serverless vector DB built on Lance format" },
            { name: "Qdrant", desc: "High-performance vector similarity search engine" },
          ].map((db) => (
            <div key={db.name} className="rounded-lg border border-border/50 bg-card/50 p-4">
              <p className="font-mono text-sm font-medium text-kern-light">{db.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{db.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Document Loaders</h2>
        <p className="text-muted-foreground">
          Load knowledge from various sources into your vector database:
        </p>
        <CodeBlock
          code={`from kern.knowledge.base import AgentKnowledge
from kern.vectordb.pgvector import PgVector2

knowledge = AgentKnowledge(
    vector_db=PgVector2(
        table_name="docs",
        db_url="postgresql://localhost:5432/kern",
    ),
)

# Load from URLs
knowledge.load_urls([
    "https://example.com/docs/introduction",
    "https://example.com/docs/api-reference",
])

# Load from PDFs
knowledge.load_pdfs(["./documentation.pdf"])

# Load from text
knowledge.load_text("Kern is an agent framework for small LLMs.")`}
          language="python"
          filename="loaders.py"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Using Knowledge with Agents</h2>
        <p className="text-muted-foreground">
          Once knowledge is loaded, attach it to an agent and Kern handles retrieval automatically:
        </p>
        <CodeBlock
          code={`from kern import Agent
from kern.models.openai import OpenAIChat

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    knowledge=knowledge,
    search_knowledge=True,
)

# The agent will search the knowledge base for relevant context
result = agent.run("How do I use structured output?")
print(result.content)`}
          language="python"
          filename="agent_with_knowledge.py"
        />
      </div>

      <div className="rounded-lg border border-kern/20 bg-kern/5 p-5">
        <h3 className="font-semibold text-kern-light">Related</h3>
        <div className="mt-2 flex gap-3">
          <Link href="/docs/storage" className="text-sm text-muted-foreground hover:text-kern-light">
            Storage Backends &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
