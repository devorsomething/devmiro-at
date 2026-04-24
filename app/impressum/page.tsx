import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und rechtliche Informationen für DEVMIRO IT-Lösungen.',
}

export default function ImpressumPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <h1>Impressum</h1>
        
        <h2>Angaben gemäß § 5 ECG</h2>
        <p>
          <strong>DEVMIRO</strong><br />
          Inhaber: Timo Miro Gavanelli<br />
          Bregenz, Vorarlberg<br />
          Österreich
        </p>
        
        <h2>Kontakt</h2>
        <p>
          E-Mail: hallo@devmiro.at<br />
          Telefon: +43 660 123 4567
        </p>
        
        <h2>Gewerbe</h2>
        <p>
          IT-Dienstleistungen und Webentwicklung<br />
          UID-Nummer: AT123456789<br />
          Mitglied der WKÖ, Landesstelle Vorarlberg
        </p>
        
        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          Timo Miro Gavanelli<br />
          Bregenz, Vorarlberg, Österreich
        </p>
        
        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a><br />
          Unsere E-Mail-Adresse lautet: hallo@devmiro.at<br /><br />
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        
        <h2>Haftungsausschluss</h2>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, 
          Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. 
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 ECG für eigene Inhalte auf diesen Seiten 
          nach den allgemeinen Gesetzen verantwortlich.
        </p>
        
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen 
          dem österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede 
          Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen 
          Zustimmung des jeweiligen Autors bzw. Erstellers.
        </p>
        
        <p className="legal-note">
          <strong>Rechtsordnung:</strong> Ausschließlich österreichisches Recht. Gerichtsstand: Bregenz, Österreich.
        </p>
      </div>
    </main>
  )
}
