export interface DocSection {
  title: string;
  href: string;
  items?: DocSection[];
}

export const docsConfig: DocSection[] = [
  {
    title: "Getting Started",
    href: "/docs/getting-started",
  },
  {
    title: "Agents",
    href: "/docs/agents",
    items: [
      { title: "Overview", href: "/docs/agents" },
    ],
  },
  {
    title: "Models",
    href: "/docs/models",
  },
  {
    title: "Structured Output",
    href: "/docs/structured-output",
  },
  {
    title: "Tools",
    href: "/docs/tools",
  },
  {
    title: "Workflows",
    href: "/docs/workflows",
  },
  {
    title: "Visualization",
    href: "/docs/visualization",
  },
  {
    title: "Knowledge Base",
    href: "/docs/knowledge",
  },
  {
    title: "Storage",
    href: "/docs/storage",
  },
];
