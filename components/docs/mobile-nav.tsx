"use client";

import { useState } from "react";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docNavigation, DocItem } from "@/lib/docs-navigation";

export function DocsMobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // SDK only — no tabs
  const groups = docNavigation["SDK"] || [];

  return (
    <div className="lg:hidden">
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="default"
          size="icon"
          onClick={() => setOpen(!open)}
          className="h-14 w-14 rounded-full shadow-lg bg-kern text-white hover:bg-kern-light border-0"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Navigation</span>
        </Button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[4rem] z-50 bg-background/95 backdrop-blur-sm flex flex-col">
          <ScrollArea className="flex-1 px-4 py-4 pb-20">
            <nav className="space-y-6">
              {groups.map((group, groupIdx) => (
                <div key={groupIdx} className="space-y-1.5">
                  <h4 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                    {group.group}
                  </h4>
                  <div className="space-y-0.5">
                    {group.items.map((item, itemIdx) => (
                      <MobileNavItem key={itemIdx} item={item} pathname={pathname} setOpen={setOpen} />
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}

function MobileNavItem({
  item,
  pathname,
  setOpen
}: {
  item: DocItem;
  pathname: string;
  setOpen: (open: boolean) => void;
}) {
  const hasItems = item.items && item.items.length > 0;
  const isActive = pathname === item.href;

  const [expanded, setExpanded] = useState(() => {
    const isChildActive = (it: DocItem): boolean => {
      if (it.href === pathname) return true;
      if (it.items) {
        return it.items.some(isChildActive);
      }
      return false;
    };
    return isChildActive(item);
  });

  return (
    <div>
      <div className="flex items-center justify-between rounded-md hover:bg-white/5 transition-colors">
        <Link
          href={item.href}
          onClick={() => {
            if (!hasItems) setOpen(false);
          }}
          className={cn(
            "flex-1 flex items-center px-3 py-2 text-sm transition-colors",
            isActive
              ? "text-kern-light font-medium"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {item.title}
        </Link>
        {hasItems && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-2 text-muted-foreground/60 hover:text-foreground transition-colors mr-1 rounded"
          >
            {expanded ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </button>
        )}
      </div>
      {hasItems && expanded && item.items && (
        <div className="ml-3 mt-1 space-y-0.5 border-l border-white/5 pl-3">
          {item.items.map((subItem, idx) => (
            <MobileNavItem key={idx} item={subItem} pathname={pathname} setOpen={setOpen} />
          ))}
        </div>
      )}
    </div>
  );
}
