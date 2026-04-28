import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Differentials } from "@/components/sections/Differentials";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Code2, Rocket, Target, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Foco em resultado",
    description:
      "Não fazemos site bonito por estética. Cada decisão é tomada para gerar venda, lead ou economia de tempo.",
  },
  {
    icon: Code2,
    title: "Tecnologia de verdade",
    description:
      "Stack moderna, código limpo, infraestrutura escalável. Sistemas que aguentam o crescimento sem cair.",
  },
  {
    icon: Rocket,
    title: "Velocidade de execução",
    description:
      "Sprints curtos, entregas semanais. Você vê o sistema crescendo em tempo real, não em 6 meses.",
  },
  {
    icon: Users,
    title: "Parceria de longo prazo",
    description:
      "Não somos fornecedor — somos sócios do seu crescimento. Suporte ativo, melhorias constantes.",
  },
];

export const metadata: Metadata = {
  title: "Sobre | JR Digital Agency",
  description:
    "Conheça a JR Digital Agency: tecnologia, estratégia e execução para transformar negócios.",
};

export default function SobrePage() {
  return (
    <>
      <PageHeader
        eyebrow="Sobre nós"
        title={
          <>
            Construímos a estrutura que faz{" "}
            <span className="text-gradient-purple">o seu negócio escalar</span>
          </>
        }
        subtitle="Somos uma agência de produto digital obcecada por resultado. Cada linha de código que escrevemos tem um único objetivo: fazer seu negócio vender mais."
      />

      <section className="py-12 lg:py-16">
        <div className="container-base">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="relative">
              <div className="relative aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-primary-700/20 via-background to-background">
                <div className="absolute inset-0 grid-bg opacity-40" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="grid h-40 w-40 place-items-center rounded-3xl bg-gradient-to-br from-primary-600 to-primary-900 shadow-glow-lg">
                    <span className="font-display text-5xl font-bold text-white">
                      JR
                    </span>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-primary-700/40 blur-3xl" />
              </div>
            </div>

            <div>
              <span className="inline-block rounded-full border border-primary-500/30 bg-primary-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-primary-300">
                Nossa história
              </span>
              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                Tecnologia que entende{" "}
                <span className="text-gradient-purple">de negócio</span>
              </h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-white/70">
                <p>
                  A JR Digital nasceu da inquietação de ver bons negócios
                  perdendo dinheiro por causa de ferramentas ruins, atendimento
                  manual e sites que mais atrapalhavam do que ajudavam.
                </p>
                <p>
                  Hoje, somos referência em construir sistemas que vendem
                  sozinhos para barbearias, restaurantes, clínicas, e-commerces
                  e prestadores de serviço — em qualquer lugar do Brasil.
                </p>
                <p>
                  Nosso compromisso é simples:{" "}
                  <span className="text-white">
                    se o seu negócio não cresce, a gente não fez o trabalho.
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div
                key={v.title}
                className="group rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary-500/40"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-700/30 to-primary-900/30 ring-1 ring-primary-500/20">
                  <v.icon size={18} className="text-primary-300" />
                </div>
                <h3 className="font-display text-base font-semibold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Differentials />
      <Testimonials />
      <CTA />
    </>
  );
}
