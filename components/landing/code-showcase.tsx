import { CodeBlock } from "@/components/docs/code-block";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const structuredOutputCode = `from kern import Agent
from kern.models.openai import OpenAIChat
from pydantic import BaseModel, Field

class MovieReview(BaseModel):
    title: str = Field(description="Movie title")
    rating: int = Field(description="Rating 1-10")
    summary: str = Field(description="Brief review")

agent = Agent(
    model=OpenAIChat(id="gpt-4o-mini"),
    output_schema=MovieReview,
)

result = agent.run("Review The Matrix")
# Works reliably even with 2B parameter models!

print(result.content)
# {
#   "title": "The Matrix",
#   "rating": 9,
#   "summary": "A groundbreaking sci-fi film..."
# }`;

const workflowCode = `from kern import Agent
from kern.workflow import Workflow
from kern.workflow.step import Step

researcher = Agent(name="Researcher", ...)
writer = Agent(name="Writer", ...)

workflow = Workflow(
    name="Research & Write",
    steps=[
        Step(name="Research", agent=researcher),
        Step(name="Write", agent=writer),
    ],
)

result = workflow.run("Write about quantum computing")`;

const visualizationCode = `from kern import Agent
from kern.workflow import Workflow
from kern.workflow.step import Step, Condition

workflow = Workflow(
    name="Content Pipeline",
    steps=[
        Step(name="Research", agent=research_agent),
        Condition(
            name="Check Quality",
            condition="rating > 7",
            true_step=Step(name="Publish", agent=publish_agent),
            false_step=Step(name="Revise", agent=revise_agent),
        ),
    ],
)

# Generate a Mermaid flowchart
workflow.visualize(
    output_file="pipeline.png",
    theme="default"
)`;

const repairCode = `from kern.repair import extract_json, protect_latex

# Small models often produce malformed JSON
raw_output = '''
Here is the result:
{"title": "E=mc²", "formula": "$E = mc^2$"}
'''

# Extract and repair JSON automatically
data = extract_json(raw_output)
# {"title": "E=mc²", "formula": "$E = mc^2$"}

# LaTeX is protected from JSON escape corruption
protected = protect_latex(raw_output)`;

export function CodeShowcase() {
  return (
    <section className="border-t border-white/5 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-kern-light">
            Examples
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See it in <span className="text-gradient">action</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-400">
            From structured output to workflow visualization — Kern handles the hard parts.
          </p>
        </div>

        <Tabs defaultValue="structured" className="mt-12">
          <TabsList className="mx-auto flex w-full justify-start overflow-x-auto border border-white/10 bg-white/5 p-1 sm:w-fit sm:justify-center">
            <TabsTrigger value="structured" className="whitespace-nowrap data-[state=active]:bg-kern data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-kern/20">
              Structured Output
            </TabsTrigger>
            <TabsTrigger value="workflow" className="whitespace-nowrap data-[state=active]:bg-kern data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-kern/20">
              Workflows
            </TabsTrigger>
            <TabsTrigger value="viz" className="whitespace-nowrap data-[state=active]:bg-kern data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-kern/20">
              Visualization
            </TabsTrigger>
            <TabsTrigger value="repair" className="whitespace-nowrap data-[state=active]:bg-kern data-[state=active]:text-white data-[state=active]:shadow-lg data-[state=active]:shadow-kern/20">
              JSON Repair
            </TabsTrigger>
          </TabsList>

          <TabsContent value="structured" className="mt-6">
            <CodeBlock code={structuredOutputCode} language="python" filename="structured_output.py" />
          </TabsContent>
          <TabsContent value="workflow" className="mt-6">
            <CodeBlock code={workflowCode} language="python" filename="workflow.py" />
          </TabsContent>
          <TabsContent value="viz" className="mt-6">
            <CodeBlock code={visualizationCode} language="python" filename="visualize.py" />
          </TabsContent>
          <TabsContent value="repair" className="mt-6">
            <CodeBlock code={repairCode} language="python" filename="repair.py" />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
