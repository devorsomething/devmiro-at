'use client'

export default function DatenschutzPage() {
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
              Ihre Daten.<br />
              <span style={{ color: 'var(--electric)' }}>Ihre Rechte.</span>
            </h1>
            <p
              className="hero-subtext animate-fade-in-up delay-200"
              style={{ maxWidth: 520 }}
            >
              Stand: {new Date().toLocaleDateString('de-AT', { year: 'numeric', month: 'long', day: 'numeric' })}.
              Ich erhebe nur das, was für Ihre Anfrage notwendig ist — nicht mehr.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: '5rem 0 8rem', background: 'var(--graphite)' }}>
        <div className="container-max">
          <div style={{ maxWidth: 720, margin: '0 auto' }}>

            {/* 1. Verantwortlicher */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                1. Verantwortlicher
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                  {[
                    { label: 'Name', value: 'Timo Miro Gavanelli' },
                    { label: 'Unternehmensform', value: 'Einzelunternehmen' },
                    { label: 'Standort', value: 'Vorarlberg, Österreich' },
                    { label: 'E-Mail', value: 'info@devmiro.at', href: 'mailto:info@devmiro.at' },
                  ].map((item, i) => (
                    <div key={i}>
                      <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ash)', marginBottom: '0.3rem' }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a href={item.href} style={{ fontSize: '0.95rem', color: 'var(--electric)', textDecoration: 'none' }}>
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ fontSize: '0.95rem', color: 'var(--white)' }}>{item.value}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 2. Erhebung */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                2. Erhebung & Verarbeitung
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  Ich erhebe und verarbeite personenbezogene Daten nur, wenn Sie mir diese freiwillig mitteilen —
                  z.B. durch das Kontaktformular, per E-Mail oder bei der Inanspruchnahme meiner Dienstleistungen.
                </p>
                <p style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--white)', marginBottom: '0.75rem' }}>
                  Folgende Daten werden erhoben:
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {['Name und Vorname', 'E-Mail-Adresse', 'Unternehmensname (falls angegeben)', 'Inhalt der Nachricht', 'Datum und Uhrzeit der Kontaktaufnahme'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--ash)' }}>
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 3. Kontaktformular */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                3. Kontaktformular
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  Wenn Sie mir über das Kontaktformular eine Nachricht senden, werden Ihre Angaben zum Zweck der Bearbeitung gespeichert.
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  Die Übermittlung erfolgt über eine verschlüsselte Verbindung (HTTPS/TLS). Ihre Daten werden über einen n8n-Webhook verarbeitet und Ihnen wird eine Bestätigungs-E-Mail zugesandt.
                </p>
                <div style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(200,255,0,0.04)',
                  border: '1px solid rgba(200,255,0,0.12)',
                  borderRadius: 8,
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <p style={{ fontSize: '0.85rem', color: 'var(--ash)', lineHeight: 1.65 }}>
                    Rechtsgrundlage: <span style={{ color: 'var(--white)', fontWeight: 500 }}>Art. 6 Abs. 1 lit. b DSGVO</span> (Vertragserfüllung) oder{' '}
                    <span style={{ color: 'var(--white)', fontWeight: 500 }}>Art. 6 Abs. 1 lit. f DSGVO</span> (berechtigtes Interesse).
                  </p>
                </div>
              </div>
            </section>

            {/* 4. Cookies */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                4. Cookies
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <div style={{
                  padding: '1rem 1.25rem',
                  background: 'rgba(200,255,0,0.04)',
                  border: '1px solid rgba(200,255,0,0.12)',
                  borderRadius: 8,
                  marginBottom: '1.25rem',
                  display: 'flex',
                  gap: '0.75rem',
                  alignItems: 'flex-start',
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22,4 12,14.01 9,11.01" />
                  </svg>
                  <p style={{ fontSize: '0.875rem', color: 'var(--ash)', lineHeight: 1.65 }}>
                    Diese Website verwendet <strong style={{ color: 'var(--white)' }}>keine Tracking-Cookies</strong>. Es werden ausschließlich technisch notwendige Cookies eingesetzt.
                  </p>
                </div>
                <p style={{ fontSize: '0.875rem', color: 'var(--ash)', lineHeight: 1.7 }}>
                  Technisch notwendige Cookies umfassen Session-Cookies für die Navigation und CSRF-Token-Cookies für Formular-Sicherheit. Diese werden beim Schließen des Browsers automatisch gelöscht.
                </p>
              </div>
            </section>

            {/* 5. Analyse */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                5. Analyse-Tools
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
                  Ich nutze <strong style={{ color: 'var(--white)' }}>Plausible Analytics</strong> als datenschutzfreundliche Alternative zu Google Analytics.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.25rem' }}>
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--electric)', marginBottom: '0.5rem' }}>
                      ✓ Zeichnet auf
                    </p>
                    {['Besuchte Seiten (anonymisiert)', 'Datum und Uhrzeit', 'Browser & OS (aggregiert)', 'Quelle des Besuchs'].map((item, i) => (
                      <p key={i} style={{ fontSize: '0.85rem', color: 'var(--ash)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 4.5" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {item}
                      </p>
                    ))}
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#ff6b6b', marginBottom: '0.5rem' }}>
                      ✗ Zeichnet nicht auf
                    </p>
                    {['IP-Adressen', 'Personenbezogene Daten', 'Cross-Site-Cookies', 'Fingerprints'].map((item, i) => (
                      <p key={i} style={{ fontSize: '0.85rem', color: 'var(--ash)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                          <line x1="4" y1="4" x2="12" y2="12" stroke="#ff6b6b" strokeWidth="1.8" strokeLinecap="round" />
                          <line x1="12" y1="4" x2="4" y2="12" stroke="#ff6b6b" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
                <a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.85rem',
                  color: 'var(--electric)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                }}>
                  Weitere Informationen zu Plausible Analytics
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15,3 21,3 21,9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </section>

            {/* 6. Social Media */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                6. Social Media
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75, marginBottom: '1rem' }}>
                  Diese Website enthält <strong style={{ color: 'var(--white)' }}>keine Social Media Plugins</strong> (Facebook, Twitter, LinkedIn).
                </p>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75 }}>
                  Links zu meinen Social Media Profilen sind als reine Text-Links implementiert. Eine Datenübertragung erfolgt erst, wenn Sie aktiv auf den Link klicken.
                </p>
              </div>
            </section>

            {/* 7. Ihre Rechte */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                7. Ihre Rechte
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                  {[
                    { right: 'Auskunft', dsgvo: 'Art. 15 DSGVO' },
                    { right: 'Berichtigung', dsgvo: 'Art. 16 DSGVO' },
                    { right: 'Löschung', dsgvo: 'Art. 17 DSGVO' },
                    { right: 'Einschränkung', dsgvo: 'Art. 18 DSGVO' },
                    { right: 'Datenübertragbarkeit', dsgvo: 'Art. 20 DSGVO' },
                    { right: 'Widerspruch', dsgvo: 'Art. 21 DSGVO' },
                  ].map((item, i) => (
                    <div key={i} style={{
                      padding: '0.875rem 1rem',
                      background: 'rgba(255,255,255,0.02)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: 8,
                    }}>
                      <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)', marginBottom: '0.2rem' }}>{item.right}</p>
                      <p style={{ fontSize: '0.75rem', color: 'var(--electric)' }}>{item.dsgvo}</p>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: '0.9rem', color: 'var(--ash)', lineHeight: 1.7 }}>
                  Um Ihre Rechte auszuüben, kontaktieren Sie mich per E-Mail:{' '}
                  <a href="mailto:info@devmiro.at" style={{ color: 'var(--electric)', textDecoration: 'none' }}>info@devmiro.at</a>.
                  Zusätzlich haben Sie das Recht, sich bei der{' '}
                  <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--electric)', textDecoration: 'none' }}>Datenschutzbehörde</a> zu beschweren.
                </p>
              </div>
            </section>

            {/* 8. Speicherdauer */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                8. Speicherdauer
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                {[
                  { type: 'Kontaktanfragen', duration: 'Bis zur vollständigen Bearbeitung + 12 Monate' },
                  { type: 'Kunden-/Projektdaten', duration: 'Während der Geschäftsbeziehung + 7 Jahre (§ 132 BAO)' },
                  { type: 'Server-Logs', duration: 'Maximal 30 Tage (technisch notwendig)' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '0.875rem 0',
                    borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                  }}>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--white)' }}>{item.type}</p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--ash)' }}>{item.duration}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 9. Änderungen */}
            <section style={{ marginBottom: '3.5rem' }}>
              <h2 style={{
                fontFamily: "'Instrument Serif', Georgia, serif",
                fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
                fontWeight: 700,
                color: 'var(--white)',
                marginBottom: '1.25rem',
                letterSpacing: '-0.02em',
              }}>
                9. Änderungen
              </h2>
              <div className="card" style={{ padding: '1.75rem' }}>
                <p style={{ fontSize: '0.95rem', color: 'var(--ash)', lineHeight: 1.75 }}>
                  Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte Rechtslagen, neue Technologien oder Weiterentwicklungen der Website anzupassen. Die aktuelle Version ist stets auf dieser Seite abrufbar.
                </p>
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
              <a href="/impressum" style={{
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
                transition: 'all 0.2s ease',
              }}>
                Impressum →
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}