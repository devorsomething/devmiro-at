'use client'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useEffect, useState } from 'react'

export default function NotFoundPage() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  const glitchTexts = ['404', 'ERROR', 'NOT FOUND', 'LOST?']

  return (
    <>
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg-void)',
        zIndex: -1,
        overflow: 'hidden',
      }}>
        {/* Animated grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0,229,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,229,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'fadeIn 1s ease',
        }} />
        {/* Parallax orbs */}
        <div style={{
          position: 'absolute',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,229,255,0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          left: `${mousePos.x * 100 - 30}%`,
          top: `${mousePos.y * 100 - 30}%`,
          transition: 'left 1s ease, top 1s ease',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
          filter: 'blur(60px)',
          right: '10%',
          bottom: '10%',
          pointerEvents: 'none',
        }} />
      </div>

      <Header />

      <main style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-xl) var(--space-md)',
        paddingTop: 'calc(var(--header-height) + var(--space-xl))',
        position: 'relative',
      }}>
        <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 700 }}>
          {/* Glitch 404 Display */}
          <div style={{
            position: 'relative',
            display: 'inline-block',
            marginBottom: '2rem',
          }}>
            <div style={{
              fontSize: 'clamp(8rem, 20vw, 16rem)',
              fontWeight: 700,
              fontFamily: 'var(--font-mono)',
              letterSpacing: '-0.05em',
              lineHeight: 1,
              background: 'var(--gradient-text)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards',
              opacity: 0,
              textShadow: 'none',
              position: 'relative',
            }}>
              404
            </div>
            {/* Glitch lines */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              right: 0,
              height: 2,
              background: 'var(--accent-cyan)',
              animation: 'fadeIn 1s 0.5s ease forwards',
              opacity: 0,
            }} />
          </div>

          {/* Status code */}
          <div className="badge badge--cyan" style={{ marginBottom: '1.5rem', animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards', opacity: 0 }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent-cyan)', display: 'inline-block', animation: 'pulse-glow 2s ease-in-out infinite' }} />
            HTTP 404 — Page not found
          </div>

          <h1 style={{
            fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
            animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards',
            opacity: 0,
          }}>
            Diese Seite ist<span className="text-gradient"> verschwunden.</span>
          </h1>

          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1.0625rem',
            lineHeight: 1.7,
            maxWidth: 480,
            margin: '0 auto 3rem',
            animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards',
            opacity: 0,
          }}>
            Die Seite, die Sie suchen, existiert nicht mehr, wurde verschoben oder Sie haben sich vielleicht vertippt. Keine Sorge — wir bringen Sie zurück.
          </p>

          {/* Action buttons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
            animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards',
            opacity: 0,
          }}>
            <Link href="/" className="btn btn--primary" style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
              Zur Startseite
            </Link>
            <Link href="/kontakt" className="btn btn--outline" style={{ fontSize: '1rem', padding: '1rem 2.25rem' }}>
              Hilfe kontaktieren
            </Link>
          </div>

          {/* Quick links */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            maxWidth: 360,
            margin: '0 auto',
            animation: 'fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s forwards',
            opacity: 0,
          }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--text-tertiary)',
              marginBottom: '0.5rem',
            }}>
              Vielleicht suchten Sie:
            </span>
            {[
              { href: '/services', label: 'Leistungen', icon: '→' },
              { href: '/portfolio', label: 'Portfolio / Arbeiten', icon: '→' },
              { href: '/preise', label: 'Preise', icon: '→' },
              { href: '/about', label: 'Über uns', icon: '→' },
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.875rem 1.25rem',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 12,
                  color: 'var(--text-secondary)',
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0,229,255,0.05)'
                  e.currentTarget.style.borderColor = 'var(--border-accent)'
                  e.currentTarget.style.color = 'var(--text-primary)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                  e.currentTarget.style.borderColor = 'var(--border-subtle)'
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }}
              >
                {link.label}
                <span style={{ color: 'var(--accent-cyan)' }}>{link.icon}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative floating elements */}
        <div style={{
          position: 'absolute',
          top: '25%',
          left: '8%',
          width: 4,
          height: 4,
          borderRadius: '50%',
          background: 'var(--accent-cyan)',
          opacity: 0.4,
          animation: 'float 4s ease-in-out infinite',
          boxShadow: '0 0 20px var(--accent-cyan)',
        }} />
        <div style={{
          position: 'absolute',
          top: '35%',
          right: '12%',
          width: 3,
          height: 3,
          borderRadius: '50%',
          background: 'var(--accent-purple)',
          opacity: 0.4,
          animation: 'float 5s ease-in-out infinite reverse',
          boxShadow: '0 0 16px var(--accent-purple)',
        }} />
        <div style={{
          position: 'absolute',
          bottom: '30%',
          left: '15%',
          width: 2,
          height: 2,
          borderRadius: '50%',
          background: 'var(--accent-blue)',
          opacity: 0.5,
          animation: 'float 6s ease-in-out infinite',
          boxShadow: '0 0 12px var(--accent-blue)',
        }} />
      </main>

      {/* Minimal footer */}
      <Footer />

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
