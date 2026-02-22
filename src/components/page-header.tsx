"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  label: string;
  title: string;
  description: string;
}

export function PageHeader({ label, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-border bg-surface pt-16">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="mb-4 inline-block rounded-md border border-border bg-surfaceAlt px-3 py-1 text-xs font-semibold uppercase tracking-wider text-textSecondary">
            {label}
          </span>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-textPrimary md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-textMuted">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
