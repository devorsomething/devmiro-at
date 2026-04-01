'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Electric accent line */}
      <div className="footer-accent-line" />

      <div className="footer-inner">
        {/* Brand + Tagline */}
        <div className="footer-brand">
          <div className="footer-logo">
            <LogoMark />
            <span className="footer-logo-text">
              DEV<span className="electric">MIRO</span>
            </span>
          </div>
          <p className="footer-tagline">
            IT-Lösungen für Vorarlberg KMUs. Professionell, transparent, ohne Überraschungen.
          </p>
          <div className="footer-social">
            {['LinkedIn', 'GitHub', 'Xing'].map((social) => (
              <a key={social} href="#" className="footer-social-link">
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        <div className="footer-nav">
          {/* Leistungen */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-heading">Leistungen</h4>
            <ul className="footer-nav-list">
              <li><a href="/services">Services</a></li>
              <li><a href="/fixed-price">Fixed Price</a></li>
              <li><a href="/datenschutz">DSGVO-konform</a></li>
              <li><a href="/it-companies">IT-Firmen</a></li>
            </ul>
          </div>

          {/* Unternehmen */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-heading">Unternehmen</h4>
            <ul className="footer-nav-list">
              <li><a href="/kontakt">Kontakt</a></li>
              <li><a href="/start">Projekt starten</a></li>
              <li><a href="/">Über uns</a></li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className="footer-nav-col">
            <h4 className="footer-nav-heading">Rechtliches</h4>
            <ul className="footer-nav-list">
              <li><a href="/datenschutz">Datenschutz</a></li>
              <li><a href="/impressum">Impressum</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <p className="footer-copyright">
          © {currentYear} DEVMIRO. Alle Rechte vorbehalten. Eingetragen in Vorarlberg, Österreich.
        </p>
        <div className="footer-bottom-links">
          <span className="footer-eu-badge">
            <span className="eu-dot" /> Serverstandort: EU
          </span>
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--graphite);
          border-top: 1px solid var(--smoke);
          position: relative;
        }
        .footer-accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--electric), transparent);
          opacity: 0.6;
        }
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 3.5rem 1.5rem 2.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
        }
        @media (min-width: 640px) {
          .footer-inner {
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
          }
        }
        @media (min-width: 1024px) {
          .footer-inner {
            grid-template-columns: 1fr 2fr;
            gap: 4rem;
          }
        }

        /* Brand */
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .footer-logo-text {
          font-family: 'Instrument Serif', serif;
          font-size: 1.4rem;
          font-weight: 400;
          color: var(--white);
          letter-spacing: -0.02em;
        }
        .electric {
          color: var(--electric);
        }
        .footer-tagline {
          font-size: 0.875rem;
          color: var(--ash);
          line-height: 1.7;
          max-width: 280px;
        }
        .footer-social {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .footer-social-link {
          font-size: 0.75rem;
          color: var(--ash);
          text-decoration: none;
          transition: color 0.2s;
          padding: 0.25rem 0;
        }
        .footer-social-link:hover {
          color: var(--electric);
        }

        /* Nav */
        .footer-nav {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 480px) {
          .footer-nav {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem 1rem;
          }
        }
        .footer-nav-col {
          display: flex;
          flex-direction: column;
        }
        .footer-nav-heading {
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--electric);
          margin-bottom: 1rem;
        }
        .footer-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .footer-nav-list li a {
          font-size: 0.875rem;
          color: var(--ash);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-nav-list li a:hover {
          color: var(--white);
        }

        /* Bottom bar */
        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.25rem 1.5rem;
          border-top: 1px solid var(--smoke);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
        .footer-copyright {
          font-size: 0.75rem;
          color: var(--ash);
          line-height: 1.5;
        }
        .footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          flex-wrap: wrap;
        }
        .footer-eu-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.75rem;
          color: var(--ash);
        }
        .eu-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #10b981;
          flex-shrink: 0;
        }
        .footer-bottom-links a {
          font-size: 0.75rem;
          color: var(--ash);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-bottom-links a:hover {
          color: var(--white);
        }
      `}</style>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="var(--obsidian)" />
      <rect x="1" y="1" width="30" height="30" rx="7" stroke="rgba(200,255,0,0.3)" strokeWidth="1" />
      <path d="M9 8h6l-2 8h5L14 8h5" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="24" r="3" fill="var(--electric)" opacity="0.6" />
      <circle cx="24" cy="24" r="1.5" fill="var(--electric)" />
    </svg>
  );
}
