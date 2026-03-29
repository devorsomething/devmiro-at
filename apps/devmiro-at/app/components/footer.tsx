import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link href="/" className="footer__logo">
              devmiro<span>.</span>
            </Link>
            <p className="footer__tagline">
              IT-Lösungen für Vorarlberg KMUs. Websites, KI-Chatbots und
              Business-Automatisierung — alles aus einer Hand. Schneller,
              persönlicher, mit dem lokalen Biss.
            </p>
          </div>

          <div>
            <h4 className="footer__col-title">Leistungen</h4>
            <div className="footer__links">
              <Link href="/services">Website Entwicklung</Link>
              <Link href="/services">KI-Chatbot</Link>
              <Link href="/services">Workflow-Automatisierung</Link>
              <Link href="/services">SEO & Google Ads</Link>
              <Link href="/services">Social Media</Link>
              <Link href="/services">Online Terminbuchung</Link>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Unternehmen</h4>
            <div className="footer__links">
              <Link href="/about">Über mich</Link>
              <Link href="/kontakt">Kontakt</Link>
              <Link href="/impressum">Impressum</Link>
              <Link href="/datenschutz">Datenschutz</Link>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">Kontakt</h4>
            <div className="footer__links">
              <a href="mailto:info@devmiro.at">info@devmiro.at</a>
              <a href="tel:+436641234567">+43 664 123 4567</a>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Bregenz, Vorarlberg
              </span>
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                Österreich
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {currentYear} DevMiro — Alle Rechte vorbehalten.</span>
          <span className="footer__bottom-accent">Made in Vorarlberg 🇦🇹</span>
        </div>
      </div>
    </footer>
  )
}
