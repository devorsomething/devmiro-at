'use client'
import Link from 'next/link'
import { Button } from './components/ui/button'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0A0B]">
      {/* Header */}
      <header className="border-b border-[#2A2A2E] bg-[#0A0A0B]/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-[#F5F5F7]">DevMiro</span>
          <div className="flex items-center gap-4">
            <Link href="/impressum">
              <Button variant="ghost" size="sm" className="text-[#9CA3AF] hover:text-[#F5F5F7]">
                Impressum
              </Button>
            </Link>
            <Link href="/datenschutz">
              <Button variant="ghost" size="sm" className="text-[#9CA3AF] hover:text-[#F5F5F7]">
                Datenschutz
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-[80vh] flex flex-col justify-center px-6">
        <div className="max-w-4xl mx-auto w-full">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-[#2A2A2E] bg-[#141416]">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span className="text-sm text-[#9CA3AF]">IT-Lösungen für Vorarlberg KMUs</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-[#F5F5F7] mb-6 leading-tight">
            Professionelle<br />
            <span className="text-[#10B981]">Webentwicklung</span><br />
            für Ihr Unternehmen
          </h1>
          
          <p className="text-xl text-[#9CA3AF] max-w-2xl mb-10">
            Fixed Price. Keine Überraschungen. IT-Dienstleistungen für Unternehmen in Vorarlberg — von einfachen Websites bis komplexen Automatisierungen.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Link href="/kontakt">
              <Button className="bg-[#10B981] hover:bg-[#059669] text-white h-11 px-6">
                Projekt anfragen →
              </Button>
            </Link>
            <Link href="/impressum">
              <Button variant="outline" className="border-[#2A2A2E] text-[#9CA3AF] hover:text-[#F5F5F7] h-11 px-6">
                Mehr erfahren
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 border-t border-[#2A2A2E]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#F5F5F7] mb-12">Leistungen</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center mb-4">
                <span className="text-[#10B981] text-xl">◈</span>
              </div>
              <h3 className="text-lg font-semibold text-[#F5F5F7] mb-2">Webentwicklung</h3>
              <p className="text-[#9CA3AF] text-sm">Moderne Websites und Web-Applikationen mit Next.js, React und Node.js.</p>
            </div>
            <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center mb-4">
                <span className="text-[#10B981] text-xl">⚙</span>
              </div>
              <h3 className="text-lg font-semibold text-[#F5F5F7] mb-2">Automatisierung</h3>
              <p className="text-[#9CA3AF] text-sm">Workflow-Automatisierung mit n8n, KI-Integration und API-Entwicklung.</p>
            </div>
            <div className="p-6 bg-[#141416] border border-[#2A2A2E] rounded-lg">
              <div className="w-10 h-10 rounded-lg bg-[#10B981]/10 flex items-center justify-center mb-4">
                <span className="text-[#10B981] text-xl">☁</span>
              </div>
              <h3 className="text-lg font-semibold text-[#F5F5F7] mb-2">Cloud & DevOps</h3>
              <p className="text-[#9CA3AF] text-sm">Server-Management, Deployment-Pipelines und Infrastructure-as-Code.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#2A2A2E] py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <p className="text-[#9CA3AF] text-sm">© 2026 Timo Miro Gavanelli. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6 text-sm">
            <Link href="/impressum" className="text-[#9CA3AF] hover:text-[#F5F5F7] transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-[#9CA3AF] hover:text-[#F5F5F7] transition-colors">Datenschutz</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}
