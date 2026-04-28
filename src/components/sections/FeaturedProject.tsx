"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck,
  MessageCircle,
  Scissors,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { whatsappLink } from "@/lib/utils";

// Caso o link direto do imgbb mude, basta atualizar este URL.
// Para produção recomenda-se baixar a imagem para /public/projects/barbershop.png
const FEATURED_IMAGE =
  "https://i.ibb.co/G37sZkXy/image.png";

const highlights = [
  { icon: CalendarCheck, label: "+184% agendamentos" },
  { icon: MessageCircle, label: "Lembretes automáticos" },
  { icon: TrendingUp, label: "Menos faltas" },
];

export function FeaturedProject() {
  return (
    <section className="relative pt-8">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="group relative overflow-hidden rounded-3xl border border-primary-500/30 bg-gradient-to-br from-primary-900/40 via-background to-background p-6 shadow-glow md:p-10 lg:p-12"
        >
          {/* Glow effects */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary-700/30 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-primary-600/20 blur-[140px]" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:items-center">
            {/* Texto */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-200">
                <Sparkles size={12} />
                Projeto em destaque
              </div>

              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-5xl">
                Sistema completo para{" "}
                <span className="text-gradient-purple">barbearias premium</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
                Plataforma sob medida para barbearias que querem mais
                organização, mais clientes e mais autoridade. Agendamento
                online, lembretes via WhatsApp, gestão de profissionais e
                experiência mobile-first.
              </p>

              <ul className="mt-7 flex flex-wrap gap-2.5">
                {highlights.map((h) => (
                  <li
                    key={h.label}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
                  >
                    <h.icon size={12} className="text-primary-300" />
                    {h.label}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappLink(
                    "Olá! Vi o case da barbearia no site e quero entender melhor."
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-primary-700 to-primary-500 px-6 text-sm font-medium text-white shadow-glow transition-all hover:shadow-glow-lg"
                >
                  Quero um sistema assim
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5"
                  />
                </a>

                <span className="inline-flex items-center gap-2 text-xs text-white/50">
                  <span className="grid h-7 w-7 place-items-center rounded-lg bg-white/[0.04] ring-1 ring-white/10">
                    <Scissors size={12} className="text-primary-300" />
                  </span>
                  BarberShop · Case JR Digital
                </span>
              </div>
            </div>

            {/* Imagem do case */}
            <div className="relative">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-2xl">
                <Image
                  src={FEATURED_IMAGE}
                  alt="Case de sistema para barbearia desenvolvido pela JR Digital Agency"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 60vw, 100vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-primary-900/20" />
              </div>

              {/* Float badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -left-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-elevated/90 px-4 py-3 shadow-glow backdrop-blur-xl sm:flex"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary-700/40">
                  <CalendarCheck size={14} className="text-primary-300" />
                </span>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/50">
                    Agendamentos hoje
                  </p>
                  <p className="text-sm font-bold text-white">
                    +184% vs antes
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
