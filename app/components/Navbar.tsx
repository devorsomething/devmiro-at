'use client';

export function Header() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(7, 11, 20, 0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(26, 42, 66, 0.8)',
    }}>
      <nav style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 1.5rem',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        {/* Logo */}
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}>
          <LogoMark />
          <span style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '1.25rem', fontWeight: 700,
            color: '#f0f6fc', letterSpacing: '-0.02em',
          }}>
            DEV<span style={{ color: '#00b4d8' }}>MIRO</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }} className="hidden md:flex">
          {[
            { href: '/', label: 'Home' },
            { href: '/services', label: 'Services' },
            { href: '/fixed-price', label: 'Fixed Price' },
            { href: '/gdpr', label: 'DSGVO' },
            { href: '/it-companies', label: 'IT-Firmen' },
            { href: '/kontakt', label: 'Kontakt' },
          ].map((item) => (
            <a key={item.href} href={item.href}
              style={{
                padding: '0.4rem 0.85rem', borderRadius: 6,
                fontSize: '0.875rem', fontWeight: 500,
                color: '#8b949e', textDecoration: 'none',
                transition: 'color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#f0f6fc';
                (e.target as HTMLElement).style.background = 'rgba(255,255,255,0.05)';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#8b949e';
                (e.target as HTMLElement).style.background = 'transparent';
              }}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <a href="/start" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.55rem 1.25rem' }}>
            Projekt starten
          </a>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{
      borderTop: '1px solid rgba(26, 42, 66, 0.8)',
      background: '#070b14',
      paddingTop: 4,
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 1.5rem 2rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2.5rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <LogoMark />
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#f0f6fc' }}>
                DEV<span style={{ color: '#00b4d8' }}>MIRO</span>
              </span>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#8b949e', lineHeight: 1.6, maxWidth: 220 }}>
              IT-Lösungen für Vorarlberg KMUs. Professionell, transparent, ohne Überraschungen.
            </p>
          </div>

          {/* Links */}
          {[
            {
              title: 'Leistungen',
              links: [
                { href: '/services', label: 'Services' },
                { href: '/fixed-price', label: 'Fixed Price' },
                { href: '/gdpr', label: 'DSGVO-konform' },
                { href: '/it-companies', label: 'IT-Firmen' },
              ],
            },
            {
              title: 'Unternehmen',
              links: [
                { href: '/kontakt', label: 'Kontakt' },
                { href: '/start', label: 'Projekt starten' },
              ],
            },
            {
              title: 'Rechtliches',
              links: [
                { href: '/gdpr', label: 'Datenschutz' },
                { href: '/kontakt', label: 'Impressum' },
              ],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#00b4d8', marginBottom: '1rem' }}>
                {col.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} style={{ fontSize: '0.875rem', color: '#8b949e', textDecoration: 'none', transition: 'color 0.2s' }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#f0f6fc')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#8b949e')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: '1px solid rgba(26, 42, 66, 0.6)',
          paddingTop: '1.5rem',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <p style={{ fontSize: '0.8rem', color: '#4a5568' }}>
            © {currentYear} DEVMIRO. Alle Rechte vorbehalten. Eingetragen in Vorarlberg, Österreich.
          </p>
          <p style={{ fontSize: '0.8rem', color: '#4a5568' }}>
            <span style={{ color: '#00b4d8' }}>●</span> Serverstandort: EU
          </p>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="32" height="32" rx="8" fill="#0c1220"/>
      <rect x="1" y="1" width="30" height="30" rx="7" stroke="rgba(0,180,216,0.4)" strokeWidth="1"/>
      <path d="M9 8h6l-2 8h5L14 8h5" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="24" cy="24" r="3" fill="#00b4d8" opacity="0.6"/>
      <circle cx="24" cy="24" r="1.5" fill="#00b4d8"/>
    </svg>
  );
}

function MobileMenu() {
  return (
    <button
      className="md:hidden"
      style={{
        background: 'none', border: '1px solid rgba(26,42,66,0.8)',
        borderRadius: 8, padding: '0.5rem', cursor: 'pointer',
        color: '#8b949e', display: 'flex', alignItems: 'center',
      }}
      aria-label="Menu"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
  );
}
