'use client'

import Link from 'next/link'
import {
  Globe, BotMessageSquare, Workflow, Share2,
  Search, Mail, Calendar, Lock, Cloud, Wrench,
  ArrowRight, Check, TrendingDown, Sparkles,
} from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'
import { useEffect } from 'react'

function GoogleAdsIcon({ size = 24, strokeWidth = 1.5 }: { size?: number; strokeWidth?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  )
}

// Asymmetric services layout: each service is a full-width asymmetric card
// alternating between left-aligned and right-aligned layouts
const services = [
  {
    id: '01',
    icon: Globe,
    title: 'Website Entwicklung',
    tagline: 'Ihr digitaler Firmensitz',
    desc: 'Die beste Website ist die, die funktioniert. Schnell, mobil-optimiert, DSGVO-konform und so gestaltet, dass Besucher zu Kunden werden — nicht abspringen. Ich baue Websites, die Ihre Zielgruppe überzeugen und in Suchmaschinen gefunden werden.',
    features: ['Next.js & React — höchste Performance', '100% mobil-optimiert, jedes Gerät', 'DSGVO-konform von Tag 1', 'SEO-Grundsetup inklusive', 'SSL-Zertifikat & Hosting-Setup'],
    result: '+60% mehr Anfragen im Schnitt',
    align: 'left',
  },
  {
    id: '02',
    icon: BotMessageSquare,
    title: 'KI-Chatbot',
    tagline: '24/7 Kundenservice ohne Personal',
    desc: 'Ihr digitaler Mitarbeiter, der nie schläft, nie krank wird und trotzdem freundlich bleibt. Beantwortet Fragen, nimmt Buchungen an und qualifiziert Leads — automatisch, rund um die Uhr.',
    features: ['OpenClaw KI-Engine — Made in Austria', 'Training auf Ihre Branche & Angebote', 'Integration in Website & WhatsApp', 'Automatische Lead-Qualifizierung', 'Lernt kontinuierlich, wird besser'],
    result: '80% weniger Anfragen-Manualarbeit',
    align: 'right',
  },
  {
    id: '03',
    icon: Workflow,
    title: 'Workflow-Automatisierung',
    tagline: 'Wiederkehrende Tasks eliminieren',
    desc: 'E-Mails beantworten, Leads nachtragen, Erinnerungen senden — all das läuft ab sofort ohne Sie. Sie haben den Kopf frei für das, was Ihr Business wirklich voranbringt.',
    features: ['n8n-basierte Workflows — no-code, flexibel', 'E-Mail-Automation & Follow-ups', 'CRM-Integration (HubSpot, Notion & mehr)', 'Automatische Rechnungsstellung', 'Individuelle Trigger — genau für Sie gebaut'],
    result: 'Bis zu 15h/Woche gespart',
    align: 'left',
  },
  {
    id: '04',
    icon: Share2,
    title: 'Social Media',
    tagline: 'Präsenz ohne Zeitaufwand',
    desc: 'Instagram, Facebook und TikTok — professionell bespielt, ohne dass Sie selbst hinter dem Handy sitzen. Regelmäßig, engagement-stark und zu 100% markenkonform.',
    features: ['Content-Planung & Erstellung', 'Instagram, Facebook & TikTok', 'Engagement-Management & Kommentare', 'Monatliches Performance-Reporting', 'Google Business Optimierung'],
    result: '+220% Engagement in 3 Monaten',
    align: 'right',
  },
  {
    id: '05',
    icon: Search,
    title: 'SEO',
    tagline: 'Gefunden werden von neuen Kunden',
    desc: 'Auf Platz 1 bei Google — für die Keywords, die wirklich Umsatz bringen. Lokale SEO für Vorarlberg, technische Optimierung und Content-Strategie aus einer Hand.',
    features: ['Lokale SEO für Vorarlberg & Bodenseeraum', 'Technische On-Page-Optimierung', 'Google Business Profile Optimierung', 'Backlink-Aufbau & Content-Strategie', 'Monatliches Ranking-Reporting'],
    result: 'Top 3 Google für relevante Keywords',
    align: 'left',
  },
  {
    id: '06',
    icon: GoogleAdsIcon as any,
    title: 'Google Ads',
    tagline: 'Sofort sichtbar sein',
    desc: 'Gezielte Werbekampagnen, die echte Kunden bringen — nicht nur Klicks, sondern Conversions. Transparent, messbar und mit einem klaren ROI.',
    features: ['Google Search & Display Ads', 'Remarketing & Retargeting', 'Conversion-Tracking & Analytics', 'A/B-Testing für maximale Performance', 'Monatliches Reporting mit ROI-Analyse'],
    result: '3x mehr Conversions vs. DIY',
    align: 'right',
  },
  {
    id: '07',
    icon: Mail,
    title: 'E-Mail Marketing',
    tagline: 'Kundenbindung automatisieren',
    desc: 'Newsletter, Willkommens-Serien, Geburtstags-Mails und Erinnerungen — automatisierte E-Mail-Kommunikation, die Kunden bindet und wiederkehrende Käufe generiert.',
    features: ['Newsletter-Setup & Automation', 'Willkommens-Serien für Neukunden', 'Abgebrochene Warenkorb-Erinnerungen', 'Geburtstags- & Jubiläums-Mails', 'DSGVO-konforme E-Mail-Administration'],
    result: '+35% Kundenbindung durch Automation',
    align: 'left',
  },
  {
    id: '08',
    icon: Calendar,
    title: 'Online Terminbuchung',
    tagline: 'Kein Telefon mehr nötig',
    desc: 'Kunden buchen 24/7 direkt online — ohne Wartezeit, ohne Telefon, ohne E-Mail. Cal.com Integration mit automatischen Erinnerungen per SMS und E-Mail.',
    features: ['Cal.com Integration — professionell & gratis', '24/7 Online-Buchung ohne Barrieren', 'Automatische SMS & E-Mail-Erinnerungen', 'Kalender-Synchronisierung mit Ihrem', 'Booking-Widget in Website eingebettet'],
    result: '70% weniger No-Show-Quote',
    align: 'right',
  },
  {
    id: '09',
    icon: Lock,
    title: 'Cyber-Security',
    tagline: 'Schutz ohne Kopfzerbrechen',
    desc: 'SSL, Firewall, Malware-Schutz und automatische Backups — der Rundum-Schutz für Ihr digitales Business. Damit Sie nachts ruhig schlafen können.',
    features: ['SSL-Zertifikate & Web Application Firewall', 'Automatische tägliche Backups', 'Echtzeit-Malware-Scanning', 'Security-Monitoring rund um die Uhr', 'Incident Response & Wiederherstellung'],
    result: '100% Schutz vor häufigsten Angriffen',
    align: 'left',
  },
  {
    id: '10',
    icon: Mail,
    title: 'DSGVO',
    tagline: 'Rechtssicherheit ohne Anwalt',
    desc: 'Vollständiger DSGVO-Audit für Ihre Website und Ihr Business. Von der Prüfung bis zur laufenden Compliance — dokumentiert, transparent und rechtssicher.',
    features: ['Vollständiger DSGVO-Audit', 'Cookie-Banner & Consent-Management', 'Datenschutzerklärung & Impressum', 'Verarbeitungsverzeichnis (VVO)', 'Laufende Compliance-Überwachung'],
    result: '100% DSGVO-konform — dokumentiert',
    align: 'right',
  },
  {
    id: '11',
    icon: Cloud,
    title: 'Cloud-Arbeitsplätze',
    tagline: 'Von überall arbeiten',
    desc: 'Virtueller Desktop für Ihr Team — sicher, zentral und skalierbar. Von unterwegs, von zu Hause, von überall. Keine teuren Server, keine IT-Abteilung nötig.',
    features: ['Virtueller Windows-Desktop (DaaS)', 'Sicherer Zugriff von überall', 'Zentrale Datenverwaltung & Backup', 'Skalierbar pro User — keine Hardware-Kosten', 'Integration in Ihre bestehende IT'],
    result: '50% Kostenersparnis vs. eigene Server',
    align: 'left',
  },
  {
    id: '12',
    icon: Wrench,
    title: 'IT-Wartung',
    tagline: 'Ihre IT funktioniert, einfach',
    desc: 'Monatliche Updates, proaktives Monitoring und prioritärer Support — alles in einem. Sie haben einen technischen Partner, der sich um alles kümmert.',
    features: ['Monatliche Updates & Wartung', 'Priorisierter Support via Ticket & Chat', 'Proaktives Monitoring — Probleme vor Ihnen erkannt', 'Regelmäßige Performance-Berichte', '24/7 Notfall-Support bei Ausfällen'],
    result: 'Eine Nummer für alle Ihre IT-Fragen',
    align: 'right',
  },
]

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

