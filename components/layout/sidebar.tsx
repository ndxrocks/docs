"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { docNavigation, DocItem } from "@/lib/docs-navigation";
import { ChevronRight, ChevronDown } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();

  // SDK only — no tabs
  const groups = docNavigation["SDK"] || [];

  return (
    <aside className="sticky top-24 hidden h-[calc(100vh-6.5rem)] w-64 shrink-0 border-r border-border/50 lg:block">
      <ScrollArea className="h-full py-4 pl-4 pr-2">
        <nav className="space-y-6">
          {groups.map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-1.5">
              <h4 className="px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80">
                {group.group}
              </h4>
              <div className="space-y-0.5">
                {group.items.map((item, itemIdx) => (
                  <SidebarItem key={itemIdx} item={item} pathname={pathname} />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </ScrollArea>
    </aside>
  );
}

function SidebarItem({ item, pathname }: { item: DocItem; pathname: string }) {
  const hasItems = item.items && item.items.length > 0;
  const isActive = pathname === item.href;

  const [open, setOpen] = useState(() => {
    const isChildActive = (it: DocItem): boolean => {
      if (it.href === pathname) return true;
      if (it.items) {
        return it.items.some(isChildActive);
      }
      return false;
    };
    return isChildActive(item);
  });

  useEffect(() => {
    const isChildActive = (it: DocItem): boolean => {
      if (it.href === pathname) return true;
      if (it.items) {
        return it.items.some(isChildActive);
      }
      return false;
    };
    if (isChildActive(item)) {
      setOpen(true);
    }
  }, [pathname, item]);

  return (
    <div>
      <div className="flex items-center justify-between rounded-md hover:bg-white/5 transition-colors">
        <Link
          href={item.href}
          className={cn(
            "flex-1 flex items-center px-3 py-1.5 text-sm transition-colors",
            isActive
              ? "text-kern-light font-medium"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {item.title}
        </Link>
        {hasItems && (
          <button
            onClick={() => setOpen(!open)}
            className="p-1.5 text-muted-foreground/60 hover:text-foreground transition-colors mr-1 rounded"
          >
            {open ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
          </button>
        )}
      </div>
      {hasItems && open && item.items && (
        <div className="ml-3 mt-1 space-y-0.5 border-l border-white/5 pl-3">
          {item.items.map((subItem, idx) => (
            <SidebarItem key={idx} item={subItem} pathname={pathname} />
          ))}
        </div>
      )}
    </div>
  );
}
