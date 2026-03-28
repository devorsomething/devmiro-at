import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Angaben für DevMiro — IT-Lösungen aus Bregenz, Vorarlberg.',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-label">Rechtliches</div>
            <h1>Impressum</h1>
            <p>Angaben gemäß § 5 ECG und § 2 Abs. 1 MedienG</p>
          </div>
        </section>

        <section className="section">
          <div className="container--default">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-10)',
              }}
            >
              {/* Medieninhaber */}
              <div>
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
                  Medieninhaber &amp; Betreiber
                </h2>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
                    gap: 'var(--space-6)',
                  }}
                >
                  {[
                    { label: 'Name', value: 'Timo Miro Gavanelli' },
                    { label: 'Unternehmensform', value: 'Einzelunternehmen' },
                    { label: 'UID-Nummer', value: 'AT00000000 (noch nicht zugeteilt)' },
                    { label: 'Gewerbe', value: 'IT-Dienstleistungen' },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        padding: 'var(--space-4)',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-lg)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.7rem',
                          fontWeight: 700,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: 'var(--text-faint)',
                          marginBottom: '0.3rem',
                        }}
                      >
                        {item.label}
                      </div>
                      <div style={{ fontSize: '0.9rem', color: 'var(--text)', fontWeight: 500 }}>
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Anschrift */}
              <div>
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
                  Anschrift
                </h2>
                <div
                  style={{
                    padding: 'var(--space-6)',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    fontSize: '0.9rem',
                    color: 'var(--text)',
                    lineHeight: 1.8,
                  }}
                >
                  <p>Vorarlberg, Österreich</p>
                  <p
                    style={{
                      marginTop: 'var(--space-4)',
                      fontSize: '0.8rem',
                      color: 'var(--text-muted)',
                    }}
                  >
                    Persönliche Treffen nach vorheriger Vereinbarung.
                  </p>
                </div>
              </div>

              {/* Kontakt */}
              <div>
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
                  Kontakt
                </h2>
                <div
                  style={{
                    padding: 'var(--space-6)',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                  }}
                >
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>E-Mail</span>
                    <br />
                    <a href="mailto:info@devmiro.at" style={{ color: 'var(--primary)', fontWeight: 500 }}>
                      info@devmiro.at
                    </a>
                  </div>
                  <div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-faint)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Telefon</span>
                    <br />
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Auf Anfrage</span>
                  </div>
                </div>
              </div>

              {/* Kammer */}
              <div>
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
                  Kammer &amp; Gewerbebehörde
                </h2>
                <div
                  style={{
                    padding: 'var(--space-6)',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                    fontSize: '0.9rem',
                  }}
                >
                  <div>
                    <span style={{ color: 'var(--text-faint)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Mitgliedschaft</span>
                    <p style={{ color: 'var(--text)', marginTop: '0.2rem' }}>Wirtschaftskammer Vorarlberg</p>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-faint)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Gewerbebehörde</span>
                    <p style={{ color: 'var(--text)', marginTop: '0.2rem' }}>Bezirkshauptmannschaft Bregenz</p>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-faint)', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Fachgruppe</span>
                    <p style={{ color: 'var(--text)', marginTop: '0.2rem' }}>UBIT (Unternehmensberatung, Buchhaltung und Informationstechnologie)</p>
                  </div>
                </div>
              </div>

              {/* OS-Plattform */}
              <div>
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
                  Online-Streitbeilegung
                </h2>
                <div
                  style={{
                    padding: 'var(--space-6)',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  <p>
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                    <a
                      href="https://ec.europa.eu/consumers/odr/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'var(--primary)' }}
                    >
                      https://ec.europa.eu/consumers/odr/
                    </a>
                  </p>
                  <p style={{ marginTop: 'var(--space-3)' }}>
                    Ich bin nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>

              {/* Haftung */}
              <div>
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
                  Haftung für Inhalte
                </h2>
                <div
                  style={{
                    padding: 'var(--space-6)',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                  }}
                >
                  <p>
                    Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
                    Ich übernehme jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.
                  </p>
                  <p>
                    Als Diensteanbieter bin ich gemäß § 7 Abs. 1 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
                    Nach §§ 8 bis 10 ECG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
                  </p>
                </div>
              </div>

              {/* Urheberrecht */}
              <div>
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
                  Urheberrecht
                </h2>
                <div
                  style={{
                    padding: 'var(--space-6)',
                    background: 'var(--surface)',
                    border: '1px solid var(--border)',
                    borderRadius: 'var(--radius-xl)',
                    fontSize: '0.9rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                  }}
                >
                  <p>
                    Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem österreichischen Urheberrecht.
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung.
                  </p>
                </div>
              </div>

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
