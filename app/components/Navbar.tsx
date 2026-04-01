'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/fixed-price', label: 'Fixed Price' },
  { href: '/datenschutz', label: 'Datenschutz' },
  { href: '/impressum', label: 'Impressum' },
  { href: '/kontakt', label: 'Kontakt' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <nav className="navbar-inner">
          {/* Logo */}
          <a href="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
            <LogoMark />
            <span className="navbar-logo-text">
              DEV<span className="electric">MIRO</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="navbar-links">
            {navLinks.map((item) => (
              <a key={item.href} href={item.href} className="navbar-link">
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="navbar-cta">
            <a href="/start" className="btn-primary desktop-cta">
              Projekt starten
            </a>
            <button
              className="mobile-menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Menu schließen' : 'Menu öffnen'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="mobile-menu" onClick={() => setMenuOpen(false)}>
          <div className="mobile-menu-inner" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <span className="navbar-logo-text">
                DEV<span className="electric">MIRO</span>
              </span>
              <button
                className="mobile-close-btn"
                onClick={() => setMenuOpen(false)}
                aria-label="Schließen"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="mobile-nav-links">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a href="/start" className="btn-primary mobile-cta" onClick={() => setMenuOpen(false)}>
              Projekt starten
            </a>
          </div>
        </div>
      )}

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
          z-index: 101;
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
          z-index: 101;
        }
        .desktop-cta {
          display: none;
          font-size: 0.85rem;
          padding: 0.6rem 1.3rem;
          text-decoration: none;
        }
        @media (min-width: 768px) {
          .desktop-cta { display: inline-flex; }
        }
        .mobile-menu-btn {
          background: none;
          border: 1px solid var(--smoke);
          border-radius: 8px;
          padding: 0.5rem;
          cursor: pointer;
          color: var(--ash);
          display: flex;
          align-items: center;
          transition: border-color 0.2s, color 0.2s;
        }
        .mobile-menu-btn:hover {
          border-color: var(--electric);
          color: var(--white);
        }
        @media (min-width: 768px) {
          .mobile-menu-btn { display: none; }
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          inset: 0;
          z-index: 99;
          background: rgba(5, 5, 7, 0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          animation: fadeIn 0.2s ease;
        }
        .mobile-menu-inner {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(320px, 85vw);
          background: var(--graphite);
          border-left: 1px solid var(--smoke);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          animation: slideIn 0.25s ease;
        }
        .mobile-menu-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--smoke);
          margin-bottom: 0.5rem;
        }
        .mobile-close-btn {
          background: none;
          border: 1px solid var(--smoke);
          border-radius: 8px;
          padding: 0.4rem;
          cursor: pointer;
          color: var(--ash);
          display: flex;
          align-items: center;
          transition: border-color 0.2s, color 0.2s;
        }
        .mobile-close-btn:hover {
          border-color: var(--electric);
          color: var(--white);
        }
        .mobile-nav-links {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
        }
        .mobile-nav-link {
          padding: 0.85rem 1rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 500;
          color: var(--ash);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
          border: 1px solid transparent;
        }
        .mobile-nav-link:hover {
          color: var(--white);
          background: rgba(255,255,255,0.04);
          border-color: var(--smoke);
        }
        .mobile-cta {
          width: 100%;
          justify-content: center;
          text-decoration: none;
          margin-top: auto;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
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
