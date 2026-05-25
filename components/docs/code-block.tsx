"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = "python",
  filename,
  showLineNumbers = true,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.trim().split("\n");

  return (
    <div className={cn("group relative max-w-full overflow-x-auto rounded-lg border border-border/50 bg-[#0D0D14]", className)}>
      {filename && (
        <div className="flex items-center justify-between border-b border-border/30 bg-[#0A0A10] px-4 py-2">
          <span className="text-xs font-medium text-muted-foreground">{filename}</span>
          <span className="text-xs text-muted-foreground/50">{language}</span>
        </div>
      )}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute right-3 top-3 z-10 rounded-md bg-white/5 p-1.5 text-muted-foreground opacity-0 transition-all hover:bg-white/10 hover:text-foreground group-hover:opacity-100"
        >
          {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
        </button>
        <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="flex">
                {showLineNumbers && (
                  <span className="mr-4 inline-block w-5 select-none text-right text-muted-foreground/30">
                    {i + 1}
                  </span>
                )}
                <span className="text-[#E8E8ED]">
                  <HighlightedLine line={line} language={language} />
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

function HighlightedLine({ line, language }: { line: string; language: string }) {
  if (language === "python") {
    return <PythonHighlight line={line} />;
  }
  if (language === "bash" || language === "shell") {
    return <BashHighlight line={line} />;
  }
  if (language === "typescript" || language === "tsx" || language === "json") {
    return <GenericHighlight line={line} />;
  }
  return <>{line}</>;
}

const pythonKeywords = new Set([
  "from", "import", "class", "def", "return", "if", "else", "elif",
  "for", "in", "while", "try", "except", "with", "as", "async", "await",
  "True", "False", "None", "and", "or", "not", "is", "lambda", "yield",
  "pass", "raise", "break", "continue", "finally", "global", "nonlocal",
]);

const pythonBuiltins = new Set([
  "print", "str", "int", "float", "list", "dict", "tuple", "set", "bool",
  "type", "isinstance", "len", "range", "enumerate", "zip", "map", "filter",
]);

function PythonHighlight({ line }: { line: string }) {
  const tokens = tokenizePython(line);
  return (
    <>
      {tokens.map((token, i) => (
        <span key={i} className={getTokenClass(token)}>{token.value}</span>
      ))}
    </>
  );
}

function BashHighlight({ line }: { line: string }) {
  const trimmed = line.trimStart();
  if (trimmed.startsWith("$") || trimmed.startsWith(">")) {
    return (
      <>
        <span className="text-kern">{trimmed.charAt(0)}</span>
        <span className="text-[#E8E8ED]">{trimmed.slice(1)}</span>
        {line.slice(0, line.length - trimmed.length) && (
          <span className="text-muted-foreground/30">{line.slice(0, line.length - trimmed.length)}</span>
        )}
      </>
    );
  }
  return <>{line}</>;
}

function GenericHighlight({ line }: { line: string }) {
  return <>{line}</>;
}

interface Token {
  type: "plain" | "keyword" | "string" | "comment" | "builtin" | "decorator" | "number" | "operator" | "punctuation";
  value: string;
}

function tokenizePython(line: string): Token[] {
  const tokens: Token[] = [];

  if (line.trim().startsWith("#")) {
    return [{ type: "comment", value: line }];
  }

  let i = 0;
  while (i < line.length) {
    const char = line[i];

    if (char === " " || char === "\t") {
      let ws = "";
      while (i < line.length && (line[i] === " " || line[i] === "\t")) {
        ws += line[i];
        i++;
      }
      tokens.push({ type: "plain", value: ws });
      continue;
    }

    if (char === "#") {
      tokens.push({ type: "comment", value: line.slice(i) });
      break;
    }

    if (char === '"' || char === "'") {
      const quote = char;
      let str = char;
      i++;
      while (i < line.length) {
        if (line[i] === "\\" && i + 1 < line.length) {
          str += line[i] + line[i + 1];
          i += 2;
        } else if (line[i] === quote) {
          str += line[i];
          i++;
          break;
        } else {
          str += line[i];
          i++;
        }
      }
      tokens.push({ type: "string", value: str });
      continue;
    }

    if (char === "@") {
      let dec = "@";
      i++;
      while (i < line.length && /[\w.]/.test(line[i])) {
        dec += line[i];
        i++;
      }
      tokens.push({ type: "decorator", value: dec });
      continue;
    }

    if (/[0-9]/.test(char)) {
      let num = "";
      while (i < line.length && /[0-9.xXa-fA-F_]/.test(line[i])) {
        num += line[i];
        i++;
      }
      tokens.push({ type: "number", value: num });
      continue;
    }

    if (/[a-zA-Z_]/.test(char)) {
      let word = "";
      while (i < line.length && /[\w]/.test(line[i])) {
        word += line[i];
        i++;
      }
      if (pythonKeywords.has(word)) {
        tokens.push({ type: "keyword", value: word });
      } else if (pythonBuiltins.has(word)) {
        tokens.push({ type: "builtin", value: word });
      } else {
        tokens.push({ type: "plain", value: word });
      }
      continue;
    }

    if ("=+-*/<>!&|^%".includes(char)) {
      let op = char;
      i++;
      if (i < line.length && "=/<>".includes(line[i])) {
        op += line[i];
        i++;
      }
      tokens.push({ type: "operator", value: op });
      continue;
    }

    if ("()[]{}:,.".includes(char)) {
      tokens.push({ type: "punctuation", value: char });
      i++;
      continue;
    }

    tokens.push({ type: "plain", value: char });
    i++;
  }

  if (tokens.length === 0) {
    return [{ type: "plain", value: line }];
  }

  return tokens;
}

function getTokenClass(token: Token): string {
  switch (token.type) {
    case "keyword":
      return "text-kern-light";
    case "string":
      return "text-green-400";
    case "comment":
      return "text-muted-foreground/40 italic";
    case "builtin":
      return "text-yellow-300/80";
    case "decorator":
      return "text-kern-light";
    case "number":
      return "text-orange-300/80";
    case "operator":
      return "text-kern-light/70";
    case "punctuation":
      return "text-muted-foreground/60";
    default:
      return "";
  }
}
