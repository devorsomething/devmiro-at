'use client'

import Link from 'next/link'
import { MapPin, Code2, Users, ArrowRight, Sparkles } from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

const techStack = [
  'Next.js 15', 'React', 'TypeScript', 'Tailwind CSS',
  'OpenClaw', 'n8n', 'Shopify', 'Cal.com',
  'Supabase', 'Docker', 'Node.js', 'PostgreSQL',
]

const whyLocal = [
  {
    title: 'Bodenseeraum',
    desc: 'Lindau, Friedrichshafen, St. Gallen — ich kenne die grenzüberschreitenden Herausforderungen.',
  },
  {
    title: 'Rheintal',
    desc: 'Dornbirn, Feldkirch, Hohenems — die Wirtschaftsregion mit dem höchsten KMU-Dichte in Österreich.',
  },
  {
    title: 'Montafon & Arlberg',
    desc: 'Tourismus-Branche mit speziellen Anforderungen an Online-Präsenz und Saison-Geschäft.',
  },
  {
    title: 'Persönlich vor Ort',
    desc: 'Vorarlberg ist klein — ich bin innerhalb von 1 Stunde bei jedem Kunden.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>

        {/* ===== PAGE HERO ===== */}
        <section className="page-hero">
          <div className="page-hero-bg" />
          <div className="container">
            <div className="page-hero-label">
              <MapPin size={12} />
              Bregenz, Vorarlberg
            </div>
            <h1>Über DevMiro</h1>
            <p>
              IT-Lösungen mit echten Mehrwert für Vorarlberger Unternehmen —
              direkt aus Bregenz, mit Leidenschaft für gute Software und ehrliche Partnerschaften.
            </p>
          </div>
        </section>

        {/* ===== STORY ===== */}
        <section style={{ padding: 'clamp(5rem, 10vw, 10rem) 0', background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="about-grid">
              <div className="about-story">
                <div className="section-tag">
                  <span className="tag-line" />
                  Die Geschichte
                </div>
                <h2>Warum ich mache,<br />was ich mache.</h2>
                <p>
                  Ich habe DevMiro gegründet, weil ich selbst erlebt habe, wie
                  schlecht kleine Unternehmen in Vorarlberg online beraten werden.
                  <strong> Zu teuer, zu kompliziert, zu unpersönlich</strong> — das war der Standard.
                </p>
                <p>
                  Mein Ansatz ist anders: Ich baue <strong>direkte, langfristige Partnerschaften</strong> mit
                  meinen Kunden. Ich erkläre Dinge so, dass sie verständlich sind —
                  ohne Tech-Jargon. Und ich liefere Ergebnisse, die man messen kann:
                  mehr Buchungen, mehr Anfragen, mehr Umsatz.
                </p>
                <p>
                  DevMiro ist kein Freelancer-Label — es ist mein IT-Dienstleistungsunternehmen,
                  eingetragen in der WKO Vorarlberg, mit klarem Fokus auf KMUs in unserer Region.
                </p>
              </div>

              <div style={{
                background: 'var(--bg-secondary)',
                border: '1px solid rgba(255,255,255,0.05)',
                borderRadius: 'var(--radius-lg)',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
              }}>
                {[
                  { big: '100%', small: 'Vorarlberg-fokussiert — keine Callcenter, keine Warteschleifen. Sie sprechen direkt mit mir.' },
                  { big: 'DSGVO', small: 'Jedes Projekt wird von Grund auf DSGVO-konform umgesetzt — kein nachträgliches Patchwork.' },
                  { big: '<48h', small: 'Reaktionszeit bei Anfragen. Ich bin erreichbar, wenn Sie mich brauchen.' },
                ].map((item) => (
                  <div key={item.big}>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '3rem',
                      color: 'var(--accent)',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                    }}>
                      {item.big}
                    </div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      {item.small}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY LOCAL ===== */}
        <section style={{ padding: 'clamp(5rem, 10vw, 10rem) 0', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="section-tag">
              <span className="tag-line" />
              Warum Local
            </div>
            <h2 className="section-title-brutal" style={{ marginBottom: '2rem' }}>
              WARUM<br />
              <span className="accent">VORARLBERG?</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '55ch', lineHeight: 1.8, marginBottom: '3rem' }}>
              Ich bin hier aufgewachsen und lebe hier — das gibt mir einen
              Vorteil, den keine Agentur aus Wien oder Deutschland bieten kann:
            </p>

            <div className="why-local-grid">
              {whyLocal.map((item) => (
                <div key={item.title} className="why-local-item">
                  <div className="why-local-title">{item.title}</div>
                  <p className="why-local-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TECH STACK ===== */}
        <section style={{ padding: 'clamp(5rem, 10vw, 10rem) 0', background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="section-tag">
              <span className="tag-line" />
              Tech Stack
            </div>
            <h2 className="section-title-brutal" style={{ marginBottom: '2rem' }}>
              WAS ICH VERWENDE.<br />
              <span className="accent">UND WARUM.</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '55ch', lineHeight: 1.8, marginBottom: '3rem' }}>
              Ich setze auf bewährte, zukunftssichere Technologien, die zu Ihrem
              Projekt passen — nicht auf whatever gerade trendy ist.
            </p>

            <div className="tech-grid-v2" style={{ marginBottom: '3rem' }}>
              {[
                {
                  category: 'Frontend',
                  name: 'Next.js & React',
                  desc: 'Modernste React-Framework für performante, SEO-optimierte Websites mit Server-Side Rendering.',
                  items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
                },
                {
                  category: 'E-Commerce',
                  name: 'WordPress & Shopify',
                  desc: 'Bewährte Plattformen für Content-Websites und Online-Shops —插件reich, sicher und skalierbar.',
                  items: ['WordPress', 'Shopify', 'WooCommerce', 'Elementor Pro'],
                },
                {
                  category: 'Automation',
                  name: 'n8n, Make & Zapier',
                  desc: 'Workflow-Automatisierung ohne Code — wiederkehrende Tasks werden automatisch erledigt.',
                  items: ['n8n', 'Make (Integromat)', 'Zapier', 'OpenClaw'],
                },
                {
                  category: 'KI & AI',
                  name: 'OpenClaw & Claude',
                  desc: 'KI-gestützte Automatisierung und Chatbots, die wirklich funktionieren.',
                  items: ['OpenClaw', 'Claude AI', 'ChatGPT', 'Google AI Studio'],
                },
                {
                  category: 'Hosting & Infra',
                  name: 'Cloudflare & Vercel',
                  desc: 'Globales CDN, DDoS-Schutz und blitzschnelles Hosting für maximale Performance.',
                  items: ['Cloudflare', 'Vercel', 'Netcup', 'Docker'],
                },
                {
                  category: 'Collaboration',
                  name: 'Google Workspace',
                  desc: 'Produktivitätstools für Ihr Team — E-Mail, Drive, Docs, Meet. DSGVO-konform.',
                  items: ['Google Workspace', 'Notion', 'Slack', 'Trello'],
                },
              ].map((tech) => (
                <div key={tech.name} className="tech-card-v2">
                  <div className="tech-card-v2-category">{tech.category}</div>
                  <h3 className="tech-card-v2-name">{tech.name}</h3>
                  <p className="tech-card-v2-desc">{tech.desc}</p>
                  <div className="tech-card-v2-badges">
                    {tech.items.map((item) => (
                      <span key={item} className="tech-badge-v2">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section style={{ padding: 'clamp(5rem, 10vw, 10rem) 0', background: 'var(--bg-secondary)' }}>
          <div className="container">
            <div className="cta-v2-content">
              <div className="section-tag" style={{ justifyContent: 'center' }}>
                <span className="tag-line" />
                Let&apos;s go
                <span className="tag-line" />
              </div>
              <h2 className="cta-v2-title" style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}>
                LASSEN SIE UNS<br />
                ZUSAMMENARBEITEN.
              </h2>
              <p className="cta-v2-subtitle">
                Kennenlernen ist kostenlos. Erzählen Sie mir von Ihrem Projekt —
                ich sage Ihnen ehrlich, was möglich ist.
              </p>
              <Link href="/kontakt" className="btn-cta-v2 glow-pulse">
                PROJEKT BESPRECHEN →
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
