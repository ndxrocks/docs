import { CodeBlock } from "@/components/docs/code-block";

const basicUsageCode = `from pydantic import BaseModel, Field
from typing import Optional, Literal
from kern import Agent
from kern.models.openai import OpenAIChat

class MovieReview(BaseModel):
    title: str = Field(description="Movie title")
    rating: int = Field(description="Rating from 1-10")
    genre: Literal["action", "comedy", "drama", "sci-fi", "horror"]
    summary: str = Field(description="Brief review in 2-3 sentences")
    sequel_recommended: Optional[bool] = Field(default=None)

agent = Agent(
    model=OpenAIChat(id="local-model", base_url="http://localhost:8080/v1"),
    output_schema=MovieReview,
)

result = agent.run("Review The Matrix")
print(result.content)
# MovieReview(
#   title='The Matrix',
#   rating=9,
#   genre='sci-fi',
#   summary='A groundbreaking film...',
#   sequel_recommended=True
# )`;

const templateComparisonCode = `# What JSON Schema sends to a small model:
{
  "type": "object",
  "properties": {
    "title": {"type": "string"},
    "rating": {"type": "integer", "minimum": 1, "maximum": 10},
    "genre": {"enum": ["action", "comedy", "drama", "sci-fi", "horror"]}
  },
  "required": ["title", "rating", "genre"]
}

# What Kern sends instead — a fill-in-the-blank template:
{
  "title": <str>,
  "rating": <int>,
  "genre": <action|comedy|drama|sci-fi|horror>,
  "summary": <str>,
  "sequel_recommended": <bool|null>
}`;

const fieldTypesCode = `from pydantic import BaseModel, Field
from typing import Optional, Literal

class AnalysisResult(BaseModel):
    # Primitive types
    name: str = Field(description="Item name")
    count: int = Field(description="Number of items")
    score: float = Field(description="Confidence score 0.0-1.0")
    is_valid: bool = Field(description="Whether the result passed validation")

    # Literal — constrained choices
    category: Literal["science", "tech", "health", "politics"]

    # Optional — field may be null
    disclaimer: Optional[str] = Field(default=None, description="Optional disclaimer")

    # List of primitives
    tags: list[str] = Field(description="Relevant tags")

    # Nested model
    metadata: "SourceMetadata" = Field(description="Source information")

class SourceMetadata(BaseModel):
    url: str = Field(description="Source URL")
    retrieved_at: str = Field(description="ISO timestamp")`;

const unionTypesCode = `from pydantic import BaseModel, Field
from typing import Union, Optional, Literal

class Event(BaseModel):
    # Union types are expanded flat — not nested
    # The template shows all valid options on one line
    location: Union[str, None] = Field(description="Event location or null")
    status: Literal["confirmed", "tentative", "cancelled"]

    # Optional[X] is just syntactic sugar for Union[X, None]
    notes: Optional[str] = Field(default=None)

    # Union of literals becomes an expanded choice
    priority: Union[Literal["low", "medium", "high"], int]`;

const fieldDescriptionsCode = `from pydantic import BaseModel, Field

class BookSummary(BaseModel):
    # Field(description=...) is embedded directly in the template
    # The model sees the hint right next to the blank
    title: str = Field(
        description="The full title of the book, including subtitle if any"
    )
    author: str = Field(
        description="Author name in 'First Last' format"
    )
    year: int = Field(
        description="Publication year as a 4-digit number"
    )
    rating: float = Field(
        description="Average rating from 0.0 to 5.0, rounded to one decimal"
    )
    genres: list[str] = Field(
        description="List of 2-4 genre labels"
    )

# Kern generates a template like:
# {
#   "title": <str: The full title of the book, including subtitle if any>,
#   "author": <str: Author name in 'First Last' format>,
#   "year": <int: Publication year as a 4-digit number>,
#   "rating": <float: Average rating from 0.0 to 5.0, rounded to one decimal>,
#   "genres": <list[str]: List of 2-4 genre labels>
# }`;

const jsonRepairCode = `from kern.repair import extract_json

# Small models often produce broken JSON
raw = '''
Here is the result:
{"title": "The Matrix", "rating": 9, "genre": "sci-fi"
# Missing closing brace
'''

data = extract_json(raw)
# {"title": "The Matrix", "rating": 9, "genre": "sci-fi"}`;

