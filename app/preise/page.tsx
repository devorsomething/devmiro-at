import Link from 'next/link'

export const metadata = {
  title: 'Preise | DEVMIRO',
  description: 'Transparente Preise für Webentwicklung in Vorarlberg. Fixed Price, keine Überraschungen.',
}

export default function PreisePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 'calc(var(--header-height) + var(--space-xl))',
        paddingBottom: 'var(--space-xl)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--gradient-mesh)',
          zIndex: 0,
        }} />
        <div className="orb orb--cyan" style={{
          width: '600px',
          height: '600px',
          top: '-20%',
          right: '-10%',
          opacity: 0.6,
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '700px' }}>
            <div className="badge badge--cyan" style={{ marginBottom: '1.5rem' }}>
              💰 Transparente Preise
            </div>
            <h1 style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              marginBottom: '1.5rem',
            }}>
              Fixpreis. Keine<br />
              <span className="text-gradient">Überraschungen.</span>
            </h1>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1.125rem',
              lineHeight: 1.7,
              maxWidth: '540px',
            }}>
              Sie wissen exakt was Sie zahlen, bevor wir starten. Kein Stundenzettel, keine versteckten Kosten. Unsere Preise sind fair und transparent.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section" style={{ background: 'var(--bg-deep)' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            maxWidth: '1200px',
            margin: '0 auto',
          }}>
            {/* Starter */}
            <div className="glass" style={{
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid var(--border-subtle)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #00e5ff, #4d7cff)',
              }} />
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-cyan)',
                  marginBottom: '0.75rem',
                }}>
                  Starter
                </h3>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                }}>
                  € 1.800
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'var(--text-tertiary)',
                    marginLeft: '0.5rem',
                  }}>einmalig</span>
                </div>
              </div>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}>
                Perfekt für lokale Betriebe und Gründer, die schnell online sein müssen.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {['Bis 3 Seiten', 'Responsive Design', 'Kontaktformular', 'SSL-Zertifikat', 'Basis SEO'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="var(--accent-cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/start" className="btn btn--secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Projekt starten
              </Link>
            </div>

            {/* Business - Highlighted */}
            <div style={{
              padding: '2.5rem',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.08) 0%, rgba(77, 124, 255, 0.05) 100%)',
              border: '1px solid var(--accent-cyan)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 0 60px rgba(0, 229, 255, 0.15)',
            }}>
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                padding: '0.375rem 0.75rem',
                background: 'var(--accent-cyan)',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--bg-void)',
                textTransform: 'uppercase',
              }}>
                Beliebt
              </div>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #00e5ff, #8b5cf6)',
              }} />
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-cyan)',
                  marginBottom: '0.75rem',
                }}>
                  Business
                </h3>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  background: 'var(--gradient-text)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  € 6.500
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    marginLeft: '0.5rem',
                  }}>einmalig</span>
                </div>
              </div>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}>
                Für wachsende Unternehmen, die online überzeugen müssen.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {['Bis 10 Seiten', 'Custom Design (Figma)', 'WordPress CMS', 'GDPR-konform', 'SEO-Setup', 'Google Analytics 4', '1 Monat gratis Hosting', 'Training Session'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="var(--accent-cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/start" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                Projekt starten
              </Link>
            </div>

            {/* Premium */}
            <div className="glass" style={{
              padding: '2.5rem',
              borderRadius: '16px',
              border: '1px solid var(--border-subtle)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
              }} />
              <div style={{ marginBottom: '2rem' }}>
                <h3 style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#8b5cf6',
                  marginBottom: '0.75rem',
                }}>
                  Premium
                </h3>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                }}>
                  € 12.000
                  <span style={{
                    fontSize: '1rem',
                    fontWeight: 400,
                    color: 'var(--text-tertiary)',
                    marginLeft: '0.5rem',
                  }}>einmalig</span>
                </div>
              </div>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.9375rem',
                lineHeight: 1.6,
                marginBottom: '2rem',
              }}>
                Für Unternehmen, die das Beste vom Besten erwarten.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                {['Unbegrenzte Seiten', 'Premium Design', 'Headless CMS Option', 'Advanced SEO', 'Performance Optimierung', 'E-Commerce Integration', 'Custom Features', 'Dedicated Support', 'Priority Wartung'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/start" className="btn btn--secondary" style={{ width: '100%', justifyContent: 'center' }}>
                Projekt starten
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Hosting Add-on */}
      <section className="section">
        <div className="container">
          <div className="glass" style={{
            padding: '3rem',
            borderRadius: '16px',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
          }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              marginBottom: '1rem',
            }}>
              Hosting & Wartung
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '1rem',
              marginBottom: '2rem',
              maxWidth: '600px',
              margin: '0 auto 2rem',
            }}>
              Nach dem Launch: Sicherheit und Support, damit Ihre Website immer aktuell bleibt.
            </p>
            <div style={{
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: '0.5rem',
              padding: '1rem 2rem',
              background: 'rgba(0, 229, 255, 0.08)',
              borderRadius: '12px',
              border: '1px solid var(--border-accent)',
            }}>
              <span style={{
                fontSize: '2.5rem',
                fontWeight: 700,
                color: 'var(--accent-cyan)',
              }}>€ 99</span>
              <span style={{
                color: 'var(--text-tertiary)',
                fontSize: '1rem',
              }}>/ Monat</span>
            </div>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1rem 2rem',
              marginTop: '2rem',
            }}>
              {['Software-Updates', 'Security Patches', 'Tägliche Backups', 'Uptime-Monitoring', 'EU-Hosting', 'Support'].map((item) => (
                <li key={item} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8l3.5 3.5L13 4.5" stroke="var(--accent-cyan)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <p style={{
              marginTop: '1.5rem',
              color: 'var(--text-tertiary)',
              fontSize: '0.875rem',
            }}>
              ⚡ 1. Monat gratis bei Vertragsabschluss
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--bg-deep)' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700,
            textAlign: 'center',
            marginBottom: '3rem',
          }}>
            Häufige Fragen
          </h2>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            {[
              {
                q: 'Was ist, wenn ich mehr Seiten brauche als im Paket?',
                a: 'Zusätzliche Seiten werden als separater Fixed-Price-Posten angeboten. Sie wissen vorher was es kostet.',
              },
              {
                q: 'Wie läuft die Bezahlung ab?',
                a: '50% bei Auftragserteilung, 50% bei Fertigstellung. So teilen wir das Risiko fair.',
              },
              {
                q: 'Was ist im Wartungsvertrag enthalten?',
                a: 'Software-Updates, Security Patches, tägliche Backups, Uptime-Monitoring und EU-Hosting.',
              },
              {
                q: 'Kann ich mein Hosting woanders haben?',
                a: 'Ja, wir können Ihre Website auch auf Ihrem Server deployen. 1 Monat gratis Hosting ist aber inklusive.',
              },
            ].map((item, i) => (
              <div key={i} className="glass" style={{
                padding: '1.5rem 2rem',
                borderRadius: '12px',
              }}>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  color: 'var(--text-primary)',
                }}>
                  {item.q}
                </h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9375rem',
                  lineHeight: 1.6,
                }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            fontWeight: 700,
            marginBottom: '1rem',
          }}>
            Bereit zu starten?
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.125rem',
            marginBottom: '2rem',
            maxWidth: '500px',
            margin: '0 auto 2rem',
          }}>
            Erzählen Sie uns von Ihrem Projekt — wir melden uns innerhalb von 24 Stunden.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/start" className="btn btn--primary" style={{ padding: '1rem 2rem' }}>
              Projekt starten
            </Link>
            <Link href="/kontakt" className="btn btn--secondary" style={{ padding: '1rem 2rem' }}>
              Kontakt
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
