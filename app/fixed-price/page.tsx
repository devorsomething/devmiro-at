import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Fixed Price Web Design | DEVMIRO",
  description: "Fixpreis Web Design — keine Überraschungen, kein Stundenzettel. Sie wissen exakt, was Ihre Website kostet, BEVOR wir starten.",
};

const included = [
  'Custom Figma Design (kein Template)',
  'Responsive Entwicklung (Mobile, Tablet, Desktop)',
  'WordPress CMS',
  'SEO Setup mit Keyword-Recherche',
  'DSGVO-Konformität',
  'Kontaktformular mit E-Mail-Benachrichtigungen',
  'Google Analytics 4 Setup',
  '30-minütige Training-Session',
  'Post-Launch Support (30–60 Tage)',
  '1 Monat kostenloses Hosting',
];

const comparison = [
  { criteria: 'Kostenvorhersehbarkeit', fixed: { text: '✅ Exakter Preis vor Unterschrift', highlight: true }, hourly: { text: '❌ Unbekannt bis Projektende', highlight: false } },
  { criteria: 'Scope-Änderungen', fixed: { text: '✅ Vorab definiert, neu angeboten', highlight: true }, hourly: { text: '❌ Jede Änderung kostet extra', highlight: false } },
  { criteria: 'Design-Revisionen', fixed: { text: '✅ Unbegrenzt, inklusive', highlight: true }, hourly: { text: '❌ Abrechenbare Zeit', highlight: false } },
  { criteria: 'Agentur-Anreiz', fixed: { text: '✅ Effizient liefern', highlight: true }, hourly: { text: '❌ Länger = mehr verdienen', highlight: false } },
  { criteria: 'Rechnungsüberraschungen', fixed: { text: '✅ Keine', highlight: true }, hourly: { text: '❌ Üblich', highlight: false } },
  { criteria: 'Timeline', fixed: { text: '✅ Fix im Vertrag', highlight: true }, hourly: { text: '❌ Oft verzögert', highlight: false } },
];

