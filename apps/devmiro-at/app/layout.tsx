import type { Metadata } from 'next'
import { Bebas_Neue, Outfit, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

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
      <body className={`${bebasNeue.variable} ${outfit.variable} ${jetbrainsMono.variable}`}>
        {/* Noise overlay */}
        <div className="noise-overlay" aria-hidden="true" />
        {/* Custom cursor */}
        <div className="cursor" id="cursor" aria-hidden="true" />
        <div className="cursor-dot" id="cursor-dot" aria-hidden="true" />
        {children}
        <CursorScript />
      </body>
    </html>
  )
}

function CursorScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            var cursor = document.getElementById('cursor');
            var cursorDot = document.getElementById('cursor-dot');
            if (!cursor || !cursorDot) return;
            if ('ontouchstart' in window) {
              cursor.style.display = 'none';
              cursorDot.style.display = 'none';
              return;
            }

            var pos = { x: -100, y: -100 };
            var dotPos = { x: -100, y: -100 };

            document.addEventListener('mousemove', function(e) {
              pos.x = e.clientX;
              pos.y = e.clientY;
            });

            for (var i = 0; i < 4; i++) {
              var t = document.createElement('div');
              t.className = 'cursor-trail';
              t.style.opacity = (0.25 - i * 0.05).toString();
              t.style.width = (6 - i) + 'px';
              t.style.height = (6 - i) + 'px';
              document.body.appendChild(t);
            }

            function animate() {
              dotPos.x += (pos.x - dotPos.x) * 0.85;
              dotPos.y += (pos.y - dotPos.y) * 0.85;
              cursor.style.left = pos.x + 'px';
              cursor.style.top = pos.y + 'px';
              cursorDot.style.left = dotPos.x + 'px';
              cursorDot.style.top = dotPos.y + 'px';
              requestAnimationFrame(animate);
            }
            animate();

            var hoverEls = document.querySelectorAll('a, button, [role="button"]');
            hoverEls.forEach(function(el) {
              el.addEventListener('mouseenter', function() { cursor.classList.add('hovering'); });
              el.addEventListener('mouseleave', function() { cursor.classList.remove('hovering'); });
            });
          })();

          // FAQ accordion
          (function() {
            var questions = document.querySelectorAll('.faq-question-v2');
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
