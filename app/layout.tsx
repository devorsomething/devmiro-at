import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEVMIRO — IT-Lösungen für Vorarlberg",
  description: "Professionelle Webentwicklung, Shopify-Integration und Automatisierung für Unternehmen in Vorarlberg. Premium Qualität, transparente Preise.",
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
