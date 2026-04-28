import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "JR Digital Agency — Sites e Sistemas que Vendem por Você",
  description:
    "Transformamos negócios comuns em máquinas de vendas automatizadas. Sites, sistemas e automações que fazem seu cliente comprar mais rápido.",
  keywords: [
    "agência digital",
    "automação WhatsApp",
    "criação de sites",
    "sistemas online",
    "JR Digital",
  ],
  openGraph: {
    title: "JR Digital Agency",
    description:
      "Sites e sistemas inteligentes que fazem seu cliente comprar mais rápido, sem depender de atendimento manual.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans">
        <div className="relative flex min-h-screen flex-col overflow-hidden">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </div>
      </body>
    </html>
  );
}
