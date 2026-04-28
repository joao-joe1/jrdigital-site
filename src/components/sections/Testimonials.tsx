"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { SectionHeader } from "./Services";

const testimonials = [
  {
    quote:
      "Antes do sistema da JR, eu perdia uns 8 cortes por semana porque não conseguia responder o WhatsApp a tempo. Hoje minha agenda fecha sozinha e eu só foco em atender bem.",
    author: "Lucas Almeida",
    role: "Dono — Barbearia Norte",
    initials: "LA",
  },
  {
    quote:
      "Eles entregaram em 3 semanas o que outra empresa não entregou em 6 meses. Sistema rápido, bonito e que realmente vende. Recomendo de olhos fechados.",
    author: "Mariana Costa",
    role: "Sócia — Restaurante Raízes",
    initials: "MC",
  },
  {
    quote:
      "O ROI foi absurdo. Triplicamos as vendas online no primeiro mês depois que o sistema entrou no ar. A automação do WhatsApp sozinha já paga o investimento.",
    author: "Rafael Souza",
    role: "CEO — ShopFast",
    initials: "RS",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-base">
        <SectionHeader
          eyebrow="O que nossos clientes dizem"
          title={
            <>
              Histórias de quem parou de{" "}
              <span className="text-gradient-purple">depender do braço</span>
            </>
          }
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-7 transition-all duration-500 hover:-translate-y-1 hover:border-primary-500/30"
            >
              <Quote
                size={28}
                className="text-primary-500/40 transition-colors group-hover:text-primary-400/70"
              />

              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={14}
                    className="fill-primary-400 text-primary-400"
                  />
                ))}
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-white/80">
                “{t.quote}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-primary-600 to-primary-800 font-display text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{t.author}</p>
                  <p className="text-xs text-white/50">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
