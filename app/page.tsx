"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function DevmiroPremium() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0F1C3F] text-white">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'nav-blur py-4' : 'py-6 bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center shadow-lg">
              <span className="font-bold text-[#0F1C3F] text-2xl">D</span>
            </div>
            <span className="font-bold text-2xl tracking-tight">
              DEV<span className="text-[#C9A84C]">MIRO</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold">
            <a href="#leistungen" className="text-gray-300 hover:text-[#C9A84C] transition-colors">Leistungen</a>
            <a href="#pricing" className="text-gray-300 hover:text-[#C9A84C] transition-colors">Preise</a>
            <a href="#testimonials" className="text-gray-300 hover:text-[#C9A84C] transition-colors">Kundenstimmen</a>
            <a href="#kontakt" className="text-gray-300 hover:text-[#C9A84C] transition-colors">Kontakt</a>
            <Link href="#kontakt">
              <button className="btn-gold px-6 py-3 text-sm">
                Projekt starten
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-[#0F1C3F]/98 backdrop-blur-xl transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          <div className="flex flex-col items-center gap-6 py-10 text-lg font-semibold">
            <a href="#leistungen" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-[#C9A84C]">Leistungen</a>
            <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-[#C9A84C]">Preise</a>
            <a href="#testimonials" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-[#C9A84C]">Kundenstimmen</a>
            <a href="#kontakt" onClick={() => setIsMobileMenuOpen(false)} className="text-gray-300 hover:text-[#C9A84C]">Kontakt</a>
            <Link href="#kontakt" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="btn-gold px-8 py-4 text-base mt-4">Projekt starten</button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C9A84C]/10 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-panel mb-10 gold-border">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A84C] animate-pulse"></span>
            <span className="text-sm font-bold tracking-widest text-[#C9A84C]">IT-LÖSUNGEN FÜR VORARLBERG</span>
          </div>
          
          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.05]">
            Ihre Website.
            <br />
            <span className="gold-text">Automomatisiert.</span>
            <br />
            <span className="text-gray-400">Umsatzsteigernd.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-14 font-medium leading-relaxed">
            DevMiro baut digitale Lösungen für Vorarlberger Unternehmen — 
            von professionellen Websites bis hin zu KI-gestützter Kundenkommunikation. 
            Schnell, ehrlich, lokal.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="#kontakt">
              <button className="btn-gold px-10 py-5 rounded-xl text-lg font-bold flex items-center justify-center gap-3 gold-glow">
                Kostenloses Erstgespräch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </Link>
            <a href="#leistungen">
              <button className="btn-outline px-10 py-5 rounded-xl text-lg flex items-center justify-center gap-3">
                Leistungen ansehen
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce">
          <div className="w-8 h-14 border-2 border-[#C9A84C]/30 rounded-full flex justify-center p-2">
            <div className="w-1.5 h-3 bg-[#C9A84C] rounded-full animate-pulse"></div>
          </div>
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#C9A84C]/50">SCROLLEN</span>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C9A84C]/[0.02] to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-sm font-bold tracking-widest text-[#C9A84C] mb-6">
              UNSERE LEISTUNGEN
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Alles aus <span className="gold-text">einer Hand</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Von der professionellen Website bis zur kompletten Geschäftsautomatisierung — wir liefern, was Ihr Unternehmen braucht.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Service 1: Websites */}
            <div className="glass-panel p-10 rounded-3xl hover:border-[#C9A84C]/30 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Professionelle Websites</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Maßgeschneiderte Next.js Websites mit optimaler Performance, SEO-Optimierung und modernstem Design. 100% DSGVO-konform und in Europa gehostet.
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Ladezeit unter 1 Sekunde
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Mobile-first Responsive Design
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  SEO-Grundoptimierung inklusive
                </li>
              </ul>
            </div>

            {/* Service 2: Shopify */}
            <div className="glass-panel p-10 rounded-3xl hover:border-[#C9A84C]/30 transition-all duration-500 group md:mt-12">
              <div className="w-16 h-16 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Shopify Integration</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Professionelle Shopify-Stores mit individuellem Theme-Design, App-Integrationen und automatisierten Workflows für Ihren erfolgreichen Online-Handel.
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Individuelles Theme-Design
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Österreichisches Impressum integriert
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Payment & Versand-Integration
                </li>
              </ul>
            </div>

            {/* Service 3: Automatisierung */}
            <div className="glass-panel p-10 rounded-3xl hover:border-[#C9A84C]/30 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-[#C9A84C]/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Business Automatisierung</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                KI-gestützte Automatisierung für Terminbuchung, Kundenkommunikation und Administrative Aufgaben. Spart Ihnen wöchentlich Stunden an Arbeit.
              </p>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Terminbuchungs-Systeme
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  WhatsApp & E-Mail Automatisierung
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  CRM-Integration & Dashboard
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-sm font-bold tracking-widest text-[#C9A84C] mb-6">
              TRANSPARENTE PREISE
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Fixpreis, <span className="gold-text">keine Überraschungen</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Sie wissen vor Projektstart genau, was es kostet. Keine Stundenzettel, keine versteckten Kosten.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Starter Package */}
            <div className="glass-panel p-10 rounded-3xl border border-white/10 hover:border-[#C9A84C]/30 transition-all duration-500">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-300 mb-2">Starter</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white">€1.500</span>
                  <span className="text-gray-500">einmalig</span>
                </div>
              </div>
              <p className="text-gray-400 mb-8">Perfekt für kleine Unternehmen, die online durchstarten möchten.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  1 Page Website (5 Sektionen)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Mobile Responsive Design
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Kontaktformular
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  DSGVO-konformes Impressum
                </li>
                <li className="flex items-center gap-3 text-gray-500">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
                  </svg>
                  <span>Kein CMS</span>
                </li>
              </ul>
              <Link href="#kontakt" className="block">
                <button className="w-full btn-outline py-4 rounded-xl">Anfragen</button>
              </Link>
            </div>

            {/* Business Package - Featured */}
            <div className="glass-panel p-10 rounded-3xl gold-border relative gold-glow md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gold-gradient text-[#0F1C3F] text-sm font-bold">
                BELIEBT
              </div>
              <div className="mb-8 pt-4">
                <h3 className="text-xl font-bold text-[#C9A84C] mb-2">Business</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white">€3.500</span>
                  <span className="text-gray-500">einmalig</span>
                </div>
              </div>
              <p className="text-gray-400 mb-8">Der komplette Service für Unternehmen, die wachsen wollen.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Multi-Page Website (bis 8 Seiten)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  CMS-Integration (WordPress oder Headless)
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  SEO-Grundoptimierung
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  3 Monate Wartung inklusive
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Google Analytics Setup
                </li>
              </ul>
              <Link href="#kontakt" className="block">
                <button className="w-full btn-gold py-4 rounded-xl gold-glow">Anfragen</button>
              </Link>
            </div>

            {/* Enterprise Package */}
            <div className="glass-panel p-10 rounded-3xl border border-white/10 hover:border-[#C9A84C]/30 transition-all duration-500">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-300 mb-2">Enterprise</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-white">€7.500</span>
                  <span className="text-gray-500">einmalig</span>
                </div>
              </div>
              <p className="text-gray-400 mb-8">Maßgeschneiderte Lösungen für komplexe Anforderungen.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Unbegrenzte Seiten
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Shopify / E-Commerce Integration
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  Automatisierungs-Workflows
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  6 Monate Wartung inklusive
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                  VIP Support (24/7)
                </li>
              </ul>
              <Link href="#kontakt" className="block">
                <button className="w-full btn-outline py-4 rounded-xl">Anfragen</button>
              </Link>
            </div>
          </div>

          {/* Price Note */}
          <p className="text-center text-gray-500 mt-12 text-sm">
            Alle Preise exkl. 20% MwSt. Individuelle Anpassungen und Zusatzleistungen auf Anfrage möglich.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#C9A84C]/[0.02] to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-sm font-bold tracking-widest text-[#C9A84C] mb-6">
              KUNDENSTIMMEN
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Das sagen unsere <span className="gold-text">Kunden</span>
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Testimonial 1 */}
            <div className="glass-panel p-10 rounded-3xl">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                „DevMiro hat unsere Website komplett neu gestaltet. Die Ladezeit ist jetzt unter 1 Sekunde und wir bekommen deutlich mehr Anfragen über das Kontaktformular. Absolut empfehlenswert!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                  <span className="font-bold text-[#0F1C3F]">MK</span>
                </div>
                <div>
                  <p className="font-bold text-white">Markus K.</p>
                  <p className="text-gray-500 text-sm">Geschäftsführer, Bregenz</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="glass-panel p-10 rounded-3xl md:mt-12">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                „Die Automatisierung unserer Terminbuchung hat uns 10 Stunden pro Woche gespart. Das System läuft stabil und unsere Kunden sind begeistert. Top Arbeit!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                  <span className="font-bold text-[#0F1C3F]">SH</span>
                </div>
                <div>
                  <p className="font-bold text-white">Sandra H.</p>
                  <p className="text-gray-500 text-sm">Inhaberin Salon, Dornbirn</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="glass-panel p-10 rounded-3xl">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed">
                „Unser neuer Shopify Store sieht nicht nur professionell aus, sondern konvertiert auch hervorragend. Der Support nach Launch war ebenfalls erstklassig."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                  <span className="font-bold text-[#0F1C3F]">TW</span>
                </div>
                <div>
                  <p className="font-bold text-white">Thomas W.</p>
                  <p className="text-gray-500 text-sm">CEO, Tech Startup, Feldkirch</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 text-sm font-bold tracking-widest text-[#C9A84C] mb-6">
              KONTAKT
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
              Bereit für den <span className="gold-text">nächsten Schritt?</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">
              Buchen Sie ein kostenloses Erstgespräch. Wir analysieren Ihre Situation und zeigen Ihnen ungenutztes Potenzial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="glass-panel p-10 rounded-3xl">
              <h3 className="text-2xl font-bold mb-8">Nachricht senden</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#C9A84C] focus:outline-none transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">E-Mail</label>
                  <input 
                    type="email" 
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#C9A84C] focus:outline-none transition-colors"
                    placeholder="ihre@email.at"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Unternehmen</label>
                  <input 
                    type="text" 
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#C9A84C] focus:outline-none transition-colors"
                    placeholder="Ihr Unternehmen (optional)"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm font-medium mb-2">Nachricht</label>
                  <textarea 
                    rows={5}
                    className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-[#C9A84C] focus:outline-none transition-colors resize-none"
                    placeholder="Wie können wir Ihnen helfen?"
                  ></textarea>
                </div>
                <button type="submit" className="w-full btn-gold py-5 rounded-xl text-lg font-bold gold-glow">
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-10">
              <div className="glass-panel p-10 rounded-3xl">
                <h3 className="text-2xl font-bold mb-8">Kontaktdaten</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">E-Mail</p>
                      <p className="text-white font-medium">kontakt@devmiro.at</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Standort</p>
                      <p className="text-white font-medium">Bregenz, Vorarlberg</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Verfügbarkeit</p>
                      <p className="text-white font-medium">Mo-Fr, 9:00-18:00 Uhr</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-panel p-10 rounded-3xl">
                <h3 className="text-xl font-bold mb-6">Warum DevMiro?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-300">100% Vorarlberger Unternehmen</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-300">Fixpreis — keine versteckten Kosten</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-300">DSGVO-konform von Anfang an</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                    <span className="text-gray-300">Persönlicher Ansprechpartner</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl gold-gradient flex items-center justify-center">
                  <span className="font-bold text-[#0F1C3F] text-2xl">D</span>
                </div>
                <span className="font-bold text-2xl tracking-tight">
                  DEV<span className="text-[#C9A84C]">MIRO</span>
                </span>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                IT-Lösungen für Vorarlberger Unternehmen. Professionelle Websites, Shopify-Integration und Business-Automatisierung aus einer Hand.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-white mb-6">Leistungen</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#leistungen" className="hover:text-[#C9A84C] transition-colors">Websites</a></li>
                <li><a href="#leistungen" className="hover:text-[#C9A84C] transition-colors">Shopify</a></li>
                <li><a href="#leistungen" className="hover:text-[#C9A84C] transition-colors">Automatisierung</a></li>
                <li><a href="#pricing" className="hover:text-[#C9A84C] transition-colors">Preise</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-bold text-white mb-6">Rechtliches</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Impressum</a></li>
                <li><a href="#" className="hover:text-[#C9A84C] transition-colors">Datenschutz</a></li>
                <li><a href="#kontakt" className="hover:text-[#C9A84C] transition-colors">AGB</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-sm">
              © 2026 DevMiro IT-Lösungen. Alle Rechte vorbehalten.
            </p>
            <p className="text-gray-500 text-xs">
              Gerichtsstand: Bregenz, Österreich
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
