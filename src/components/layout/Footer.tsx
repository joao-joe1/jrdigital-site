import Link from "next/link";
import { Instagram, Mail, MapPin, Phone, Send } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { whatsappLink } from "@/lib/utils";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-white/5 bg-gradient-to-b from-transparent to-black/40">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent" />

      <div className="container-base py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Construímos sistemas, sites e automações que fazem seu negócio
              vender enquanto você dorme. Tecnologia para resultados reais.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Send, href: whatsappLink(), label: "WhatsApp" },
                { icon: Mail, href: "mailto:contato@jrdigital.com.br", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.03] text-white/70 transition-all hover:-translate-y-0.5 hover:border-primary-500/40 hover:bg-primary-500/10 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Navegação">
            <FooterLink href="/">Início</FooterLink>
            <FooterLink href="/projetos">Projetos</FooterLink>
            <FooterLink href="/sobre">Sobre</FooterLink>
            <FooterLink href="/contato">Contato</FooterLink>
          </FooterColumn>

          <FooterColumn title="Serviços">
            <FooterLink href="/#servicos">Sites profissionais</FooterLink>
            <FooterLink href="/#servicos">Sistemas online</FooterLink>
            <FooterLink href="/#servicos">Automação WhatsApp</FooterLink>
            <FooterLink href="/#servicos">Integração de pagamento</FooterLink>
          </FooterColumn>

          <FooterColumn title="Contato">
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Phone size={14} className="text-primary-400" />
              +55 31 98302-4395
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <Mail size={14} className="text-primary-400" />
              contato@jrdigital.com.br
            </li>
            <li className="flex items-center gap-2 text-sm text-white/60">
              <MapPin size={14} className="text-primary-400" />
              Brasil
            </li>
          </FooterColumn>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/5 pt-6 text-xs text-white/40 md:flex-row md:items-center">
          <p>© {year} JR Digital Agency. Todos os direitos reservados.</p>
          <p className="font-mono">
            Construído com <span className="text-primary-400">♥</span> em Belo Horizonte
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
        {title}
      </h4>
      <ul className="space-y-3">{children}</ul>
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm text-white/60 transition-colors hover:text-white"
      >
        {children}
      </Link>
    </li>
  );
}
