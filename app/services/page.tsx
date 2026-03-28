import Link from 'next/link'
import {
  Globe,
  BotMessageSquare,
  Share2,
  Server,
  Search,
  Mail,
  ShoppingCart,
  CalendarCheck,
  Headphones,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

const services = [
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
    icon: Server,
    title: 'Hosting & Wartung',
    desc: 'Managed Hosting direkt in Österreich — SSL, Updates, Backup und Monitoring inklusive.',
    features: ['Österreichische Server', 'SSL-Zertifikate', 'Automatische Backups', 'Monitoring 24/7', 'Stündliche Updates'],
    price: '€59–89',
    priceNote: '/Monat',
    href: '/kontakt',
  },
  {
    icon: Search,
    title: 'SEO Optimierung',
    desc: 'Auf Platz 1 bei Google — speziell für Vorarlberg und den Bodenseeraum. Lokale SEO, die wirklich Kunden bringt.',
    features: ['Lokale SEO Vorarlberg', 'Google Business Optimierung', 'On-Page SEO', 'Backlink-Aufbau', 'Monatliches Reporting'],
    price: '€79',
    priceNote: '/Monat',
    href: '/kontakt',
  },
  {
    icon: Mail,
    title: 'E-Mail Marketing',
    desc: 'Automatisierte E-Mail Kampagnen — Newsletter, Follow-up Sequences und Lead Nurturing.',
    features: ['Newsletter-Automatisierung', 'Follow-up Sequences', 'Segmentierung', 'A/B-Testing', 'DSGVO-konform'],
    price: '€49',
    priceNote: '/Monat',
    href: '/kontakt',
  },
  {
    icon: Search,
    title: 'Google Ads',
    desc: 'ROI-getrackte Google Ads Kampagnen, die echte Kunden bringen. Pay-per-Click mit transparentem Reporting.',
    features: ['Search & Display Ads', 'Conversion-Tracking', 'ROI-Messung', 'Keyword-Optimierung', 'Monatliches Reporting'],
    price: '€89 + 10%',
    priceNote: 'Management Fee',
    href: '/kontakt',
  },
  {
    icon: ShoppingCart,
    title: 'Online Shop',
    desc: 'E-Commerce mit Shopify oder WooCommerce — von der Einrichtung bis zum Go-Live.',
    features: ['Shopify & WooCommerce', 'Zahlungsanbindung', 'Responsive Design', 'Shopify Schulung', 'laufende Betreuung'],
    price: 'ab €2.490',
    priceNote: '+ €149/Monat',
    href: '/kontakt',
  },
  {
    icon: CalendarCheck,
    title: 'Terminbuchung',
    desc: 'Online-Terminbuchung 24/7 mit Cal.com Integration. Kunden buchen direkt.',
    features: ['Cal.com Integration', '24/7 Online-Buchung', 'Automatische Erinnerungen', 'Kalender-Sync', 'SMS & E-Mail Benachrichtigungen'],
    price: '€49',
    priceNote: '/Monat',
    href: '/kontakt',
  },
  {
    icon: Headphones,
    title: 'IT-Support',
    desc: '24/7 IT-Helpdesk für Ihr Büro — von Software-Problemen bis zur Netzwerkwartung.',
    features: ['24/7 Verfügbarkeit', 'Fernwartung', 'Ticket-System', 'IT-Dokumentation', 'Festpreis oder Retainer'],
    price: '€149',
    priceNote: '/Monat',
    href: '/kontakt',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        <section className="page-hero">
          <div className="container">
            <div className="section-label">Leistungen</div>
            <h1>Was ich für Sie tun kann.</h1>
            <p>
              Complete digitale Lösungen für Vorarlberger KMUs — von der Website
              bis zum KI-Chatbot. Transparent, ehrlich und auf Ihren Erfolg ausgelegt.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="services-grid">
              {services.map((service) => (
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
                      borderTop: '1px solid var(--border)',
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
                          color: 'var(--text-muted)',
                        }}
                      >
                        <CheckCircle2
                          size={13}
                          style={{ color: 'var(--primary)', flexShrink: 0 }}
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
                        <span
                          style={{
                            fontSize: '0.75rem',
                            color: 'var(--text-faint)',
                            marginLeft: '0.25rem',
                          }}
                        >
                          {service.priceNote}
                        </span>
                      )}
                    </div>
                    <Link
                      href={service.href}
                      className="btn btn-secondary btn-sm"
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

        <section className="section">
          <div className="container">
            <div className="cta-section">
              <h2>Sie wissen noch nicht genau, was Sie brauchen?</h2>
              <p>
                Kein Problem. Im kostenlosen Erstgespräch analysiere ich Ihre
                Situation und empfehle die richtigen Lösungen.
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
