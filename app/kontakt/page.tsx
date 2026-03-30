'use client'
import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const contactMethods = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: 'E-Mail',
    value: 'hallo@devmiro.at',
    href: 'mailto:hallo@devmiro.at',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: 'Telefon',
    value: '+43 660 123 4567',
    href: 'tel:+436601234567',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: 'Standort',
    value: 'Bregenz, Vorarlberg',
    href: '#',
  },
]

const faqs = [
  {
    q: 'Wie schnell respondieren Sie auf Anfragen?',
    a: 'Wir antworten innerhalb von 24 Stunden auf alle Anfragen — meistens deutlich schneller.',
  },
  {
    q: 'Arbeiten Sie nur mit Vorarlberger Unternehmen?',
    a: 'Unsere Heimat ist Vorarlberg, aber wir arbeiten mit Unternehmen in ganz Österreich, Deutschland und der Schweiz zusammen. Sprache ist nie ein Hindernis.',
  },
  {
    q: 'Kann ich vor Ort beraten werden?',
    a: 'Ja. Persönliche Termine in Vorarlberg sind für uns selbstverständlich. Für andere Regionen nutzen wir Videocalls.',
  },
  {
    q: 'Was passiert nach dem Erstgespräch?',
    a: 'Nach einem unverbindlichen Erstgespräch erhalten Sie innerhalb von 24 Stunden ein detailliertes Angebot mit fixem Preis und Timeline.',
  },
]

export default function KontaktPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', subject: 'Allgemeine Anfrage' })
  const [submitted, setSubmitted] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main>
        {/* HERO */}
        <section style={{ paddingTop: 'calc(var(--header-height) + var(--space-xl))', paddingBottom: 'var(--space-xl)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', zIndex: 0 }} />
          <div className="orb orb--cyan" style={{ width: 500, height: 500, top: '-10%', right: '-5%', opacity: 0.6 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="section-label">Kontakt</div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, maxWidth: 700, marginTop: '0.75rem', marginBottom: '1.5rem' }}>
              Sprechen wir<span className="text-gradient"> darüber.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 520 }}>
              Haben Sie ein Projekt im Kopf oder einfach eine Frage? Wir freuen uns von Ihnen zu hören.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="section" style={{ background: 'var(--bg-deep)', position: 'relative' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-xl)', alignItems: 'start' }}>
              {/* LEFT: Form */}
              <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '2rem', letterSpacing: '-0.01em' }}>
                  Nachricht senden
                </h2>
                {submitted ? (
                  <div className="glass" style={{ padding: '3rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✓</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>Nachricht gesendet!</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      Vielen Dank für Ihre Nachricht. Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div className="grid-2">
                      <div className="form-group">
                        <label className="form-label">Name *</label>
                        <input className="form-input" type="text" required placeholder="Max Mustermann" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">E-Mail *</label>
                        <input className="form-input" type="email" required placeholder="max@firma.at" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Unternehmen</label>
                      <input className="form-input" type="text" placeholder="Ihre Firma GmbH" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Betreff</label>
                      <select className="form-select" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                        <option>Allgemeine Anfrage</option>
                        <option>Projekt: Webentwicklung</option>
                        <option>Projekt: IT-Beratung</option>
                        <option>Projekt: Cybersecurity</option>
                        <option>Projekt: Cloud-Lösungen</option>
                        <option>Sonstiges</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Nachricht *</label>
                      <textarea className="form-textarea" required placeholder="Erzählen Sie uns von Ihrem Projekt..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn--primary" style={{ alignSelf: 'flex-start', padding: '1rem 2.5rem' }}>
                      Nachricht senden
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22,2 15,22 11,13 2,9" />
                      </svg>
                    </button>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', lineHeight: 1.6 }}>
                      Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Wir geben Ihre Daten niemals an Dritte weiter.
                    </p>
                  </form>
                )}
              </div>

              {/* RIGHT: Info + FAQ */}
              <div>
                {/* Contact Methods */}
                <div style={{ marginBottom: '3rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1.25rem' }}>Direkte Kontaktmöglichkeiten</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {contactMethods.map(m => (
                      <a key={m.label} href={m.href} className="glass--card" style={{
                        padding: '1.25rem 1.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        textDecoration: 'none',
                      }}>
                        <div style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: 'var(--accent-cyan-dim)',
                          border: '1px solid var(--border-accent)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-cyan)',
                          flexShrink: 0,
                        }}>
                          {m.icon}
                        </div>
                        <div>
                          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-tertiary)', marginBottom: '0.2rem' }}>{m.label}</div>
                          <div style={{ fontWeight: 600, fontSize: '0.9375rem' }}>{m.value}</div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1.25rem' }}>Häufige Fragen</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {faqs.map((faq, i) => (
                      <div key={i} style={{
                        border: '1px solid var(--border-subtle)',
                        borderRadius: 12,
                        overflow: 'hidden',
                        background: 'rgba(255,255,255,0.02)',
                      }}>
                        <button
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          style={{
                            width: '100%',
                            padding: '1rem 1.25rem',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            color: 'var(--text-primary)',
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.9375rem',
                            fontWeight: 600,
                            textAlign: 'left',
                          }}
                        >
                          {faq.q}
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent-cyan)" strokeWidth="2"
                            style={{ transform: openFaq === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                          </svg>
                        </button>
                        {openFaq === i && (
                          <div style={{ padding: '0 1.25rem 1rem', color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.7, borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                            {faq.a}
                          </div>
                        )}
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

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  )
}
