"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { GlowButton } from "@/components/ui/GlowButton";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.9 },
  },
};

const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-rose-500/10 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute right-0 bottom-0 h-[400px] w-[600px] rounded-full bg-red-900/10 blur-[100px]"
        />
      </motion.div>

      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 256 256%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%224%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noise)%22 opacity=%220.04%22/%3E%3C/svg%3E')] opacity-40" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8"
      >
        <motion.div variants={item} className="mb-6 flex justify-center gap-3">
          {siteConfig.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-rose-400/20 bg-rose-500/5 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-rose-300/90 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.h1
          variants={item}
          className="font-display text-6xl font-black tracking-tight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          <span className="block bg-gradient-to-b from-white via-white to-zinc-500 bg-clip-text text-transparent drop-shadow-[0_0_60px_rgba(244,63,94,0.15)]">
            {siteConfig.name}
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-lg font-light tracking-wide text-zinc-400 sm:text-xl md:text-2xl"
        >
          <span className="text-rose-400/90">{siteConfig.subtitle}</span>
        </motion.p>

        <motion.p
          variants={item}
          className="mx-auto mt-4 max-w-lg font-mono text-sm text-zinc-500"
        >
          Crafting immersive Roblox experiences with precision code & custom assets
        </motion.p>

        <motion.div
          variants={item}
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <GlowButton href="#projects" variant="primary">
            View Projects
          </GlowButton>
          <GlowButton href="#contact" variant="secondary">
            Contact Me
          </GlowButton>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-20 flex justify-center"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-zinc-500 transition-colors hover:text-rose-400/80"
            aria-label="Scroll to about"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="opacity-60">
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-500/30 to-transparent"
      />
    </section>
  );
}
