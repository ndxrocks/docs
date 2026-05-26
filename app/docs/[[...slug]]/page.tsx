import React from "react";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/components/docs/mdx-components";
import { resolveSnippets } from "@/lib/mdx-preprocessor";

interface PageProps {
  params: Promise<{
    slug?: string[];
  }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  // If slug is empty or undefined, resolve to index (Welcome to Kern)
  const relativePath = slug && slug.length > 0 ? slug.join("/") : "index";

  const contentDir = path.join(/*turbopackIgnore: true*/ process.cwd(), "content");
  let filePath = "";

  const possiblePaths = [
    path.join(contentDir, `${relativePath}.mdx`),
    path.join(contentDir, `${relativePath}.md`),
    path.join(contentDir, relativePath, "index.mdx"),
    path.join(contentDir, relativePath, "index.md"),
  ];

  for (const p of possiblePaths) {
    if (fs.existsSync(p)) {
      filePath = p;
      break;
    }
  }

  if (!filePath) {
    notFound();
  }

  let fileContent = "";
  try {
    fileContent = fs.readFileSync(filePath, "utf8");
  } catch (err) {
    console.error(`Error reading doc file: ${filePath}`, err);
    notFound();
  }

  // Preprocess: resolve <Snippet file="..." /> tags into inline content
  fileContent = resolveSnippets(fileContent, contentDir);

  // Compile MDX with frontmatter parsing and compatibility components
  let content: React.ReactNode = null;
  let frontmatter: Record<string, any> = {};

  try {
    const compiled = await compileMDX<{ title: string; description?: string }>({
      source: fileContent,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
      components: mdxComponents,
    });
    content = compiled.content;
    frontmatter = compiled.frontmatter;
  } catch (err) {
    console.error(`Error compiling MDX for path: ${filePath}`, err);
    return (
      <div className="rounded-lg border border-red-500/20 bg-red-500/5 p-6 text-red-400">
        <h2 className="text-lg font-semibold mb-2">Error rendering page</h2>
        <p className="text-sm">There was an issue compiling this documentation page. Please check back later.</p>
        <p className="text-xs mt-2 text-red-400/60 font-mono">{String(err)}</p>
      </div>
    );
  }

  return (
    <article className="max-w-none">
      {frontmatter.title && (
        <div className="mb-6 border-b border-white/10 pb-6">
          <h1 className="text-4xl font-bold tracking-tight text-white mb-2">{frontmatter.title}</h1>
          {frontmatter.description && (
            <p className="text-lg text-muted-foreground leading-relaxed">{frontmatter.description}</p>
          )}
        </div>
      )}
      <div className="mt-6">{content}</div>
    </article>
  );
}
