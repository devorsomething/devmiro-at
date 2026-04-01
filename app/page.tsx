import type { Metadata } from "next";
import "@/app/premium.css";
import { TypewriterText } from "@/app/components/TypewriterText";
import { AnimatedCounter } from "@/app/components/AnimatedCounter";
import { FAQAccordion } from "@/app/components/FAQAccordion";
import { TestimonialCarousel } from "@/app/components/TestimonialCarousel";

export const metadata: Metadata = {
  title: "DEVMIRO — Webentwicklung ohne Kompromisse",
  description: "Professionelle Webentwicklung für IT-Unternehmen, Agenturen und Dienstleister in Vorarlberg. Fixed Price, keine Überraschungen.",
};

/* ============================================
   DATA ARRAYS
   ============================================ */

const painPoints = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2.5"/>
      </svg>
    ),
    title: "Nicht mobilfähig",
    desc: "Mehr als die Hälfte Ihrer Besucher ist auf dem Handy. Wenn die Seite dort nicht funktioniert, sind sie weg."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    title: "Zu langsam zum Ranken",
    desc: "Eine langsame Seite wird von Google buried. Ihre Konkurrenz erscheint zuerst — selbst wenn Ihr Service besser ist."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16,18 22,12 16,6"/>
        <polyline points="8,6 2,12 8,18"/>
      </svg>
    ),
    title: "Sieht aus wie 2015",
    desc: "Menschen urteilen über Ihr Unternehmen anhand Ihrer Website. Wenn sie veraltet aussieht, nehmen sie an, dass Ihre Arbeit es auch ist."
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: "Keine Conversions",
    desc: "Traffic ohne Conversions ist verschwendetes Geld. Kein klarer Call-to-Action, kein Kontaktformular über dem Fold."
  }
];

const pricingPlans = [
  {
    name: 'Business',
    price: '€ 6.500',
    priceSuffix: 'exkl. USt.',
    pages: 'bis 10 Seiten',
    badge: 'Beliebt',
    highlight: false,
    features: [
      'Custom Figma Design',
      'Mobile + Tablet optimiert',
      'WordPress CMS',
      'Kontaktformular + Google Maps',
      'SEO Setup (10 Keywords)',
      'DSGVO-konform',
      'Unbegrenzte Design-Revisionen',
      'Blog/News-Bereich',
      'Google Analytics 4',
      '30-min Training',
      '30 Tage Support',
      '1 Monat kostenloses Hosting',
    ],
    cta: 'Projekt starten',
    href: '/start',
  },
  {
    name: 'Premium',
    price: '€ 12.000',
    priceSuffix: 'exkl. USt.',
    pages: '10–20+ Seiten',
    badge: null,
    highlight: true,
    features: [
      'Alles in Business',
      '2 Design-Richtungen',
      'Brand Kit',
      'Animationen / Transitions',
      'Mehrsprachig (2 Sprachen)',
      'Newsletter / CRM Integration',
      'Detaillierter Sitemap + Content Brief',
      '60 Tage Support',
      'Quartals-Check-in',
    ],
    cta: 'Projekt starten',
    href: '/start',
  },
  {
    name: 'Enterprise',
    price: 'Auf Anfrage',
    pages: 'Großprojekte',
    badge: null,
    highlight: false,
    features: [
      'Alles in Premium',
      'E-Commerce / WooCommerce',
      'Custom Funktionalität',
      'Multi-Site / Multi-Brand',
      'Content-Migration',
      'Prioritäts-Support',
      'Quartals-Performance-Reviews',
    ],
    cta: 'Kontakt aufnehmen',
    href: '/kontakt',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Projektformular ausfüllen',
    desc: 'Beschreiben Sie Ihre Anforderungen — Branche, Seitenanzahl, gewünschte Features.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10,9 9,9 8,9"/>
      </svg>
    )
  },
  {
    num: '02',
    title: 'Angebot erhalten',
    desc: 'Innerhalb von 24 Stunden erhalten Sie einen Vertrag mit Festpreis und Lieferdatum.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
        <polyline points="22,4 12,14.01 9,11.01"/>
      </svg>
    )
  },
  {
    num: '03',
    title: 'Design-Phase',
    desc: '50% Anzahlung → wir starten mit Figma Mockups. Unbegrenzte Revisionen.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 16v-4"/>
        <path d="M12 8h.01"/>
      </svg>
    )
  },
  {
    num: '04',
    title: 'Entwicklung & Launch',
    desc: 'Restliche 50% bei Fertigstellung. Training inklusive. Live in wenigen Wochen.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L11 13"/>
        <path d="M22 2l-7 20-4-9-9-4 20-7z"/>
      </svg>
    )
  }
];

