import Link from "next/link";
import { Terminal } from "lucide-react";

const footerColumns = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/#models", label: "Models" },
      { href: "/#infrastructure", label: "Infrastructure" },
    ],
  },
  {
    title: "Architecture",
    links: [
      { href: "/architecture", label: "System Design" },
      { href: "/architecture#routing", label: "Model Routing" },
      { href: "/architecture#serving", label: "GPU Serving" },
      { href: "/architecture#scaling", label: "Auto Scaling" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/about#vision", label: "Vision" },
      { href: "/about#principles", label: "Principles" },
    ],
  },
  {
    title: "Connect",
    links: [
      { href: "/contact", label: "Contact" },
      { href: "/contact#enterprise", label: "Enterprise" },
      { href: "/contact#early-access", label: "Early Access" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-textPrimary">
                <Terminal className="h-4 w-4 text-background" />
              </div>
              <span className="text-lg font-bold tracking-tight text-textPrimary">
                Lade Stack
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-textMuted">
              Sovereign AI infrastructure for developers who demand full control
              over their models, data, and compute.
            </p>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-textSecondary">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-textMuted transition-colors hover:text-textPrimary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-textMuted">
            &copy; 2026 Lade Stack. All rights reserved.
          </p>
          <p className="text-sm text-textMuted">
            Built for developers. Powered by open-source.
          </p>
        </div>
      </div>
    </footer>
  );
}
