import { Card, CardContent } from '@/app/components/ui/card'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'Miro hat unsere Bestellabwicklung von 4 Stunden täglich auf 20 Minuten automatisiert. Und das war erst der Anfang. Er hat整个流程 neu gedacht und umgesetzt.',
    author: 'Salon Bella Vista',
    role: 'Inhaber',
    location: 'Dornbirn',
  },
  {
    quote: 'Der n8n-Workflow den Miro gebaut hat, läuft seit 8 Monaten ohne ein einziges Problem. Meine Mitarbeiter können sich endlich auf die Gäste konzentrieren.',
    author: 'Restaurant Zum Schatz',
    role: 'Geschäftsführer',
    location: 'Feldkirch',
  },
]

export function Testimonials() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
            Kundenstimmen
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Das sagen meine Kunden
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="relative">
              <CardContent className="p-8">
                <Quote className="w-10 h-10 text-[var(--accent)]/30 mb-4" />
                <blockquote className="text-lg text-[var(--text-primary)] mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-hover)] flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-[var(--text-primary)]">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-[var(--text-secondary)]">
                      {testimonial.role} • {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
