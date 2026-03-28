import Link from 'next/link'
import { MapPin, Code2, Users, ArrowRight } from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

const techStack = [
  'Next.js 15',
  'React',
  'TypeScript',
  'Tailwind CSS',
  'OpenClaw',
  'n8n',
  'Shopify',
  'Cal.com',
  'Supabase',
  'Docker',
  'Node.js',
  'PostgreSQL',
]

export default function AboutPage() {
  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-label">
              <MapPin size={12} />
              Bregenz, Vorarlberg
            </div>
            <h1>Über DevMiro</h1>
            <p>
              IT-Lösungen mit echten Mehrwert für Vorarlberger Unternehmen — direkt
              aus Bregenz, mit Leidenschaft für gute Software und ehrliche Partnerschaften.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="about-grid">
              <div>
                <div className="section-label">Die Geschichte</div>
                <h2 className="section-title">
                  Warum ich mache, was ich mache.
                </h2>
                <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                  Ich habe DevMiro gegründet, weil ich selbst erlebt habe, wie
                  schlecht kleine Unternehmen in Vorarlberg online beraten werden.
                  Zu teuer, zu kompliziert, zu unpersönlich — das war der Standard.
                </p>
                <p className="section-subtitle" style={{ maxWidth: '100%', marginTop: 'var(--space-4)' }}>
                  Mein Ansatz ist anders: Ich baue direkte, langfristige
                  Partnerschaften mit meinen Kunden. Ich erkläre Dinge so, dass
                  sie verständlich sind — ohne Tech-Jargon. Und ich liefere
                  Ergebnisse, die man messen kann.
                </p>
                <p className="section-subtitle" style={{ maxWidth: '100%', marginTop: 'var(--space-4)' }}>
                  DevMiro ist kein One-Man-Show-Label — es ist mein
                  IT-Dienstleistungsunternehmen, eingetragen in der WKO
                  Vorarlberg, mit klarem Fokus auf KMUs in unserer Region.
                </p>
              </div>

              <div
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-2xl)',
                  padding: 'var(--space-8)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-6)',
                }}
              >
                {[
                  { num: '100%', label: 'Vorarlberg-fokussiert — keine Callcenter, keine Warteschleifen.' },
                  { num: 'DSGVO', label: 'Jedes Projekt wird von Grund auf DSGVO-konform umgesetzt.' },
                  { num: '<48h', label: 'Reaktionszeit bei Anfragen. Ich bin erreichbar, wenn Sie mich brauchen.' },
                ].map((item) => (
                  <div key={item.num}>
                    <div style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)', fontWeight: 400, color: 'var(--primary)', lineHeight: 1, marginBottom: '0.5rem' }}>
                      {item.num}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="section-label">
                <Users size={12} />
                Warum Local
              </div>
              <h2 className="section-title">
                Warum Vorarlberg?<br />Warum Bregenz?
              </h2>
              <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                Ich bin hier aufgewachsen und lebe hier — das gibt mir einen
                Vorteil, den keine Agentur aus Wien oder Deutschland bieten kann:
              </p>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 'var(--space-4)',
                  marginTop: 'var(--space-8)',
                }}
              >
                {[
                  { title: 'Bodenseeraum', desc: 'Lindau, Friedrichshafen, St. Gallen — ich kenne die grenzüberschreitenden Herausforderungen.' },
                  { title: 'Rheintal', desc: 'Dornbirn, Feldkirch, Hohenems — die Wirtschaftsregion mit dem höchsten KMU-Dichte in Österreich.' },
                  { title: 'Montafon & Arlberg', desc: 'Tourismus-Branche mit speziellen Anforderungen an Online-Präsenz und Saison-Geschäft.' },
                  { title: 'Persönlich vor Ort', desc: 'Vorarlberg ist klein — ich bin innerhalb von 1 Stunde bei jedem Kunden.' },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: 'var(--space-5)',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xl)',
                    }}
                  >
                    <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '0.35rem', fontSize: '0.95rem' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="section-label">
                <Code2 size={12} />
                Tech Stack
              </div>
              <h2 className="section-title">
                Was ich verwende — und warum.
              </h2>
              <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                Ich setze auf bewährte, zukunftssichere Technologien, die zu
                Ihrem Projekt passen — nicht auf whatever gerade trendy ist.
              </p>

              <div className="tech-stack" style={{ marginTop: 'var(--space-8)' }}>
                {techStack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div
                style={{
                  marginTop: 'var(--space-10)',
                  padding: 'var(--space-6)',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: 'var(--text)' }}>Mein Entwicklungsansatz:</strong>{' '}
                  Ich nutze Next.js und React für performante Web-Applikationen,
                  Tailwind CSS für durchdachtes Design, und OpenClaw für
                  KI-Automatisierungen, die wirklich funktionieren. Bei
                  E-Commerce greife ich auf Shopify zurück.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-section">
              <h2>Lassen Sie uns zusammen arbeiten.</h2>
              <p>
                Kennenlernen ist kostenlos. Erzählen Sie mir von Ihrem Projekt —
                ich sage Ihnen ehrlich, was möglich ist.
              </p>
              <Link href="/kontakt" className="btn">
                Projekt besprechen
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
