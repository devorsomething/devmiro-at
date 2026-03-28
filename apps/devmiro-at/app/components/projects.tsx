import { Badge } from '@/app/components/ui/badge'
import { Card, CardContent } from '@/app/components/ui/card'

const projects = [
  {
    title: 'Salon-Management App',
    description: 'Automatisierte Terminplanung + Erinnerungen für 3 Salons in Vorarlberg.',
    result: '95% weniger No-Shows',
    tags: ['n8n', 'WhatsApp', 'KI'],
    gradient: 'from-blue-600 to-purple-600',
  },
  {
    title: 'Restaurant Lieferando Integration',
    description: 'n8n-Workflow für automatische Bestellannahme, Küchenanzeige und Lieferando-Verwaltung.',
    result: '4h → 20min täglich',
    tags: ['n8n', 'Lieferando', 'Automatisierung'],
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'KI-Chatbot für Dienstleister',
    description: 'Round-the-clock Kundenservice mit OpenAI + WhatsApp-Integration.',
    result: '24/7 Verfügbarkeit',
    tags: ['OpenAI', 'WhatsApp', 'KI'],
    gradient: 'from-green-500 to-teal-500',
  },
]

export function Projects() {
  return (
    <section id="projekte" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
            Projekte
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Was ich bereits gebaut habe
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Hier sind einige meiner letzten Projekte — von kompletten Automatisierungen 
            bis hin zu maßgeschneiderten Web-Lösungen.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden group">
              {/* Screenshot Placeholder */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-80 group-hover:opacity-100 transition-opacity`}>
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white/50 text-sm font-mono">
                    {project.title}
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4">
                  {project.description}
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--cta)]/10 text-[var(--cta)] text-sm font-medium">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {project.result}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
