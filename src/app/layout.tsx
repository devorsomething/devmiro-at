import type { Metadata } from "next";
import "./globals.css";
import "./premium.css";

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
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
