import type { Metadata } from 'next'
import { Bebas_Neue, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({
  subsets: ['latin'],
  variable: '--font-bebas',
  weight: '400',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
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
      priceRange: '€€',
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
      <body className={`${bebasNeue.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
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

            var pos = { x: -100, y: -100 };
            var dotPos = { x: -100, y: -100 };
            var trail = [];

            document.addEventListener('mousemove', function(e) {
              pos.x = e.clientX;
              pos.y = e.clientY;
            });

            // Build trail elements
            for (var i = 0; i < 5; i++) {
              var t = document.createElement('div');
              t.className = 'cursor-trail';
              t.style.opacity = (0.3 - i * 0.05).toString();
              t.style.width = (8 - i).toString() + 'px';
              t.style.height = (8 - i).toString() + 'px';
              document.body.appendChild(t);
              trail.push({ el: t, x: -100, y: -100 });
            }

            function animate() {
              dotPos.x += (pos.x - dotPos.x) * 0.85;
              dotPos.y += (pos.y - dotPos.y) * 0.85;
              cursor.style.left = pos.x + 'px';
              cursor.style.top = pos.y + 'px';
              cursorDot.style.left = dotPos.x + 'px';
              cursorDot.style.top = dotPos.y + 'px';

              var prevX = dotPos.x;
              var prevY = dotPos.y;
              for (var i = 0; i < trail.length; i++) {
                var t = trail[i];
                t.x += (prevX - t.x) * 0.3;
                t.y += (prevY - t.y) * 0.3;
                t.el.style.left = t.x + 'px';
                t.el.style.top = t.y + 'px';
                t.el.style.opacity = ((0.3 - i * 0.05) * 0.5).toString();
                prevX = t.x;
                prevY = t.y;
              }

              requestAnimationFrame(animate);
            }
            animate();

            // Hover state
            var hoverEls = document.querySelectorAll('a, button, [role="button"]');
            hoverEls.forEach(function(el) {
              el.addEventListener('mouseenter', function() { cursor.classList.add('hovering'); });
              el.addEventListener('mouseleave', function() { cursor.classList.remove('hovering'); });
            });

            // Hide on mobile
            if ('ontouchstart' in window) {
              cursor.style.display = 'none';
              cursorDot.style.display = 'none';
              trail.forEach(function(t) { t.el.style.display = 'none'; });
            }
          })();

          // Scroll reveal
          (function() {
            var reveals = document.querySelectorAll('.reveal');
            if (!reveals.length) return;

            var observer = new IntersectionObserver(function(entries) {
              entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
                }
              });
            }, { threshold: 0.1 });

            reveals.forEach(function(el) { observer.observe(el); });
          })();

          // Counter animation
          (function() {
            var counters = document.querySelectorAll('[data-count]');
            if (!counters.length) return;

            var observer = new IntersectionObserver(function(entries) {
              entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                  var el = entry.target;
                  var target = parseFloat(el.getAttribute('data-count'));
                  var suffix = el.getAttribute('data-suffix') || '';
                  var prefix = el.getAttribute('data-prefix') || '';
                  var duration = 1500;
                  var start = performance.now();

                  function update(now) {
                    var elapsed = now - start;
                    var progress = Math.min(elapsed / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 3);
                    var current = target * eased;
                    if (Number.isInteger(target)) {
                      el.textContent = prefix + Math.floor(current) + suffix;
                    } else {
                      el.textContent = prefix + current.toFixed(1) + suffix;
                    }
                    if (progress < 1) requestAnimationFrame(update);
                  }
                  requestAnimationFrame(update);
                  observer.unobserve(el);
                }
              });
            }, { threshold: 0.5 });

            counters.forEach(function(el) { observer.observe(el); });
          })();
        `,
      }}
    />
  )
}
