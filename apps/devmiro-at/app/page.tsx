'use client'

import Link from 'next/link'
import {
  Globe,
  BotMessageSquare,
  Workflow,
  ShieldCheck,
  Calendar,
  Share2,
  Cloud,
  Lock,
  Zap,
  Star,
  Rocket,
  TrendingUp,
} from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

// ===== SERVICES DATA =====
const services = [
  {
    icon: Globe,
    title: 'Website Entwicklung',
    desc: 'Professionelle, DSGVO-konforme Websites für Bregenz KMUs. Schnell, sicher, conversion-optimiert.',
    price: '€1.490–4.990',
    recurring: null,
  },
  {
    icon: BotMessageSquare,
    title: 'KI-Chatbot',
    desc: '24/7 Kundenservice mit OpenClaw KI. Beantwortet 80% der FAQs automatisch — Ihr Team wird entlastet.',
    price: '€490–1.490',
    recurring: '+ €79–199/M',
  },
  {
    icon: Workflow,
    title: 'AI-Workflow (n8n)',
    desc: 'Automatisieren Sie wiederkehrende Tasks. E-Mail, CRM, Rechnungsstellung — alles läuft von selbst.',
    price: '€490–1.490',
    recurring: '+ €49–149/M',
  },
  {
    icon: ShieldCheck,
    title: 'DSGVO-Quickcheck',
    desc: 'Ist Ihre Website DSGVO-konform? Wir prüfen alles, fixen es und überwachen es laufend.',
    price: '€290–790',
    recurring: '+ €39/M',
  },
  {
    icon: Lock,
    title: 'Cyber-Security',
    desc: 'SSL, Firewall, Backup, Malware-Schutz. Der Rundum-Schutz für Ihr digitales Business.',
    price: '€390–990',
    recurring: '+ €49–129/M',
  },
  {
    icon: Calendar,
    title: 'Terminbuchung',
    desc: '24/7 online buchen — ohne Telefon. Cal.com Integration für Salons, Restaurants, Praxen.',
    price: '€290–790',
    recurring: '+ €29–79/M',
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: 'Instagram, Facebook & TikTok Content & Management. Regelmäßig, professionell, engagement-stark.',
    price: '€390–690',
    recurring: '+ €39/M',
  },
  {
    icon: Cloud,
    title: 'Cloud-Arbeitsplatz',
    desc: 'Virtueller Desktop für Ihr Team. Von überall arbeiten — sicher, zentral, skalierbar.',
    price: '€790–1.490',
    recurring: '+ €49–99/M',
  },
]

// ===== MARQUEE ITEMS =====
const marqueeItems = [
  { text: 'Website Entwicklung', lime: false },
  { text: 'KI-Chatbot', lime: true },
  { text: 'Workflow Automation', lime: false },
  { text: 'DSGVO-Quickcheck', lime: true },
  { text: 'Cyber-Security', lime: false },
  { text: 'Terminbuchung', lime: true },
  { text: 'Social Media', lime: false },
  { text: 'Cloud-Arbeitsplatz', lime: true },
  { text: 'SEO Optimierung', lime: false },
  { text: '24/7 Support', lime: true },
  { text: 'Website Entwicklung', lime: false },
  { text: 'KI-Chatbot', lime: true },
  { text: 'Workflow Automation', lime: false },
  { text: 'DSGVO-Quickcheck', lime: true },
  { text: 'Cyber-Security', lime: false },
  { text: 'Terminbuchung', lime: true },
  { text: 'Social Media', lime: false },
  { text: 'Cloud-Arbeitsplatz', lime: true },
  { text: 'SEO Optimierung', lime: false },
  { text: '24/7 Support', lime: true },
]

// ===== STATS =====
const stats = [
  { value: 50, suffix: '+', label: 'Websites erstellt' },
  { value: 1000, suffix: '+', label: 'Zufriedene Kunden' },
  { value: 4.9, suffix: '★', label: 'Kundenzufriedenheit', decimal: true },
  { value: 24, suffix: '/7', label: 'Support verfügbar' },
]

