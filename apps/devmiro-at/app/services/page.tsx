'use client'

import Link from 'next/link'
import {
  Globe, BotMessageSquare, Workflow, Share2,
  Search, Mail, Calendar, Shield,
  Lock, Cloud, Wrench, ArrowRight,
  Check, TrendingDown, Sparkles, Star,
} from 'lucide-react'

// Google Ads icon (not in lucide-react)
function GoogleAdsIcon({ size = 24, strokeWidth = 1.5 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  )
}
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

const services = [
  {
    icon: Globe,
    title: 'Website Entwicklung',
    tagline: 'Ihr digitaler Firmensitz',
    desc: 'Die beste Website ist die, die funktioniert. Schnell, mobil-optimiert, DSGVO-konform und so gestaltet, dass Besucher zu Kunden werden — nicht abspringen. Ich baue Websites, die Ihre Zielgruppe überzeugen und in Suchmaschinen gefunden werden.',
    features: [
      'Next.js & React — höchste Performance',
      '100% mobil-optimiert, jedes Gerät',
      'DSGVO-konform von Tag 1',
      'SEO-Grundsetup inklusive',
      'SSL-Zertifikat & Hosting-Setup',
    ],
    result: '+60% mehr Anfragen im Schnitt',
  },
  {
    icon: BotMessageSquare,
    title: 'KI-Chatbot',
    tagline: '24/7 Kundenservice ohne Personal',
    desc: 'Ihr digitaler Mitarbeiter, der nie schläft, nie krank wird und trotzdem freundlich bleibt. Beantwortet Fragen, nimmt Buchungen an und qualifiziert Leads — automatisch, rund um die Uhr.',
    features: [
      'OpenClaw KI-Engine — Made in Austria',
      'Training auf Ihre Branche & Angebote',
      'Integration in Website & WhatsApp',
      'Automatische Lead-Qualifizierung',
      'Lernt kontinuierlich, wird besser',
    ],
    result: '80% weniger Anfragen-Manualarbeit',
  },
  {
    icon: Workflow,
    title: 'Workflow-Automatisierung',
    tagline: 'Wiederkehrende Tasks eliminieren',
    desc: 'E-Mails beantworten, Leads nachtragen, Erinnerungen senden — all das läuft ab sofort ohne Sie. Sie haben den Kopf frei für das, was Ihr Business wirklich voranbringt.',
    features: [
      'n8n-basierte Workflows — no-code, flexibel',
      'E-Mail-Automation & Follow-ups',
      'CRM-Integration (HubSpot, Notion & mehr)',
      'Automatische Rechnungsstellung',
      'Individuelle Trigger — genau für Sie gebaut',
    ],
    result: 'Bis zu 15h/Woche gespart',
  },
  {
    icon: Share2,
    title: 'Social Media',
    tagline: 'Präsenz ohne Zeitaufwand',
    desc: 'Instagram, Facebook und TikTok — professionell bespielt, ohne dass Sie selbst hinter dem Handy sitzen. Regelmäßig, engagement-stark und zu 100% markenkonform.',
    features: [
      'Content-Planung & Erstellung',
      'Instagram, Facebook & TikTok',
      'Engagement-Management & Kommentare',
      'Monatliches Performance-Reporting',
      'Google Business Optimierung',
    ],
    result: '+220% Engagement in 3 Monaten',
  },
  {
    icon: Search,
    title: 'SEO',
    tagline: 'Gefunden werden von neuen Kunden',
    desc: 'Auf Platz 1 bei Google — für die Keywords, die wirklich Umsatz bringen. Lokale SEO für Vorarlberg, technische Optimierung und Content-Strategie aus einer Hand.',
    features: [
      'Lokale SEO für Vorarlberg & Bodenseeraum',
      'Technische On-Page-Optimierung',
      'Google Business Profile Optimierung',
      'Backlink-Aufbau & Content-Strategie',
      'Monatliches Ranking-Reporting',
    ],
    result: 'Top 3 Google für relevante Keywords',
  },
  {
    icon: GoogleAdsIcon,
    title: 'Google Ads',
    tagline: 'Sofort sichtbar sein',
    desc: 'Gezielte Werbekampagnen, die echte Kunden bringen — nicht nur Klicks, sondern Conversions. Transparent, messbar und mit einem klaren ROI.',
    features: [
      'Google Search & Display Ads',
      'Remarketing & Retargeting',
      'Conversion-Tracking & Analytics',
      'A/B-Testing für maximale Performance',
      'Monatliches Reporting mit ROI-Analyse',
    ],
    result: '3x mehr Conversions vs. DIY',
  },
  {
    icon: Mail,
    title: 'E-Mail Marketing',
    tagline: 'Kundenbindung automatisieren',
    desc: 'Newsletter, Willkommens-Serien, Geburtstags-Mails und Erinnerungen — automatisierte E-Mail-Kommunikation, die Kunden bindet und wiederkehrende Käufe generiert.',
    features: [
      'Newsletter-Setup & Automation',
      'Willkommens-Serien für Neukunden',
      'Abgebrochene Warenkorb-Erinnerungen',
      'Geburtstags- & Jubiläums-Mails',
      'DSGVO-konforme E-Mail-Administration',
    ],
    result: '+35% Kundenbindung durch Automation',
  },
  {
    icon: Calendar,
    title: 'Online Terminbuchung',
    tagline: 'Kein Telefon mehr nötig',
    desc: 'Kunden buchen 24/7 direkt online — ohne Wartezeit, ohne Telefon, ohne E-Mail. Cal.com Integration mit automatischen Erinnerungen per SMS und E-Mail.',
    features: [
      'Cal.com Integration — professionell & gratis',
      '24/7 Online-Buchung ohne Barrieren',
      'Automatische SMS & E-Mail-Erinnerungen',
      'Kalender-Synchronisierung mit Ihrem',
      'Booking-Widget in Website eingebettet',
    ],
    result: '70% weniger No-Show-Quote',
  },
  {
    icon: Lock,
    title: 'Cyber-Security',
    tagline: 'Schutz ohne Kopfzerbrechen',
    desc: 'SSL, Firewall, Malware-Schutz und automatische Backups — der Rundum-Schutz für Ihr digitales Business. Damit Sie nachts ruhig schlafen können.',
    features: [
      'SSL-Zertifikate & Web Application Firewall',
      'Automatische tägliche Backups',
      'Echtzeit-Malware-Scanning',
      'Security-Monitoring rund um die Uhr',
      'Incident Response & Wiederherstellung',
    ],
    result: '100% Schutz vor häufigsten Angriffen',
  },
  {
    icon: Shield,
    title: 'DSGVO',
    tagline: 'Rechtssicherheit ohne Anwalt',
    desc: 'Vollständiger DSGVO-Audit für Ihre Website und Ihr Business. Von der Prüfung bis zur laufenden Compliance — dokumentiert, transparent und rechtssicher.',
    features: [
      'Vollständiger DSGVO-Audit',
      'Cookie-Banner & Consent-Management',
      'Datenschutzerklärung & Impressum',
      'Verarbeitungsverzeichnis (VVO)',
      'Laufende Compliance-Überwachung',
    ],
    result: '100% DSGVO-konform — dokumentiert',
  },
  {
    icon: Cloud,
    title: 'Cloud-Arbeitsplätze',
    tagline: 'Von überall arbeiten',
    desc: 'Virtueller Desktop für Ihr Team — sicher, zentral und skalierbar. Von unterwegs, von zu Hause, von überall. Keine teuren Server, keine IT-Abteilung nötig.',
    features: [
      'Virtueller Windows-Desktop (DaaS)',
      'Sicherer Zugriff von überall',
      'Zentrale Datenverwaltung & Backup',
      'Skalierbar pro User — keine Hardware-Kosten',
      'Integration in Ihre bestehende IT',
    ],
    result: '50% Kostenersparnis vs. eigene Server',
  },
  {
    icon: Wrench,
    title: 'IT-Wartung',
    tagline: 'Ihre IT funktioniert, einfach',
    desc: 'Monatliche Updates, proaktives Monitoring und prioritärer Support — alles in einem. Sie haben einen technischen Partner, der sich um alles kümmert.',
    features: [
      'Monatliche Updates & Wartung',
      'Priorisierter Support via Ticket & Chat',
      'Proaktives Monitoring — Probleme vor Ihnen erkannt',
      'Regelmäßige Performance-Berichte',
      '24/7 Notfall-Support bei Ausfällen',
    ],
    result: 'Eine Nummer für alle Ihre IT-Fragen',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>

        {/* ===== PAGE HERO ===== */}
        <section className="page-hero">
          <div className="page-hero-bg" />
          <div className="container">
            <div className="page-hero-label">
              <Sparkles size={12} />
              Leistungen
            </div>
            <h1>
              12 Lösungen für<br />
              Ihr digitales Business.
            </h1>
            <p>
              Websites, KI-Chatbots, Workflow-Automatisierung und mehr —
              alles aus einer Hand, alles ohne versteckte Kosten.
              Transparente Zusammenarbeit, messbare Ergebnisse.
            </p>
          </div>
        </section>

        {/* ===== ALL 12 SERVICES ===== */}
        <section className="services-section-v2">
          <div className="container">
            <div className="services-v2-header">
              <div className="section-tag">
                <span className="tag-line" />
                Alle Leistungen
              </div>
              <h2 className="section-title-brutal">
                WAS ICH<br />
                <span className="accent">FÜR SIE TUE.</span>
              </h2>
              <p className="services-v2-header-desc">
                12 spezialisierte Services — jeder für sich eine完整 Lösung,
                zusammen ein digitales Ökosystem, das Ihr Business voranbringt.
                Keine Pakete, keine Überraschungen. Nur das, was Sie wirklich brauchen.
              </p>
            </div>

            <div className="services-page-grid">
              {services.map((s) => (
                <div key={s.title} className="services-page-card">
                  <div className="services-page-icon">
                    <s.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="services-page-title">{s.title}</div>
                  <p className="services-page-desc">{s.desc}</p>
                  <ul className="services-page-features">
                    {s.features.map((f) => (
                      <li key={f} className="services-page-feature">
                        <Check size={12} className="check" strokeWidth={3} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="services-page-result">
                    <TrendingDown size={10} />
                    {s.result}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY US ===== */}
        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-story">
                <div className="section-tag">
                  <span className="tag-line" />
                  Warum DevMiro?
                </div>
                <h2>ANDERS.<br />BESSER. LOCAL.</h2>
                <p>
                  Ich bin <strong>Miro Gavanelli</strong> — IT-Unternehmer aus Bregenz,
                  eingetragen in der WKO Vorarlberg. DevMiro ist keine Agentur,
                  kein Freelancer-Netzwerk — ich bin ein echter Partner, der direkt
                  für Sie da ist.
                </p>
                <p>
                  Mein Fokus liegt auf Vorarlberg und dem Bodenseeraum, weil ich
                  hier verwurzelt bin und die lokale Wirtschaft verstehe.
                  Das gibt mir einen Vorteil, den keine Wiener Agentur bieten kann.
                </p>
                <p>
                  <strong>Keine Callcenter, keine Warteschleifen.</strong> Sie haben
                  meine Nummer und eine Zusage: Ich melde mich innerhalb von 48 Stunden.
                  So gut wie immer schneller.
                </p>
              </div>

              <div className="about-values">
                {[
                  {
                    title: '100% VORARLBERG',
                    desc: 'Keine Callcenter, keine Warteschleifen. Sie sprechen direkt mit mir — Ihrem persönlichen IT-Partner aus Bregenz.',
                  },
                  {
                    title: 'DSGVO VON GRUND AUF',
                    desc: 'Jedes Projekt wird von Grund auf DSGVO-konform aufgebaut. Kein nachträgliches Patchwork, keine bösen Überraschungen.',
                  },
                  {
                    title: 'REAKTION < 48H',
                    desc: 'Sie haben meine Nummer und eine Zusage: Ich melde mich innerhalb von 48 Stunden. So gut wie immer schneller.',
                  },
                  {
                    title: 'MESSBARE ERGEBNISSE',
                    desc: 'Jedes Projekt hat klare KPIs. Sie sehen, was funktioniert — in monatlichen Reports, die Sie verstehen werden.',
                  },
                ].map((v) => (
                  <div key={v.title} className="about-value-item">
                    <div className="about-value-title">{v.title}</div>
                    <div className="about-value-desc">{v.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA ===== */}
        <section className="cta-section-v2">
          <div className="cta-v2-bg" aria-hidden="true" />
          <div className="container">
            <div className="cta-v2-content">
              <div className="section-tag" style={{ justifyContent: 'center' }}>
                <span className="tag-line" />
                Nächster Schritt
                <span className="tag-line" />
              </div>
              <h2 className="cta-v2-title">
                BEREIT FÜR DEN<br />
                NÄCHSTEN SCHRITT?
              </h2>
              <p className="cta-v2-subtitle">
                Kostenloses Erstgespräch. Innerhalb von 48 Stunden erhalten Sie
                ein konkretes, unverbindliches Angebot — ohne Verkaufsdruck,
                ohne versteckte Kosten.
              </p>
              <Link href="/kontakt" className="btn-cta-v2 glow-pulse">
                PROJEKT BESPRECHEN →
              </Link>
              <div className="cta-v2-contact">
                <span>info@devmiro.at</span>
                <span className="cta-v2-divider">·</span>
                <span>+43 664 123 4567</span>
                <span className="cta-v2-divider">·</span>
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
