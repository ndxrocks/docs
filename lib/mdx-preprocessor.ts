import fs from "fs";
import path from "path";

/**
 * Preprocesses MDX source by resolving <Snippet file="..." /> tags
 * into the actual content of the referenced snippet files.
 * This mimics Mintlify's Snippet component behavior at build time.
 */
export function resolveSnippets(source: string, contentDir: string): string {
  const snippetsDir = path.join(contentDir, "_snippets");

  // Match both self-closing and open/close Snippet tags
  // <Snippet file="filename.mdx" />
  // <Snippet file="filename.mdx"></Snippet>
  const snippetRegex = /<Snippet\s+file=["']([^"']+)["']\s*\/?\s*>(?:<\/Snippet>)?/g;

  let result = source;
  let match: RegExpExecArray | null;
  const seen = new Set<string>(); // prevent infinite recursion

  // Iterate until no more Snippet tags are found (handles nested snippets)
  let maxIterations = 10;
  while (snippetRegex.test(result) && maxIterations > 0) {
    maxIterations--;
    snippetRegex.lastIndex = 0;

    result = result.replace(snippetRegex, (_fullMatch, fileName: string) => {
      if (seen.has(fileName)) {
        return `{/* Circular snippet reference: ${fileName} */}`;
      }
      seen.add(fileName);

      const snippetPath = path.join(snippetsDir, fileName);
      try {
        if (fs.existsSync(snippetPath)) {
          const snippetContent = fs.readFileSync(snippetPath, "utf8");
          // Strip frontmatter from snippet if present
          const stripped = snippetContent.replace(/^---[\s\S]*?---\s*/, "");
          return stripped.trim();
        }
      } catch {
        // Silently fail - snippet not found
      }
      return `{/* Snippet not found: ${fileName} */}`;
    });
  }

  return result;
}
