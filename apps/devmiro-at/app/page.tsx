'use client'

import Link from 'next/link'
import {
  Zap, Clock, TrendingDown, Phone,
  Globe, BotMessageSquare, Workflow, Share2,
  Search, Mail, Calendar, Shield,
  Lock, Cloud, Wrench, ArrowRight,
  MessageSquare, Star, Users, Target, Check,
  BookOpen, Code2, Layers, ChevronRight,
  Cpu, Database, Server, Wifi, Smartphone,
  FileText, Eye, ThumbsUp, Award, Quote,
  ChevronDown,
} from 'lucide-react'
import { Header } from '@/app/components/header'
import { Footer } from '@/app/components/footer'

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

// ===== MARQUEE ITEMS =====
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

// ===== PROBLEMS =====
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
    desc: 'Angebote schwanken von €500 bis €50.000. Sie haben keine Referenz, keine Vergleichbarkeit — und Angst, zu viel oder das Falsche zu zahlen.',
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

// ===== 12 SERVICES =====
const services = [
  {
    icon: Globe,
    title: 'Website Entwicklung',
    tagline: 'Ihr digitaler Firmensitz',
    desc: 'Die beste Website ist die, die funktioniert. Schnell, mobil-optimiert, DSGVO-konform und so gestaltet, dass Besucher zu Kunden werden — nicht abspringen.',
    features: [
      'Next.js & React — höchste Performance',
      '100% mobil-optimiert, jedes Gerät',
      'DSGVO-konform von Tag 1',
      'SEO-Grundsetup inklusive',
      'SSL, Hosting — alles aus einem Guss',
    ],
    result: '+60% mehr Anfragen im Schnitt',
  },
  {
    icon: BotMessageSquare,
    title: 'KI-Chatbot',
    tagline: '24/7 Kundenservice ohne Personal',
    desc: 'Ihr digitaler Mitarbeiter, der nie schläft, nie krank wird und trotzdem freundlich bleibt. Beantwortet Fragen, nimmt Buchungen an und qualifiziert Leads — automatisch.',
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
      'n8n-basierte Workflows — no-code',
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
      'Engagement-Management',
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
      'Kalender-Synchronisierung',
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

// ===== CASE STUDIES =====
const caseStudies = [
  {
    badge: 'Restaurant',
    name: 'Restaurant Seeterrasse Bregenz',
    problem: 'Veraltete Website ohne Online-Buchung. 60% der Reservierungen kamen telefonisch — außerhalb der Öffnungszeiten ging viel verloren. Die Konkurrenz war bei Google bereits besser positioniert.',
    solution: 'Neue performante Website mit Cal.com Buchungssystem, Google Business Optimierung und lokale SEO-Kampagne für "Restaurant Bregenz" Keywords. Instagram-Content-Strategie inklusive.',
    results: ['+40% Reservierungen in 3 Monaten', '+85% Online-Buchungen statt Telefon', 'Top 3 Google für "Restaurant Bregenz"'],
    quote: 'Endlich ein Partner, der versteht, was wir brauchen — nicht irgendeine generische Website, sondern ein System, das funktioniert.',
    author: 'Maria L., Inhaberin Restaurant Seeterrasse',
  },
  {
    badge: 'Salon',
    name: 'Friseursalon Haargenau, Dornbirn',
    problem: 'Viele Kunden brachen den Buchungsprozess ab. Terminerinnerungen per SMS kosteten Zeit und das Instagram-Profil war seit Monaten inaktiv. Das Telefon stand nicht mehr still — aber die Terminauslastung war unbefriedigend.',
    solution: 'Eigene Buchungs-Website mit Cal.com, automatisierte SMS-Erinnerungen, Instagram-Management mit monatlichem Content-Plan und Google Business Profil komplett überarbeitet.',
    results: ['-70% No-Show-Quote durch Erinnerungen', '+55% neue Kunden über Instagram', '20h/Monat客户服务 Zeit gespart'],
    quote: 'Ich hätte nie gedacht, dass eine Website so viel ändern kann. Wir sind ausgebucht — und das, ohne einen Finger zu rühren.',
    author: 'Thomas W., Inhaber Friseursalon Haargenau',
  },
  {
    badge: 'Hotel',
    name: 'Hotel Bodenspektakel, Lindau',
    problem: 'Nicht-mobilfähige Website aus 2018, keine Online-Buchung, miese Rankings bei Google. Direktbuchungen über die Website waren quasi unmöglich. Booking.com took 15% Kommission — pro Buchung.',
    solution: 'Komplett neue Website mit Booking.com-Integration, Schema-Markup für Hotels, lokale SEO für Bodenseeraum und Instagram-Content-Strategie mit saisonalen Highlights.',
    results: ['+65% Direktbuchungen über Website', '+30% Sichtbarkeit in Google Search', 'Top 5 für "Hotel Lindau Bodensee"'],
    quote: 'DevMiro hat geliefert, was versprochen wurde — pünktlich, professionell und mit einem Ergebnis, das messbar ist.',
    author: 'Stefan K., Hotelmanager Hotel Bodenspektakel',
  },
]

// ===== PROCESS STEPS =====
const processSteps = [
  {
    number: '01',
    title: 'GESPRÄCH',
    desc: 'Wir lernen uns kennen — kostenlos und unverbindlich. Ich höre zu, stelle Fragen und verstehe, wo Sie gerade stehen und wo Sie hinwollen.',
    duration: '30 Minuten',
  },
  {
    number: '02',
    title: 'ANALYSE',
    desc: 'Ich analysiere Ihre aktuelle digitale Situation — Website, Social Media, Prozesse. Wo hakt es? Was funktioniert bereits? Wo liegt das größte Potenzial?',
    duration: '2–3 Tage',
  },
  {
    number: '03',
    title: 'KONZEPT',
    desc: 'Maßgeschneidertes Konzept mit konkreten Handlungsempfehlungen — priorisiert nach Impact. Keine Buzzwords, nur das, was für Sie Sinn macht.',
    duration: '5–7 Tage',
  },
  {
    number: '04',
    title: 'UMSETZUNG',
    desc: 'Wir setzen um — schnell und fokussiert. Sie werden laufend informiert und haben jederzeit Einsicht in den Fortschritt.',
    duration: '1–6 Wochen',
  },
  {
    number: '05',
    title: 'WACHSTUM',
    desc: 'Nach dem Launch sind wir nicht fertig — wir optimieren laufend, analysieren Daten und entwickeln Ihre digitale Präsenz kontinuierlich weiter.',
    duration: 'Laufend',
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

// ===== TECH STACK =====
const techStack = [
  {
    category: 'Frontend',
    name: 'Next.js & React',
    desc: 'Modernste React-Framework für performante, SEO-optimierte Websites mit Server-Side Rendering und optimaler Core-Web-Vitals-Bewertung.',
    items: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS'],
  },
  {
    category: 'E-Commerce',
    name: 'WordPress & Shopify',
    desc: 'Bewährte Plattformen für Content-Websites und Online-Shops — pluginreich, sicher und skalierbar für jedes Vorarlberger KMU.',
    items: ['WordPress', 'Shopify', 'WooCommerce', 'Elementor Pro'],
  },
  {
    category: 'Automation',
    name: 'n8n, Make & Zapier',
    desc: 'Workflow-Automatisierung ohne Code — wiederkehrende Tasks werden automatisch erledigt, ohne teure Entwicklerstunden.',
    items: ['n8n', 'Make (Integromat)', 'Zapier', 'OpenClaw'],
  },
  {
    category: 'KI & AI',
    name: 'OpenClaw & Claude',
    desc: 'KI-gestützte Automatisierung und Chatbots, die wirklich funktionieren — nicht nur ChatGPT-Prompts, sondern integrierte Business-Systeme.',
    items: ['OpenClaw', 'Claude AI', 'ChatGPT', 'Google AI Studio'],
  },
  {
    category: 'Hosting & Infra',
    name: 'Cloudflare & Vercel',
    desc: 'Globales CDN, DDoS-Schutz und blitzschnelles Hosting — für maximale Performance, Verfügbarkeit und Sicherheit.',
    items: ['Cloudflare', 'Vercel', 'Netcup', 'Docker'],
  },
  {
    category: 'Collaboration',
    name: 'Google Workspace',
    desc: 'Produktivitätstools für Ihr Team — E-Mail, Drive, Docs, Meet. Alles zentral, DSGVO-konform und mobil nutzbar.',
    items: ['Google Workspace', 'Notion', 'Slack', 'Trello'],
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
    question: 'Ich bin technisch nicht versiert — verstehe ich das alles?',
    answer: 'Definitiv. Mein Job ist es, komplexe Technik verständlich zu machen. Ich erkläre alles in normaler Sprache — keine Fachbegriffe, kein Tech-Jargon. Sie müssen nicht verstehen, wie es funktioniert — nur, dass es funktioniert.',
  },
  {
    question: 'Arbeiten Sie nur mit Unternehmen aus Vorarlberg?',
    answer: 'Mein Fokus liegt auf Vorarlberg und dem Bodenseeraum, weil ich hier verwurzelt bin und die lokalen Märkte kenne. Aber ich arbeite auch mit Unternehmen aus dem gesamten DACH-Raum — Technik kennt keine Grenzen.',
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
  {
    question: 'Warum sollte ich Sie wählen und nicht eine große Agentur?',
    answer: 'Große Agenturen haben Overhead, lange Kommunikationswege und teure Projektleiter. Bei mir haben Sie einen direkten Ansprechpartner — mich. Ich bin günstiger, schneller und persönlicher. Und weil ich auf Vorarlberg fokussiert bin, verstehe ich Ihren Markt besser als jede Wiener Agentur.',
  },
]

export default function HomePage() {
  return (
    <>
      <Header />

      <main>

        {/* ===== HERO ===== */}
        <section className="hero-v2">
          <div className="hero-v2-bg">
            <div className="brutal-grid" />
            <div className="hero-v2-gradient" />
            <div className="hero-v2-shapes" aria-hidden="true">
              <div className="hv2-shape hv2-shape-1" />
              <div className="hv2-shape hv2-shape-2" />
              <div className="hv2-shape hv2-shape-3" />
              <div className="hv2-shape hv2-shape-4" />
              <div className="hv2-shape hv2-shape-5" />
              <div className="hv2-shape hv2-shape-6" />
            </div>
          </div>

          <div className="container">
            <div className="hero-v2-content">
              <div className="hero-v2-label">
                <Zap size={11} />
                IT-Lösungen für Vorarlberg
              </div>

              <h1 className="hero-v2-title">
                <span className="hv2-line hv2-line-1">IHRE</span>
                <span className="hv2-line hv2-line-2">DIGITALE</span>
                <span className="hv2-line hv2-line-3 accent-lime">TRANSFORMATION</span>
              </h1>

              <div className="hero-v2-divider" />

              <p className="hero-v2-subtitle">
                <strong>Websites, KI-Chatbots und Business-Automatisierung</strong> für Unternehmen
                in Bregenz und Vorarlberg. Schneller als eine Agentur, persönlicher als ein Tool —
                und mit dem lokalen Biss, den Ihr Business verdient.
              </p>

              <div className="hero-v2-ctas">
                <Link href="/kontakt" className="btn-hv2-primary glow-pulse">
                  PROJEKT BESPRECHEN
                  <ArrowRight size={18} />
                </Link>
                <Link href="/services" className="btn-hv2-secondary">
                  Leistungen ansehen
                </Link>
              </div>

              <div className="hero-v2-scroll-hint" aria-hidden="true">
                <ChevronDown size={20} />
              </div>
            </div>
          </div>
        </section>

        {/* ===== MARQUEE ===== */}
        <div className="marquee-wrapper" aria-hidden="true">
          <div className="marquee-track">
            {marqueeItems.map((item, i) => (
              <span key={i} className={`marquee-item ${item.lime ? 'lime' : ''}`}>
                <span className="dot" />
                {item.text}
              </span>
            ))}
          </div>
        </div>

        {/* ===== PROBLEM SECTION ===== */}
        <section className="problem-section-v2" id="problem">
          <div className="problem-bg-text-v2" aria-hidden="true">SCHMERZ</div>
          <div className="container">
            <div className="section-tag">
              <span className="tag-line" />
              Das kennen Sie?
            </div>
            <div className="problem-header-v2">
              <h2 className="section-title-brutal">
                4 PROBLEME,<br />
                <span className="accent">DIE IHNEN UMSATZ KOSTEN.</span>
              </h2>
              <p className="problem-header-desc">
                Jeder Unternehmer in Vorarlberg kämpft mit denselben digitalen Herausforderungen.
                Das Problem ist nicht fehlende Technik — es ist fehlende Zeit und der richtige Partner.
              </p>
            </div>

            <div className="problem-grid-v2">
              {problems.map((p) => (
                <div key={p.number} className="problem-card-v2">
                  <div className="problem-card-v2-top">
                    <div className="problem-emoji-lg">{p.emoji}</div>
                    <div className="problem-number">{p.number}</div>
                  </div>
                  <div className="problem-card-v2-body">
                    <h3 className="problem-card-v2-title">{p.title}</h3>
                    <p className="problem-card-v2-desc">{p.desc}</p>
                  </div>
                  <div className="problem-card-v2-bar" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SERVICES SECTION ===== */}
        <section className="services-section-v2" id="services">
          <div className="container">
            <div className="services-v2-header">
              <div className="section-tag">
                <span className="tag-line" />
                12 Lösungen
              </div>
              <h2 className="section-title-brutal">
                ALLES AUS<br />
                <span className="accent">EINER HAND.</span>
              </h2>
              <p className="services-v2-header-desc">
                Von der Website bis zur KI-Automatisierung — ich biete alles,
                was Ihr digitales Business braucht. Keine Vermittler, keine externen Freelancer.
                Ein Partner, der sich auskennt und verantwortlich ist.
              </p>
            </div>

            <div className="services-grid-v2">
              {services.map((s) => (
                <div key={s.title} className="service-card-v2">
                  <div className="service-card-v2-inner">
                    <div className="service-card-v2-icon">
                      <s.icon size={28} strokeWidth={1.5} />
                    </div>
                    <div className="service-card-v2-tagline">{s.tagline}</div>
                    <h3 className="service-card-v2-title">{s.title}</h3>
                    <p className="service-card-v2-desc">{s.desc}</p>
                    <ul className="service-card-v2-features">
                      {s.features.map((f) => (
                        <li key={f} className="service-card-v2-feature">
                          <Check size={11} strokeWidth={3} />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="service-card-v2-result">
                      <TrendingDown size={10} />
                      {s.result}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="services-v2-cta">
              <Link href="/services" className="btn-hv2-secondary">
                Alle 12 Leistungen im Detail
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* ===== CASE STUDIES ===== */}
        <section className="case-studies-section-v2" id="cases">
          <div className="case-bg-text-v2" aria-hidden="true">ERFOLG</div>
          <div className="container">
            <div className="section-tag">
              <span className="tag-line" />
              Case Studies
            </div>
            <h2 className="section-title-brutal case-header-title">
              MESSBARER<br />
              <span className="accent">ERFOLG.</span>
            </h2>

            <div className="case-studies-list-v2">
              {caseStudies.map((cs) => (
                <div key={cs.name} className="case-study-v2">
                  <div className="case-study-v2-header">
                    <span className="case-badge">{cs.badge}</span>
                    <h3 className="case-study-v2-name">{cs.name}</h3>
                  </div>
                  <div className="case-study-v2-grid">
                    <div className="case-block">
                      <div className="case-block-label">
                        <Eye size={11} />
                        Das Problem
                      </div>
                      <p className="case-block-desc">{cs.problem}</p>
                    </div>
                    <div className="case-block">
                      <div className="case-block-label">
                        <Cpu size={11} />
                        Die Lösung
                      </div>
                      <p className="case-block-desc">{cs.solution}</p>
                    </div>
                    <div className="case-block case-block-results">
                      <div className="case-block-label">
                        <ThumbsUp size={11} />
                        Die Ergebnisse
                      </div>
                      <div className="case-results-list">
                        {cs.results.map((r) => (
                          <div key={r} className="case-result-item">
                            <TrendingDown size={11} />
                            {r}
                          </div>
                        ))}
                      </div>
                      <blockquote className="case-quote">
                        &ldquo;{cs.quote}&rdquo;
                        <cite className="case-quote-cite">— {cs.author}</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS ===== */}
        <section className="process-section-v2" id="prozess">
          <div className="container">
            <div className="section-tag">
              <span className="tag-line" />
              So arbeiten wir
            </div>
            <h2 className="section-title-brutal">
              5 SCHRITTE.<br />
              <span className="accent">KLARE STRUKTUR.</span>
            </h2>

            <div className="process-steps-v2">
              {processSteps.map((step) => (
                <div key={step.number} className="process-step-v2">
                  <div className="process-step-v2-number">{step.number}</div>
                  <div className="process-step-v2-connector" />
                  <div className="process-step-v2-body">
                    <h3 className="process-step-v2-title">{step.title}</h3>
                    <p className="process-step-v2-desc">{step.desc}</p>
                    <div className="process-step-v2-duration">
                      <Clock size={10} />
                      {step.duration}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS ===== */}
        <section className="testimonials-section-v2" id="testimonials">
          <div className="container">
            <div className="section-tag">
              <span className="tag-line" />
              Kundenstimmen
            </div>
            <h2 className="section-title-brutal">
              SIE SPRECHEN<br />
              <span className="accent">FÜR SICH.</span>
            </h2>

            <div className="testimonials-grid-v2">
              {testimonials.map((t) => (
                <div key={t.name} className="testimonial-card-v2">
                  <div className="testimonial-card-v2-quote-mark">&ldquo;</div>
                  <p className="testimonial-card-v2-text">{t.quote}</p>
                  <div className="testimonial-card-v2-stats">
                    <div className="testimonial-stat">
                      <span className="testimonial-stat-label">Vorher</span>
                      <span className="testimonial-stat-value">{t.before}</span>
                    </div>
                    <div className="testimonial-stat-arrow">→</div>
                    <div className="testimonial-stat">
                      <span className="testimonial-stat-label">Nachher</span>
                      <span className="testimonial-stat-value lime">{t.after}</span>
                    </div>
                  </div>
                  <div className="testimonial-card-v2-author">
                    <div className="testimonial-card-v2-name">{t.name}</div>
                    <div className="testimonial-card-v2-role">{t.role}, {t.business}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TECHNOLOGIES ===== */}
        <section className="tech-section-v2" id="tech">
          <div className="container">
            <div className="section-tag">
              <span className="tag-line" />
              Technologien
            </div>
            <h2 className="section-title-brutal">
              MODERNE TOOLS.<br />
              <span className="accent">BEWÄHRTE TECHNIK.</span>
            </h2>
            <p className="tech-section-v2-desc">
              Ich setze auf Technologien, die für Ihre Anforderungen Sinn ergeben —
              nicht auf whatever gerade trendy ist. Alles, was ich einsetze,
              ist erprobt, sicher und zukunftssicher.
            </p>

            <div className="tech-grid-v2">
              {techStack.map((tech) => (
                <div key={tech.name} className="tech-card-v2">
                  <div className="tech-card-v2-category">{tech.category}</div>
                  <h3 className="tech-card-v2-name">{tech.name}</h3>
                  <p className="tech-card-v2-desc">{tech.desc}</p>
                  <div className="tech-card-v2-badges">
                    {tech.items.map((item) => (
                      <span key={item} className="tech-badge-v2">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== FAQ ===== */}
        <section className="faq-section-v2" id="faq">
          <div className="container">
            <div className="section-tag">
              <span className="tag-line" />
              FAQ
            </div>
            <h2 className="section-title-brutal">
              FRAGEN?<br />
              <span className="accent">ANTWORTEN.</span>
            </h2>

            <div className="faq-list-v2">
              {faqs.map((faq, i) => (
                <div key={i} className="faq-item-v2">
                  <button className="faq-question-v2">
                    <span>{faq.question}</span>
                    <div className="faq-icon-v2">+</div>
                  </button>
                  <div className="faq-answer-v2">
                    <p className="faq-answer-v2-text">{faq.answer}</p>
                  </div>
                </div>
              ))}
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
