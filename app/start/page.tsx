import type { Metadata } from "next";
import Link from "next/link";
import { ProjectForm } from "../components/ProjectForm";

export const metadata: Metadata = {
  title: "Projekt starten | DEVMIRO",
  description:
    "Starten Sie Ihr Website-Projekt mit DEVMIRO. Formular ausfüllen — Vertrag und Festpreis innerhalb von 24 Stunden.",
};

export default function StartPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "60vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingTop: 100,
          paddingBottom: 4,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,180,216,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "20%",
            right: "-5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,180,216,0.05) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="container-max" style={{ position: "relative", zIndex: 1 }}>
          <div className="section-tag animate-fade-in-up" style={{ marginBottom: "1.5rem" }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="3" fill="#00b4d8" />
              <circle cx="6" cy="6" r="5.5" stroke="#00b4d8" strokeWidth="1" opacity="0.4" />
            </svg>
            Projekt starten
          </div>

          <h1
            className="animate-fade-in-up delay-100"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#f0f6fc",
              marginBottom: "1.25rem",
              letterSpacing: "-0.03em",
            }}
          >
            Ihr Projekt beginnt{" "}
            <span className="gradient-text">hier.</span>
          </h1>

          <p
            className="animate-fade-in-up delay-200"
            style={{
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              color: "#8b949e",
              lineHeight: 1.7,
              maxWidth: 600,
              marginBottom: "2.5rem",
            }}
          >
            Beschreiben Sie Ihr Vorhaben im Formular — wir melden uns innerhalb von 24 Stunden mit einem Vertrag und Festpreis zurück.
          </p>

          <div
            className="animate-fade-in-up delay-300"
            style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}
          >
            <StepBadge num="1" label="Formular ausfüllen" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <StepBadge num="2" label="Angebot erhalten" />
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <StepBadge num="3" label="Website live" />
          </div>
        </div>
      </section>

      {/* Package Selection + Form */}
      <section style={{ padding: "4rem 0 8rem", background: "#070b14" }}>
        <div className="container-max">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.4fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Left — Package Selection */}
            <div>
              <h2
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  color: "#f0f6fc",
                  marginBottom: "1rem",
                  letterSpacing: "-0.02em",
                }}
              >
                Paket wählen
              </h2>
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#8b949e",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                Nicht sicher, welches Paket das richtige ist? Wählen Sie „General Inquiry" und beschreiben Sie Ihr Vorhaben — wir beraten Sie kostenlos.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <PackageCard
                  name="Business"
                  price="€ 6.500"
                  pages="bis 10 Seiten"
                  badge="Beliebt"
                  highlight
                  features={[
                    "Custom Figma Design",
                    "Mobile optimiert",
                    "SEO Setup (10 Keywords)",
                    "DSGVO-konform",
                    "30 Tage Support",
                  ]}
                />
                <PackageCard
                  name="Premium"
                  price="€ 12.000"
                  pages="10–20+ Seiten"
                  badge={null}
                  highlight={false}
                  features={[
                    "Alles in Business",
                    "2 Design-Richtungen",
                    "Brand Kit",
                    "Mehrsprachig (2 Sprachen)",
                    "60 Tage Support",
                  ]}
                />
                <PackageCard
                  name="Enterprise"
                  price="Auf Anfrage"
                  pages="Großprojekte"
                  badge={null}
                  highlight={false}
                  features={[
                    "Alles in Premium",
                    "E-Commerce / WooCommerce",
                    "Custom Funktionalität",
                    "Prioritäts-Support",
                  ]}
                />
                <PackageCard
                  name="General Inquiry"
                  price="—"
                  pages="Noch nicht sicher?"
                  badge={null}
                  highlight={false}
                  features={[
                    "Kostenlose Beratung",
                    "Wir helfen bei der Paketauswahl",
                    "Unverbindlich",
                  ]}
                />
              </div>
            </div>

            {/* Right — Project Form */}
            <div>
              <div
                className="card"
                style={{
                  padding: "2.5rem",
                  background: "rgba(0,180,216,0.02)",
                }}
              >
                <h2
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#f0f6fc",
                    marginBottom: "0.4rem",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Projektbeschreibung
                </h2>
                <p
                  style={{
                    fontSize: "0.875rem",
                    color: "#8b949e",
                    marginBottom: "2rem",
                  }}
                >
                  Je mehr Details Sie teilen, desto genauer unser Angebot.
                </p>

                <ProjectForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* Satisfaction Guarantee */}
      <SatisfactionBanner />
    </>
  );
}

function StepBadge({ num, label }: { num: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: "50%",
          background: "rgba(0,180,216,0.1)",
          border: "1px solid rgba(0,180,216,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "0.7rem",
          fontWeight: 700,
          color: "#00b4d8",
        }}
      >
        {num}
      </div>
      <span style={{ fontSize: "0.875rem", color: "#8b949e" }}>{label}</span>
    </div>
  );
}

