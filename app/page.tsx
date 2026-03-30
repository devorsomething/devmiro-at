'use client'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useRef } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

/* ── Animated Counter Hook ── */
function useCounter(target: number, duration = 2000) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return
      observer.disconnect()
      let start = 0
      const step = (timestamp: number) => {
        if (!start) start = timestamp
        const progress = Math.min((timestamp - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 4)
        el.textContent = Math.floor(eased * target).toLocaleString('de-AT')
        if (progress < 1) requestAnimationFrame(step)
        else el.textContent = target.toLocaleString('de-AT')
      }
      requestAnimationFrame(step)
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])
  return ref
}

/* ── Stat Block ── */
function StatBlock({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useCounter(value)
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
        fontWeight: 700,
        lineHeight: 1,
        background: 'var(--gradient-text)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        letterSpacing: '-0.03em',
      }}>
        <span ref={ref as React.RefObject<HTMLDivElement>}>0</span>
        <span style={{ fontSize: '0.6em', opacity: 0.8 }}>{suffix}</span>
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: 'var(--text-tertiary)',
        marginTop: '0.5rem',
      }}>
        {label}
      </div>
    </div>
  )
}

/* ── Problem Card ── */
const problems = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2" />
      </svg>
    ),
    title: 'Broken on Mobile',
    desc: 'Mehr als die Hälfte Ihrer Besucher ist auf dem Handy. Funktioniert die Seite dort nicht, sind sie weg.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
    title: 'Too Slow to Rank',
    desc: 'Eine langsame Seite wird von Google versteckt. Ihre Wettbewerber erscheinen zuerst — selbst wenn Ihr Service besser ist.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    title: 'Looks Like 2015',
    desc: 'Menschen beurteilen Ihr Unternehmen nach Ihrer Website. Sieht sie veraltet aus, nehmen sie an, Ihre Arbeit ist es auch.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22,7 13.5,15.5 8.5,10.5 2,17" />
        <polyline points="16,7 22,7 22,13" />
      </svg>
    ),
    title: 'No Conversions',
    desc: 'Traffic ohne Conversions ist verlorenes Geld. Kein klarer Call-to-Action, kein Kontaktformular über dem Fold.',
  },
]

/* ── Service Overview ── */
const services = [
  { title: 'Webentwicklung', desc: 'Maßgeschneiderte Websites und Web-Apps, die Ihre Zielgruppe überzeugen.', icon: '01' },
  { title: 'IT-Beratung', desc: 'Strategische IT-Beratung für KMUs: Infrastruktur, Security und Cloud.', icon: '02' },
  { title: 'Cybersecurity', desc: 'Umfassende Sicherheitslösungen zum Schutz Ihrer digitalen Werte.', icon: '03' },
  { title: 'Cloud-Lösungen', desc: 'Migration, Infrastruktur und Managed Services in der Cloud.', icon: '04' },
  { title: 'KI-Integration', desc: 'AI-gestützte Automatisierung für Ihr Unternehmen — integriert und produktiv.', icon: '05' },
  { title: 'Wartung & Support', desc: 'Laufende Wartung, Updates und 24/7-Support für Ihre Systeme.', icon: '06' },
]

/* ── Industries ── */
const industries = [
  { name: 'IT & Tech', emoji: '💻' },
  { name: 'Gastronomie', emoji: '🍽️' },
  { name: 'Salons & Beauty', emoji: '💇' },
  { name: 'Handel & Shops', emoji: '🏪' },
  { name: 'Dienstleister', emoji: '🤝' },
  { name: 'Beratung', emoji: '📊' },
  { name: 'Gesundheit', emoji: '⚕️' },
  { name: 'Bildung', emoji: '🎓' },
]

