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

        {/* ===== PAGE HERO ===== */}
        <section className="page-hero">
          <div className="page-hero__bg" />
          <div className="container">
            <div className="page-hero__eyebrow">
              <Sparkles size={10} />
              Kontakt
            </div>
            <h1>
              Sprechen Sie<br />
              <span className="section-title__accent">mit mir.</span>
            </h1>
            <p>
              Kostenloses Erstgespräch, ehrliche Beratung, unverbindliches Angebot.
              Ich freue mich auf Ihr Projekt.
            </p>
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section className="kontakt">
          <div className="container">
            <div className="kontakt__grid">

              {/* ===== FORM ===== */}
              <div className="kontakt__form-wrap">
                {submitted ? (
                  <div className="form-success">
                    <div className="form-success__icon">
                      <Check size={36} />
                    </div>
                    <h2 className="form-success__title">Nachricht gesendet!</h2>
                    <p className="form-success__text">
                      Vielen Dank für Ihre Anfrage. Ich melde mich innerhalb
                      von 48 Stunden bei Ihnen — versprochen.
                    </p>
                    <Link href="/" className="btn btn--outline">
                      Zurück zur Startseite
                    </Link>
                  </div>
                ) : (
                  <>
                    <h2 className="kontakt__form-title">Projektanfrage</h2>

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
                        className="form-submit"
                        disabled={submitting}
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

                      <p className="form-disclaimer">
                        Mit dem Absenden stimmen Sie der{' '}
                        <Link href="/datenschutz">Datenschutzerklärung</Link> zu.
                      </p>
                    </form>
                  </>
                )}
              </div>

              {/* ===== SIDEBAR ===== */}
              <div className="kontakt__sidebar">

                {/* Info cards */}
                <div>
                  <h2 className="kontakt__info-title">Oder direkt kontaktieren.</h2>
                  <div className="kontakt__info-items">
                    <div className="kontakt__info-item">
                      <div className="kontakt__info-icon">
                        <Mail size={18} />
                      </div>
                      <div>
                        <div className="kontakt__info-label">E-Mail</div>
                        <div className="kontakt__info-value">
                          <a href="mailto:info@devmiro.at">info@devmiro.at</a>
                        </div>
                      </div>
                    </div>

                    <div className="kontakt__info-item">
                      <div className="kontakt__info-icon">
                        <Phone size={18} />
                      </div>
                      <div>
                        <div className="kontakt__info-label">Telefon</div>
                        <div className="kontakt__info-value">
                          <a href="tel:+436641234567">+43 664 123 4567</a>
                        </div>
                      </div>
                    </div>

                    <div className="kontakt__info-item">
                      <div className="kontakt__info-icon">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div className="kontakt__info-label">Standort</div>
                        <div className="kontakt__info-value">Bregenz, Vorarlberg, Österreich</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Process */}
                <div className="kontakt__steps">
                  <h3 className="kontakt__steps-title">Was passiert nach Ihrer Anfrage?</h3>
                  <div className="kontakt__steps-list">
                    {steps.map((step, i) => (
                      <div key={i} className="kontakt__step">
                        <div className="kontakt__step-num">{i + 1}</div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
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
