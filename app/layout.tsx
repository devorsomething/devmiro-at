import type { Metadata } from 'next'
import './globals.css'
import WhatsAppButton from '@/components/WhatsAppButton'
import BackToTop from '@/components/BackToTop'

export const metadata: Metadata = {
  metadataBase: new URL('https://devmiro.at'),
  title: { default: 'DEVMIRO — IT-Lösungen für Vorarlberg KMUs', template: '%s | DEVMIRO' },
  description: 'DEVMIRO bietet IT-Lösungen, Webdesign und digitale Transformation für Unternehmen in Vorarlberg und ganz Österreich. Premium-Qualität, fixe Preise.',
  keywords: ['IT-Lösungen Vorarlberg', 'Webdesign Bregenz', 'KMU Digitalisierung', 'Business Website', 'Website erstellen Österreich'],
  authors: [{ name: 'DEVMIRO', url: 'https://devmiro.at' }],
  creator: 'DEVMIRO',
  publisher: 'DEVMIRO',
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%230c0c18'/><text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-weight='bold' font-size='18' fill='%2300e5ff'>D</text></svg>",
    apple: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'><rect width='180' height='180' rx='40' fill='%230c0c18'/><text x='50%' y='54%' dominant-baseline='middle' text-anchor='middle' font-family='monospace' font-weight='bold' font-size='100' fill='%2300e5ff'>D</text></svg>",
  },
  openGraph: {
    title: 'DEVMIRO — IT-Lösungen für Vorarlberg KMUs',
    description: 'Premium IT-Lösungen, Webdesign und digitale Transformation. Fixe Preise, keine Überraschungen.',
    url: 'https://devmiro.at',
    siteName: 'DEVMIRO',
    locale: 'de_AT',
    type: 'website',
    images: [
      {
        url: 'https://devmiro.at/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DEVMIRO — IT-Lösungen für Vorarlberg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DEVMIRO — IT-Lösungen für Vorarlberg KMUs',
    description: 'Premium IT-Lösungen, Webdesign und digitale Transformation.',
    creator: '@devmiro',
    images: ['https://devmiro.at/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        {/* OpenGraph Image Generator Placeholder */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="DEVMIRO — IT-Lösungen für Vorarlberg KMUs" />
        <meta name="theme-color" content="#030308" />
      </head>
      <body>
        {children}
        <WhatsAppButton />
        <BackToTop />
      </body>
    </html>
  )
}
