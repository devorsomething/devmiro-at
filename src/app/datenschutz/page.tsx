'use client'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      {/* Header */}
      <header className="border-b border-[#2A2A2E] bg-[#0A0A0B]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#F5F5F7]">
            DevMiro
          </Link>
          <Link href="/impressum">
            <Button variant="ghost" size="sm" className="text-[#9CA3AF] hover:text-[#F5F5F7]">
              ← Impressum
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-[#F5F5F7] mb-2">
          Datenschutzerklärung
        </h1>
        <p className="text-[#9CA3AF] mb-12">
          Stand: {new Date().toLocaleDateString('de-AT', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        {/* TOC */}
        <nav className="mb-12 p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg">
          <h2 className="text-lg font-bold text-[#F5F5F7] mb-4">Inhaltsverzeichnis</h2>
          <ol className="space-y-2 text-[#9CA3AF]">
            <li><a href="#verantwortlicher" className="hover:text-[#3B82F6]">1. Verantwortlicher</a></li>
            <li><a href="#erhebung" className="hover:text-[#3B82F6]">2. Erhebung und Verarbeitung personenbezogener Daten</a></li>
            <li><a href="#kontaktformular" className="hover:text-[#3B82F6]">3. Kontaktformular</a></li>
            <li><a href="#cookies" className="hover:text-[#3B82F6]">4. Cookies</a></li>
            <li><a href="#analyse" className="hover:text-[#3B82F6]">5. Analyse-Tools</a></li>
            <li><a href="#social" className="hover:text-[#3B82F6]">6. Social Media Plugins</a></li>
            <li><a href="#rechte" className="hover:text-[#3B82F6]">7. Ihre Rechte</a></li>
            <li><a href="#speicherdauer" className="hover:text-[#3B82F6]">8. Speicherdauer</a></li>
            <li><a href="#aenderungen" className="hover:text-[#3B82F6]">9. Änderungen dieser Datenschutzerklärung</a></li>
          </ol>
        </nav>

        {/* 1. Verantwortlicher */}
        <section id="verantwortlicher" className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6">1. Verantwortlicher</h2>
          <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg space-y-2">
            <p className="text-[#F5F5F7]">Timo Miro Gavanelli</p>
            <p className="text-[#9CA3AF]">Einzelunternehmen</p>
            <p className="text-[#9CA3AF]">Vorarlberg, Österreich</p>
            <p className="text-[#9CA3AF]">
              E-Mail: <a href="mailto:info@devmiro.at" className="text-[#3B82F6] hover:text-[#06B6D4]">info@devmiro.at</a>
            </p>
          </div>
        </section>

        {/* 2. Erhebung */}
        <section id="erhebung" className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
          <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg space-y-4 text-[#9CA3AF]">
            <p>
              Ich erhebe und verarbeite personenbezogene Daten nur, wenn Sie mir diese freiwillig mitteilen, 
              z.B. durch das Ausfüllen des Kontaktformulars, per E-Mail oder bei der Inanspruchnahme meiner Dienstleistungen.
            </p>
            <p>Folgende Daten werden erhoben:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Name und Vorname</li>
              <li>E-Mail-Adresse</li>
              <li>Unternehmensname (falls angegeben)</li>
              <li>Inhalt der Nachricht / Projektanfrage</li>
              <li>Datum und Uhrzeit der Kontaktaufnahme</li>
            </ul>
            <p>
              Diese Daten werden ausschließlich zum Zweck der Bearbeitung Ihrer Anfrage und zur Kontaktaufnahme mit Ihnen verwendet.
            </p>
          </div>
        </section>

        {/* 3. Kontaktformular */}
        <section id="kontaktformular" className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6">3. Kontaktformular</h2>
          <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg space-y-4 text-[#9CA3AF]">
            <p>
              Wenn Sie mir über das Kontaktformular eine Nachricht senden, werden Ihre Angaben 
              (Name, E-Mail, Unternehmen, Projekttyp, Nachricht) zum Zweck der Bearbeitung gespeichert.
            </p>
            <p>
              Die Übermittlung erfolgt über eine verschlüsselte Verbindung (HTTPS/TLS). 
              Ihre Daten werden anschließend über einen n8n-Webhook verarbeitet und Ihnen wird eine 
              Bestätigungs-E-Mail zugesandt.
            </p>
            <p>
              Rechtsgrundlage: <span className="text-[#F5F5F7]">Art. 6 Abs. 1 lit. b DSGVO</span> (Vertragserfüllung) 
              oder <span className="text-[#F5F5F7]">Art. 6 Abs. 1 lit. f DSGVO</span> (berechtigtes Interesse an Kontaktaufnahme).
            </p>
          </div>
        </section>

        {/* 4. Cookies */}
        <section id="cookies" className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6">4. Cookies</h2>
          <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg space-y-4 text-[#9CA3AF]">
            <p>
              Diese Website verwendet <strong className="text-[#F5F5F7]">keine Tracking-Cookies</strong>. 
              Es werden ausschließlich technisch notwendige Cookies eingesetzt, die für den Betrieb der Website erforderlich sind.
            </p>
            <p>
              Beispiele für technisch notwendige Cookies:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Session-Cookies für die Navigation</li>
              <li>CSRF-Token-Cookies für Formular-Sicherheit</li>
            </ul>
            <p>
              Diese Cookies speichern keine personenbezogenen Daten und werden beim Schließen des Browsers automatisch gelöscht.
            </p>
          </div>
        </section>

        {/* 5. Analyse */}
        <section id="analyse" className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6">5. Analyse-Tools</h2>
          <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg space-y-4 text-[#9CA3AF]">
            <p>
              Ich nutze <strong className="text-[#F5F5F7]">Plausible Analytics</strong> als datenschutzfreundliche Alternative zu Google Analytics.
            </p>
            <p>Plausible Analytics zeichnet auf:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Besuchte Seiten (anonymisiert)</li>
              <li>Datum und Uhrzeit des Besuchs</li>
              <li>Browser und Betriebssystem (aggregiert)</li>
              <li>Quelle des Besuchs (z.B. Google, direkter Aufruf)</li>
            </ul>
            <p>Plausible Analytics zeichnet <strong className="text-[#F5F5F7]">keine</strong>:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>IP-Adressen</li>
              <li>Personenbezogene Daten</li>
              <li>Cross-Site-Cookies oder Fingerprints</li>
            </ul>
            <p>
              Rechtsgrundlage: <span className="text-[#F5F5F7]">Art. 6 Abs. 1 lit. f DSGVO</span> (berechtigtes Interesse an der Analyse der Website-Nutzung).
            </p>
            <p>
              Weitere Informationen: <a href="https://plausible.io/privacy" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:text-[#06B6D4]">https://plausible.io/privacy</a>
            </p>
          </div>
        </section>

        {/* 6. Social Media */}
        <section id="social" className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6">6. Social Media Plugins</h2>
          <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg space-y-4 text-[#9CA3AF]">
            <p>
              Diese Website enthält <strong className="text-[#F5F5F7]">keine Social Media Plugins</strong> 
              (z.B. Facebook, Twitter, LinkedIn).
            </p>
            <p>
              Links zu meinen Social Media Profilen (LinkedIn, GitHub) sind als reine Text-Links implementiert. 
              Eine Datenübertragung an soziale Netzwerke erfolgt erst, wenn Sie aktiv auf den Link klicken.
            </p>
          </div>
        </section>

        {/* 7. Ihre Rechte */}
        <section id="rechte" className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6">7. Ihre Rechte</h2>
          <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg space-y-4 text-[#9CA3AF]">
            <p>Sie haben jederzeit das Recht auf:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong className="text-[#F5F5F7]">Auskunft</strong> über Ihre gespeicherten personenbezogenen Daten (Art. 15 DSGVO)
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Berichtigung</strong> unrichtiger Daten (Art. 16 DSGVO)
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Löschung</strong> Ihrer Daten, sofern keine gesetzliche Aufbewahrungspflicht dagegen spricht (Art. 17 DSGVO)
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO)
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Datenübertragbarkeit</strong> (Art. 20 DSGVO)
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Widerspruch</strong> gegen die Verarbeitung (Art. 21 DSGVO)
              </li>
            </ul>
            <p>
              Um Ihre Rechte auszuüben, kontaktieren Sie mich bitte per E-Mail:{' '}
              <a href="mailto:info@devmiro.at" className="text-[#3B82F6] hover:text-[#06B6D4]">info@devmiro.at</a>
            </p>
            <p>
              Zudem haben Sie das Recht, sich bei einer Datenschutzaufsichtsbehörde zu beschweren. 
              In Österreich ist dies die{' '}
              <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer" className="text-[#3B82F6] hover:text-[#06B6D4]">
                Datenschutzbehörde
              </a>.
            </p>
          </div>
        </section>

        {/* 8. Speicherdauer */}
        <section id="speicherdauer" className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6">8. Speicherdauer</h2>
          <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg space-y-4 text-[#9CA3AF]">
            <p>Personenbezogene Daten werden nur so lange gespeichert, wie es für den jeweiligen Zweck erforderlich ist:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong className="text-[#F5F5F7]">Kontaktanfragen:</strong> Bis zur vollständigen Bearbeitung + 12 Monate für Nachfragen
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Kunden-/Projektdaten:</strong> Während der Geschäftsbeziehung + gesetzliche Aufbewahrungsfristen (7 Jahre gemäß § 132 BAO)
              </li>
              <li>
                <strong className="text-[#F5F5F7]">Server-Logs:</strong> Maximal 30 Tage (technisch notwendig)
              </li>
            </ul>
          </div>
        </section>

        {/* 9. Änderungen */}
        <section id="aenderungen" className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6">9. Änderungen dieser Datenschutzerklärung</h2>
          <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg space-y-4 text-[#9CA3AF]">
            <p>
              Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf anzupassen, 
              um sie an geänderte Rechtslagen, neue Technologien oder Weiterentwickungen der Website anzupassen.
            </p>
            <p>
              Die aktuelle Version ist stets auf dieser Seite abrufbar. 
              Bei wesentlichen Änderungen werde ich Sie gesondert informieren.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-[#2A2A2E] pt-8 text-center">
          <p className="text-[#9CA3AF] text-sm">
            © {new Date().getFullYear()} Timo Miro Gavanelli. Alle Rechte vorbehalten.
          </p>
          <div className="mt-4 flex justify-center gap-6 text-sm">
            <Link href="/" className="text-[#9CA3AF] hover:text-[#F5F5F7] transition-colors">
              Startseite
            </Link>
            <Link href="/impressum" className="text-[#9CA3AF] hover:text-[#F5F5F7] transition-colors">
              Impressum
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
