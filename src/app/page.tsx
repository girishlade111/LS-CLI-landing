"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  DollarSign,
  Lock,
  GitBranch,
  TerminalSquare,
  Cpu,
  Container,
  HardDrive,
  Layers,
  Zap,
  Server,
  Brain,
  Globe,
  BookOpen,
  Mail,
} from "lucide-react";
import { TerminalAnimation } from "@/components/terminal-animation";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Section, SectionHeader } from "@/components/section";

const whyReasons = [
  {
    icon: ShieldCheck,
    title: "No API Vendor Lock-in",
    description:
      "Run any open-source model on your own infrastructure. Switch models without changing a single line of code.",
  },
  {
    icon: DollarSign,
    title: "Predictable Cost at Scale",
    description:
      "Fixed GPU costs instead of per-token billing. Run thousands of requests at a fraction of the API price.",
  },
  {
    icon: Lock,
    title: "Privacy-First",
    description:
      "Your code never leaves your infrastructure. Full data sovereignty with zero external telemetry.",
  },
  {
    icon: GitBranch,
    title: "Multi-Model Routing",
    description:
      "Intelligent routing across multiple models based on task type, context length, and cost optimization.",
  },
  {
    icon: TerminalSquare,
    title: "CLI-Native Workflow",
    description:
      "Built for developers who live in the terminal. No browser tabs, no context switching.",
  },
];

const models = [
  {
    name: "Qwen",
    focus: "Coding",
    description:
      "High-performance code generation and completion. Optimized for multi-language development with strong reasoning capabilities.",
    icon: Cpu,
    color: "#3B82F6",
  },
  {
    name: "DeepSeek",
    focus: "Debugging & Reasoning",
    description:
      "Deep chain-of-thought reasoning for complex debugging, architecture review, and multi-step problem solving.",
    icon: Brain,
    color: "#6366F1",
  },
  {
    name: "GLM",
    focus: "Multilingual Reasoning",
    description:
      "Strong multilingual capabilities with robust reasoning across natural language understanding tasks.",
    icon: Globe,
    color: "#10B981",
  },
  {
    name: "Kimi",
    focus: "Long Context",
    description:
      "Extended context window support for analyzing large codebases, documentation, and complex specifications.",
    icon: BookOpen,
    color: "#F59E0B",
  },
];

const infrastructure = [
  {
    icon: Server,
    title: "GPU Virtual Machines",
    description: "Deploy on AWS, GCP, or any cloud provider with GPU support.",
  },
  {
    icon: Zap,
    title: "Quantization",
    description: "4-bit and 8-bit quantization for optimal memory efficiency.",
  },
  {
    icon: Container,
    title: "Docker Containerization",
    description: "Pre-built containers for instant deployment and reproducibility.",
  },
  {
    icon: Layers,
    title: "Kubernetes-Ready",
    description: "Helm charts and manifests for production orchestration.",
  },
  {
    icon: HardDrive,
    title: "Model Caching",
    description: "Persistent model cache with intelligent preloading strategies.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border-subtle pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.08)_0%,_transparent_60%)]" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-block rounded bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                Coming Soon
              </span>
              <h1 className="text-4xl font-bold leading-tight tracking-tight text-text-primary md:text-5xl lg:text-6xl">
                Sovereign AI
                <br />
                for Developers.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-muted">
                A self-hosted multi-model AI CLI built for full infrastructure
                control. Run open-source LLMs on your own GPUs with zero
                vendor dependency.
              </p>
              <div className="mt-8">
                <span className="inline-flex items-center rounded border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent">
                  Launching Soon
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <TerminalAnimation />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why It Exists */}
      <Section>
        <SectionHeader
          label="Philosophy"
          title="Why Lade Stack Exists"
          description="The current AI tooling landscape forces developers into vendor lock-in, unpredictable costs, and zero control over their infrastructure. Lade Stack changes that."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyReasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2 }}
              className="rounded border border-border-subtle bg-surface p-6 transition-colors hover:border-accent/20"
            >
              <reason.icon className="mb-4 h-5 w-5 text-accent" />
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="border-t border-border-subtle bg-surface/50">
        <SectionHeader
          label="Architecture"
          title="How It Works"
          description="From your terminal to GPU-accelerated inference, every layer is designed for developer control and operational transparency."
        />
        <ArchitectureDiagram />
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {[
            { step: "01", title: "Developer", desc: "CLI command input" },
            { step: "02", title: "CLI Parser", desc: "Context-aware parsing" },
            { step: "03", title: "Router", desc: "Intelligent model selection" },
            { step: "04", title: "Model Pool", desc: "Multi-model inference" },
            { step: "05", title: "GPU VMs", desc: "Hardware-accelerated compute" },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded border border-border-subtle bg-background p-4 text-center"
            >
              <span className="block font-mono text-xs text-accent">
                {item.step}
              </span>
              <span className="mt-1 block text-sm font-semibold text-text-primary">
                {item.title}
              </span>
              <span className="mt-0.5 block text-xs text-text-muted">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Models Supported */}
      <Section>
        <SectionHeader
          label="Models"
          title="Multi-Model Support"
          description="Route tasks to the best model for the job. Each model is optimized for specific workloads and runs on your own infrastructure."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ y: -2 }}
              className="rounded border border-border-subtle bg-surface p-6 transition-colors hover:border-border-subtle/80"
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded"
                  style={{ backgroundColor: model.color + "15" }}
                >
                  <model.icon
                    className="h-5 w-5"
                    style={{ color: model.color }}
                  />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {model.name}
                  </h3>
                  <span
                    className="text-xs font-medium"
                    style={{ color: model.color }}
                  >
                    {model.focus}
                  </span>
                </div>
              </div>
              <p className="text-sm leading-relaxed text-text-muted">
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Infrastructure Layer */}
      <Section className="border-t border-border-subtle bg-surface/50">
        <SectionHeader
          label="Infrastructure"
          title="Production-Grade Infrastructure"
          description="Deploy on any cloud provider with GPU support. Optimized for performance, cost, and operational reliability."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {infrastructure.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 rounded border border-border-subtle bg-background p-5"
            >
              <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-success" />
              <div>
                <h3 className="text-sm font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Launch Banner */}
      <Section>
        <div className="rounded border border-border-subtle bg-surface p-10 text-center md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl">
              CLI Launching Soon
            </h2>
            <p className="mx-auto mt-4 max-w-md text-text-muted">
              Be the first to know when Lade Stack is available. Join the early
              access list.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="email-input" className="sr-only">
                  Email address
                </label>
                <div className="flex items-center rounded border border-border-subtle bg-background">
                  <Mail className="ml-3 h-4 w-4 text-text-muted" />
                  <input
                    id="email-input"
                    type="email"
                    placeholder="developer@company.com"
                    className="w-full bg-transparent px-3 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none"
                    disabled
                  />
                </div>
              </div>
              <button
                disabled
                className="rounded border border-accent/30 bg-accent/10 px-6 py-2.5 text-sm font-semibold text-accent opacity-70"
              >
                Coming Soon
              </button>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
