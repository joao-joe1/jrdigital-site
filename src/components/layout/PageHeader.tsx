"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
}

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-40 lg:pt-48">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-primary-700/25 blur-[120px]" />
      <div className="absolute inset-0 -z-10 grid-bg" />

      <div className="container-base relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {eyebrow ? (
            <span className="inline-block rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary-300">
              {eyebrow}
            </span>
          ) : null}
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
              {subtitle}
            </p>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
}
