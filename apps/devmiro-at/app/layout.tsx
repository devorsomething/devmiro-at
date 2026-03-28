import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://devmiro.at'),
  title: 'DevMiro — Developer & Automation Architect | Vorarlberg, Österreich',
  description: 'Ich baue Systeme, die mitdenken — n8n Workflows, KI-Agenten und Web-Apps, die Ihr Business skalieren. Automatisierung, Web-Entwicklung und Shopify aus Vorarlberg.',
  keywords: ['Automatisierung', 'n8n', 'Workflow', 'KI', 'Chatbot', 'Next.js', 'Shopify', 'Web-Entwicklung', 'Vorarlberg', 'Österreich', 'Business Automation'],
  authors: [{ name: 'Miro Gavanelli' }],
  creator: 'Miro Gavanelli',
  openGraph: {
    type: 'website',
    locale: 'de_AT',
    url: 'https://devmiro.at',
    siteName: 'DevMiro',
    title: 'DevMiro — Developer & Automation Architect',
    description: 'Ich baue Systeme, die mitdenken — n8n Workflows, KI-Agenten und Web-Apps, die Ihr Business skalieren.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevMiro — Developer & Automation Architect',
    description: 'Ich baue Systeme, die mitdenken — n8n Workflows, KI-Agenten und Web-Apps.',
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
      '@type': 'Person',
      '@id': 'https://devmiro.at/#person',
      name: 'Miro Gavanelli',
      jobTitle: 'Developer & Automation Architect',
      url: 'https://devmiro.at',
      sameAs: [
        'https://linkedin.com/in/mirogavanelli',
        'https://github.com/devmiro'
      ],
      knowsAbout: ['n8n', 'Next.js', 'KI-Automatisierung', 'Shopify', 'TypeScript', 'Node.js'],
      areaServed: {
        '@type': 'Place',
        name: 'Vorarlberg, Österreich'
      }
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://devmiro.at/#business',
      name: 'DevMiro',
      description: 'Developer & Automation Architect — Automatisierung, Web-Entwicklung und Shopify aus Vorarlberg.',
      url: 'https://devmiro.at',
      telephone: '+43-660-0000000',
      email: 'info@devmiro.at',
      address: {
        '@type': 'PostalAddress',
        addressRegion: 'Vorarlberg',
        addressCountry: 'AT'
      },
      geo: {
        '@type': 'GeoCoordinates',
        addressRegion: 'Vorarlberg'
      },
      priceRange: '€€',
      openingHours: 'Mo-Fr 09:00-18:00',
      areaServed: {
        '@type': 'Place',
        name: 'Vorarlberg, Österreich'
      },
      serviceType: ['Workflow-Automatisierung', 'Web-Entwicklung', 'KI-Integration', 'Shopify Development']
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN

  return (
    <html lang="de" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] antialiased">
        {children}
      </body>
    </html>
  )
}
