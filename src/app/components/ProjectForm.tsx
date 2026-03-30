'use client';

export function ProjectForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
      }}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#8b949e', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Name *
          </label>
          <input type="text" required placeholder="Max Mustermann" style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(26,42,66,0.8)', borderRadius: 8, color: '#f0f6fc', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#8b949e', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            E-Mail *
          </label>
          <input type="email" required placeholder="max@beispiel.at" style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(26,42,66,0.8)', borderRadius: 8, color: '#f0f6fc', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
        </div>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#8b949e', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Unternehmen
        </label>
        <input type="text" placeholder="Ihre Firma GmbH" style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(26,42,66,0.8)', borderRadius: 8, color: '#f0f6fc', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }} />
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#8b949e', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Branche *
        </label>
        <select required style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(7,11,20,0.9)', border: '1px solid rgba(26,42,66,0.8)', borderRadius: 8, color: '#f0f6fc', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}>
          <option value="" style={{ background: '#070b14' }}>Bitte wählen</option>
          <option value="it" style={{ background: '#070b14' }}>IT / Tech</option>
          <option value="agency" style={{ background: '#070b14' }}>Agentur</option>
          <option value="consulting" style={{ background: '#070b14' }}>Consulting</option>
          <option value="recruitment" style={{ background: '#070b14' }}>Recruitment</option>
          <option value="accounting" style={{ background: '#070b14' }}>Steuerberatung</option>
          <option value="other" style={{ background: '#070b14' }}>Andere</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#8b949e', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Website-Seiten (ca.)
        </label>
        <select style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(7,11,20,0.9)', border: '1px solid rgba(26,42,66,0.8)', borderRadius: 8, color: '#f0f6fc', fontSize: '0.9rem', outline: 'none', boxSizing: 'border-box' }}>
          <option value="1-3" style={{ background: '#070b14' }}>1–3 Seiten</option>
          <option value="4-7" style={{ background: '#070b14' }}>4–7 Seiten</option>
          <option value="8-10" style={{ background: '#070b14' }}>8–10 Seiten</option>
          <option value="10+" style={{ background: '#070b14' }}>Mehr als 10</option>
        </select>
      </div>

      <div>
        <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: '#8b949e', marginBottom: '0.5rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
          Projektbeschreibung *
        </label>
        <textarea required rows={5} placeholder="Beschreiben Sie Ihr Projekt..." style={{ width: '100%', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(26,42,66,0.8)', borderRadius: 8, color: '#f0f6fc', fontSize: '0.9rem', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
      </div>

      <button type="submit" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem', marginTop: '0.5rem' }}>
        Anfrage senden
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}>
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
      </button>

      <p style={{ fontSize: '0.75rem', color: '#4a5568', textAlign: 'center', marginTop: '-0.5rem' }}>
        Wir antworten innerhalb von 24 Stunden. Kein Spam. Keine Weitergabe Ihrer Daten.
      </p>
    </form>
  );
}
