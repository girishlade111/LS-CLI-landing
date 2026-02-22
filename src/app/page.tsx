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
  ArrowRight,
} from "lucide-react";
import { TerminalAnimation } from "@/components/terminal-animation";
import { ArchitectureDiagram } from "@/components/architecture-diagram";
import { Section, SectionHeader } from "@/components/section";
import { HeroWaveBackground } from "@/components/ui/hero-wave-background";

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
    title: "Privacy-First Architecture",
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
    focus: "Code Generation",
    description:
      "High-performance code generation and completion. Optimized for multi-language development with strong reasoning capabilities.",
    icon: Cpu,
    tag: "coding",
  },
  {
    name: "DeepSeek",
    focus: "Debugging & Reasoning",
    description:
      "Deep chain-of-thought reasoning for complex debugging, architecture review, and multi-step problem solving.",
    icon: Brain,
    tag: "reasoning",
  },
  {
    name: "GLM",
    focus: "Multilingual Reasoning",
    description:
      "Strong multilingual capabilities with robust reasoning across natural language understanding tasks.",
    icon: Globe,
    tag: "multilingual",
  },
  {
    name: "Kimi",
    focus: "Long Context Analysis",
    description:
      "Extended context window support for analyzing large codebases, documentation, and complex specifications.",
    icon: BookOpen,
    tag: "128k-context",
  },
];