// ===== PACKAGES =====
const packages = [
  {
    name: 'Startup Special',
    tagline: 'Der perfekte Start.',
    price: '€990',
    recurring: '+ €49/M',
    featured: false,
    features: [
      'Professionelle Website',
      'Social Media Setup',
      '3 Monate Hosting inkl.',
      'SSL & DSGVO-Basics',
      'E-Mail Setup',
    ],
  },
  {
    name: 'KMU Basis',
    tagline: 'Komplett-Paket für Betriebe.',
    price: '€1.490',
    recurring: '+ €99/M',
    featured: true,
    features: [
      'Professionelle Website',
      'KI-Chatbot für Website',
      'Social Media Betreuung',
      'Digitale Terminbuchung',
      'DSGVO-Quickcheck',
    ],
  },
  {
    name: 'Salon Komplett',
    tagline: 'Alles für Salons & Praxen.',
    price: '€1.290',
    recurring: '+ €79/M',
    featured: false,
    features: [
      'Professionelle Website',
      'Terminbuchung 24/7',
      'Social Media Betreuung',
      'KI-Chatbot für Buchungen',
      'SMS-Erinnerungen',
    ],
  },
  {
    name: 'Restaurant Digital',
    tagline: 'Online-Präsenz für Gastronomen.',
    price: '€1.490',
    recurring: '+ €89/M',
    featured: false,
    features: [
      'Professionelle Website',
      'Online-Bestellsystem',
      'Digitale Terminbuchung',
      'Social Media Betreuung',
      'Google Business Setup',
    ],
  },
]

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="hero-bg">
            <div className="brutal-grid-bg" />
            <div className="hero-shapes" aria-hidden="true">
              <div className="hero-shape hero-shape-1" />
              <div className="hero-shape hero-shape-2" />
              <div className="hero-shape hero-shape-3" />
              <div className="hero-shape hero-shape-4" />
            </div>
          </div>

          <div className="container">
            <div className="hero-content">
              <div className="hero-label">
                <Zap size={11} />
                IT-Lösungen für Vorarlberg
              </div>

              <h1 className="hero-title" aria-label="Ihre digitale Transformation">
                <span className="line-1">IHRE</span>
                <span className="line-2">DIGITALE</span>
                <span className="line-3">TRANSFORMATION</span>
              </h1>

              <p className="hero-subtitle">
                <strong>IT-Lösungen für Vorarlberg.</strong> Schneller. Klüger.
                Billiger als eine Agentur — und mit dem{' '}
                <strong>lokalen Biss</strong>, den KMUs brauchen.
              </p>

              <div className="hero-ctas">
                <button
                  className="hero-cta-main glow-pulse glitch"
                  data-text="PROJEKT STARTEN →"
                  onClick={() => window.location.href = '/kontakt'}
                  aria-label="Projekt starten"
                >
                  PROJEKT STARTEN
                  <span className="arrow">→</span>
                </button>
                <Link href="/services" className="btn btn-secondary btn-lg">
                  Leistungen
                  <span style={{ marginLeft: '0.25rem', opacity: 0.6 }}>↓</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MARQUEE ===== */}
        <div className="marquee-wrapper" aria-hidden="true">
          <div className="marquee-track">
            {marqueeItems.map((item, i) => (
              <span key={i} className={`marquee-item ${item.lime ? 'lime' : ''}`}>
                <span className="dot" />
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* ===== SERVICES SECTION ===== */}
        <section className="services-section" id="services">
          <div className="container">
            <div className="section-header-brutal">
              <div>
                <div className="section-tag">
                  <span className="tag-line" />
                  Leistungen
                </div>
                <h2 className="section-title-brutal">
                  ALLES WAS SIE<br />
                  <span className="accent">BRAUCHEN.</span>
                </h2>
              </div>
              <p className="section-desc-brutal">
                8 Services, die Ihr Business digitalisieren.
                Keine Buzzwords — nur das, was funktioniert.
              </p>
            </div>

            <div className="services-grid-brutal">
              {services.map((service) => (
                <div key={service.title} className="service-card-brutal reveal">
                  <div className="service-icon-brutal">
                    <service.icon size={26} strokeWidth={1.5} />
                  </div>
                  <div className="service-name-brutal">{service.title}</div>
                  <div className="service-desc-brutal">{service.desc}</div>
                  <div className="service-price-brutal">
                    {service.price}
                    <span className="service-price-note-brutal">
                      {service.recurring ? '' : ' einmalig'}
                    </span>
                    {service.recurring && (
                      <div className="service-recurring-brutal">{service.recurring}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Link href="/kontakt" className="btn btn-ghost">
                Unverbindliches Angebot →
              </Link>
            </div>
          </div>
        </section>

        {/* ===== STATS SECTION ===== */}
        <section className="stats-section">
          <div className="stats-mesh-bg" aria-hidden="true" />
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <div className="section-tag" style={{ justifyContent: 'center' }}>
                <span className="tag-line" />
                Die Zahlen
                <span className="tag-line" />
              </div>
            </div>
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item reveal">
                  <div
                    className="stat-number"
                    data-count={stat.value}
                    data-suffix={stat.suffix}
                  >
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY US SECTION ===== */}
        <section className="why-section">
          <div className="container">
            <div className="section-header-brutal" style={{ marginBottom: '0' }}>
              <div>
                <div className="section-tag">
                  <span className="tag-line" />
                  Warum wir
                </div>
                <h2 className="section-title-brutal">
                  SCHNELLER.<br />
                  KLÜGER.<br />
                  <span className="accent">BILLIGER.</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="why-grid" style={{ marginTop: '4rem' }}>
            <div className="why-card reveal">
              <div className="why-icon">
                <Rocket size={28} strokeWidth={1.5} />
              </div>
              <div className="why-title">SCHNELLER</div>
              <p className="why-desc">
                Keine 6-Monats-Projekte. Websites in 2–4 Wochen.
                Chatbots in 1 Woche. Wir liefern, während andere planen.
              </p>
              <span className="why-tag">→ Delivery obsessed</span>
            </div>
            <div className="why-card reveal reveal-delay-1">
              <div className="why-icon">
                <Star size={28} strokeWidth={1.5} />
              </div>
              <div className="why-title">KLÜGER</div>
              <p className="why-desc">
                KI-Workflows, die wirklich funktionieren. Nicht nur ein
                Chatbot, der Hallo sagt — echte Automatisierung, die Zeit spart.
              </p>
              <span className="why-tag">→ AI-first approach</span>
            </div>
            <div className="why-card reveal reveal-delay-2">
              <div className="why-icon">
                <TrendingUp size={28} strokeWidth={1.5} />
              </div>
              <div className="why-title">BILLIGER</div>
              <p className="why-desc">
                30–50% günstiger als eine Agentur. Und trotzdem Full-Service:
                Hosting, Support, Wartung — alles inklusive.
              </p>
              <span className="why-tag">→ No agency markup</span>
            </div>
          </div>
        </section>

        {/* ===== PACKAGES SECTION ===== */}
        <section className="packages-section">
          <div className="container">
            <div className="section-header-brutal">
              <div>
                <div className="section-tag">
                  <span className="tag-line" />
                  Pakete
                </div>
                <h2 className="section-title-brutal">
                  FESTPREIS.<br />
                  <span className="accent">KLARE SACHE.</span>
                </h2>
              </div>
              <p className="section-desc-brutal">
                Keine Überraschungen. Keine versteckten Kosten.
                Was Sie sehen, ist was Sie bezahlen — alles inklusive.
              </p>
            </div>

            <div className="packages-grid-brutal">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`package-card-brutal ${pkg.featured ? 'featured' : ''} reveal`}
                >
                  {pkg.featured && (
                    <div className="package-badge-brutal">★ Beliebt</div>
                  )}
                  <div className="package-name-brutal">{pkg.name}</div>
                  <div className="package-tagline-brutal">{pkg.tagline}</div>
                  <div className="package-price-brutal">
                    {pkg.price}
                    <span className="package-price-note-brutal">/{pkg.recurring}</span>
                  </div>
                  <div className="package-divider-brutal" />
                  <ul className="package-features-brutal">
                    {pkg.features.map((feature) => (
                      <li key={feature}>
                        <span className="check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontakt" className={`btn ${pkg.featured ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                    Anfragen →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className="cta-section-brutal">
          <div className="cta-bg-lines" aria-hidden="true" />
          <div className="container">
            <div className="cta-content">
              <div className="section-tag" style={{ justifyContent: 'center' }}>
                <span className="tag-line" />
                Nächster Schritt
                <span className="tag-line" />
              </div>
              <h2 className="cta-title-brutal">
                BEREIT FÜR DEN<br />
                NÄCHSTEN SCHRITT?
              </h2>
              <p className="cta-subtitle-brutal">
                Kostenloses Erstgespräch. Innerhalb von 48 Stunden
                erhalten Sie ein konkretes Angebot — ohne Verkaufsdruck.
              </p>
              <button
                className="cta-btn-brutal glow-pulse"
                onClick={() => window.location.href = '/kontakt'}
                aria-label="Projekt starten"
              >
                PROJEKT STARTEN →
              </button>
              <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1rem' }}>
                {['info@devmiro.at', '+43 664 123 4567'].map((contact) => (
                  <span
                    key={contact}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.05em',
                    }}
                  >
                    {contact}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
