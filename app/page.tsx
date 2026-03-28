import Link from 'next/link'
import {
  Globe,
  BotMessageSquare,
  Share2,
  Search,
  ArrowRight,
  Star,
  Zap,
  MapPin,
} from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

const featuredServices = [
  {
    icon: Globe,
    title: 'Website Entwicklung',
    desc: 'Professionelle, DSGVO-konforme Websites für Bregenz KMUs. Schnell, sicher und auf Conversion optimiert.',
    price: '€1.490–4.990',
    href: '/services',
  },
  {
    icon: BotMessageSquare,
    title: 'KI-Chatbot',
    desc: '24/7 Kundenservice mit OpenClaw. Beantwortet 80% der FAQs automatisch — Ihr Team entlastet.',
    price: 'ab €89/Monat',
    href: '/services',
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: 'Instagram, Facebook & TikTok Content & Management. Regelmäßig, professionell, engagement-stark.',
    price: '€99–199/Monat',
    href: '/services',
  },
  {
    icon: Search,
    title: 'SEO Optimierung',
    desc: 'Auf Platz 1 bei Google. Lokal SEO speziell für Vorarlberg und den Bodenseeraum.',
    price: 'ab €79/Monat',
    href: '/services',
  },
]

const stats = [
  { number: '50+', label: 'Websites erstellt' },
  { number: '€2–5K', label: 'Mehrumsatz/Monat' },
  { number: '4.9★', label: 'Kundenzufriedenheit' },
  { number: '24/7', label: 'Support verfügbar' },
]

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="container">
            <div className="hero-inner">
              <div className="animate-fade-in">
                <div className="hero-label">
                  <Zap size={12} />
                  IT-Lösungen für Vorarlberg
                </div>

                <h1>
                  Ihre Website.<br />
                  Automatisiert.<br />
                  Umsatzsteigernd.
                </h1>

                <p className="hero-subtitle">
                  DevMiro baut digitale Lösungen für Bregenzer und Vorarlberger
                  Unternehmen — von professionellen Websites bis hin zu
                  KI-gestützter Kundenkommunikation. Schnell, ehrlich,
                  local.
                </p>

                <div className="hero-ctas">
                  <Link href="/kontakt" className="btn btn-primary btn-lg">
                    Projekt starten
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/services" className="btn btn-secondary btn-lg">
                    Leistungen ansehen
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="section-sm" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES PREVIEW ===== */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">
                <Star size={12} />
                Leistungen
              </div>
              <h2 className="section-title">
                Alles, was Ihr Business<br />online braucht.
              </h2>
              <p className="section-subtitle">
                Von der Website bis zum KI-Chatbot — ich biete complete
                digitale Lösungen für Vorarlberger Unternehmen.
              </p>
            </div>

            <div className="services-grid">
              {featuredServices.map((service) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="service-card"
                >
                  <div className="service-card-icon">
                    <service.icon size={20} />
                  </div>
                  <div>
                    <div className="service-card-title">{service.title}</div>
                    <div className="service-card-desc" style={{ marginTop: '0.5rem' }}>
                      {service.desc}
                    </div>
                  </div>
                  <div className="service-card-price">{service.price}</div>
                  <div className="service-card-link">
                    Mehr erfahren <ArrowRight size={14} />
                  </div>
                </Link>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: 'var(--space-10)' }}>
              <Link href="/services" className="btn btn-secondary">
                Alle Leistungen ansehen
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== ABOUT STRIP ===== */}
        <section className="section" style={{ background: 'var(--surface)' }}>
          <div className="container">
            <div className="about-grid">
              <div>
                <div className="section-label">
                  <MapPin size={12} />
                  Vorarlberg
                </div>
                <h2 className="section-title">
                  Warum local matters.
                </h2>
                <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                  Ich bin in Bregenz zuhause und kenne die Vorarlberger
                  Business-Landschaft aus eigener Erfahrung. Das bedeutet:
                  kurze Kommunikationswege, schnelle Reaktionszeiten und ein
                  Verständnis für die speziellen Anforderungen unserer Region.
                </p>
                <p className="section-subtitle" style={{ maxWidth: '100%', marginTop: 'var(--space-4)' }}>
                  Mein Fokus liegt auf kleinen und mittleren Unternehmen, die
                  online durchstarten wollen — ohne das Budget einer großen
                  Agentur, aber mit dem Anspruch auf professionelle Ergebnisse.
                </p>
                <div style={{ marginTop: 'var(--space-6)' }}>
                  <Link href="/about" className="btn btn-secondary">
                    Mehr über uns
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
                {[
                  { title: 'Schnell & Direkt', desc: 'Keine Callcenter, keine Warteschleifen. Sie sprechen direkt mit mir.' },
                  { title: 'DSGVO-konform', desc: 'Alle Lösungen entsprechen der EU-Datenschutz-Grundverordnung.' },
                  { title: 'Nachhaltige Partnerschaft', desc: 'Ich begleite Sie langfristig — nicht nur beim Projektstart.' },
                ].map((item) => (
                  <div
                    key={item.title}
                    style={{
                      padding: 'var(--space-5)',
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-xl)',
                    }}
                  >
                    <div style={{ fontWeight: 600, color: 'var(--text)', marginBottom: '0.25rem' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="section">
          <div className="container">
            <div className="cta-section">
              <h2>Bereit durchzustarten?</h2>
              <p>
                Erzählen Sie mir von Ihrem Projekt — kostenloses Erstgespräch
                inklusive. Innerhalb von 48 Stunden erhalten Sie ein Angebot.
              </p>
              <Link href="/kontakt" className="btn">
                Projekt starten
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
