import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-gradient-line" />
      <div className="container-max footer-inner">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="40" height="40" viewBox="0 0 100 100">
              <rect width="100" height="100" rx="20" fill="var(--graphite)"/>
              <text x="50" y="68" textAnchor="middle" fontSize="50" fontWeight="bold" fill="var(--electric)">D</text>
            </svg>
            <span className="footer-logo-text">DEVMIRO</span>
          </div>
          <p className="footer-tagline">
            Webentwicklung ohne Kompromisse.<br />
            IT-Lösungen für Vorarlberg KMUs.
          </p>
        </div>

        {/* Navigation Columns */}
        <div className="footer-nav-grid">
          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Services</h4>
            <ul className="footer-nav-list">
              <li><Link href="/services">Webentwicklung</Link></li>
              <li><Link href="/services">WordPress CMS</Link></li>
              <li><Link href="/services">SEO Optimierung</Link></li>
              <li><Link href="/fixed-price">Fixed Price</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Company</h4>
            <ul className="footer-nav-list">
              <li><Link href="/about">Über uns</Link></li>
              <li><Link href="/projects">Projekte</Link></li>
              <li><Link href="/kontakt">Kontakt</Link></li>
              <li><Link href="/start">Projekt starten</Link></li>
            </ul>
          </div>

          <div className="footer-nav-column">
            <h4 className="footer-nav-title">Legal</h4>
            <ul className="footer-nav-list">
              <li><Link href="/datenschutz">Datenschutz</Link></li>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/agb">AGB</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container-max footer-bottom-inner">
          <p className="footer-copyright">© {currentYear} Devmiro. Alle Rechte vorbehalten.</p>
          <div className="footer-links">
            <Link href="/datenschutz">Datenschutz</Link>
            <span className="footer-link-divider">·</span>
            <Link href="/impressum">Impressum</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
