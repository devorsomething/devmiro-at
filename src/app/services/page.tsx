
import Link from "next/link";




const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
      </svg>
    ),
    title: 'Custom Figma Design',
    desc: 'Ein einzigartiges Design, das von Grund auf für Ihre Marke erstellt wird. Wir präsentieren Mockups, BEVOR eine einzige Codezeile geschrieben wird. Unbegrenzte Revisionen, bis Sie zufrieden sind.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="2.5"/>
      </svg>
    ),
    title: 'Responsive Entwicklung',
    desc: 'Auf WordPress aufgebaut, damit Sie Inhalte selbst bearbeiten können. Perfekt funktionierend auf Smartphones, Tablets und Desktop — auf jedem Gerät optimale Darstellung.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'SEO Setup',
    desc: 'Meta Tags, Sitemap, Page-Speed-Optimierung, Keyword-Recherche und korrekte Heading-Struktur. Von Tag eins an bereit für Google und andere Suchmaschinen.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'DSGVO-Konformität',
    desc: 'Cookie-Consent-Banner, Datenschutzerklärung-Vorlage, korrekte Datenverarbeitung und sichere Kontaktformulare. Vollständig compliant mit der EU-DSGVO.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10,9 9,9 8,9"/>
      </svg>
    ),
    title: 'Content-Strategie',
    desc: 'Wir helfen Ihnen, Ihre Seiten zu strukturieren, klare Leistungsbeschreibungen zu schreiben und eine Sitemap zu erstellen, die Besucher in Leads verwandelt.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/>
      </svg>
    ),
    title: 'Post-Launch Support',
    desc: 'Training-Session, damit Sie Inhalte selbst aktualisieren können. 30 Tage Support inklusive (60 Tage für Premium und Enterprise). Optional laufende Wartungspläne verfügbar.',
  },
];

const industries = [
  {
    title: 'IT-Firmen & MSPs',
    desc: 'Modernes Tech-Design, das Managed Services, Cloud und Cybersecurity klar kommuniziert.',
    href: '/it-companies',
  },
  {
    title: 'Recruitment Agencies',
    desc: 'Boutique-Positionierung, die Enterprise-Klienten beeindruckt und Top-Kandidaten anzieht.',
    href: '/services',
  },
  {
    title: 'Unternehmensberatung',
    desc: 'Authority-Design, das Ihre Expertise kommuniziert und Thought Leadership sichtbar macht.',
    href: '/services',
  },
  {
    title: 'Steuerberater & Accountants',
    desc: 'Vertrauenswürdiges, klares Design mit Online-Buchung und Service-Übersichten.',
    href: '/services',
  },
];

