'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react'
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
          <div className="container">
            <div className="section-label">Kontakt</div>
            <h1>Sprechen Sie mit mir.</h1>
            <p>
              Kostenloses Erstgespräch, ehrliche Beratung, unverbindliches
              Angebot. Ich freue mich auf Ihr Projekt.
            </p>
          </div>
        </section>

        {/* ===== CONTACT CONTENT ===== */}
        <section className="section">
          <div className="container">
            <div className="about-grid">
              {/* Contact Form */}
              <div>
                {submitted ? (
                  <div
                    style={{
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-2xl)',
                      padding: 'var(--space-10)',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: 'var(--space-4)',
                    }}
                  >
                    <CheckCircle2
                      size={48}
                      style={{ color: 'var(--primary)' }}
                    />
                    <h2
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.5rem',
                        fontWeight: 400,
                        color: 'var(--text)',
                      }}
                    >
                      Nachricht gesendet!
                    </h2>
                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-muted)',
                        maxWidth: '400px',
                      }}
                    >
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
                      background: 'var(--surface)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius-2xl)',
                      padding: 'var(--space-8)',
                    }}
                  >
                    <h2
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.4rem',
                        fontWeight: 400,
                        color: 'var(--text)',
                        marginBottom: 'var(--space-6)',
                      }}
                    >
                      Projektanfrage
                    </h2>

                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Name *
                      </label>
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
                      <label htmlFor="email" className="form-label">
                        E-Mail *
                      </label>
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
                      <label htmlFor="company" className="form-label">
                        Firma (optional)
                      </label>
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
                      <label htmlFor="service" className="form-label">
                        Gewünschte Leistung
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="">Bitte auswählen...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Ihre Nachricht *
                      </label>
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
                      style={{ width: '100%', marginTop: 'var(--space-2)' }}
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

                    <p
                      style={{
                        fontSize: '0.75rem',
                        color: 'var(--text-faint)',
                        marginTop: 'var(--space-3)',
                        textAlign: 'center',
                      }}
                    >
                      Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Daten
                      gemäß unserer{' '}
                      <Link
                        href="/datenschutz"
                        style={{ color: 'var(--primary)' }}
                      >
                        Datenschutzerklärung
                      </Link>{' '}
                      zu.
                    </p>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-6)',
                }}
              >
                <div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.4rem',
                      fontWeight: 400,
                      color: 'var(--text)',
                      marginBottom: 'var(--space-4)',
                    }}
                  >
                    Oder kontaktieren Sie mich direkt.
                  </h2>

                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-4)',
                    }}
                  >
                    {[
                      {
                        icon: Mail,
                        label: 'E-Mail',
                        value: 'info@devmiro.at',
                        href: 'mailto:info@devmiro.at',
                      },
                      {
                        icon: Phone,
                        label: 'Telefon',
                        value: '+43 664 123 4567',
                        href: 'tel:+436641234567',
                      },
                      {
                        icon: MapPin,
                        label: 'Standort',
                        value: 'Bregenz, Vorarlberg, Österreich',
                        href: null,
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 'var(--space-4)',
                          padding: 'var(--space-4)',
                          background: 'var(--surface)',
                          border: '1px solid var(--border)',
                          borderRadius: 'var(--radius-xl)',
                        }}
                      >
                        <div
                          style={{
                            width: 44,
                            height: 44,
                            borderRadius: 'var(--radius-lg)',
                            background: 'var(--primary-subtle)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--primary)',
                            flexShrink: 0,
                          }}
                        >
                          <item.icon size={18} />
                        </div>
                        <div>
                          <div
                            style={{
                              fontSize: '0.75rem',
                              color: 'var(--text-faint)',
                              marginBottom: '0.15rem',
                              textTransform: 'uppercase',
                              letterSpacing: '0.05em',
                              fontWeight: 600,
                            }}
                          >
                            {item.label}
                          </div>
                          {item.href ? (
                            <a
                              href={item.href}
                              style={{
                                fontSize: '0.9rem',
                                color: 'var(--text)',
                                textDecoration: 'none',
                                fontWeight: 500,
                              }}
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span
                              style={{
                                fontSize: '0.9rem',
                                color: 'var(--text)',
                              }}
                            >
                              {item.value}
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    background: 'var(--primary-subtle)',
                    border: '1px solid var(--primary-highlight)',
                    borderRadius: 'var(--radius-xl)',
                    padding: 'var(--space-6)',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.1rem',
                      fontWeight: 400,
                      color: 'var(--text)',
                      marginBottom: 'var(--space-3)',
                    }}
                  >
                    Was passiert nach Ihrer Anfrage?
                  </h3>
                  <ol
                    style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 'var(--space-3)',
                    }}
                  >
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
                          gap: 'var(--space-3)',
                          fontSize: '0.875rem',
                          color: 'var(--text-muted)',
                        }}
                      >
                        <span
                          style={{
                            width: 22,
                            height: 22,
                            borderRadius: 'var(--radius-full)',
                            background: 'var(--primary)',
                            color: '#fff',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                            marginTop: '1px',
                          }}
                        >
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
