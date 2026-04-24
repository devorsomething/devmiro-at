import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung und Informationen zur Verarbeitung personenbezogener Daten durch DEVMIRO.',
}

export default function DatenschutzPage() {
  return (
    <main className="legal-page">
      <div className="container">
        <h1>Datenschutzerklärung</h1>
        
        <h2>1. Verantwortlicher</h2>
        <p>
          <strong>DEVMIRO</strong><br />
          Inhaber: Timo Miro Gavanelli<br />
          Bregenz, Vorarlberg<br />
          Österreich<br />
          E-Mail: hallo@devmiro.at
        </p>
        
        <h2>2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p>
          Wir erheben personenbezogene Daten nur, wenn Sie uns diese freiwillig mitteilen, z.B. 
          über das Kontaktformular auf unserer Website. Die Daten werden ausschließlich zum Zweck 
          der Bearbeitung Ihrer Anfrage verwendet und nicht ohne Ihre Einwilligung weitergegeben.
        </p>
        
        <h2>3. Kontaktformular</h2>
        <p>
          Wenn Sie uns über das Kontaktformular kontaktieren, werden Ihre Angaben (Name, E-Mail, 
          Unternehmen, Nachricht) zum Zweck der Bearbeitung gespeichert. Diese Daten werden ohne 
          Ihre Einwilligung nicht weitergegeben und nach Abschluss der Bearbeitung gelöscht.
        </p>
        
        <h2>4. Cookies</h2>
        <p>
          Unsere Website verwendet keine Tracking-Cookies oder Analyse-Tools. Es werden nur 
          technisch notwendige Cookies eingesetzt, die für den Betrieb der Website erforderlich sind.
        </p>
        
        <h2>5. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung 
          Ihrer gespeicherten Daten. Zudem können Sie der Verarbeitung widersprechen und eine 
          Datenübertragbarkeit beantragen. Bei Fragen zur Verarbeitung Ihrer Daten kontaktieren 
          Sie uns bitte unter: hallo@devmiro.at
        </p>
        
        <h2>6. Beschwerderecht</h2>
        <p>
          Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt, 
          haben Sie das Recht auf Beschwerde bei einer Datenschutzbehörde. In Österreich ist dies 
          die Datenschutzbehörde: <a href="https://www.dsb.gv.at" target="_blank" rel="noopener noreferrer">www.dsb.gv.at</a>
        </p>
        
        <h2>7. Hosting</h2>
        <p>
          Unsere Website wird auf Servern in Österreich gehostet. Es werden keine Daten an 
          Drittländer übertragen.
        </p>
        
        <p className="legal-note">
          <strong>Rechtsordnung:</strong> Ausschließlich österreichisches Recht. Gerichtsstand: Bregenz, Österreich.
        </p>
      </div>
    </main>
  )
}
