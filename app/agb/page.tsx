import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'AGB für IT-Dienstleistungen und Webentwicklung von DEVMIRO.',
}

export default function AgbPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <h1>Allgemeine Geschäftsbedingungen (AGB)</h1>
        
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen DEVMIRO 
          und seinen Kunden für IT-Dienstleistungen und Webentwicklung. Abweichende Bedingungen 
          des Kunden werden nicht anerkannt.
        </p>
        
        <h2>2. Vertragsschluss</h2>
        <p>
          Ein Vertrag kommt durch die Annahme eines Angebots von DEVMIRO durch den Kunden zustande. 
          Angebote von DEVMIRO sind 30 Tage gültig, sofern nicht anders angegeben.
        </p>
        
        <h2>3. Leistungsumfang</h2>
        <p>
          Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen Angebot und der 
          Auftragsbestätigung. DEVMIRO erbringt IT-Dienstleistungen, Webentwicklung und 
          damit verbundene Beratungsleistungen.
        </p>
        
        <h2>4. Vergütung</h2>
        <p>
          Die Vergütung richtet sich nach dem vereinbarten Festpreis oder nach Aufwand zu den 
          im Angebot genannten Stundensätzen. Alle Preise verstehen sich netto zuzüglich der 
          gesetzlichen Mehrwertsteuer (20% in Österreich).
        </p>
        
        <h2>5. Zahlungsbedingungen</h2>
        <p>
          Sofern nicht anders vereinbart, sind Rechnungen innerhalb von 14 Tagen ab Rechnungsdatum 
          ohne Abzug fällig. Bei Zahlungsverzug gelten Verzugszinsen in Höhe von 4% über dem 
          Basiszinssatz.
        </p>
        
        <h2>6. Mitwirkungspflichten des Kunden</h2>
        <p>
          Der Kunde stellt DEVMIRO alle notwendigen Informationen, Materialien und Zugänge 
          zeitnah zur Verfügung, die für die Erbringung der Leistung erforderlich sind.
        </p>
        
        <h2>7. Eigentumsvorbehalt und Nutzungsrechte</h2>
        <p>
          Erstellte Werke (Websites, Software) gehen nach vollständiger Bezahlung in das 
          Eigentum des Kunden über. DEVMIRO behält das Recht, erbrachte Leistungen als 
          Referenz zu verwenden.
        </p>
        
        <h2>8. Gewährleistung</h2>
        <p>
          Es gilt die gesetzliche Gewährleistung. Bei Mängeln hat der Kunde das Recht auf 
          Nachbesserung oder Neuerbringung der Leistung. Die Gewährleistungsfrist beträgt 
          12 Monate ab Abnahme.
        </p>
        
        <h2>9. Haftung</h2>
        <p>
          DEVMIRO haftet nur bei Vorsatz oder grober Fahrlässigkeit. Die Haftung ist auf den 
          Auftragswert begrenzt. Für indirekte Schäden, Folgeschäden oder entgangenen Gewinn 
          wird nicht gehaftet.
        </p>
        
        <h2>10. Vertraulichkeit</h2>
        <p>
          Beide Parteien verpflichten sich, alle nicht öffentlich zugänglichen Informationen 
          vertraulich zu behandeln und nicht an Dritte weiterzugeben.
        </p>
        
        <h2>11. Kündigung</h2>
        <p>
          Verträge können von beiden Seiten mit einer Frist von 14 Tagen gekündigt werden. 
          Bei Abbruch eines Projekts durch den Kunden sind die bis dahin erbrachten Leistungen 
          zu vergüten.
        </p>
        
        <h2>12. Schlussbestimmungen</h2>
        <p>
          Es gilt ausschließlich österreichisches Recht. Gerichtsstand ist Bregenz, Österreich. 
          Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen 
          Bestimmungen unberührt.
        </p>
        
        <p className="legal-note">
          <strong>Rechtsordnung:</strong> Ausschließlich österreichisches Recht. Gerichtsstand: Bregenz, Österreich.
        </p>
      </div>
    </main>
  )
}
