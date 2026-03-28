'use client'

import { useEffect, useRef, useState } from 'react'
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
  Sparkles,
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
  { number: 50, suffix: '+', label: 'Websites erstellt' },
  { number: 2, prefix: '€', suffix: '–5K', label: 'Mehrumsatz/Monat' },
  { number: 4.9, suffix: '★', label: 'Kundenzufriedenheit' },
  { number: 24, suffix: '/7', label: 'Support verfügbar' },
]

const benefits = [
  { title: 'Schnell & Direkt', desc: 'Keine Callcenter, keine Warteschleifen. Sie sprechen direkt mit mir.' },
  { title: 'DSGVO-konform', desc: 'Alle Lösungen entsprechen der EU-Datenschutz-Grundverordnung.' },
  { title: 'Nachhaltige Partnerschaft', desc: 'Ich begleite Sie langfristig — nicht nur beim Projektstart.' },
  { title: 'Transparent & Ehrlich', desc: 'Klare Preise, keine versteckten Kosten, regelmäßiges Reporting.' },
]

// 3D Card Tilt Component
function TiltCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const rotateX = ((y - centerY) / centerY) * -8
      const rotateY = ((x - centerX) / centerX) * 8
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
    <div ref={ref} className={className} style={{ transition: 'transform 0.15s ease-out' }}>
      {children}
    </div>
  )
}

// Animated Counter
function AnimatedCounter({ target, prefix = '', suffix = '', duration = 2000 }: {
  target: number; prefix?: string; suffix?: string; duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const start = Date.now()
        const tick = () => {
          const elapsed = Date.now() - start
          const progress = Math.min(elapsed / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          const current = target * eased
          setCount(Number.isInteger(target) ? Math.round(current) : Number(current.toFixed(1)))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return <span ref={ref} className="counter">{prefix}{count}{suffix}</span>
}

// Scroll Reveal Hook
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' })
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

// Mouse Follow Glow
function MouseFollowGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="mouse-follow-glow"
      style={{ left: pos.x, top: pos.y }}
    />
  )
}

// Floating Particles
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 8,
    duration: Math.random() * 6 + 6,
    color: Math.random() > 0.5 ? 'rgba(0,212,255,0.4)' : 'rgba(168,85,247,0.3)',
  }))

  return (
    <div className="hero-bg" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: '-20px',
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

export default function HomePage() {
  useReveal()

  return (
    <>
      <Header />
      <MouseFollowGlow />

      <main>
        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="hero-bg bg-mesh" aria-hidden="true" />
          <div className="hero-bg bg-grid" aria-hidden="true" />

          {/* Floating Orbs */}
          <div className="hero-bg" aria-hidden="true">
            <div className="hero-gradient-orb hero-orb-1" />
            <div className="hero-gradient-orb hero-orb-2" />
            <div className="hero-gradient-orb hero-orb-3" />
          </div>

          <Particles />

          <div className="hero-content container">
            <div className="hero-label">
              <span className="hero-label-dot" />
              IT-Lösungen für Vorarlberg
            </div>

            <h1>
              <span className="line">Ihre Website.</span>
              <span className="line">Automatisiert.</span>
              <span className="line gradient-text">Umsatzsteigernd.</span>
            </h1>

            <p className="hero-subtitle">
              DevMiro baut digitale Lösungen für Bregenzer und Vorarlberger
              Unternehmen — von professionellen Websites bis hin zu
              KI-gestützter Kundenkommunikation. Schnell, ehrlich, local.
            </p>

            <div className="hero-ctas">
              <Link href="/kontakt" className="btn btn-primary btn-lg glow-cyan-sm">
                Projekt starten
                <ArrowRight size={18} />
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg">
                Leistungen ansehen
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="hero-scroll-indicator">
            <div className="scroll-mouse" />
            Scrollen
          </div>
        </section>

        {/* ===== STATS ===== */}
        <section className="section-sm" style={{ background: 'rgba(0,0,0,0.2)', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)' }}>
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`stat-card reveal reveal-delay-${i + 1}`}>
                  <div className="stat-number">
                    <AnimatedCounter
                      target={stat.number}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES PREVIEW ===== */}
        <section className="section">
          <div className="container">
            <div className="section-header reveal" style={{ marginBottom: '3rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
              <div className="section-label" style={{ justifyContent: 'center' }}>
                <Star size={12} />
                Leistungen
              </div>
              <h2 className="section-title" style={{ textAlign: 'center' }}>
                Alles, was Ihr Business<br />
                <span className="gradient-text">online braucht.</span>
              </h2>
              <p className="section-subtitle" style={{ textAlign: 'center', maxWidth: '100%', margin: '0 auto' }}>
                Von der Website bis zum KI-Chatbot — ich biete complete digitale
                Lösungen für Vorarlberger Unternehmen.
              </p>
            </div>

            <div className="services-grid">
              {featuredServices.map((service, i) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className={`service-card reveal reveal-delay-${i + 1}`}
                >
                  <div className="service-card-icon">
                    <service.icon size={22} />
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

            <div style={{ textAlign: 'center', marginTop: '3rem' }} className="reveal">
              <Link href="/services" className="btn btn-secondary btn-lg">
                Alle Leistungen ansehen
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== ABOUT STRIP ===== */}
        <section className="section" style={{ background: 'rgba(255,255,255,0.01)' }}>
          <div className="container">
            <div className="about-grid">
              <div className="reveal">
                <div className="section-label">
                  <MapPin size={12} />
                  Vorarlberg
                </div>
                <h2 className="section-title">
                  Warum <span className="gradient-text-cyan">local</span> matters.
                </h2>
                <p className="section-subtitle" style={{ maxWidth: '100%' }}>
                  Ich bin in Bregenz zuhause und kenne die Vorarlberger
                  Business-Landschaft aus eigener Erfahrung. Das bedeutet:
                  kurze Kommunikationswege, schnelle Reaktionszeiten und ein
                  Verständnis für die speziellen Anforderungen unserer Region.
                </p>
                <p className="section-subtitle" style={{ maxWidth: '100%', marginTop: '1rem' }}>
                  Mein Fokus liegt auf kleinen und mittleren Unternehmen, die
                  online durchstarten wollen — ohne das Budget einer großen
                  Agentur, aber mit dem Anspruch auf professionelle Ergebnisse.
                </p>
                <div style={{ marginTop: '1.5rem' }}>
                  <Link href="/about" className="btn btn-secondary">
                    Mehr über uns
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {benefits.map((item, i) => (
                  <div
                    key={item.title}
                    className={`feature-item reveal reveal-delay-${i + 1}`}
                  >
                    <div className="feature-check">
                      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, color: '#fff', marginBottom: '0.2rem', fontSize: '0.95rem' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>
                        {item.desc}
                      </div>
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
            <div className="cta-section reveal">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <Sparkles size={18} style={{ color: '#a855f7' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#a855f7' }}>
                  Kostenloses Erstgespräch
                </span>
              </div>
              <h2>Bereit durchzustarten?</h2>
              <p>
                Erzählen Sie mir von Ihrem Projekt — kostenloses Erstgespräch
                inklusive. Innerhalb von 48 Stunden erhalten Sie ein Angebot.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', position: 'relative' }}>
                <Link href="/kontakt" className="btn btn-primary btn-lg glow-cyan">
                  Projekt starten
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
