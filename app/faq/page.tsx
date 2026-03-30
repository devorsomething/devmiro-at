'use client';

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

const faqCategories = [
  {
    category: 'Allgemein',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    items: [
      {
        q: 'Was kostet eine Website bei DEVMIRO?',
        a: 'Unsere Website-Projekte beginnen bei € 1.800 für ein Starter-Paket mit bis zu 5 Seiten. Das Business-Paket liegt bei € 6.500 und das Premium-Paket bei € 12.000. Für komplexere Anforderungen erstellen wir Ihnen ein individuelles Angebot. Alle Preise sind Fixpreise — keine Überraschungen.',
      },
      {
        q: 'Wie lange dauert ein typisches Webprojekt?',
        a: 'Ein Starter-Projekt ist in 3–4 Wochen fertig. Business-Projekte dauern typischerweise 6–8 Wochen. Premium-Projekte können 8–12 Wochen in Anspruch nehmen. Die genaue Timeline besprechen wir im Erstgespräch und halten sie im Vertrag fest.',
      },
      {
        q: 'Arbeiten Sie nur mit Vorarlberger Unternehmen?',
        a: 'Unsere Heimat ist Vorarlberg, aber wir arbeiten mit Unternehmen in ganz Österreich, Deutschland und der Schweiz zusammen. Sprache und Kultur sind für uns nie ein Hindernis.',
      },
      {
        q: 'Kann ich vor Ort beraten werden?',
        a: 'Ja — persönliche Termine in Vorarlberg sind für uns selbstverständlich und kostenlos. Für andere Regionen nutzen wir professionelle Videocalls (Google Meet, Zoom).',
      },
      {
        q: 'Was passiert nach dem Erstgespräch?',
        a: 'Nach einem unverbindlichen Erstgespräch (30–60 Minuten) erhalten Sie innerhalb von 24 Stunden ein detailliertes Angebot mit fixem Preis und verbindlicher Timeline.',
      },
      {
        q: 'Bieten Sie auch monatliche Betreuung an?',
        a: 'Ja. Unser Wartungspaket beginnt bei € 99/Monat und umfasst Software-Updates, Security Patches, tägliche Backups, Uptime-Monitoring und EU-Hosting.',
      },
    ],
  },
  {
    category: 'Technik & Entwicklung',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    items: [
      {
        q: 'Welche Technologien setzen Sie ein?',
        a: 'Wir setzen auf modernste Technologien: Next.js, React, TypeScript, WordPress, WooCommerce, Tailwind CSS und Next.js App Router. Für Backend-Integrationen nutzen wir Node.js, Python und Cloud-Lösungen (AWS, Azure, GCP).',
      },
      {
        q: 'Wird meine Website auf dem Handy funktionieren?',
        a: 'Ja — Responsive Design ist bei uns Standard. Jede Website wird für Mobile, Tablet und Desktop optimiert. Wir testen auf echten Geräten, nicht nur im Browser.',
      },
      {
        q: 'Wie schnell wird meine Website sein?',
        a: 'Performance ist ein Kernfokus. Wir optimieren auf Core Web Vitals (LCP < 2.5s, FID < 100ms, CLS < 0.1). Eine schnelle Website ist gut für SEO und Conversion.',
      },
      {
        q: 'Können Sie unsere bestehende Website modernisieren?',
        a: 'Absolut. Wir haben umfangreiche Erfahrung mit Website-Relaunches. Der Prozess umfasst Audit der bestehenden Seite, Strategie, neues Design, Entwicklung und Launch mit Redirect-Management.',
      },
      {
        q: 'Entwickeln Sie auch E-Commerce-Shops?',
        a: 'Ja. Wir setzen WooCommerce (WordPress) und Shopify ein. Beides sind ausgereifte Plattformen mit umfangreichen Zahlungs- und Versandintegrationen.',
      },
    ],
  },
  {
    category: 'Design & UX',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    items: [
      {
        q: 'Erhalte ich Feedback-Möglichkeiten vor der Fertigstellung?',
        a: 'Ja. Im Design-Prozess arbeiten wir mit Figma-Mockups. Sie sehen das Design, bevor eine einzige Zeile Code geschrieben wird, und können unlimited Revisionen anfordern.',
      },
      {
        q: 'Was ist in einem Brand Kit enthalten?',
        a: 'Ein Brand Kit umfasst Farbpalette, Typografie-Guide, Logo-Varianten (Dunkel/Hell), Icon-Styles, Button- und Form-Stile sowie Anwendungsbeispiele.',
      },
      {
        q: 'Wie viele Designrichtungen erhalte ich?',
        a: 'Starter: 1 Richtung. Business: 1 Richtung. Premium: 2 Richtungen zur Auswahl. Weitere Richtungen können als Add-on gebucht werden.',
      },
      {
        q: 'Können Sie Animationen und Übergänge einbauen?',
        a: 'Ja — Scroll-Animationen, Page-Transitions, Micro-Interactions und Hover-Effekte sind im Premium-Paket inkludiert und können bei anderen Paketen als Add-on gebucht werden.',
      },
    ],
  },
  {
    category: 'Datenschutz & DSGVO',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    items: [
      {
        q: 'Sind Ihre Websites DSGVO-konform?',
        a: 'Ja. Jede Website wird mit DSGVO-konformen Cookie-Bannern, Datenschutzerklärung, SSL-Zertifikat und professioneller Formulargestaltung ausgeliefert.',
      },
      {
        q: 'Wo werden meine Daten gehostet?',
        a: 'Standardmäßig hosten wir auf EU-Servern (Deutschland/Österreich). Auf Wunsch können wir auch spezifische Hosting-Regionen oder eigene Server konfigurieren.',
      },
      {
        q: 'Wie gehen Sie mit Cookies und Tracking um?',
        a: 'Wir implementieren einen DSGVO-konformen Cookie-Banner mit Kategorie-Auswahl. Google Analytics wird erst nach Consent aktiviert. Für Marketing-Tracking empfehlen wir datenschutzkonforme Alternativen.',
      },
    ],
  },
  {
    category: 'Zahlung & Abrechnung',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </svg>
    ),
    items: [
      {
        q: 'Wie läuft die Bezahlung ab?',
        a: 'Standard: 50% bei Auftragserteilung, 50% bei Fertigstellung. Für größere Projekte sind auch Ratenzahlungen möglich (3x). So teilen wir das Risiko fair.',
      },
      {
        q: 'Gibt es versteckte Kosten?',
        a: 'Nein. Der angebotene Fixpreis ist der Endpreis. Wenn sich der Scope ändert, besprechen wir das vorher und erstellen ein Add-on-Angebot — keine Überraschungen auf der Rechnung.',
      },
      {
        q: 'Was passiert, wenn ich mit dem Ergebnis nicht zufrieden bin?',
        a: 'Wir bieten eine Design-Zufriedenheitsgarantie: Wenn Sie mit dem Design nicht 100% zufrieden sind, überarbeiten wir es so lange, bis Sie es sind — ohne zusätzliche Kosten.',
      },
    ],
  },
]

