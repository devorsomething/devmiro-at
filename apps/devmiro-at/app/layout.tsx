import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://devmiro.at'),
  title: {
    default: 'DevMiro — IT-Lösungen für Vorarlberg KMUs',
    template: '%s | DevMiro',
  },
  description:
    'Professionelle Websites, KI-Chatbots und Business-Automatisierung für Unternehmen in Bregenz und Vorarlberg. Mehr Umsatz durch digitale Lösungen.',
  keywords: [
    'Website Bregenz',
    'Webentwicklung Vorarlberg',
    'KI Chatbot Österreich',
    'Business Automation',
    'Next.js',
    'Shopify',
    'SEO Vorarlberg',
    'IT-Service Bregenz',
  ],
  authors: [{ name: 'Miro Gavanelli' }],
  creator: 'Miro Gavanelli',
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://devmiro.at',
    siteName: 'DevMiro',
    title: 'DevMiro — IT-Lösungen für Vorarlberg KMUs',
    description:
      'Professionelle Websites, KI-Chatbots und Business-Automatisierung für Unternehmen in Bregenz und Vorarlberg.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevMiro — IT-Lösungen für Vorarlberg KMUs',
    description: 'Professionelle Websites, KI-Chatbots und Business-Automatisierung.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://devmiro.at/#business',
      name: 'DevMiro',
      description:
        'IT-Lösungen für KMUs in Vorarlberg — Websites, KI-Chatbots, Hosting und mehr.',
      url: 'https://devmiro.at',
      telephone: '+436641234567',
      email: 'info@devmiro.at',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Vorarlberg',
        addressCountry: 'AT',
      },
      openingHours: 'Mo-Fr 09:00-18:00',
      areaServed: {
        '@type': 'Place',
        name: 'Vorarlberg, Österreich',
      },
      serviceType: [
        'Webentwicklung',
        'KI-Integration',
        'SEO',
        'Hosting',
        'Social Media',
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <RevealScript />
      </body>
    </html>
  )
}

function RevealScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var els = document.querySelectorAll('.reveal');
            if (!els.length) return;
            var io = new IntersectionObserver(function(entries) {
              entries.forEach(function(e) {
                if (e.isIntersecting) {
                  e.target.classList.add('visible');
                  io.unobserve(e.target);
                }
              });
            }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
            els.forEach(function(el) { io.observe(el); });

            // FAQ accordion
            var questions = document.querySelectorAll('.faq-item__question');
            questions.forEach(function(btn) {
              btn.addEventListener('click', function() {
                var answer = btn.nextElementSibling;
                var isOpen = btn.classList.contains('open');
                questions.forEach(function(q) {
                  q.classList.remove('open');
                  var a = q.nextElementSibling;
                  if (a) a.classList.remove('open');
                });
                if (!isOpen) {
                  btn.classList.add('open');
                  answer.classList.add('open');
                }
              });
            });
          })();
        `,
      }}
    />
  )
}
