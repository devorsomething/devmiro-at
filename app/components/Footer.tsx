'use client';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      background: 'var(--graphite)',
      borderTop: '1px solid var(--smoke)',
      position: 'relative',
    }}>
      {/* Electric accent line at top */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, var(--electric), transparent)',
        opacity: 0.6,
      }} />
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem 1.5rem 2rem' }}>
        {/* Top section: Logo + Nav columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '4rem',
          marginBottom: '4rem',
        }}>
          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <LogoMark />
              <span style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: '1.5rem',
                fontWeight: 400,
                color: 'var(--white)',
                letterSpacing: '-0.02em',
              }}>
                DEV<span style={{ color: 'var(--electric)' }}>MIRO</span>
              </span>
            </div>
            <p style={{
              fontSize: '0.9rem',
              color: 'var(--ash)',
              lineHeight: 1.7,
              maxWidth: 260,
              marginBottom: '1.5rem',
            }}>
              IT-Lösungen für Vorarlberg KMUs. Professionell, transparent, ohne Überraschungen.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              {['LinkedIn', 'GitHub', 'Xing'].map((social) => (
                <a
                  key={social}
                  href="#"
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--ash)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--electric)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ash)')}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
          
          {/* Nav columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2rem',
          }}>
            {/* Leistungen */}
            <div>
              <h4 style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--electric)',
                marginBottom: '1.25rem',
              }}>
                Leistungen
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { href: '/services', label: 'Services' },
                  { href: '/fixed-price', label: 'Fixed Price' },
                  { href: '/gdpr', label: 'DSGVO-konform' },
                  { href: '/it-companies', label: 'IT-Firmen' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} style={{
                      fontSize: '0.875rem',
                      color: 'var(--ash)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--white)')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ash)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Unternehmen */}
            <div>
              <h4 style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--electric)',
                marginBottom: '1.25rem',
              }}>
                Unternehmen
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { href: '/kontakt', label: 'Kontakt' },
                  { href: '/start', label: 'Projekt starten' },
                  { href: '/', label: 'Über uns' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} style={{
                      fontSize: '0.875rem',
                      color: 'var(--ash)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--white)')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ash)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Rechtliches */}
            <div>
              <h4 style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--electric)',
                marginBottom: '1.25rem',
              }}>
                Rechtliches
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {[
                  { href: '/datenschutz', label: 'Datenschutz' },
                  { href: '/impressum', label: 'Impressum' },
                ].map((link) => (
                  <li key={link.href}>
                    <a href={link.href} style={{
                      fontSize: '0.875rem',
                      color: 'var(--ash)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                      onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--white)')}
                      onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ash)')}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div style={{
          borderTop: '1px solid var(--smoke)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            fontSize: '0.8rem',
            color: 'var(--ash)',
          }}>
            © {currentYear} DEVMIRO. Alle Rechte vorbehalten. Eingetragen in Vorarlberg, Österreich.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <p style={{
              fontSize: '0.8rem',
              color: 'var(--ash)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}>
              <span style={{
                color: '#10b981',
                fontSize: '0.6rem',
              }}>●</span> Serverstandort: EU
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="/impressum" style={{
                fontSize: '0.8rem',
                color: 'var(--ash)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--white)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ash)')}
              >
                Impressum
              </a>
              <a href="/datenschutz" style={{
                fontSize: '0.8rem',
                color: 'var(--ash)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--white)')}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--ash)')}
              >
                Datenschutz
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LogoMark() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="36" height="36" rx="8" fill="var(--obsidian)"/>
      <rect x="1" y="1" width="34" height="34" rx="7" stroke="rgba(200,255,0,0.3)" strokeWidth="1"/>
      <path d="M10 9h7l-2.5 9h6L14.5 9h7" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="27" cy="27" r="3.5" fill="var(--electric)" opacity="0.7"/>
      <circle cx="27" cy="27" r="1.75" fill="var(--electric)"/>
    </svg>
  );
}
