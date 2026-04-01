"use client";

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import CategorySwitcher from '@/components/CategorySwitcher';
import ServicesContent from './services/page';
import FixedPriceContent from './fixed-price/page';
import ITCompaniesContent from './it-companies/page';

export default function PremiumLanding() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'services' | 'pricing' | 'industries'>('services');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const orbs = document.querySelectorAll('.orb-parallax');
      orbs.forEach((orb: any, index) => {
        const speed = (index + 1) * 0.15;
        orb.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans overflow-hidden" ref={containerRef}>
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none grid-bg opacity-30"></div>
      <div className="hero-bg pointer-events-none">
        <div className="orb orb-1 orb-parallax"></div>
        <div className="orb orb-2 orb-parallax" style={{ animationDelay: '-10s' }}></div>
        <div className="orb orb-3 orb-parallax" style={{ width: '300px', height: '300px', background: 'rgba(139, 92, 246, 0.2)', top: '50%', left: '20%', animationDelay: '-15s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-300 border-b border-white/5">
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#8B5CF6] flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            <span className="font-bold text-white text-xl tracking-tighter">D</span>
          </div>
          <span className="font-bold text-2xl tracking-tight text-white group-hover:text-[#00E5FF] transition-colors duration-500">
            DEV<span className="text-gray-500">MIRO</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-semibold tracking-wide text-gray-300">
          <Link href="/services" className="hover:text-white hover:text-[#00E5FF] transition-colors duration-300">Leistungen</Link>
          <Link href="/it-companies" className="hover:text-white hover:text-[#00E5FF] transition-colors duration-300">IT-Firmen</Link>
          <Link href="/fixed-price" className="hover:text-white hover:text-[#00E5FF] transition-colors duration-300">Fixpreis</Link>
          <Link href="/start">
            <button className="px-7 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#00E5FF]/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 font-bold backdrop-blur-md">
              Projekt starten
            </button>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel mb-10 animate-[fade-in_1s_ease-out] border border-[#00E5FF]/20 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00E5FF] animate-pulse"></span>
            <span className="text-sm font-bold tracking-widest text-[#00E5FF]">IT-LÖSUNGEN FÜR VORARLBERG</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-[7rem] font-extrabold tracking-tighter mb-8 max-w-6xl leading-[1.05]">
            Ihre Website.<br/>
            <span className="text-[#00E5FF] drop-shadow-[0_0_30px_rgba(0,229,255,0.4)]">Automatisiert.</span><br/>
            <span className="bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(139,92,246,0.4)]">
              Umsatzsteigernd.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mb-14 font-medium leading-relaxed">
            DevMiro baut digitale Lösungen für Bregenzer und Vorarlberger Unternehmen — 
            von professionellen Websites bis hin zu KI-gestützter Kundenkommunikation. 
            Schnell, ehrlich, local.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto px-6">
            <Link href="/start" className="w-full sm:w-auto">
              <button className="w-full btn-glow px-10 py-5 rounded-full bg-[#00E5FF] text-black font-extrabold text-lg hover:bg-white hover:shadow-[0_0_40px_rgba(0,229,255,0.6)] transition-all duration-500 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                Projekt starten
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </Link>
            <Link href="/services" className="w-full sm:w-auto">
              <button className="w-full px-10 py-5 rounded-full glass-panel hover:bg-white/10 text-white font-bold text-lg border border-white/20 hover:border-white/50 transition-all duration-500 flex items-center justify-center gap-3 group">
                Leistungen ansehen
                <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer animate-bounce">
            <div className="w-7 h-12 border-2 border-white/30 rounded-full flex justify-center p-1.5">
              <div className="w-1.5 h-3 bg-[#00E5FF] rounded-full animate-[pulse_1.5s_ease-in-out_infinite]"></div>
            </div>
            <span className="text-[10px] font-bold tracking-[0.3em] text-white/50">SCROLLEN</span>
          </div>
        </section>

        {/* Core Values Section */}
        <section id="values" className="py-40 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-bold tracking-widest text-gray-400 mb-6">
              WARUM DEVMIRO
            </div>
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6">Keine Templates. <span className="text-[#00E5FF]">Kein Bullshit.</span></h2>
            <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">Wir programmieren von Hand. Jede Website ist auf maximale Performance und Conversion für Ihren Use-Case optimiert.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="card-3d glass-panel p-10 relative overflow-hidden group rounded-3xl border border-white/5 hover:border-[#00E5FF]/30">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-[#00E5FF]/10 flex items-center justify-center mb-8 text-[#00E5FF] group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Hyper Performance</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Next.js Edge-Infrastruktur bedeutet Ladezeiten unter 1 Sekunde. Google liebt schnelle Seiten — Ihre Kunden auch.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="card-3d glass-panel p-10 relative overflow-hidden group rounded-3xl border border-white/5 hover:border-[#8B5CF6]/30 mt-0 md:mt-16">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#8B5CF6] to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-[#8B5CF6]/10 flex items-center justify-center mb-8 text-[#8B5CF6] group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">DSGVO & Security</h3>
              <p className="text-gray-400 text-lg leading-relaxed">100% DSGVO-konform. Hosting in Europa, sichere Datenverarbeitung und Cookie-Consent-Management inklusive.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="card-3d glass-panel p-10 relative overflow-hidden group rounded-3xl border border-white/5 hover:border-[#00E5FF]/30 mt-0 md:mt-32">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00E5FF]/10 to-[#8B5CF6]/10 flex items-center justify-center mb-8 text-white group-hover:scale-110 transition-transform duration-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Fixpreis Garantie</h3>
              <p className="text-gray-400 text-lg leading-relaxed">Wir hassen Stundenzettel genau so wie Sie. Sie wissen vor Projektstart auf den Cent genau, was es kostet.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-40 relative mt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00E5FF]/5 to-[#050507] pointer-events-none"></div>
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10 glass-panel p-20 rounded-[3rem] border border-[#00E5FF]/20 shadow-[0_0_100px_rgba(0,229,255,0.05)] overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00E5FF]/20 rounded-full blur-[100px]"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8B5CF6]/20 rounded-full blur-[100px]"></div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-8 relative z-10">Bereit für den <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">nächsten Schritt?</span></h2>
            <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto relative z-10">
              Buchen Sie ein kostenloses Erstgespräch. Wir analysieren Ihre aktuelle Situation und zeigen Ihnen ungenutztes Potenzial.
            </p>
            <Link href="/kontakt" className="relative z-10 inline-block">
              <button className="btn-glow px-14 py-6 rounded-full bg-white text-black font-extrabold text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-3">
                Erstgespräch vereinbaren
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </button>
            </Link>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="border-t border-white/5 pt-20 pb-10 px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00E5FF] to-[#8B5CF6] flex items-center justify-center">
                <span className="font-bold text-white text-sm">D</span>
              </div>
              <span className="font-bold text-xl text-white">DEV<span className="text-gray-500">MIRO</span></span>
            </div>
            
            <div className="flex gap-8 text-sm font-semibold text-gray-400">
              <Link href="/impressum" className="hover:text-[#00E5FF] transition-colors">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-[#00E5FF] transition-colors">Datenschutz</Link>
              <Link href="/kontakt" className="hover:text-[#00E5FF] transition-colors">Kontakt</Link>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-10 text-center md:text-left text-gray-600 text-xs font-semibold tracking-widest">
            © 2026 DEVMIRO IT-LÖSUNGEN. ALLE RECHTE VORBEHALTEN.
          </div>
        </footer>
      </main>
    </div>
  );
}