export default function ServicesPage() {
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
              <Sparkles size={10} />
              Leistungen
            </div>
            <h1>
              12 Lösungen für<br />
              <span className="section-title__accent">Ihr digitales Business.</span>
            </h1>
            <p>
              Websites, KI-Chatbots, Workflow-Automatisierung und mehr —
              alles aus einer Hand, alles ohne versteckte Kosten.
              Transparente Zusammenarbeit, messbare Ergebnisse.
            </p>
          </div>
        </section>

        {/* ===== ALL SERVICES — ASYMMETRIC ===== */}
        <section className="services-full">
          <div className="container">
            {services.map((s, i) => (
              <div key={s.id} className={`service-full-card reveal ${s.align === 'right' ? 'service-full-card--right' : ''}`}>
                <div className="service-full-card__content">
                  <div className="service-full-card__header">
                    <div className="service-full-card__number">{s.id}</div>
                    <div className="service-full-card__icon">
                      <s.icon size={32} strokeWidth={1.5} />
                    </div>
                  </div>

                  <div className="service-full-card__tagline">{s.tagline}</div>
                  <h2 className="service-full-card__title">{s.title}</h2>
                  <p className="service-full-card__desc">{s.desc}</p>

                  <ul className="service-full-card__features">
                    {s.features.map((f) => (
                      <li key={f} className="service-full-card__feature">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="service-full-card__result">
                    <TrendingDown size={11} />
                    {s.result}
                  </div>
                </div>

                <div className="service-full-card__visual">
                  <div className="service-full-card__visual-inner">
                    <div className="service-full-card__visual-icon">
                      <s.icon size={80} strokeWidth={1} />
                    </div>
                    <div className="service-full-card__visual-number">{s.id}</div>
                  </div>
                </div>

                {/* CTA between cards */}
                {i === 2 && (
                  <div className="services-full-cta services-full-cta--between">
                    <div className="services-full-cta__line" />
                    <div className="services-full-cta__content">
                      <p className="services-full-cta__text">
                        Sie wissen noch nicht genau, was Sie brauchen?
                      </p>
                      <Link href="/kontakt" className="btn btn--primary">
                        Kostenlos beraten lassen
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                    <div className="services-full-cta__line" />
                  </div>
                )}
                {i === 7 && (
                  <div className="services-full-cta services-full-cta--between">
                    <div className="services-full-cta__line" />
                    <div className="services-full-cta__content">
                      <p className="services-full-cta__text">
                        Fragen zu einem bestimmten Service?
                      </p>
                      <Link href="/kontakt" className="btn btn--outline">
                        Projekt besprechen
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                    <div className="services-full-cta__line" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ===== WHY DEVMIRO ===== */}
        <section className="why-devmiro">
          <div className="container">
            <div className="section-label">Warum DevMiro?</div>
            <h2 className="section-title">
              Anders. Besser.<br />
              <span className="section-title__accent">Local.</span>
            </h2>

            <div className="why-devmiro__grid">
              {[
                {
                  value: '100%',
                  title: 'Vorarlberg',
                  desc: 'Keine Callcenter, keine Warteschleifen. Sie sprechen direkt mit mir — Ihrem persönlichen IT-Partner aus Bregenz.',
                },
                {
                  value: 'DSGVO',
                  title: 'Von Grund Auf',
                  desc: 'Jedes Projekt wird von Grund auf DSGVO-konform aufgebaut. Kein nachträgliches Patchwork, keine bösen Überraschungen.',
                },
                {
                  value: '<48h',
                  title: 'Reaktion',
                  desc: 'Sie haben meine Nummer und eine Zusage: Ich melde mich innerhalb von 48 Stunden. So gut wie immer schneller.',
                },
                {
                  value: '12+',
                  title: 'Services',
                  desc: 'Alles aus einer Hand — kein Management von 5 verschiedenen Freelancern. Ein Partner, eine Verantwortung.',
                },
              ].map((item) => (
                <div key={item.value} className="why-devmiro__card reveal">
                  <div className="why-devmiro__card-value">{item.value}</div>
                  <div className="why-devmiro__card-title">{item.title}</div>
                  <p className="why-devmiro__card-desc">{item.desc}</p>
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
              <div className="section-label section-label--accent">Nächster Schritt</div>
              <h2 className="cta__title">
                Bereit für den<br />
                nächsten Schritt?
              </h2>
              <p className="cta__subtitle">
                Kostenloses Erstgespräch. Innerhalb von 48 Stunden erhalten Sie
                ein konkretes, unverbindliches Angebot — ohne Verkaufsdruck.
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
