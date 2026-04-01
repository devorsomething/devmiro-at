import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DSGVO-konforme Website | DEVMIRO",
  description: "GDPR-konformes Webdesign für EU-Unternehmen. Cookie Consent, Datenschutzerklärung, SSL-Verschlüsselung — alles inklusive.",
};

const gdprAreas = [
  {
    num: '01',
    title: 'Cookie Consent Management',
    items: [
      'Non-Essential Cookies standardmäßig blockieren',
      'Granulares Consent (Analytics vs. Marketing vs. Präferenzen)',
      'So leicht abzulehnen wie anzunehmen',
      'Auswahl speichern',
      'Jederzeit Widerruf möglich',
    ],
    note: 'Tool: Complianz oder vergleichbar',
  },
  {
    num: '02',
    title: 'Datenschutzerklärung',
    items: [
      'Welche personenbezogenen Daten erhoben werden und warum',
      'Rechtsgrundlage für die Verarbeitung',
      'Wie lange Daten gespeichert werden',
      'Mit wem Daten geteilt werden',
      'Wie Besucher Zugriff / Korrektur / Löschung beantragen können',
    ],
    note: 'Individuell für Ihr Unternehmen erstellt',
  },
  {
    num: '03',
    title: 'Sichere Kontaktformulare',
    items: [
      'SSL/TLS-Verschlüsselung',
      'Klare Informationen über Datennutzung',
      'Link zur Datenschutzerklärung nahe dem Submit-Button',
      'Keine vorausgefüllten Consent-Boxen',
      'Datenminimierung',
    ],
    note: 'Jedes Formular GDPR-ready konfiguriert',
  },
  {
    num: '04',
    title: 'Drittanbieter-Services',
    items: [
      'Google Fonts self-hosted (keine Google-Server-Anfragen)',
      'Analytics IP-Anonymisierung',
      'YouTube Privacy-Enhanced Mode',
      'Keine unnötigen Third-Party-Scripts ohne Consent',
    ],
    note: 'Minimale Datenweitergabe als Standard',
  },
  {
    num: '05',
    title: 'Rechtliche Seiten (Österreich)',
    items: [
      'Impressum (§ 5 ECG)',
      'Datenschutzerklärung (DSGVO Art. 13)',
      'AGB (empfohlen)',
      'Cookie-Richtlinie',
      'Widerrufsbelehrung (FAGG)',
    ],
    note: 'Alle erforderlichen rechtlichen Seiten inklusive',
  },
  {
    num: '06',
    title: 'Datensicherheit',
    items: [
      'SSL/TLS auf allen Seiten',
      'Regelmäßige Software-Updates',
      'Starke Passwörter, eingeschränkter Admin-Zugang',
      'Regelmäßige EU-basierte Backups',
      'GDPR-konformer Hosting-Provider',
    ],
    note: 'Sicherheit ist Standard, kein Add-on',
  },
];