export default function FAQPage() {
  const [openCategory, setOpenCategory] = useState<string | null>('Allgemein')
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (key: string) => {
    const next = new Set(openItems)
    if (next.has(key)) next.delete(key)
    else next.add(key)
    setOpenItems(next)
  }

  const allOpen = () => {
    const all = new Set<string>()
    faqCategories.forEach(cat => cat.items.forEach(item => all.add(`${cat.category}-${item.q}`)))
    return all
  }

  const toggleAll = () => {
    if (openItems.size === allOpen().size) {
      setOpenItems(new Set())
    } else {
      setOpenItems(allOpen())
    }
  }

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
          <div className="orb orb--cyan" style={{ width: 500, height: 500, top: '-10%', right: '-5%', opacity: 0.6 }} />
          <div className="orb orb--purple" style={{ width: 300, height: 300, bottom: '10%', left: '5%', opacity: 0.3 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="badge badge--cyan" style={{ marginBottom: '1.5rem' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              FAQ
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              maxWidth: 700,
              marginBottom: '1.5rem',
            }}>
              Alles, was Sie<span className="text-gradient"> wissen müssen.</span>
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              lineHeight: 1.7,
              maxWidth: 520,
            }}>
              Die häufigsten Fragen unserer Kunden — übersichtlich nach Kategorien sortiert. Finden Sie schnell die Antworten, die Sie suchen.
            </p>
            {/* Quick search bar */}
            <div style={{
              marginTop: '2rem',
              maxWidth: 500,
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute',
                left: '1.25rem',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--text-tertiary)',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Suchen Sie eine Antwort..."
                style={{
                  width: '100%',
                  padding: '1rem 1.25rem 1rem 3.5rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.9375rem',
                  color: 'var(--text-primary)',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1.5px solid var(--border-subtle)',
                  borderRadius: 12,
                  outline: 'none',
                }}
                onFocus={e => { e.target.style.borderColor = 'var(--accent-cyan)'; e.target.style.boxShadow = '0 0 0 3px rgba(0,229,255,0.08)' }}
                onBlur={e => { e.target.style.borderColor = 'var(--border-subtle)'; e.target.style.boxShadow = 'none' }}
              />
            </div>
          </div>
        </section>

        {/* FAQ CONTENT */}
        <section className="section" style={{ background: 'var(--bg-deep)', position: 'relative' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: 'var(--space-xl)',
              alignItems: 'start',
            }}>
              {/* Sidebar */}
              <div style={{ position: 'sticky', top: 'calc(var(--header-height) + 2rem)' }}>
                <div className="glass" style={{ padding: '1.5rem', borderRadius: 16 }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                  }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 700, fontFamily: 'var(--font-mono)', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-cyan)' }}>
                      Kategorien
                    </h3>
                    <button
                      onClick={toggleAll}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-tertiary)',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        cursor: 'pointer',
                        padding: 0,
                      }}
                    >
                      {openItems.size === allOpen().size ? 'Alle schließen' : 'Alle öffnen'}
                    </button>
                  </div>
                  <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    {faqCategories.map(cat => (
                      <button
                        key={cat.category}
                        onClick={() => setOpenCategory(openCategory === cat.category ? null : cat.category)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.75rem',
                          padding: '0.75rem 1rem',
                          background: openCategory === cat.category ? 'var(--accent-cyan-dim)' : 'transparent',
                          border: openCategory === cat.category ? '1px solid var(--border-accent)' : '1px solid transparent',
                          borderRadius: 10,
                          cursor: 'pointer',
                          textAlign: 'left',
                          transition: 'all 0.2s',
                          color: openCategory === cat.category ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                          fontFamily: 'var(--font-display)',
                          fontSize: '0.9rem',
                          fontWeight: 500,
                        }}
                      >
                        <span style={{ color: 'inherit', opacity: 0.7 }}>{cat.icon}</span>
                        {cat.category}
                        <span style={{
                          marginLeft: 'auto',
                          fontSize: '0.7rem',
                          fontFamily: 'var(--font-mono)',
                          color: 'var(--text-tertiary)',
                        }}>
                          {cat.items.length}
                        </span>
                      </button>
                    ))}
                  </nav>
                </div>

                {/* CTA Card */}
                <div style={{
                  marginTop: '1.5rem',
                  padding: '1.5rem',
                  background: 'linear-gradient(135deg, rgba(0,229,255,0.08) 0%, rgba(139,92,246,0.05) 100%)',
                  border: '1px solid var(--border-accent)',
                  borderRadius: 16,
                }}>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.9375rem' }}>Keine Antwort gefunden?</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                    Schreiben Sie uns direkt — wir antworten innerhalb von 24 Stunden.
                  </p>
                  <a href="/kontakt" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', padding: '0.75rem 1rem' }}>
                    Kontakt aufnehmen
                  </a>
                </div>
              </div>

              {/* FAQ Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {faqCategories
                  .filter(cat => openCategory === null || cat.category === openCategory)
                  .map(cat => (
                    <div key={cat.category}>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--accent-cyan)',
                        marginBottom: '0.75rem',
                        marginTop: cat.category !== faqCategories[0].category ? '1.5rem' : 0,
                        opacity: 0.7,
                      }}>
                        {cat.category}
                      </div>
                      {cat.items.map((item, idx) => {
                        const key = `${cat.category}-${item.q}`
                        const isOpen = openItems.has(key)
                        return (
                          <div
                            key={idx}
                            style={{
                              border: `1px solid ${isOpen ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
                              borderRadius: 14,
                              background: isOpen
                                ? 'linear-gradient(135deg, rgba(0,229,255,0.04) 0%, rgba(16,16,40,0.8) 100%)'
                                : 'rgba(255,255,255,0.02)',
                              overflow: 'hidden',
                              transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                            }}
                          >
                            <button
                              onClick={() => toggleItem(key)}
                              style={{
                                width: '100%',
                                padding: '1.25rem 1.5rem',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                gap: '1rem',
                                textAlign: 'left',
                                color: 'var(--text-primary)',
                                fontFamily: 'var(--font-display)',
                                fontSize: '1rem',
                                fontWeight: 600,
                              }}
                            >
                              {item.q}
                              <div style={{
                                width: 28,
                                height: 28,
                                borderRadius: 8,
                                background: isOpen ? 'var(--accent-cyan-dim)' : 'rgba(255,255,255,0.04)',
                                border: `1px solid ${isOpen ? 'var(--border-accent)' : 'var(--border-subtle)'}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                transition: 'all 0.3s',
                              }}>
                                <svg
                                  width="14"
                                  height="14"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke={isOpen ? 'var(--accent-cyan)' : 'var(--text-secondary)'}
                                  strokeWidth="2.5"
                                  style={{ transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}
                                >
                                  <line x1="12" y1="5" x2="12" y2="19" />
                                  <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                              </div>
                            </button>
                            {isOpen && (
                              <div style={{
                                padding: '0 1.5rem 1.5rem',
                                borderTop: '1px solid var(--border-subtle)',
                                paddingTop: '1.25rem',
                              }}>
                                <p style={{
                                  color: 'var(--text-secondary)',
                                  fontSize: '0.9375rem',
                                  lineHeight: 1.8,
                                }}>
                                  {item.a}
                                </p>
                              </div>
                            )}
                          </div>
                        )
                      })}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,255,0.05) 0%, transparent 70%)' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Immer noch Fragen?<span className="text-gradient"> Wir helfen.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 420, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Unser Team ist nur einen Klick entfernt und freut sich auf Ihre Nachricht.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/kontakt" className="btn btn--primary" style={{ padding: '1rem 2rem' }}>
                Kontakt aufnehmen
              </a>
              <a href="/start" className="btn btn--outline" style={{ padding: '1rem 2rem' }}>
                Projekt starten
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 280px"] {
            grid-template-columns: 1fr !important;
          }
          section > div > div:first-child {
            position: static !important;
          }
        }
      `}</style>
    </>
  )
}
