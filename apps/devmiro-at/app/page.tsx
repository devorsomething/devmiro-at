'use client'

import Link from 'next/link'
import { useEffect, useRef } from 'react'
import {
  Globe, BotMessageSquare, Workflow, Share2,
  Search, Mail, Calendar, Shield,
  Lock, Cloud, Wrench, ArrowRight,
  Check, TrendingDown, Zap, ChevronDown,
} from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

function GoogleAdsIcon({ size = 24, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  )
}

// ===== MARQUEE DATA =====
const marqueeItems = [
  { text: 'Website Entwicklung', lime: false },
  { text: 'KI-Chatbot', lime: true },
  { text: 'Workflow Automation', lime: false },
  { text: 'SEO Optimierung', lime: true },
  { text: 'Cyber-Security', lime: false },
  { text: 'Online Terminbuchung', lime: true },
  { text: 'Social Media', lime: false },
  { text: 'Cloud-Arbeitsplätze', lime: true },
  { text: 'DSGVO & Datenschutz', lime: false },
  { text: 'IT-Wartung & Support', lime: true },
  { text: 'Website Entwicklung', lime: false },
  { text: 'KI-Chatbot', lime: true },
  { text: 'Workflow Automation', lime: false },
  { text: 'SEO Optimierung', lime: true },
  { text: 'Cyber-Security', lime: false },
  { text: 'Online Terminbuchung', lime: true },
  { text: 'Social Media', lime: false },
  { text: 'Cloud-Arbeitsplätze', lime: true },
  { text: 'DSGVO & Datenschutz', lime: false },
  { text: 'IT-Wartung & Support', lime: true },
]

// ===== PROBLEMS DATA =====
const problems = [
  {
    emoji: '⏰',
    number: '01',
    title: 'Zu wenig Zeit für Online-Marketing',
    desc: 'Zwischen Kunden, Buchhaltung und Team-Management bleibt kaum Zeit für Facebook, Google oder eine professionelle Website. Das Internet wartet nicht — und Ihre Konkurrenz auch nicht.',
  },
  {
    emoji: '🤷',
    number: '02',
    title: 'Keine Ahnung was eine Website kostet',
    desc: 'Angebote schwanken von einigen hundert bis mehreren tausend. Sie haben keine Referenz, keine Vergleichbarkeit — und Angst, zu viel oder das Falsche zu zahlen.',
  },
  {
    emoji: '📈',
    number: '03',
    title: 'Meine Konkurrenz ist schon online',
    desc: 'Während Sie noch überlegen, haben andere Betriebe bereits Kunden über Google, Instagram und automatisierte Systeme. Der Zug fährt ab — Sie stehen noch am Bahnhof.',
  },
  {
    emoji: '📞',
    number: '04',
    title: 'Telefonieren kostet Zeit',
    desc: 'Jede telefonische Anfrage unterbricht Ihren Workflow. Terminabsprachen per WhatsApp, E-Mail und SMS fressen Stunden pro Woche — Zeit, die Sie nicht bezahlt bekommen.',
  },
]

