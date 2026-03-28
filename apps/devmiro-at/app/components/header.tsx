'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="logo">
              devmiro.at
            </Link>

            <nav className="nav-links" aria-label="Hauptnavigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={pathname === link.href ? 'active' : ''}
                  style={{
                    color: pathname === link.href ? 'var(--accent)' : undefined,
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="nav-actions">
              <Link href="/kontakt" className="btn btn-primary">
                Projekt starten
              </Link>

              <button
                className="mobile-menu-btn"
                onClick={() => setMenuOpen(true)}
                aria-label="Menü öffnen"
              >
                <Menu size={20} />
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
        <div className="mobile-nav-header">
          <Link
            href="/"
            className="logo"
            onClick={() => setMenuOpen(false)}
          >
            devmiro.at
          </Link>
          <button
            onClick={() => setMenuOpen(false)}
            style={{ background: 'none', border: 'none', cursor: 'none', color: 'var(--text-primary)' }}
            aria-label="Menü schließen"
          >
            <X size={24} />
          </button>
        </div>
        <div className="mobile-nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <Link
            href="/kontakt"
            className="btn btn-primary btn-lg"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => setMenuOpen(false)}
          >
            Projekt starten →
          </Link>
        </div>
      </div>
    </>
  )
}
