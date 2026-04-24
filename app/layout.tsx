import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEVMIRO — IT-Lösungen für Vorarlberg",
  description: "Professionelle Webentwicklung, Shopify-Integration und Automatisierung für Unternehmen in Vorarlberg. Premium Qualität, transparente Preise.",
  metadataBase: new URL("https://devmiro.at"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230F1C3F'/><text x='50' y='68' text-anchor='middle' font-size='50' font-weight='bold' fill='%23C9A84C'>D</text></svg>",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "DEVMIRO — IT-Lösungen für Vorarlberg",
              description: "Professionelle Webentwicklung, Shopify-Integration und Automatisierung für Unternehmen in Vorarlberg.",
              url: "https://devmiro.at",
              telephone: "+4366441234567",
              email: "info@devmiro.at",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bregenz",
                addressRegion: "Vorarlberg",
                addressCountry: "AT",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 47.5027,
                longitude: 9.7491,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "09:00",
                closes: "18:00",
              },
              priceRange: "€€€",
              areaServed: {
                "@type": "State",
                name: "Vorarlberg",
              },
              serviceType: ["Web Development", "Shopify Integration", "AI Automation", "SEO"],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
