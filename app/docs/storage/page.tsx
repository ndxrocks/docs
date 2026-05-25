import { CodeBlock } from "@/components/docs/code-block";
import Link from "next/link";

export default function StoragePage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Storage</h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Persist agent sessions, conversations, and state across runs. Kern supports multiple
          storage backends for different deployment needs.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Supported Backends</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: "Postgres", desc: "Production-grade relational database", import_path: "kern.storage.postgres" },
            { name: "SQLite", desc: "Lightweight, file-based — great for local dev", import_path: "kern.storage.sqlite" },
            { name: "Redis", desc: "In-memory store for fast session access", import_path: "kern.storage.redis" },
            { name: "MongoDB", desc: "Document store for flexible schemas", import_path: "kern.storage.mongo" },
          ].map((backend) => (
            <div key={backend.name} className="rounded-lg border border-border/50 bg-card/50 p-4">
              <p className="font-mono text-sm font-medium text-kern-light">{backend.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{backend.desc}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground/60">{backend.import_path}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Using Storage with Agents</h2>
        <p className="text-muted-foreground">
          Attach a storage backend to persist agent sessions. Conversations are automatically
          saved and can be resumed later.
        </p>
        <CodeBlock
          code={`from kern import Agent
from kern.models.openai import OpenAIChat
from kern.storage.postgres import PgStorage

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    storage=PgStorage(
        table_name="agent_sessions",
        db_url="postgresql://localhost:5432/kern",
    ),
)

# First run — creates a session
result = agent.run("Hello, my name is Alice")
print(result.content)
print(f"Session ID: {result.session_id}")

# Resume the same session
result2 = agent.run(
    "What is my name?",
    session_id=result.session_id,
)
print(result2.content)  # "Your name is Alice"`}
          language="python"
          filename="storage.py"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">SQLite for Local Development</h2>
        <p className="text-muted-foreground">
          For quick prototyping and local development, SQLite requires no external services:
        </p>
        <CodeBlock
          code={`from kern.storage.sqlite import SqliteStorage

agent = Agent(
    model=OpenAIChat(id="local-model", base_url="http://localhost:8080/v1"),
    storage=SqliteStorage(
        table_name="sessions",
        db_file="kern_sessions.db",
    ),
)`}
          language="python"
          filename="sqlite.py"
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Session Management</h2>
        <p className="text-muted-foreground">
          Load, list, and delete sessions programmatically:
        </p>
        <CodeBlock
          code={`# Load a specific session
session = agent.storage.load(session_id="abc-123")

# List all sessions
sessions = agent.storage.get_all_sessions()

# Delete a session
agent.storage.delete_session(session_id="abc-123")`}
          language="python"
          filename="sessions.py"
        />
      </div>

      <div className="rounded-lg border border-kern/20 bg-kern/5 p-5">
        <h3 className="font-semibold text-kern-light">Related</h3>
        <div className="mt-2 flex gap-3">
          <Link href="/docs/knowledge" className="text-sm text-muted-foreground hover:text-kern-light">
            Knowledge Base &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
