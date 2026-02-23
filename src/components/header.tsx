"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

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
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border backdrop-blur-xl" style={{ backgroundColor: "var(--nav-bg)" }}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-textPrimary transition-transform group-hover:scale-105">
            <Terminal className="h-4 w-4 text-background" />
          </div>
          <span className="text-lg font-bold tracking-tight text-textPrimary">
            Lade Stack
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href
                  ? "text-textPrimary"
                  : "text-textMuted hover:text-textPrimary"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-x-1 -bottom-[calc(0.5rem+1px)] h-px bg-textPrimary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-textMuted hover:text-textPrimary hover:border-textSecondary"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>

          {/* CTA */}
          <span className="hidden rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium text-textPrimary md:inline-flex">
            Launching Soon
          </span>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center text-textMuted md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-surface md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    pathname === item.href
                      ? "bg-surfaceAlt text-textPrimary"
                      : "text-textMuted hover:text-textPrimary"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 border-t border-border pt-3">
                <span className="block rounded-md border border-border bg-background px-4 py-2.5 text-center text-sm font-medium text-textPrimary">
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
