"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Clock,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SectionHeader } from "./Services";

interface Differential {
  icon: LucideIcon;
  title: string;
  description: string;
}

const differentials: Differential[] = [
  {
    icon: Bot,
    title: "Automação completa",
    description:
      "Da captação ao pós-venda. Seu negócio funciona enquanto você dorme — sem precisar de mais funcionários.",
  },
  {
    icon: TrendingUp,
    title: "Aumento de conversão",
    description:
      "Cada elemento é construído para vender. Design, copywriting e tecnologia trabalhando juntos.",
  },
  {
    icon: Clock,
    title: "Menos tempo respondendo cliente",
    description:
      "Robôs inteligentes filtram, qualificam e fecham. Você só recebe o cliente pronto pra comprar.",
  },
  {
    icon: ShieldCheck,
    title: "Sistema profissional",
    description:
      "Tecnologia de nível corporativo: estável, segura e escalável. O mesmo padrão das grandes empresas.",
  },
];

export function Differentials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container-base">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <div>
            <SectionHeader
              align="left"
              eyebrow="Por que JR Digital"
              title={
                <>
                  Não somos uma agência.{" "}
                  <span className="text-gradient-purple">
                    Somos o motor por trás do seu negócio.
                  </span>
                </>
              }
              subtitle="Enquanto outros entregam um site bonito, nós entregamos uma estrutura digital que vende, atende e fecha sozinha."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {differentials.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary-500/40"
              >
                <div className="absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-700/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-700/30 to-primary-900/30 ring-1 ring-primary-500/20">
                  <item.icon size={20} className="text-primary-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