const clientLogos = [
  { name: 'Bergwerk Media', initial: 'B' },
  { name: 'AlpenTech AG', initial: 'A' },
  { name: 'Vorarlberger Digital', initial: 'V' },
  { name: 'Feldkirch Consulting', initial: 'F' },
  { name: 'Montafon IT', initial: 'M' },
  { name: 'Rheintal Software', initial: 'R' },
];

/* ============================================
   TRUST BADGES COMPONENT
   ============================================ */
function TrustBadges() {
  const badges = [
    { label: 'WordPress', icon: '⚡' },
    { label: 'GDPR-konform', icon: '🛡️' },
    { label: 'EU-Hosting', icon: '🌍' },
    { label: 'Fixpreis', icon: '✓' },
  ];
  return (
    <>
      {badges.map((b, i) => (
        <div key={i} className="trust-badge">
          <span className="trust-icon">{b.icon}</span>
          <span className="trust-label">{b.label}</span>
          {i < badges.length - 1 && <span className="trust-divider" />}
        </div>
      ))}
    </>
  );
}

/* ============================================
   MAIN PAGE COMPONENT
   ============================================ */
export default function HomePage() {
  return (
    <>
      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section className="hero-section">
        <div className="hero-grid-bg" />
        <div className="hero-orb-cursor" />
        
        <div className="container-wide hero-container">
          {/* Left Content */}
          <div className="hero-left">
            <div className="hero-tag animate-fade-in-up">
              <svg width="8" height="8" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="4" fill="var(--electric)"/>
              </svg>
              IT-Lösungen für Vorarlberg
            </div>

            <h1 className="hero-headline animate-fade-in-up delay-100">
              <span className="hero-headline-main">Webentwicklung.</span>
              <br />
              <span className="hero-headline-accent">
                <TypewriterText words={['Kompromisse.']} />
              </span>
            </h1>

            <p className="hero-subtext animate-fade-in-up delay-200">
              Wir designen und entwickeln Ihre Website von Grund auf. 
              Fixpreis, kein Stundenzettel, keine versteckten Kosten.
            </p>

            <div className="hero-actions animate-fade-in-up delay-300">
              <a href="/start" className="btn-primary magnetic hero-cta-primary">
                Projekt starten
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="/services" className="btn-outline magnetic hero-cta-secondary">
                Mehr erfahren
              </a>
            </div>

            <div className="hero-trust animate-fade-in-up delay-400">
              <TrustBadges />
            </div>
          </div>

          {/* Right Bento Cards */}
          <div className="hero-right">
            <div className="bento-grid">
              <div className="bento-card bento-card-1 premium-card shimmer-card">
                <div className="bento-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <p className="bento-card-label">Performance</p>
                <p className="bento-card-value">Ladezeit &lt;1s</p>
              </div>

              <div className="bento-card bento-card-2 premium-card shimmer-card">
                <div className="bento-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8">
                    <rect x="5" y="2" width="14" height="20" rx="2"/>
                    <line x1="12" y1="18" x2="12" y2="18.01"/>
                  </svg>
                </div>
                <p className="bento-card-label">Mobile First</p>
                <p className="bento-card-value">100% Responsive</p>
              </div>

              <div className="bento-card bento-card-3 premium-card shimmer-card">
                <div className="bento-card-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  </svg>
                </div>
                <p className="bento-card-label">Security</p>
                <p className="bento-card-value">SSL + DSGVO</p>
              </div>

              <div className="bento-card bento-card-4 premium-card shimmer-card">
                <div className="bento-card-badge">NEU</div>
                <p className="bento-card-headline">Fixed Price</p>
                <p className="bento-card-sub">Keine Überraschungen</p>
              </div>

              <div className="bento-card bento-card-5 premium-card shimmer-card">
                <div className="bento-card-check">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="2.5">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                </div>
                <p className="bento-card-label">WordPress</p>
                <p className="bento-card-value">CMS inklusive</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Shapes Decoration */}
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />
      </section>

      {/* ============================================
          ANIMATED COUNTERS SECTION
          ============================================ */}
      <section className="counters-section">
        <div className="container-max">
          <div className="counters-grid reveal-stagger">
            <div className="counter-item">
              <span className="counter-value">
                <AnimatedCounter end={50} suffix="+" />
              </span>
              <span className="counter-label">Projekte abgeschlossen</span>
            </div>
            <div className="counter-divider" />
            <div className="counter-item">
              <span className="counter-value">
                <AnimatedCounter end={98} suffix="%" />
              </span>
              <span className="counter-label">Kundenzufriedenheit</span>
            </div>
            <div className="counter-divider" />
            <div className="counter-item">
              <span className="counter-value">
                <AnimatedCounter end={4} suffix="" /><span className="counter-prefix">Ø</span>
              </span>
              <span className="counter-label">Wochen Lieferzeit</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PAIN POINTS SECTION
          ============================================ */}
      <section className="pain-section">
        <div className="container-max">
          <div className="pain-header reveal">
            <div className="section-tag">Das Problem</div>
            <h2 className="pain-title">Das kennen Sie vielleicht.</h2>
          </div>

          <div className="pain-bento-grid reveal-stagger">
            <div className="pain-card pain-card-large premium-card shimmer-card">
              <span className="pain-watermark">01</span>
              <div className="pain-icon">{painPoints[0].icon}</div>
              <h3 className="pain-card-title">{painPoints[0].title}</h3>
              <p className="pain-card-desc">{painPoints[0].desc}</p>
            </div>

            <div className="pain-card premium-card shimmer-card">
              <span className="pain-watermark">02</span>
              <div className="pain-icon">{painPoints[1].icon}</div>
              <h3 className="pain-card-title">{painPoints[1].title}</h3>
              <p className="pain-card-desc">{painPoints[1].desc}</p>
            </div>

            <div className="pain-card premium-card shimmer-card">
              <span className="pain-watermark">03</span>
              <div className="pain-icon">{painPoints[2].icon}</div>
              <h3 className="pain-card-title">{painPoints[2].title}</h3>
              <p className="pain-card-desc">{painPoints[2].desc}</p>
            </div>

            <div className="pain-card pain-card-wide premium-card shimmer-card">
              <span className="pain-watermark">04</span>
              <div className="pain-icon">{painPoints[3].icon}</div>
              <h3 className="pain-card-title">{painPoints[3].title}</h3>
              <p className="pain-card-desc">{painPoints[3].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          PRICING SECTION
          ============================================ */}
      <section className="pricing-section">
        <div className="container-max">
          <div className="pricing-header reveal">
            <div className="section-tag">Transparent Preise</div>
            <h2 className="pricing-title">Fixpreis. Kein Stundenzettel.</h2>
            <p className="pricing-subtitle">
              Sie wissen exakt, was Ihre Website kostet, bevor wir starten.
            </p>
          </div>

          <div className="pricing-grid reveal-stagger">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.highlight ? 'pricing-card-featured' : ''}`}>
                {plan.highlight && (
                  <div className="pricing-featured-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="var(--electric)">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                    Most Popular
                  </div>
                )}
                {plan.badge && !plan.highlight && <div className="pricing-badge">{plan.badge}</div>}
                
                <div className="pricing-card-header">
                  <h3 className="pricing-plan-name">{plan.name}</h3>
                  <div className="pricing-price-wrap">
                    <span className="pricing-price">{plan.price}</span>
                    {plan.priceSuffix && <span className="pricing-price-suffix">{plan.priceSuffix}</span>}
                  </div>
                  <p className="pricing-pages">{plan.pages}</p>
                </div>

                <div className="pricing-divider" />

                <ul className="pricing-features">
                  {plan.features.map((f, j) => (
                    <li key={j} className="pricing-feature">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="pricing-check">
                        <path d="M3 8l3.5 3.5L13 4.5" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a href={plan.href} className={plan.highlight ? 'btn-primary' : 'btn-outline'} style={{ width: '100%', justifyContent: 'center' }}>
                  {plan.cta}
                </a>

                {plan.highlight && (
                  <div className="pricing-float-check">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="2.5">
                      <polyline points="20,6 9,17 4,12"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="pricing-footer reveal">
            Hosting + Wartung: <span className="electric">€ 99/Monat</span> — 1. Monat gratis ·{' '}
            <a href="/fixed-price" className="pricing-footer-link">Alle Details ansehen →</a>
          </p>
        </div>
      </section>

      {/* ============================================
          PROCESS SECTION - BENTO GRID
          ============================================ */}
      <section className="process-section">
        <div className="container-max">
          <div className="process-header reveal">
            <div className="section-tag">Unser Prozess</div>
            <h2 className="process-title">In 4 Schritten zur neuen Website.</h2>
          </div>

          <div className="process-bento-grid reveal-stagger">
            <div className="process-card process-card-large premium-card shimmer-card">
              <span className="process-watermark">01</span>
              <div className="process-corner-accent process-corner-tl" />
              <div className="process-corner-accent process-corner-br" />
              <div className="process-icon">{processSteps[0].icon}</div>
              <h3 className="process-step-title">{processSteps[0].title}</h3>
              <p className="process-step-desc">{processSteps[0].desc}</p>
            </div>

            <div className="process-card premium-card shimmer-card">
              <span className="process-watermark">02</span>
              <div className="process-corner-accent process-corner-tl" />
              <div className="process-corner-accent process-corner-br" />
              <div className="process-icon">{processSteps[1].icon}</div>
              <h3 className="process-step-title">{processSteps[1].title}</h3>
              <p className="process-step-desc">{processSteps[1].desc}</p>
            </div>

            <div className="process-card premium-card shimmer-card">
              <span className="process-watermark">03</span>
              <div className="process-corner-accent process-corner-tl" />
              <div className="process-corner-accent process-corner-br" />
              <div className="process-icon">{processSteps[2].icon}</div>
              <h3 className="process-step-title">{processSteps[2].title}</h3>
              <p className="process-step-desc">{processSteps[2].desc}</p>
            </div>

            <div className="process-card process-card-large premium-card shimmer-card">
              <span className="process-watermark">04</span>
              <div className="process-corner-accent process-corner-tl" />
              <div className="process-corner-accent process-corner-br" />
              <div className="process-icon">{processSteps[3].icon}</div>
              <h3 className="process-step-title">{processSteps[3].title}</h3>
              <p className="process-step-desc">{processSteps[3].desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          SOCIAL PROOF / TESTIMONIALS SECTION
          ============================================ */}
      <section className="social-proof-section">
        <div className="container-max">
          <div className="social-proof-header reveal">
            <div className="section-tag">Das sagen unsere Kunden</div>
            <h2 className="social-proof-title">Vertrauen durch Ergebnisse.</h2>
          </div>

          {/* Client Logos */}
          <div className="client-logos reveal-stagger">
            {clientLogos.map((logo, i) => (
              <div key={i} className="client-logo">
                <div className="client-logo-circle">
                  <span className="client-logo-initial">{logo.initial}</span>
                </div>
                <span className="client-logo-name">{logo.name}</span>
              </div>
            ))}
          </div>

          {/* Testimonial Carousel */}
          <div className="testimonial-wrapper reveal">
            <TestimonialCarousel />
          </div>

          {/* Stats Row */}
          <div className="stats-row reveal-stagger">
            <div className="stat-item">
              <span className="stat-value">
                <AnimatedCounter end={50} suffix="+" />
              </span>
              <span className="stat-label">Zufriedene Kunden</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">
                <AnimatedCounter end={150} suffix="+" />
              </span>
              <span className="stat-label">Projekte delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">
                <AnimatedCounter end={5} suffix="" />
              </span>
              <span className="stat-label">Jahre Erfahrung</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">24h</span>
              <span className="stat-label">Angebotszeit</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          TRUST BADGES SECTION
          ============================================ */}
      <section className="trust-section">
        <div className="container-max trust-inner reveal">
          <TrustBadges />
        </div>
      </section>

      {/* ============================================
          FAQ SECTION
          ============================================ */}
      <section className="faq-section">
        <div className="container-max faq-inner">
          <div className="faq-header reveal">
            <div className="section-tag">Häufige Fragen</div>
            <h2 className="faq-title">Noch Fragen?</h2>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* ============================================
          CTA SECTION - MAXIMUM IMPACT
          ============================================ */}
      <section className="cta-section">
        <div className="cta-bg-orb cta-bg-orb-1" />
        <div className="cta-bg-orb cta-bg-orb-2" />
        
        <div className="cta-float-shape cta-float-1" />
        <div className="cta-float-shape cta-float-2" />
        <div className="cta-float-shape cta-float-3" />

        <div className="container-max cta-inner">
          <h2 className="cta-title reveal">
            Bereit für eine Website,<br />
            die <span className="electric">funktioniert?</span>
          </h2>
          <p className="cta-subtitle reveal">
            Formular ausfüllen, Vertrag innerhalb von 24 Stunden — 
            Ihre neue Website ist in wenigen Wochen live.
          </p>
          <div className="cta-actions reveal">
            <a href="/start" className="btn-primary magnetic cta-btn">
              Projekt starten
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/kontakt" className="btn-outline magnetic cta-btn-secondary">
              Kontakt
            </a>
          </div>
        </div>
      </section>

    </>
  );
}