/* ── Case Study Highlights ── */
const caseStudies = [
  {
    client: 'TechFlow GmbH',
    project: 'Enterprise Website Redesign',
    metric: '+180%',
    metricLabel: 'Mehr Website-Leads',
    color: 'cyan',
    tags: ['Webentwicklung', 'UX Design', 'SEO'],
  },
  {
    client: 'Haarstudio Ella',
    project: 'Online-Buchungssystem',
    metric: '−60%',
    metricLabel: 'Weniger Verwaltung',
    color: 'purple',
    tags: ['Automatisierung', 'App-Entwicklung'],
  },
  {
    client: 'Modehaus Berger',
    project: 'Omnichannel E-Commerce',
    metric: '€120K+',
    metricLabel: 'Online-Umsatz/Monat',
    color: 'blue',
    tags: ['E-Commerce', 'Shopify'],
  },
]

/* ── Trust Badges ── */
const trustBadges = [
  { label: 'Vorarlberger Unternehmen', icon: '📍' },
  { label: '100+ Projekte', icon: '🚀' },
  { label: '98% Weiterempfehlung', icon: '⭐' },
  { label: 'DSGVO-konform', icon: '🔒' },
  { label: 'Fixe Preise', icon: '💰' },
  { label: '24h Reaktionszeit', icon: '⚡' },
]

/* ── Social Proof ── */
const socialProof = [
  { text: '"DEVMIRO hat unsere Erwartungen übertroffen."', author: 'Michael R., TechFlow GmbH' },
  { text: '"Das Buchungssystem hat unseren Alltag revolutioniert."', author: 'Sandra K., Haarstudio Ella' },
  { text: '"Unsere Online-Bestellungen sind um 220% gestiegen."', author: 'Martin W., Gasthaus Krone' },
]

