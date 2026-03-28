import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              devmiro.at
            </Link>
            <p className="footer-tagline">
              IT-Lösungen für Vorarlberg KMUs. Websites, KI-Chatbots und
              Business-Automatisierung — alles aus einer Hand. Schneller,
              klüger, billiger.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Leistungen</h4>
            <div className="footer-links">
              <Link href="/services">Website Entwicklung</Link>
              <Link href="/services">KI-Chatbot</Link>
              <Link href="/services">AI-Workflow</Link>
              <Link href="/services">DSGVO-Quickcheck</Link>
              <Link href="/services">Social Media</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Unternehmen</h4>
            <div className="footer-links">
              <Link href="/about">Über uns</Link>
              <Link href="/kontakt">Kontakt</Link>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Kontakt</h4>
            <div className="footer-links">
              <a href="mailto:info@devmiro.at">info@devmiro.at</a>
              <a href="tel:+436641234567">+43 664 123 4567</a>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Bregenz, Vorarlberg
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Österreich
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} DevMiro — Alle Rechte vorbehalten.</span>
          <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-mono)' }}>
            Made in Vorarlberg 🇦🇹
          </span>
        </div>
      </div>
    </footer>
  )
}
