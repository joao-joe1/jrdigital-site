"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-24 pt-40 lg:pb-32 lg:pt-48">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 grid-bg" />

      {/* Glow blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary-700/30 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 left-10 h-[300px] w-[300px] rounded-full bg-primary-500/20 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-20 right-10 h-[400px] w-[400px] rounded-full bg-primary-900/30 blur-[120px]" />

      <div className="container-base relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/70 backdrop-blur-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
            </span>
            Aceitando novos projetos em 2026
            <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          >
            Transformamos negócios comuns em{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500 bg-clip-text text-transparent">
                máquinas de vendas
              </span>
              <span className="absolute -bottom-1 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary-400 to-transparent" />
            </span>{" "}
            automatizadas.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-white/60 md:text-xl"
          >
            Criamos sites e sistemas inteligentes que fazem seu cliente comprar
            mais rápido, sem depender de atendimento manual.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Link href="/projetos">
              <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                Ver projetos
              </Button>
            </Link>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="ghost"
                leftIcon={<MessageCircle size={18} />}
              >
                Falar no WhatsApp
              </Button>
            </a>
          </motion.div>

          {/* Trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-20 grid w-full max-w-3xl grid-cols-3 gap-6 border-t border-white/5 pt-8"
          >
            {[
              { value: "+50", label: "Projetos entregues" },
              { value: "98%", label: "Clientes satisfeitos" },
              { value: "24/7", label: "Sistemas no ar" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="font-display text-2xl font-bold text-white md:text-3xl">
                  {item.value}
                </p>
                <p className="mt-1 text-xs text-white/50 md:text-sm">
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Floating side cards */}
        <FloatingBadge
          className="left-4 top-44 hidden lg:block"
          delay={0.8}
          icon={<Zap size={14} className="text-primary-300" />}
          title="Conversão"
          value="+312%"
        />
        <FloatingBadge
          className="right-4 top-72 hidden lg:block"
          delay={1}
          icon={<Sparkles size={14} className="text-primary-300" />}
          title="Atendimento"
          value="Automatizado"
        />
      </div>
    </section>
  );
}

function FloatingBadge({
  icon,
  title,
  value,
  className,
  delay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7 }}
      className={`absolute ${className}`}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 shadow-glow backdrop-blur-xl"
      >
        <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-700/40">
          {icon}
        </span>
        <div className="text-left">
          <p className="text-[10px] uppercase tracking-wider text-white/50">
            {title}
          </p>
          <p className="text-sm font-semibold text-white">{value}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
