import type { Metadata } from "next";
import "./globals.css";
import "@/app/premium.css";
import { Header } from "./components/Navbar";
import { Footer } from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export const metadata: Metadata = {
  title: "DEVMIRO — IT-Lösungen für Vorarlberg KMUs",
  description: "Professionelle Webentwicklung für IT-Unternehmen, Agenturen und Dienstleister in Vorarlberg. Fixed Price, keine Überraschungen.",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%23050507'/><text x='50' y='68' text-anchor='middle' font-size='50' font-weight='bold' fill='%23c8ff00'>D</text></svg>",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
