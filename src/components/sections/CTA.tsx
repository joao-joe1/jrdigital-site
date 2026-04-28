"use client";

import { motion } from "framer-motion";
import { ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/utils";

export function CTA() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-base">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-primary-500/20 bg-gradient-to-br from-primary-900/40 via-background to-background p-10 md:p-16 lg:p-20"
        >
          {/* Background effects */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary-600/30 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-primary-700/30 blur-[120px]" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />

          <div className="relative mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-200 backdrop-blur-sm"
            >
              <AlertTriangle size={12} />
              Atenção
            </motion.div>

            <h2 className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
              Seu negócio está perdendo clientes{" "}
              <span className="text-gradient-purple">todos os dias</span> sem
              perceber.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Cada cliente que não foi atendido a tempo, cada pedido que esperou
              demais, cada agendamento perdido — é dinheiro indo embora. A boa
              notícia: dá pra resolver isso essa semana.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink(
                  "Olá! Quero automatizar meu negócio e parar de perder clientes."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" rightIcon={<ArrowRight size={18} />}>
                  Quero automatizar meu negócio
                </Button>
              </a>
              <p className="mt-2 text-xs text-white/40 sm:ml-2 sm:mt-0">
                Resposta em poucos minutos · Sem compromisso
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
