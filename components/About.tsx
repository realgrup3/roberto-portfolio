"use client";

import { motion } from "framer-motion";
import { aboutContent, siteConfig } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OptionalImage } from "@/components/ui/OptionalImage";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute right-0 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-rose-500/5 blur-[80px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <SectionHeading
          label="01 - About"
          title="Building Worlds That Feel Alive"
          subtitle="Developer, creator, and problem solver on the Roblox platform."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          <div className="relative lg:col-span-2">
            <div className="glass-card aspect-square overflow-hidden rounded-2xl p-1">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="relative h-full min-h-[280px] overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 via-[#0c1220] to-zinc-950"
              >
                <OptionalImage
                  src={aboutContent.image}
                  alt={siteConfig.name}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="opacity-90"
                  fallback={
                    <>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(244,63,94,0.15),transparent_50%)]" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-display text-7xl font-black text-white/10 md:text-8xl">
                          R
                        </span>
                      </div>
                    </>
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <p className="font-mono text-xs uppercase tracking-widest text-rose-400/80">
                    Roblox Developer
                  </p>
                  <p className="mt-1 text-sm text-zinc-400">{siteConfig.handle}</p>
                </div>
              </motion.div>
            </div>
            <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl border border-rose-500/10" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col justify-center lg:col-span-3"
          >
            <p className="text-lg leading-relaxed text-zinc-300 md:text-xl md:leading-relaxed">
              {aboutContent.text}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3"
            >
              {[
                { label: "Age", value: "17" },
                { label: "Origin", value: "Spain" },
                { label: "Focus", value: "Luau & 3D" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="glass-card rounded-xl p-4 text-center sm:text-left"
                >
                  <p className="font-mono text-[10px] uppercase tracking-widest text-rose-400/70">
                    {stat.label}
                  </p>
                  <p className="mt-1 font-display text-xl font-bold text-white">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