export default function GDPRPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 120, paddingBottom: 6,
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,180,216,0.06) 0%, transparent 70%)',
      }}>
        <div className="container-max">
          <div className="section-tag animate-fade-in-up" style={{ marginBottom: '1.5rem' }}>DSGVO-konform</div>
          <h1 className="animate-fade-in-up delay-100" style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1,
            color: '#f0f6fc', marginBottom: '1.5rem', letterSpacing: '-0.03em',
          }}>
            DSGVO-konformes<br /><span className="gradient-text">Website Design</span>
          </h1>
          <p className="animate-fade-in-up delay-200" style={{ fontSize: '1.15rem', color: '#8b949e', lineHeight: 1.7, maxWidth: 680, marginBottom: '1.5rem' }}>
            Wenn Ihr Unternehmen in der EU tätig ist oder EU-Kunden bedient, muss Ihre Website DSGVO-konform sein. Bei Nichteinhaltung drohen Strafen von bis zu € 20 Millionen oder 4% des weltweiten Jahresumsatzes.
          </p>
          <p className="animate-fade-in-up delay-200" style={{ fontSize: '1rem', color: '#8b949e', lineHeight: 1.7, maxWidth: 680, marginBottom: '2.5rem' }}>
            Jenseits des rechtlichen Risikos baut eine DSGVO-konforme Website Vertrauen auf.
          </p>
          <Link href="/start" className="btn-primary animate-fade-in-up delay-300">
            Projekt starten
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* 6 GDPR Areas */}
      <section style={{ padding: '6rem 0', background: '#070b14' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag" style={{ marginBottom: '1rem' }}>6 Bereiche abgedeckt</div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#f0f6fc', letterSpacing: '-0.02em' }}>
              Was wir für Sie sicherstellen
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
            {gdprAreas.map((area, i) => (
              <div key={i} className="card" style={{ padding: '1.75rem' }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.7rem', fontWeight: 700, color: '#00b4d8', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>
                  {area.num}
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 600, color: '#f0f6fc', marginBottom: '1rem' }}>
                  {area.title}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                  {area.items.map((item, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.85rem', color: '#8b949e' }}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                        <path d="M2.5 7l3 3 6-6" stroke="#00b4d8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ fontSize: '0.75rem', color: '#4a5568', padding: '0.5rem 0.75rem', background: 'rgba(255,255,255,0.03)', borderRadius: 6, border: '1px solid rgba(26,42,66,0.5)' }}>
                  💡 {area.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standard in jedem Projekt */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #070b14 0%, #0c1220 100%)' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag" style={{ marginBottom: '1rem' }}>Standard in jedem Projekt</div>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#f0f6fc', letterSpacing: '-0.02em' }}>
              DSGVO ist kein Add-on
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              'Cookie-Consent-Banner mit granularen Controls',
              'Datenschutzerklärung-Vorlage',
              'Impressum-Seite',
              'Self-hosted Fonts',
              'IP-anonymisierte Analytics',
              'SSL/TLS-Verschlüsselung',
              'Sichere Kontaktformulare',
              'EU-basiertes Hosting',
              'Keine unnötigen Third-Party-Datentransfers',
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: 28, height: 28, borderRadius: 6, background: 'rgba(0,180,216,0.1)', border: '1px solid rgba(0,180,216,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2.5 7l3 3 6-6" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <span style={{ fontSize: '0.875rem', color: '#8b949e' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fine Warning */}
      <section style={{ padding: '5rem 0', background: '#070b14' }}>
        <div className="container-max" style={{ maxWidth: 800 }}>
          <div style={{ border: '1px solid rgba(239,68,68,0.2)', borderRadius: 12, padding: '2.5rem', background: 'rgba(239,68,68,0.04)', textAlign: 'center' }}>
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem' }}>DSGVO-Verstöße können teuer werden</h3>
            <p style={{ fontSize: '0.95rem', color: '#8b949e', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Bußgelder von bis zu <strong style={{ color: '#f0f6fc' }}>€ 20 Millionen</strong> oder <strong style={{ color: '#f0f6fc' }}>4% des weltweiten Jahresumsatzes</strong>. Dazu Reputationsschäden und Abmahnrisiken.
            </p>
            <p style={{ fontSize: '0.95rem', color: '#8b949e', lineHeight: 1.7 }}>
              Mit DEVMIRO ist DSGVO-Konformität von Tag eins an Teil jedes Projekts — ohne Aufpreis.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, rgba(0,180,216,0.04) 0%, rgba(0,180,216,0.01) 100%)' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Starten Sie DSGVO-sicher</h2>
          <p style={{ fontSize: '1rem', color: '#8b949e', marginBottom: '2rem' }}>Jedes unserer Projekte ist standardmäßig DSGVO-konform.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/start" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>Projekt starten</Link>
            <Link href="/kontakt" className="btn-outline" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>Fragen? Kontakt</Link>
          </div>
        </div>
      </section>
    </>
  );
}
