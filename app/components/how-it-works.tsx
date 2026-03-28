import { Search, Lightbulb, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Audit',
    description: 'Wir analysieren Ihre aktuellen Prozesse und finden die größten Zeitfresser.',
  },
  {
    number: '02',
    icon: Lightbulb,
    title: 'Konzept',
    description: 'Ich erstelle einen maßgeschneiderten Automatisierungs-Plan mit klaren Meilensteinen.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Umsetzung',
    description: 'Ich baue und deploye die Lösung — Sie zahlen nur für Ergebnisse.',
  },
]

export function HowItWorks() {
  return (
    <section id="ueber-mich" className="py-24 px-4 sm:px-6 lg:px-8 bg-[var(--surface)]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
            So arbeiten wir zusammen
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            In drei Schritten zum Ziel
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Transparenz und klare Kommunikation stehen bei mir an erster Stelle — 
            von der ersten Analyse bis zum fertigen System.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.title} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px bg-[var(--border)]" />
              )}
              
              <div className="flex flex-col items-center text-center">
                <div className="relative flex items-center justify-center w-24 h-24 rounded-full border-2 border-[var(--border)] bg-[var(--background)] mb-6">
                  <step.icon className="h-10 w-10 text-[var(--accent)]" />
                  <span className="absolute -top-3 -right-3 text-xs font-bold text-[var(--accent)] bg-[var(--background)] px-2 py-1 rounded">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] max-w-xs">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