// ===== SERVICES DATA =====
const services = [
  {
    icon: Globe,
    title: 'Website Entwicklung',
    tagline: 'Ihr digitaler Firmensitz',
    desc: 'Die beste Website ist die, die funktioniert. Schnell, mobil-optimiert, DSGVO-konform und so gestaltet, dass Besucher zu Kunden werden — nicht abspringen.',
    features: ['Next.js & React — höchste Performance', '100% mobil-optimiert, jedes Gerät', 'DSGVO-konform von Tag 1', 'SEO-Grundsetup inklusive', 'SSL & Hosting aus einem Guss'],
    result: '+60% mehr Anfragen im Schnitt',
  },
  {
    icon: BotMessageSquare,
    title: 'KI-Chatbot',
    tagline: '24/7 Kundenservice ohne Personal',
    desc: 'Ihr digitaler Mitarbeiter, der nie schläft, nie krank wird und trotzdem freundlich bleibt. Beantwortet Fragen, nimmt Buchungen an und qualifiziert Leads — automatisch.',
    features: ['OpenClaw KI-Engine — Made in Austria', 'Training auf Ihre Branche & Angebote', 'Integration in Website & WhatsApp', 'Automatische Lead-Qualifizierung', 'Lernt kontinuierlich, wird besser'],
    result: '80% weniger Anfragen-Manualarbeit',
  },
  {
    icon: Workflow,
    title: 'Workflow-Automatisierung',
    tagline: 'Wiederkehrende Tasks eliminieren',
    desc: 'E-Mails beantworten, Leads nachtragen, Erinnerungen senden — all das läuft ab sofort ohne Sie. Sie haben den Kopf frei für das, was Ihr Business wirklich voranbringt.',
    features: ['n8n-basierte Workflows — no-code', 'E-Mail-Automation & Follow-ups', 'CRM-Integration (HubSpot, Notion & mehr)', 'Automatische Rechnungsstellung', 'Individuelle Trigger — genau für Sie gebaut'],
    result: 'Bis zu 15h/Woche gespart',
  },
  {
    icon: Share2,
    title: 'Social Media',
    tagline: 'Präsenz ohne Zeitaufwand',
    desc: 'Instagram, Facebook und TikTok — professionell bespielt, ohne dass Sie selbst hinter dem Handy sitzen. Regelmäßig, engagement-stark und zu 100% markenkonform.',
    features: ['Content-Planung & Erstellung', 'Instagram, Facebook & TikTok', 'Engagement-Management', 'Monatliches Performance-Reporting', 'Google Business Optimierung'],
    result: '+220% Engagement in 3 Monaten',
  },
  {
    icon: Search,
    title: 'SEO',
    tagline: 'Gefunden werden von neuen Kunden',
    desc: 'Auf Platz 1 bei Google — für die Keywords, die wirklich Umsatz bringen. Lokale SEO für Vorarlberg, technische Optimierung und Content-Strategie aus einer Hand.',
    features: ['Lokale SEO für Vorarlberg & Bodenseeraum', 'Technische On-Page-Optimierung', 'Google Business Profile Optimierung', 'Backlink-Aufbau & Content-Strategie', 'Monatliches Ranking-Reporting'],
    result: 'Top 3 Google für relevante Keywords',
  },
  {
    icon: GoogleAdsIcon as any,
    title: 'Google Ads',
    tagline: 'Sofort sichtbar sein',
    desc: 'Gezielte Werbekampagnen, die echte Kunden bringen — nicht nur Klicks, sondern Conversions. Transparent, messbar und mit einem klaren ROI.',
    features: ['Google Search & Display Ads', 'Remarketing & Retargeting', 'Conversion-Tracking & Analytics', 'A/B-Testing für maximale Performance', 'Monatliches Reporting mit ROI-Analyse'],
    result: '3x mehr Conversions vs. DIY',
  },
  {
    icon: Mail,
    title: 'E-Mail Marketing',
    tagline: 'Kundenbindung automatisieren',
    desc: 'Newsletter, Willkommens-Serien, Geburtstags-Mails und Erinnerungen — automatisierte E-Mail-Kommunikation, die Kunden bindet und wiederkehrende Käufe generiert.',
    features: ['Newsletter-Setup & Automation', 'Willkommens-Serien für Neukunden', 'Abgebrochene Warenkorb-Erinnerungen', 'Geburtstags- & Jubiläums-Mails', 'DSGVO-konforme E-Mail-Administration'],
    result: '+35% Kundenbindung durch Automation',
  },
  {
    icon: Calendar,
    title: 'Online Terminbuchung',
    tagline: 'Kein Telefon mehr nötig',
    desc: 'Kunden buchen 24/7 direkt online — ohne Wartezeit, ohne Telefon, ohne E-Mail. Cal.com Integration mit automatischen Erinnerungen per SMS und E-Mail.',
    features: ['Cal.com Integration — professionell & gratis', '24/7 Online-Buchung ohne Barrieren', 'Automatische SMS & E-Mail-Erinnerungen', 'Kalender-Synchronisierung', 'Booking-Widget in Website eingebettet'],
    result: '70% weniger No-Show-Quote',
  },
  {
    icon: Lock,
    title: 'Cyber-Security',
    tagline: 'Schutz ohne Kopfzerbrechen',
    desc: 'SSL, Firewall, Malware-Schutz und automatische Backups — der Rundum-Schutz für Ihr digitales Business. Damit Sie nachts ruhig schlafen können.',
    features: ['SSL-Zertifikate & Web Application Firewall', 'Automatische tägliche Backups', 'Echtzeit-Malware-Scanning', 'Security-Monitoring rund um die Uhr', 'Incident Response & Wiederherstellung'],
    result: '100% Schutz vor häufigsten Angriffen',
  },
  {
    icon: Shield,
    title: 'DSGVO',
    tagline: 'Rechtssicherheit ohne Anwalt',
    desc: 'Vollständiger DSGVO-Audit für Ihre Website und Ihr Business. Von der Prüfung bis zur laufenden Compliance — dokumentiert, transparent und rechtssicher.',
    features: ['Vollständiger DSGVO-Audit', 'Cookie-Banner & Consent-Management', 'Datenschutzerklärung & Impressum', 'Verarbeitungsverzeichnis (VVO)', 'Laufende Compliance-Überwachung'],
    result: '100% DSGVO-konform — dokumentiert',
  },
  {
    icon: Cloud,
    title: 'Cloud-Arbeitsplätze',
    tagline: 'Von überall arbeiten',
    desc: 'Virtueller Desktop für Ihr Team — sicher, zentral und skalierbar. Von unterwegs, von zu Hause, von überall. Keine teuren Server, keine IT-Abteilung nötig.',
    features: ['Virtueller Windows-Desktop (DaaS)', 'Sicherer Zugriff von überall', 'Zentrale Datenverwaltung & Backup', 'Skalierbar pro User — keine Hardware-Kosten', 'Integration in Ihre bestehende IT'],
    result: '50% Kostenersparnis vs. eigene Server',
  },
  {
    icon: Wrench,
    title: 'IT-Wartung',
    tagline: 'Ihre IT funktioniert, einfach',
    desc: 'Monatliche Updates, proaktives Monitoring und prioritärer Support — alles in einem. Sie haben einen technischen Partner, der sich um alles kümmert.',
    features: ['Monatliche Updates & Wartung', 'Priorisierter Support via Ticket & Chat', 'Proaktives Monitoring — Probleme vor Ihnen erkannt', 'Regelmäßige Performance-Berichte', '24/7 Notfall-Support bei Ausfällen'],
    result: 'Eine Nummer für alle Ihre IT-Fragen',
  },
]

