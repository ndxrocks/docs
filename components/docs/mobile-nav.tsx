"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { docsConfig } from "@/lib/docs-config";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

export function DocsMobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="lg:hidden">
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="default"
          size="icon"
          onClick={() => setOpen(!open)}
          className="h-14 w-14 rounded-full shadow-lg bg-kern text-white hover:bg-kern-light border-0"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Navigation</span>
        </Button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[8rem] z-50 bg-background/95 backdrop-blur-sm">
          <div className="flex items-center justify-end px-4 py-2">
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>
          <ScrollArea className="h-full px-4 pb-20">
            <nav className="space-y-1">
              {docsConfig.map((section) => (
                <div key={section.href}>
                  <Link
                    href={section.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      pathname === section.href
                        ? "bg-kern/10 text-kern-light"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    {section.title}
                  </Link>
                  {section.items && (
                    <div className="ml-4 mt-1 space-y-1 border-l border-border/50 pl-3">
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className={cn(
                            "flex items-center rounded-md px-3 py-1.5 text-sm transition-colors",
                            pathname === item.href
                              ? "text-kern-light"
                              : "text-muted-foreground/70 hover:text-foreground"
                          )}
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
