"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Calendar,
  Clock,
  Scissors,
  ShoppingCart,
  Stethoscope,
  TrendingUp,
  Utensils,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "./Services";
import { Button } from "@/components/ui/Button";

interface Project {
  title: string;
  category: string;
  description: string;
  benefit: string;
  metric: string;
  icon: LucideIcon;
  accent: string;
  mockup: "barber" | "restaurant" | "clinic" | "shop";
}

const projects: Project[] = [
  {
    title: "BarberPro — Sistema para Barbearia",
    category: "Agendamento + Pagamento",
    description:
      "Plataforma completa de agendamento online com lembretes automáticos via WhatsApp e integração com Pix.",
    benefit: "Mais agendamentos, menos faltas",
    metric: "+184% agenda cheia",
    icon: Scissors,
    accent: "from-primary-600 to-primary-900",
    mockup: "barber",
  },
  {
    title: "FoodFlow — Pedidos para Restaurantes",
    category: "Cardápio Digital",
    description:
      "Cardápio digital com QR Code na mesa, pedidos direto na cozinha e pagamento online integrado.",
    benefit: "Menos garçom, mais venda",
    metric: "+42% ticket médio",
    icon: Utensils,
    accent: "from-orange-500 to-primary-700",
    mockup: "restaurant",
  },
  {
    title: "ClinicHub — Sistema para Clínicas",
    category: "Agendamento Médico",
    description:
      "Sistema multi-profissional com agenda inteligente, prontuário digital e confirmação automática.",
    benefit: "Agenda otimizada",
    metric: "-67% faltas",
    icon: Stethoscope,
    accent: "from-cyan-500 to-primary-700",
    mockup: "clinic",
  },
  {
    title: "ShopFast — E-commerce Express",
    category: "Loja Virtual",
    description:
      "Loja virtual com checkout em 1 clique, automação de carrinho abandonado e integração com WhatsApp.",
    benefit: "Vendas no automático",
    metric: "+312% conversão",
    icon: ShoppingCart,
    accent: "from-green-500 to-primary-700",
    mockup: "shop",
  },
];

