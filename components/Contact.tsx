"use client";

import { motion } from "framer-motion";
import { contactInfo } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";

const contactItems = [
  {
    label: "Discord",
    value: contactInfo.discord,
    href: `https://discord.com/users/${contactInfo.discord}`,
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    label: "Roblox",
    value: contactInfo.roblox,
    href: `https://www.roblox.com/users/profile?username=${contactInfo.roblox.replace("@", "")}`,
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.164 0L.16 18.928l18.84 5.072L24 5.072 5.164 0zm2.827 14.576l-1.096-3.84 8.856 2.376-1.096 3.84-6.664-2.376z" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="04 - Contact"
          title="Let's Build Something"
          subtitle="Available for commissions and collaborative projects."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-8 md:p-10"
          >
            <div className="mb-8 flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-rose-500" />
              </span>
              <span className="font-mono text-sm text-rose-400/90">
                {contactInfo.availability}
              </span>
            </div>

            <div className="space-y-4">
              {contactItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition-all hover:border-rose-400/20 hover:bg-rose-500/5"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-rose-500/10 text-rose-400 ring-1 ring-rose-400/20 transition-all group-hover:shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                    {item.icon}
                  </span>
                  <motion.div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">
                      {item.label}
                    </p>
                    <p className="font-medium text-white">{item.value}</p>
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="glass-card flex flex-col justify-between rounded-2xl p-8 md:p-10"
          >
            <div>
              <h3 className="font-display text-xl font-bold text-white">Payment Methods</h3>
              <p className="mt-2 text-sm text-zinc-500">
                Flexible options for commissions and project work.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {contactInfo.paymentMethods.map((method) => (
                  <motion.span
                    key={method}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-sm transition-colors hover:border-rose-400/30 hover:text-rose-200"
                  >
                    {method}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4 text-sm text-zinc-400">
                Ready to bring your vision to life? Reach out and let&apos;s discuss your next
                project.
              </p>
              <GlowButton
                href={`https://discord.com/users/${contactInfo.discord}`}
                variant="primary"
                className="w-full sm:w-auto"
              >
                Message on Discord
              </GlowButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
