'use client'
import { useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const packages = [
  { value: 'starter', label: 'Starter', price: 'Ab € 1.800' },
  { value: 'business', label: 'Business', price: 'Ab € 6.500' },
  { value: 'premium', label: 'Premium', price: 'Ab € 12.000' },
  { value: 'enterprise', label: 'Enterprise', price: 'Individuell' },
  { value: 'unsure', label: 'Ich bin mir nicht sicher', price: '' },
]

const industries = [
  'IT & Technologie',
  'Gastronomie & Hotels',
  'Salons & Beauty',
  'Einzelhandel & Shops',
  'Unternehmensberatung',
  'Gesundheit & Medizin',
  'Bildung & Training',
  'Handwerk & Dienstleister',
  'Recht & Steuern',
  'Immobilien',
  'Sonstiges',
]

const timelines = [
  { value: 'asap', label: 'So schnell wie möglich' },
  { value: '1month', label: 'Innerhalb 1 Monats' },
  { value: '3months', label: 'Innerhalb 3 Monaten' },
  { value: 'exploring', label: 'Noch in der Erkundungsphase' },
]

export default function StartPage() {
  const [form, setForm] = useState({
    name: '', email: '', company: '', phone: '',
    package: '', industry: '', budget: '', timeline: '', description: '',
  })
  const [submitted, setSubmitted] = useState(false)

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
          <div className="orb orb--cyan" style={{ width: 500, height: 500, top: '-10%', right: '-5%', opacity: 0.7 }} />
          <div className="orb orb--purple" style={{ width: 300, height: 300, bottom: '0%', left: '20%', opacity: 0.4 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ maxWidth: 700 }}>
              <div className="badge badge--cyan" style={{ marginBottom: '1.5rem' }}>
                🚀 Projekt starten
              </div>
              <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '1.5rem' }}>
                Erzählen Sie uns von{' '}
                <span className="text-gradient">Ihrem Projekt.</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', lineHeight: 1.7, maxWidth: 540 }}>
                Füllen Sie das Formular aus — wir melden uns innerhalb von 24 Stunden mit einem konkreten Angebot und einer klaren Timeline.
              </p>
            </div>
          </div>
        </section>

        {/* FORM SECTION */}
        <section className="section" style={{ background: 'var(--bg-deep)', position: 'relative' }}>
          <div className="container">
            {submitted ? (
              <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
                <div className="glass" style={{ padding: '4rem 3rem' }}>
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(0,229,255,0.2) 0%, rgba(77,124,255,0.2) 100%)',
                    border: '2px solid var(--border-accent)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 2rem',
                    fontSize: '2.5rem',
                  }}>
                    ✓
                  </div>
                  <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem', letterSpacing: '-0.02em' }}>
                    Anfrage eingegangen!
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '2rem' }}>
                    Vielen Dank für Ihre Projektanfrage. Unser Team prüft Ihre Angaben und meldet sich innerhalb von <strong style={{ color: 'var(--accent-cyan)' }}>24 Stunden</strong> mit einem detaillierten Angebot.
                  </p>
                  <div style={{
                    padding: '1.25rem',
                    background: 'rgba(0,229,255,0.05)',
                    border: '1px solid var(--border-accent)',
                    borderRadius: 12,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.8,
                    textAlign: 'left',
                    marginBottom: '2rem',
                  }}>
                    <div style={{ color: 'var(--accent-cyan)', marginBottom: '0.5rem', fontWeight: 700 }}>Was als nächstes passiert:</div>
                    1. Wir analysieren Ihre Anforderungen{'\n'}
                    2. Erstgespräch (persönlich oder per Video){'\n'}
                    3. Detailliertes Angebot innerhalb von 24 Stunden{'\n'}
                    4. Gemeinsamer Start bei Zustimmung
                  </div>
                  <Link href="/" className="btn btn--outline">
                    Zurück zur Startseite
                  </Link>
                </div>
              </div>
            ) : (
              <div style={{ maxWidth: 720, margin: '0 auto' }}>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {/* Step 1 */}
                  <div className="glass" style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '1.5rem' }}>
                      01 · Über Sie
                    </h3>
                    <div className="grid-2">
                      <div className="form-group">
                        <label className="form-label">Name *</label>
                        <input className="form-input" type="text" required placeholder="Ihr vollständiger Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">E-Mail *</label>
                        <input className="form-input" type="email" required placeholder="ihre@firma.at" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Unternehmen *</label>
                        <input className="form-input" type="text" required placeholder="Firmenname GmbH" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Telefon</label>
                        <input className="form-input" type="tel" placeholder="+43 660 123 4567" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                      </div>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="glass" style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '0.7rem', fontFamily: 'var(--font-mono)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--accent-cyan)', marginBottom: '1.5rem' }}>
                      02 · Ihr Projekt
                    </h3>
                    <div className="grid-2">
                      <div className="form-group">
                        <label className="form-label">Paket / Dienstleistung</label>
                        <select className="form-select" value={form.package} onChange={e => setForm({ ...form, package: e.target.value })}>
                          <option value="">Bitte wählen...</option>
                          {packages.map(p => (
                            <option key={p.value} value={p.value}>{p.label} {p.price ? `— ${p.price}` : ''}</option>
                          ))}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Branche</label>
                        <select className="form-select" value={form.industry} onChange={e => setForm({ ...form, industry: e.target.value })}>
                          <option value="">Bitte wählen...</option>
                          {industries.map(ind => <option key={ind} value={ind}>{ind}</option>)}
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Budget-Vorstellung</label>
                        <select className="form-select" value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })}>
                          <option value="">Noch offen / unbestimmt</option>
                          <option value="under-2k">Unter € 2.000</option>
                          <option value="2k-5k">€ 2.000 – 5.000</option>
                          <option value="5k-10k">€ 5.000 – 10.000</option>
                          <option value="10k-20k">€ 10.000 – 20.000</option>
                          <option value="20k+">Über € 20.000</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Gewünschter Start</label>
                        <select className="form-select" value={form.timeline} onChange={e => setForm({ ...form, timeline: e.target.value })}>
                          <option value="">Bitte wählen...</option>
                          {timelines.map(t => <option key={t.value} value={t.value}>{t.label}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="form-group" style={{ marginTop: '1rem' }}>
                      <label className="form-label">Projektbeschreibung *</label>
                      <textarea className="form-textarea" required placeholder="Beschreiben Sie Ihr Projekt so detailliert wie möglich. Was möchten Sie erreichen? Welche Probleme sollen gelöst werden? Gibt es bestehende Systeme, die integriert werden müssen?" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })} style={{ minHeight: 180 }} />
                    </div>
                  </div>

                  {/* Submit */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ color: 'var(--text-tertiary)', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', maxWidth: 480, lineHeight: 1.6 }}>
                      Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu. Keine Verpflichtungen — Sie erhalten lediglich ein unverbindliches Angebot.
                    </p>
                    <button type="submit" className="btn btn--primary" style={{ padding: '1rem 2.5rem', fontSize: '1rem', flexShrink: 0 }}>
                      Angebot anfordern
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22,2 15,22 11,13 2,9" />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* TRUST INDICATORS */}
        <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'var(--gradient-mesh)', opacity: 0.3 }} />
          <div className="container" style={{ position: 'relative', zIndex: 1 }}>
            <div className="grid-3" style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
              {[
                { value: '24h', label: 'Angebot innerhalb von 24 Stunden' },
                { value: '100%', label: 'Zufriedenheitsgarantie auf das Design' },
                { value: '€ 0', label: 'Kostenlose Erstberatung' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '1.5rem' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    background: 'var(--gradient-text)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.03em',
                    marginBottom: '0.5rem',
                  }}>{item.value}</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
