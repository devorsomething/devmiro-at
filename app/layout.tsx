import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://devmiro.at'),
  title: { default: 'DEVMIRO — IT-Lösungen für Vorarlberg KMUs', template: '%s | DEVMIRO' },
  description: 'DEVMIRO bietet IT-Lösungen, Webdesign und digitale Transformation für Unternehmen in Vorarlberg und ganz Österreich. Premium-Qualität, fixe Preise.',
  keywords: ['IT-Lösungen Vorarlberg', 'Webdesign Bregenz', 'KMU Digitalisierung', 'Business Website', 'Website erstellen Österreich'],
  authors: [{ name: 'DEVMIRO', url: 'https://devmiro.at' }],
  creator: 'DEVMIRO',
  publisher: 'DEVMIRO',
  alternates: {
    canonical: 'https://devmiro.at',
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%23ffffff'/><text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' font-family='system-ui' font-weight='bold' font-size='18' fill='%230071E3'>D</text></svg>",
  },
  openGraph: {
    title: 'DEVMIRO — IT-Lösungen für Vorarlberg KMUs',
    description: 'Premium IT-Lösungen, Webdesign und digitale Transformation. Fixe Preise, keine Überraschungen.',
    url: 'https://devmiro.at',
    siteName: 'DEVMIRO',
    locale: 'de_AT',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'DEVMIRO',
              url: 'https://devmiro.at',
              logo: 'https://devmiro.at/favicon.png',
              description: 'IT-Lösungen, Webdesign und digitale Transformation für Unternehmen in Vorarlberg und ganz Österreich.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bregenz',
                addressRegion: 'Vorarlberg',
                addressCountry: 'AT',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'hallo@devmiro.at',
                telephone: '+436601234567',
                contactType: 'customer service',
                areaServed: 'AT',
                availableLanguage: ['German', 'English'],
              },
              priceRange: '€€',
              areaServed: {
                '@type': 'Place',
                name: 'Vorarlberg, Österreich',
              },
            }),
          }}
        />
      </head>
      <body>
        {/* Navigation */}
        <nav className="nav">
          <div className="nav__inner">
            <a href="/" className="nav__logo">DEVMIRO</a>
            <ul className="nav__links">
              <li><a href="#services" className="nav__link">Leistungen</a></li>
              <li><a href="#pricing" className="nav__link">Preise</a></li>
              <li><a href="#portfolio" className="nav__link">Portfolio</a></li>
              <li><a href="#testimonials" className="nav__link">Kundenstimmen</a></li>
              <li><a href="#contact" className="nav__link">Kontakt</a></li>
            </ul>
            <a href="#contact" className="btn btn--primary nav__cta">Angebot anfragen</a>
            <button className="nav__mobile-toggle" aria-label="Menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer__top">
              <div>
                <div className="footer__brand-name">DEVMIRO</div>
                <p className="footer__brand-desc">IT-Lösungen für Unternehmen in Vorarlberg und Österreich. Transparent. Verlässlich. Fixe Preise.</p>
              </div>
              <div className="footer__cols">
                <div>
                  <div className="footer__col-title">Leistungen</div>
                  <ul className="footer__col-links">
                    <li><a href="#services" className="footer__col-link">IT-Infrastruktur</a></li>
                    <li><a href="#services" className="footer__col-link">Webentwicklung</a></li>
                    <li><a href="#services" className="footer__col-link">Automatisierung</a></li>
                    <li><a href="#services" className="footer__col-link">IT-Security</a></li>
                  </ul>
                </div>
                <div>
                  <div className="footer__col-title">Unternehmen</div>
                  <ul className="footer__col-links">
                    <li><a href="#portfolio" className="footer__col-link">Portfolio</a></li>
                    <li><a href="#pricing" className="footer__col-link">Preise</a></li>
                    <li><a href="#contact" className="footer__col-link">Kontakt</a></li>
                  </ul>
                </div>
                <div>
                  <div className="footer__col-title">Rechtliches</div>
                  <ul className="footer__col-links">
                    <li><a href="/impressum" className="footer__col-link">Impressum</a></li>
                    <li><a href="/datenschutz" className="footer__col-link">Datenschutz</a></li>
                    <li><a href="/agb" className="footer__col-link">AGB</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer__bottom">
              <p className="footer__copy">© {new Date().getFullYear()} DEVMIRO. Alle Rechte vorbehalten.</p>
              <div className="footer__bottom-links">
                <a href="/impressum" className="footer__bottom-link">Impressum</a>
                <a href="/datenschutz" className="footer__bottom-link">Datenschutz</a>
                <a href="/agb" className="footer__bottom-link">AGB</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
