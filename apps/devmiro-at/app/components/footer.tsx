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
              Business-Automatisierung — alles aus einer Hand.
            </p>
          </div>

          <div>
            <h4 className="footer-col-title">Leistungen</h4>
            <div className="footer-links">
              <Link href="/services" className="footer-link">Website Entwicklung</Link>
              <Link href="/services" className="footer-link">KI-Chatbot</Link>
              <Link href="/services" className="footer-link">Social Media</Link>
              <Link href="/services" className="footer-link">SEO Optimierung</Link>
              <Link href="/services" className="footer-link">Hosting & Wartung</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Unternehmen</h4>
            <div className="footer-links">
              <Link href="/about" className="footer-link">Über uns</Link>
              <Link href="/kontakt" className="footer-link">Kontakt</Link>
              <Link href="/impressum" className="footer-link">Impressum</Link>
              <Link href="/datenschutz" className="footer-link">Datenschutz</Link>
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Kontakt</h4>
            <div className="footer-links">
              <a href="mailto:info@devmiro.at" className="footer-link">info@devmiro.at</a>
              <a href="tel:+436641234567" className="footer-link">+43 664 123 4567</a>
              <span className="footer-link">Bregenz, Vorarlberg</span>
              <span className="footer-link">Österreich</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {currentYear} DevMiro. Alle Rechte vorbehalten.</span>
          <span>Made with ❤️ in Vorarlberg</span>
        </div>
      </div>
    </footer>
  )
}
