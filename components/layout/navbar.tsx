"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { title: "Docs", href: "/docs/getting-started" },
  { title: "Agents", href: "/docs/agents" },
  { title: "Workflows", href: "/docs/workflows" },
  { title: "Tools", href: "/docs/tools" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center">
      <div
        className={cn(
          "w-full max-w-5xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-xl shadow-black/40 transition-all duration-300",
          mobileOpen ? "rounded-2xl" : "rounded-full",
        )}
      >
        <div className="flex h-14 items-center justify-between px-6">
          <Link href="/" className="flex items-center">
            <Image
              src="/logos/kern-dark.png"
              alt="Kern"
              width={110}
              height={30}
              className="h-5 w-auto"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-1.5 text-sm font-medium text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
              >
                {link.title}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/ndxrocks/kern"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex size-8 items-center justify-center rounded-full text-zinc-400 transition-colors hover:bg-white/5 hover:text-white"
            >
              <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <Link
              href="/docs/getting-started"
              className="inline-flex h-8 items-center justify-center rounded-full bg-kern px-4 text-xs font-semibold text-white shadow-sm shadow-kern/20 transition-all hover:bg-kern-light"
            >
              Get Started
            </Link>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="text-zinc-400 md:hidden rounded-full hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/5 bg-[#09090B]/60 px-6 py-4 md:hidden rounded-b-2xl">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-400 hover:bg-white/5 hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <div className="mt-3">
                <Link
                  href="/docs/getting-started"
                  className="inline-flex h-9 w-full items-center justify-center rounded-xl bg-kern text-sm font-medium text-white transition-colors hover:bg-kern-light"
                  onClick={() => setMobileOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
