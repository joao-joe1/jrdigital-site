"use client";

import { motion } from "framer-motion";
import {
  Globe,
  ShoppingBag,
  MessageSquare,
  CalendarCheck,
  CreditCard,
  Bot,
  type LucideIcon,
} from "lucide-react";
import { Card } from "@/components/ui/Card";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  bullets: string[];
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Sites profissionais",
    description:
      "Landing pages e sites institucionais que vendem 24h por dia, com design premium e otimizados para conversão.",
    bullets: ["Design exclusivo", "Performance máxima", "SEO técnico"],
  },
  {
    icon: ShoppingBag,
    title: "Sistemas de pedidos online",
    description:
      "Cardápios digitais e plataformas de pedido sob medida, integrados com seu fluxo operacional.",
    bullets: ["Cardápio dinâmico", "Painel administrativo", "Pedidos em tempo real"],
  },
  {
    icon: Bot,
    title: "Automação de WhatsApp",
    description:
      "Robôs de atendimento que vendem, qualificam leads e fecham agendamentos sem você levantar um dedo.",
    bullets: ["Resposta instantânea", "Funil automático", "Integração com CRM"],
  },
  {
    icon: CalendarCheck,
    title: "Sistemas de agendamento",
    description:
      "Plataformas completas para barbearias, clínicas e prestadores de serviço — agenda cheia, sem caos.",
    bullets: ["Agenda online", "Lembrete automático", "Bloqueio de horários"],
  },
  {
    icon: CreditCard,
    title: "Integração com pagamento",
    description:
      "Pix, cartão e boleto integrados ao seu sistema. O cliente paga rápido e você recebe na hora.",
    bullets: ["Pix instantâneo", "Cartão recorrente", "Conciliação automática"],
  },
  {
    icon: MessageSquare,
    title: "Consultoria digital",
    description:
      "Estratégia + tecnologia. Mapeamos os gargalos do seu negócio e construímos a solução certa.",
    bullets: ["Diagnóstico", "Roadmap", "Acompanhamento"],
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-24 lg:py-32">
      <div className="container-base">
        <SectionHeader
          eyebrow="O que fazemos"
          title={
            <>
              Tudo que seu negócio precisa para{" "}
              <span className="text-gradient-purple">vender no automático</span>
            </>
          }
          subtitle="Não vendemos serviços avulsos. Construímos um ecossistema digital que trabalha por você."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Card className="flex h-full flex-col">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-700/30 to-primary-900/30 ring-1 ring-primary-500/20">
                  <service.icon size={22} className="text-primary-300" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-white/5 pt-5">
                  {service.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-center gap-2 text-xs text-white/70"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6 }}
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      {eyebrow ? (
        <span className="inline-block rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary-300">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-white/60 md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </motion.div>
  );
}
