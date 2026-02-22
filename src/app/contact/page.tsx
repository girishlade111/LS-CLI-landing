"use client";

import { motion } from "framer-motion";
import { Mail, Building2, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Section } from "@/components/section";

const contactTypes = [
  {
    icon: Mail,
    title: "General Inquiries",
    description:
      "Questions about Lade Stack, its capabilities, or how it fits your workflow.",
  },
  {
    icon: Building2,
    title: "Enterprise Deployment",
    description:
      "On-premises deployment, custom infrastructure, compliance requirements, and SLA discussions.",
  },
  {
    icon: Sparkles,
    title: "Early Access Interest",
    description:
      "Request early access to the CLI before the public launch. Limited spots available.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Contact"
        title="Get in Touch"
        description="Whether you have questions about Lade Stack, need enterprise deployment support, or want early access — we are here to help."
      />

      <Section id="enterprise">
        <div className="grid gap-5 md:grid-cols-3">
          {contactTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{
                y: -3,
                boxShadow: "0 8px 24px var(--card-hover-shadow)",
                transition: { duration: 0.2 },
              }}
              className="group rounded-lg border border-border bg-surface p-6 transition-colors hover:border-[var(--card-hover-border)]"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-surfaceAlt transition-colors group-hover:bg-[var(--highlight-bg)]">
                <type.icon className="h-5 w-5 text-textSecondary transition-colors group-hover:text-textPrimary" />
              </div>
              <h3 className="mb-1 text-base font-semibold text-textPrimary">
                {type.title}
              </h3>
              <p className="text-sm text-textMuted">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="early-access" className="border-t border-border">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-2xl font-bold text-textPrimary">
              Send a Message
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-textPrimary"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    disabled
                    className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-textPrimary placeholder:text-textMuted focus:border-textPrimary focus:outline-none disabled:opacity-60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-textPrimary"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@company.com"
                    disabled
                    className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-textPrimary placeholder:text-textMuted focus:border-textPrimary focus:outline-none disabled:opacity-60"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-type"
                  className="mb-1.5 block text-sm font-medium text-textPrimary"
                >
                  Inquiry Type
                </label>
                <select
                  id="contact-type"
                  disabled
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-textMuted focus:border-textPrimary focus:outline-none disabled:opacity-60"
                >
                  <option>General Inquiry</option>
                  <option>Enterprise Deployment</option>
                  <option>Early Access Request</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="contact-company"
                  className="mb-1.5 block text-sm font-medium text-textPrimary"
                >
                  Company (Optional)
                </label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="Your company"
                  disabled
                  className="w-full rounded-md border border-border bg-background px-4 py-2.5 text-sm text-textPrimary placeholder:text-textMuted focus:border-textPrimary focus:outline-none disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-textPrimary"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your use case or what you need..."
                  disabled
                  className="w-full resize-none rounded-md border border-border bg-background px-4 py-2.5 text-sm text-textPrimary placeholder:text-textMuted focus:border-textPrimary focus:outline-none disabled:opacity-60"
                />
              </div>

              <button
                disabled
                className="w-full rounded-md bg-textPrimary py-3 text-sm font-semibold text-background opacity-70"
              >
                Launching Soon — Form Available at Launch
              </button>
            </form>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
