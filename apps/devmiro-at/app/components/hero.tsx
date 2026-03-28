import { Button } from '@/app/components/ui/button'

const trustBadges = ['Next.js', 'n8n', 'OpenClaw', 'Shopify', 'Supabase', 'TypeScript']

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#2A2A2E_1px,transparent_1px),linear-gradient(to_bottom,#2A2A2E_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)]" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-hover)]/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-6">
          Developer & Automation Architect • Vorarlberg, Österreich
        </p>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] leading-tight mb-6">
          Arbeit delegieren,<br />
          <span className="text-[var(--accent)]">nicht aufgeben.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
          Ich baue Systeme, die mitdenken — n8n Workflows, KI-Agenten und Web-Apps, 
          die Ihr Business skalieren.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="default" size="lg">
            Kostenloses Erstgespräch
          </Button>
          <Button variant="secondary" size="lg">
            Projekte ansehen
          </Button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {trustBadges.map((badge) => (
            <div
              key={badge}
              className="px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs text-[var(--text-secondary)]"
            >
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[var(--border)] flex justify-center">
          <div className="w-1.5 h-3 bg-[var(--text-secondary)] rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}
