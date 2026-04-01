'use client';

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-section">
        <div className="hero-grid-bg" />
        <div className="container-max" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-left">
            <div className="hero-tag animate-fade-in-up">
              <svg width="8" height="8" viewBox="0 0 8 8">
                <circle cx="4" cy="4" r="4" fill="var(--electric)" />
              </svg>
              Kontakt
            </div>

            <h1
              className="hero-headline animate-fade-in-up delay-100"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", maxWidth: 640 }}
            >
              Sprechen Sie<br />
              <span style={{ color: "var(--electric)" }}>mit uns.</span>
            </h1>

            <p
              className="hero-subtext animate-fade-in-up delay-200"
              style={{ maxWidth: 480 }}
            >
              Haben Sie ein Projekt im Sinn oder einfach nur eine Frage? Wir freuen uns von Ihnen zu hören.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section style={{ padding: "4rem 0 8rem", background: "var(--graphite)" }}>
        <div className="container-max">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.2fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Left — Info */}
            <div>
              <h2
                style={{
                  fontFamily: "'Instrument Serif', Georgia, serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "var(--white)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                So erreichen Sie uns
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--ash)",
                  lineHeight: 1.7,
                  marginBottom: "2.5rem",
                }}
              >
                Füllen Sie das Formular aus — wir melden uns innerhalb von 24 Stunden mit einem konkreten Angebot zurück.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <ContactInfoItem
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  }
                  label="E-Mail"
                  value="hallo@devmiro.at"
                />
                <ContactInfoItem
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  }
                  label="Standort"
                  value="Vorarlberg, Österreich"
                />
                <ContactInfoItem
                  icon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                  }
                  label="Antwortzeit"
                  value="Innerhalb von 24 Stunden"
                />
              </div>

              {/* Trust signals */}
              <div
                style={{
                  marginTop: "3rem",
                  padding: "1.75rem",
                  background: "rgba(200,255,0,0.04)",
                  border: "1px solid rgba(200,255,0,0.15)",
                  borderRadius: 12,
                }}
              >
                <div
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--electric)",
                    marginBottom: "1rem",
                  }}
                >
                  Was Sie erwartet
                </div>
                {[
                  "Konkreter Vertrag mit Festpreis und Timeline",
                  "Unverbindliches Erstgespräch",
                  "Kein Verkaufsdruck",
                  "100% Data privacy — keine Weitergabe von Daten",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.6rem",
                      fontSize: "0.875rem",
                      color: "var(--ash)",
                      marginBottom: "0.6rem",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <path d="M3 8l3.5 3.5L13 4.5" stroke="var(--electric)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <div
                className="card"
                style={{
                  padding: "2.5rem",
                  background: "rgba(200,255,0,0.02)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--white)",
                    marginBottom: "0.4rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Nachricht senden
                </h2>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--ash)",
                    marginBottom: "2rem",
                  }}
                >
                  Alle Felder mit * sind erforderlich.
                </p>

                <form
                  onSubmit={(e) => e.preventDefault()}
                  style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
                >
                  {/* Row 1 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <FormField label="Vorname *" placeholder="Max" />
                    <FormField label="Nachname *" placeholder="Mustermann" />
                  </div>

                  {/* Row 2 */}
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                    <FormField label="E-Mail *" placeholder="max@firma.at" type="email" />
                    <FormField label="Telefon" placeholder="+43 664 123 4567" type="tel" />
                  </div>

                  {/* Company */}
                  <FormField label="Unternehmen" placeholder="Ihre Firma GmbH" />

                  {/* Package */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "var(--ash)",
                        marginBottom: "0.5rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Interessiertes Paket
                    </label>
                    <select
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        background: "var(--graphite)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 8,
                        color: "var(--ash)",
                        fontSize: "0.9rem",
                        outline: "none",
                        cursor: "pointer",
                        appearance: "none",
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%238b949e' stroke-width='2' stroke-linecap='round'%3E%3Cpolyline points='6,9 12,15 18,9'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 1rem center",
                      }}
                    >
                      <option value="">— Bitte wählen —</option>
                      <option value="business">Business — € 6.500</option>
                      <option value="premium">Premium — € 12.000</option>
                      <option value="enterprise">Enterprise — Auf Anfrage</option>
                      <option value="general">Allgemeine Anfrage</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "var(--ash)",
                        marginBottom: "0.5rem",
                        letterSpacing: "0.02em",
                      }}
                    >
                      Ihre Nachricht *
                    </label>
                    <textarea
                      placeholder="Beschreiben Sie kurz Ihr Projekt, Ihre Branche und was Sie sich vorstellen..."
                      rows={5}
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem 1rem",
                        background: "var(--graphite)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        borderRadius: 8,
                        color: "var(--white)",
                        fontSize: "0.9rem",
                        fontFamily: "'DM Sans', sans-serif",
                        outline: "none",
                        resize: "vertical",
                        minHeight: 120,
                        lineHeight: 1.6,
                      }}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(0,180,216,0.5)";
                        e.target.style.boxShadow = "0 0 0 3px rgba(200,255,0,0.08)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(255,255,255,0.08)";
                        e.target.style.boxShadow = "none";
                      }}
                    />
                  </div>

                  {/* GDPR Consent */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.8rem",
                      color: "var(--ash)",
                      lineHeight: 1.6,
                    }}
                  >
                    <input
                      type="checkbox"
                      required
                      style={{
                        marginTop: 2,
                        accentColor: "var(--electric)",
                        cursor: "pointer",
                        flexShrink: 0,
                      }}
                    />
                    <span>
                      Ich stimme zu, dass meine Angaben zur Beantwortung meiner Anfrage verarbeitet werden.{" "}
                      <a href="/gdpr" style={{ color: "var(--electric)", textDecoration: "none" }}>
                        Datenschutzerklärung
                      </a>
                      .
                    </span>
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      fontSize: "1rem",
                      padding: "0.9rem 2rem",
                      cursor: "pointer",
                      border: "none",
                    }}
                  >
                    Nachricht senden
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>

                  <p style={{ fontSize: "0.75rem", color: "var(--ash)", textAlign: "center" }}>
                    Wir antworten innerhalb von 24 Stunden. Kein Spam, keine Weitergabe Ihrer Daten.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 8,
          background: "rgba(200,255,0,0.08)",
          border: "1px solid rgba(200,255,0,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {icon}
      </div>
      <div>
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "var(--ash)",
            marginBottom: "0.2rem",
          }}
        >
          {label}
        </div>
        <div style={{ fontSize: "0.9rem", color: "var(--white)" }}>{value}</div>
      </div>
    </div>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        style={{
          display: "block",
          fontSize: "0.8rem",
          fontWeight: 600,
          color: "var(--ash)",
          marginBottom: "0.5rem",
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={type !== "tel"}
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          background: "var(--graphite)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 8,
          color: "var(--white)",
          fontSize: "0.9rem",
          fontFamily: "'DM Sans', sans-serif",
          outline: "none",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(0,180,216,0.5)";
          e.target.style.boxShadow = "0 0 0 3px rgba(200,255,0,0.08)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(255,255,255,0.08)";
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
}
