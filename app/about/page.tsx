'use client'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const values = [
  { title: 'Ergebnisorientiert', desc: 'Wir messen unseren Erfolg an Ihren Ergebnissen. Keine leeren Versprechen — nur messbare Outcomes.', icon: '🎯' },
  { title: 'Transparent', desc: 'Fixierte Preise, offene Kommunikation, keine versteckten Kosten. Sie wissen immer, wo Sie stehen.', icon: '💎' },
  { title: 'Persönlich', desc: 'Kein Konzern-Support. Sie haben einen direkten Ansprechpartner, der Ihr Unternehmen kennt.', icon: '🤝' },
  { title: 'Zukunftsorientiert', desc: 'Wir bauen Lösungen, die skalieren. Was heute funktioniert, muss morgen noch besser funktionieren.', icon: '🚀' },
]

const timeline = [
  { year: '2013', event: 'Gründung als Einzelunternehmen in Vorarlberg. Fokus auf IT-Consulting für lokale Unternehmen.' },
  { year: '2017', event: 'Erweiterung um Webentwicklung. Erste Shopify- und WordPress-Projekte für Gastronomen und Retail.' },
  { year: '2020', event: 'Launch der ersten KI-Automatisierungsprojekte. Integration von Chatbots und Prozessautomatisierung.' },
  { year: '2023', event: 'Devmiro als Marke etabliert. Fokus auf Premium IT-Lösungen für Vorarlberg KMUs.' },
  { year: '2025', event: 'SaaS-Produkte Portfolio: Salon-Management, Restaurant-Systeme, AI Assistants. Breiterer Wirkungskreis.' },
]

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ paddingTop: 'calc(var(--header-height) + var(--space-xl))', paddingBottom: 'var(--space-xl)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', zIndex: 0 }} />
          <div className="orb orb--purple" style={{ width: 600, height: 600, top: '-20%', right: '-10%', opacity: 0.6 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: 800 }}>
              <div className="section-label">Über DEVMIRO</div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, marginTop: '0.75rem', marginBottom: '1.5rem' }}>
                IT-Lösungen,<br />
                <span className="text-gradient">die wirklich passen.</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.8, maxWidth: 600, marginBottom: '1.5rem' }}>
                DEVMIRO ist Ihr Partner für alle Belange der digitalen Transformation. Seit 2013 unterstützen wir Unternehmen in Vorarlberg und Österreich dabei, Technologie effektiv einzusetzen — ohne Schnickschnack, ohne Überraschungen.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.8, maxWidth: 600 }}>
                Wir glauben an pragmatische Lösungen, die messbare Ergebnisse liefern. Unser Team verbindet technische Expertise mit unternehmerischem Denken — und versteht, dass gute IT keine Science-Fiction sein muss.
              </p>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="section" style={{ background: 'var(--bg-deep)', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Werte</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                Was uns<span className="text-gradient"> ausmacht.</span>
              </h2>
            </div>
            <div className="grid-2">
              {values.map((v, i) => (
                <div key={v.title} className="glass--card" style={{
                  padding: '2rem',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  animation: `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s forwards`,
                  opacity: 0,
                }}>
                  <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{v.icon}</div>
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem' }}>{v.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORY / TIMELINE */}
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', opacity: 0.4 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', alignItems: 'center' }}>
              {/* Left */}
              <div>
                <div className="section-label">Unsere Geschichte</div>
                <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem', marginBottom: '1.5rem' }}>
                  Über<span className="text-gradient"> 12 Jahre</span><br />gewachsen.
                </h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                  Was 2013 als Ein-Mann-IT-Beratung begann, hat sich zu einem Full-Service-Digitalpartner für Vorarlberg KMUs entwickelt. Wir haben die digitale Evolution unzähiger Unternehmen begleitet — vom lokalen Salon bis zum international tätigen Beratungsunternehmen.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                  Unser Antrieb: Die Überzeugung, dass gute Technologie nicht kompliziert sein muss. Und dass jedes KMU Zugang zu erstklassigen IT-Lösungen verdient — nicht nur die grossen Konzerne.
                </p>
              </div>
              {/* Right: Timeline */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {timeline.map((item, i) => (
                  <div key={item.year} style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1fr',
                    gap: '1.5rem',
                    paddingBottom: '1.5rem',
                    marginBottom: '1.5rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    position: 'relative',
                    animation: `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.1}s forwards`,
                    opacity: 0,
                  }}>
                    {/* Vertical line */}
                    {i < timeline.length - 1 && (
                      <div style={{
                        position: 'absolute',
                        left: '38px',
                        top: '24px',
                        bottom: 0,
                        width: '1px',
                        background: 'var(--border-subtle)',
                      }} />
                    )}
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent-cyan)', letterSpacing: '0.1em', paddingTop: 4 }}>{item.year}</div>
                    <div>
                      <div style={{ width: 12, height: 12, borderRadius: '50%', background: 'var(--accent-cyan)', marginBottom: '0.75rem', boxShadow: '0 0 10px var(--accent-cyan-glow)' }} />
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="section" style={{ background: 'var(--bg-deep)', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-lg)' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>Warum DEVMIRO</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: '0.75rem' }}>
                Vorarlberg.<span className="text-gradient"> Persönlich. Präzise.</span>
              </h2>
            </div>
            <div className="grid-3">
              {[
                { title: 'Lokale Präsenz', desc: 'Vorarlberg ist unsere Heimat. Wir verstehen den Markt, die Kultur und die spezifischen Herausforderungen von KMUs in der Region.' },
                { title: 'Kein Call-Center', desc: 'Sie sprechen direkt mit den Entscheidungsträgern. Keine Warteschleifen, keine standardisierten Antworten — echte Beratung.' },
                { title: 'Langfristige Partnerschaft', desc: 'Wir wollen nicht einen Auftrag abschliessen — wir wollen langfristige Partner sein. Das bedeutet ehrliche Beratung, auch wenn sie mal unbequem ist.' },
                { title: 'Fixe Preise', desc: 'Sie wissen von Anfang an, was Ihr Projekt kostet. Kein Zeittracking, keine unerwarteten Rechnungen. Versprochen.' },
                { title: 'Alles aus einer Hand', desc: 'Webentwicklung, IT-Beratung, Cybersecurity, KI — wir bieten das komplette Spektrum, ohne dass Sie verschiedene Agenturen koordinieren müssen.' },
                { title: 'Messenbare Ergebnisse', desc: 'Wir setzen auf Kennzahlen, nicht auf Ego. Conversion-Rates, Lead-Qualität, Umsatz — das sind die Metriken, die zählen.' },
              ].map((item, i) => (
                <div key={item.title} style={{
                  padding: '1.75rem',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 16,
                  background: 'rgba(255,255,255,0.02)',
                  transition: 'all 0.3s',
                  animation: `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.08}s forwards`,
                  opacity: 0,
                }}>
                  <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem' }}>{item.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,255,0.05) 0%, transparent 70%)' }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Lernen Sie uns<span className="text-gradient"> kennen.</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 400, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Ein unverbindliches Erstgespräch — kostenlos, persönlich, unkompliziert.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/kontakt" className="btn btn--primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                Kontakt aufnehmen
              </Link>
              <Link href="/start" className="btn btn--outline" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
                Projekt starten
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
