'use client'

import Link from 'next/link'
import { MapPin, ArrowRight, Zap } from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import { useEffect } from 'react'

function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!els.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

const stats = [
  { value: '100%', label: 'Vorarlberg-fokussiert. Keine Callcenter, keine Warteschleifen.' },
  { value: 'DSGVO', label: 'Jedes Projekt von Grund auf DSGVO-konform aufgebaut.' },
  { value: '<48h', label: 'Reaktionszeit bei Anfragen. Ich bin erreichbar.' },
  { value: '12+', label: 'Services aus einer Hand — alles, was Ihr Business braucht.' },
]

const whyLocal = [
  {
    number: '01',
    title: 'Bodenseeraum',
    desc: 'Lindau, Friedrichshafen, St. Gallen — ich kenne die grenzüberschreitenden Herausforderungen und die lokale Wirtschaftsstruktur.',
  },
  {
    number: '02',
    title: 'Rheintal',
    desc: 'Dornbirn, Feldkirch, Hohenems — die Wirtschaftsregion mit der höchsten KMU-Dichte in ganz Österreich.',
  },
  {
    number: '03',
    title: 'Montafon & Arlberg',
    desc: 'Tourismus-Branche mit speziellen Anforderungen an Online-Präsenz und Saison-Geschäft. Ich kenne beide Welten.',
  },
  {
    number: '04',
    title: 'Persönlich vor Ort',
    desc: 'Vorarlberg ist klein — ich bin innerhalb von 1 Stunde bei jedem Kunden. Persönlicher Kontakt ist durch nichts zu ersetzen.',
  },
]

const values = [
  {
    title: 'Direkte Kommunikation',
    desc: 'Kein Projektleiter, keine Warteschleife. Sie haben meine Nummer und meine Zusage: Ich melde mich innerhalb von 48 Stunden zurück.',
  },
  {
    title: 'Ehrliche Beratung',
    desc: 'Ich sage Ihnen, was Sie brauchen — nicht was am meisten bringt. Wenn eine Website nicht sinnvoll ist, sage ich das auch.',
  },
  {
    title: 'Messbare Ergebnisse',
    desc: 'Jedes Projekt hat klare KPIs. Sie sehen, was funktioniert — in monatlichen Reports, die Sie verstehen werden.',
  },
  {
    title: 'Langfristige Partnerschaft',
    desc: 'Ich bin nicht weg, wenn das Projekt fertig ist. Wartung, Updates und laufende Optimierung sind genauso Teil der Zusammenarbeit.',
  },
]

export default function AboutPage() {
  useScrollReveal()

  return (
    <>
      <Header />

      <main>

        {/* ===== PAGE HERO ===== */}
        <section className="page-hero">
          <div className="page-hero__bg" />
          <div className="container">
            <div className="page-hero__eyebrow">
              <MapPin size={10} />
              Bregenz, Vorarlberg
            </div>
            <h1>
              Über <span className="section-title__accent">DevMiro.</span>
            </h1>
            <p>
              IT-Lösungen mit echten Mehrwert für Vorarlberger Unternehmen —
              direkt aus Bregenz, mit Leidenschaft für gute Software
              und ehrliche Partnerschaften.
            </p>
          </div>
        </section>

        {/* ===== STORY ===== */}
        <section className="about-story">
          <div className="container">
            <div className="about-story__grid">
              <div className="about-story__text reveal">
                <div className="section-label">Die Geschichte</div>
                <h2>
                  Warum ich mache,<br />
                  was ich mache.
                </h2>
                <p>
                  Ich habe DevMiro gegründet, weil ich selbst erlebt habe, wie
                  schlecht kleine Unternehmen in Vorarlberg online beraten werden.
                  <strong> Zu teuer, zu kompliziert, zu unpersönlich</strong> — das war der Standard.
                </p>
                <p>
                  Mein Ansatz ist anders: Ich baue <strong>direkte, langfristige Partnerschaften</strong> mit
                  meinen Kunden. Ich erkläre Dinge so, dass sie verständlich sind —
                  ohne Tech-Jargon. Und ich liefere Ergebnisse, die man messen kann:
                  mehr Buchungen, mehr Anfragen, mehr Umsatz.
                </p>
                <p>
                  <strong>DevMiro ist kein Freelancer-Label</strong> — es ist mein IT-Dienstleistungsunternehmen,
                  eingetragen in der WKO Vorarlberg, mit klarem Fokus auf KMUs in unserer Region.
                  Mein Name ist Miro Gavanelli, und das hier ist meine Mission.
                </p>
                <div style={{ marginTop: '2rem' }}>
                  <Link href="/kontakt" className="btn btn--primary">
                    Projekt besprechen
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="about-stats">
                {stats.map((stat) => (
                  <div key={stat.value} className="about-stat reveal">
                    <div className="about-stat__value">{stat.value}</div>
                    <div className="about-stat__desc">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== WHY LOCAL ===== */}
        <section className="why-local">
          <div className="container">
            <div className="section-label">Warum Vorarlberg?</div>
            <h2 className="section-title">
              Hier verwurzelt.<br />
              <span className="section-title__accent">Hier zuhause.</span>
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '55ch', lineHeight: 1.8, marginTop: '1.5rem', marginBottom: '3rem' }}>
              Ich bin hier aufgewachsen und lebe hier — das gibt mir einen Vorteil,
              den keine Agentur aus Wien oder Deutschland bieten kann:
            </p>

            <div className="why-local__grid">
              {whyLocal.map((item) => (
                <div key={item.number} className="why-local-item reveal">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.15em' }}>
                      {item.number}
                    </span>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                  </div>
                  <h3 className="why-local-item__title">{item.title}</h3>
                  <p className="why-local-item__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== VALUES ===== */}
        <section className="about-values">
          <div className="container">
            <div className="section-label">Meine Werte</div>
            <h2 className="section-title">
              Was mich<br />
              <span className="section-title__accent">ausmacht.</span>
            </h2>

            <div className="about-values__grid">
              {values.map((v) => (
                <div key={v.title} className="about-value-item reveal">
                  <h3 className="about-value-item__title">{v.title}</h3>
                  <p className="about-value-item__desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== NUMBERS SECTION ===== */}
        <section className="numbers-section">
          <div className="container">
            <div className="numbers-section__inner">
              {[
                { big: '12+', small: 'Services aus einer Hand' },
                { big: '100%', small: 'Vorarlberg-fokussiert' },
                { big: '24/7', small: 'KI-Chatbot Verfügbarkeit' },
                { big: '<48h', small: 'Reaktionszeit bei Anfragen' },
              ].map((n) => (
                <div key={n.big} className="numbers-section__item reveal">
                  <div className="numbers-section__big">{n.big}</div>
                  <div className="numbers-section__small">{n.small}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta">
          <div className="cta__bg" aria-hidden="true" />
          <div className="container">
            <div className="cta__content">
              <div className="section-label section-label--accent">Let&apos;s go</div>
              <h2 className="cta__title">
                Lassen Sie uns<br />
                zusammenarbeiten.
              </h2>
              <p className="cta__subtitle">
                Kennenlernen ist kostenlos. Erzählen Sie mir von Ihrem Projekt —
                ich sage Ihnen ehrlich, was möglich ist.
              </p>
              <Link href="/kontakt" className="btn btn--accent btn--large">
                Projekt besprechen
                <ArrowRight size={18} />
              </Link>
              <div className="cta__contact">
                <span>info@devmiro.at</span>
                <span className="cta__contact-divider">·</span>
                <span>+43 664 123 4567</span>
                <span className="cta__contact-divider">·</span>
                <span>Bregenz, Vorarlberg</span>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}
