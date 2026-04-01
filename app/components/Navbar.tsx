'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container-wide nav-inner">
        <Link href="/" className="nav-logo">
          <svg width="36" height="36" viewBox="0 0 100 100">
            <rect width="100" height="100" rx="20" fill="var(--graphite)"/>
            <text x="50" y="68" textAnchor="middle" fontSize="50" fontWeight="bold" fill="var(--electric)">D</text>
          </svg>
          <span className="nav-logo-text">DEVMIRO</span>
        </Link>

        <nav className="nav-links">
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/projects" className="nav-link">Projekte</Link>
          <Link href="/fixed-price" className="nav-link">Fixed Price</Link>
          <Link href="/about" className="nav-link">Über uns</Link>
        </nav>

        <div className="nav-actions">
          <Link href="/kontakt" className="btn-outline nav-cta">
            Kontakt
          </Link>
        </div>

        <button 
          className="nav-mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <line x1="3" y1="12" x2="21" y2="12"/>
                <line x1="3" y1="18" x2="21" y2="18"/>
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="nav-mobile-menu">
          <Link href="/services" className="nav-mobile-link">Services</Link>
          <Link href="/projects" className="nav-mobile-link">Projekte</Link>
          <Link href="/fixed-price" className="nav-mobile-link">Fixed Price</Link>
          <Link href="/about" className="nav-mobile-link">Über uns</Link>
          <Link href="/kontakt" className="nav-mobile-link">Kontakt</Link>
        </div>
      )}

      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: transparent;
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
        }

        .nav-scrolled {
          background: rgba(5, 5, 7, 0.85);
          backdrop-filter: blur(20px);
          border-color: rgba(255, 255, 255, 0.08);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.5rem;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
        }

        .nav-logo-text {
          font-family: 'Instrument Serif', Georgia, serif;
          font-size: 1.125rem;
          color: var(--white);
          letter-spacing: 0.05em;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          font-size: 0.9rem;
          color: var(--ash);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: var(--white);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .nav-cta {
          padding: 0.6rem 1.25rem;
          font-size: 0.85rem;
        }

        .nav-mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: var(--white);
          cursor: pointer;
          padding: 0.5rem;
        }

        .nav-mobile-menu {
          display: none;
          flex-direction: column;
          background: var(--graphite);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 1rem;
        }

        .nav-mobile-link {
          padding: 0.75rem 0;
          font-size: 1rem;
          color: var(--white);
          text-decoration: none;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 768px) {
          .nav-links,
          .nav-actions {
            display: none;
          }

          .nav-mobile-toggle {
            display: block;
          }

          .nav-mobile-menu {
            display: flex;
          }
        }
      `}</style>
    </header>
  );
}