const pricingPlans = [
  { name: 'Business', price: '€ 6.500', pages: 'bis 10 Seiten', href: '/start' },
  { name: 'Premium', price: '€ 12.000', pages: '10–20+ Seiten', href: '/start' },
  { name: 'Enterprise', price: 'Auf Anfrage', pages: 'Custom', href: '/kontakt' },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden bg-gradient-radial from-[#00E5FF]/5 to-transparent">
        
        <div className="container-max relative z-10">
          <div className="section-tag animate-fade-in-up mb-6">
            Unsere Leistungen
          </div>
          <h1 className="animate-fade-in-up delay-100 font-space-grotesk text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.1] text-white mb-6 tracking-tight">
            Web Design Services
            <br />
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] bg-clip-text text-transparent">für B2B-Unternehmen</span>
          </h1>
          <p className="animate-fade-in-up delay-200 text-lg text-gray-400 leading-relaxed max-w-2xl mb-10">
            Wir designen und entwickeln Websites von Grund auf für serviceorientierte Unternehmen in Europa. Fixpreis, keine Templates, keine Überraschungen. Jedes Projekt enthält Custom Figma Design, responsive Entwicklung, SEO Setup und DSGVO-Konformität.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
            <Link href="/start" className="btn-primary flex items-center gap-2">
              Projekt starten
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <Link href="/fixed-price" className="btn-outline">Fixed Price ansehen</Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-[#050507] relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.03)_0%,transparent_50%)]"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <div className="section-tag mb-4 mx-auto">Was wir liefern</div>
            <h2 className="font-space-grotesk text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white tracking-tight">
              Alles, was Ihre Website braucht
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className="card-3d glass-panel p-8 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/0 to-[#8B5CF6]/0 group-hover:from-[#00E5FF]/5 group-hover:to-[#8B5CF6]/5 transition-all duration-500"></div>
                <div className="w-14 h-14 rounded-2xl bg-[#00E5FF]/10 border border-[#00E5FF]/20 flex items-center justify-center mb-6 text-[#00E5FF] group-hover:scale-110 transition-transform duration-500 shadow-[0_0_15px_rgba(0,229,255,0.2)]">
                  {s.icon}
                </div>
                <h3 className="font-space-grotesk text-xl font-semibold text-white mb-3 group-hover:text-[#00E5FF] transition-colors duration-300">
                  {s.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 bg-gradient-to-b from-[#050507] to-[#0A0A0F] relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#8B5CF6]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <div className="section-tag mb-4 mx-auto">Branchenspezialisiert</div>
            <h2 className="font-space-grotesk text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white tracking-tight">
              Branchen, die wir bedienen
            </h2>
            <p className="text-base text-gray-400 max-w-2xl mx-auto mt-4">
              Wir spezialisieren uns auf Websites für B2B-Serviceunternehmen. Jede Branche bekommt einen maßgeschneiderten Ansatz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <div key={i} className="card-3d glass-panel p-8 group flex flex-col h-full">
                <h3 className="font-space-grotesk text-lg font-semibold text-white mb-3">
                  {ind.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                  {ind.desc}
                </p>
                <Link href={ind.href} className="text-sm text-[#8B5CF6] font-medium group-hover:text-[#00E5FF] transition-colors duration-300 flex items-center gap-1">
                  Mehr erfahren <span className="group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 bg-[#050507] relative">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00E5FF]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <div className="section-tag mb-4 mx-auto">Transparent Preise</div>
            <h2 className="font-space-grotesk text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white tracking-tight">
              Pakete & Preise
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {pricingPlans.map((plan, i) => (
              <div key={i} className="card-3d glass-panel p-10 min-w-[280px] text-center flex flex-col group relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="font-space-grotesk text-lg font-semibold text-white mb-3">
                  {plan.name}
                </div>
                <div className="font-space-grotesk text-3xl font-extrabold text-[#00E5FF] mb-2 drop-shadow-[0_0_10px_rgba(0,229,255,0.3)]">
                  {plan.price}
                </div>
                <div className="text-sm text-gray-500 mb-8">
                  {plan.pages}
                </div>
                <Link href={plan.href} className="btn-outline text-sm mt-auto hover:border-[#8B5CF6] hover:text-[#8B5CF6] transition-colors">
                  {plan.name === 'Enterprise' ? 'Kontakt' : 'Starten'}
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-gray-400">
              Nicht sicher welches Paket passt?{' '}
              <Link href="/start" className="text-[#00E5FF] hover:text-[#8B5CF6] transition-colors">Wählen Sie „Allgemeine Anfrage" im Formular →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-[#050507] via-[#0A0A0F] to-[#00E5FF]/5 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="container-max text-center relative z-10">
          <h2 className="font-space-grotesk text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-white mb-4 tracking-tight">
            Erzählen Sie uns von Ihrem Projekt
          </h2>
          <p className="text-base text-gray-400 mb-10 max-w-xl mx-auto">
            Wir empfehlen Ihnen das richtige Paket.
          </p>
          <Link href="/start" className="btn-primary text-base px-8 py-4 shadow-[0_0_20px_rgba(0,229,255,0.3)] hover:shadow-[0_0_30px_rgba(0,229,255,0.5)] transition-shadow">
            Projekt starten
          </Link>
        </div>
      </section>
    </>
  );
}
