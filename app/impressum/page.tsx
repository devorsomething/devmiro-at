'use client';
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'


const infoBlocks = [
  {
    label: 'Unternehmen',
    items: [
      { key: 'Firmenname', value: 'DEVMIRO — Timo Miro Gavanelli' },
      { key: 'Rechtsform', value: 'Einzelunternehmer' },
      { key: 'UID-Nummer', value: 'ATU12345678 (Platzhalter)' },
    ],
  },
  {
    label: 'Kontakt',
    items: [
      { key: 'E-Mail', value: 'hallo@devmiro.at' },
      { key: 'Telefon', value: '+43 660 123 4567 (Platzhalter)' },
      { key: 'Standort', value: 'Vorarlberg, Österreich' },
    ],
  },
  {
    label: 'Gewerbe & Recht',
    items: [
      { key: 'Gewerberegisternummer', value: 'GG-123456 (Platzhalter)' },
      { key: 'Aufsichtsbehörde', value: 'Bezirkshauptmannschaft Bregenz' },
      { key: 'Berufshaftpflicht', value: 'Versicherung GmbH — gültig für Österreich' },
    ],
  },
]

export default function ImpressumPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-height)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* Background */}
        <div style={{ position: 'fixed', inset: 0, background: 'var(--gradient-mesh)', zIndex: 0 }} />
        <div className="orb orb--cyan" style={{ width: 500, height: 500, top: '-10%', right: '-5%', opacity: 0.6 }} />
        <div className="orb orb--purple" style={{ width: 400, height: 400, bottom: '10%', left: '-8%', opacity: 0.4 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: 'var(--space-xl) var(--space-md)' }}>

          {/* Page Header */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <div className="badge badge--cyan" style={{ marginBottom: '1.5rem' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
              </svg>
              Rechtliches
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              <span className="text-gradient">Impressum</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7, fontSize: '1.0625rem' }}>
              Angaben gemäß § 5 ECG und § 2 Abs. 1 Mediengesetz für DEVMIRO — Timo Miro Gavanelli, Vorarlberg, Österreich.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid-3" style={{ marginBottom: 'var(--space-xl)', maxWidth: 1000, margin: '0 auto var(--space-xl)' }}>
            {infoBlocks.map((block) => (
              <div key={block.label} className="glass--card" style={{ padding: '2rem', animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards', opacity: 0 }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-cyan)',
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-cyan)', display: 'inline-block' }} />
                  {block.label}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {block.items.map((item) => (
                    <div key={item.key}>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-tertiary)',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginBottom: '0.25rem',
                      }}>
                        {item.key}
                      </div>
                      <div style={{ fontSize: '0.9375rem', color: 'var(--text-primary)', lineHeight: 1.5 }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Legal Sections */}
          <div style={{ maxWidth: 800, margin: '0 auto var(--space-xl)' }}>

            {/* Berufshaftpflicht */}
            <div className="glass--card" style={{ padding: '2rem 2.5rem', marginBottom: '1.5rem', animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s forwards', opacity: 0 }}>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'var(--accent-cyan-dim)',
                  border: '1px solid var(--border-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--accent-cyan)',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                    Berufshaftpflichtversicherung
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    Für unsere Tätigkeit als IT-Dienstleister besteht eine Berufshaftpflichtversicherung bei einer österreichischen Versicherungsgesellschaft. Der räumliche Geltungsbereich erstreckt sich auf das Inland.
                  </p>
                  <div style={{
                    padding: '1rem 1.25rem',
                    background: 'rgba(0,229,255,0.04)',
                    border: '1px solid var(--border-accent)',
                    borderRadius: 10,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    Deckungssumme: € 2.000.000 — pauschal für Personen-, Sach- und Vermögensschäden
                  </div>
                </div>
              </div>
            </div>

            {/* EU-Streitbeilegung */}
            <div className="glass--card" style={{ padding: '2rem 2.5rem', marginBottom: '1.5rem', animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s forwards', opacity: 0 }}>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(77,124,255,0.12)',
                  border: '1px solid rgba(77,124,255,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--accent-blue)',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="2" y1="12" x2="22" y2="12" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                    EU-Online-Streitbeilegung
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1rem' }}>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit. Diese Plattform dient der Beilegung von Streitigkeiten, die aus online abgeschlossenen Kauf- und Dienstleistungsverträgen entstehen.
                  </p>
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--outline"
                    style={{ fontSize: '0.875rem', padding: '0.625rem 1.25rem' }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      <polyline points="15,3 21,3 21,9" />
                      <line x1="10" y1="14" x2="21" y2="3" />
                    </svg>
                    Zur OS-Plattform
                  </a>
                </div>
              </div>
            </div>

            {/* Verantwortlicher */}
            <div className="glass--card" style={{ padding: '2rem 2.5rem', animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s forwards', opacity: 0 }}>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(139,92,246,0.12)',
                  border: '1px solid rgba(139,92,246,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  color: 'var(--accent-purple)',
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>
                    Verantwortlicher für Inhalte
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Timo Miro Gavanelli</strong>
                    <br />
                    DEVMIRO — Einzelunternehmer
                    <br />
                    Vorarlberg, Österreich
                    <br />
                    E-Mail: <a href="mailto:hallo@devmiro.at" style={{ color: 'var(--accent-cyan)' }}>hallo@devmiro.at</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div style={{ textAlign: 'center', marginTop: 'var(--space-lg)' }}>
            <Link href="/" className="btn btn--ghost" style={{ fontSize: '0.875rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12,19 5,12 12,5" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
