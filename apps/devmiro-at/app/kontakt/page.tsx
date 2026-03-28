'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight, Check, Sparkles } from 'lucide-react'
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
  'DSGVO & Datenschutz',
  'Sonstiges',
]

const steps = [
  'Ich melde mich innerhalb von 48 Stunden',
  'Kostenloses Erstgespräch (30 Min.)',
  'Ich erstelle ein unverbindliches Angebot',
  'Bei Zustimmung: Start innerhalb von 1 Woche',
]

export default function KontaktPage() {
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
    await new Promise((resolve) => setTimeout(resolve, 1000))
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

        {/* ===== PAGE HERO ===== */}
        <section className="page-hero">
          <div className="page-hero-bg" />
          <div className="container">
            <div className="page-hero-label">
              <Sparkles size={12} />
              Kontakt
            </div>
            <h1>Sprechen Sie mit mir.</h1>
            <p>
              Kostenloses Erstgespräch, ehrliche Beratung, unverbindliches Angebot.
              Ich freue mich auf Ihr Projekt.
            </p>
          </div>
        </section>

        {/* ===== CONTACT CONTENT ===== */}
        <section style={{ padding: 'clamp(5rem, 10vw, 10rem) 0', background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="kontakt-grid">

              {/* FORM */}
              <div>
                {submitted ? (
                  <div style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid rgba(255,255,255,0.05)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '4rem',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1.5rem',
                  }}>
                    <div style={{
                      width: 72, height: 72,
                      borderRadius: '50%',
                      background: 'rgba(212,255,0,0.1)',
                      border: '1px solid rgba(212,255,0,0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--accent)',
                    }}>
                      <Check size={32} />
                    </div>
                    <h2 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2.5rem',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      lineHeight: 1,
                    }}>
                      NACHRICHT GESENDET!
                    </h2>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', maxWidth: '40ch' }}>
                      Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb
                      von 48 Stunden bei Ihnen — versprochen.
                    </p>
                    <Link href="/" className="btn btn-secondary">
                      Zurück zur Startseite
                    </Link>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    style={{
                      background: 'var(--bg-secondary)',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: 'var(--radius-lg)',
                      padding: '3rem',
                    }}
                  >
                    <h2 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      color: 'var(--text-primary)',
                      textTransform: 'uppercase',
                      marginBottom: '2.5rem',
                    }}>
                      Projektanfrage
                    </h2>

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
                      className="btn btn-primary btn-lg"
                      disabled={submitting}
                      style={{ width: '100%', marginTop: '0.5rem', justifyContent: 'center' }}
                    >
                      {submitting ? (
                        'Wird gesendet...'
                      ) : (
                        <>
                          Nachricht senden
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>

                    <p style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-secondary)',
                      marginTop: '1rem',
                      textAlign: 'center',
                    }}>
                      Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten gemäß unserer{' '}
                      <Link href="/datenschutz" style={{ color: 'var(--accent)' }}>
                        Datenschutzerklärung
                      </Link>{' '}
                      zu.
                    </p>
                  </form>
                )}
              </div>

              {/* CONTACT INFO */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <div>
                  <h2 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.8rem',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                  }}>
                    Oder direkt kontaktieren.
                  </h2>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { icon: Mail, label: 'E-Mail', value: 'info@devmiro.at', href: 'mailto:info@devmiro.at' },
                      { icon: Phone, label: 'Telefon', value: '+43 664 123 4567', href: 'tel:+436641234567' },
                      { icon: MapPin, label: 'Standort', value: 'Bregenz, Vorarlberg, Österreich', href: null },
                    ].map((item) => (
                      <div key={item.label} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                        padding: '1.25rem',
                        background: 'var(--bg-secondary)',
                        border: '1px solid rgba(255,255,255,0.05)',
                        borderRadius: 'var(--radius-lg)',
                      }}>
                        <div style={{
                          width: 44, height: 44,
                          borderRadius: 'var(--radius)',
                          background: 'rgba(212,255,0,0.05)',
                          border: '1px solid rgba(212,255,0,0.12)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent)',
                          flexShrink: 0,
                        }}>
                          <item.icon size={18} />
                        </div>
                        <div>
                          <div style={{
                            fontSize: '0.65rem',
                            color: 'var(--text-muted)',
                            marginBottom: '0.2rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            fontFamily: 'var(--font-mono)',
                            fontWeight: 700,
                          }}>
                            {item.label}
                          </div>
                          {item.href ? (
                            <a href={item.href} style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                              {item.value}
                            </a>
                          ) : (
                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                              {item.value}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  background: 'rgba(212,255,0,0.03)',
                  border: '1px solid rgba(212,255,0,0.1)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2.5rem',
                }}>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    marginBottom: '1.5rem',
                  }}>
                    Was passiert nach Ihrer Anfrage?
                  </h3>
                  <ol style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.25rem',
                  }}>
                    {steps.map((step, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '1rem',
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                      }}>
                        <span style={{
                          width: 24, height: 24,
                          borderRadius: '50%',
                          background: 'var(--accent)',
                          color: '#000',
                          fontSize: '0.7rem',
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
