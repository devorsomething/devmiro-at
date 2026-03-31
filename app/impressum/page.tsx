'use client'
import Link from 'next/link'
import { Button } from '@/app/components/ui/button'
import { Card, CardContent } from '@/app/components/ui/card'

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      {/* Header */}
      <header className="border-b border-[#2A2A2E] bg-[#0A0A0B]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-[#F5F5F7]">
            DevMiro
          </Link>
          <Link href="/">
            <Button variant="ghost" size="sm" className="text-[#9CA3AF] hover:text-[#F5F5F7]">
              ← Zurück zur Website
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-extrabold text-[#F5F5F7] mb-2">
          Impressum
        </h1>
        <p className="text-[#9CA3AF] mb-12">
          Angaben gemäß § 5 ECG und § 2 Abs. 1 MediaAct
        </p>

        {/* Owner */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#10B981] rounded-full" />
            Medieninhaber & Betreiber
          </h2>
          <Card className="bg-[#141416] border-[#2A2A2E]">
            <CardContent className="p-6 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-[#9CA3AF] text-sm mb-1">Name</p>
                  <p className="text-[#F5F5F7] font-medium">Timo Miro Gavanelli</p>
                </div>
                <div>
                  <p className="text-[#9CA3AF] text-sm mb-1">Unternehmensform</p>
                  <p className="text-[#F5F5F7] font-medium">Einzelunternehmen</p>
                </div>
                <div>
                  <p className="text-[#9CA3AF] text-sm mb-1">UID-Nummer</p>
                  <p className="text-[#F5F5F7] font-medium">AT00000000</p>
                  <p className="text-[#9CA3AF] text-xs mt-1">(noch nicht zugeteilt)</p>
                </div>
                <div>
                  <p className="text-[#9CA3AF] text-sm mb-1">Gewerbe</p>
                  <p className="text-[#F5F5F7] font-medium">IT-Dienstleistungen</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Address */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#10B981] rounded-full" />
            Anschrift
          </h2>
          <Card className="bg-[#141416] border-[#2A2A2E]">
            <CardContent className="p-6">
              <div className="space-y-2">
                <p className="text-[#F5F5F7]">Vorarlberg</p>
                <p className="text-[#F5F5F7]">Österreich</p>
              </div>
              <div className="mt-6 pt-6 border-t border-[#2A2A2E]">
                <p className="text-[#9CA3AF] text-sm">
                  Für persönliche Treffen nach vorheriger Vereinbarung.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#10B981] rounded-full" />
            Kontakt
          </h2>
          <Card className="bg-[#141416] border-[#2A2A2E]">
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-[#9CA3AF] text-sm mb-1">E-Mail</p>
                <a 
                  href="mailto:info@devmiro.at" 
                  className="text-[#3B82F6] hover:text-[#06B6D4] transition-colors"
                >
                  info@devmiro.at
                </a>
              </div>
              <div>
                <p className="text-[#9CA3AF] text-sm mb-1">Telefon</p>
                <p className="text-[#F5F5F7]">Auf Anfrage</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* WKO */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#10B981] rounded-full" />
            Kammer & Gewerbebehörde
          </h2>
          <Card className="bg-[#141416] border-[#2A2A2E]">
            <CardContent className="p-6 space-y-4">
              <div>
                <p className="text-[#9CA3AF] text-sm mb-1">Mitgliedschaft</p>
                <p className="text-[#F5F5F7]">
                  Wirtschaftskammer Vorarlberg
                </p>
              </div>
              <div>
                <p className="text-[#9CA3AF] text-sm mb-1">Gewerbebehörde</p>
                <p className="text-[#F5F5F7]">
                  Bezirkshauptmannschaft Bregenz
                </p>
              </div>
              <div>
                <p className="text-[#9CA3AF] text-sm mb-1">Fachgruppe</p>
                <p className="text-[#F5F5F7]">
                  UBIT (Unternehmensberatung, Buchhaltung und Informationstechnologie)
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Online Dispute Resolution */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#10B981] rounded-full" />
            Online-Streitbeilegung
          </h2>
          <Card className="bg-[#141416] border-[#2A2A2E]">
            <CardContent className="p-6">
              <p className="text-[#F5F5F7] mb-4">
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              </p>
              <a 
                href="https://ec.europa.eu/consumers/odr/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3B82F6] hover:text-[#06B6D4] transition-colors break-all"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <p className="text-[#9CA3AF] mt-4">
                Meine E-Mail-Adresse: <a href="mailto:info@devmiro.at" className="text-[#3B82F6] hover:text-[#06B6D4]">info@devmiro.at</a>
              </p>
              <p className="text-[#9CA3AF] mt-4 text-sm">
                Ich bin nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Liability */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#10B981] rounded-full" />
            Haftung für Inhalte
          </h2>
          <Card className="bg-[#141416] border-[#2A2A2E]">
            <CardContent className="p-6 space-y-4 text-[#9CA3AF]">
              <p>
                Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. 
                Ich übernehme jedoch keine Gewähr für die Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten Inhalte.
              </p>
              <p>
                Als Diensteanbieter bin ich gemäß § 7 Abs. 1 ECG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                Nach §§ 8 bis 10 ECG bin ich als Diensteanbieter jedoch nicht unter Umständen verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
                oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
                Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Copyright */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#10B981] rounded-full" />
            Urheberrecht
          </h2>
          <Card className="bg-[#141416] border-[#2A2A2E]">
            <CardContent className="p-6 space-y-4 text-[#9CA3AF]">
              <p>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf dieser Website unterliegen dem österreichischen Urheberrecht. 
                Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
                Insbesondere werden Inhalte Dritter als solche gekennzeichnet. 
                Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten ich um einen entsprechenden Hinweis. 
                Bei Bekanntwerden von Rechtsverletzungen werde ich derartige Inhalte umgehend entfernen.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Datenschutz Link */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[#F5F5F7] mb-6 flex items-center gap-3">
            <span className="w-1 h-8 bg-[#10B981] rounded-full" />
            Datenschutz
          </h2>
          <Card className="bg-[#141416] border-[#2A2A2E]">
            <CardContent className="p-6">
              <p className="text-[#9CA3AF] mb-4">
                Informationen zum Datenschutz finden Sie in meiner Datenschutzerklärung:
              </p>
              <Link href="/datenschutz">
                <Button className="bg-[#10B981] hover:bg-[#059669] text-white">
                  Datenschutzerklärung →
                </Button>
              </Link>
            </CardContent>
          </Card>
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
            <Link href="/datenschutz" className="text-[#9CA3AF] hover:text-[#F5F5F7] transition-colors">
              Datenschutz
            </Link>
          </div>
        </footer>
      </div>
    </main>
  )
}
