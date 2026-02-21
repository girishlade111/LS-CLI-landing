"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/architecture", label: "Architecture" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border-subtle bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-accent">
            <Terminal className="h-4 w-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight text-text-primary">
            Lade Stack
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-accent"
                  : "text-text-muted hover:text-text-primary"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <span className="rounded border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
            Launching Soon
          </span>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="text-text-muted md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border-subtle bg-background md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-accent/10 text-accent"
                      : "text-text-muted hover:text-text-primary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-border-subtle pt-3">
                <span className="block rounded border border-accent/30 bg-accent/10 px-4 py-2.5 text-center text-sm font-medium text-accent">
                  Launching Soon
                </span>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