export function Projects({ showCta = true }: { showCta?: boolean }) {
  return (
    <section id="projetos" className="relative py-24 lg:py-32">
      <div className="container-base">
        <SectionHeader
          eyebrow="Projetos em destaque"
          title={
            <>
              Resultados reais para{" "}
              <span className="text-gradient-purple">negócios reais</span>
            </>
          }
          subtitle="Cada projeto é construído sob medida. Estes são alguns dos sistemas que estão gerando receita agora mesmo para nossos clientes."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {showCta && (
          <div className="mt-14 text-center">
            <Link href="/projetos">
              <Button variant="ghost" size="lg" rightIcon={<ArrowUpRight size={18} />}>
                Ver todos os projetos
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-b from-white/[0.04] to-transparent transition-all duration-500 hover:-translate-y-1 hover:border-primary-500/40 hover:shadow-glow-lg">
      {/* Mockup area */}
      <div
        className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${project.accent} p-6`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 grid-bg opacity-30" />

        <ProjectMockup type={project.mockup} />

        <div className="absolute right-4 top-4">
          <span className="inline-flex items-center gap-1 rounded-full bg-black/40 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/90 backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-700/30 ring-1 ring-primary-500/20">
              <project.icon size={16} className="text-primary-300" />
            </div>
            <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
              {project.title}
            </h3>
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition-all group-hover:bg-primary-500/20 group-hover:text-white">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/60">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-white/5 pt-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-white/80">
            <TrendingUp size={12} className="text-primary-300" />
            {project.benefit}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-500/10 px-3 py-1.5 text-xs font-semibold text-primary-300 ring-1 ring-primary-500/30">
            {project.metric}
          </span>
        </div>
      </div>
    </div>
  );
}

function ProjectMockup({ type }: { type: Project["mockup"] }) {
  if (type === "barber") return <BarberMockup />;
  if (type === "restaurant") return <RestaurantMockup />;
  if (type === "clinic") return <ClinicMockup />;
  return <ShopMockup />;
}

function MockupFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative mx-auto h-full w-full max-w-md">
      <div className="relative h-full overflow-hidden rounded-2xl border border-white/15 bg-background/80 shadow-2xl backdrop-blur-md">
        <div className="flex items-center gap-1.5 border-b border-white/5 bg-black/20 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
          <span className="h-2 w-2 rounded-full bg-green-400/70" />
        </div>
        <div className="p-3 text-white">{children}</div>
      </div>
    </div>
  );
}

function BarberMockup() {
  return (
    <MockupFrame>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/50">
            BarberPro
          </p>
          <p className="text-xs font-semibold">Agende seu corte</p>
        </div>
        <Scissors size={14} className="text-primary-300" />
      </div>
      <div className="mt-3 grid grid-cols-4 gap-1.5">
        {["Seg", "Ter", "Qua", "Qui"].map((d, i) => (
          <div
            key={d}
            className={`rounded-md px-1 py-1.5 text-center text-[9px] ${
              i === 1 ? "bg-primary-600 text-white" : "bg-white/5 text-white/60"
            }`}
          >
            {d}
            <p className="mt-0.5 text-[10px] font-bold">{12 + i}</p>
          </div>
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          { time: "10:00", status: "ocupado" },
          { time: "10:30", status: "livre" },
          { time: "11:00", status: "livre" },
        ].map((s) => (
          <div
            key={s.time}
            className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 text-[10px]"
          >
            <span className="flex items-center gap-1.5">
              <Clock size={10} className="text-primary-300" /> {s.time}
            </span>
            <span
              className={
                s.status === "livre"
                  ? "text-green-400"
                  : "text-white/40 line-through"
              }
            >
              {s.status}
            </span>
          </div>
        ))}
      </div>
      <button className="mt-3 w-full rounded-md bg-gradient-to-r from-primary-700 to-primary-500 py-1.5 text-[10px] font-semibold">
        Confirmar agendamento
      </button>
    </MockupFrame>
  );
}

function RestaurantMockup() {
  return (
    <MockupFrame>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/50">
            FoodFlow
          </p>
          <p className="text-xs font-semibold">Mesa 12 • Cardápio</p>
        </div>
        <Utensils size={14} className="text-orange-400" />
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          { name: "Burger Premium", price: "R$ 38" },
          { name: "Pizza Margherita", price: "R$ 52" },
          { name: "Coca-Cola 350ml", price: "R$ 8" },
        ].map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 text-[10px]"
          >
            <span>{item.name}</span>
            <span className="font-semibold text-orange-300">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 text-[10px]">
        <span className="text-white/60">3 itens</span>
        <span className="font-bold">Total R$ 98,00</span>
      </div>
      <button className="mt-2 w-full rounded-md bg-gradient-to-r from-orange-500 to-primary-600 py-1.5 text-[10px] font-semibold">
        Finalizar pedido
      </button>
    </MockupFrame>
  );
}

function ClinicMockup() {
  return (
    <MockupFrame>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/50">
            ClinicHub
          </p>
          <p className="text-xs font-semibold">Agenda do dia</p>
        </div>
        <Calendar size={14} className="text-cyan-300" />
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          { hour: "09:00", patient: "Maria S.", color: "bg-green-400" },
          { hour: "10:30", patient: "João P.", color: "bg-cyan-400" },
          { hour: "14:00", patient: "Ana R.", color: "bg-primary-400" },
        ].map((a) => (
          <div
            key={a.hour}
            className="flex items-center gap-2 rounded-md bg-white/5 px-2 py-1.5 text-[10px]"
          >
            <span className={`h-2 w-2 rounded-full ${a.color}`} />
            <span className="font-mono text-white/70">{a.hour}</span>
            <span className="ml-auto text-white/80">{a.patient}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-1.5">
        <div className="rounded-md bg-white/5 p-2 text-center">
          <p className="text-base font-bold text-cyan-300">12</p>
          <p className="text-[9px] text-white/50">consultas hoje</p>
        </div>
        <div className="rounded-md bg-white/5 p-2 text-center">
          <p className="text-base font-bold text-green-400">98%</p>
          <p className="text-[9px] text-white/50">presença</p>
        </div>
      </div>
    </MockupFrame>
  );
}

function ShopMockup() {
  return (
    <MockupFrame>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[10px] uppercase tracking-wider text-white/50">
            ShopFast
          </p>
          <p className="text-xs font-semibold">Vendas hoje</p>
        </div>
        <ShoppingCart size={14} className="text-green-400" />
      </div>
      <div className="mt-3 rounded-md bg-gradient-to-br from-green-500/20 to-primary-700/20 p-3">
        <p className="text-[10px] text-white/60">Receita</p>
        <p className="font-display text-xl font-bold text-white">R$ 4.872</p>
        <p className="mt-1 flex items-center gap-1 text-[10px] text-green-400">
          <TrendingUp size={10} /> +312% vs ontem
        </p>
      </div>
      <div className="mt-3 space-y-1.5">
        {[
          { name: "Pedido #1247", value: "R$ 189" },
          { name: "Pedido #1246", value: "R$ 76" },
          { name: "Pedido #1245", value: "R$ 312" },
        ].map((p) => (
          <div
            key={p.name}
            className="flex items-center justify-between rounded-md bg-white/5 px-2 py-1.5 text-[10px]"
          >
            <span className="text-white/70">{p.name}</span>
            <span className="font-semibold">{p.value}</span>
          </div>
        ))}
      </div>
    </MockupFrame>
  );
}
