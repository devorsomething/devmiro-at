import type { Metadata } from "next";
import Link from "next/link";
import CategorySwitcher from '@/components/CategorySwitcher';

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
      <section className="pt-32 pb-16 bg-[#050507] bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,_rgba(0,229,255,0.06)_0%,_transparent_70%)] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-blob"></div>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00E5FF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-blob animation-delay-2000"></div>
        <CategorySwitcher />
        <div className="container-max relative z-10">
          <div className="section-tag animate-fade-in-up mb-6">
            Transparent & Fair
          </div>
          <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] text-white mb-6 tracking-tight animate-fade-in-up delay-100">
            Fixpreis Web Design
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">Kein Stundenzettel.</span>
          </h1>
          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mb-10 animate-fade-in-up delay-200">
            Sie wissen exakt, was Ihre Website kostet, bevor wir starten. Kein Time-Tracking, kein Scope Creep, keine Rechnungsüberraschungen am Ende.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
            <Link href="/start" className="btn-glow">
              Projekt starten
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Fixed Pricing */}
      <section className="py-24 bg-[#050507]">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="section-tag mb-4">Warum Fixpreis?</div>
              <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white mb-6 tracking-tight">
                Stundenzettel sind<br />nicht in Ihrem Interesse
              </h2>
              <p className="text-base text-gray-400 leading-relaxed mb-6">
                Die meisten Webdesign-Agenturen rechnen nach Stunden ab. Das Problem liegt auf der Hand: Je länger ein Projekt dauert, desto mehr verdienen sie. Es gibt keinen Anreiz, effizient zu sein — und Sie haben keine Ahnung, wie die finale Rechnung aussehen wird.
              </p>
              <p className="text-base text-gray-400 leading-relaxed">
                Mit DEVMIRO erhalten Sie einen Festpreis, der alles enthält. Bevor wir anfangen.
              </p>
            </div>
            <div className="card-3d glass-panel group p-7 rounded-xl">
                <div className="text-xs font-semibold tracking-widest uppercase text-[#00E5FF] mb-6">
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
                  <div key={i} className={`flex items-center gap-3 py-2.5 ${i < 5 ? 'border-b border-gray-800' : ''}`}>
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${item.problem ? 'bg-red-500/15' : 'bg-[#00E5FF]/15'}`}>
                      <span className="text-[0.7rem]">{item.problem ? '✕' : '✓'}</span>
                    </div>
                    <span className={`text-sm ${item.problem ? 'text-gray-400' : 'text-white'}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-b from-[#050507] to-[#0A0A0F]">
        <div className="container-max">
          <div className="text-center mb-14">
            <div className="section-tag mb-4 inline-block">Unser Prozess</div>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white tracking-tight">
              So funktioniert's
            </h2>
          </div>

          <div className="flex flex-col gap-4 max-w-3xl mx-auto">
            {[
              { num: '1', title: 'Projektformular ausfüllen', desc: 'Teilen Sie uns Ihre Anforderungen mit — Branche, Seitenanzahl, gewünschte Features.' },
              { num: '2', title: 'Angebot innerhalb von 24 Stunden', desc: 'Sie erhalten einen Vertrag mit Festpreis, Scope und verbindlichem Lieferdatum.' },
              { num: '3', title: '50% Anzahlung → Design-Start', desc: 'Wir beginnen mit der Design-Phase in Figma. Unbegrenzte Revisionen, bis Sie zufrieden sind.' },
              { num: '4', title: 'Entwicklung & Launch', desc: 'Restliche 50% bei Fertigstellung. Training-Session inklusive.' },
            ].map((step, i) => (
              <div key={i} className="card-3d glass-panel group p-6 flex gap-5 items-start rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center shrink-0 font-bold text-[#00E5FF] text-sm">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 bg-[#050507]">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <div className="section-tag mb-4">Leistungsumfang</div>
              <h2 className="text-[clamp(1.8rem,3vw,2.2rem)] font-bold text-white mb-6 tracking-tight">
                Was im Preis enthalten ist
              </h2>
              <p className="text-base text-gray-400 leading-relaxed mb-8">
                Alles, was eine professionelle Business-Website braucht — ohne versteckte Kosten.
              </p>
              <Link href="/start" className="btn-glow">Projekt starten</Link>
            </div>
            <div>
              <ul className="flex flex-col gap-3">
                {included.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-[0.95rem] text-gray-400">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 mt-[2px]">
                      <circle cx="9" cy="9" r="8.25" stroke="rgba(0,229,255,0.3)" strokeWidth="1.5"/>
                      <path d="M5.5 9l2.5 2.5L12.5 6" stroke="#00E5FF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
      <section className="py-24 bg-gradient-to-b from-[#050507] to-[#0A0A0F]">
        <div className="container-max">
          <div className="text-center mb-14">
            <div className="section-tag mb-4 inline-block">Vergleich</div>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white tracking-tight">
              Fixpreis vs. Stundenzettel
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left p-3 px-4 text-xs font-semibold text-gray-400 tracking-wider uppercase">
                    Kriterium
                  </th>
                  <th className="text-left p-3 px-4 text-xs font-semibold text-[#00E5FF] tracking-wider uppercase">
                    Fixed Price
                  </th>
                  <th className="text-left p-3 px-4 text-xs font-semibold text-gray-400 tracking-wider uppercase">
                    Stundenzettel
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-gray-800/50">
                    <td className="p-4 text-sm text-white font-medium">
                      {row.criteria}
                    </td>
                    <td className={`p-4 text-sm ${row.fixed.highlight ? 'text-emerald-500' : 'text-gray-400'}`}>
                      {row.fixed.text}
                    </td>
                    <td className={`p-4 text-sm ${row.hourly.highlight ? 'text-red-500' : 'text-gray-400'}`}>
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
      <section className="py-24 bg-[#050507]">
        <div className="container-max max-w-4xl">
          <div className="text-center mb-12">
            <div className="section-tag mb-4 inline-block">Fragen & Antworten</div>
            <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white tracking-tight">
              Häufige Fragen
            </h2>
          </div>

          <div className="flex flex-col gap-4">
            {[
              { q: 'Können wir nach dem Start Seiten hinzufügen?', a: 'Ja, zusätzliche Seiten werden als separater Fixpreis-Posten angeboten — keine Überraschungen.' },
              { q: 'Was, wenn wir mit dem Design nicht zufrieden sind?', a: 'Unbegrenzte Revisionen sind im Preis enthalten. Der Preis bleibt gleich, egal wie viele Anpassungen Sie brauchen.' },
              { q: 'Wie läuft die Bezahlung ab?', a: '50% Anzahlung bei Auftragserteilung. Restliche 50% bei Fertigstellung und vor dem Launch.' },
              { q: 'Was kostet das Hosting nach dem Launch?', a: 'Der erste Monat ist gratis. Danach € 99/Monat — optional, keine Mindestlaufzeit.' },
            ].map((faq, i) => (
              <details key={i} className="card-3d glass-panel group p-6 rounded-xl cursor-pointer">
                <summary className="list-none font-semibold text-white text-base flex justify-between items-center cursor-pointer">
                  {faq.q}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00E5FF" strokeWidth="2" strokeLinecap="round" className="shrink-0 ml-4">
                    <polyline points="6,9 12,15 18,9"/>
                  </svg>
                </summary>
                <p className="mt-4 text-sm text-gray-400 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#00E5FF]/5 to-[#8B5CF6]/5">
        <div className="container-max text-center">
          <h2 className="text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white mb-4 tracking-tight">
            Bereit für einen Fixpreis?
          </h2>
          <p className="text-base text-gray-400 mb-8">
            Formular ausfüllen — Angebot innerhalb von 24 Stunden.
          </p>
          <Link href="/start" className="btn-glow text-base px-8 py-3">
            Projekt starten
          </Link>
        </div>
      </section>
    </>
  );
}
