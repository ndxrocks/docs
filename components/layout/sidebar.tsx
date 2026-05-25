"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/lib/docs-config";
import { ScrollArea } from "@/components/ui/scroll-area";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-border/50 lg:block">
      <ScrollArea className="h-full py-6 pl-4 pr-2">
        <nav className="space-y-1">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Documentation
          </p>
          {docsConfig.map((section) => {
            const isActive = pathname === section.href;
            return (
              <div key={section.href}>
                <Link
                  href={section.href}
                  className={cn(
                    "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-kern/10 text-kern-light"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {section.title}
                </Link>
                {section.items && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-border/50 pl-3">
                    {section.items.map((item) => {
                      const isSubActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "flex items-center rounded-md px-3 py-1.5 text-sm transition-colors",
                            isSubActive
                              ? "text-kern-light"
                              : "text-muted-foreground/70 hover:text-foreground"
                          )}
                        >
                          {item.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </ScrollArea>
    </aside>
  );
}
