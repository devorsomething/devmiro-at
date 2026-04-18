'use client';

import { useState } from 'react';
import SystemScanner from '../components/SystemScanner';

export default function HomePage() {
  const [activeService, setActiveService] = useState<number | null>(null);

  const services = [
    {
      title: 'IT-Infrastruktur',
      description: 'Server, Netzwerke, Cloud-Lösungen — alles aus einer Hand. Keine Insellösungen, keine Vendor-Lock-ins.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="4" y="8" width="24" height="16" stroke="currentColor" strokeWidth="2"/>
          <line x1="4" y1="14" x2="28" y2="14" stroke="currentColor" strokeWidth="2"/>
          <line x1="16" y1="14" x2="16" y2="24" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'Webentwicklung',
      description: 'Performante Web-Applikationen mit modernem Stack. Next.js, Node.js, Shopware — was zum Projekt passt.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="3" y="5" width="26" height="18" stroke="currentColor" strokeWidth="2"/>
          <line x1="3" y1="11" x2="29" y2="11" stroke="currentColor" strokeWidth="2"/>
          <circle cx="7" cy="8" r="1" fill="currentColor"/>
          <circle cx="11" cy="8" r="1" fill="currentColor"/>
        </svg>
      ),
    },
    {
      title: 'Automatisierung',
      description: 'Wiederkehrende Tasks eliminiert. n8n-Workflows, API-Integrationen, systemübergreifende Prozesse.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M8 16H24M8 16L12 12M8 16L12 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="24" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ),
    },
    {
      title: 'IT-Security',
      description: 'Server-Hardening, Penetrationstests, DSGVO-konforme Implementierungen. Sicherheit ist kein Add-On.',
      icon: (
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M16 4L6 8V16C6 22 10.5 27.5 16 29C21.5 27.5 26 22 26 16V8L16 4Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16L14.5 18.5L20 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
    },
  ];

  const stats = [
    { value: '10+', label: 'Jahre Erfahrung' },
    { value: '50+', label: 'Projekte' },
    { value: '98%', label: 'Kundenzufriedenheit' },
  ];

  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__bg-line" />
        <div className="container">
          <div className="hero__content">
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Vorarlberg · Österreich
            </div>
            
            <h1 className="hero__headline">
              <span className="hero__headline-top">IT-LÖSUNGEN</span>
              <span className="hero__headline-bottom">
                FÜR <span className="text-gradient">UNTERNEHMEN</span>
              </span>
            </h1>
            
            <p className="hero__sub">
              Wir bauen keine überkomplexen Systeme.<br />
              Wir lösen Probleme — schnell, sauber, nachhaltig.
            </p>
            
            <div className="hero__cta">
              <a href="/kontakt" className="btn btn--primary">
                Beratung anfragen
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
              <a href="/services" className="btn btn--outline">
                Leistungen
              </a>
            </div>
          </div>
          
          <div className="hero__graphic">
            <div className="hero__code-block">
              <div className="hero__code-header">
                <span className="hero__code-dot" />
                <span className="hero__code-dot" />
                <span className="hero__code-dot" />
                <span className="hero__code-lang">typescript</span>
              </div>
              <pre className="hero__code">
{`const devmiro = {
  focus: ["web", "infra", "auto"],
  region: "vorarlberg",
  approach: "build-fast-iterate",
  philosophy: "no-bs-solutions"
};`}
              </pre>
            </div>
          </div>
        </div>
        
        <div className="hero__scroll-indicator">
          <span>Scroll</span>
          <div className="hero__scroll-line" />
        </div>
      </section>

      {/* STATS */}
      <section className="stats">
        <div className="container">
          <div className="stats__grid">
            {stats.map((stat, i) => (
              <div key={i} className="stats__item">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services">
        <div className="container">
          <div className="section-header">
            <div className="section-label">Leistungen</div>
            <h2 className="section-title">
              Was wir<br /><span className="text-gradient">machen</span>
            </h2>
          </div>
          
          <div className="services__grid">
            {services.map((service, i) => (
              <div 
                key={i}
                className={`service-card ${activeService === i ? 'service-card--active' : ''}`}
                onMouseEnter={() => setActiveService(i)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className="service-card__number">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="service-card__icon">
                  {service.icon}
                </div>
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.description}</p>
                <a href="/services" className="service-card__link">
                  Mehr erfahren
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6H10M10 6L7 3M10 6L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </a>
                <div className="brutalist-corner-tl" />
                <div className="brutalist-corner-br" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE SCANNER (VIRAL TRIGGER) */}
      <section className="section" style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <div className="scanner-text animate-fade-up">
              <div className="section-label">IT-Sicherheits-Audit</div>
              <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                Bist du ein <span className="text-gradient">leichtes Ziel?</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2rem' }}>
                Cyberangriffe treffen längst nicht mehr nur Konzerne. KMUs sind das perfekte Ziel, weil die Infrastruktur oft veraltet ist. Wir finden die Schwachstellen, bevor es andere tun.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2.5rem' }}>
                {[
                  'Penetration Testing der Web-Infrastruktur',
                  'Überprüfung von Server-Konfigurationen',
                  'DSGVO-Compliance Check',
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', marginBottom: '0.75rem', color: 'var(--text-muted)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginTop: '0.25rem', flexShrink: 0 }}>
                      <path d="M3 8L6 11L13 4" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="scanner-widget animate-fade-up delay-2">
              <SystemScanner />
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-block">
            <div className="cta-block__content">
              <h2 className="cta-block__title">
                Bereit für den nächsten<br />Schritt?
              </h2>
              <p className="cta-block__text">
                Kein Verkaufsgespräch. Kein PPT. Nur ein ehrliches Gespräch über das, was dein Unternehmen wirklich braucht.
              </p>
            </div>
            <div className="cta-block__action">
              <a href="/kontakt" className="btn btn--primary btn--large">
                Jetzt Kontakt aufnehmen
              </a>
              <span className="cta-block__note">Reaktion innerhalb von 24h garantiert</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div className="footer__brand">
              <div className="footer__logo">devmiro</div>
              <p className="footer__tagline">
                IT-Lösungen für Unternehmen<br />in Vorarlberg & Österreich
              </p>
            </div>
            
            <div className="footer__links">
              <div className="footer__col">
                <div className="footer__col-title">Leistungen</div>
                <a href="/services">IT-Infrastruktur</a>
                <a href="/services">Webentwicklung</a>
                <a href="/services">Automatisierung</a>
                <a href="/services">IT-Security</a>
              </div>
              
              <div className="footer__col">
                <div className="footer__col-title">Unternehmen</div>
                <a href="/about">Über uns</a>
                <a href="/referenzen">Referenzen</a>
                <a href="/preise">Preise</a>
                <a href="/kontakt">Kontakt</a>
              </div>
              
              <div className="footer__col">
                <div className="footer__col-title">Rechtliches</div>
                <a href="/impressum">Impressum</a>
                <a href="/datenschutz">Datenschutz</a>
                <a href="/agb">AGB</a>
              </div>
            </div>
          </div>
          
          <div className="footer__bottom">
            <div className="brutalist-line" />
            <div className="footer__bottom-content">
              <span>© 2026 devmiro — Alle Rechte vorbehalten</span>
              <span className="footer__location">Bregenz, Vorarlberg, Österreich</span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        /* HERO */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          padding: calc(var(--header-height) + var(--space-xl)) 0 var(--space-xl);
          overflow: hidden;
        }

        .hero__bg-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--accent), transparent);
        }

        .hero .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-xl);
          align-items: center;
        }

        .hero__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 2rem;
          padding: 0.5rem 1rem;
          border: 1px solid var(--border);
          width: fit-content;
        }

        .hero__badge-dot {
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        .hero__headline {
          font-size: clamp(3rem, 8vw, 6rem);
          font-weight: 800;
          text-transform: uppercase;
          line-height: 0.95;
          margin-bottom: 2rem;
        }

        .hero__headline-top {
          display: block;
          color: var(--text);
        }

        .hero__headline-bottom {
          display: block;
          color: var(--text-dim);
        }

        .hero__sub {
          font-size: 1.25rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin-bottom: 3rem;
          max-width: 480px;
        }

        .hero__cta {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hero__graphic {
          position: relative;
        }

        .hero__code-block {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          font-family: var(--font-mono);
        }

        .hero__code-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          border-bottom: 1px solid var(--border);
          background: var(--bg-tertiary);
        }

        .hero__code-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--border);
        }

        .hero__code-dot:first-child { background: #FF5F56; }
        .hero__code-dot:nth-child(2) { background: #FFBD2E; }
        .hero__code-dot:nth-child(3) { background: #27CA40; }

        .hero__code-lang {
          margin-left: auto;
          font-size: 0.65rem;
          color: var(--text-dim);
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .hero__code {
          padding: 1.5rem;
          font-size: 0.85rem;
          line-height: 1.8;
          color: var(--text-muted);
          overflow-x: auto;
        }

        .hero__scroll-indicator {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        .hero__scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, var(--accent), transparent);
          animation: scrollLine 2s infinite;
        }

        @keyframes scrollLine {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }

        /* STATS */
        .stats {
          padding: var(--space-lg) 0;
          border-top: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          background: var(--bg-secondary);
        }

        .stats__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
        }

        .stats__item {
          text-align: center;
          padding: var(--space-md);
          position: relative;
        }

        .stats__item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 25%;
          height: 50%;
          width: 1px;
          background: var(--border);
        }

        /* SECTION HEADER */
        .section-header {
          margin-bottom: var(--space-lg);
        }

        .section-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1;
        }

        /* SERVICES */
        .services {
          background: var(--bg);
        }

        .services__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
        }

        .service-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border);
          padding: 3rem;
          position: relative;
          transition: all var(--duration-mid) var(--ease);
          cursor: pointer;
        }

        .service-card:hover,
        .service-card--active {
          background: var(--bg-tertiary);
          border-color: var(--accent);
          z-index: 1;
        }

        .service-card__number {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--accent);
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
        }

        .service-card__icon {
          color: var(--text);
          margin-bottom: 1.5rem;
          transition: color var(--duration-fast);
        }

        .service-card:hover .service-card__icon,
        .service-card--active .service-card__icon {
          color: var(--accent);
        }

        .service-card__title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          text-transform: uppercase;
        }

        .service-card__desc {
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .service-card__link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-family: var(--font-mono);
          font-size: 0.7rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text-muted);
          transition: color var(--duration-fast);
        }

        .service-card:hover .service-card__link,
        .service-card--active .service-card__link {
          color: var(--accent);
        }

        /* CTA SECTION */
        .cta-section {
          background: var(--bg-secondary);
        }

        .cta-block {
          display: grid;
          grid-template-columns: 1fr auto;
          gap: var(--space-xl);
          align-items: center;
          padding: var(--space-xl);
          border: 1px solid var(--border);
          position: relative;
        }

        .cta-block::before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          height: 3px;
          background: var(--accent);
        }

        .cta-block__title {
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 1rem;
        }

        .cta-block__text {
          color: var(--text-muted);
          font-size: 1.1rem;
          max-width: 500px;
        }

        .cta-block__action {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .btn--large {
          padding: 1.25rem 2.5rem;
          font-size: 1rem;
        }

        .cta-block__note {
          font-family: var(--font-mono);
          font-size: 0.65rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--text-dim);
        }

        /* FOOTER */
        .footer {
          padding: var(--space-xl) 0 var(--space-lg);
          border-top: 1px solid var(--border);
        }

        .footer__grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: var(--space-xl);
          margin-bottom: var(--space-xl);
        }

        .footer__logo {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .footer__tagline {
          color: var(--text-muted);
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .footer__links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: var(--space-md);
        }

        .footer__col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .footer__col-title {
          font-family: var(--font-mono);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--text);
          margin-bottom: 0.5rem;
        }

        .footer__col a {
          font-size: 0.9rem;
          color: var(--text-muted);
          transition: color var(--duration-fast);
        }

        .footer__col a:hover {
          color: var(--accent);
        }

        .footer__bottom {
          margin-top: var(--space-lg);
        }

        .footer__bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--space-md);
          font-family: var(--font-mono);
          font-size: 0.7rem;
          color: var(--text-dim);
          letter-spacing: 0.05em;
        }

        /* RESPONSIVE */
        @media (max-width: 1024px) {
          .hero .container {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .hero__sub {
            margin-left: auto;
            margin-right: auto;
          }

          .hero__cta {
            justify-content: center;
          }

          .hero__graphic {
            display: none;
          }

          .stats__grid {
            grid-template-columns: 1fr;
          }

          .stats__item:not(:last-child)::after {
            display: none;
          }

          .services__grid {
            grid-template-columns: 1fr;
          }

          .cta-block {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .cta-block__text {
            margin: 0 auto;
          }

          .footer__grid {
            grid-template-columns: 1fr;
          }

          .footer__links {
            grid-template-columns: repeat(2, 1fr);
          }

          .footer__bottom-content {
            flex-direction: column;
            gap: 0.5rem;
            text-align: center;
          }
        }

        @media (max-width: 640px) {
          .footer__links {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  );
}
