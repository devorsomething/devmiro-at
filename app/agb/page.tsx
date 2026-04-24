import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB — DEVMIRO",
  description: "Allgemeine Geschäftsbedingungen für DEVMIRO IT-Lösungen. Transparente Bedingungen für Webentwicklung, Shopify-Integration und Automatisierung.",
};

export default function AGBPage() {
  return (
    <main className="min-h-screen bg-[#0F1C3F] text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel mb-8 gold-border">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10 9H8"></path>
              <path d="M16 13H8"></path>
              <path d="M16 17H8"></path>
            </svg>
            <span className="text-sm font-bold tracking-widest text-[#C9A84C]">RECHTLICHES</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
            Allgemeine <span className="text-[#C9A84C]">Geschäftsbedingungen</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Transparente Bedingungen für unsere Zusammenarbeit.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#141E3D] rounded-2xl p-8 md:p-12 border border-[#C9A84C]/20">
            
            <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">1. Geltungsbereich</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge, Dienstleistungen und Angebote von DEVMIRO — Timo Miro Gavanelli, im Folgenden &quot;Auftragnehmer&quot; genannt, mit seinen Auftraggebern. Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, sofern nicht ausdrücklich schriftlich zugestimmt.
            </p>

            <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">2. Leistungen</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Der Auftragnehmer erbringt folgende Dienstleistungen:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li>Webentwicklung und Website-Erstellung</li>
              <li>Shopify-Integration und E-Commerce-Lösungen</li>
              <li>Workflow-Automatisierung und KI-Integration</li>
              <li>SEO-Optimierung und Online-Marketing</li>
              <li>IT-Consulting und technische Beratung</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">3. Vertragsabschluss</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ein Vertrag kommt durch die schriftliche Auftragsbestätigung des Auftragnehmers oder durch die tatsächliche Leistungserbringung zustande. Angebote sind freibleibend und unverbindlich.
            </p>

            <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">4. Vergütung</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Die Vergütung richtet sich nach dem jeweiligen Angebot oder der schriftlichen Vereinbarung. Es gelten folgende Zahlungsbedingungen:
            </p>
            <ul className="list-disc list-inside text-gray-300 mb-8 space-y-2">
              <li>50% Anzahlung bei Auftragsbestätigung</li>
              <li>50% Restzahlung bei Projektabschluss</li>
              <li>Für laufende Wartungsverträge: monatliche Zahlung im Voraus</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">5. Lieferzeiten</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Lieferzeiten werden individuell vereinbart und sind als Richtwerte zu verstehen. Der Auftragnehmer bemüht sich, die angegebenen Zeiten einzuhalten, übernimmt jedoch keine Garantie für die Einhaltung.
            </p>

            <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">6. Eigentumsvorbehalt und Nutzungsrechte</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Die erstellten Werke und erbrachten Leistungen gehen nach vollständiger Zahlung in das Eigentum des Auftraggebers über. Der Auftragnehmer behält sich das Recht vor, erbrachte Leistungen als Referenz zu verwenden.
            </p>

            <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">7. Gewährleistung</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Der Auftragnehmer gewährleistet, dass die erbrachten Leistungen dem vereinbarten Umfang entsprechen. Mängel sind innerhalb von 14 Tagen nach Lieferung schriftlich zu melden. Der Auftragnehmer behält sich das Recht auf Nachbesserung vor.
            </p>

            <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">8. Haftung</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Die Haftung des Auftragnehmers ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. Die Haftung für indirekte Schäden, insbesondere entgangenen Gewinn, ist ausgeschlossen.
            </p>

            <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">9. Datenschutz</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Der Auftragnehmer verarbeitet personenbezogene Daten nur im Rahmen der Auftragsdurchführung und gemäß der DSGVO. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
            </p>

            <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">10. Gerichtsstand und anwendbares Recht</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Es gilt österreichisches Recht. Gerichtsstand ist Bregenz, Österreich.
            </p>

            <h2 className="text-2xl font-bold text-[#C9A84C] mb-6">11. Schlussbestimmungen</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Sollten einzelne Bestimmungen dieser AGB unwirksam sein, so bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt eine wirksame, die dem wirtschaftlichen Zweck am nächsten kommt.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <p className="text-gray-500 text-sm">
                <strong className="text-gray-400">Stand:</strong> April 2026<br/>
                <strong className="text-gray-400">Anbieter:</strong> DEVMIRO — Timo Miro Gavanelli, Bregenz, Vorarlberg, Österreich<br/>
                <strong className="text-gray-400">E-Mail:</strong> info@devmiro.at
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
