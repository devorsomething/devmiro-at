'use client'

import * as React from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/app/components/ui/button'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#projekte', label: 'Projekte' },
  { href: '#ueber-mich', label: 'Über mich' },
  { href: '#kontakt', label: 'Kontakt' },
]

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--background)]/80 backdrop-blur-lg border-b border-[var(--border)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-bold text-[var(--text-primary)]">
              Dev<span className="text-[var(--accent)]">Miro</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button variant="default" size="sm">
              Audit sichern
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[var(--text-primary)]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Menu schließen' : 'Menu öffnen'}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-[var(--background)] border-b border-[var(--border)] p-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button variant="default" size="sm" className="mt-2">
                Audit sichern
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
