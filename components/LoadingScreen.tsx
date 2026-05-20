"use client";

import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  isLoading: boolean;
}

export function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080506]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(244,63,94,0.08)_0%,transparent_60%)]" />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative flex flex-col items-center gap-6"
          >
            <motion.div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="h-16 w-16 rounded-full border-2 border-rose-500/20 border-t-rose-400"
              />
              <motion.div className="absolute inset-2 rounded-full bg-rose-400/10 blur-md" />
            </motion.div>

            <motion.div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="font-display text-xl font-bold tracking-[0.2em] text-white"
              >
                ROBERTO
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-2 font-mono text-xs uppercase tracking-[0.4em] text-rose-400/70"
              >
                Loading Studio
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 120 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-px bg-gradient-to-r from-transparent via-rose-400 to-transparent"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
