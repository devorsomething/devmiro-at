'use client'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const projects = [
  {
    id: 1,
    client: 'TechFlow GmbH',
    industry: 'IT & Technologie',
    location: 'Dornbirn',
    year: '2025',
    title: 'Enterprise Website Redesign',
    desc: 'Vollständiger Relaunch der Unternehmenswebsite mit Fokus auf Lead-Generierung und Employer Branding. Neues Design, verbesserte Conversion-Rate.',
    tags: ['Webentwicklung', 'UX Design', 'SEO'],
    color: 'cyan',
    metric: '+180%',
    metricLabel: 'Mehr Website-Leads',
  },
  {
    id: 2,
    client: 'Gasthaus Krone',
    industry: 'Gastronomie',
    location: 'Feldkirch',
    year: '2025',
    title: 'Digitales Menü & Reservierungssystem',
    desc: 'QR-Code-Menükarte mit Online-Reservierungssystem und Lieferando-Integration. Steigerung der Online-Bestellungen um 220%.',
    tags: ['E-Commerce', 'Systemintegration', 'KI'],
    color: 'blue',
    metric: '+220%',
    metricLabel: 'Online-Umsatz',
  },
  {
    id: 3,
    client: 'Haarstudio Ella',
    industry: 'Beauty & Salons',
    location: 'Bregenz',
    year: '2025',
    title: 'Online-Buchungssystem',
    desc: 'Vollständig automatisiertes Terminbuchungssystem mit Kunden-App, SMS-Erinnerungen und automatischer Wiedervorlage. Keine Telefonate mehr.',
    tags: ['App-Entwicklung', 'Automatisierung', 'UX'],
    color: 'purple',
    metric: '−60%',
    metricLabel: 'Weniger Verwaltung',
  },
  {
    id: 4,
    client: 'Alpen Consulting',
    industry: 'Unternehmensberatung',
    location: 'Bludenz',
    year: '2024',
    title: 'B2B Lead-Generierung Platform',
    desc: 'Personalisierte Landing Pages, CRM-Integration und automatisierte Outreach-Kampagnen. Qualifizierte Leads statt kalter Akquise.',
    tags: ['Marketing Automation', 'CRM', 'Webentwicklung'],
    color: 'cyan',
    metric: '+340%',
    metricLabel: 'Qualifizierte Leads',
  },
  {
    id: 5,
    client: 'Modehaus Berger',
    industry: 'Einzelhandel',
    location: 'Feldkirch',
    year: '2024',
    title: 'Omnichannel E-Commerce',
    desc: 'Shopify-Store mit lokaler Abholung, instore QR-Erlebnis und Instagram-Shopping-Integration. Brückenschlag zwischen Online und Offline.',
    tags: ['E-Commerce', 'Shopify', 'Integration'],
    color: 'blue',
    metric: '€120K+',
    metricLabel: 'Online-Umsatz p.M.',
  },
  {
    id: 6,
    client: 'Physioplus',
    industry: 'Gesundheit',
    location: 'Dornbirn',
    year: '2024',
    title: 'Patientenportal & Telemedizin',
    desc: 'Sicheres Patientenportal mit Online-Terminbuchung, Telemedizin-Sprechstunden und automatischer Dokumentenverwaltung. DSGVO-konform.',
    tags: ['Web App', 'Datenschutz', 'Automatisierung'],
    color: 'purple',
    metric: '4.9★',
    metricLabel: 'Patientenzufriedenheit',
  },
]

