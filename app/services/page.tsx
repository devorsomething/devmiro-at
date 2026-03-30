'use client'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const services = [
  {
    id: 'webdev',
    number: '01',
    title: 'Webentwicklung',
    tagline: 'Massgeschneiderte digitale Erlebnisse.',
    desc: 'Wir entwickeln Websites und Web-Apps, die nicht nur gut aussehen, sondern Ergebnisse liefern. Mit modernsten Technologien, optimaler Performance und Conversion-optimierten Strukturen.',
    features: [
      'Custom Website-Entwicklung (Next.js, React, WordPress)',
      'Responsive Design — Mobile, Tablet, Desktop',
      'E-Commerce & WooCommerce',
      'Landing Pages & Sales Funnels',
      'API-Entwicklung & Integrationen',
      'Performance-Optimierung (Core Web Vitals)',
    ],
    price: 'Ab € 1.800',
    color: 'cyan',
  },
  {
    id: 'itberatung',
    number: '02',
    title: 'IT-Beratung',
    tagline: 'Strategische Entscheidungen, klar umgesetzt.',
    desc: 'IT-Infrastruktur kann komplex sein. Wir analysieren Ihre bestehende Umgebung, identifizieren Schwachstellen und entwickeln einen klaren Fahrplan für die digitale Transformation Ihres Unternehmens.',
    features: [
      'IT-Infrastruktur-Audit & Analyse',
      'Digitalisierungsstrategie',
      'Technologie-Auswahl & Roadmap',
      'Prozessautomatisierung',
      'Vendor Management',
      'Compliance & regulatorische Anforderungen',
    ],
    price: 'Ab € 2.500',
    color: 'blue',
  },
  {
    id: 'security',
    number: '03',
    title: 'Cybersecurity',
    tagline: 'Sicherheit, auf die Sie sich verlassen können.',
    desc: 'In einer Welt voller Cyberbedrohungen ist proaktive Sicherheit kein Luxus — sie ist Überlebensstrategie. Wir schützen Ihre digitale Infrastruktur mit umfassenden Massnahmen.',
    features: [
      'Security Audit & Penetration Testing',
      'Firewall- & Netzwerksicherheit',
      'Endpoint Protection',
      'Mitarbeiter-Security-Training',
      'Incident Response Planning',
      'DSGVO-konforme Datensicherung',
    ],
    price: 'Ab € 3.000',
    color: 'purple',
  },
  {
    id: 'cloud',
    number: '04',
    title: 'Cloud-Lösungen',
    tagline: 'Flexibilität trifft Skalierbarkeit.',
    desc: 'Cloud-Migration, Managed Services oder hybride Infrastruktur — wir begleiten Sie auf dem Weg in die Cloud, ohne dabei die Kontrolle zu verlieren. Effizient, sicher, kostentransparent.',
    features: [
      'Cloud-Migration (AWS, Azure, GCP)',
      'Kubernetes & Container-Orchestrierung',
      'CI/CD Pipeline Setup',
      'Monitoring & Alerting',
      'Backup & Disaster Recovery',
      'Cost Optimization',
    ],
    price: 'Ab € 2.000/Monat',
    color: 'cyan',
  },
  {
    id: 'ki',
    number: '05',
    title: 'KI-Integration',
    tagline: 'Intelligenz, die für Sie arbeitet.',
    desc: 'Künstliche Intelligenz ist kein Hype — sie ist ein Wettbewerbsvorteil. Wir integrieren AI-Lösungen, die echte Geschäftsprozesse optimieren und messbare Ergebnisse liefern.',
    features: [
      'AI-Chatbot & Voice Assistant Entwicklung',
      'Prozessautomatisierung mit LLMs',
      'Datenanalyse & Business Intelligence',
      'Document Intelligence',
      'Custom AI-Agenten',
      'Integration in bestehende Systeme',
    ],
    price: 'Ab € 4.000',
    color: 'blue',
  },
  {
    id: 'support',
    number: '06',
    title: 'Wartung & Support',
    tagline: 'Ihr System, immer in Topform.',
    desc: 'Websites und IT-Systeme brauchen kontinuierliche Pflege. Mit unserem Wartungsservice bleiben Ihre digitalen Assets sicher, aktuell und performant — damit Sie sich auf Ihr Unternehmen konzentrieren können.',
    features: [
      '24/7 Monitoring & Uptime-Garantie',
      'Regelmässige Updates & Patches',
      'Tägliche Backups',
      'EU-Hosting (DSGVO-konform)',
      'Priority Support (SLA 99.9%)',
      'Monatliches Reporting',
    ],
    price: 'Ab € 99/Monat',
    color: 'purple',
  },
]

