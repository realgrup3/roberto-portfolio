"use client";

import { motion } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-[#060304]/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rose-500/20 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <p className="font-display text-2xl font-bold text-white">
              {siteConfig.name}
              <span className="text-rose-400">.</span>
            </p>
            <p className="mt-2 font-mono text-xs text-zinc-500">
              {siteConfig.subtitle} | {siteConfig.handle}
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-zinc-500 transition-colors hover:text-rose-400"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row"
        >
          <p className="font-mono text-xs text-zinc-600">
            {year} Roberto. All rights reserved.
          </p>
          <p className="font-mono text-xs text-zinc-600">
            Built with Next.js, Tailwind, Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
