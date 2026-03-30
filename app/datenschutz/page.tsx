'use client';
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'


const sections = [
  {
    id: 'verantwortlicher',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    color: 'cyan',
    title: '1. Verantwortlicher',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          <strong>DEVMIRO — Timo Miro Gavanelli</strong>
          <br />
          Vorarlberg, Österreich
          <br />
          E-Mail: <a href="mailto:hallo@devmiro.at" style={{ color: 'var(--accent-cyan)' }}>hallo@devmiro.at</a>
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
          Als Einzelunternehmer bin ich der alleinige Verantwortliche für die Verarbeitung Ihrer personenbezogenen Daten im Sinne der DSGVO.
        </p>
      </div>
    ),
  },
  {
    id: 'datenverarbeitung',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    color: 'blue',
    title: '2. Erhebung & Verarbeitung',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Wir erheben und verarbeiten personenbezogene Daten nur, wenn dies für die Erbringung unserer Dienstleistungen notwendig ist:
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            'Kontaktanfragen über das Formular: Name, E-Mail-Adresse, Nachricht',
            'Projektanfragen: Firmenname, Kontaktdaten, Projektbeschreibung',
            'Vertragsdaten: Rechnungsadresse, Abrechnungsdaten',
            'Technische Daten: IP-Adresse, Browser-Typ, Zugriffszeiten (Server-Logs)',
          ].map((item) => (
            <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}>
                <polyline points="20,6 9,17 4,12" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
          Eine Verarbeitung erfolgt ausschließlich auf Grundlage von <strong style={{ color: 'var(--text-primary)' }}>Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertragserfüllung) oder <strong style={{ color: 'var(--text-primary)' }}>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse).
        </p>
      </div>
    ),
  },
  {
    id: 'kontaktformular',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    color: 'purple',
    title: '3. Kontaktformular',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre Angaben (Name, E-Mail, Nachricht) zum Zweck der Bearbeitung Ihrer Anfrage gespeichert. Diese Daten werden ohne Ihre ausdrückliche Zustimmung nicht weitergegeben und nach Abschluss der Kommunikation gelöscht, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.
        </p>
        <div style={{
          padding: '1rem 1.25rem',
          background: 'rgba(139,92,246,0.08)',
          border: '1px solid rgba(139,92,246,0.25)',
          borderRadius: 10,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.75rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
        }}>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
        </div>
      </div>
    ),
  },
  {
    id: 'cookies',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 15a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-1-3V11a1 1 0 0 1 2 0v3a1 1 0 0 1-2 0z" />
      </svg>
    ),
    color: 'cyan',
    title: '4. Cookies & Tracking',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Unsere Website verwendet minimalistische Cookies, die für den technischen Betrieb erforderlich sind:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
          {[
            { type: 'Notwendige Cookies', desc: 'Technisch erforderlich für den Website-Betrieb. Keine personenbezogenen Daten.', required: true },
            { type: 'Google Analytics 4', desc: 'Zur Analyse der Website-Nutzung (anonymisiert). IP-Anonymisierung ist aktiviert.', required: false },
            { type: 'Session-Cookies', desc: 'Temporär, werden nach dem Schließen des Browsers automatisch gelöscht.', required: true },
          ].map((cookie) => (
            <div key={cookie.type} style={{
              padding: '1rem 1.25rem',
              background: cookie.required ? 'rgba(0,229,255,0.04)' : 'rgba(77,124,255,0.04)',
              border: `1px solid ${cookie.required ? 'var(--border-accent)' : 'rgba(77,124,255,0.2)'}`,
              borderRadius: 10,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.375rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', fontWeight: 700, color: cookie.required ? 'var(--accent-cyan)' : 'var(--accent-blue)' }}>
                  {cookie.type}
                </span>
                {cookie.required && (
                  <span className="badge badge--cyan" style={{ fontSize: '0.6rem', padding: '0.2rem 0.5rem' }}>Notwendig</span>
                )}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{cookie.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
          Sie können die Speicherung von Cookies in Ihren Browsereinstellungen einschränken oder deaktivieren. Dies kann jedoch die Funktionalität der Website beeinträchtigen.
        </p>
      </div>
    ),
  },
  {
    id: 'google-analytics',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22,12 18,12 15,21 9,3 6,12 2,12" />
      </svg>
    ),
    color: 'blue',
    title: '5. Google Analytics',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Diese Website nutzt Google Analytics 4 (GA4) mit aktivierter IP-Anonymisierung. GA4 verarbeitet Daten anonymisiert und erstellt keine vollständigen IP-Adressen.
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
          {[
            'Anonymisierte Nutzungsstatistiken (Seitenaufrufe, Verweildauer, etc.)',
            'Keine Erfassung von vollständigen IP-Adressen',
            'Keine Weitergabe an Dritte (außer an Google für die Verarbeitung)',
            'Keine Verknüpfung mit anderen Google-Diensten ohne Einwilligung',
          ].map((item) => (
            <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}>
                <polyline points="20,6 9,17 4,12" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
          Sie können Google Analytics mit dem{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'underline' }}>
            Browser-Add-on
          </a>{' '}
          oder durch Ablehnung von Cookies in Ihren Browsereinstellungen deaktivieren.
        </p>
      </div>
    ),
  },
  {
    id: 'hosting',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    color: 'purple',
    title: '6. Hosting',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Unsere Website wird auf Servern in der Europäischen Union gehostet. Alle Server-Logs werden nur für technische Zwecke (Fehleranalyse, Sicherheit) verwendet und nach 30 Tagen automatisch gelöscht.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
          Hosting-Provider: Netcup GmbH, Deutschland (Datenverarbeitung gem. Art. 28 DSGVO)
        </p>
      </div>
    ),
  },
  {
    id: 'rechte',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    color: 'cyan',
    title: '7. Ihre Rechte',
    content: (
      <div>
        <p style={{ marginBottom: '1.25rem', lineHeight: 1.7 }}>
          Sie haben folgende Rechte in Bezug auf Ihre personenbezogenen Daten:
        </p>
        <div className="grid-2" style={{ gap: '0.75rem' }}>
          {[
            { right: 'Auskunftsrecht', desc: 'Art. 15 DSGVO — Welche Daten verarbeiten wir über Sie?' },
            { right: 'Recht auf Berichtigung', desc: 'Art. 16 DSGVO — Unrichtige Daten korrigieren lassen' },
            { right: 'Recht auf Löschung', desc: 'Art. 17 DSGVO — „Recht auf Vergessenwerden"' },
            { right: 'Recht auf Einschränkung', desc: 'Art. 18 DSGVO — Verarbeitung einschränken lassen' },
            { right: 'Recht auf Datenübertragung', desc: 'Art. 20 DSGVO — Ihre Daten in einem gängigen Format erhalten' },
            { right: 'Widerspruchsrecht', desc: 'Art. 21 DSGVO — Verarbeitung widersprechen' },
            { right: 'Beschwerderecht', desc: 'Art. 77 DSGVO — Beschwerde bei der Datenschutzbehörde' },
            { right: 'Widerruf der Einwilligung', desc: 'Art. 7 Abs. 3 DSGVO — Einwilligung jederzeit widerrufen' },
          ].map((item) => (
            <div key={item.right} style={{
              padding: '0.875rem 1rem',
              background: 'rgba(0,229,255,0.04)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 10,
            }}>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', marginBottom: '0.25rem', color: 'var(--accent-cyan)' }}>
                {item.right}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
          Um Ihre Rechte geltend zu machen, kontaktieren Sie uns bitte unter:{' '}
          <a href="mailto:hallo@devmiro.at" style={{ color: 'var(--accent-cyan)' }}>hallo@devmiro.at</a>
        </p>
        <div style={{
          marginTop: '1rem',
          padding: '1rem 1.25rem',
          background: 'rgba(77,124,255,0.06)',
          border: '1px solid rgba(77,124,255,0.2)',
          borderRadius: 10,
        }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            <strong style={{ color: 'var(--accent-blue)' }}>Datenschutzbehörde Österreich:</strong><br />
            Barangasse 43, 1030 Wien · <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-blue)' }}>www.dsb.gv.at</a>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: 'aenderungen',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="23,4 23,10 17,10" />
        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
      </svg>
    ),
    color: 'blue',
    title: '8. Änderungen dieser Erklärung',
    content: (
      <p style={{ lineHeight: 1.7, color: 'var(--text-secondary)' }}>
        Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf anzupassen, insbesondere bei neuen Technologien oder gesetzlichen Änderungen. Die jeweils aktuelle Version finden Sie stets auf dieser Seite. Bei wesentlichen Änderungen werden wir Sie gesondert informieren.
      </p>
    ),
  },
]

const colorMap: Record<string, { accent: string; bg: string; border: string }> = {
  cyan: { accent: 'var(--accent-cyan)', bg: 'var(--accent-cyan-dim)', border: 'var(--border-accent)' },
  blue: { accent: 'var(--accent-blue)', bg: 'rgba(77,124,255,0.12)', border: 'rgba(77,124,255,0.25)' },
  purple: { accent: 'var(--accent-purple)', bg: 'rgba(139,92,246,0.12)', border: 'rgba(139,92,246,0.25)' },
}

export default function DatenschutzPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-height)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* Background */}
        <div style={{ position: 'fixed', inset: 0, background: 'var(--gradient-mesh)', zIndex: 0 }} />
        <div className="orb orb--blue" style={{ width: 500, height: 500, top: '-10%', left: '-5%', opacity: 0.6 }} />
        <div className="orb orb--purple" style={{ width: 400, height: 400, bottom: '10%', right: '-8%', opacity: 0.4 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: 'var(--space-xl) var(--space-md)' }}>

          {/* Page Header */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <div className="badge badge--blue" style={{ marginBottom: '1.5rem' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              DSGVO-konform
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              <span className="text-gradient">Datenschutz</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7, fontSize: '1.0625rem' }}>
              Transparente und DSGVO-konforme Verarbeitung Ihrer personenbezogenen Daten. Letzte Aktualisierung: März 2026.
            </p>
          </div>

          {/* Sections */}
          <div style={{ maxWidth: 820, margin: '0 auto var(--space-xl)' }}>
            {sections.map((section, i) => {
              const colors = colorMap[section.color]
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className="glass--card"
                  style={{
                    padding: '2rem 2.5rem',
                    marginBottom: '1.5rem',
                    animation: `fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${i * 0.07}s forwards`,
                    opacity: 0,
                  }}
                >
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: colors.bg,
                      border: `1px solid ${colors.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      color: colors.accent,
                    }}>
                      {section.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                        {section.title}
                      </h2>
                      {section.content}
                    </div>
                  </div>
                </div>
              )
            })}
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