export default function FixedPricePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 120, paddingBottom: 6,
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,180,216,0.06) 0%, transparent 70%)',
      }}>
        <div className="container-max">
          <div className="section-tag animate-fade-in-up" style={{ marginBottom: '1.5rem' }}>
            Transparent & Fair
          </div>
          <h1 className="animate-fade-in-up delay-100" style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800, lineHeight: 1.1,
            color: '#f0f6fc', marginBottom: '1.5rem', letterSpacing: '-0.03em',
          }}>
            Fixpreis Web Design
            <br />
            <span className="gradient-text">Kein Stundenzettel.</span>
          </h1>
          <p className="animate-fade-in-up delay-200" style={{
            fontSize: '1.15rem', color: '#8b949e', lineHeight: 1.7, maxWidth: 680, marginBottom: '2.5rem',
          }}>
            Sie wissen exakt, was Ihre Website kostet, bevor wir starten. Kein Time-Tracking, kein Scope Creep, keine Rechnungsüberraschungen am Ende.
          </p>
          <div className="animate-fade-in-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/start" className="btn-primary">
              Projekt starten
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Fixed Pricing */}
      <section style={{ padding: '6rem 0', background: '#070b14' }}>
        <div className="container-max">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem', alignItems: 'center',
          }}>
            <div>
              <div className="section-tag" style={{ marginBottom: '1rem' }}>Warum Fixpreis?</div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 700, color: '#f0f6fc', marginBottom: '1.5rem', letterSpacing: '-0.02em',
              }}>
                Stundenzettel sind<br />nicht in Ihrem Interesse
              </h2>
              <p style={{ fontSize: '1rem', color: '#8b949e', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                Die meisten Webdesign-Agenturen rechnen nach Stunden ab. Das Problem liegt auf der Hand: Je länger ein Projekt dauert, desto mehr verdienen sie. Es gibt keinen Anreiz, effizient zu sein — und Sie haben keine Ahnung, wie die finale Rechnung aussehen wird.
              </p>
              <p style={{ fontSize: '1rem', color: '#8b949e', lineHeight: 1.7 }}>
                Mit DEVMIRO erhalten Sie einen Festpreis, der alles enthält. Bevor wir anfangen.
              </p>
            </div>
            <div>
              <div style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: 12,
                padding: '1.75rem',
              }}>
                <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00b4d8', marginBottom: '1.5rem' }}>
                  Geschäftsmodell-Vergleich
                </div>
                {[
                  { label: 'Agenturen mit Stundenzettel', problem: true },
                  { label: 'Timen, um Umsatz zu maximieren', problem: true },
                  { label: 'Scope Creep = zusätzliche Einnahmen', problem: true },
                  { label: 'DEVMIRO Fixed Price', problem: false },
                  { label: 'Effizient = besser für beide Seiten', problem: false },
                  { label: 'Unbegrenzte Revisionen inklusive', problem: false },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                    padding: '0.6rem 0',
                    borderBottom: i < 5 ? '1px solid rgba(26,42,66,0.5)' : 'none',
                  }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: '50%',
                      background: item.problem ? 'rgba(239,68,68,0.15)' : 'rgba(0,180,216,0.15)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <span style={{ fontSize: '0.7rem' }}>{item.problem ? '✕' : '✓'}</span>
                    </div>
                    <span style={{ fontSize: '0.875rem', color: item.problem ? '#8b949e' : '#f0f6fc' }}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #070b14 0%, #0c1220 100%)' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag" style={{ marginBottom: '1rem' }}>Unser Prozess</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 700, color: '#f0f6fc', letterSpacing: '-0.02em',
            }}>
              So funktioniert's
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 720, margin: '0 auto' }}>
            {[
              { num: '1', title: 'Projektformular ausfüllen', desc: 'Teilen Sie uns Ihre Anforderungen mit — Branche, Seitenanzahl, gewünschte Features.' },
              { num: '2', title: 'Angebot innerhalb von 24 Stunden', desc: 'Sie erhalten einen Vertrag mit Festpreis, Scope und verbindlichem Lieferdatum.' },
              { num: '3', title: '50% Anzahlung → Design-Start', desc: 'Wir beginnen mit der Design-Phase in Figma. Unbegrenzte Revisionen, bis Sie zufrieden sind.' },
              { num: '4', title: 'Entwicklung & Launch', desc: 'Restliche 50% bei Fertigstellung. Training-Session inklusive.' },
            ].map((step, i) => (
              <div key={i} className="card" style={{ padding: '1.5rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 8,
                  background: 'rgba(0,180,216,0.1)',
                  border: '1px solid rgba(0,180,216,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.8rem', fontWeight: 700, color: '#00b4d8',
                }}>
                  {step.num}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1rem', fontWeight: 600, color: '#f0f6fc', marginBottom: '0.3rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#8b949e', lineHeight: 1.6 }}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section style={{ padding: '6rem 0', background: '#070b14' }}>
        <div className="container-max">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem', alignItems: 'start',
          }}>
            <div>
              <div className="section-tag" style={{ marginBottom: '1rem' }}>Leistungsumfang</div>
              <h2 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.8rem, 3vw, 2.2rem)',
                fontWeight: 700, color: '#f0f6fc', marginBottom: '1.5rem', letterSpacing: '-0.02em',
              }}>
                Was im Preis enthalten ist
              </h2>
              <p style={{ fontSize: '1rem', color: '#8b949e', lineHeight: 1.7, marginBottom: '2rem' }}>
                Alles, was eine professionelle Business-Website braucht — ohne versteckte Kosten.
              </p>
              <Link href="/start" className="btn-primary">Projekt starten</Link>
            </div>
            <div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {included.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.95rem', color: '#8b949e' }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="9" cy="9" r="8.25" stroke="rgba(0,180,216,0.3)" strokeWidth="1.5"/>
                      <path d="M5.5 9l2.5 2.5L12.5 6" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #070b14 0%, #0c1220 100%)' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag" style={{ marginBottom: '1rem' }}>Vergleich</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 700, color: '#f0f6fc', letterSpacing: '-0.02em',
            }}>
              Fixpreis vs. Stundenzettel
            </h2>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%', borderCollapse: 'collapse',
              minWidth: 600,
            }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(26,42,66,0.8)' }}>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontSize: '0.8rem', fontWeight: 600, color: '#8b949e', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Kriterium
                  </th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontSize: '0.8rem', fontWeight: 600, color: '#00b4d8', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Fixed Price
                  </th>
                  <th style={{ textAlign: 'left', padding: '0.75rem 1rem', fontSize: '0.8rem', fontWeight: 600, color: '#8b949e', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    Stundenzettel
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(26,42,66,0.4)' }}>
                    <td style={{ padding: '1rem', fontSize: '0.9rem', color: '#f0f6fc', fontWeight: 500 }}>
                      {row.criteria}
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.875rem', color: row.fixed.highlight ? '#10b981' : '#8b949e' }}>
                      {row.fixed.text}
                    </td>
                    <td style={{ padding: '1rem', fontSize: '0.875rem', color: row.hourly.highlight ? '#ef4444' : '#8b949e' }}>
                      {row.hourly.text}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 0', background: '#070b14' }}>
        <div className="container-max" style={{ maxWidth: 800 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ marginBottom: '1rem' }}>Fragen & Antworten</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 700, color: '#f0f6fc', letterSpacing: '-0.02em',
            }}>
              Häufige Fragen
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { q: 'Können wir nach dem Start Seiten hinzufügen?', a: 'Ja, zusätzliche Seiten werden als separater Fixpreis-Posten angeboten — keine Überraschungen.' },
              { q: 'Was, wenn wir mit dem Design nicht zufrieden sind?', a: 'Unbegrenzte Revisionen sind im Preis enthalten. Der Preis bleibt gleich, egal wie viele Anpassungen Sie brauchen.' },
              { q: 'Wie läuft die Bezahlung ab?', a: '50% Anzahlung bei Auftragserteilung. Restliche 50% bei Fertigstellung und vor dem Launch.' },
              { q: 'Was kostet das Hosting nach dem Launch?', a: 'Der erste Monat ist gratis. Danach € 99/Monat — optional, keine Mindestlaufzeit.' },
            ].map((faq, i) => (
              <details key={i} className="card" style={{ padding: '1.5rem', cursor: 'pointer' }}>
                <summary style={{
                  listStyle: 'none', fontWeight: 600, color: '#f0f6fc',
                  fontSize: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer',
                }}>
                  {faq.q}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginLeft: '1rem' }}>
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </summary>
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#8b949e', lineHeight: 1.7 }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, rgba(0,180,216,0.04) 0%, rgba(0,180,216,0.01) 100%)' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem', letterSpacing: '-0.02em',
          }}>
            Bereit für einen Fixpreis?
          </h2>
          <p style={{ fontSize: '1rem', color: '#8b949e', marginBottom: '2rem' }}>
            Formular ausfüllen — Angebot innerhalb von 24 Stunden.
          </p>
          <Link href="/start" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
            Projekt starten
          </Link>
        </div>
      </section>
    </>
  );
}