const infrastructure = [
  {
    icon: Server,
    title: "GPU Virtual Machines",
    description:
      "Deploy on AWS, GCP, or any cloud provider with GPU support.",
  },
  {
    icon: Zap,
    title: "Quantization Engine",
    description:
      "4-bit and 8-bit quantization for optimal memory efficiency.",
  },
  {
    icon: Container,
    title: "Docker Containerization",
    description:
      "Pre-built containers for instant deployment and reproducibility.",
  },
  {
    icon: Layers,
    title: "Kubernetes-Ready",
    description: "Helm charts and manifests for production orchestration.",
  },
  {
    icon: HardDrive,
    title: "Model Caching",
    description:
      "Persistent model cache with intelligent preloading strategies.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-background pt-16">
        {/* Layer 0: Animated wave canvas */}
        <HeroWaveBackground />

        {/* Layer 1: Background grid */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M0 0h1v60H0zM60 0h1v60h-1zM0 0h60v1H0zM0 60h60v1H0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Layer 2: Gradient blobs */}
        <div className="absolute top-20 left-1/4 z-[1] h-96 w-96 rounded-full bg-[var(--highlight-bg)] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 z-[1] h-72 w-72 rounded-full bg-[var(--highlight-bg)] blur-[100px]" />

        {/* Layer 3: Readability overlay */}
        <div className="absolute inset-0 z-[2] bg-gradient-to-b from-background/80 via-background/60 to-background dark:from-background/70 dark:via-background/50 dark:to-background" />

        {/* Layer 4: Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-6 inline-block rounded-md border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wider text-textSecondary">
                Infrastructure-Grade AI CLI
              </span>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-textPrimary md:text-5xl lg:text-6xl">
                Sovereign AI{" "}
                <br className="hidden sm:block" />
                <span className="inline-block bg-[var(--highlight-bg)] px-1 rounded">
                  Infrastructure
                </span>{" "}
                <br className="hidden sm:block" />
                for Developers.
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-textMuted">
                Deploy, route, and control open-source LLMs on your own GPU
                infrastructure. Zero vendor dependency. Full data sovereignty.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <span className="inline-flex items-center rounded-md bg-textPrimary px-6 py-3 text-sm font-semibold text-background">
                  Launching Soon
                </span>
                <a
                  href="/architecture"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-medium text-textSecondary hover:text-textPrimary hover:border-textMuted"
                >
                  View Architecture
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>

            {/* Right: Terminal */}
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
          description="The current AI tooling landscape forces developers into vendor lock-in, unpredictable costs, and zero control over their infrastructure."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyReasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{
                y: -3,
                boxShadow: "0 8px 24px var(--card-hover-shadow)",
                transition: { duration: 0.2 },
              }}
              className="group rounded-lg border border-border bg-surface p-6 hover:border-[var(--card-hover-border)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-surfaceAlt group-hover:bg-[var(--highlight-bg)]">
                <reason.icon className="h-5 w-5 text-textSecondary group-hover:text-textPrimary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-textPrimary">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-textMuted">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="border-t border-border bg-surfaceAlt/50">
        <SectionHeader
          label="Architecture"
          title="How It Works"
          description="From your terminal to GPU-accelerated inference. Every layer is designed for developer control and operational transparency."
        />
        <ArchitectureDiagram />
        <div className="mt-8 grid gap-4 md:grid-cols-5">
          {[
            {
              step: "01",
              title: "Developer",
              desc: "CLI command input",
            },
            {
              step: "02",
              title: "CLI Parser",
              desc: "Context-aware parsing",
            },
            {
              step: "03",
              title: "Router",
              desc: "Intelligent model selection",
            },
            {
              step: "04",
              title: "Model Pool",
              desc: "Multi-model inference",
            },
            {
              step: "05",
              title: "GPU VMs",
              desc: "Hardware-accelerated compute",
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border bg-background p-4 text-center"
            >
              <span className="block font-mono text-xs text-textSecondary">
                {item.step}
              </span>
              <span className="mt-1 block text-sm font-semibold text-textPrimary">
                {item.title}
              </span>
              <span className="mt-0.5 block text-xs text-textMuted">
                {item.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Models Supported */}
      <Section id="models">
        <SectionHeader
          label="Models"
          title="Multi-Model Support"
          description="Route tasks to the best model for the job. Each model is optimized for specific workloads and runs on your own infrastructure."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {models.map((model, i) => (
            <motion.div
              key={model.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{
                y: -3,
                boxShadow: "0 8px 24px var(--card-hover-shadow)",
                transition: { duration: 0.2 },
              }}
              className="group rounded-lg border border-border bg-surface p-6 hover:border-[var(--card-hover-border)]"
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surfaceAlt">
                    <model.icon className="h-5 w-5 text-textSecondary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-textPrimary">
                      {model.name}
                    </h3>
                    <span className="text-xs font-medium text-textMuted">
                      {model.focus}
                    </span>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-surfaceAlt px-2.5 py-0.5 font-mono text-xs text-textMuted">
                  {model.tag}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-textMuted">
                {model.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Infrastructure Layer */}
      <Section
        id="infrastructure"
        className="border-t border-border bg-surfaceAlt/50"
      >
        <SectionHeader
          label="Infrastructure"
          title="Production-Grade Infrastructure"
          description="Deploy on any cloud provider with GPU support. Optimized for performance, cost, and operational reliability."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {infrastructure.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -2, transition: { duration: 0.2 } }}
              className="flex gap-4 rounded-lg border border-border bg-background p-5 hover:border-[var(--card-hover-border)]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surfaceAlt">
                <item.icon className="h-5 w-5 text-textSecondary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-textPrimary">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-textMuted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Launch Banner */}
      <Section>
        <div className="rounded-lg border border-border bg-surface p-10 text-center md:p-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-textPrimary md:text-4xl">
              CLI Launching Soon
            </h2>
            <p className="mx-auto mt-4 max-w-md text-textMuted">
              Be the first to know when Lade Stack is available. Join the early
              access list.
            </p>
            <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <div className="flex-1">
                <label htmlFor="email-input" className="sr-only">
                  Email address
                </label>
                <div className="flex items-center rounded-md border border-border bg-background">
                  <Mail className="ml-3 h-4 w-4 text-textMuted" />
                  <input
                    id="email-input"
                    type="email"
                    placeholder="developer@company.com"
                    className="w-full bg-transparent px-3 py-2.5 text-sm text-textPrimary placeholder:text-textMuted focus:outline-none"
                    disabled
                  />
                </div>
              </div>
              <button
                disabled
                className="rounded-md bg-textPrimary px-6 py-2.5 text-sm font-semibold text-background opacity-70"
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
