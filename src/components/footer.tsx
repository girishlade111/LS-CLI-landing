import Link from "next/link";
import { Terminal } from "lucide-react";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/architecture", label: "Architecture" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-accent">
              <Terminal className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold tracking-tight text-text-primary">
              Lade Stack
            </span>
          </div>

          <nav className="flex flex-wrap items-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-border-subtle pt-8">
          <p className="text-sm text-text-muted">
            &copy; 2026 Lade Stack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
