import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DEVMIRO — IT-Lösungen für Vorarlberg KMUs",
  description: "Professionelle Webentwicklung für IT-Unternehmen, Agenturen und Dienstleister in Vorarlberg. Fixed Price, keine Überraschungen.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        paddingTop: 80, paddingBottom: 6,
        position: 'relative', overflow: 'hidden',
      }}>
        {/* Background effects */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,180,216,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '20%', right: '-5%',
          width: 500, height: 500, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,180,216,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-10%',
          width: 400, height: 400, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: 820 }}>
            <div className="section-tag animate-fade-in-up" style={{ marginBottom: '1.5rem' }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="3" fill="#00b4d8"/>
                <circle cx="6" cy="6" r="5.5" stroke="#00b4d8" strokeWidth="1" opacity="0.4"/>
              </svg>
              IT-Lösungen für Vorarlberg KMUs
            </div>

            <h1 className="animate-fade-in-up delay-100" style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800, lineHeight: 1.1,
              color: '#f0f6fc', marginBottom: '1.5rem',
              letterSpacing: '-0.03em',
            }}>
              Webentwicklung ohne{" "}
              <span className="gradient-text">Templates.</span>
              <br />
              Ohne Überraschungen.
            </h1>

            <p className="animate-fade-in-up delay-200" style={{
              fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
              color: '#8b949e', lineHeight: 1.7, marginBottom: '2.5rem',
              maxWidth: 620,
            }}>
              Wir designen und entwickeln Ihre Website von Grund auf. Fixpreis, kein Stundenzettel, keine versteckten Kosten. Sie wissen exakt, was Sie zahlen — bevor wir starten.
            </p>

            <div className="animate-fade-in-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/start" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                Projekt starten
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link href="/services" className="btn-outline" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                Mehr erfahren
              </Link>
            </div>

            <div className="animate-fade-in-up delay-400" style={{
              display: 'flex', alignItems: 'center', gap: '1rem',
              marginTop: '3rem', paddingTop: '2rem',
              borderTop: '1px solid rgba(26,42,66,0.6)',
            }}>
              <TrustedBadges />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <PainPoints />

      {/* Pricing Overview */}
      <PricingOverview />

      {/* How It Works */}
      <HowItWorks />

      {/* Industries */}
      <Industries />

      {/* Satisfaction Guarantee */}
      <SatisfactionGuarantee />

      {/* FAQ */}
      <FAQ />

      {/* CTA */}
      <CTASection />
    </>
  );
}

function TrustedBadges() {
  const badges = [
    { label: 'WordPress', icon: '⚡' },
    { label: 'GDPR-konform', icon: '🛡️' },
    { label: 'EU-Hosting', icon: '🌍' },
    { label: 'Fixpreis', icon: '✓' },
  ];
  return (
    <>
      {badges.map((b, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          fontSize: '0.8rem', color: '#8b949e',
        }}>
          <span>{b.icon}</span>
          <span>{b.label}</span>
          {i < badges.length - 1 && (
            <span style={{ width: 1, height: 12, background: 'rgba(26,42,66,0.8)', marginLeft: '0.5rem' }} />
          )}
        </div>
      ))}
    </>
  );
}

function PainPoints() {
  const problems = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2"/>
          <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2.5"/>
        </svg>
      ),
      title: 'Nicht mobilfähig',
      desc: 'Mehr als die Hälfte Ihrer Besucher ist auf dem Handy. Wenn die Seite dort nicht funktioniert, sind sie weg.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12,6 12,12 16,14"/>
        </svg>
      ),
      title: 'Zu langsam zum Ranken',
      desc: 'Eine langsame Seite wird von Google bury. Ihre Konkurrenz erscheint zuerst — selbst wenn Ihr Service besser ist.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16,18 22,12 16,6"/>
          <polyline points="8,6 2,12 8,18"/>
        </svg>
      ),
      title: 'Sieht aus wie 2015',
      desc: 'Menschen urteilen über Ihr Unternehmen anhand Ihrer Website. Wenn sie veraltet aussieht, nehmen sie an, dass Ihre Arbeit es auch ist.',
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="12" y1="1" x2="12" y2="23"/>
          <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      ),
      title: 'Keine Conversions',
      desc: 'Traffic ohne Conversions ist verschwendetes Geld. Kein klarer Call-to-Action, kein Kontaktformular über dem Fold, kein Grund zu kontaktieren.',
    },
  ];

  return (
    <section style={{ padding: '6rem 0', background: '#070b14' }}>
      <div className="container-max">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ marginBottom: '1rem' }}>Das Problem</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Das kennen Sie vielleicht
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.25rem',
        }}>
          {problems.map((p, i) => (
            <div key={i} className="card" style={{ padding: '1.75rem' }}>
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: 'rgba(0,180,216,0.08)',
                border: '1px solid rgba(0,180,216,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem',
              }}>
                {p.icon}
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.05rem', fontWeight: 600, color: '#f0f6fc',
                marginBottom: '0.6rem',
              }}>
                {p.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#8b949e', lineHeight: 1.65 }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingOverview() {
  const plans = [
    {
      name: 'Business',
      price: '€ 6.500',
      pages: 'bis 10 Seiten',
      badge: 'Beliebt',
      badgeColor: '#00b4d8',
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
      pages: '10–20+ Seiten',
      badge: null,
      badgeColor: null,
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
      highlight: true,
    },
    {
      name: 'Enterprise',
      price: 'Auf Anfrage',
      pages: 'Großprojekte',
      badge: null,
      badgeColor: null,
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

  return (
    <section style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #070b14 0%, #0c1220 100%)',
    }}>
      <div className="container-max">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ marginBottom: '1rem' }}>Transparent Preise</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Fixpreis. Kein Stundenzettel.
          </h2>
          <p style={{ fontSize: '1rem', color: '#8b949e', maxWidth: 560, margin: '0 auto' }}>
            Sie wissen exakt, was Ihre Website kostet, bevor wir starten. Keine Überraschungen am Ende.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
          alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <div
              key={i}
              className="card glow-border"
              style={{
                padding: '2rem',
                position: 'relative',
                background: plan.highlight ? 'rgba(0,180,216,0.04)' : 'var(--bg-card)',
                borderColor: plan.highlight ? 'rgba(0,180,216,0.35)' : undefined,
              }}
            >
              {plan.badge && (
                <div style={{
                  position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                  background: plan.badgeColor, color: '#070b14',
                  fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em',
                  padding: '0.25rem 0.85rem', borderRadius: 100,
                }}>
                  {plan.badge}
                </div>
              )}

              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.1rem', fontWeight: 600, color: '#f0f6fc', marginBottom: '0.5rem',
                }}>
                  {plan.name}
                </h3>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '2rem', fontWeight: 800,
                    color: plan.highlight ? '#00b4d8' : '#f0f6fc',
                  }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#8b949e' }}>exkl. USt.</span>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#4a5568', marginTop: '0.25rem' }}>{plan.pages}</p>
              </div>

              <div style={{
                height: 1, background: 'rgba(26,42,66,0.6)',
                margin: '0 0 1.5rem',
              }} />

              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {plan.features.map((f, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.875rem', color: '#8b949e' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M3 8l3.5 3.5L13 4.5" stroke={plan.highlight ? '#00b4d8' : '#10b981'} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>

              <Link href={plan.href} className={plan.highlight ? 'btn-primary' : 'btn-outline'} style={{ width: '100%', justifyContent: 'center' }}>
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div style={{
          textAlign: 'center', marginTop: '2rem',
          fontSize: '0.85rem', color: '#4a5568',
        }}>
          Hosting + Wartung: <span style={{ color: '#8b949e' }}>€ 99/Monat</span> — 1. Monat gratis ·{' '}
          <Link href="/fixed-price" style={{ color: '#00b4d8', textDecoration: 'none' }}>Alle Details ansehen →</Link>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Projektformular ausfüllen',
      desc: 'Beschreiben Sie Ihre Anforderungen in unserem Formular — Branch, Seitenanzahl, gewünschte Features.',
    },
    {
      num: '02',
      title: 'Angebot erhalten',
      desc: 'Innerhalb von 24 Stunden erhalten Sie einen Vertrag mit Festpreis, Scope und Lieferdatum.',
    },
    {
      num: '03',
      title: 'Design-Phase',
      desc: '50% Anzahlung → wir starten mit Figma Mockups. Unbegrenzte Revisionen, bis Sie zufrieden sind.',
    },
    {
      num: '04',
      title: 'Entwicklung & Launch',
      desc: 'Restliche 50% bei Fertigstellung. Training-Session inklusive. Ihre Seite ist in wenigen Wochen live.',
    },
  ];

  return (
    <section style={{ padding: '6rem 0', background: '#070b14' }}>
      <div className="container-max">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-tag" style={{ marginBottom: '1rem' }}>Unser Prozess</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            In 4 Schritten zur neuen Website
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '0',
          position: 'relative',
        }}>
          {/* Connection line (desktop) */}
          <div style={{
            position: 'absolute', top: 28, left: '12.5%', right: '12.5%', height: 1,
            background: 'linear-gradient(90deg, transparent, rgba(0,180,216,0.2), transparent)',
            display: 'none',
          }} className="md:block" />

          {steps.map((step, i) => (
            <div key={i} style={{ padding: '0 1.25rem', textAlign: 'center' }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'rgba(0,180,216,0.08)',
                border: '1px solid rgba(0,180,216,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                margin: '0 auto 1.25rem',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.8rem', fontWeight: 700,
                color: '#00b4d8', letterSpacing: '0.05em',
              }}>
                {step.num}
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem', fontWeight: 600, color: '#f0f6fc',
                marginBottom: '0.6rem',
              }}>
                {step.title}
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#8b949e', lineHeight: 1.65 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  const industries = [
    { href: '/it-companies', title: 'IT-Firmen & MSPs', desc: 'Modernes Design, das Ihre technische Kompetenz widerspiegelt.' },
    { href: '/services', title: 'Agenturen', desc: 'Boutique-Positionierung, die sich von der Masse abhebt.' },
    { href: '/fixed-price', title: 'Dienstleister', desc: 'Klare Leistungsseiten und starke Conversion-Optimierung.' },
  ];

  return (
    <section style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #0c1220 0%, #070b14 100%)',
    }}>
      <div className="container-max">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{ marginBottom: '1rem' }}>Branchenspezialisiert</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Fokus auf B2B-Unternehmen
          </h2>
          <p style={{ fontSize: '1rem', color: '#8b949e', maxWidth: 540, margin: '0 auto' }}>
            Wir spezialisieren uns auf Websites für serviceorientierte B2B-Unternehmen in Europa.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.25rem',
        }}>
          {industries.map((ind, i) => (
            <Link key={i} href={ind.href} className="card" style={{
              padding: '1.75rem', textDecoration: 'none',
              display: 'block',
            }}>
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.1rem', fontWeight: 600, color: '#f0f6fc',
                marginBottom: '0.5rem',
              }}>
                {ind.title}
              </div>
              <p style={{ fontSize: '0.875rem', color: '#8b949e', lineHeight: 1.6, margin: 0 }}>
                {ind.desc}
              </p>
              <div style={{ marginTop: '1rem', color: '#00b4d8', fontSize: '0.85rem', fontWeight: 500 }}>
                Mehr erfahren →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SatisfactionGuarantee() {
  return (
    <section style={{ padding: '5rem 0', background: '#070b14' }}>
      <div className="container-max">
        <div style={{
          border: '1px solid rgba(0,180,216,0.2)',
          borderRadius: 16,
          padding: '3rem 2.5rem',
          textAlign: 'center',
          background: 'linear-gradient(135deg, rgba(0,180,216,0.04) 0%, rgba(0,180,216,0.01) 100%)',
          position: 'relative', overflow: 'hidden',
        }}>
          <div style={{
            position: 'absolute', top: -50, right: -50,
            width: 200, height: 200, borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)',
          }} />
          <div className="section-tag" style={{ marginBottom: '1.5rem' }}>Design-Zufriedenheitsgarantie</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Design, das Ihnen gefällt — oder wir überarbeiten es kostenlos
          </h2>
          <p style={{ fontSize: '1rem', color: '#8b949e', maxWidth: 620, margin: '0 auto 2rem', lineHeight: 1.7 }}>
            Wenn Sie mit dem Design nicht 100% zufrieden sind, überarbeiten wir es so lange, bis es passt. Keine zusätzlichen Kosten. Keine unangenehmen Gespräche. Sie bezahlen die zweite Hälfte erst, wenn Sie zufrieden sind.
          </p>
          <Link href="/start" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
            Projekt starten
          </Link>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: 'Wie lange dauert ein typisches Projekt?',
      a: 'Business-Pakete sind typischerweise in 2–4 Wochen fertig. Premium-Pakete dauern je nach Umfang 4–8 Wochen.',
    },
    {
      q: 'Kann ich mein Hosting woanders haben?',
      a: 'Ja, wir können Ihre Website auch auf Ihrem eigenen Server oder Hosting-Paket deployen. 1 Monat kostenloses Hosting ist aber inklusive.',
    },
    {
      q: 'Was ist im Wartungsvertrag enthalten?',
      a: 'Software-Updates, Security Patches, tägliche Backups, Uptime-Monitoring und EU-Hosting — alles inklusive.',
    },
    {
      q: 'Wie unterscheiden Sie sich von anderen Agenturen?',
      a: 'Fixpreis statt Stundenzettel. Custom Design statt Templates. Transparente Prozesse. Und eine Garantie, die Sie absichert.',
    },
  ];

  return (
    <section style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #070b14 0%, #0c1220 100%)' }}>
      <div className="container-max" style={{ maxWidth: 800 }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-tag" style={{ marginBottom: '1rem' }}>Häufige Fragen</div>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem',
            letterSpacing: '-0.02em',
          }}>
            Noch Fragen?
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {faqs.map((faq, i) => (
            <details key={i} className="card" style={{ padding: '1.5rem', cursor: 'pointer' }}>
              <summary style={{
                listStyle: 'none', fontWeight: 600, color: '#f0f6fc',
                fontSize: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                cursor: 'pointer',
              }}>
                {faq.q}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="2" strokeLinecap="round" className="faq-chevron" style={{ flexShrink: 0, marginLeft: '1rem', transition: 'transform 0.2s' }}>
                  <polyline points="6,9 12,15 18,9"/>
                </svg>
              </summary>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#8b949e', lineHeight: 1.7 }}>
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section style={{
      padding: '8rem 0 6rem',
      background: '#070b14',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        width: 800, height: 400, borderRadius: '50%',
        background: 'radial-gradient(ellipse, rgba(0,180,216,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div className="container-max" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <div className="section-tag" style={{ marginBottom: '1.5rem' }}>Jetzt starten</div>
        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800, color: '#f0f6fc', marginBottom: '1.5rem',
          letterSpacing: '-0.03em',
        }}>
          Bereit für eine Website,{" "}
          <span className="gradient-text">die funktioniert?</span>
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#8b949e', maxWidth: 520, margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Formular ausfüllen, Vertrag innerhalb von 24 Stunden — Ihre neue Website ist in wenigen Wochen live.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/start" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
            Projekt starten
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
          <Link href="/kontakt" className="btn-outline" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
            Kontakt
          </Link>
        </div>
      </div>
    </section>
  );
}
