"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function KontaktPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#050507] text-white font-sans overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none grid-bg opacity-30"></div>
      <div className="hero-bg pointer-events-none">
        <div className="orb orb-1 orb-parallax"></div>
        <div className="orb orb-2 orb-parallax" style={{ animationDelay: '-10s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur px-6 md:px-12 py-5 flex justify-between items-center transition-all duration-300 border-b border-white/5">
        <Link href="/" className="flex items-center gap-3 cursor-pointer group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00E5FF] to-[#8B5CF6] flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500 shadow-[0_0_20px_rgba(0,229,255,0.4)]">
            <span className="font-bold text-white text-xl tracking-tighter">D</span>
          </div>
          <span className="font-bold text-2xl tracking-tight text-white group-hover:text-[#00E5FF] transition-colors duration-500">
            DEV<span className="text-gray-500">MIRO</span>
          </span>
        </Link>
        <Link href="/" className="hidden md:block text-sm font-semibold tracking-wide text-gray-300 hover:text-white transition-colors duration-300">
          Zurück zur Startseite
        </Link>
        {/* Mobile Hamburger Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md"
            aria-label="Toggle Mobile Menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-[#050507]/95 backdrop-blur-2xl transition-all duration-500 flex flex-col items-center justify-center md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute top-5 right-6">
          <button 
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-white p-2 rounded-lg bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        
        <div className="flex flex-col items-center gap-8 w-full px-8">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            <button className="text-2xl font-space-grotesk font-bold text-white hover:text-[#00E5FF] transition-colors">
              Home
            </button>
          </Link>
          <Link href="/start" onClick={() => setIsMobileMenuOpen(false)} className="w-full mt-4">
            <button className="w-full btn-glow px-10 py-5 rounded-full bg-[#00E5FF] text-black font-extrabold text-lg flex items-center justify-center gap-3">
              Projekt starten
            </button>
          </Link>
        </div>
      </div>

      <main className="relative z-10 pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-semibold text-[#00E5FF] mb-6 glass-panel">
            <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></span>
            Kontakt
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 leading-tight">
            Sprechen Sie <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6]">
              mit uns.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Haben Sie ein Projekt im Sinn oder einfach nur eine Frage? Wir freuen uns von Ihnen zu hören.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div className="space-y-8 animate-fade-in-up delay-100">
            <div>
              <h2 className="text-2xl font-bold mb-4">So erreichen Sie uns</h2>
              <p className="text-gray-400 leading-relaxed">
                Füllen Sie das Formular aus — wir melden uns innerhalb von 24 Stunden mit einem konkreten Angebot zurück.
              </p>
            </div>

            <div className="space-y-6">
              <ContactInfoItem
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00E5FF]">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                }
                label="E-Mail"
                value="hallo@devmiro.at"
              />
              <ContactInfoItem
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#8B5CF6]">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                label="Standort"
                value="Vorarlberg, Österreich"
              />
              <ContactInfoItem
                icon={
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#00E5FF]">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12,6 12,12 16,14" />
                  </svg>
                }
                label="Antwortzeit"
                value="Innerhalb von 24 Stunden"
              />
            </div>

            {/* Trust Signals */}
            <div className="p-8 rounded-2xl glass-panel border border-white/5 bg-gradient-to-br from-white/5 to-transparent card-3d">
              <h3 className="text-sm font-semibold tracking-widest uppercase text-[#00E5FF] mb-4">
                Was Sie erwartet
              </h3>
              <ul className="space-y-3">
                {[
                  "Konkreter Vertrag mit Festpreis und Timeline",
                  "Unverbindliches Erstgespräch",
                  "Kein Verkaufsdruck",
                  "100% Data privacy — keine Weitergabe von Daten",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
                      <path d="M4 10l4 4 8-8" stroke="url(#gradient-check)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <defs>
                        <linearGradient id="gradient-check" x1="0" y1="0" x2="20" y2="20" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#00E5FF" />
                          <stop offset="1" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right - Form */}
          <div className="animate-fade-in-up delay-200">
            <div className="p-8 md:p-10 rounded-3xl glass-panel border border-white/10 bg-white/[0.02] shadow-[0_0_50px_rgba(0,0,0,0.5)] card-3d relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00E5FF]/5 to-[#8B5CF6]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold mb-2">Nachricht senden</h2>
              <p className="text-sm text-gray-400 mb-8">Alle Felder mit * sind erforderlich.</p>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="Vorname *" placeholder="Max" />
                  <FormField label="Nachname *" placeholder="Mustermann" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField label="E-Mail *" placeholder="max@firma.at" type="email" />
                  <FormField label="Telefon" placeholder="+43 664 123 4567" type="tel" />
                </div>

                <FormField label="Unternehmen" placeholder="Ihre Firma GmbH" />

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide">
                    Interessiertes Paket
                  </label>
                  <select className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-xl text-gray-300 text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2300E5FF%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px_12px] bg-no-repeat bg-[position:right_1rem_center]">
                    <option value="">— Bitte wählen —</option>
                    <option value="business">Business — € 6.500</option>
                    <option value="premium">Premium — € 12.000</option>
                    <option value="enterprise">Enterprise — Auf Anfrage</option>
                    <option value="general">Allgemeine Anfrage</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide">
                    Ihre Nachricht *
                  </label>
                  <textarea
                    placeholder="Beschreiben Sie kurz Ihr Projekt, Ihre Branche und was Sie sich vorstellen..."
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all duration-300 resize-y min-h-[120px]"
                  />
                </div>

                <div className="flex items-start gap-3 text-sm text-gray-400">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 w-4 h-4 rounded border-white/10 bg-[#0a0a0f] text-[#00E5FF] focus:ring-[#00E5FF] focus:ring-offset-0 focus:ring-2 cursor-pointer accent-[#00E5FF]"
                  />
                  <span>
                    Ich stimme zu, dass meine Angaben zur Beantwortung meiner Anfrage verarbeitet werden.{' '}
                    <Link href="/gdpr" className="text-[#00E5FF] hover:text-[#8B5CF6] transition-colors underline decoration-white/20 underline-offset-4">
                      Datenschutzerklärung
                    </Link>
                    .
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-8 rounded-xl font-bold text-white bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] hover:shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group btn-glow"
                >
                  Nachricht senden
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
                
                <p className="text-xs text-center text-gray-500 mt-4">
                  Wir antworten innerhalb von 24 Stunden. Kein Spam, keine Weitergabe Ihrer Daten.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300 border border-transparent hover:border-white/5 group cursor-default">
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.2)] transition-all duration-300">
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-1">
          {label}
        </div>
        <div className="text-sm font-medium text-white group-hover:text-[#00E5FF] transition-colors duration-300">
          {value}
        </div>
      </div>
    </div>
  );
}

function FormField({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-gray-300 mb-2 tracking-wide">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={type !== "tel"}
        className="w-full px-4 py-3 bg-[#0a0a0f] border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF] transition-all duration-300 placeholder-gray-600"
      />
    </div>
  );
}
