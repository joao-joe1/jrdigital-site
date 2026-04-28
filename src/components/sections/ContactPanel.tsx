"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappLink } from "@/lib/utils";

const contactInfo = [
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+55 31 98302-4395",
    href: whatsappLink(),
  },
  {
    icon: Mail,
    label: "Email",
    value: "contato@jrdigital.com.br",
    href: "mailto:contato@jrdigital.com.br",
  },
  {
    icon: MapPin,
    label: "Localização",
    value: "Belo Horizonte — MG",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg–Sex · 09h às 19h",
    href: "#",
  },
];

const whyContact = [
  "Diagnóstico gratuito do seu negócio",
  "Proposta personalizada em até 48h",
  "Sem pressão e sem compromisso",
  "Entrega em semanas, não em meses",
];

export function ContactPanel() {
  return (
    <section className="relative pb-24 lg:pb-32">
      <div className="container-base">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          {/* WhatsApp principal CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl border border-primary-500/20 bg-gradient-to-br from-primary-900/40 via-background to-background p-8 md:p-12"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary-700/30 blur-[100px]" />
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-3 py-1 text-xs font-medium text-primary-200">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                </span>
                Online agora
              </div>

              <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                A forma mais rápida de começar:{" "}
                <span className="text-gradient-purple">WhatsApp</span>
              </h2>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/70">
                Resposta em poucos minutos durante o horário comercial. Conta o
                que você precisa que a gente já te orienta.
              </p>

              <div className="mt-8">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    leftIcon={<MessageCircle size={18} />}
                  >
                    Iniciar conversa no WhatsApp
                  </Button>
                </a>
              </div>

              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {whyContact.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-white/70"
                  >
                    <CheckCircle2
                      size={16}
                      className="mt-0.5 shrink-0 text-primary-400"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact info */}
          <div className="grid gap-4">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.label}
                href={info.href}
                target={info.href.startsWith("http") ? "_blank" : undefined}
                rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-primary-500/40"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-primary-700/30 to-primary-900/30 ring-1 ring-primary-500/20">
                  <info.icon size={18} className="text-primary-300" />
                </span>
                <div className="flex-1">
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    {info.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white transition-colors group-hover:text-primary-200">
                    {info.value}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
