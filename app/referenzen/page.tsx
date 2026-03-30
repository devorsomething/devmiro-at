'use client';

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    quote: 'DEVMIRO hat unsere Erwartungen übertroffen. Die neue Website generiert täglich qualifizierte Anfragen — das hatte unser altes System nie geschafft. Die Zusammenarbeit war von Anfang an professionell und transparent.',
    name: 'Michael Reinhardt',
    title: 'Geschäftsführer',
    company: 'TechFlow GmbH',
    location: 'Dornbirn',
    industry: 'IT & Technologie',
    rating: 5,
    project: 'Enterprise Website Redesign',
    metric: '+180%',
    metricLabel: 'Mehr Website-Leads',
    color: 'cyan',
  },
  {
    id: 2,
    quote: 'Das Buchungssystem hat unseren Alltag revolutioniert. Keine verpassten Termine mehr, keine Doppelbuchungen. Unsere Mitarbeiter und Kunden sind gleichermaßen begeistert. Endlich Zeit für das Wesentliche.',
    name: 'Sandra Kessler',
    title: 'Inhaberin',
    company: 'Haarstudio Ella',
    location: 'Bregenz',
    industry: 'Beauty & Salons',
    rating: 5,
    project: 'Online-Buchungssystem',
    metric: '−60%',
    metricLabel: 'Weniger Verwaltung',
    color: 'purple',
  },
  {
    id: 3,
    quote: 'Von der ersten Skizze bis zum Launch war alles durchdacht und professionell. Unser neuer Shopify-Store läuft stabil und generiert monatlich über €120.000 Umsatz. Eine echte Investition mit ROI.',
    name: 'Thomas Berger',
    title: 'Inhaber',
    company: 'Modehaus Berger',
    location: 'Feldkirch',
    industry: 'Einzelhandel',
    rating: 5,
    project: 'Omnichannel E-Commerce',
    metric: '€120K+',
    metricLabel: 'Online-Umsatz/Monat',
    color: 'blue',
  },
  {
    id: 4,
    quote: 'Die Lead-Generierungsplattform hat unsere Vertriebsstrategie komplett verändert. Qualifizierte Leads statt kalter Akquise — das spart Zeit und erhöht die Abschlussrate dramatisch.',
    name: 'Claudia Mäder',
    title: 'Partnerin',
    company: 'Alpen Consulting',
    location: 'Bludenz',
    industry: 'Unternehmensberatung',
    rating: 5,
    project: 'B2B Lead-Generierung Platform',
    metric: '+340%',
    metricLabel: 'Qualifizierte Leads',
    color: 'cyan',
  },
  {
    id: 5,
    quote: 'Das Patientenportal wurde nahtlos in unser bestehendes System integriert. Telemedizin-Sprechstunden, automatische Erinnerungen, DSGVO-konform — alles aus einem Guss. Unsere Patienten bewerten uns mit 4.9 Sternen.',
    name: 'Dr. Florian Laternser',
    title: 'Geschäftsführer',
    company: 'Physioplus',
    location: 'Dornbirn',
    industry: 'Gesundheit',
    rating: 5,
    project: 'Patientenportal & Telemedizin',
    metric: '4.9★',
    metricLabel: 'Patientenzufriedenheit',
    color: 'purple',
  },
  {
    id: 6,
    quote: 'Die QR-Code-Menükarte mit Lieferando-Integration war genau das, was wir gebraucht haben. Unsere Online-Bestellungen sind um 220% gestiegen. Die Investition hat sich in 3 Monaten bezahlt gemacht.',
    name: 'Martin Welte',
    title: 'Inhaber',
    company: 'Gasthaus Krone',
    location: 'Feldkirch',
    industry: 'Gastronomie',
    rating: 5,
    project: 'Digitales Menü & Reservierungssystem',
    metric: '+220%',
    metricLabel: 'Online-Umsatz',
    color: 'blue',
  },
]

const stats = [
  { value: '50+', label: 'Zufriedene Kunden' },
  { value: '98%', label: 'Weiterempfehlungsrate' },
  { value: '4.9★', label: 'Durchschnittsbewertung' },
  { value: '24h', label: 'Reaktionszeit' },
]

