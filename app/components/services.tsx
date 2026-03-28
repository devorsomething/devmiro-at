import { Workflow, Globe, Brain, ShoppingCart } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card'
import { Badge } from '@/app/components/ui/badge'

const services = [
  {
    icon: Workflow,
    title: 'Workflow-Automatisierung',
    description: 'Ich baue Automatisierungen, die 20+ Stunden/Woche sparen.',
    sub: 'n8n, KI-Chatbots, repetitive Tasks eliminieren — Ihr Team kann sich auf das konzentrieren, was wirklich zählt.',
    tag: 'n8n',
    tagVariant: 'default' as const,
  },
  {
    icon: Globe,
    title: 'Web-Entwicklung',
    description: 'Schnelle, performante Webseiten die konvertieren.',
    sub: 'Next.js, Shopify, WordPress — maßgeschneiderte Lösungen, die Aussehen UND Ergebnis liefern.',
    tag: 'Next.js',
    tagVariant: 'secondary' as const,
  },
  {
    icon: Brain,
    title: 'KI-Integration',
    description: 'Intelligente Systeme, die lernen und verbessern.',
    sub: 'OpenAI, Claude, Custom Agents — ich bringe Ihre Systeme zum Denken und Ihre Prozesse auf das nächste Level.',
    tag: 'OpenAI',
    tagVariant: 'outline' as const,
  },
  {
    icon: ShoppingCart,
    title: 'Shopify Development',
    description: 'Ihr Shop, maximal optimiert.',
    sub: 'Custom Themes, Apps, Checkout — ich mache aus Ihrem Shopify-Store eine Conversion-Maschine.',
    tag: 'Shopify',
    tagVariant: 'success' as const,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
            Leistungen
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Was ich für Sie baue
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Von der automatisierten Terminplanung bis zum KI-Chatbot — 
            ich entwickle Lösungen, die Zeit sparen und Ihr Business skalieren.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:border-[var(--accent)]/50 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-[var(--accent)]/10 group-hover:bg-[var(--accent)]/20 transition-colors">
                    <service.icon className="h-6 w-6 text-[var(--accent)]" />
                  </div>
                  <Badge variant={service.tagVariant}>{service.tag}</Badge>
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base text-[var(--text-secondary)]">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--text-secondary)]">
                  {service.sub}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
