import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DEVMIRO — Webentwicklung ohne Kompromisse",
  description: "Professionelle Webentwicklung für IT-Unternehmen, Agenturen und Dienstleister in Vorarlberg. Fixed Price, keine Überraschungen.",
};

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />

        <div className="container-max hero-content">
          <div className="hero-tag animate-fade-in-up">
            <svg width="8" height="8" viewBox="0 0 8 8">
              <circle cx="4" cy="4" r="4" fill="var(--electric)"/>
            </svg>
            IT-Lösungen für Vorarlberg KMUs
          </div>

          <h1 className="hero-headline animate-fade-in-up delay-100">
            Webentwicklung.<br />
            Ohne <span className="electric">Kompromisse.</span>
          </h1>

          <p className="hero-subtext animate-fade-in-up delay-200">
            Wir designen und entwickeln Ihre Website von Grund auf. 
            Fixpreis, kein Stundenzettel, keine versteckten Kosten.
          </p>

          <div className="hero-actions animate-fade-in-up delay-300">
            <a href="/start" className="btn-primary hero-cta-primary">
              Projekt starten
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/services" className="btn-outline hero-cta-secondary">
              Mehr erfahren
            </a>
          </div>

          <div className="hero-trust animate-fade-in-up delay-400">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* PAIN POINTS */}
      <section className="pain-section">
        <div className="container-max">
          <div className="pain-header">
            <div className="section-tag">Das Problem</div>
            <h2 className="pain-title">Das kennen Sie vielleicht.</h2>
          </div>

          <div className="pain-grid">
            {painPoints.map((p, i) => (
              <div key={i} className="pain-card">
                <span className="pain-number">{String(i + 1).padStart(2, '0')}</span>
                <div className="pain-icon">{p.icon}</div>
                <h3 className="pain-card-title">{p.title}</h3>
                <p className="pain-card-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="pricing-section">
        <div className="container-max">
          <div className="pricing-header">
            <div className="section-tag">Transparent Preise</div>
            <h2 className="pricing-title">Fixpreis. Kein Stundenzettel.</h2>
            <p className="pricing-subtitle">
              Sie wissen exakt, was Ihre Website kostet, bevor wir starten.
            </p>
          </div>

          <div className="pricing-grid">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`pricing-card ${plan.highlight ? 'pricing-card-featured' : ''}`}>
                {plan.badge && <div className="pricing-badge">{plan.badge}</div>}
                
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
              </div>
            ))}
          </div>

          <p className="pricing-footer">
            Hosting + Wartung: <span className="electric">€ 99/Monat</span> — 1. Monat gratis ·{' '}
            <a href="/fixed-price" className="pricing-footer-link">Alle Details ansehen →</a>
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="process-section">
        <div className="container-max">
          <div className="process-header">
            <div className="section-tag">Unser Prozess</div>
            <h2 className="process-title">In 4 Schritten zur neuen Website.</h2>
          </div>

          <div className="process-steps">
            <svg className="process-wave-svg" viewBox="0 0 1200 60" preserveAspectRatio="none">
              <path 
                d="M0,30 Q150,5 300,30 T600,30 T900,30 T1200,30" 
                fill="none" 
                stroke="var(--electric)" 
                strokeWidth="2" 
                className="process-wave-path"
              />
            </svg>

            {processSteps.map((step, i) => (
              <div key={i} className="process-step">
                <div className="process-circle">
                  <span className="process-num">{step.num}</span>
                </div>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="trust-section">
        <div className="container-max trust-inner">
          <TrustBadges />
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container-max faq-inner">
          <div className="faq-header">
            <div className="section-tag">Häufige Fragen</div>
            <h2 className="faq-title">Noch Fragen?</h2>
          </div>

          <div className="faq-list">
            {faqs.map((faq, i) => (
              <details key={i} className="faq-item">
                <summary className="faq-summary">
                  <span className="faq-question">{faq.q}</span>
                  <span className="faq-indicator">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="2" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19"/>
                      <line x1="5" y1="12" x2="19" y2="12"/>
                    </svg>
                  </span>
                </summary>
                <p className="faq-answer">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-bg-orb" />
        <div className="container-max cta-inner">
          <h2 className="cta-title">
            Bereit für eine Website,<br />
            die <span className="electric">funktioniert?</span>
          </h2>
          <p className="cta-subtitle">
            Formular ausfüllen, Vertrag innerhalb von 24 Stunden — 
            Ihre neue Website ist in wenigen Wochen live.
          </p>
          <div className="cta-actions">
            <a href="/start" className="btn-primary cta-btn">
              Projekt starten
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/kontakt" className="btn-outline cta-btn-secondary">
              Kontakt
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

/* DATA */
const painPoints = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/>
        <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2.5"/>
      </svg>
    ),
    title: 'Nicht mobilfähig',
    desc: 'Mehr als die Hälfte Ihrer Besucher ist auf dem Handy. Wenn die Seite dort nicht funktioniert, sind sie weg.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    title: 'Zu langsam zum Ranken',
    desc: 'Eine langsame Seite wird von Google buried. Ihre Konkurrenz erscheint zuerst — selbst wenn Ihr Service besser ist.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16,18 22,12 16,6"/>
        <polyline points="8,6 2,12 8,18"/>
      </svg>
    ),
    title: 'Sieht aus wie 2015',
    desc: 'Menschen urteilen über Ihr Unternehmen anhand Ihrer Website. Wenn sie veraltet aussieht, nehmen sie an, dass Ihre Arbeit es auch ist.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
      </svg>
    ),
    title: 'Keine Conversions',
    desc: 'Traffic ohne Conversions ist verschwendetes Geld. Kein klarer Call-to-Action, kein Kontaktformular über dem Fold.',
  },
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
  },
  {
    num: '02',
    title: 'Angebot erhalten',
    desc: 'Innerhalb von 24 Stunden erhalten Sie einen Vertrag mit Festpreis und Lieferdatum.',
  },
  {
    num: '03',
    title: 'Design-Phase',
    desc: '50% Anzahlung → wir starten mit Figma Mockups. Unbegrenzte Revisionen.',
  },
  {
    num: '04',
    title: 'Entwicklung & Launch',
    desc: 'Restliche 50% bei Fertigstellung. Training inklusive. Live in wenigen Wochen.',
  },
];

const faqs = [
  {
    q: 'Wie lange dauert ein typisches Projekt?',
    a: 'Business-Pakete sind typischerweise in 2–4 Wochen fertig. Premium-Pakete dauern je nach Umfang 4–8 Wochen.',
  },
  {
    q: 'Kann ich mein Hosting woanders haben?',
    a: 'Ja, wir können Ihre Website auch auf Ihrem eigenen Server deployen. 1 Monat kostenloses Hosting ist aber inklusive.',
  },
  {
    q: 'Was ist im Wartungsvertrag enthalten?',
    a: 'Software-Updates, Security Patches, tägliche Backups, Uptime-Monitoring und EU-Hosting — alles inklusive.',
  },
  {
    q: 'Wie unterscheiden Sie sich von anderen Agenturen?',
    a: 'Fixpreis statt Stundenzettel. Custom Design statt Templates. Transparente Prozesse. Und eine Garantie, die Sie absichert.',
  },
  {
    q: 'Was passiert nach dem Launch?',
    a: 'Sie erhalten 30-60 Tage kostenlosen Support, ein Training für das CMS und wir bieten optionale Wartungsverträge an.',
  },
];

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
