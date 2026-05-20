"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function GlowButton({
  href,
  children,
  variant = "primary",
  className,
}: GlowButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300",
        isPrimary
          ? "bg-rose-500/10 text-rose-100 ring-1 ring-rose-400/40 hover:bg-rose-500/20 hover:shadow-[0_0_40px_rgba(244,63,94,0.35)]"
          : "bg-white/5 text-zinc-200 ring-1 ring-white/10 backdrop-blur-md hover:bg-white/10 hover:ring-white/20",
        className
      )}
    >
      {isPrimary && (
        <span className="absolute inset-0 -z-10 bg-gradient-to-r from-rose-500/0 via-rose-400/20 to-rose-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      {children}
    </motion.a>
  );
}
