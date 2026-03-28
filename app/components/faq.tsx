'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app/components/ui/accordion'

const faqs = [
  {
    question: 'Was kostet eine Automatisierung?',
    answer: 'Das hängt vom Umfang ab. Kleinere Workflows starten bei €500, komplexere Systeme bei €2.000. Individuelle Angebote erstelle ich nach einem kostenlosen Erstgespräch.',
  },
  {
    question: 'Wie long dauert ein typisches Projekt?',
    answer: 'Kleine Projekte: 1-2 Wochen. Mittlere: 4-6 Wochen. Große: 2-3 Monate. Ich arbeite transparent und halte Sie während des gesamten Prozesses auf dem Laufenden.',
  },
  {
    question: 'Ich brauche kein neues Web — nur bessere Prozesse.',
    answer: 'Perfekt. Ich biete auch reine Workflow-Audits und Optimierungen an, ohne Web-Entwicklung. Oft reicht eine gute Automatisierung, um 10+ Stunden pro Woche zu sparen.',
  },
  {
    question: 'Was passiert wenn etwas kaputt geht?',
    answer: 'Ich biete 30 Tage Gratissupport nach Deployment. Danach optionaler Wartungsvertrag mit garantierten Reaktionszeiten. Ich bin per E-Mail, Telefon und WhatsApp erreichbar.',
  },
  {
    question: 'Ich bin in Österreich — funktioniert das auch mit österreichischen Tools?',
    answer: 'Ja. Ich kenne mich mit österreichischen Kassensystemen, Lieferando, RAIBA-Nexus und lokalen KMU-Tools aus. Ihr Standort ist kein Problem.',
  },
]

export function FAQ() {
  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--surface)]">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Häufig gestellte Fragen
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-[var(--text-primary)] hover:text-[var(--accent)]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[var(--text-secondary)]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
