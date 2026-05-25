import { CodeBlock } from "@/components/docs/code-block";
import { Card, CardContent } from "@/components/ui/card";

const localEndpointCode = `# Local model via OpenAI-compatible endpoint
from kern.models.openai import OpenAIChat

model = OpenAIChat(
    id="local-model",
    base_url="http://localhost:8080/v1",
    api_key="not-needed",
)`;

const ollamaCode = `# Ollama
from kern.models.ollama import Ollama

model = Ollama(id="llama3.2:3b")`;

const openaiCode = `# OpenAI
from kern.models.openai import OpenAIChat

model = OpenAIChat(id="gpt-4o-mini")`;

const anthropicCode = `# Anthropic
from kern.models.anthropic import Claude

model = Claude(id="claude-sonnet-4-20250514")`;

const googleCode = `# Google
from kern.models.google import Gemini

model = Gemini(id="gemini-2.0-flash")`;

const groqCode = `# Groq
from kern.models.groq import Groq

model = Groq(id="llama-3.3-70b-versatile")`;

export default function ModelsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-3xl font-bold tracking-tight">Models</h1>
        <p className="text-lg text-muted-foreground">
          Kern supports a wide range of model providers. Use local models for
          privacy and zero cost, or connect to cloud providers for maximum
          capability.
        </p>
      </div>

      {/* Local Models (Recommended) */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Local Models (Recommended)
          </h2>
          <p className="text-muted-foreground">
            Local models are the primary use case for Kern. Run small LLMs on
            your own hardware for full privacy, zero API costs, and complete
            control over inference. Use any OpenAI-compatible endpoint or Ollama
            directly.
          </p>
        </div>

        <div className="grid gap-6">
          <Card>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">OpenAI-Compatible Endpoint</h3>
                <p className="text-sm text-muted-foreground">
                  Connect to any server that exposes an OpenAI-compatible API
                  &mdash; llama.cpp, vLLM, LocalAI, LM Studio, and more. Just
                  point <code className="text-xs bg-muted px-1.5 py-0.5 rounded">base_url</code> at
                  your local server.
                </p>
              </div>
              <CodeBlock code={localEndpointCode} filename="local_endpoint.py" />
            </CardContent>
          </Card>

          <Card>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-base font-medium">Ollama</h3>
                <p className="text-sm text-muted-foreground">
                  First-class support for Ollama. Pull a model with{" "}
                  <code className="text-xs bg-muted px-1.5 py-0.5 rounded">ollama pull llama3.2:3b</code>{" "}
                  and start building agents immediately.
                </p>
              </div>
              <CodeBlock code={ollamaCode} filename="ollama_model.py" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* OpenAI */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">OpenAI</h2>
          <p className="text-muted-foreground">
            Use OpenAI models when you need state-of-the-art reasoning and broad
            tool-use capabilities. Set the{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">OPENAI_API_KEY</code>{" "}
            environment variable to authenticate.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <CodeBlock code={openaiCode} filename="openai_model.py" />
          </CardContent>
        </Card>
      </section>

      {/* Anthropic */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Anthropic</h2>
          <p className="text-muted-foreground">
            Claude models offer strong instruction-following and safe outputs.
            Set the{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">ANTHROPIC_API_KEY</code>{" "}
            environment variable to authenticate.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <CodeBlock code={anthropicCode} filename="anthropic_model.py" />
          </CardContent>
        </Card>
      </section>

      {/* Google */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Google</h2>
          <p className="text-muted-foreground">
            Gemini models provide fast, capable multimodal inference. Set the{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">GOOGLE_API_KEY</code>{" "}
            environment variable to authenticate.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <CodeBlock code={googleCode} filename="google_model.py" />
          </CardContent>
        </Card>
      </section>

      {/* Groq */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">Groq</h2>
          <p className="text-muted-foreground">
            Groq offers extremely fast inference using LPU hardware
            acceleration. Ideal when low latency is critical. Set the{" "}
            <code className="text-xs bg-muted px-1.5 py-0.5 rounded">GROQ_API_KEY</code>{" "}
            environment variable to authenticate.
          </p>
        </div>

        <Card>
          <CardContent className="space-y-4">
            <CodeBlock code={groqCode} filename="groq_model.py" />
          </CardContent>
        </Card>
      </section>

      {/* Other Providers */}
      <section className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold tracking-tight">
            Other Providers
          </h2>
          <p className="text-muted-foreground">
            Kern also supports additional providers through its modular model
            layer. These include:
          </p>
        </div>

        <Card>
          <CardContent>
            <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
              <li>
                <span className="text-foreground font-medium">Mistral</span> &mdash;
                Mistral AI models via their API or self-hosted endpoints.
              </li>
              <li>
                <span className="text-foreground font-medium">Cohere</span> &mdash;
                Command models for enterprise NLP tasks.
              </li>
              <li>
                <span className="text-foreground font-medium">Together AI</span> &mdash;
                Access open-source models through the Together platform.
              </li>
              <li>
                <span className="text-foreground font-medium">Fireworks AI</span> &mdash;
                Fast serverless inference for open-source models.
              </li>
              <li>
                <span className="text-foreground font-medium">DeepSeek</span> &mdash;
                DeepSeek models for advanced reasoning tasks.
              </li>
              <li>
                <span className="text-foreground font-medium">SambaNova</span> &mdash;
                High-throughput inference on specialized hardware.
              </li>
            </ul>
            <p className="mt-4 text-sm text-muted-foreground">
              All providers follow the same interface. Swap the import and model
              ID &mdash; your agent code stays the same.
            </p>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
