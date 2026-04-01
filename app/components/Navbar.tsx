'use client';

export function Header() {
  return (
    <header className="navbar">
      <nav className="navbar-inner">
        {/* Logo */}
        <a href="/" className="navbar-logo">
          <LogoMark />
          <span className="navbar-logo-text">
            DEV<span className="electric">MIRO</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="navbar-links">
          {[
            { href: '/', label: 'Home' },
            { href: '/services', label: 'Services' },
            { href: '/fixed-price', label: 'Fixed Price' },
            { href: '/gdpr', label: 'DSGVO' },
            { href: '/kontakt', label: 'Kontakt' },
          ].map((item) => (
            <a key={item.href} href={item.href} className="navbar-link">
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="navbar-cta">
          <a href="/start" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.3rem' }}>
            Projekt starten
          </a>
          <MobileMenu />
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(5, 5, 7, 0.8);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease, background 0.3s ease;
        }
        .navbar.scrolled {
          border-bottom-color: var(--smoke);
          background: rgba(5, 5, 7, 0.95);
        }
        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }
        .navbar-logo-text {
          font-family: 'DM Sans', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--white);
          letter-spacing: -0.02em;
        }
        .electric {
          color: var(--electric);
        }
        .navbar-links {
          display: none;
          align-items: center;
          gap: 0.25rem;
        }
        @media (min-width: 768px) {
          .navbar-links { display: flex; }
        }
        .navbar-link {
          padding: 0.4rem 0.85rem;
          border-radius: 6px;
          font-size: 0.875rem;
          font-weight: 500;
          color: var(--ash);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .navbar-link:hover {
          color: var(--white);
          background: rgba(255,255,255,0.05);
        }
        .navbar-cta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
      `}</style>
    </header>
  );
}

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="var(--graphite)"/>
      <rect x="1" y="1" width="30" height="30" rx="7" stroke="rgba(200,255,0,0.3)" strokeWidth="1"/>
      <path d="M9 8h6l-2 8h5L14 8h5" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="24" cy="24" r="3" fill="var(--electric)" opacity="0.6"/>
      <circle cx="24" cy="24" r="1.5" fill="var(--electric)"/>
    </svg>
  );
}

function MobileMenu() {
  return (
    <button
      className="mobile-menu-btn md:hidden"
      aria-label="Menu"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>

      <style jsx>{`
        .mobile-menu-btn {
          background: none;
          border: 1px solid var(--smoke);
          border-radius: 8px;
          padding: 0.5rem;
          cursor: pointer;
          color: var(--ash);
          display: flex;
          align-items: center;
        }
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none; }
        }
      `}</style>
    </button>
  );
}
