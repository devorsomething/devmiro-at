import Link from 'next/link'
import {
  Workflow,
  ShieldCheck,
  Lock,
  Calendar,
  MessageCircle,
  Share2,
  FileText,
  Cloud,
  Zap,
  Globe,
  BotMessageSquare,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

const services = [
  {
    icon: Workflow,
    title: 'AI-Workflow-Automatisierung',
    subtitle: 'mit n8n',
    desc: 'Wiederkehrende Aufgaben automatisieren. E-Mail-Workflows, Lead-Management, Rechnungsstellung — alles automatisch.',
    features: [
      'n8n Workflow-Automatisierung',
      'E-Mail & Lead-Management',
      'CRM-Integration',
      'Automatische Rechnungsstellung',
      'Individuelle Trigger & Actions',
    ],
    price: '€490–1.490',
    priceNote: 'einmalig',
    priceRecurring: '+ €49–149/Monat',
    href: '/kontakt',
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: 'DSGVO-Quickcheck',
    subtitle: 'Rechtlich abgesichert',
    desc: 'Ist Ihre Website DSGVO-konform? Wir prüfen und fixen alles — inklusive Cookie-Banner und Datenschutzerklärung.',
    features: [
      'Vollständiger DSGVO-Audit',
      'Cookie-Banner Integration',
      'Datenschutzerklärung',
      'Impressum-Prüfung',
      'laufende Compliance-Überwachung',
    ],
    price: '€290–790',
    priceNote: 'einmalig',
    priceRecurring: '+ €39/Monat',
    href: '/kontakt',
    highlight: false,
  },
  {
    icon: Lock,
    title: 'Cyber-Security Basis-Paket',
    subtitle: 'Rundum-Schutz',
    desc: 'SSL, Firewall, Backup, Malware-Schutz. Der Rundum-Schutz für Ihr digitales Business.',
    features: [
      'SSL-Zertifikat & Firewall',
      'Automatische Backups',
      'Malware-Scanning',
      'Security-Monitoring 24/7',
      'Incident Response',
    ],
    price: '€390–990',
    priceNote: 'einmalig',
    priceRecurring: '+ €49–129/Monat',
    href: '/kontakt',
    highlight: false,
  },
  {
    icon: Calendar,
    title: 'Digitale Terminbuchung',
    subtitle: 'Cal.com Integration',
    desc: '24/7 online buchen — ohne Telefon. Cal.com Integration für Salons, Restaurants, Praxen.',
    features: [
      'Cal.com Integration',
      '24/7 Online-Buchung',
      'Automatische Erinnerungen',
      'Kalender-Synchronisierung',
      'SMS & E-Mail Benachrichtigungen',
    ],
    price: '€290–790',
    priceNote: 'einmalig',
    priceRecurring: '+ €29–79/Monat',
    href: '/kontakt',
    highlight: false,
  },
  {
    icon: MessageCircle,
    title: 'KI-Chatbot für Website',
    subtitle: '24/7 Mitarbeiter',
    desc: 'Der 24/7 Mitarbeiter, der nie schläft. Beantwortet Fragen, nimmt Buchungen an, qualifiziert Leads.',
    features: [
      'OpenClaw KI-Engine',
      '24/7 Verfügbarkeit',
      'Buchungs-Integration',
      'Lead-Qualifizierung',
      'WhatsApp & Web',
    ],
    price: '€490–1.490',
    priceNote: 'einmalig',
    priceRecurring: '+ €79–199/Monat',
    href: '/kontakt',
    highlight: false,
  },
  {
    icon: Share2,
    title: 'Social Media Setup & Betreuung',
    subtitle: 'Instagram, Facebook & mehr',
    desc: 'Instagram, Facebook, Google Business — professionell aufgesetzt und betreut.',
    features: [
      'Instagram & Facebook Setup',
      'Google Business Optimierung',
      'Content-Erstellung',
      'Engagement-Management',
      'Monatliches Reporting',
    ],
    price: '€390–690',
    priceNote: 'einmalig',
    priceRecurring: '+ €39/Monat',
    href: '/kontakt',
    highlight: false,
  },
  {
    icon: FileText,
    title: 'Angebots-Automatisierung',
    subtitle: 'Für Handwerk & Dienstleister',
    desc: 'Angebote in 2 Minuten statt 2 Stunden. Für Handwerker, Dienstleister — mit Produktkatalog.',
    features: [
      'Schnellangebot in 2 Min.',
      'Professioneller Produktkatalog',
      'PDF-Generierung',
      'Kundendatenbank',
      'E-Mail Versand direkt',
    ],
    price: '€390–890',
    priceNote: 'einmalig',
    priceRecurring: '+ €39–89/Monat',
    href: '/kontakt',
    highlight: false,
  },
  {
    icon: Cloud,
    title: 'Cloud-Arbeitsplatz',
    subtitle: 'DaaS — Virtueller Desktop',
    desc: 'Virtueller Desktop für Ihr Team. Von überall arbeiten — sicher, zentral, skalierbar.',
    features: [
      'Virtueller Windows-Desktop',
      'Von überall Zugriff',
      'Zentrale Datenverwaltung',
      'Hohe Sicherheitsstandards',
      'Skalierbar pro User',
    ],
    price: '€790–1.490',
    priceNote: 'einmalig',
    priceRecurring: '+ €49–99/User/Monat',
    href: '/kontakt',
    highlight: false,
  },
]

const packages = [
  {
    name: 'Startup Special',
    price: '€990',
    priceRecurring: '+ €49/Monat',
    tagline: 'Der perfekte Start.',
    features: [
      'Professionelle Website',
      'Social Media Setup',
      '3 Monate Hosting inkl.',
      'SSL & DSGVO-Basics',
      'E-Mail Setup',
    ],
    highlight: false,
  },
  {
    name: 'KMU Basis',
    price: '€1.490',
    priceRecurring: '+ €99/Monat',
    tagline: 'Komplett-Paket für Betriebe.',
    features: [
      'Professionelle Website',
      'KI-Chatbot für Website',
      'Social Media Betreuung',
      'Digitale Terminbuchung',
      'DSGVO-Quickcheck',
    ],
    highlight: true,
  },
  {
    name: 'Salon Komplett',
    price: '€1.290',
    priceRecurring: '+ €79/Monat',
    tagline: 'Alles für Salons & Praxen.',
    features: [
      'Professionelle Website',
      'Terminbuchung 24/7',
      'Social Media Betreuung',
      'KI-Chatbot für Buchungen',
      'SMS-Erinnerungen',
    ],
    highlight: false,
  },
  {
    name: 'Restaurant Digital',
    price: '€1.490',
    priceRecurring: '+ €89/Monat',
    tagline: 'Online-Präsenz für Gastronomen.',
    features: [
      'Professionelle Website',
      'Online-Bestellsystem',
      'Digitale Terminbuchung',
      'Social Media Betreuung',
      'Google Business Setup',
    ],
    highlight: false,
  },
]

const classicServices = [
  {
    icon: Globe,
    title: 'Website Entwicklung',
    desc: 'Professionelle Websites für Bregenz KMUs — modern, schnell und DSGVO-konform. Mit Next.js und React für beste Performance und SEO.',
    features: ['Responsive Design', 'DSGVO-konform', 'SEO-optimiert', 'SSL inklusive', 'Wartung & Support'],
    price: '€1.490–4.990',
    priceNote: 'einmalig',
    href: '/kontakt',
  },
  {
    icon: BotMessageSquare,
    title: 'KI-Chatbot',
    desc: '24/7 Kundenservice mit OpenClaw KI. Beantwortet 80% der Fragen automatisch und qualifiziert Leads für Ihr Vertriebsteam.',
    features: ['OpenClaw KI-Engine', '24/7 Verfügbarkeit', '80% Automatisierung', 'WhatsApp & Web', 'CRM-Integration'],
    price: '€89',
    priceNote: '/Monat',
    href: '/kontakt',
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: 'Instagram, Facebook und TikTok Content & Management. Regelmäßig, professionell und engagement-stark.',
    features: ['Instagram & Facebook', 'TikTok Reels', 'Content-Erstellung', 'Engagement-Management', 'Monthly Reporting'],
    price: '€99–199',
    priceNote: '/Monat',
    href: '/kontakt',
  },
  {
    icon: Cloud,
    title: 'Hosting & Wartung',
    desc: 'Managed Hosting direkt in Österreich — SSL, Updates, Backup und Monitoring inklusive.',
    features: ['Österreichische Server', 'SSL-Zertifikate', 'Automatische Backups', 'Monitoring 24/7', 'Stündliche Updates'],
    price: '€59–89',
    priceNote: '/Monat',
    href: '/kontakt',
  },
  {
    icon: Calendar,
    title: 'Terminbuchung',
    desc: 'Online-Terminbuchung 24/7 mit Cal.com Integration. Kunden buchen direkt, Sie sparen Zeit bei der Koordination.',
    features: ['Cal.com Integration', '24/7 Online-Buchung', 'Automatische Erinnerungen', 'Kalender-Sync', 'SMS & E-Mail Benachrichtigungen'],
    price: '€49',
    priceNote: '/Monat',
    href: '/kontakt',
  },
  {
    icon: ShieldCheck,
    title: 'SEO Optimierung',
    desc: 'Auf Platz 1 bei Google — speziell für Vorarlberg und den Bodenseeraum. Lokale SEO, die wirklich Kunden bringt.',
    features: ['Lokale SEO Vorarlberg', 'Google Business Optimierung', 'On-Page SEO', 'Backlink-Aufbau', 'Monatliches Reporting'],
    price: '€79',
    priceNote: '/Monat',
    href: '/kontakt',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* ===== PAGE HERO ===== */}
        <section className="page-hero">
          <div className="hero-bg-glow" />
          <div className="container">
            <div className="section-label">
              <Sparkles size={12} />
              Leistungen
            </div>
            <h1>Digitale Lösungen für<br />Vorarlberger Unternehmen.</h1>
            <p>
              Von der automatisierten Website bis zum KI-Chatbot — ich biete
              moderne IT-Dienstleistungen, die echten Mehrwert schaffen.
              Transparent, ehrlich und auf den Vorarlberger Markt zugeschnitten.
            </p>
          </div>
        </section>

        {/* ===== NEW SERVICES ===== */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">
                <Zap size={12} />
                Neu & Beliebt
              </div>
              <h2 className="section-title">
                Innovative Services für<br />moderne Unternehmen.
              </h2>
              <p className="section-subtitle">
                Automatisierung, KI und Security — aktuelle Technologien,
                die Ihr Business voranbringen.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => (
                <div key={service.title} className="service-card service-card--new">
                  <div className="service-card-badge">
                    <service.icon size={14} />
                    {service.subtitle}
                  </div>

                  <div className="service-card-icon-lg">
                    <service.icon size={28} />
                  </div>

                  <div>
                    <div className="service-card-title">{service.title}</div>
                    <div className="service-card-desc" style={{ marginTop: 'var(--space-2)' }}>
                      {service.desc}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-1)',
                      paddingTop: 'var(--space-3)',
                      borderTop: '1px solid var(--color-border)',
                    }}
                  >
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-2)',
                          fontSize: '0.8rem',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        <CheckCircle2
                          size={13}
                          style={{ color: 'var(--color-primary)', flexShrink: 0 }}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      marginTop: 'auto',
                      paddingTop: 'var(--space-3)',
                    }}
                  >
                    <div className="service-price-block">
                      <div>
                        <span className="service-card-price">{service.price}</span>
                        <span className="service-price-note"> {service.priceNote}</span>
                      </div>
                      {service.priceRecurring && (
                        <div className="service-price-recurring">{service.priceRecurring}</div>
                      )}
                    </div>
                    <Link
                      href={service.href}
                      className="btn btn-secondary btn-sm"
                      style={{ width: '100%', justifyContent: 'center', marginTop: 'var(--space-3)' }}
                    >
                      Anfragen
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PACKAGES ===== */}
        <section className="section" style={{ background: 'var(--color-surface-offset)' }}>
          <div className="container">
            <div className="section-header">
              <div className="section-label">
                <Sparkles size={12} />
                Pakete
              </div>
              <h2 className="section-title">
                Komplett-Pakete zum Festpreis.
              </h2>
              <p className="section-subtitle">
                Alles, was Sie brauchen — zu einem transparenten Preis.
                Sofort loslegen, monatlich skalieren.
              </p>
            </div>

            <div className="packages-grid">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`package-card ${pkg.highlight ? 'package-card--featured' : ''}`}
                >
                  {pkg.highlight && (
                    <div className="package-badge">Beliebt</div>
                  )}
                  <div className="package-name">{pkg.name}</div>
                  <div className="package-tagline">{pkg.tagline}</div>
                  <div className="package-price-block">
                    <span className="package-price">{pkg.price}</span>
                    <span className="package-price-note">{pkg.priceRecurring}</span>
                  </div>
                  <div className="package-divider" />
                  <ul className="package-features">
                    {pkg.features.map((feature) => (
                      <li key={feature}>
                        <CheckCircle2 size={14} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontakt" className={`btn ${pkg.highlight ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                    style={{ width: '100%', justifyContent: 'center', marginTop: 'auto' }}>
                    Paket anfragen
                    <ArrowRight size={13} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CLASSIC SERVICES ===== */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <div className="section-label">
                <Globe size={12} />
                Klassische Services
              </div>
              <h2 className="section-title">
                Bewährte Lösungen für<br />Ihren Online-Auftritt.
              </h2>
              <p className="section-subtitle">
                Website, Shop, Hosting — alles aus einer Hand,
                mit persönlichem Support.
              </p>
            </div>

            <div className="services-grid">
              {classicServices.map((service) => (
                <div key={service.title} className="service-card">
                  <div className="service-card-icon">
                    <service.icon size={22} />
                  </div>

                  <div>
                    <div className="service-card-title">{service.title}</div>
                    <div className="service-card-desc" style={{ marginTop: 'var(--space-2)' }}>
                      {service.desc}
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-1)',
                      paddingTop: 'var(--space-3)',
                      borderTop: '1px solid var(--color-border)',
                    }}
                  >
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-2)',
                          fontSize: '0.8rem',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        <CheckCircle2
                          size={13}
                          style={{ color: 'var(--color-primary)', flexShrink: 0 }}
                        />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'baseline',
                      justifyContent: 'space-between',
                      marginTop: 'auto',
                      paddingTop: 'var(--space-3)',
                    }}
                  >
                    <div>
                      <span className="service-card-price">{service.price}</span>
                      {service.priceNote && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)', marginLeft: '0.25rem' }}>
                          {service.priceNote}
                        </span>
                      )}
                    </div>
                    <Link href={service.href} className="btn btn-secondary btn-sm">
                      Anfragen
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="section">
          <div className="container">
            <div className="cta-section">
              <h2>Sie wissen noch nicht genau, was Sie brauchen?</h2>
              <p>
                Kein Problem. Im kostenlosen Erstgespräch analysiere ich Ihre
                Situation und empfehle die richtigen Lösungen — ohne
                Verkaufsdruck.
              </p>
              <Link href="/kontakt" className="btn">
                Kostenloses Erstgespräch
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
