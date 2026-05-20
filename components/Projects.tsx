"use client";

import { motion } from "framer-motion";
import { featuredProjects, placeholderProjects } from "@/lib/data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { OptionalImage } from "@/components/ui/OptionalImage";

function ProjectLetterFallback({
  letter,
  accent,
  large = false,
}: {
  letter: string;
  accent?: string;
  large?: boolean;
}) {
  return (
    <div
      className={
        large
          ? "flex h-28 w-28 items-center justify-center rounded-2xl border border-white/10 bg-black/40 font-display text-4xl font-black text-white/20 backdrop-blur-sm"
          : "font-display text-2xl font-bold text-white/5"
      }
      style={accent ? { color: `${accent}33` } : undefined}
    >
      {letter}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-rose-500/20 to-transparent"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="pointer-events-none absolute left-0 top-1/3 h-72 w-72 rounded-full bg-red-900/5 blur-[100px]"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          label="03 - Projects"
          title="Featured Work"
          subtitle="Immersive experiences built with custom assets and optimized systems."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 grid gap-8 lg:grid-cols-2"
        >
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="project-card group relative overflow-hidden rounded-2xl"
            >
              <div
                className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.gradient}`}
              >
                <OptionalImage
                  src={project.image}
                  alt={project.name}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="transition-transform duration-500 group-hover:scale-105"
                  fallback={
                    <div className="absolute inset-0 flex items-center justify-center">
                      <ProjectLetterFallback
                        letter={project.name.charAt(0)}
                        accent={project.accent}
                        large
                      />
                    </div>
                  }
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90"
                />

                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-rose-500/20 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-rose-300 ring-1 ring-rose-400/30">
                    Featured
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 transition-transform duration-500 group-hover:translate-y-0">
                  <div className="h-px w-full scale-x-0 bg-gradient-to-r from-rose-400/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </div>

              <div className="glass-card border-t-0 rounded-t-none rounded-b-2xl p-6 md:p-8">
                <h3 className="font-display text-2xl font-bold text-white transition-colors group-hover:text-rose-100 md:text-3xl">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                  {project.description}
                </p>
                <motion.div
                  className="mt-6 flex items-center gap-2 text-sm font-medium text-rose-400/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <span>View Details</span>
                  <svg
                    className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
            More Projects
          </p>
          <motion.div
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:gap-4"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.05 } },
            }}
          >
            {placeholderProjects.map((project, index) => (
              <motion.div
                key={project.name}
                variants={{
                  hidden: { opacity: 0, scale: 0.95 },
                  show: { opacity: 1, scale: 1 },
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="placeholder-card group cursor-default overflow-hidden rounded-xl"
              >
                <motion.div
                  className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-zinc-900 to-zinc-950"
                  style={{
                    backgroundImage: `linear-gradient(${135 + index * 15}deg, rgba(244,63,94,0.08) 0%, transparent 50%, rgba(185,28,28,0.06) 100%)`,
                  }}
                >
                  <OptionalImage
                    src={project.image}
                    alt={project.name}
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="transition-transform duration-300 group-hover:scale-105"
                    fallback={
                      <div className="absolute inset-0 flex items-center justify-center">
                        <ProjectLetterFallback letter={project.name.charAt(0)} />
                      </div>
                    }
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3">
                    <p className="truncate text-xs font-medium text-zinc-400 transition-colors group-hover:text-zinc-200">
                      {project.name}
                    </p>
                  </div>
                  <span className="absolute top-2 right-2 rounded bg-white/5 px-1.5 py-0.5 font-mono text-[9px] text-zinc-600">
                    Soon
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