const latexProtectionCode = `from kern.repair import extract_json, protect_latex

# LaTeX in model output can break JSON parsing
raw = '''
{
  "equation": "$E = mc^2$",
  "proof": "Given $\\\\frac{dy}{dx} = x^2$..."
}
'''

# protect_latex() extracts LaTeX before parsing, restores after
safe = protect_latex(raw)
data = extract_json(safe)
# LaTeX is preserved intact in the final output`;

const behindTheScenesCode = `from kern.output import get_json_output_prompt
from kern.output import _resolve_type, _resolve_union

# get_json_output_prompt(schema) — main entry point
# Converts a Pydantic model into a fill-in-the-blank template
# that gets appended to the model's system prompt

# _resolve_type(field) — resolves a single field type
# str     -> <str>
# int     -> <int>
# Literal -> <a|b|c>
# list    -> <list[str]>
# nested  -> { "field": <type> }

# _resolve_union(annotation) — flattens Union types
# Union[str, None]            -> <str|null>
# Optional[bool]              -> <bool|null>
# Union[Literal["a","b"],int] -> <a|b|int>`;

export default function StructuredOutputPage() {
  return (
    <div className="space-y-12">
      {/* Title */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          Structured <span className="text-gradient">Output</span>
        </h1>
        <p className="text-lg text-muted-foreground">
          Kern&apos;s headline feature. Replace complex JSON Schema with
          fill-in-the-blank templates that small models can actually follow,
          combined with automatic JSON repair and LaTeX protection.
        </p>
      </div>

      {/* Why this matters callout */}
      <div className="rounded-lg border border-kern/30 bg-kern/5 p-6 space-y-3">
        <h3 className="text-lg font-semibold text-kern-light">
          Why this matters for small models
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Models under 7B parameters struggle with JSON Schema. The nested{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
            {"{ \"type\": \"object\", \"properties\": { ... } }"}
          </code>{" "}
          syntax confuses them, leading to malformed output, missing fields, and
          broken JSON. Kern solves this by generating a{" "}
          <span className="text-gradient font-semibold">
            simple template with blanks
          </span>{" "}
          that looks like the answer the model already wants to write. Small
          models complete templates reliably because the pattern is intuitive
          and close-ended, not an abstract schema specification.
        </p>
      </div>

      <div className="border-t border-border/50" />

      {/* How It Works */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">How It Works</h2>
        <p className="text-muted-foreground">
          Instead of sending a complex JSON Schema to the model, Kern inspects
          your Pydantic model and generates a minimal fill-in-the-blank
          template. Each field becomes a typed blank the model fills in. The
          result is parsed, validated, and returned as a proper Pydantic object.
        </p>
        <CodeBlock
          code={templateComparisonCode}
          language="python"
          filename="template_comparison.py"
        />
        <p className="text-sm text-muted-foreground">
          The template approach dramatically reduces errors on small models
          because the output format mirrors what the model naturally produces.
          No abstract schema interpretation required.
        </p>
      </section>

      <div className="border-t border-border/50" />

      {/* Basic Usage */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Basic Usage</h2>
        <p className="text-muted-foreground">
          Define a Pydantic model and pass it as{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
            output_schema
          </code>{" "}
          to your agent. Kern handles template generation, prompt construction,
          and response parsing automatically.
        </p>
        <CodeBlock
          code={basicUsageCode}
          language="python"
          filename="movie_review.py"
        />
        <p className="text-sm text-muted-foreground">
          The result&apos;s{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
            .content
          </code>{" "}
          is a validated{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
            MovieReview
          </code>{" "}
          instance with typed fields and defaults applied.
        </p>
      </section>

      <div className="border-t border-border/50" />

      {/* Field Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Field Types</h2>
        <p className="text-muted-foreground">
          Kern supports the full range of Python type annotations you would
          use with Pydantic. Each type maps to a specific template hint that
          the model can understand.
        </p>
        <CodeBlock
          code={fieldTypesCode}
          language="python"
          filename="field_types.py"
        />
        <div className="grid gap-3 sm:grid-cols-2 mt-4">
          {[
            { type: "str", hint: "<str>", desc: "Free-form text" },
            { type: "int", hint: "<int>", desc: "Integer number" },
            { type: "float", hint: "<float>", desc: "Decimal number" },
            { type: "bool", hint: "<bool>", desc: "True or false" },
            {
              type: "Literal[...]",
              hint: "<a|b|c>",
              desc: "Constrained choices",
            },
            {
              type: "Optional[X]",
              hint: "<X|null>",
              desc: "May be omitted",
            },
            {
              type: "list[X]",
              hint: "<list[X]>",
              desc: "Array of values",
            },
            {
              type: "Nested Model",
              hint: '{ "field": <X> }',
              desc: "Inline sub-object",
            },
          ].map((item) => (
            <div
              key={item.type}
              className="rounded-md border border-border/50 bg-card p-3 space-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-foreground">
                  {item.type}
                </span>
                <code className="rounded bg-muted px-1.5 py-0.5 text-xs text-kern-light">
                  {item.hint}
                </code>
              </div>
              <p className="text-xs text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-border/50" />

      {/* Union Types */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Union Types</h2>
        <p className="text-muted-foreground">
          Union and Optional types are handled with{" "}
          <span className="text-gradient font-semibold">flat expansion</span>,
          not nested schema structures. All valid options are shown on a single
          line using pipe separators. This keeps the template simple and
          prevents the model from getting lost in nested type definitions.
        </p>
        <CodeBlock
          code={unionTypesCode}
          language="python"
          filename="union_types.py"
        />
        <p className="text-sm text-muted-foreground">
          A{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
            Union[str, None]
          </code>{" "}
          becomes{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-kern-light">
            {"<str|null>"}
          </code>{" "}
          in the template. The model picks one option and moves on. No nesting,
          no ambiguity.
        </p>
      </section>

      <div className="border-t border-border/50" />

      {/* Field Descriptions */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Field Descriptions
        </h2>
        <p className="text-muted-foreground">
          Use{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
            Field(description=...)
          </code>{" "}
          to give the model guidance on what each field should contain. Kern
          embeds these descriptions directly into the template, so the model
          sees the hint right next to the blank it needs to fill.
        </p>
        <CodeBlock
          code={fieldDescriptionsCode}
          language="python"
          filename="field_descriptions.py"
        />
        <p className="text-sm text-muted-foreground">
          Descriptions are the single most effective way to improve output
          quality on small models. Be specific about format, constraints, and
          expected values.
        </p>
      </section>

      <div className="border-t border-border/50" />

      {/* JSON Repair */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">JSON Repair</h2>
        <p className="text-muted-foreground">
          Even with templates, small models sometimes produce slightly broken
          JSON — missing braces, trailing commas, or mixed-in commentary.{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
            extract_json()
          </code>{" "}
          handles the common failure modes automatically.
        </p>
        <CodeBlock
          code={jsonRepairCode}
          language="python"
          filename="json_repair.py"
        />

        <div className="space-y-3 mt-6">
          <h3 className="text-lg font-semibold text-foreground">
            LaTeX Protection
          </h3>
          <p className="text-muted-foreground">
            When models produce output containing mathematical notation, LaTeX
            syntax can interfere with JSON parsing.{" "}
            <code className="rounded bg-muted px-1.5 py-0.5 text-sm text-foreground">
              protect_latex()
            </code>{" "}
            extracts LaTeX fragments before parsing and restores them intact in
            the final result.
          </p>
          <CodeBlock
            code={latexProtectionCode}
            language="python"
            filename="latex_protection.py"
          />
        </div>
      </section>

      <div className="border-t border-border/50" />

      {/* Behind the Scenes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          Behind the Scenes
        </h2>
        <p className="text-muted-foreground">
          The structured output system is built on three internal functions that
          work together to transform your Pydantic model into a model-friendly
          template and back again.
        </p>
        <CodeBlock
          code={behindTheScenesCode}
          language="python"
          filename="internals.py"
        />
        <div className="space-y-3 mt-4">
          {[
            {
              fn: "get_json_output_prompt(schema)",
              desc: "Main entry point. Inspects a Pydantic model and produces the fill-in-the-blank template string that gets appended to the system prompt.",
            },
            {
              fn: "_resolve_type(field)",
              desc: "Resolves a single field annotation into its template representation. Handles primitives, Literals, lists, and nested models recursively.",
            },
            {
              fn: "_resolve_union(annotation)",
              desc: "Flattens Union types into a single pipe-separated template hint. Union[str, None] becomes <str|null> without nesting.",
            },
          ].map((item) => (
            <div
              key={item.fn}
              className="rounded-md border border-border/50 bg-card p-4 space-y-1.5"
            >
              <code className="text-sm font-medium text-kern-light">
                {item.fn}
              </code>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