function PackageCard({
  name,
  price,
  pages,
  badge,
  highlight,
  features,
}: {
  name: string;
  price: string;
  pages: string;
  badge: string | null;
  highlight: boolean;
  features: string[];
}) {
  return (
    <div
      className="card"
      style={{
        padding: "1.5rem",
        background: highlight ? "rgba(0,180,216,0.04)" : "var(--bg-card)",
        borderColor: highlight ? "rgba(0,180,216,0.35)" : undefined,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
        <div>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1rem",
              fontWeight: 600,
              color: "#f0f6fc",
              marginBottom: "0.2rem",
            }}
          >
            {name}
          </h3>
          <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
            <span
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1.4rem",
                fontWeight: 800,
                color: highlight ? "#00b4d8" : "#f0f6fc",
              }}
            >
              {price}
            </span>
            {price !== "Auf Anfrage" && price !== "—" && (
              <span style={{ fontSize: "0.75rem", color: "#4a5568" }}>excl. USt.</span>
            )}
          </div>
          <p style={{ fontSize: "0.75rem", color: "#4a5568", marginTop: "0.2rem" }}>{pages}</p>
        </div>
        {badge && (
          <div
            style={{
              background: "#00b4d8",
              color: "#070b14",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              padding: "0.2rem 0.7rem",
              borderRadius: 100,
            }}
          >
            {badge}
          </div>
        )}
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {features.map((f, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.8rem", color: "#8b949e" }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
              <path d="M3 8l3.5 3.5L13 4.5" stroke={highlight ? "#00b4d8" : "#10b981"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
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
          color: "#8b949e",
          marginBottom: "0.5rem",
          letterSpacing: "0.02em",
        }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        style={{
          width: "100%",
          padding: "0.75rem 1rem",
          background: "#0c1220",
          border: "1px solid rgba(26,42,66,0.8)",
          borderRadius: 8,
          color: "#f0f6fc",
          fontSize: "0.9rem",
          fontFamily: "'Inter', sans-serif",
          outline: "none",
        }}
        onFocus={(e) => {
          e.target.style.borderColor = "rgba(0,180,216,0.5)";
          e.target.style.boxShadow = "0 0 0 3px rgba(0,180,216,0.08)";
        }}
        onBlur={(e) => {
          e.target.style.borderColor = "rgba(26,42,66,0.8)";
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Formular ausfüllen",
      desc: "Beschreiben Sie Ihre Anforderungen — Branche, Seitenanzahl, gewünschte Features.",
    },
    {
      num: "02",
      title: "Angebot erhalten",
      desc: "Innerhalb von 24 Stunden erhalten Sie einen Vertrag mit Festpreis und Lieferdatum.",
    },
    {
      num: "03",
      title: "Design-Phase",
      desc: "50% Anzahlung → wir starten mit Figma Mockups. Unbegrenzte Revisionen inklusive.",
    },
    {
      num: "04",
      title: "Entwicklung & Launch",
      desc: "Restliche 50% bei Fertigstellung. Training-Session inklusive. Website live in Wochen.",
    },
  ];

  return (
    <section style={{ padding: "6rem 0", background: "linear-gradient(180deg, #070b14 0%, #0c1220 100%)" }}>
      <div className="container-max">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-tag" style={{ marginBottom: "1rem" }}>Unser Prozess</div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#f0f6fc",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            In 4 Schritten zur neuen Website
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "0",
          }}
        >
          {steps.map((step, i) => (
            <div key={i} style={{ padding: "0 1.25rem", textAlign: "center" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(0,180,216,0.08)",
                  border: "1px solid rgba(0,180,216,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.25rem",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#00b4d8",
                  letterSpacing: "0.05em",
                }}
              >
                {step.num}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: "1rem",
                  fontWeight: 600,
                  color: "#f0f6fc",
                  marginBottom: "0.6rem",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "0.875rem", color: "#8b949e", lineHeight: 1.65 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SatisfactionBanner() {
  return (
    <section style={{ padding: "5rem 0", background: "#070b14" }}>
      <div className="container-max">
        <div
          style={{
            border: "1px solid rgba(0,180,216,0.2)",
            borderRadius: 16,
            padding: "3rem 2.5rem",
            textAlign: "center",
            background: "linear-gradient(135deg, rgba(0,180,216,0.04) 0%, rgba(0,180,216,0.01) 100%)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 200,
              height: 200,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,180,216,0.06) 0%, transparent 70%)",
            }}
          />
          <div className="section-tag" style={{ marginBottom: "1.5rem" }}>
            Design-Zufriedenheitsgarantie
          </div>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              fontWeight: 700,
              color: "#f0f6fc",
              marginBottom: "1rem",
              letterSpacing: "-0.02em",
            }}
          >
            Design, das Ihnen gefällt — oder wir überarbeiten es kostenlos
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "#8b949e",
              maxWidth: 620,
              margin: "0 auto 2rem",
              lineHeight: 1.7,
            }}
          >
            Wenn Sie mit dem Design nicht 100% zufrieden sind, überarbeiten wir es so lange, bis es passt. Keine zusätzlichen Kosten. Sie bezahlen die zweite Hälfte erst, wenn Sie zufrieden sind.
          </p>
          <Link href="/kontakt" className="btn-outline" style={{ fontSize: "1rem", padding: "0.9rem 2rem" }}>
            Frage stellen
          </Link>
        </div>
      </div>
    </section>
  );
}
