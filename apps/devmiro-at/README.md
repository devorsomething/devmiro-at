# devmiro.at

Portfolio-Website für Miro Gavanelli — Developer & Automation Architect aus Vorarlberg, Österreich.

## 🚀 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS Variables)
- **UI Components:** shadcn/ui (manuell erstellt)
- **Formulare:** React Hook Form + Zod
- **Icons:** Lucide React
- **Fonts:** Inter + JetBrains Mono (via next/font/google)
- **Analytics:** Plausible (optional)

## 📦 Installation

```bash
# Dependencies installieren
npm install

# Development Server starten
npm run dev

# Production Build
npm run build

# Production Server starten
npm start
```

## 🔧 Environment Variables

Kopiere `.env.local.example` zu `.env.local` und passe die Werte an:

```bash
cp .env.local.example .env.local
```

### Verfügbare Variablen:

| Variable | Beschreibung | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_N8N_WEBHOOK_URL` | N8N Webhook für Kontaktformular | Nein |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible Analytics Domain | Nein |

**Hinweis:** Wenn `NEXT_PUBLIC_N8N_WEBHOOK_URL` nicht gesetzt ist, simuliert das Kontaktformular einen erfolgreichen Versand.

## 🌐 Deployment auf Vercel

1. Repository zu GitHub pushen
2. Auf [vercel.com](https://vercel.com) importieren
3. Environment Variables in Vercel Dashboard eintragen
4. Deploy!

### Vercel CLI:

```bash
npm i -g vercel
vercel
vercel --prod
```

## 📁 Projektstruktur

```
devmiro-at/
├── app/
│   ├── components/
│   │   ├── ui/              # shadcn/ui Komponenten
│   │   │   ├── accordion.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   └── textarea.tsx
│   │   ├── contact.tsx
│   │   ├── faq.tsx
│   │   ├── footer.tsx
│   │   ├── hero.tsx
│   │   ├── how-it-works.tsx
│   │   ├── navigation.tsx
│   │   ├── projects.tsx
│   │   ├── services.tsx
│   │   ├── stats.tsx
│   │   └── testimonials.tsx
│   ├── lib/
│   │   ├── utils.ts          # cn() Utility
│   │   └── validations.ts   # Zod Schemas
│   ├── globals.css          # Tailwind + CSS Variables
│   ├── layout.tsx           # Root Layout mit SEO
│   ├── page.tsx             # Landing Page
│   ├── robots.ts            # robots.txt
│   └── sitemap.ts           # sitemap.xml
├── public/
│   └── favicon.svg
├── .env.local.example
├── .eslintrc.json
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── README.md
└── tsconfig.json
```

## 🎨 Design System

### Colors (CSS Variables)

```css
--background: #0A0A0B      /* Haupt-Hintergrund */
--surface: #141416          /* Karten, etc. */
--border: #2A2A2E           /* Border Farbe */
--text-primary: #F5F5F7     /* Haupt-Text */
--text-secondary: #9CA3AF   /* Sekundär-Text */
--accent: #3B82F6            /* Blaue Akzentfarbe */
--accent-hover: #06B6D4      /* Hover State */
--cta: #10B981              /* CTA Button Grün */
--cta-hover: #059669        /* CTA Hover */
--code: #F97316             /* Code Orange */
```

## 📝 Available Scripts

| Script | Beschreibung |
|--------|-------------|
| `npm run dev` | Development Server (http://localhost:3000) |
| `npm run build` | Production Build |
| `npm run start` | Production Server starten |
| `npm run lint` | ESLint ausführen |

## 🔗 Links

- **Website:** https://devmiro.at
- **LinkedIn:** https://linkedin.com/in/mirogavanelli
- **GitHub:** https://github.com/devmiro

---

© 2026 Miro Gavanelli. Alle Rechte vorbehalten.