/* ── Pricing ── */
const plans = [
  {
    name: 'Starter',
    price: '1.800',
    period: 'einmalig',
    pages: 'bis 5 Seiten',
    desc: 'Perfekt für lokale KMUs und Solo-Selbstständige.',
    features: ['Custom Design', 'Responsive Entwicklung', 'Kontaktformular', 'SEO-Grundsetup', 'GDPR-konform'],
    cta: 'Angebot anfordern',
    href: '/start',
    featured: false,
  },
  {
    name: 'Business',
    price: '6.500',
    period: 'einmalig',
    pages: 'bis 10 Seiten',
    desc: 'Für wachsende Unternehmen mit ambitionierten Zielen.',
    features: ['Alles in Starter', 'Figma Custom Design', 'Erweiterte SEO-Strategie', 'Google Analytics 4', 'Cal.com Buchungssystem', '1 Monat kostenloser Support', '1 Monat kostenloses Hosting'],
    cta: 'Projekt starten',
    href: '/start',
    featured: true,
  },
  {
    name: 'Premium',
    price: '12.000',
    period: 'einmalig',
    pages: '10–20+ Seiten',
    desc: 'Für Unternehmen, die als Marktführer wahrgenommen werden wollen.',
    features: ['Alles in Business', '2 Designrichtungen', 'Brand Kit', 'Animationen & Übergänge', 'Mehrsprachig (2 Sprachen)', 'Newsletter/CRM Integration', '60 Tage Support'],
    cta: 'Projekt starten',
    href: '/start',
    featured: false,
  },
  {
    name: 'Enterprise',
    price: 'Individuell',
    period: '',
    pages: 'Unbegrenzt',
    desc: 'Komplexe Anforderungen, E-Commerce, Multi-Site.',
    features: ['Alles in Premium', 'WooCommerce / E-Commerce', 'Custom Funktionalität', 'Multi-Site / Multi-Brand', 'Content Migration', 'Priority Support', 'Quartalsweise Reviews'],
    cta: 'Kontakt aufnehmen',
    href: '/kontakt',
    featured: false,
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          paddingTop: 'var(--header-height)',
        }}>
          {/* Background orbs */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `var(--gradient-mesh)`,
            zIndex: 0,
          }} />
          <div className="orb orb--cyan" style={{ width: 600, height: 600, top: '-20%', left: '-10%', opacity: 0.8 }} />
          <div className="orb orb--blue" style={{ width: 500, height: 500, bottom: '-10%', right: '-5%', opacity: 0.6 }} />
          <div className="orb orb--purple" style={{ width: 400, height: 400, top: '40%', right: '30%', opacity: 0.4 }} />

          {/* Grid lines decoration */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            zIndex: 0,
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 30%, transparent 80%)',
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 1, padding: 'var(--space-xl) var(--space-md)' }}>
            <div style={{ maxWidth: 900 }}>
              {/* Pre-headline */}
              <div className="badge badge--cyan" style={{
                display: 'inline-flex',
                marginBottom: '2rem',
                animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
                opacity: 0,
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-cyan)', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
                Vorarlberg · Österreich
              </div>

              {/* Headline */}
              <h1 style={{
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: '1.5rem',
                animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards',
                opacity: 0,
              }}>
                IT-Lösungen,{' '}
                <span className="text-gradient">die wirken.</span>
                <br />
                <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>Nicht nur gut aussehen.</span>
              </h1>

              {/* Subheadline */}
              <p style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                maxWidth: 620,
                marginBottom: '2.5rem',
                animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards',
                opacity: 0,
              }}>
                DEVMIRO entwickelt maßgeschneiderte IT-Lösungen für Unternehmen in Vorarlberg und ganz Österreich. Fixe Preise, keine Überraschungen, Ergebnisse die zählen.
              </p>

              {/* CTAs */}
              <div style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards',
                opacity: 0,
              }}>
                <Link href="/start" className="btn btn--primary" style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}>
                  Projekt starten
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12,5 19,12 12,19" />
                  </svg>
                </Link>
                <Link href="/services" className="btn btn--outline" style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}>
                  Leistungen ansehen
                </Link>
              </div>

              {/* Trust bar */}
              <div style={{
                marginTop: '4rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards',
                opacity: 0,
                flexWrap: 'wrap',
              }}>
                <span style={{ color: 'var(--text-tertiary)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Vertraut von
                </span>
                {['Vorarlberger Unternehmen', 'Österreichweite Kunden', 'CH & DE Partner'].map((t, i) => (
                  <div key={i} style={{
                    padding: '0.375rem 1rem',
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 100,
                    fontSize: '0.8125rem',
                    color: 'var(--text-secondary)',
                    fontFamily: 'var(--font-mono)',
                  }}>
                    {t}
                  </div>
                ))}
              </div>
            </div>

            {/* Floating code window */}
            <div style={{
              position: 'absolute',
              right: '-2%',
              top: '50%',
              transform: 'translateY(-50%)',
              width: 'clamp(320px, 42vw, 560px)',
              animation: 'float 8s ease-in-out infinite',
              zIndex: 1,
            }} className="hero-window">
              <div className="glass" style={{ padding: '1.5rem', borderRadius: 16 }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: '1rem' }}>
                  {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                    <div key={i} style={{ width: 12, height: 12, borderRadius: '50%', background: c }} />
                  ))}
                </div>
                <pre style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
                  <span style={{ color: 'var(--accent-purple)' }}>const</span>{' '}
                  <span style={{ color: 'var(--accent-cyan)' }}>devmiro</span>{' '}
                  <span style={{ color: 'var(--text-primary)' }}>=</span>{' '}
                  <span style={{ color: 'var(--text-primary)' }}>{'{'}</span>
                  {'\n'}  {'  '}<span style={{ color: 'var(--accent-blue)' }}>expertise</span>
                  {': '}<span style={{ color: '#f0f4ff' }}>'Full-Stack Dev'</span>
                  {','}
                  {'\n'}  {'  '}<span style={{ color: 'var(--accent-blue)' }}>location</span>
                  {': '}<span style={{ color: '#f0f4ff' }}>'Vorarlberg'</span>
                  {','}
                  {'\n'}  {'  '}<span style={{ color: 'var(--accent-blue)' }}>pricing</span>
                  {': '}<span style={{ color: '#f0f4ff' }}>'Fixed'</span>
                  {','}
                  {'\n'}  {'  '}<span style={{ color: 'var(--accent-blue)' }}>result</span>
                  {': '}<span style={{ color: '#f0f4ff' }}>'Premium'</span>
                  {'\n'}<span style={{ color: 'var(--text-primary)' }}>{'}'}</span>
                  {'\n\n'}
                  <span style={{ color: 'var(--accent-cyan)' }}>export</span>
                  {' '}
                  <span style={{ color: 'var(--accent-purple)' }}>default</span>{' '}
                  <span style={{ color: 'var(--accent-blue)' }}>devmiro</span>
                </pre>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            animation: 'fadeIn 1s 1.5s forwards',
            opacity: 0,
          }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-tertiary)' }}>Scroll</span>
            <div style={{
              width: 1,
              height: 40,
              background: 'linear-gradient(to bottom, var(--accent-cyan), transparent)',
              animation: 'float 2s ease-in-out infinite',
            }} />
          </div>
        </section>

        {/* ── TRUST BADGES ── */}
        <section style={{
          background: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: 'var(--space-md) 0',
          overflow: 'hidden',
        }}>
          <div className="container">
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.5rem 2.5rem',
            }}>
              {trustBadges.map((badge, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  color: 'var(--text-secondary)',
                  animation: `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s forwards`,
                  opacity: 0,
                }}>
                  <span style={{ fontSize: '1rem' }}>{badge.icon}</span>
                  {badge.label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)', padding: 'var(--space-lg) 0', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'var(--space-md)',
            }}>
              <StatBlock value={100} suffix="+" label="Projekte" />
              <StatBlock value={98} suffix="%" label="Kundenzufriedenheit" />
              <StatBlock value={12} suffix="+" label="Jahre Erfahrung" />
              <StatBlock value={24} suffix="h" label="Response-Zeit" />
            </div>
          </div>
        </section>

        {/* ── SOCIAL PROOF ── */}
        <section style={{
          background: 'var(--bg-void)',
          padding: 'var(--space-md) 0',
          borderBottom: '1px solid var(--border-subtle)',
          overflow: 'hidden',
        }}>
          <div className="container">
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'var(--space-lg)',
            }}>
              {socialProof.map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  maxWidth: 360,
                  animation: `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s forwards`,
                  opacity: 0,
                }}>
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: 'var(--accent-cyan)',
                    flexShrink: 0,
                    boxShadow: '0 0 16px var(--accent-cyan)',
                  }} />
                  <div>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontStyle: 'italic', lineHeight: 1.6 }}>{item.text}</p>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', marginTop: '0.25rem' }}>— {item.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROBLEMS ── */}
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'radial-gradient(ellipse at right, rgba(0,229,255,0.04) 0%, transparent 60%)', pointerEvents: 'none' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                <div className="section-label" style={{ justifyContent: 'center' }}>Das Problem</div>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                  Ihr Unternehmen verdient{' '}
                  <span className="text-gradient">besser.</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '1rem auto 0', lineHeight: 1.7 }}>
                  Die meisten KMU-Websites scheitern an den Basics. Hier sind die vier häufigsten Gründe, warum Besucher nicht zu Kunden werden.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid-2" style={{ maxWidth: 900, margin: '0 auto' }}>
              {problems.map((p, i) => (
                <ScrollReveal key={p.title} delay={i * 100}>
                  <div className="glass--card" style={{ padding: '2rem', height: '100%' }}>
                    <div style={{
                      width: 52,
                      height: 52,
                      borderRadius: 14,
                      background: 'var(--accent-cyan-dim)',
                      border: '1px solid var(--border-accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent-cyan)',
                      marginBottom: '1.25rem',
                    }}>
                      {p.icon}
                    </div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{p.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CASE STUDY HIGHLIGHTS ── */}
        <section className="section" style={{ background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 50% 60% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                <div className="section-label" style={{ justifyContent: 'center' }}>Erfolgsgeschichten</div>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                  Ergebnisse, die<span className="text-gradient"> messbar sind.</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: 520, margin: '1rem auto 0', lineHeight: 1.7 }}>
                  Drei ausgewählte Projekte, die zeigen, was eine strategische digitale Transformation für echte Unternehmen bedeutet.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid-3">
              {caseStudies.map((cs, i) => (
                <ScrollReveal key={cs.client} delay={i * 120}>
                  <div className="glass--card" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                      {cs.tags.map(tag => (
                        <span key={tag} style={{
                          padding: '0.25rem 0.75rem',
                          background: 'rgba(255,255,255,0.03)',
                          border: '1px solid var(--border-subtle)',
                          borderRadius: 100,
                          fontSize: '0.7rem',
                          color: 'var(--text-tertiary)',
                          fontFamily: 'var(--font-mono)',
                        }}>{tag}</span>
                      ))}
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>{cs.client}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>{cs.project}</p>
                    </div>
                    <div style={{
                      padding: '1.25rem',
                      background: 'rgba(255,255,255,0.02)',
                      borderRadius: 12,
                      border: '1px solid var(--border-subtle)',
                      textAlign: 'center',
                    }}>
                      <div style={{
                        fontSize: '2.5rem',
                        fontWeight: 700,
                        background: `linear-gradient(135deg, ${cs.color === 'cyan' ? '#00e5ff' : cs.color === 'blue' ? '#4d7cff' : '#8b5cf6'} 0%, ${cs.color === 'cyan' ? '#4d7cff' : cs.color === 'blue' ? '#8b5cf6' : '#00e5ff'} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '-0.03em',
                      }}>{cs.metric}</div>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginTop: '0.25rem' }}>
                        {cs.metricLabel}
                      </div>
                    </div>
                    <Link href="/portfolio" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      color: 'var(--accent-cyan)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textDecoration: 'none',
                      marginTop: 'auto',
                    }}>
                      Projekt ansehen
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12,5 19,12 12,19" />
                      </svg>
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICES OVERVIEW ── */}
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="orb orb--cyan" style={{ width: 500, height: 500, top: '20%', left: '-10%', opacity: 0.5 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <ScrollReveal>
              <div style={{ marginBottom: 'var(--space-lg)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1rem' }}>
                  <div>
                    <div className="section-label">Leistungen</div>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                      Alles, was Sie{' '}
                      <span className="text-gradient">brauchen.</span>
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: 480, marginTop: '0.75rem', lineHeight: 1.7 }}>
                      Von der strategischen Beratung bis zum fertigen Produkt — wir begleiten Sie durch den gesamten digitalen Prozess.
                    </p>
                  </div>
                  <Link href="/services" className="btn btn--ghost">
                    Alle Leistungen
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12,5 19,12 12,19" />
                    </svg>
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            <div className="grid-3">
              {services.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 80}>
                  <Link href="/services" style={{ textDecoration: 'none' }}>
                    <div className="glass--card" style={{ padding: '2rem', height: '100%' }}>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        color: 'var(--accent-cyan)',
                        letterSpacing: '0.1em',
                        marginBottom: '1rem',
                        opacity: 0.7,
                      }}>{s.icon}</div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.75rem', letterSpacing: '-0.01em' }}>{s.title}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{s.desc}</p>
                      <div style={{ marginTop: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontSize: '0.875rem', fontWeight: 600 }}>
                        Mehr erfahren
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12,5 19,12 12,19" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── INDUSTRIES ── */}
        <section className="section" style={{ background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', opacity: 0.5 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                <div className="section-label" style={{ justifyContent: 'center' }}>Branchen</div>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                  Jede Branche. <span className="text-gradient">Jede Grösse.</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '1rem auto 0', lineHeight: 1.7 }}>
                  Ob IT-Unternehmen, Restaurant oder Friseursalon — wir verstehen die spezifischen Anforderungen jeder Branche.
                </p>
              </div>
            </ScrollReveal>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              justifyContent: 'center',
              maxWidth: 800,
              margin: '0 auto',
            }}>
              {industries.map((ind, i) => (
                <ScrollReveal key={ind.name} delay={i * 70}>
                  <div className="glass--card" style={{
                    padding: '1rem 1.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    cursor: 'default',
                  }}>
                    <span style={{ fontSize: '1.25rem' }}>{ind.emoji}</span>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{ind.name}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── PRICING ── */}
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="orb orb--blue" style={{ width: 600, height: 600, top: '10%', right: '-15%', opacity: 0.4 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <ScrollReveal>
              <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
                <div className="section-label" style={{ justifyContent: 'center' }}>Preise</div>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                  Fixe Preise. <span className="text-gradient">Keine Überraschungen.</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '1rem auto 0', lineHeight: 1.7 }}>
                  Sie wissen genau, was Sie bezahlen, bevor wir beginnen. Kein Zeittracking, keine Scope Creep, keine Rechnungs-Überraschungen.
                </p>
              </div>
            </ScrollReveal>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
              {plans.map((plan, i) => (
                <ScrollReveal key={plan.name} delay={i * 100}>
                  <div className={`price-card ${plan.featured ? 'price-card--featured' : ''}`} style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                    {plan.featured && (
                      <div className="badge badge--cyan" style={{ alignSelf: 'flex-start', marginBottom: '1rem' }}>
                        ⭐ Most Popular
                      </div>
                    )}
                    <div style={{ marginBottom: '0.25rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{plan.name}</h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.5 }}>{plan.desc}</p>
                    </div>
                    <div style={{ margin: '1.5rem 0' }}>
                      {plan.price === 'Individuell' ? (
                        <div style={{ fontSize: '2rem', fontWeight: 700, background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Individuell</div>
                      ) : (
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>€</span>
                          <span style={{ fontSize: '2.5rem', fontWeight: 700, background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.03em', lineHeight: 1 }}>{plan.price}</span>
                          {plan.period && <span style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>/{plan.period}</span>}
                        </div>
                      )}
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)', letterSpacing: '0.08em', marginTop: '0.5rem', opacity: 0.8 }}>{plan.pages}</div>
                    </div>
                    <div style={{ flex: 1 }}>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
                        {plan.features.map(f => (
                          <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 2 }}>
                              <polyline points="20,6 9,17 4,12" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <Link href={plan.href} className={`btn ${plan.featured ? 'btn--primary' : 'btn--outline'}`} style={{ justifyContent: 'center', width: '100%', marginTop: 'auto' }}>
                      {plan.cta}
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            {/* Guarantee */}
            <ScrollReveal>
              <div className="glass" style={{
                marginTop: 'var(--space-lg)',
                padding: '2rem 2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                maxWidth: 800,
                margin: 'var(--space-lg) auto 0',
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'var(--accent-cyan-dim)',
                  border: '1px solid var(--border-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Design-Zufriedenheitsgarantie</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    Wenn Sie mit dem Design nicht 100% zufrieden sind, überarbeiten wir es so lange, bis Sie es sind — ohne zusätzliche Kosten.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ── CTA SECTION ── */}
        <section className="section" style={{
          background: 'var(--bg-deep)',
          position: 'relative',
          overflow: 'hidden',
          textAlign: 'center',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 70% at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)' }} />
          <div className="orb orb--cyan" style={{ width: 400, height: 400, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', opacity: 0.3 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <ScrollReveal>
              <div className="badge badge--cyan" style={{ marginBottom: '2rem' }}>
                🚀 Bereit durchzustarten?
              </div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1.5rem', maxWidth: 700, margin: '0 auto 1.5rem' }}>
                Ihr Projekt wartet.
                <br />
                <span className="text-gradient">Lassen Sie uns reden.</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.7, fontSize: '1.0625rem' }}>
                Füllen Sie das Formular aus, erhalten Sie innerhalb von 24 Stunden einen Vertrag — und Ihre Website ist in wenigen Wochen live.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link href="/start" className="btn btn--primary" style={{ fontSize: '1rem', padding: '1.125rem 2.5rem' }}>
                  Projekt starten
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12,5 19,12 12,19" />
                  </svg>
                </Link>
                <Link href="/kontakt" className="btn btn--outline" style={{ fontSize: '1rem', padding: '1.125rem 2.5rem' }}>
                  Kontakt aufnehmen
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .hero-window { display: none !important; }
        }
      `}</style>
    </>
  )
}
