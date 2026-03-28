'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

const sections = [
  { id: 'verantwortlicher', title: '1. Verantwortlicher' },
  { id: 'erhebung', title: '2. Datenerhebung' },
  { id: 'kontaktformular', title: '3. Kontaktformular' },
  { id: 'cookies', title: '4. Cookies' },
  { id: 'analyse', title: '5. Analyse-Tools' },
  { id: 'rechte', title: '6. Ihre Rechte' },
  { id: 'speicherdauer', title: '7. Speicherdauer' },
  { id: 'aenderungen', title: '8. Änderungen' },
]

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id}>
      <h2
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '1.25rem',
          fontWeight: 400,
          color: 'var(--text)',
          marginBottom: 'var(--space-4)',
          paddingBottom: 'var(--space-3)',
          borderBottom: '1px solid var(--border)',
        }}
      >
        {title}
      </h2>
      <div
        style={{
          padding: 'var(--space-6)',
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-xl)',
          fontSize: '0.9rem',
          color: 'var(--text-muted)',
          lineHeight: 1.75,
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--space-3)',
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default function DatenschutzPage() {
  const dateStr = new Date().toLocaleDateString('de-AT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-label">Rechtliches</div>
            <h1>Datenschutzerklärung</h1>
            <p>Stand: {dateStr}</p>
          </div>
        </section>

        <section className="section">
          <div className="container--default">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>

              {/* Table of Contents */}
              <nav
                style={{
                  padding: 'var(--space-6)',
                  background: 'var(--primary-subtle)',
                  border: '1px solid var(--primary-highlight)',
                  borderRadius: 'var(--radius-xl)',
                }}
              >
                <h2
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    color: 'var(--primary)',
                    marginBottom: 'var(--space-4)',
                  }}
                >
                  Inhaltsverzeichnis
                </h2>
                <ol
                  style={{
                    listStyle: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-2)',
                  }}
                >
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)',
                          transition: 'color var(--transition)',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>

              {/* 1 */}
              <Section id="verantwortlicher" title="1. Verantwortlicher">
                <div>
                  <strong style={{ color: 'var(--text)' }}>Timo Miro Gavanelli</strong>
                  <br />Einzelunternehmen
                  <br />Vorarlberg, Österreich
                  <br />
                  E-Mail:{' '}
                  <a href="mailto:info@devmiro.at" style={{ color: 'var(--primary)' }}>
                    info@devmiro.at
                  </a>
                </div>
              </Section>

              {/* 2 */}
              <Section id="erhebung" title="2. Erhebung und Verarbeitung personenbezogener Daten">
                <p>
                  Ich erhebe und verarbeite personenbezogene Daten nur, wenn Sie mir diese freiwillig mitteilen —
                  z.B. durch das Ausfüllen des Kontaktformulars, per E-Mail oder bei der Inanspruchnahme meiner Dienstleistungen.
                </p>
                <p>Folgende Daten werden dabei erhoben:</p>
                <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  <li>Name und Vorname</li>
                  <li>E-Mail-Adresse</li>
                  <li>Unternehmensname (falls angegeben)</li>
                  <li>Inhalt der Nachricht / Projektanfrage</li>
                  <li>Datum und Uhrzeit der Kontaktaufnahme</li>
                </ul>
                <p>
                  Diese Daten werden ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme verwendet.
                </p>
              </Section>

              {/* 3 */}
              <Section id="kontaktformular" title="3. Kontaktformular">
                <p>
                  Wenn Sie mir über das Kontaktformular eine Nachricht senden, werden Ihre Angaben
                  (Name, E-Mail, Unternehmen, Projekttyp, Nachricht) zum Zweck der Bearbeitung gespeichert.
                </p>
                <p>
                  Die Übermittlung erfolgt über eine verschlüsselte Verbindung (HTTPS/TLS).
                  Ihre Daten werden anschließend verarbeitet und Sie erhalten eine Eingangsbestätigung.
                </p>
                <p>
                  Rechtsgrundlage:{' '}
                  <strong style={{ color: 'var(--text)' }}>Art. 6 Abs. 1 lit. b DSGVO</strong> (Vertragserfüllung) oder{' '}
                  <strong style={{ color: 'var(--text)' }}>Art. 6 Abs. 1 lit. f DSGVO</strong> (berechtigtes Interesse).
                </p>
              </Section>

              {/* 4 */}
              <Section id="cookies" title="4. Cookies">
                <p>
                  Diese Website verwendet{' '}
                  <strong style={{ color: 'var(--text)' }}>keine Tracking-Cookies</strong>.
                  Es werden ausschließlich technisch notwendige Cookies eingesetzt, die für den Betrieb der Website erforderlich sind.
                </p>
                <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  <li>Session-Cookies für die Navigation</li>
                  <li>Theme-Präferenz (localStorage, kein Cookie)</li>
                </ul>
                <p>
                  Diese Cookies/Einstellungen speichern keine personenbezogenen Daten und werden lokal im Browser gespeichert.
                </p>
              </Section>

              {/* 5 */}
              <Section id="analyse" title="5. Analyse-Tools">
                <p>
                  Ich nutze{' '}
                  <strong style={{ color: 'var(--text)' }}>Plausible Analytics</strong> als datenschutzfreundliche Alternative zu Google Analytics.
                  Plausible setzt{' '}
                  <strong style={{ color: 'var(--text)' }}>keine Cookies</strong>, speichert keine IP-Adressen und überträgt keine personenbezogenen Daten.
                </p>
                <p>Plausible erfasst ausschließlich:</p>
                <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
                  <li>Besuchte Seiten (anonymisiert)</li>
                  <li>Herkunftsland (aggregiert)</li>
                  <li>Gerätekategorie und Browser (aggregiert)</li>
                  <li>Verweisquelle (z.B. Google, direkt)</li>
                </ul>
                <p>
                  Weitere Informationen:{' '}
                  <a
                    href="https://plausible.io/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)' }}
                  >
                    plausible.io/privacy
                  </a>
                </p>
              </Section>

              {/* 6 */}
              <Section id="rechte" title="6. Ihre Rechte">
                <p>Sie haben jederzeit das Recht auf:</p>
                <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  {[
                    ['Auskunft', 'über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)'],
                    ['Berichtigung', 'unrichtiger Daten (Art. 16 DSGVO)'],
                    ['Löschung', 'Ihrer Daten, sofern keine Aufbewahrungspflicht besteht (Art. 17 DSGVO)'],
                    ['Einschränkung der Verarbeitung', '(Art. 18 DSGVO)'],
                    ['Datenübertragbarkeit', '(Art. 20 DSGVO)'],
                    ['Widerspruch', 'gegen die Verarbeitung (Art. 21 DSGVO)'],
                  ].map(([right, detail]) => (
                    <li key={right}>
                      <strong style={{ color: 'var(--text)' }}>{right}</strong>{' — '}{detail}
                    </li>
                  ))}
                </ul>
                <p>
                  Um Ihre Rechte auszuüben, kontaktieren Sie mich bitte per E-Mail:{' '}
                  <a href="mailto:info@devmiro.at" style={{ color: 'var(--primary)' }}>
                    info@devmiro.at
                  </a>
                </p>
                <p>
                  Sie haben das Recht, sich bei der österreichischen{' '}
                  <a
                    href="https://www.dsb.gv.at"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: 'var(--primary)' }}
                  >
                    Datenschutzbehörde
                  </a>{' '}
                  zu beschweren.
                </p>
              </Section>

              {/* 7 */}
              <Section id="speicherdauer" title="7. Speicherdauer">
                <p>Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist:</p>
                <ul style={{ paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
                  <li>
                    <strong style={{ color: 'var(--text)' }}>Kontaktanfragen:</strong>{' '}
                    Bis zur vollständigen Bearbeitung + 12 Monate für Rückfragen
                  </li>
                  <li>
                    <strong style={{ color: 'var(--text)' }}>Kunden-/Projektdaten:</strong>{' '}
                    Während der Geschäftsbeziehung + gesetzliche Aufbewahrungsfristen (7 Jahre gemäß § 132 BAO)
                  </li>
                  <li>
                    <strong style={{ color: 'var(--text)' }}>Server-Logs:</strong>{' '}
                    Maximal 30 Tage (technisch notwendig)
                  </li>
                </ul>
              </Section>

              {/* 8 */}
              <Section id="aenderungen" title="8. Änderungen dieser Datenschutzerklärung">
                <p>
                  Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, um sie an geänderte Rechtslagen,
                  neue Technologien oder Weiterentwicklungen der Website anzupassen.
                </p>
                <p>
                  Die aktuelle Version ist stets auf dieser Seite abrufbar.
                  Bei wesentlichen Änderungen werde ich Sie gesondert informieren.
                </p>
              </Section>

              {/* Back link */}
              <div>
                <Link href="/" className="btn btn-secondary">
                  <ArrowLeft size={14} />
                  Zurück zur Startseite
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