// ===== TESTIMONIALS =====
const testimonials = [
  {
    quote: 'DevMiro hat unsere komplette digitale Präsenz auf ein neues Level gebracht. Die neue Website bringt uns täglich qualifizierte Anfragen — ohne dass wir selbst etwas tun müssen.',
    before: '3 Anfragen/Woche',
    after: '12 Anfragen/Woche',
    name: 'Claudia Hofmann',
    role: 'Inhaberin',
    business: 'Café Bodega Bregenz',
  },
  {
    quote: 'Endlich ein IT-Partner, der versteht, was ein kleines Unternehmen braucht — nicht übertechnisiert, sondern genau richtig. Die Automatisierungen sparen mir 10h pro Woche.',
    before: '10h/Woche Administrationszeit',
    after: 'Effiziente Prozesse, 10h gespart',
    name: 'Markus Riedler',
    role: 'Geschäftsführer',
    business: 'Riedler Handwerk GmbH',
  },
  {
    quote: 'Der KI-Chatbot auf unserer Website beantwortet 80% der Kundenfragen automatisch. Unsere Mitarbeiter können sich auf das konzentrieren, was wirklich zählt.',
    before: '80+ telefonische Anfragen/Woche',
    after: '-60% Anrufe, 80% FAQ automatisiert',
    name: 'Julia Matt',
    role: 'Praxisleitung',
    business: 'Zahnarztpraxis Matt, Feldkirch',
  },
  {
    quote: 'Wir waren technisch komplett abgehängt. DevMiro hat uns in 4 Wochen auf Platz 3 bei Google gebracht — für einen lokalen Handwerksbetrieb war das ein Gamechanger.',
    before: 'Nicht auffindbar bei Google',
    after: 'Top 3 für "Installateur Bregenz"',
    name: 'Robert Summer',
    role: 'Inhaber',
    business: 'Summer Haustechnik, Bregenz',
  },
]

