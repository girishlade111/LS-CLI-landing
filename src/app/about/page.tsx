"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Server,
  Clock,
  Terminal,
  Eye,
  Database,
} from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section, SectionHeader } from "@/components/section";

const principles = [
  {
    icon: Shield,
    title: "Sovereignty Over Your AI Stack",
    description:
      "Every byte of code you send to an AI model should stay on infrastructure you control. Lade Stack ensures your intellectual property, proprietary code, and sensitive data never leave your environment. No third-party API, no external telemetry, no data sharing.",
  },
  {
    icon: Server,
    title: "Why Self-Hosted Matters",
    description:
      "API-based AI tools create a dependency chain that grows with your usage. When the API changes pricing, deprecates models, or experiences downtime, your entire workflow breaks. Self-hosted infrastructure means you own the uptime, you control the costs, and you decide when to upgrade.",
  },
  {
    icon: Clock,
    title: "Long-Term Independence",
    description:
      "Token-based pricing models are designed to scale with your success — against your budget. As your team grows and your usage increases, costs become unpredictable. Fixed GPU infrastructure costs are transparent, plannable, and decrease per-request as utilization increases.",
  },
  {
    icon: Terminal,
    title: "Developer-First Philosophy",
    description:
      "Every design decision in Lade Stack starts with the developer experience. CLI-native interfaces, composable commands, local configuration files, and workspace-aware context. No browser UIs, no wrappers — direct integration with how developers actually work.",
  },
];

const values = [
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Open routing decisions, visible model selection logic, and clear cost attribution. You always know which model processed your request, how many tokens were used, and what it cost.",
  },
  {
    icon: Database,
    title: "Control",
    description:
      "Choose your models. Choose your GPU provider. Choose your quantization strategy. Choose your scaling policy. Every layer of the stack is configurable, replaceable, and under your authority.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About"
        title="Building Sovereign AI Infrastructure"
        description="Lade Stack exists because developers deserve AI tools that respect their infrastructure, their data, and their autonomy."
      />

      <Section>
        <SectionHeader
          label="Vision"
          title="The Case for Sovereign AI"
          description="The current generation of AI developer tools requires sending proprietary code to third-party APIs with opaque data handling, unpredictable pricing, and zero infrastructure control. This is fundamentally incompatible with how serious engineering organizations operate."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((principle, i) => (
            <motion.div
              key={principle.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded border border-border-subtle bg-surface p-6"
            >
              <principle.icon className="mb-4 h-5 w-5 text-accent" />
              <h3 className="mb-3 text-lg font-semibold text-text-primary">
                {principle.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border-subtle bg-surface/50">
        <SectionHeader
          label="Principles"
          title="What We Stand For"
          description="These principles guide every technical and product decision we make."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded border border-border-subtle bg-background p-6"
            >
              <value.icon className="mb-4 h-5 w-5 text-success" />
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-2xl font-bold text-text-primary">
              The Technical Bet
            </h2>
            <div className="space-y-4 text-sm leading-relaxed text-text-muted">
              <p>
                Open-source large language models are improving at an
                unprecedented rate. Models like Qwen, DeepSeek, and GLM are
                closing the gap with proprietary alternatives on coding benchmarks,
                reasoning tasks, and real-world developer workflows.
              </p>
              <p>
                The cost of GPU compute continues to decrease while model
                efficiency improves through better architectures, quantization
                techniques, and serving optimizations. The economics of
                self-hosted AI are becoming increasingly favorable.
              </p>
              <p>
                Lade Stack is built on the conviction that within the next cycle of
                model development, self-hosted open-source models will match or
                exceed proprietary API performance for the majority of developer
                use cases — at a fraction of the cost and with complete data
                sovereignty.
              </p>
              <p>
                We are building the infrastructure layer that makes this transition
                seamless, practical, and production-ready.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="border-t border-border-subtle">
        <div className="rounded border border-border-subtle bg-surface p-10 text-center md:p-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-text-primary md:text-3xl">
              Join the Movement
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-text-muted">
              Lade Stack is for developers who believe AI infrastructure should
              be owned, not rented. The CLI is launching soon.
            </p>
            <span className="mt-6 inline-flex items-center rounded border border-accent/30 bg-accent/10 px-6 py-3 text-sm font-semibold text-accent">
              Launching Soon
            </span>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
