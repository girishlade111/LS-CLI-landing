"use client";

import { motion } from "framer-motion";
import {
  Route,
  Code2,
  Bug,
  ScrollText,
  LayoutDashboard,
  Terminal,
  FolderSearch,
  Settings2,
  Users,
  Gpu,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

const features = [
  {
    icon: Route,
    title: "Intelligent Model Routing",
    description:
      "Automatically selects the optimal model for each task based on complexity, context length, and cost constraints. Routes coding tasks to Qwen, debugging to DeepSeek, and long-context analysis to Kimi.",
  },
  {
    icon: Code2,
    title: "Code Generation",
    description:
      "Generate production-ready code across multiple languages and frameworks. Context-aware generation that understands your project structure, dependencies, and coding conventions.",
  },
  {
    icon: Bug,
    title: "Debugging & Refactoring",
    description:
      "Deep reasoning for identifying root causes, suggesting fixes, and refactoring complex codebases. Chain-of-thought analysis for multi-file debugging sessions.",
  },
  {
    icon: ScrollText,
    title: "Long Context Analysis",
    description:
      "Analyze entire codebases, lengthy documentation, and complex specifications in a single context window. Process up to 128K tokens with models optimized for extended context.",
  },
  {
    icon: LayoutDashboard,
    title: "Architecture Planning",
    description:
      "Design system architectures, plan migrations, and evaluate technical trade-offs. Generate architecture diagrams, API specifications, and implementation roadmaps.",
  },
  {
    icon: Terminal,
    title: "CLI Automation",
    description:
      "Pipe output between commands, integrate with shell scripts, and automate repetitive development workflows. Built for composability with Unix philosophy.",
  },
  {
    icon: FolderSearch,
    title: "Workspace Context Awareness",
    description:
      "Automatically indexes your project structure, dependencies, and recent changes. Understands git history, file relationships, and project-specific patterns.",
  },
  {
    icon: Settings2,
    title: "Local Config Support",
    description:
      "Per-project configuration files for model preferences, routing rules, and context settings. Version-controlled configuration that travels with your repository.",
  },
  {
    icon: Users,
    title: "Multi-Tenant Architecture",
    description:
      "Isolated workspaces for team members with shared model pools. Role-based access control, usage tracking, and per-tenant resource allocation.",
  },
  {
    icon: Gpu,
    title: "Scalable GPU Backend",
    description:
      "Horizontally scale GPU resources based on demand. Auto-scaling policies, load balancing across model instances, and intelligent request queuing.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        label="Features"
        title="Built for Developer Workflows"
        description="Every feature is designed for developers who need AI assistance without leaving their terminal or sacrificing infrastructure control."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{
                y: -3,
                boxShadow: "0 8px 24px var(--card-hover-shadow)",
                transition: { duration: 0.2 },
              }}
              className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-[var(--card-hover-border)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-surfaceAlt transition-colors group-hover:bg-[var(--highlight-bg)]">
                <feature.icon className="h-5 w-5 text-textSecondary transition-colors group-hover:text-textPrimary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-textPrimary">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-textMuted">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border">
        <div className="rounded-lg border border-border bg-surface p-10 text-center md:p-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-textPrimary md:text-3xl">
              More Features Coming at Launch
            </h2>
            <p className="mx-auto mt-3 max-w-md text-textMuted">
              The feature set is actively expanding. Join the early access list
              to get notified when new capabilities are available.
            </p>
            <span className="mt-6 inline-flex items-center rounded-md bg-textPrimary px-6 py-3 text-sm font-semibold text-background">
              Launching Soon
            </span>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