// ===== FAQ =====
const faqs = [
  {
    question: 'Wie lange dauert es, bis meine neue Website online ist?',
    answer: 'Je nach Umfang: Eine professionelle Website ist in 2–4 Wochen live. Komplexere Projekte mit KI-Chatbot, Automatisierungen und SEO-Setup dauern 4–8 Wochen. Wir arbeiten schnell — ohne dabei die Qualität zu vernachlässigen.',
  },
  {
    question: 'Ich habe bereits eine Website — muss ich diese komplett neu machen lassen?',
    answer: 'Nicht unbedingt. In einem kostenlosen Erstgespräch analysiere ich Ihre bestehende Website und sage Ihnen ehrlich, was sinnvoller ist: Optimierung oder kompletter Relaunch. Manchmal reicht eine Optimierung — manchmal ist ein Neuanfang die bessere Investition.',
  },
  {
    question: 'Sind Ihre Lösungen wirklich DSGVO-konform?',
    answer: 'Zu 100%. Jedes Projekt wird von Grund auf DSGVO-konform aufgebaut — nicht nachträglich gepatcht. Ich arbeite mit aktuellen Rechtsstandards und biete optional einen laufenden DSGVO-Support mit Überwachung an.',
  },
  {
    question: 'Was passiert, wenn ich nach dem Projekt Hilfe brauche?',
    answer: 'Sie haben einen direkten Draht zu mir — ohne Callcenter, ohne Warteschleife. Supportanfragen beantworte ich innerhalb von 24 Stunden (oft schneller). Für laufende Wartung biete ich monatliche Support-Pakete an.',
  },
  {
    question: 'Arbeiten Sie nur mit Unternehmen aus Vorarlberg?',
    answer: 'Mein Fokus liegt auf Vorarlberg und dem Bodenseeraum, weil ich hier verwurzelt bin und die lokale Märkte kenne. Aber ich arbeite auch mit Unternehmen aus dem gesamten DACH-Raum — Technik kennt keine Grenzen.',
  },
  {
    question: 'Kann ich bei Ihnen auch nur einzelne Services buchen?',
    answer: 'Ja. Sie können einzelne Services wie SEO, Social Media oder einen KI-Chatbot separat beauftragen. Oft macht es aber mehr Sinn, ein Gesamtpaket zu schnüren — da greifen alle Teile ineinander und verstärken sich gegenseitig.',
  },
  {
    question: 'Wie messen Sie den Erfolg eines Projekts?',
    answer: 'Jedes Projekt hat klare, messbare Ziele — z.B. mehr Anfragen, höhere Conversion-Rate, bessere Rankings. Ich richte Analytics und Conversion-Tracking ein, sodass Sie jederzeit sehen können, was funktioniert. Monatliche Reports sind Teil des Services.',
  },
  {
    question: 'Was kostet eine Zusammenarbeit?',
    answer: 'Jedes Projekt ist individuell — daher erstelle ich nach unserem Erstgespräch ein maßgeschneidertes Angebot. Sie zahlen nur für das, was Sie wirklich brauchen. Im Erstgespräch schätze ich den Aufwand ein und Sie erhalten ein transparentes Angebot ohne versteckte Kosten.',
  },
]

// ===== SCROLL REVEAL HOOK =====
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

// ===== FAQ ACCORDION =====
function useFaqAccordion() {
  useEffect(() => {
    const questions = document.querySelectorAll('.faq-item__question')
    questions.forEach((btn) => {
      btn.addEventListener('click', () => {
        const answer = btn.nextElementSibling as HTMLElement | null
        const isOpen = btn.classList.contains('open')
        questions.forEach((q) => {
          q.classList.remove('open')
          const a = q.nextElementSibling as HTMLElement | null
          if (a) a.classList.remove('open')
        })
        if (!isOpen && answer) {
          btn.classList.add('open')
          answer.classList.add('open')
        }
      })
    })
  }, [])
}

