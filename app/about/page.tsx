'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { MapPin, Code2, Users, ArrowRight, Calendar, Sparkles } from 'lucide-react'
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

const timeline = [
  { year: '2024', title: 'Gründung DevMiro', desc: 'Offizielle Gründung als IT-Dienstleister in der WKO Vorarlberg.' },
  { year: '2024', title: 'Erste Website-Projekte', desc: 'Start mit Website-Entwicklung für lokale Bregenzer Unternehmen.' },
  { year: '2025', title: 'KI-Automatisierung', desc: 'Erweiterung um OpenClaw-basierte KI-Chatbots und Automatisierungen.' },
  { year: '2025', title: 'SaaS-Produkte', desc: 'Launch eigener Tools für Terminbuchung, Salon-Management und mehr.' },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

export default function AboutPage() {
  useReveal()

  return (
    <>
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <section className="page-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="hero-bg bg-mesh" aria-hidden="true" />
          <div className="hero-bg bg-grid" aria-hidden="true" />
          <div className="hero-gradient-orb" style={{
            width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.12) 0%, transparent 70%)',
            top: -100, left: -100,
            animation: 'orbFloat 10s ease-in-out infinite',
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-label reveal" style={{ animationDelay: '0.1s' }}>
              <span className="hero-label-dot" />
              Bregenz, Vorarlberg
            </div>
            <h1 className="reveal" style={{ animationDelay: '0.2s' }}>
              Über <span className="gradient-text">DevMiro</span>
            </h1>
            <p className="reveal" style={{ animationDelay: '0.3s', maxWidth: '600px' }}>
              IT-Lösungen mit echten Mehrwert für Vorarlberger Unternehmen — direkt
              aus Bregenz, mit Leidenschaft für gute Software und ehrliche Partnerschaften.
            </p>
          </div>
        </section>

        {/* ===== STORY ===== */}
        <section className="section">
          <div className="container">
            <div className="about-grid">
              <div className="reveal">
                <div className="section-label">
                  <Sparkles size={12} />
                  Die Geschichte
                </div>
                <h2 className="section-title">
                  Warum ich mache,<br />
                  <span className="gradient-text"> was ich mache.</span>
                </h2>
                <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                  Ich habe DevMiro gegründet, weil ich selbst erlebt habe, wie
                  schlecht kleine Unternehmen in Vorarlberg online beraten werden.
                  Zu teuer, zu kompliziert, zu unpersönlich — das war der Standard.
                </p>
                <p className="section-subtitle" style={{ maxWidth: '100%', marginTop: '1rem' }}>
                  Mein Ansatz ist anders: Ich baue direkte, langfristige
                  Partnerschaften mit meinen Kunden. Ich erkläre Dinge so, dass
                  sie verständlich sind — ohne Tech-Jargon. Und ich liefere
                  Ergebnisse, die man messen kann.
                </p>
                <p className="section-subtitle" style={{ maxWidth: '100%', marginTop: '1rem' }}>
                  DevMiro ist kein One-man-Show-Label — es ist mein
                  IT-Dienstleistungsunternehmen, eingetragen in der WKO
                  Vorarlberg, mit klarem Fokus auf KMUs in unserer Region.
                </p>
              </div>

              <div className="reveal reveal-delay-2">
                <div style={{
                  background: 'rgba(255,255,255,0.03)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '1.5rem',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                }}>
                  {[
                    { num: '100%', label: 'Vorarlberg-fokussiert — keine Callcenter, keine Warteschleifen.' },
                    { num: 'DSGVO', label: 'Jedes Projekt wird von Grund auf DSGVO-konform umgesetzt.' },
                    { num: '<48h', label: 'Reaktionszeit bei Anfragen. Ich bin erreichbar, wenn Sie mich brauchen.' },
                  ].map((item) => (
                    <div key={item.num}>
                      <div style={{
                        fontSize: '2.75rem',
                        fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #00d4ff 0%, #a855f7 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        lineHeight: 1,
                        marginBottom: '0.5rem',
                      }}>
                        {item.num}
                      </div>
                      <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== LOCAL PRESENCE ===== */}
        <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="container">
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="section-label reveal" style={{ justifyContent: 'center', textAlign: 'center' }}>
                <Users size={12} />
                Warum Local
              </div>
              <h2 className="section-title reveal" style={{ textAlign: 'center' }}>
                Warum Vorarlberg?<br />
                <span className="gradient-text">Warum Bregenz?</span>
              </h2>
              <p className="section-subtitle reveal reveal-delay-1" style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto' }}>
                Ich bin hier aufgewachsen und lebe hier — das gibt mir einen
                Vorteil, den keine Agentur aus Wien oder Deutschland bieten kann:
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1rem',
                marginTop: '2.5rem',
              }}>
                {[
                  { title: 'Bodenseeraum', desc: 'Lindau, Friedrichshafen, St. Gallen — ich kenne die grenzüberschreitenden Herausforderungen.' },
                  { title: 'Rheintal', desc: 'Dornbirn, Feldkirch, Hohenems — die Wirtschaftsregion mit dem höchsten KMU-Dichte in Österreich.' },
                  { title: 'Montafon & Arlberg', desc: 'Tourismus-Branche mit speziellen Anforderungen an Online-Präsenz und Saison-Geschäft.' },
                  { title: 'Persönlich vor Ort', desc: 'Vorarlberg ist klein — ich bin innerhalb von 1 Stunde bei jedem Kunden.' },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    className={`reveal reveal-delay-${i + 1}`}
                    style={{
                      padding: '1.5rem',
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '1.25rem',
                      transition: 'all 0.3s',
                    }}
                  >
                    <div style={{
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: '0.5rem',
                      fontSize: '0.95rem',
                      fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
                    }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== TIMELINE ===== */}
        <section className="section">
          <div className="container">
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="section-label reveal" style={{ justifyContent: 'center', textAlign: 'center' }}>
                <Calendar size={12} />
                Meilensteine
              </div>
              <h2 className="section-title reveal" style={{ textAlign: 'center' }}>
                Die <span className="gradient-text">Reise</span> bis hierher.
              </h2>

              <div style={{ marginTop: '3rem' }}>
                {timeline.map((item, i) => (
                  <div key={item.year + item.title} className={`timeline-item reveal reveal-delay-${i + 1}`}>
                    <div style={{
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--color-primary)',
                      marginBottom: '0.25rem',
                    }}>
                      {item.year}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
                      fontSize: '1.1rem',
                      fontWeight: 600,
                      color: '#fff',
                      marginBottom: '0.3rem',
                    }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== TECH STACK ===== */}
        <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="container">
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
              <div className="section-label reveal" style={{ justifyContent: 'center', textAlign: 'center' }}>
                <Code2 size={12} />
                Tech Stack
              </div>
              <h2 className="section-title reveal" style={{ textAlign: 'center' }}>
                Was ich verwende —<br />
                <span className="gradient-text">und warum.</span>
              </h2>
              <p className="section-subtitle reveal reveal-delay-1" style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto' }}>
                Ich setze auf bewährte, zukunftssichere Technologien, die zu
                Ihrem Projekt passen — nicht auf whatever gerade trendy ist.
              </p>

              <div className="tech-stack reveal reveal-delay-2" style={{ justifyContent: 'center', marginTop: '2rem' }}>
                {techStack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>

              <div
                className="reveal reveal-delay-3"
                style={{
                  marginTop: '2.5rem',
                  padding: '1.5rem',
                  background: 'rgba(0, 212, 255, 0.04)',
                  border: '1px solid rgba(0, 212, 255, 0.1)',
                  borderRadius: '1.25rem',
                }}
              >
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>
                  <strong style={{ color: '#fff' }}>Mein Entwicklungsansatz:</strong>{' '}
                  Ich nutze Next.js und React für performante Web-Applikationen,
                  Tailwind CSS für durchdachtes Design, und OpenClaw für
                  KI-Automatisierungen, die wirklich funktionieren. Bei
                  E-Commerce greife ich auf Shopify zurück.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="section">
          <div className="container">
            <div className="cta-section reveal">
              <h2>Lassen Sie uns zusammen arbeiten.</h2>
              <p>
                Kennenlernen ist kostenlos. Erzählen Sie mir von Ihrem Projekt —
                ich sage Ihnen ehrlich, was möglich ist.
              </p>
              <Link href="/kontakt" className="btn btn-primary btn-lg glow-cyan">
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
