# JR Digital Agency

Site portfolio premium da JR Digital Agency — Next.js 14 (App Router), TypeScript, TailwindCSS, Framer Motion.

## Setup

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS** — design system custom (cores roxo/preto/branco)
- **Framer Motion** — animações suaves, scroll reveal, hover
- **Lucide Icons**

## Estrutura

```
src/
├── app/
│   ├── layout.tsx           # layout raiz + fontes + WhatsApp float
│   ├── page.tsx             # home
│   ├── projetos/page.tsx
│   ├── sobre/page.tsx
│   └── contato/page.tsx
├── components/
│   ├── layout/              # Header, Footer, PageHeader
│   ├── sections/            # Hero, Services, Projects, etc.
│   └── ui/                  # Button, Card, Logo, WhatsAppFloat
└── lib/utils.ts
```

## WhatsApp

Número configurado em `src/lib/utils.ts`:
