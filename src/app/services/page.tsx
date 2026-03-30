import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services | DEVMIRO — Web Design Services",
  description: "Custom Web Design Services für B2B-Unternehmen. WordPress, SEO, DSGVO — alles inklusive. Fixed Price.",
};

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Custom Figma Design',
    desc: 'Ein einzigartiges Design, das von Grund auf für Ihre Marke erstellt wird. Wir präsentieren Mockups, BEVOR eine einzige Codezeile geschrieben wird. Unbegrenzte Revisionen, bis Sie zufrieden sind.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2.5"/>
      </svg>
    ),
    title: 'Responsive Entwicklung',
    desc: 'Auf WordPress aufgebaut, damit Sie Inhalte selbst bearbeiten können. Perfekt funktionierend auf Smartphones, Tablets und Desktop — auf jedem Gerät optimale Darstellung.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'SEO Setup',
    desc: 'Meta Tags, Sitemap, Page-Speed-Optimierung, Keyword-Recherche und korrekte Heading-Struktur. Von Tag eins an bereit für Google und andere Suchmaschinen.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'DSGVO-Konformität',
    desc: 'Cookie-Consent-Banner, Datenschutzerklärung-Vorlage, korrekte Datenverarbeitung und sichere Kontaktformulare. Vollständig compliant mit der EU-DSGVO.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
    title: 'Content-Strategie',
    desc: 'Wir helfen Ihnen, Ihre Seiten zu strukturieren, klare Leistungsbeschreibungen zu schreiben und eine Sitemap zu erstellen, die Besucher in Leads verwandelt.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    title: 'Post-Launch Support',
    desc: 'Training-Session, damit Sie Inhalte selbst aktualisieren können. 30 Tage Support inklusive (60 Tage für Premium und Enterprise). Optional laufende Wartungspläne verfügbar.',
  },
];

const industries = [
  {
    title: 'IT-Firmen & MSPs',
    desc: 'Modernes Tech-Design, das Managed Services, Cloud und Cybersecurity klar kommuniziert.',
    href: '/it-companies',
  },
  {
    title: 'Recruitment Agencies',
    desc: 'Boutique-Positionierung, die Enterprise-Klienten beeindruckt und Top-Kandidaten anzieht.',
    href: '/services',
  },
  {
    title: 'Unternehmensberatung',
    desc: 'Authority-Design, das Ihre Expertise kommuniziert und Thought Leadership sichtbar macht.',
    href: '/services',
  },
  {
    title: 'Steuerberater & Accountants',
    desc: 'Vertrauenswürdiges, klares Design mit Online-Buchung und Service-Übersichten.',
    href: '/services',
  },
];

const pricingPlans = [
  { name: 'Business', price: '€ 6.500', pages: 'bis 10 Seiten', href: '/start' },
  { name: 'Premium', price: '€ 12.000', pages: '10–20+ Seiten', href: '/start' },
  { name: 'Enterprise', price: 'Auf Anfrage', pages: 'Custom', href: '/kontakt' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        paddingTop: 120, paddingBottom: 6,
        background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(0,180,216,0.06) 0%, transparent 70%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="container-max">
          <div className="section-tag animate-fade-in-up" style={{ marginBottom: '1.5rem' }}>
            Unsere Leistungen
          </div>
          <h1 className="animate-fade-in-up delay-100" style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 800, lineHeight: 1.1,
            color: '#f0f6fc', marginBottom: '1.5rem', letterSpacing: '-0.03em',
          }}>
            Web Design Services
            <br />
            <span className="gradient-text">für B2B-Unternehmen</span>
          </h1>
          <p className="animate-fade-in-up delay-200" style={{
            fontSize: '1.15rem', color: '#8b949e', lineHeight: 1.7,
            maxWidth: 680, marginBottom: '2.5rem',
          }}>
            Wir designen und entwickeln Websites von Grund auf für serviceorientierte Unternehmen in Europa. Fixpreis, keine Templates, keine Überraschungen. Jedes Projekt enthält Custom Figma Design, responsive Entwicklung, SEO Setup und DSGVO-Konformität.
          </p>
          <div className="animate-fade-in-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/start" className="btn-primary">
              Projekt starten
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/fixed-price" className="btn-outline">Fixed Price ansehen</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ padding: '6rem 0', background: '#070b14' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag" style={{ marginBottom: '1rem' }}>Was wir liefern</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 700, color: '#f0f6fc', letterSpacing: '-0.02em',
            }}>
              Alles, was Ihre Website braucht
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.25rem',
          }}>
            {services.map((s, i) => (
              <div key={i} className="card" style={{ padding: '1.75rem' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 12,
                  background: 'rgba(0,180,216,0.08)',
                  border: '1px solid rgba(0,180,216,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}>
                  {s.icon}
                </div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.1rem', fontWeight: 600, color: '#f0f6fc', marginBottom: '0.6rem',
                }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#8b949e', lineHeight: 1.65 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(180deg, #070b14 0%, #0c1220 100%)' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-tag" style={{ marginBottom: '1rem' }}>Branchenspezialisiert</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 700, color: '#f0f6fc', letterSpacing: '-0.02em',
            }}>
              Branchen, die wir bedienen
            </h2>
            <p style={{ fontSize: '1rem', color: '#8b949e', maxWidth: 540, margin: '1rem auto 0' }}>
              Wir spezialisieren uns auf Websites für B2B-Serviceunternehmen. Jede Branche bekommt einen maßgeschneiderten Ansatz.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
          }}>
            {industries.map((ind, i) => (
              <div key={i} className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.05rem', fontWeight: 600, color: '#f0f6fc', marginBottom: '0.5rem',
                }}>
                  {ind.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#8b949e', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {ind.desc}
                </p>
                <Link href={ind.href} style={{ fontSize: '0.85rem', color: '#00b4d8', fontWeight: 500 }}>
                  Mehr erfahren →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: '6rem 0', background: '#070b14' }}>
        <div className="container-max">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ marginBottom: '1rem' }}>Transparent Preise</div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
              fontWeight: 700, color: '#f0f6fc', letterSpacing: '-0.02em',
            }}>
              Pakete & Preise
            </h2>
          </div>

          <div style={{
            display: 'flex', justifyContent: 'center', gap: '1.5rem',
            flexWrap: 'wrap',
          }}>
            {pricingPlans.map((plan, i) => (
              <div key={i} className="card" style={{ padding: '1.75rem 2rem', minWidth: 220, textAlign: 'center' }}>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1rem', fontWeight: 600, color: '#f0f6fc', marginBottom: '0.5rem',
                }}>
                  {plan.name}
                </div>
                <div style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.75rem', fontWeight: 800, color: '#00b4d8', marginBottom: '0.25rem',
                }}>
                  {plan.price}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#4a5568', marginBottom: '1.25rem' }}>
                  {plan.pages}
                </div>
                <Link href={plan.href} className="btn-outline" style={{ fontSize: '0.85rem' }}>
                  {plan.name === 'Enterprise' ? 'Kontakt' : 'Starten'}
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <p style={{ fontSize: '0.9rem', color: '#8b949e' }}>
              Nicht sicher welches Paket passt?{' '}
              <Link href="/start" style={{ color: '#00b4d8' }}>Wählen Sie „Allgemeine Anfrage" im Formular →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, rgba(0,180,216,0.04) 0%, rgba(0,180,216,0.01) 100%)' }}>
        <div className="container-max" style={{ textAlign: 'center' }}>
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
            fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem', letterSpacing: '-0.02em',
          }}>
            Erzählen Sie uns von Ihrem Projekt
          </h2>
          <p style={{ fontSize: '1rem', color: '#8b949e', marginBottom: '2rem' }}>
            Wir empfehlen Ihnen das richtige Paket.
          </p>
          <Link href="/start" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
            Projekt starten
          </Link>
        </div>
      </section>
    </>
  );
}
