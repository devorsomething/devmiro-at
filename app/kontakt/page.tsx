'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2, Zap } from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

const serviceOptions = [
  'Website Entwicklung',
  'KI-Chatbot',
  'Social Media',
  'Hosting & Wartung',
  'SEO Optimierung',
  'E-Mail Marketing',
  'Google Ads',
  'Online Shop',
  'Terminbuchung',
  'IT-Support',
  'Sonstiges',
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

export default function KontaktPage() {
  useReveal()

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setSubmitted(true)
    setSubmitting(false)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <>
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <section className="page-hero" style={{ position: 'relative', overflow: 'hidden' }}>
          <div className="hero-bg bg-mesh" aria-hidden="true" />
          <div className="hero-bg bg-grid" aria-hidden="true" />
          <div className="hero-gradient-orb" style={{
            width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)',
            bottom: -100, right: -50,
            animation: 'orbFloat 9s ease-in-out infinite',
          }} />

          <div className="container" style={{ position: 'relative', zIndex: 2 }}>
            <div className="hero-label reveal" style={{ animationDelay: '0.1s' }}>
              <span className="hero-label-dot" />
              Kontakt
            </div>
            <h1 className="reveal" style={{ animationDelay: '0.2s' }}>
              Sprechen Sie<br />
              <span className="gradient-text">mit mir.</span>
            </h1>
            <p className="reveal" style={{ animationDelay: '0.3s', maxWidth: '600px' }}>
              Kostenloses Erstgespräch, ehrliche Beratung, unverbindliches
              Angebot. Ich freue mich auf Ihr Projekt.
            </p>
          </div>
        </section>

        {/* ===== CONTACT FORM + INFO ===== */}
        <section className="section">
          <div className="container">
            <div className="about-grid">
              {/* Form */}
              <div className="reveal">
                {submitted ? (
                  <div
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      backdropFilter: 'blur(24px)',
                      border: '1px solid rgba(0,212,255,0.15)',
                      borderRadius: '1.75rem',
                      padding: '3rem',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '1rem',
                    }}
                  >
                    <div style={{
                      width: 72, height: 72,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(0,212,255,0.15) 0%, rgba(168,85,247,0.15) 100%)',
                      border: '1px solid rgba(0,212,255,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <CheckCircle2 size={32} style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <h2 style={{
                      fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: '#fff',
                    }}>
                      Nachricht gesendet!
                    </h2>
                    <p style={{
                      fontSize: '0.95rem',
                      color: 'var(--color-text-muted)',
                      maxWidth: '400px',
                    }}>
                      Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb
                      von 48 Stunden bei Ihnen — versprochen.
                    </p>
                    <Link href="/" className="btn btn-secondary">
                      Zurück zur Startseite
                    </Link>
                  </div>
                ) : (
                  <div style={{
                    background: 'rgba(255,255,255,0.03)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '1.75rem',
                    padding: '2.5rem',
                    position: 'relative',
                    overflow: 'hidden',
                  }}>
                    {/* Top glow line */}
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, right: 0,
                      height: '1px',
                      background: 'linear-gradient(90deg, transparent 0%, rgba(0,212,255,0.4) 50%, transparent 100%)',
                    }} />

                    <h2 style={{
                      fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '2rem',
                    }}>
                      Projektanfrage
                    </h2>

                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Max Mustermann"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email" className="form-label">E-Mail *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="ihre@firma.at"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="company" className="form-label">Firma (optional)</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="Ihre Firma GmbH"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="service" className="form-label">Gewünschte Leistung</label>
                        <select
                          id="service"
                          name="service"
                          value={formState.service}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="">Bitte auswählen...</option>
                          {serviceOptions.map((opt) => (
                            <option key={opt} value={opt}>{opt}</option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="message" className="form-label">Ihre Nachricht *</label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          value={formState.message}
                          onChange={handleChange}
                          className="form-textarea"
                          placeholder="Erzählen Sie mir von Ihrem Projekt..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn btn-primary btn-lg glow-cyan"
                        disabled={submitting}
                        style={{ width: '100%', marginTop: '0.5rem' }}
                      >
                        {submitting ? (
                          <>
                            <span className="spinner" />
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            Nachricht senden
                            <ArrowRight size={16} />
                          </>
                        )}
                      </button>

                      <p style={{
                        fontSize: '0.75rem',
                        color: 'var(--color-text-faint)',
                        marginTop: '0.75rem',
                        textAlign: 'center',
                      }}>
                        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
                        <Link href="/datenschutz" style={{ color: 'var(--color-primary)' }}>
                          Datenschutzerklärung
                        </Link>{' '}
                        zu.
                      </p>
                    </form>
                  </div>
                )}
              </div>

              {/* Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div className="reveal">
                  <h2 style={{
                    fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
                    fontSize: '1.3rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '1.25rem',
                  }}>
                    Oder kontaktieren Sie mich direkt.
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {[
                      {
                        icon: Mail,
                        label: 'E-Mail',
                        value: 'info@devmiro.at',
                        href: 'mailto:info@devmiro.at',
                        isLink: true,
                      },
                      {
                        icon: Phone,
                        label: 'Telefon',
                        value: '+43 664 123 4567',
                        href: 'tel:+436641234567',
                        isLink: true,
                      },
                      {
                        icon: MapPin,
                        label: 'Standort',
                        value: 'Bregenz, Vorarlberg, Österreich',
                        href: null,
                        isLink: false,
                      },
                    ].map((item) => (
                      <a
                        key={item.label}
                        href={item.href || undefined}
                        className="contact-card"
                        style={!item.href ? { cursor: 'default' } : {}}
                      >
                        <div className="contact-card-icon">
                          <item.icon size={18} />
                        </div>
                        <div>
                          <div className="contact-card-label">{item.label}</div>
                          <div className="contact-card-value">{item.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Process Steps */}
                <div
                  className="reveal reveal-delay-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(168,85,247,0.04) 100%)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(0,212,255,0.1)',
                    borderRadius: '1.25rem',
                    padding: '1.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Zap size={16} style={{ color: 'var(--color-primary)' }} />
                    <h3 style={{
                      fontFamily: 'var(--font-space-grotesk), system-ui, sans-serif',
                      fontSize: '1rem',
                      fontWeight: 600,
                      color: '#fff',
                    }}>
                      Was passiert nach Ihrer Anfrage?
                    </h3>
                  </div>
                  <ol style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}>
                    {[
                      'Ich melde mich innerhalb von 48 Stunden',
                      'Kostenloses Erstgespräch (30 Min.)',
                      'Ich erstelle ein unverbindliches Angebot',
                      'Bei Zustimmung: Start innerhalb von 1 Woche',
                    ].map((step, i) => (
                      <li
                        key={i}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          fontSize: '0.875rem',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        <span style={{
                          width: 22,
                          height: 22,
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, rgba(0,212,255,0.2) 0%, rgba(168,85,247,0.2) 100%)',
                          border: '1px solid rgba(0,212,255,0.3)',
                          color: 'var(--color-primary)',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                          marginTop: '1px',
                        }}>
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
