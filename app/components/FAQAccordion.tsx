'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Wie lange dauert ein typisches Projekt?',
    a: 'Business-Pakete sind typischerweise in 2–4 Wochen fertig. Premium-Pakete dauern je nach Umfang 4–8 Wochen.',
  },
  {
    q: 'Kann ich mein Hosting woanders haben?',
    a: 'Ja, wir können Ihre Website auch auf Ihrem eigenen Server deployen. 1 Monat kostenloses Hosting ist aber inklusive.',
  },
  {
    q: 'Was ist im Wartungsvertrag enthalten?',
    a: 'Software-Updates, Security Patches, tägliche Backups, Uptime-Monitoring und EU-Hosting — alles inklusive.',
  },
  {
    q: 'Wie unterscheiden Sie sich von anderen Agenturen?',
    a: 'Fixpreis statt Stundenzettel. Custom Design statt Templates. Transparente Prozesse. Und eine Garantie, die Sie absichert.',
  },
  {
    q: 'Was passiert nach dem Launch?',
    a: 'Sie erhalten 30-60 Tage kostenlosen Support, ein Training für das CMS und wir bieten optionale Wartungsverträge an.',
  },
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item ${openIndex === i ? 'faq-open' : ''}`}>
          <button
            className="faq-summary"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="faq-question">{faq.q}</span>
            <span className="faq-indicator">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" className="faq-line-v" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </button>
          <div className={`faq-answer-wrap ${openIndex === i ? 'open' : ''}`}>
            <p className="faq-answer">{faq.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
