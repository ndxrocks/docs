import { CodeBlock } from "@/components/docs/code-block";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Calculator, Terminal, Plug, Wrench, Code, Database, Globe } from "lucide-react";

const builtinTools = [
  {
    icon: Search,
    name: "DuckDuckGo",
    description: "Web search powered by DuckDuckGo. Retrieve real-time search results without an API key.",
  },
  {
    icon: Calculator,
    name: "Calculator",
    description: "Evaluate mathematical expressions. Supports arithmetic, trigonometry, and more.",
  },
  {
    icon: Terminal,
    name: "Python",
    description: "Execute Python code in a sandboxed environment. Run scripts and return output to the agent.",
  },
  {
    icon: Plug,
    name: "MCP Tools",
    description: "Connect to any Model Context Protocol server and use its tools with your agents.",
  },
  {
    icon: Database,
    name: "SQL",
    description: "Query SQL databases (Postgres, SQLite, MySQL) and return structured results to the agent.",
  },
  {
    icon: Globe,
    name: "HTTP Requests",
    description: "Make GET, POST, PUT, DELETE requests to any API endpoint with full header support.",
  },
  {
    icon: Code,
    name: "Shell",
    description: "Execute shell commands on the host system. Useful for file operations and scripting.",
  },
  {
    icon: Wrench,
    name: "Custom Tools",
    description: "Build your own tools with Python decorators. Define parameters, types, and docstrings.",
  },
];

const usingToolsCode = `from kern import Agent
from kern.models.openai import OpenAIChat
from kern.tools.duckduckgo import DuckDuckGo
from kern.tools.calculator import Calculator

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    tools=[DuckDuckGo(), Calculator()],
)

result = agent.run("What is 2^10? Also search for the latest AI news.")
print(result.content)`;

const customToolsCode = `from kern.tools import Toolkit

toolkit = Toolkit()

@toolkit.register
def get_weather(city: str) -> str:
    """Get the current weather for a city."""
    # Your implementation here
    return f"The weather in {city} is sunny, 72°F"

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    tools=[toolkit],
)`;

const toolResultsCode = `# Access tool results
result = agent.run("Search for Python tutorials")
for tool_execution in result.tools:
    print(f"Tool: {tool_execution.tool_name}")
    print(f"Result: {tool_execution.result}")`;

export default function ToolsPage() {
  return (
    <div className="space-y-10">
      {/* Title / Overview */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Tools</h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Tools let agents take actions beyond text generation. Kern ships with
          built-in tools for search, math, code execution, and more. You can also
          build custom tools with simple Python decorators.
        </p>
      </div>

      {/* Built-in Tools */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Built-in Tools
          </h2>
          <p className="mt-2 text-muted-foreground">
            Kern provides a set of ready-to-use tools. Pass them to your agent
            and the model will decide when to call them.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {builtinTools.map((tool) => (
            <Card
              key={tool.name}
              className="group border-border/50 bg-card/50 transition-colors hover:border-kern/20 hover:bg-kern/5"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-kern/10 text-kern-light transition-colors group-hover:bg-kern/20">
                  <tool.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-2 font-semibold">{tool.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tool.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Using Tools */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Using Tools
          </h2>
          <p className="mt-2 text-muted-foreground">
            Add tools to an agent by passing a list to the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
              tools
            </code>{" "}
            parameter. The model decides which tools to call based on the user
            prompt.
          </p>
        </div>
        <CodeBlock code={usingToolsCode} filename="agent.py" language="python" />
      </section>

      {/* Custom Tools */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Custom Tools
          </h2>
          <p className="mt-2 text-muted-foreground">
            Create custom tools with the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
              Toolkit
            </code>{" "}
            class and the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
              @toolkit.register
            </code>{" "}
            decorator. The docstring becomes the tool description sent to the
            model, and type hints define the parameters.
          </p>
        </div>
        <CodeBlock code={customToolsCode} filename="custom_tools.py" language="python" />
      </section>

      {/* Tool Results */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            Tool Results
          </h2>
          <p className="mt-2 text-muted-foreground">
            Access tool execution details from the{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono">
              result.tools
            </code>{" "}
            property on the run output. Each entry contains the tool name and
            its returned value.
          </p>
        </div>
        <CodeBlock code={toolResultsCode} filename="tool_results.py" language="python" />
      </section>
    </div>
  );
}
