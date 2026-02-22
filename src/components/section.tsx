"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("py-20 md:py-28", className)}
    >
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </motion.section>
  );
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: {
  label?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-2xl md:mb-16", className)}>
      {label && (
        <span className="mb-3 inline-block rounded-md border border-border bg-surfaceAlt px-3 py-1 text-xs font-semibold uppercase tracking-wider text-textSecondary">
          {label}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-textPrimary md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg leading-relaxed text-textMuted">
          {description}
        </p>
      )}
    </div>
  );
}
