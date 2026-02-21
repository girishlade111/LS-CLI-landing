"use client";

import { motion } from "framer-motion";
import { Check, Building2, Users, Code2 } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

const tiers = [
  {
    icon: Code2,
    name: "Developer",
    description: "For individual developers and small projects.",
    status: "Launching Soon",
    features: [
      "Single GPU instance",
      "Up to 2 models loaded",
      "CLI access with full features",
      "Local configuration support",
      "Community support",
      "Basic usage analytics",
    ],
  },
  {
    icon: Users,
    name: "Team",
    description: "For development teams that need shared infrastructure.",
    status: "Launching Soon",
    highlighted: true,
    features: [
      "Multi-GPU cluster support",
      "Unlimited model pool",
      "Multi-tenant workspaces",
      "Role-based access control",
      "Priority model routing",
      "Usage dashboards and reporting",
      "Shared model cache",
      "Email support",
    ],
  },
  {
    icon: Building2,
    name: "Enterprise",
    description: "For organizations requiring on-premises deployment.",
    status: "On-Prem Ready",
    features: [
      "Dedicated GPU infrastructure",
      "Custom model fine-tuning",
      "Air-gapped deployment option",
      "SSO and LDAP integration",
      "SLA guarantees",
      "Dedicated support engineer",
      "Custom routing policies",
      "Audit logging",
      "Compliance certifications",
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        label="Pricing"
        title="Simple, Predictable Pricing"
        description="No per-token billing. No surprise costs. Fixed infrastructure pricing that scales with your usage, not against it."
      />

      <Section>
        <div className="mb-10 rounded border border-accent/20 bg-accent/5 p-4 text-center">
          <p className="text-sm font-medium text-accent">
            Pricing to be announced. All plans will be available at launch.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`flex flex-col rounded border p-6 ${
                tier.highlighted
                  ? "border-accent/30 bg-accent/5"
                  : "border-border-subtle bg-surface"
              }`}
            >
              <div className="mb-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded bg-accent/10">
                  <tier.icon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-text-primary">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-text-muted">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6 border-t border-border-subtle pt-6">
                <span className="text-2xl font-bold text-text-muted">—</span>
                <p className="mt-1 text-xs text-text-muted">
                  Pricing to be announced
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    <span className="text-sm text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                disabled
                className={`w-full rounded py-2.5 text-sm font-semibold ${
                  tier.highlighted
                    ? "border border-accent/30 bg-accent/10 text-accent opacity-80"
                    : "border border-border-subtle bg-background text-text-muted opacity-70"
                }`}
              >
                {tier.status}
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border-subtle">
        <div className="rounded border border-border-subtle bg-surface p-10 text-center md:p-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-text-primary">
              Need Custom Infrastructure?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-text-muted">
              For organizations with specific deployment requirements, compliance
              needs, or large-scale GPU infrastructure, reach out to discuss a
              custom plan.
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
