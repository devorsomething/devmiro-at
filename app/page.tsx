'use client'

import { useState } from 'react'

export default function HomePage() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', budget: '' })
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateEmail(formData.email)) {
      setFormStatus('error')
      return
    }
    setFormStatus('success')
    setFormData({ name: '', email: '', company: '', message: '', budget: '' })
  }

  return (
    <main>
      {/* ────────────────────────────────
          HERO
      ───────────────────────────────── */}
      <section className="hero" id="hero">
        <div className="hero__inner">
          <div className="hero__content">
            <div className="hero__eyebrow animate-fade-up">Vorarlberg · Österreich</div>
            <h1 className="hero__title animate-fade-up delay-1">
              IT-Lösungen für<br /><span>Ihr Unternehmen</span>
            </h1>
            <p className="hero__subtitle animate-fade-up delay-2">
              Webentwicklung, IT-Infrastruktur und Automatisierung für Unternehmen in Vorarlberg und Österreich. Premium-Qualität. Transparente Preise.
            </p>
            <div className="hero__actions animate-fade-up delay-3">
              <a href="#contact" className="btn btn--primary">Kostenlos beraten</a>
              <a href="#services" className="btn btn--secondary">Mehr erfahren</a>
            </div>
          </div>
          <div className="hero__visual animate-fade-up delay-2">
            <div className="hero__mockup">
              <div className="hero__mockup-icon">
                <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="8" width="48" height="32" rx="6" stroke="currentColor" strokeWidth="2.5"/>
                  <path d="M4 18h48" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="11" cy="13" r="1.5" fill="currentColor"/>
                  <circle cx="16" cy="13" r="1.5" fill="currentColor"/>
                  <circle cx="21" cy="13" r="1.5" fill="currentColor"/>
                  <rect x="10" y="24" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M30 28h12M30 33h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="4" y="40" width="48" height="4" rx="2" fill="currentColor" opacity="0.2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────
          SERVICES
      ───────────────────────────────── */}
      <section className="section section--alt" id="services">
        <div className="container">
          <div className="services__header">
            <div className="section-label">Leistungen</div>
            <h2 className="services__title">Alles aus einer Hand</h2>
            <p className="services__subtitle">
              Von der Infrastruktur bis zur fertigen Website — wir begleiten Ihr Projekt von Anfang bis Ende.
            </p>
          </div>

          <div className="grid-4">
            {[
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="3" y="8" width="26" height="18" rx="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 13h26" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="7" cy="10.5" r="1" fill="currentColor"/>
                    <circle cx="11" cy="10.5" r="1" fill="currentColor"/>
                  </svg>
                ),
                title: 'IT-Infrastruktur',
                desc: 'Server, Netzwerke und Cloud-Lösungen. Skalierbar, sicher, zuverlässig.',
              },
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <rect x="3" y="5" width="26" height="20" rx="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 11h26" stroke="currentColor" strokeWidth="2"/>
                    <path d="M9 17h14M9 21h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Webentwicklung',
                desc: 'Performante Web-Applikationen mit modernem Stack. Next.js, Node.js, Shopware.',
              },
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M8 16h16M8 16l4-4M8 16l4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="24" cy="16" r="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M27 19l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                ),
                title: 'Automatisierung',
                desc: 'Workflows automatisieren, Zeit sparen. n8n, API-Integrationen, Prozessoptimierung.',
              },
              {
                icon: (
                  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M16 3L5 7.5V16c0 5.5 4.8 10.7 11 12 6.2-1.3 11-6.5 11-12V7.5L16 3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
                    <path d="M11 16l3.5 3.5 6.5-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
                title: 'IT-Security',
                desc: 'Server-Hardening, Penetrationstests, DSGVO-konforme Implementierungen.',
              },
            ].map((service, i) => (
              <div key={i} className="service-card">
                <div className="service-card__icon">{service.icon}</div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────
          PRICING
      ───────────────────────────────── */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="pricing__header">
            <div className="section-label">Preise</div>
            <h2 className="pricing__title">Transparente Preise</h2>
            <p className="pricing__subtitle">
              Keine versteckten Kosten. Wählen Sie das Paket, das zu Ihrem Projekt passt.
            </p>
          </div>

          <div className="pricing__grid">
            {/* Starter */}
            <div className="pricing-card">
              <div className="pricing-card__name">Starter</div>
              <div className="pricing-card__price">€1.500</div>
              <div className="pricing-card__period">einmalig</div>
              <div className="pricing-card__divider" />
              <ul className="pricing-card__features">
                <li>Landingpage (bis 5 Seiten)</li>
                <li>Responsive Design</li>
                <li>Kontaktformular</li>
                <li>SEO-Basiseinstellung</li>
                <li>2 Revisionsrunden</li>
              </ul>
              <a href="#contact" className="btn btn--secondary pricing-card__cta">Anfragen</a>
            </div>

            {/* Business — Featured */}
            <div className="pricing-card pricing-card--featured">
              <div className="pricing-card__name">Business</div>
              <div className="pricing-card__price">€3.500</div>
              <div className="pricing-card__period">einmalig</div>
              <div className="pricing-card__divider" />
              <ul className="pricing-card__features">
                <li>Website (bis 10 Seiten)</li>
                <li>Premium Design</li>
                <li>CMS-Integration</li>
                <li> Kontaktformular & CRM-Anbindung</li>
                <li>SEO-Optimierung</li>
                <li>5 Revisionsrunden</li>
                <li>3 Monate Support</li>
              </ul>
              <a href="#contact" className="btn btn--primary pricing-card__cta">Anfragen</a>
            </div>

            {/* Enterprise */}
            <div className="pricing-card">
              <div className="pricing-card__name">Enterprise</div>
              <div className="pricing-card__price">€7.500</div>
              <div className="pricing-card__period">einmalig</div>
              <div className="pricing-card__divider" />
              <ul className="pricing-card__features">
                <li>Komplexe Web-Applikation</li>
                <li>Individualentwicklung</li>
                <li>API-Integrationen</li>
                <li>Automatisierungs-Workflows</li>
                <li>DSGVO-konform</li>
                <li>Unbegrenzte Revisionen</li>
                <li>6 Monate Priority Support</li>
              </ul>
              <a href="#contact" className="btn btn--secondary pricing-card__cta">Anfragen</a>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────
          PORTFOLIO
      ───────────────────────────────── */}
      <section className="section section--alt" id="portfolio">
        <div className="container">
          <div className="portfolio__header">
            <div className="section-label">Portfolio</div>
            <h2 className="portfolio__title">Ausgewählte Projekte</h2>
            <p className="portfolio__subtitle">
              Eine Auswahl unserer Arbeit für Unternehmen in Vorarlberg und Österreich.
            </p>
          </div>

          <div className="portfolio__grid">
            {[
              { category: 'Webdesign', title: 'Hotel Germania Bregenz', color: '#E8F4FD' },
              { category: 'E-Commerce', title: 'Schwaerzler Modehaus', color: '#FDF2E8' },
              { category: 'Webdesign', title: 'Gasthof Krone Hohenems', color: '#E8F8F0' },
              { category: 'Webdesign', title: 'Pension Sonne Bregenz', color: '#FDF2F8' },
              { category: 'Automatisierung', title: 'Restaurant Liefersystem', color: '#F0F4FF' },
              { category: 'IT-Infrastruktur', title: 'B2B Cloud Setup', color: '#FFF8E8' },
            ].map((project, i) => (
              <div key={i} className="portfolio-card">
                <div className="portfolio-card__image" style={{ background: project.color }}>
                  <div className="portfolio-card__image-inner" style={{ fontSize: '2.5rem' }}>
                    {['🏨', '👔', '🍷', '☀️', '🍽️', '☁️'][i]}
                  </div>
                </div>
                <div className="portfolio-card__body">
                  <div className="portfolio-card__category">{project.category}</div>
                  <div className="portfolio-card__title">{project.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────
          TESTIMONIALS
      ───────────────────────────────── */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="testimonials__header">
            <div className="section-label">Kundenstimmen</div>
            <h2 className="testimonials__title">Das sagen unsere Kunden</h2>
          </div>

          <div className="grid-3">
            {[
              {
                quote: 'DEVMIRO hat unsere Website komplett neu aufgebaut. Das Ergebnis ist beeindruckend — modern, schnell und optisch hervorragend.',
                name: 'Markus Hofer',
                role: 'Geschäftsführer, Hotel Germania',
                initials: 'MH',
              },
              {
                quote: 'Endlich ein IT-Partner, der versteht was wir brauchen. Die Automatisierung unserer Bestellprozesse hat uns 10 Stunden pro Woche gespart.',
                name: 'Sarah Larcher',
                role: 'Inhaberin, Restaurant Linde',
                initials: 'SL',
              },
              {
                quote: 'Professionell, zuverlässig und immer erreichbar. Die Zusammenarbeit mit DEVMIRO war von Anfang an unkompliziert.',
                name: 'Thomas Feurstein',
                role: 'CTO, TechStart Vorarlberg',
                initials: 'TF',
              },
            ].map((t, i) => (
              <div key={i} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} width="16" height="16" viewBox="0 0 16 16" fill="#0071E3">
                      <path d="M8 1.5l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4L2.2 5.7l4-.6L8 1.5z"/>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.initials}</div>
                  <div>
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────
          CONTACT
      ───────────────────────────────── */}
      <section className="section section--alt" id="contact">
        <div className="container">
          <div className="contact__inner">
            <div className="contact__info">
              <div className="contact__eyebrow">Kontakt</div>
              <h2 className="contact__title">Lassen Sie uns sprechen</h2>
              <p className="contact__desc">
                Haben Sie ein Projekt im Sinn? Schildern Sie uns Ihre Anforderungen — wir melden uns innerhalb von 24 Stunden zurück.
              </p>
              <div className="contact__details">
                <div className="contact__detail">
                  <div className="contact__detail-icon">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M3 5a2 2 0 012-2h2.28a1 1 0 01.95.68l1.02 3.05a1 1 0 01-.45 1.13l-1.4.93a10 10 0 004.81 4.81l.93-1.4a1 1 0 011.13-.45l3.05 1.02a1 1 0 01.68.95V15a2 2 0 01-2 2h-2A2 2 0 013 15v-10z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span>+43 660 123 4567</span>
                </div>
                <div className="contact__detail">
                  <div className="contact__detail-icon">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M3 4.5L10 9.5l7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="2.5" y="3.5" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span>hallo@devmiro.at</span>
                </div>
                <div className="contact__detail">
                  <div className="contact__detail-icon">
                    <svg viewBox="0 0 20 20" fill="none">
                      <path d="M10 2a5 5 0 100 10 5 5 0 000-10z" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M10 2v2m0 12v2M2 10h2m12 0h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M4.93 4.93l1.41 1.41m7.32 7.32l1.41 1.41M4.93 15.07l1.41-1.41m7.32-7.32l1.41-1.41" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <span>Bregenz, Vorarlberg</span>
                </div>
              </div>
            </div>

            <div className="contact__form">
              {formStatus === 'success' ? (
                <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                  <div style={{ width: 56, height: 56, background: '#E8F8F0', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#34C759" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5"/>
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Nachricht gesendet!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9375rem' }}>Wir melden uns innerhalb von 24 Stunden bei Ihnen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {formStatus === 'error' && (
                    <div className="form-error" role="alert">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="7" stroke="#FF3B30" strokeWidth="1.5"/>
                        <path d="M8 4.5v4M8 10.5v.5" stroke="#FF3B30" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span>Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.</span>
                    </div>
                  )}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-name">Name</label>
                      <input type="text" id="contact-name" name="name" className="form-input" placeholder="Ihr Name" required autoComplete="name" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="contact-email">E-Mail</label>
                      <input type="email" id="contact-email" name="email" className="form-input" placeholder="ihre@email.at" required autoComplete="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-company">Unternehmen</label>
                    <input type="text" id="contact-company" name="company" className="form-input" placeholder="Ihr Unternehmen (optional)" autoComplete="organization" value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-budget">Budget</label>
                    <select id="contact-budget" name="budget" className="form-select" value={formData.budget} onChange={e => setFormData({...formData, budget: e.target.value})}>
                      <option value="">Budget auswählen</option>
                      <option value="1500-3500">€1.500 – €3.500</option>
                      <option value="3500-7500">€3.500 – €7.500</option>
                      <option value="7500+">€7.500+</option>
                      <option value="unknown">Noch unklar</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Nachricht</label>
                    <textarea id="contact-message" name="message" className="form-textarea" placeholder="Beschreiben Sie Ihr Projekt..." required value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} />
                  </div>
                  <button type="submit" className="btn btn--primary" style={{ width: '100%' }}>Nachricht senden</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
