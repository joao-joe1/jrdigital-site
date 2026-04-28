import type { Metadata } from "next";
import { Projects } from "@/components/sections/Projects";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { CTA } from "@/components/sections/CTA";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata: Metadata = {
  title: "Projetos | JR Digital Agency",
  description:
    "Conheça os projetos de sites, sistemas e automações que entregamos para nossos clientes.",
};

export default function ProjetosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title={
          <>
            Projetos que estão{" "}
            <span className="text-gradient-purple">gerando receita</span> agora
          </>
        }
        subtitle="Cada sistema aqui foi construído sob medida para resolver um problema real de um cliente real. Tecnologia que paga o próprio investimento."
      />
      <FeaturedProject />
      <Projects showCta={false} />
      <CTA />
    </>
  );
}
