'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { href: '/services', label: 'Leistungen' },
    { href: '/about', label: 'Über' },
    { href: '/kontakt', label: 'Kontakt' },
  ]

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <Link href="/" className="header__logo">
              devmiro<span>.</span>
            </Link>

            <nav className="header__nav" aria-label="Hauptnavigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Link href="/kontakt" className="header__cta">
                Projekt starten
              </Link>

              <button
                className="header__mobile-btn"
                onClick={() => setMenuOpen(true)}
                aria-label="Menü öffnen"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile nav */}
      <div
        className={`mobile-nav ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
      >
        <div className="mobile-nav__header">
          <Link
            href="/"
            className="mobile-nav__logo"
            onClick={() => setMenuOpen(false)}
          >
            devmiro<span>.</span>
          </Link>
          <button
            className="mobile-nav__close"
            onClick={() => setMenuOpen(false)}
            aria-label="Menü schließen"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="mobile-nav__links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/kontakt"
          className="mobile-nav__cta"
          onClick={() => setMenuOpen(false)}
        >
          Projekt starten →
        </Link>
      </div>
    </>
  )
}
