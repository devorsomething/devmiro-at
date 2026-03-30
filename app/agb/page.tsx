'use client';
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'


const sections = [
  {
    id: 'geltungsbereich',
    number: '01',
    title: 'Geltungsbereich',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Angebote und Leistungen zwischen <strong style={{ color: 'var(--text-primary)' }}>DEVMIRO — Timo Miro Gavanelli</strong> (im Folgenden „Auftragnehmer") und dem Kunden (im Folgenden „Auftraggeber") für IT-Dienstleistungen, Webentwicklung und digitale Lösungen.
        </p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>
          Abweichende Bedingungen des Auftraggebers werden nur dann Vertragsbestandteil, wenn DEVMIRO diesen ausdrücklich und schriftlich zustimmt. Mit der Auftragserteilung erkennt der Auftraggeber diese AGB an.
        </p>
      </div>
    ),
  },
  {
    id: 'vertragsschluss',
    number: '02',
    title: 'Vertragsschluss',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Ein Vertrag kommt durch die schriftliche Auftragsbestätigung per E-Mail seitens DEVMIRO zustande. Angebote von DEVMIRO sind freibleibend und haben eine Gültigkeit von 14 Tagen ab Angebotsdatum, sofern nicht anders angegeben.
        </p>
        <div style={{
          padding: '1rem 1.25rem',
          background: 'rgba(0,229,255,0.04)',
          border: '1px solid var(--border-accent)',
          borderRadius: 10,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
        }}>
          <strong style={{ color: 'var(--accent-cyan)' }}>Meilenstein-Modell:</strong> Jedes Projekt wird in klar definierte Phasen unterteilt. Der Vertrag kommt mit der Unterzeichnung des jeweiligen Angebots zustande.
        </div>
      </div>
    ),
  },
  {
    id: 'leistungsumfang',
    number: '03',
    title: 'Leistungsumfang',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot und der Auftragsbestätigung. DEVMIRO verpflichtet sich, die vereinbarten Leistungen fachgerecht und nach dem aktuellen Stand der Technik zu erbringen.
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1rem' }}>
          {[
            'Webentwicklung: Design, Programmierung, Testing, Deployment',
            'Technische Dokumentation und Quellcode-Übergabe nach Projektabschluss',
            'SEO-Grundsetup (sofern im Angebot enthalten)',
            'GDPR-konforme Implementierung',
          ].map((item) => (
            <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}>
                <polyline points="20,6 9,17 4,12" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
          Nicht im Leistungsumfang enthalten sind: Content-Erstellung, Stockfotos (sofern nicht explizit angegeben), Domain-Registrierung, Hosting-Setup (sofern nicht im Paket), SEO-Betreuung nach Projektabschluss.
        </p>
      </div>
    ),
  },
  {
    id: 'preise-zahlung',
    number: '04',
    title: 'Preise & Zahlungsbedingungen',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Alle Preise verstehen sich netto in Euro (€) zuzüglich der gesetzlichen Umsatzsteuer, sofern nicht anders angegeben. Die im Angebot genannten Preise sind Festpreise und gelten für die im Angebot spezifizierte Leistung.
        </p>
        <div className="grid-2" style={{ gap: '0.75rem', marginBottom: '1.25rem' }}>
          {[
            { phase: 'Projektstart', amount: '30%', desc: 'Bei Auftragsbestätigung' },
            { phase: 'Design-Freigabe', amount: '30%', desc: 'Nach Freigabe des Designs' },
            { phase: 'Abnahme / Go-Live', amount: '40%', desc: 'Bei Projektabschluss' },
          ].map((item) => (
            <div key={item.phase} style={{
              padding: '1rem 1.25rem',
              background: 'rgba(0,229,255,0.04)',
              border: '1px solid var(--border-accent)',
              borderRadius: 10,
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-cyan)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.375rem' }}>
                {item.phase}
              </div>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, background: 'var(--gradient-text)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', letterSpacing: '-0.02em' }}>
                {item.amount}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
          Rechnungen sind innerhalb von <strong style={{ color: 'var(--text-primary)' }}>14 Tagen ab Rechnungsdatum</strong> ohne Abzug zu bezahlen. Bei Zahlungsverzug gelten Verzugszinsen in Höhe von 4% p.a. über dem Basiszinssatz.
        </p>
      </div>
    ),
  },
  {
    id: 'lieferzeit',
    number: '05',
    title: 'Liefer- & Leistungszeit',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Liefer- und Fertigstellungsfristen werden individuell vereinbart und im Angebot dokumentiert. Sie beginnen mit dem Tag der Auftragsbestätigung und der Bereitstellung aller erforderlichen Unterlagen und Informationen seitens des Auftraggebers.
        </p>
        <div style={{
          padding: '1rem 1.25rem',
          background: 'rgba(77,124,255,0.06)',
          border: '1px solid rgba(77,124,255,0.2)',
          borderRadius: 10,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
        }}>
          <strong style={{ color: 'var(--accent-blue)' }}>Hinweis:</strong> Die angegebenen Zeitrahmen setzen die fristgerechte Bereitstellung von Feedback, Content und Zugangsdaten durch den Auftraggeber voraus. Verzögerungen auf Kundenseite können die Lieferzeit entsprechend verlängern.
        </div>
      </div>
    ),
  },
  {
    id: 'eigentumsvorbehalt',
    number: '06',
    title: 'Eigentumsvorbehalt & Nutzungsrechte',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Gelieferte Software, Designs und Codes bleiben bis zur vollständigen Bezahlung Eigentum von DEVMIRO. Nach vollständiger Zahlung werden alle Nutzungsrechte an den Auftraggeber übertragen, soweit nicht anders vereinbart.
        </p>
        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
          {[
            'Nutzungsrecht für das fertige Projekt (Website, Software)',
            'DEVMIRO darf das Projekt anonymisiert als Referenz zeigen',
            'Open-Source-Komponenten unterliegen ihren jeweiligen Lizenzen',
            'DEVMIRO behält Urheberrecht an wiederverwendbaren Framework-Komponenten',
          ].map((item) => (
            <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 3 }}>
                <polyline points="20,6 9,17 4,12" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    ),
  },
  {
    id: 'gewaehrleistung',
    number: '07',
    title: 'Gewährleistung',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          DEVMIRO leistet Gewähr für die mangelfreie und vertragsgemäße Ausführung der vereinbarten Leistungen. Die Gewährleistungsfrist beträgt <strong style={{ color: 'var(--text-primary)' }}>12 Monate</strong> ab Abnahme/Go-Live.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
          {[
            { title: 'Mängelbeseitigung', desc: 'Kostenlose Behebung von Fehlern, die die Nutzung wesentlich einschränken' },
            { title: 'Nachbesserung', desc: 'Zwei Nachbesserungsversuche pro Mangel, bevor Wandlung oder Minderung geltend gemacht werden kann' },
            { title: 'Wartung', desc: 'Im Angebot enthaltene Support-Zeiten gelten nicht als Gewährleistung' },
          ].map((item) => (
            <div key={item.title} style={{
              padding: '0.875rem 1rem',
              background: 'rgba(0,229,255,0.04)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 10,
            }}>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{item.title}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
          Von der Gewährleistung ausgenommen sind Mängel, die durch unsachgemäße Nutzung, Eigenmanipulation oder Force-Majeure-Ereignisse entstehen.
        </p>
      </div>
    ),
  },
  {
    id: 'haftung',
    number: '08',
    title: 'Haftung',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          DEVMIRO haftet nur für Schäden, die durch Vorsatz oder grobe Fahrlässigkeit verursacht wurden. Die Haftung ist auf die Höhe des Auftragswertes begrenzt. Eine Haftung für mittelbare Schäden, entgangenen Gewinn oder Datenverlust ist ausgeschlossen.
        </p>
        <div style={{
          padding: '1rem 1.25rem',
          background: 'rgba(139,92,246,0.08)',
          border: '1px solid rgba(139,92,246,0.25)',
          borderRadius: 10,
          fontFamily: 'var(--font-mono)',
          fontSize: '0.8rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.7,
        }}>
          <strong style={{ color: 'var(--accent-purple)' }}>Haftungshöchstgrenze:</strong> Die Gesamthaftung von DEVMIRO übersteigt zu keiner Zeit den Gesamtbetrag der vom Auftraggeber gezahlten Vergütung im Jahr des Schadenseintritts.
        </div>
      </div>
    ),
  },
  {
    id: 'storno',
    number: '09',
    title: 'Stornierung & Rücktritt',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Der Auftraggeber kann vor Beginn der Leistungserbringung jederzeit vom Vertrag zurücktreten. Es gelten folgende Stornogebühren:
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1rem' }}>
          {[
            { stage: 'Vor Projektstart', fee: 'Kostenlos', color: 'var(--accent-cyan)' },
            { stage: 'Nach Design-Freigabe', fee: '30% des Auftragswertes', color: 'var(--accent-blue)' },
            { stage: 'Während der Entwicklung', fee: '50% des Auftragswertes', color: 'var(--accent-purple)' },
            { stage: 'Nach Go-Live-Ansage', fee: '100% des Auftragswertes', color: 'var(--text-primary)' },
          ].map((item) => (
            <div key={item.stage} style={{
              padding: '0.875rem 1rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 10,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{item.stage}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 700, color: item.color }}>{item.fee}</span>
            </div>
          ))}
        </div>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7 }}>
          DEVMIRO kann den Vertrag jederzeit ohne Angabe von Gründen kündigen. In diesem Fall werden bereits erbrachte, nachweislich dokumentierte Leistungen nach tatsächlichem Aufwand abgerechnet.
        </p>
      </div>
    ),
  },
  {
    id: 'schlussbestimmungen',
    number: '10',
    title: 'Schlussbestimmungen',
    content: (
      <div>
        <p style={{ marginBottom: '1rem', lineHeight: 1.7 }}>
          Es gilt das Recht der Republik Österreich unter Ausschluss des UN-Kaufrechts. Erfüllungsort ist der Standort von DEVMIRO in Vorarlberg. Ausschließlicher Gerichtsstand für alle Streitigkeiten ist <strong style={{ color: 'var(--text-primary)' }}>Feldkirch, Österreich</strong>.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {[
            'Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.',
            'Mündliche Nebenabreden haben keine Gültigkeit. Änderungen bedürfen der Schriftform.',
            'DEVMIRO behält sich das Recht vor, diese AGB mit angemessener Vorankündigung zu ändern.',
          ].map((item) => (
            <div key={item} style={{
              padding: '0.75rem 1rem',
              background: 'rgba(0,229,255,0.03)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 8,
              fontSize: '0.875rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
            }}>
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export default function AgbPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: 'var(--header-height)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        {/* Background */}
        <div style={{ position: 'fixed', inset: 0, background: 'var(--gradient-mesh)', zIndex: 0 }} />
        <div className="orb orb--purple" style={{ width: 500, height: 500, top: '-10%', left: '5%', opacity: 0.6 }} />
        <div className="orb orb--cyan" style={{ width: 400, height: 400, bottom: '10%', right: '-8%', opacity: 0.4 }} />

        <div className="container" style={{ position: 'relative', zIndex: 1, padding: 'var(--space-xl) var(--space-md)' }}>

          {/* Page Header */}
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
            <div className="badge badge--purple" style={{ marginBottom: '1.5rem' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14,2 14,8 20,8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
              </svg>
              Vertragsbedingungen
            </div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
              <span className="text-gradient">AGB</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7, fontSize: '1.0625rem' }}>
              Transparente und faire Bedingungen für unsere Zusammenarbeit. Stand: März 2026.
            </p>
          </div>

          {/* Sections */}
          <div style={{ maxWidth: 820, margin: '0 auto var(--space-xl)' }}>
            {sections.map((section, i) => (
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
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    color: 'var(--accent-purple)',
                    background: 'rgba(139,92,246,0.12)',
                    border: '1px solid rgba(139,92,246,0.25)',
                    borderRadius: 8,
                    padding: '0.375rem 0.75rem',
                    flexShrink: 0,
                    marginTop: '0.125rem',
                  }}>
                    {section.number}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.01em' }}>
                      {section.title}
                    </h2>
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="glass" style={{
            maxWidth: 800,
            margin: '0 auto var(--space-lg)',
            padding: '2rem 2.5rem',
            textAlign: 'center',
          }}>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Fragen zu unseren AGB? Wir klären alles in einem persönlichen Gespräch.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/kontakt" className="btn btn--primary" style={{ fontSize: '0.9rem' }}>
                Kontakt aufnehmen
              </Link>
              <Link href="/start" className="btn btn--outline" style={{ fontSize: '0.9rem' }}>
                Projekt starten
              </Link>
            </div>
          </div>

          {/* Back link */}
          <div style={{ textAlign: 'center' }}>
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
