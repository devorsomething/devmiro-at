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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif&family=Inter:ital,opsz,wght@0,14..32,300..700;1,14..32,300..400&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  )
}
