import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactPanel } from "@/components/sections/ContactPanel";

export const metadata: Metadata = {
  title: "Contato | JR Digital Agency",
  description:
    "Fale com a JR Digital Agency. Resposta rápida via WhatsApp para tirar seu projeto do papel.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHeader
        eyebrow="Vamos conversar"
        title={
          <>
            Pronto para parar de{" "}
            <span className="text-gradient-purple">perder dinheiro</span>?
          </>
        }
        subtitle="Conta pra gente o que seu negócio precisa. A primeira conversa é por nossa conta — você sai dela com um diagnóstico e um caminho claro."
      />
      <ContactPanel />
    </>
  );
}
