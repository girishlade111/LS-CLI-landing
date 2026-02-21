"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border-subtle bg-surface pt-16">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="mb-4 inline-block rounded bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {label}
          </span>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-text-primary md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-muted">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
