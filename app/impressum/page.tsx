'use client'

export default function ImpressumPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-grid-bg" />
        <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
          <div className="hero-left">
            <div className="hero-tag animate-fade-in-up">
              <svg width="8" height="8" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="4" fill="var(--electric)" />
              </svg>
              Rechtliches
            </div>
            <h1
              className="hero-headline animate-fade-in-up delay-100"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', maxWidth: 640 }}
            >
              Impressum.<br />
              <span style={{ color: 'var(--electric)' }}>Transparenz.</span>
            </h1>
            <p
              className="hero-subtext animate-fade-in-up delay-200"
              style={{ maxWidth: 520 }}
            >
              Angaben gemäß § 5 ECG und § 2 Abs. 1 MediaAct.
              Alles auf einen Blick — keine versteckten Kosten, keine Überraschungen.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 0 8rem', background: 'var(--graphite)' }}>
        <div className="container-max">
          <div style={{ maxWidth: 720, margin: '0 auto' }}>

            {/* Medieninhaber */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                Medieninhaber & Betreiber
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  {[
                    { label: 'Name', value: 'Timo Miro Gavanelli' },
                    { label: 'Unternehmensform', value: 'Einzelunternehmen' },
                    { label: 'Gewerbe', value: 'IT-Dienstleistungen' },
                    { label: 'UID-Nummer', value: 'AT00000000', note: '(noch nicht zugeteilt)' },
                  ].map((item, i) => (
                    <div key={i}>
                      <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ash)', marginBottom: '0.3rem' }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: '0.95rem', color: 'var(--white)' }}>{item.value}</p>
                      {item.note && <p style={{ fontSize: '0.75rem', color: 'var(--ash)', marginTop: '0.15rem' }}>{item.note}</p>}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Anschrift */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                Anschrift
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: 'rgba(200,255,0,0.08)',
                    border: '1px solid rgba(200,255,0,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: '1rem', color: 'var(--white)', marginBottom: '0.25rem' }}>Vorarlberg</p>
                    <p style={{ fontSize: '0.9rem', color: 'var(--ash)' }}>Österreich</p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--ash)', marginTop: '0.75rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      Für persönliche Treffen nach vorheriger Vereinbarung.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Kontakt */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                Kontakt
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  {[
                    { label: 'E-Mail', value: 'info@devmiro.at', href: 'mailto:info@devmiro.at', accent: true },
                    { label: 'Telefon', value: 'Auf Anfrage' },
                  ].map((item, i) => (
                    <div key={i}>
                      <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ash)', marginBottom: '0.3rem' }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: '0.95rem', color: 'var(--electric)', textDecoration: 'none' }}>{item.value}</a>
                      ) : (
                        <p style={{ fontSize: '0.95rem', color: 'var(--white)' }}>{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Kammer & Gewerbebehörde */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                Kammer & Gewerbebehörde
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  {[
                    { label: 'Mitgliedschaft', value: 'Wirtschaftskammer Vorarlberg' },
                    { label: 'Gewerbebehörde', value: 'Bezirkshauptmannschaft Bregenz' },
                    { label: 'Fachgruppe', value: 'UBIT (Unternehmensberatung, Buchhaltung und Informationstechnologie)' },
                  ].map((item, i) => (
                    <div key={i} style={{ gridColumn: item.label === 'Fachgruppe' ? '1 / -1' : undefined }}>
                      <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ash)', marginBottom: '0.3rem' }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: '0.9rem', color: 'var(--white)', lineHeight: 1.5 }}>{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Online-Streitbeilegung */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                Online-Streitbeilegung
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                </p>
                <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.875rem',
                  color: 'var(--electric)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  marginBottom: '1.25rem',
                  wordBreak: 'break-all',
                }}>
                  https://ec.europa.eu/consumers/odr/
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15,3 21,3 21,9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
                <p style={{ fontSize: '0.875rem', color: 'var(--ash)', marginBottom: '0.75rem' }}>
                  Meine E-Mail-Adresse: <a href="mailto:info@devmiro.at" style={{ color: 'var(--electric)', textDecoration: 'none' }}>info@devmiro.at</a>
                </p>
                <div style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(255,107,107,0.06)',
                  border: '1px solid rgba(255,107,107,0.15)',
                  borderRadius: 8,
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ff6b6b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <p style={{ fontSize: '0.85rem', color: 'var(--ash)', lineHeight: 1.65 }}>
                    Ich bin nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>
            </section>

            {/* Haftung für Inhalte */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                Haftung für Inhalte
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Ich übernehme jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75 }}>
                  Als Diensteanbieter bin ich gemäß § 7 Abs. 1 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 ECG bin ich als Diensteanbieter jedoch nicht unter Umständen verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>
              </div>
            </section>

            {/* Urheberrecht */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                Urheberrecht
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75 }}>
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten ich um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </section>

            {/* Datenschutz Link */}
            <section style={{ marginBottom: '3.5rem' }}>
              <div className="card" style={{
                padding: '2rem',
                background: 'rgba(200,255,0,0.03)',
                border: '1px solid rgba(200,255,0,0.12)',
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.5rem',
              }}>
                <div>
                  <p style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--white)', marginBottom: '0.3rem' }}>
                    Datenschutzerklärung
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ash)' }}>
                    Alle Informationen zur Verarbeitung Ihrer Daten.
                  </p>
                </div>
                <a href="/datenschutz" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  background: 'var(--electric)',
                  border: 'none',
                  borderRadius: 8,
                  color: 'var(--obsidian)',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}>
                  Mehr lesen →
                </a>
              </div>
            </section>

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', paddingTop: '1rem' }}>
              <a href="/" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
                color: 'var(--ash)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
              }}>
                ← Startseite
              </a>
              <a href="/datenschutz" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 8,
                color: 'var(--ash)',
                textDecoration: 'none',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
              }}>
                Datenschutz →
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}