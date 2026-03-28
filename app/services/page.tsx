'use client'

import { useEffect, useRef, useState } from 'react'
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
  ChevronDown,
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
    popular: false,
  },
  {
    icon: BotMessageSquare,
    title: 'KI-Chatbot & Automatisierung',
    desc: '24/7 Kundenservice mit OpenClaw KI. Beantwortet 80% der Fragen automatisch und qualifiziert Leads für Ihr Vertriebsteam.',
    features: ['OpenClaw KI-Engine', '24/7 Verfügbarkeit', '80% Automatisierung', 'WhatsApp & Web', 'CRM-Integration'],
    price: '€89',
    priceNote: '/Monat',
    href: '/kontakt',
    popular: true,
  },
  {
    icon: Share2,
    title: 'Social Media',
    desc: 'Instagram, Facebook und TikTok Content & Management. Regelmäßig, professionell und engagement-stark.',
    features: ['Instagram & Facebook', 'TikTok Reels', 'Content-Erstellung', 'Engagement-Management', 'Monthly Reporting'],
    price: '€99–199',
    priceNote: '/Monat',
    href: '/kontakt',
    popular: false,
  },
  {
    icon: Server,
    title: 'Hosting & Wartung',
    desc: 'Managed Hosting direkt in Österreich — SSL, Updates, Backup und Monitoring inklusive.',
    features: ['Österreichische Server', 'SSL-Zertifikate', 'Automatische Backups', 'Monitoring 24/7', 'Stündliche Updates'],
    price: '€59–89',
    priceNote: '/Monat',
    href: '/kontakt',
    popular: false,
  },
  {
    icon: Search,
    title: 'SEO Optimierung',
    desc: 'Auf Platz 1 bei Google — speziell für Vorarlberg und den Bodenseeraum. Lokale SEO, die wirklich Kunden bringt.',
    features: ['Lokale SEO Vorarlberg', 'Google Business Optimierung', 'On-Page SEO', 'Backlink-Aufbau', 'Monatliches Reporting'],
    price: '€79',
    priceNote: '/Monat',
    href: '/kontakt',
    popular: false,
  },
  {
    icon: Mail,
    title: 'E-Mail Marketing',
    desc: 'Automatisierte E-Mail Kampagnen — Newsletter, Follow-up Sequences und Lead Nurturing.',
    features: ['Newsletter-Automatisierung', 'Follow-up Sequences', 'Segmentierung', 'A/B-Testing', 'DSGVO-konform'],
    price: '€49',
    priceNote: '/Monat',
    href: '/kontakt',
    popular: false,
  },
  {
    icon: Search,
    title: 'Google Ads',
    desc: 'ROI-getrackte Google Ads Kampagnen, die echte Kunden bringen. Pay-per-Click mit transparentem Reporting.',
    features: ['Search & Display Ads', 'Conversion-Tracking', 'ROI-Messung', 'Keyword-Optimierung', 'Monatliches Reporting'],
    price: '€89 + 10%',
    priceNote: 'Management Fee',
    href: '/kontakt',
    popular: false,
  },
  {
    icon: ShoppingCart,
    title: 'Online Shop',
    desc: 'E-Commerce mit Shopify oder WooCommerce — von der Einrichtung bis zum Go-Live.',
    features: ['Shopify & WooCommerce', 'Zahlungsanbindung', 'Responsive Design', 'Shopify Schulung', 'laufende Betreuung'],
    price: 'ab €2.490',
    priceNote: '+ €149/Monat',
    href: '/kontakt',
    popular: false,
  },
  {
    icon: CalendarCheck,
    title: 'Terminbuchung',
    desc: 'Online-Terminbuchung 24/7 mit Cal.com Integration. Kunden buchen direkt.',
    features: ['Cal.com Integration', '24/7 Online-Buchung', 'Automatische Erinnerungen', 'Kalender-Sync', 'SMS & E-Mail Benachrichtigungen'],
    price: '€49',
    priceNote: '/Monat',
    href: '/kontakt',
    popular: false,
  },
  {
    icon: Headphones,
    title: 'IT-Support',
    desc: '24/7 IT-Helpdesk für Ihr Büro — von Software-Problemen bis zur Netzwerkwartung.',
    features: ['24/7 Verfügbarkeit', 'Fernwartung', 'Ticket-System', 'IT-Dokumentation', 'Festpreis oder Retainer'],
    price: '€149',
    priceNote: '/Monat',
    href: '/kontakt',
    popular: false,
  },
]

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function ServiceCard3D({ service, index }: { service: typeof services[0]; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el || window.innerWidth < 768) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -6
      const rotateY = ((x - centerX) / centerX) * 6
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`
    }

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)'
    }

    el.addEventListener('mousemove', handleMouseMove)
    el.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      el.removeEventListener('mousemove', handleMouseMove)
      el.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`service-card reveal reveal-delay-${(index % 4) + 1}`}
      style={{ transition: 'transform 0.12s ease-out' }}
    >
      {service.popular && (
        <div style={{
          position: 'absolute',
          top: '-1px',
          right: '1.5rem',
          background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
          color: '#fff',
          fontSize: '0.65rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          padding: '0.25rem 0.75rem',
          borderRadius: '0 0 0.5rem 0.5rem',
          boxShadow: '0 4px 12px rgba(168, 85, 247, 0.4)',
        }}>
          Beliebt
        </div>
      )}

      <div className="service-card-icon">
        <service.icon size={22} />
      </div>

      <div>
        <div className="service-card-title">{service.title}</div>
        <div className="service-card-desc" style={{ marginTop: '0.5rem' }}>
          {service.desc}
        </div>
      </div>

      <button
        onClick={() => setExpanded(!expanded)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontSize: '0.8rem',
          fontWeight: 600,
          color: 'var(--color-primary)',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          marginTop: '0.25rem',
          transition: 'all 0.2s',
        }}
      >
        {expanded ? 'Weniger anzeigen' : 'Features anzeigen'}
        <ChevronDown
          size={14}
          style={{
            transition: 'transform 0.3s',
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      <div
        className="accordion-content"
        style={{ maxHeight: expanded ? '300px' : '0px' }}
      >
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          paddingTop: '0.75rem',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}>
          {service.features.map((feature) => (
            <div
              key={feature}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                color: 'var(--color-text-muted)',
              }}
            >
              <CheckCircle2 size={12} style={{ color: 'var(--color-primary)', flexShrink: 0 }} />
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'baseline',
        justifyContent: 'space-between',
        marginTop: 'auto',
        paddingTop: '1rem',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div>
          <span className="service-card-price">{service.price}</span>
          {service.priceNote && (
            <span style={{ fontSize: '0.75rem', color: 'var(--color-text-faint)', marginLeft: '0.3rem' }}>
              {service.priceNote}
            </span>
          )}
        </div>
        <Link
          href={service.href}
          className="btn btn-primary btn-sm"
        >
          Anfragen
          <ArrowRight size={12} />
        </Link>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  useReveal()

  return (
    <>
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <section className="page-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="hero-bg bg-mesh" aria-hidden="true" />
          <div className="hero-bg bg-grid" aria-hidden="true" />
          <div className="hero-gradient-orb" style={{
            width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
            top: -100, right: -100,
            animation: 'orbFloat 8s ease-in-out infinite',
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-label reveal" style={{ animationDelay: '0.1s' }}>
              <span className="hero-label-dot" />
              Unsere Leistungen
            </div>
            <h1 className="reveal" style={{ animationDelay: '0.2s' }}>
              Was ich für<br />
              <span className="gradient-text">Sie tun kann.</span>
            </h1>
            <p className="reveal" style={{ animationDelay: '0.3s', maxWidth: '600px' }}>
              Complete digitale Lösungen für Vorarlberger KMUs — von der Website
              bis zum KI-Chatbot. Transparent, ehrlich und auf Ihren Erfolg ausgelegt.
            </p>
          </div>
        </section>

        {/* ===== SERVICES GRID ===== */}
        <section className="section">
          <div className="container">
            <div className="services-grid">
              {services.map((service, i) => (
                <ServiceCard3D key={service.title} service={service} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="section" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta-section reveal">
              <h2>Sie wissen noch nicht genau, was Sie brauchen?</h2>
              <p>
                Kein Problem. Im kostenlosen Erstgespräch analysiere ich Ihre
                Situation und empfehle die richtigen Lösungen.
              </p>
              <Link href="/kontakt" className="btn btn-primary btn-lg glow-cyan">
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