export default function HomePage() {
  useScrollReveal()
  useFaqAccordion()

  return (
    <>
      <Header />

      <main>

        {/* ===== HERO ===== */}
        <section className="hero">
          <div className="hero__grid-bg" />
          <div className="hero__accent-circle" />
          <div className="hero__accent-circle-2" />

          <div className="container">
            <div className="hero__inner">
              <div className="hero__eyebrow">
                <Zap size={10} />
                IT-Lösungen für Vorarlberg KMUs
              </div>

              <h1 className="hero__title">
                <span className="hero__title-line">Ihre</span>
                <span className="hero__title-line">Digitale</span>
                <span className="hero__title-line hero__title-accent">Transformation</span>
              </h1>

              <div className="hero__divider" />

              <p className="hero__subtitle">
                <strong>Websites, KI-Chatbots und Business-Automatisierung</strong> für Unternehmen
                in Bregenz und Vorarlberg. Schneller als eine Agentur, persönlicher als ein Tool —
                und mit dem lokalen Biss, den Ihr Business verdient.
              </p>

              <div className="hero__ctas">
                <Link href="/kontakt" className="btn btn--primary btn--large">
                  Projekt besprechen
                  <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="btn btn--outline">
                  Alle Leistungen
                </Link>
              </div>
            </div>
          </div>

          <div className="hero__scroll-hint" aria-hidden="true">
            <ChevronDown size={18} />
            <span>Scroll</span>
          </div>
        </section>

        {/* ===== MARQUEE ===== */}
        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={`marquee__item ${item.lime ? 'marquee__item--lime' : ''}`}>
                <span className="marquee__dot" />
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* ===== PROBLEMS ===== */}
        <section className="problems" id="problem">
          <div className="problems__bg-text" aria-hidden="true">PROBLEME</div>
          <div className="container">
            <div className="problems__header">
              <div>
                <div className="section-label">Das kennen Sie?</div>
                <h2 className="section-title">
                  <span className="section-title__muted">4 Probleme,</span>
                  <br />
                  <span className="section-title__accent">die Ihnen Umsatz kosten.</span>
                </h2>
              </div>
              <p className="problems__header-text">
                Jeder Unternehmer in Vorarlberg kämpft mit denselben digitalen Herausforderungen.
                Das Problem ist nicht fehlende Technik — es ist fehlende Zeit und der richtige Partner.
              </p>
            </div>

            <div className="problems__grid">
              {problems.map((p) => (
                <div key={p.number} className="problem-card reveal">
                  <div className="problem-card__top">
                    <div className="problem-card__emoji">{p.emoji}</div>
                    <div className="problem-card__number">{p.number}</div>
                  </div>
                  <h3 className="problem-card__title">{p.title}</h3>
                  <p className="problem-card__desc">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES ===== */}
        <section className="services" id="services">
          <div className="container">
            <div className="services__header">
              <div className="section-label">12 Lösungen</div>
              <h2 className="section-title">
                Alles aus <span className="section-title__accent">einer Hand.</span>
              </h2>
              <p className="services__header-desc">
                Von der Website bis zur KI-Automatisierung — ich biete alles, was Ihr digitales
                Business braucht. Keine Vermittler, keine externen Freelancer.
                Ein Partner, der sich auskennt und verantwortlich ist.
              </p>
            </div>

            <div className="services__grid">
              {services.map((s, i) => (
                <div key={s.title} className={`service-card reveal reveal-delay-${(i % 5) + 1}`}>
                  <div className="service-card__icon">
                    <s.icon size={24} strokeWidth={1.5} />
                  </div>
                  <div className="service-card__tagline">{s.tagline}</div>
                  <h3 className="service-card__title">{s.title}</h3>
                  <p className="service-card__desc">{s.desc}</p>
                  <ul className="service-card__features">
                    {s.features.map((f) => (
                      <li key={f} className="service-card__feature">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="service-card__result">
                    <TrendingDown size={10} />
                    {s.result}
                  </div>
                </div>
              ))}
            </div>

            <div className="services__cta">
              <Link href="/services" className="btn btn--primary btn--large">
                Alle 12 Leistungen im Detail
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== ABOUT TEASER ===== */}
        <section className="about-teaser">
          <div className="container">
            <div className="about-teaser__inner">
              <div className="about-teaser__left reveal">
                <div className="section-label">Über DevMiro</div>
                <h2 className="section-title">
                  Mehr als ein<br />
                  <span className="section-title__accent">Dienstleister.</span>
                </h2>
                <p className="about-teaser__desc">
                  Ich bin <strong>Miro Gavanelli</strong> — IT-Unternehmer aus Bregenz,
                  eingetragen in der WKO Vorarlberg. DevMiro ist keine Agentur,
                  kein Freelancer-Netzwerk — ich bin ein echter Partner, der direkt
                  für Sie da ist. Mein Fokus liegt auf Vorarlberg, weil ich hier
                  verwurzelt bin und die lokale Wirtschaft verstehe.
                </p>
                <div className="about-teaser__ctas">
                  <Link href="/about" className="btn btn--outline">
                    Mehr über mich
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="about-teaser__stats">
                {[
                  { value: '100%', label: 'Vorarlberg-fokussiert. Keine Callcenter, keine Warteschleifen.' },
                  { value: 'DSGVO', label: 'Jedes Projekt von Grund auf DSGVO-konform aufgebaut.' },
                  { value: '<48h', label: 'Reaktionszeit bei Anfragen. Ich bin erreichbar.' },
                  { value: '12+', label: 'Services aus einer Hand — alles, was Ihr Business braucht.' },
                ].map((stat) => (
                  <div key={stat.value} className="about-teaser__stat reveal">
                    <div className="about-teaser__stat-value">{stat.value}</div>
                    <div className="about-teaser__stat-desc">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="testimonials">
          <div className="container">
            <div className="section-label">Kundenstimmen</div>
            <h2 className="section-title">
              Sie sprechen<br />
              <span className="section-title__accent">für sich.</span>
            </h2>

            <div className="testimonials__grid">
              {testimonials.map((t) => (
                <div key={t.name} className="testimonial-card reveal">
                  <div className="testimonial-card__quote-mark">&ldquo;</div>
                  <p className="testimonial-card__text">{t.quote}</p>
                  <div className="testimonial-card__stats">
                    <div className="testimonial-card__stat">
                      <div className="testimonial-card__stat-label">Vorher</div>
                      <div className="testimonial-card__stat-value">{t.before}</div>
                    </div>
                    <div className="testimonial-card__arrow">→</div>
                    <div className="testimonial-card__stat">
                      <div className="testimonial-card__stat-label">Nachher</div>
                      <div className="testimonial-card__stat-value testimonial-card__stat-value--lime">{t.after}</div>
                    </div>
                  </div>
                  <div className="testimonial-card__author">
                    <div className="testimonial-card__name">{t.name}</div>
                    <div className="testimonial-card__role">{t.role}, {t.business}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="faq" id="faq">
          <div className="container">
            <div className="section-label">Häufige Fragen</div>
            <h2 className="section-title">
              Fragen?<br />
              <span className="section-title__accent">Antworten.</span>
            </h2>

            <div className="faq__list">
              {faqs.map((faq) => (
                <div key={faq.question} className="faq-item">
                  <button className="faq-item__question">
                    <span>{faq.question}</span>
                    <div className="faq-item__icon">+</div>
                  </button>
                  <div className="faq-item__answer">
                    <p className="faq-item__answer-text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FINAL CTA ===== */}
        <section className="cta">
          <div className="cta__bg" aria-hidden="true" />
          <div className="container">
            <div className="cta__content">
              <div className="section-label section-label--accent">Nächster Schritt</div>
              <h2 className="cta__title">
                Bereit für den<br />
                nächsten Schritt?
              </h2>
              <p className="cta__subtitle">
                Kostenloses Erstgespräch. Innerhalb von 48 Stunden erhalten Sie
                ein konkretes, unverbindliches Angebot — ohne Verkaufsdruck,
                ohne versteckte Kosten.
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
