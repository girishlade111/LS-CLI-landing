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
        <div className="mb-10 rounded-lg border border-border bg-surfaceAlt p-4 text-center">
          <p className="text-sm font-medium text-textSecondary">
            Pricing to be announced. All plans will be available at launch.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{
                y: -3,
                boxShadow: "0 8px 24px var(--card-hover-shadow)",
                transition: { duration: 0.2 },
              }}
              className={`flex flex-col rounded-lg border p-6 transition-colors hover:border-[var(--card-hover-border)] ${
                tier.highlighted
                  ? "border-textPrimary/20 bg-surface"
                  : "border-border bg-surface"
              }`}
            >
              <div className="mb-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-surfaceAlt">
                  <tier.icon className="h-5 w-5 text-textSecondary" />
                </div>
                <h3 className="text-xl font-bold text-textPrimary">
                  {tier.name}
                </h3>
                <p className="mt-1 text-sm text-textMuted">
                  {tier.description}
                </p>
              </div>

              <div className="mb-6 border-t border-border pt-6">
                <span className="text-2xl font-bold text-textMuted">—</span>
                <p className="mt-1 text-xs text-textMuted">
                  Pricing to be announced
                </p>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-textSecondary" />
                    <span className="text-sm text-textMuted">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                disabled
                className={`w-full rounded-md py-2.5 text-sm font-semibold transition-colors ${
                  tier.highlighted
                    ? "bg-textPrimary text-background opacity-80"
                    : "border border-border bg-background text-textMuted opacity-70"
                }`}
              >
                {tier.status}
              </button>
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
            <h2 className="text-2xl font-bold text-textPrimary">
              Need Custom Infrastructure?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-textMuted">
              For organizations with specific deployment requirements, compliance
              needs, or large-scale GPU infrastructure, reach out to discuss a
              custom plan.
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
