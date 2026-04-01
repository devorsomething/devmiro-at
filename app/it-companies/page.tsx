'use client';



export default function ITCompaniesPage() {
  return (
    <>
      {/* Hero */}
      <section style={{
        minHeight: '80vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        paddingTop: 100, paddingBottom: 4,
        position: 'relative', overflow: 'hidden',
      }}>
        
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,180,216,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container-max" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-tag animate-fade-in-up" style={{ marginBottom: '1.5rem' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="3" fill="#00b4d8"/>
              <circle cx="6" cy="6" r="5.5" stroke="#00b4d8" strokeWidth="1" opacity="0.4"/>
            </svg>
            Web Design für IT-Firmen
          </div>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            fontWeight: 800, lineHeight: 1.1,
            color: '#f0f6fc', marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
          }}>
            Webdesign, das Ihre<br />
            <span className="gradient-text">technische Kompetenz</span><br />
            widerspiegelt.
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#8b949e', lineHeight: 1.7, marginBottom: '2.5rem',
            maxWidth: 620,
          }}>
            IT-Unternehmen brauchen Websites, die genauso modern und zuverlässig sind wie ihre Services. Wir designen und entwickeln Websites, die Ihre technische Expertise zeigen — nicht eine Version von 2015.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="/start" className="btn-primary">
              Projekt starten
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="/kontakt" className="btn-outline">Kontakt</a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section style={{ padding: '5rem 0', background: 'rgba(0,180,216,0.02)' }}>
        <div className="container-max">
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700, color: '#f0f6fc', marginBottom: '3rem',
            textAlign: 'center',
          }}>
            Warum IT-Firmen bei ihrer Website scheitern
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                    <line x1="12" y1="18" x2="12.01" y2="18"/>
                  </svg>
                ),
                title: "Sieht aus wie 2015",
                desc: "Ihr potenciales Kunden sehen Ihre Website auf ihrem Handy. Wenn sie aussieht wie eine GeoCities-Seite, denken sie das Gleiche über Ihre IT-Skills.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                title: "Langsam lädt",
                desc: "Eine langsame Website wird von Google bestraft. Ihre Wettbewerber erscheinen vor Ihnen — selbst wenn Ihre Services besser sind.",
              },
              {
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00b4d8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                ),
                title: "Keine Conversions",
                desc: "Verkehr ohne klare Call-to-Actions ist verlorenes Geld. Wenn Ihre Zielgruppe nicht weiß, was sie als nächstes tun soll, tut sie nichts.",
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ marginBottom: '1.25rem' }}>{item.icon}</div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.1rem', fontWeight: 600, color: '#f0f6fc',
                  marginBottom: '0.75rem',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#8b949e', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section style={{ padding: '5rem 0' }}>
        <div className="container-max">
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem',
            textAlign: 'center',
          }}>
            Was wir für IT-Firmen bauen
          </h2>
          <p style={{
            fontSize: '1rem', color: '#8b949e', textAlign: 'center',
            marginBottom: '3rem', maxWidth: 600, margin: '0 auto 3rem',
          }}>
            Speziell für IT-Unternehmen, Agenturen und MSPs entwickelt.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}>
            {[
              {
                title: "Modernes Tech-Design",
                desc: "Dark Mode, saubere Typografie, technische Details die Ihre Kompetenz zeigen.",
              },
              {
                title: "SEO für IT-Keywords",
                desc: "Managed IT Services, Cloud Migration, Cybersecurity Consulting — optimiert für die Keywords Ihrer Zielgruppe.",
              },
              {
                title: "DSGVO-konform",
                desc: "Cookie-Banner, Privacy-Policy, alle geforderten DSGVO-Elemente integriert.",
              },
              {
                title: "CMS & Wartung",
                desc: "WordPress oder Headless CMS — Sie können Inhalte selbst bearbeiten. Mit 99€/Monat Wartung.",
              },
            ].map((item, i) => (
              <div key={i} className="card" style={{ padding: '1.75rem' }}>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1rem', fontWeight: 600, color: '#00b4d8',
                  marginBottom: '0.75rem',
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#8b949e', lineHeight: 1.65 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 0', textAlign: 'center' }}>
        <div className="container-max">
          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
            fontWeight: 700, color: '#f0f6fc', marginBottom: '1rem',
          }}>
            Bereit für eine Website, die passt?
          </h2>
          <p style={{ fontSize: '1rem', color: '#8b949e', marginBottom: '2.5rem' }}>
            Fixed Price. Keine Überraschungen. 2–4 Wochen bis zum Launch.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/start" className="btn-primary">Projekt starten</a>
            <a href="/fixed-price" className="btn-outline">Preise ansehen</a>
          </div>
        </div>
      </section>
    </>
  );
}
