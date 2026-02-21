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

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {contactTypes.map((type, i) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded border border-border-subtle bg-surface p-6"
            >
              <type.icon className="mb-3 h-5 w-5 text-accent" />
              <h3 className="mb-1 text-base font-semibold text-text-primary">
                {type.title}
              </h3>
              <p className="text-sm text-text-muted">{type.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-border-subtle">
        <div className="mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-8 text-2xl font-bold text-text-primary">
              Send a Message
            </h2>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Your name"
                    disabled
                    className="w-full rounded border border-border-subtle bg-background px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none disabled:opacity-60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-sm font-medium text-text-primary"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="you@company.com"
                    disabled
                    className="w-full rounded border border-border-subtle bg-background px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none disabled:opacity-60"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-type"
                  className="mb-1.5 block text-sm font-medium text-text-primary"
                >
                  Inquiry Type
                </label>
                <select
                  id="contact-type"
                  disabled
                  className="w-full rounded border border-border-subtle bg-background px-4 py-2.5 text-sm text-text-muted focus:border-accent focus:outline-none disabled:opacity-60"
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
                  className="mb-1.5 block text-sm font-medium text-text-primary"
                >
                  Company (Optional)
                </label>
                <input
                  id="contact-company"
                  type="text"
                  placeholder="Your company"
                  disabled
                  className="w-full rounded border border-border-subtle bg-background px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none disabled:opacity-60"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-1.5 block text-sm font-medium text-text-primary"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  placeholder="Tell us about your use case or what you need..."
                  disabled
                  className="w-full resize-none rounded border border-border-subtle bg-background px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none disabled:opacity-60"
                />
              </div>

              <button
                disabled
                className="w-full rounded border border-accent/30 bg-accent/10 py-3 text-sm font-semibold text-accent opacity-70"
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
