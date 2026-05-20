"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ label, title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12 md:mb-16"
    >
      <span className="mb-3 inline-block font-mono text-xs uppercase tracking-[0.35em] text-rose-400/90">
        {label}
      </span>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        <span className="bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-base text-zinc-400 md:text-lg">{subtitle}</p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="mt-6 h-px w-24 origin-left bg-gradient-to-r from-rose-400 to-transparent"
      />
    </motion.div>
  );
}