const industries = ['Alle', 'IT & Technologie', 'Gastronomie', 'Beauty & Salons', 'Einzelhandel', 'Unternehmensberatung', 'Gesundheit']

export default function ReferenzenPage() {
  const [activeIndustry, setActiveIndustry] = useState('Alle')
  const [showVideoModal, setShowVideoModal] = useState(false)

  const filtered = activeIndustry === 'Alle'
    ? testimonials
    : testimonials.filter(t => t.industry === activeIndustry)

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{
          paddingTop: 'calc(var(--header-height) + var(--space-xl))',
          paddingBottom: 'var(--space-xl)',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', zIndex: 0 }} />
          <div className="orb orb--cyan" style={{ width: 600, height: 600, top: '-10%', right: '-10%', opacity: 0.6 }} />
          <div className="orb orb--purple" style={{ width: 400, height: 400, bottom: '0%', left: '5%', opacity: 0.3 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="badge badge--cyan" style={{ marginBottom: '1.5rem' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 00-3-3.87" />
                <path d="M16 3.13a4 4 0 010 7.75" />
              </svg>
              Kundenstimmen
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              maxWidth: 750,
              marginBottom: '1.5rem',
            }}>
              Was unsere Kunden<span className="text-gradient"> sagen.</span>
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              lineHeight: 1.7,
              maxWidth: 560,
            }}>
              Echte Ergebnisse von echten Unternehmen. Hier erfahren Sie aus erster Hand, was eine Zusammenarbeit mit DEVMIRO bedeutet — und welche messbaren Erfolge wir gemeinsam erzielt haben.
            </p>
          </div>
        </section>

        {/* STATS BAR */}
        <section style={{
          background: 'var(--bg-deep)',
          borderTop: '1px solid var(--border-subtle)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: 'var(--space-lg) 0',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 'var(--space-md)',
            }}>
              {stats.map((s, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  padding: '1.5rem',
                  animation: `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s forwards`,
                  opacity: 0,
                }}>
                  <div style={{
                    fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                    fontWeight: 700,
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.03em',
                    marginBottom: '0.5rem',
                  }}>{s.value}</div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-tertiary)',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FILTER + TESTIMONIALS */}
        <section className="section" style={{ background: 'var(--bg-deep)', position: 'relative' }}>
          <div className="container">
            {/* Industry Filter */}
            <div style={{
              display: 'flex',
              gap: '0.75rem',
              flexWrap: 'wrap',
              marginBottom: 'var(--space-lg)',
              justifyContent: 'center',
            }}>
              {industries.map(ind => (
                <button
                  key={ind}
                  onClick={() => setActiveIndustry(ind)}
                  style={{
                    padding: '0.625rem 1.375rem',
                    borderRadius: 100,
                    border: `1px solid ${activeIndustry === ind ? 'var(--accent-cyan)' : 'var(--border-subtle)'}`,
                    background: activeIndustry === ind ? 'var(--accent-cyan-dim)' : 'rgba(255,255,255,0.03)',
                    color: activeIndustry === ind ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {ind}
                </button>
              ))}
            </div>

            {/* Testimonial Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
              gap: '1.5rem',
            }}>
              {filtered.map((t, i) => (
                <div
                  key={t.id}
                  className="glass--card"
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    animation: `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s forwards`,
                    opacity: 0,
                  }}
                >
                  {/* Header: Rating + Industry */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="var(--accent-cyan)" stroke="none">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <span className={`badge badge--${t.color === 'cyan' ? 'cyan' : t.color === 'blue' ? 'blue' : 'purple'}`} style={{ fontSize: '0.65rem' }}>
                      {t.industry}
                    </span>
                  </div>

                  {/* Quote */}
                  <div style={{ position: 'relative' }}>
                    <div style={{
                      position: 'absolute',
                      top: '-0.5rem',
                      left: '-0.25rem',
                      fontSize: '4rem',
                      fontFamily: 'Georgia, serif',
                      color: t.color === 'cyan' ? 'var(--accent-cyan)' : t.color === 'blue' ? 'var(--accent-blue)' : 'var(--accent-purple)',
                      opacity: 0.15,
                      lineHeight: 1,
                    }}>&ldquo;</div>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.9375rem',
                      lineHeight: 1.8,
                      position: 'relative',
                      zIndex: 1,
                    }}>
                      {t.quote}
                    </p>
                  </div>

                  {/* Project + Metric */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.25rem',
                    background: 'rgba(255,255,255,0.02)',
                    borderRadius: 12,
                    border: '1px solid var(--border-subtle)',
                  }}>
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: 'var(--text-tertiary)',
                        marginBottom: '0.25rem',
                      }}>Projekt</div>
                      <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{t.project}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{
                        fontSize: '1.75rem',
                        fontWeight: 700,
                        background: `linear-gradient(135deg, ${t.color === 'cyan' ? '#00e5ff' : t.color === 'blue' ? '#4d7cff' : '#8b5cf6'} 0%, ${t.color === 'cyan' ? '#4d7cff' : t.color === 'blue' ? '#8b5cf6' : '#00e5ff'} 100%)`,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        letterSpacing: '-0.03em',
                        lineHeight: 1,
                      }}>{t.metric}</div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: 'var(--text-tertiary)',
                      }}>{t.metricLabel}</div>
                    </div>
                  </div>

                  {/* Author */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${t.color === 'cyan' ? '#00e5ff' : t.color === 'blue' ? '#4d7cff' : '#8b5cf6'} 0%, ${t.color === 'cyan' ? '#4d7cff' : t.color === 'blue' ? '#8b5cf6' : '#00e5ff'} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 700,
                      fontSize: '1.125rem',
                      color: '#030308',
                      flexShrink: 0,
                    }}>{t.name.charAt(0)}</div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9375rem', marginBottom: '0.1rem' }}>{t.name}</div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-tertiary)',
                        letterSpacing: '0.03em',
                      }}>
                        {t.title}, {t.company} · {t.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRUST BADGES */}
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', opacity: 0.3 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Vertrauen</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                Qualität, die man<span className="text-gradient"> messen kann.</span>
              </h2>
            </div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem',
              maxWidth: 900,
              margin: '0 auto',
            }}>
              {[
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  ),
                  title: '100% Zufriedenheitsgarantie',
                  desc: 'Wir arbeiten so lange an Ihrem Design, bis Sie 100% zufrieden sind — ohne zusätzliche Kosten.',
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                  ),
                  title: '24-Stunden Reaktionszeit',
                  desc: 'Anfragen werden innerhalb von 24 Stunden bearbeitet. Bei dringenden Issues sind wir schneller.',
                },
                {
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="1.5">
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  ),
                  title: 'Fixe Preise, keine Überraschungen',
                  desc: 'Der angebotene Preis ist der Endpreis. Scope-Änderungen besprechen wir vorher — keine versteckten Rechnungen.',
                },
              ].map((item, i) => (
                <div key={i} className="glass" style={{
                  padding: '2rem',
                  textAlign: 'center',
                  animation: `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s forwards`,
                  opacity: 0,
                }}>
                  <div style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: 'var(--accent-cyan-dim)',
                    border: '1px solid var(--border-accent)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ background: 'var(--bg-deep)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,255,0.06) 0%, transparent 70%)' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="badge badge--cyan" style={{ marginBottom: '1.5rem' }}>
              🚀 Werden Sie unsere nächste Erfolgsgeschichte
            </div>
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginBottom: '1.5rem',
            }}>
              Bereit für<span className="text-gradient"> Ihre Erfolgsgeschichte?</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              maxWidth: 460,
              margin: '0 auto 2.5rem',
              lineHeight: 1.7,
              fontSize: '1.0625rem',
            }}>
              Lassen Sie uns gemeinsam ein Projekt realisieren, das messbare Ergebnisse liefert. Unverbindlich, kostenlos, unkompliziert.
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
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          section > div > div[style*="grid-template-columns: repeat(4"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          section > div > div[style*="repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}

