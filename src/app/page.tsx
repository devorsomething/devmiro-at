import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/app/components/ui/button";

export const metadata: Metadata = {
  title: "DEVMIRO — IT-Lösungen für Vorarlberg KMUs",
  description: "Professionelle Webentwicklung für IT-Unternehmen, Agenturen und Dienstleister in Vorarlberg. Fixed Price, keine Überraschungen.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#0A0A0B] to-[#141416]">
        {/* Abstract 3D/Premium Background Effect */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-8">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-ping"></span>
              Premium IT-Lösungen für Vorarlberg
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
              Webentwicklung auf
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                Enterprise Niveau.
              </span>
            </h1>
            
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
              Wir designen und entwickeln Ihre digitale Präsenz von Grund auf. Fixpreis. Skalierbar. Modernstes 3D-Premium-Design.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/start">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all duration-300">
                  Projekt starten
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button variant="outline" size="lg" className="rounded-full px-8 border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white">
                  Portfolio ansehen
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Stats Section */}
      <section className="py-24 bg-[#0A0A0B] relative">
        <div className="container mx-auto px-6\">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[ 
              { title: "Performance", desc: "99/100 Lighthouse Score", icon: "⚡" },
              { title: "Security", desc: "Enterprise Grade Security", icon: "🛡️" },
              { title: "Conversion", desc: "Optimiert für Leads", icon: "📈" }
            ].map((stat, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 border border-gray-800 hover:border-blue-500/50 transition-colors backdrop-blur-sm group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{stat.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{stat.title}</h3>
                <p className="text-gray-400">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}