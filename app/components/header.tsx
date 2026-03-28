'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    }
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Leistungen' },
    { href: '/about', label: 'Über' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              devmiro
            </Link>

            <nav className="nav-links" aria-label="Hauptnavigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="nav-actions">
              <Link
                href="/kontakt"
                className="btn btn-primary"
                style={{ fontSize: '0.8rem', padding: '0.45rem 1rem' }}
              >
                Projekt starten
              </Link>

              <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(true)}
                aria-label="Menü öffnen"
              >
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-nav-header">
          <Link href="/" className="nav-logo" onClick={() => setMenuOpen(false)}>
            devmiro
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#fff' }}
            aria-label="Menü schließen"
          >
            <X size={24} />
          </button>
        </div>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
          <Link
            href="/kontakt"
            className="btn btn-primary btn-lg"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setMenuOpen(false)}
          >
            Projekt starten
          </Link>
        </div>
      </div>
    </>
  )
}