const testimonials = [
  {
    quote: 'DEVMIRO hat unsere Erwartungen übertroffen. Die neue Website generiert täglich qualifizierte Anfragen — das hatte unser altes System nie geschafft.',
    name: 'Michael R.',
    title: 'Geschäftsführer, TechFlow GmbH',
    location: 'Dornbirn',
  },
  {
    quote: 'Das Buchungssystem hat unseren Alltag revolutioniert. Keine verpassten Termine mehr, keine Doppelbuchungen. Unsere Mitarbeiter sind begeistert.',
    name: 'Sandra K.',
    title: 'Inhaberin, Haarstudio Ella',
    location: 'Bregenz',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ paddingTop: 'calc(var(--header-height) + var(--space-xl))', paddingBottom: 'var(--space-xl)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', zIndex: 0 }} />
          <div className="orb orb--cyan" style={{ width: 500, height: 500, top: '-10%', right: '-5%', opacity: 0.6 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label">Portfolio</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: 700, marginTop: '0.75rem', marginBottom: '1.5rem' }}>
              Arbeiten, die{' '}
              <span className="text-gradient">Ergebnisse liefern.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 560 }}>
              Eine Auswahl unserer Projekte für Unternehmen in Vorarlberg und Österreich. Jedes Projekt ist einzigartig — genau wie Ihr Unternehmen.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section" style={{ background: 'var(--bg-deep)', position: 'relative' }}>
          <div className="container">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
              {projects.map((project, i) => (
                <div key={project.id} className="glass--card" style={{
                  padding: '2.5rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr 200px',
                  gap: 'var(--space-md)',
                  alignItems: 'center',
                  animation: `fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s forwards`,
                  opacity: 0,
                }}>
                  {/* Left: Info */}
                  <div>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
                      <span className="badge badge--cyan">{project.industry}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-tertiary)', letterSpacing: '0.08em' }}>
                        {project.location} · {project.year}
                      </span>
                    </div>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>{project.title}</h2>
                    <h3 style={{ fontSize: '1rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '1rem' }}>{project.client}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>{project.desc}</p>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {project.tags.map(t => (
                        <span key={t} style={{
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(255,255,255,0.04)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 100,
                          fontSize: '0.75rem',
                          color: 'var(--text-tertiary)',
                          fontFamily: 'var(--font-mono)',
                        }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  {/* Center: Visual placeholder */}
                  <div style={{
                    aspectRatio: '16/10',
                    background: project.color === 'cyan'
                      ? 'linear-gradient(135deg, rgba(0,229,255,0.15) 0%, rgba(16,16,40,0.9) 100%)'
                      : project.color === 'blue'
                      ? 'linear-gradient(135deg, rgba(77,124,255,0.15) 0%, rgba(16,16,40,0.9) 100%)'
                      : 'linear-gradient(135deg, rgba(139,92,246,0.15) 0%, rgba(16,16,40,0.9) 100%)',
                    borderRadius: 16,
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '4rem',
                      fontWeight: 700,
                      opacity: 0.08,
                      color: project.color === 'cyan' ? 'var(--accent-cyan)' : project.color === 'blue' ? 'var(--accent-blue)' : 'var(--accent-purple)',
                      letterSpacing: '-0.05em',
                    }}>
                      {String(project.id).padStart(2, '0')}
                    </div>
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                      backgroundSize: '40px 40px',
                    }} />
                  </div>
                  {/* Right: Metric */}
                  <div style={{ textAlign: 'center' }}>
                    <div style={{
                      fontSize: '3rem',
                      fontWeight: 700,
                      background: `linear-gradient(135deg, ${project.color === 'cyan' ? '#00e5ff' : project.color === 'blue' ? '#4d7cff' : '#8b5cf6'} 0%, ${project.color === 'cyan' ? '#4d7cff' : project.color === 'blue' ? '#8b5cf6' : '#00e5ff'} 100%)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      letterSpacing: '-0.03em',
                      lineHeight: 1,
                    }}>{project.metric}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginTop: '0.5rem' }}>
                      {project.metricLabel}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', opacity: 0.3 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Kundenstimmen</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                Was unsere Kunden<span className="text-gradient"> sagen.</span>
              </h2>
            </div>
            <div className="grid-2" style={{ maxWidth: 900, margin: '0 auto' }}>
              {testimonials.map((t, i) => (
                <div key={i} className="glass" style={{ padding: '2.5rem', position: 'relative' }}>
                  <div style={{
                    position: 'absolute',
                    top: '1.5rem',
                    left: '2rem',
                    fontSize: '5rem',
                    fontFamily: 'Georgia, serif',
                    color: 'var(--accent-cyan)',
                    opacity: 0.15,
                    lineHeight: 1,
                  }}>&ldquo;</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8, marginBottom: '1.5rem', position: 'relative', zIndex: 1 }}>
                    {t.quote}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: '50%',
                      background: 'var(--gradient-text)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1rem',
                      color: 'var(--bg-void)',
                    }}>{t.name.charAt(0)}</div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{t.name}</div>
                      <div style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{t.title} · {t.location}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--bg-deep)', textAlign: 'center' }}>
          <div className="container">
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Bereit für<span className="text-gradient"> Ihr Projekt?</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 420, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Erzählen Sie uns von Ihrem Vorhaben — unverbindlich und kostenlos.
            </p>
            <Link href="/start" className="btn btn--primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
              Projekt starten
            </Link>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          div[style*="grid-template-columns: 1fr 1fr 200px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