const process = [
  { step: '01', title: 'Analyse', desc: 'Wir verstehen Ihr Unternehmen, Ihre Ziele und Ihre Zielgruppe — bevor eine einzige Zeile Code geschrieben wird.' },
  { step: '02', title: 'Strategie', desc: 'Ein klarer Fahrplan mit Meilensteinen, Timelines und fixen Preisen. Keine Überraschungen.' },
  { step: '03', title: 'Design', desc: 'Figma-Mockups, unbegrenzte Revisionen, Sie genehmigen bevor wir entwickeln.' },
  { step: '04', title: 'Entwicklung', desc: 'Sauberer, performanter Code. Transparente Updates während des gesamten Prozesses.' },
  { step: '05', title: 'Launch', desc: 'Go-Live mit Training, Dokumentation und nahtlosem Übergang in den laufenden Betrieb.' },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section style={{ paddingTop: 'calc(var(--header-height) + var(--space-xl))', paddingBottom: 'var(--space-xl)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', zIndex: 0 }} />
          <div className="orb orb--cyan" style={{ width: 600, height: 600, top: '-20%', left: '-10%', opacity: 0.7 }} />
          <div className="orb orb--blue" style={{ width: 400, height: 400, bottom: '0%', right: '10%', opacity: 0.5 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label">Leistungen</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: 750, marginTop: '0.75rem', marginBottom: '1.5rem' }}>
              Alles, was Sie brauchen.{' '}
              <span className="text-gradient">Alles aus einer Hand.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 600, marginBottom: '2.5rem' }}>
              Von der strategischen Beratung bis zum fertigen Produkt — DEVMIRO bietet das komplette Spektrum an IT-Lösungen für Vorarlberg KMUs.
            </p>
            <Link href="/start" className="btn btn--primary">
              Kostenlos beraten lassen
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12,5 19,12 12,19" />
              </svg>
            </Link>
          </div>
        </section>

        {/* ── SERVICES LIST ── */}
        <section className="section" style={{ background: 'var(--bg-deep)', position: 'relative' }}>
          <div className="container">
            {services.map((service, i) => (
              <div key={service.id} style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.5fr',
                gap: 'var(--space-lg)',
                padding: 'var(--space-lg) 0',
                borderBottom: '1px solid var(--border-subtle)',
                alignItems: 'start',
                animation: `fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s forwards`,
                opacity: 0,
              }}>
                {/* Left */}
                <div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: 'var(--accent-cyan)',
                    letterSpacing: '0.15em',
                    marginBottom: '1rem',
                    opacity: 0.6,
                  }}>{service.number}</div>
                  <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{service.title}</h2>
                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: service.color === 'cyan' ? 'var(--accent-cyan)' : service.color === 'blue' ? 'var(--accent-blue)' : 'var(--accent-purple)',
                    marginBottom: '1.25rem',
                    letterSpacing: '0.05em',
                  }}>{service.tagline}</p>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                    <span style={{ color: 'var(--text-primary)', fontWeight: 700, fontSize: '1.5rem' }}>{service.price}</span>
                  </div>
                  <Link href="/start" className="btn btn--outline" style={{ fontSize: '0.875rem' }}>
                    Angebot anfordern
                  </Link>
                </div>
                {/* Right */}
                <div>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>{service.desc}</p>
                  <div className="grid-2">
                    {service.features.map(f => (
                      <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0', borderBottom: '1px solid var(--border-subtle)' }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}>
                          <polyline points="20,6 9,17 4,12" />
                        </svg>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', opacity: 0.4 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Prozess</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                So arbeiten<span className="text-gradient"> wir.</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: 700, margin: '0 auto' }}>
              {process.map((step, i) => (
                <div key={step.step} style={{
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr',
                  gap: '2rem',
                  padding: '2rem 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  alignItems: 'start',
                  animation: `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s forwards`,
                  opacity: 0,
                }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent-cyan)', letterSpacing: '0.15em', paddingTop: 4 }}>{step.step}</div>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section" style={{ background: 'var(--bg-deep)', textAlign: 'center' }}>
          <div className="container">
            <div className="badge badge--cyan" style={{ marginBottom: '1.5rem' }}>Bereit?</div>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Lassen Sie uns<span className="text-gradient"> loslegen.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 450, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Erzählen Sie uns von Ihrem Projekt — kostenlos und unverbindlich.
            </p>
            <Link href="/start" className="btn btn--primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Projekt starten
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1.5fr"] {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
      `}</style>
    </>
  )
}
