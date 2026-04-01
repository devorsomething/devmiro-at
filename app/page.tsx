"use client";

import React, { useEffect, useRef } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function PremiumLanding() {
  const containerRef = useRef<HTMLDivElement>(null);

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
      <Head>
        <title>DevMiro - Ultra Premium Web Solutions</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none grid-bg opacity-30"></div>
      <div className="hero-bg pointer-events-none">
        <div className="orb orb-1 orb-parallax"></div>
        <div className="orb orb-2 orb-parallax" style={{ animationDelay: '-10s' }}></div>
        <div className="orb orb-3 orb-parallax" style={{ width: '300px', height: '300px', background: 'rgba(255, 0, 229, 0.2)', top: '50%', left: '20%', animationDelay: '-15s' }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 nav-blur px-8 py-4 flex justify-between items-center transition-all duration-300">
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center transform group-hover:rotate-12 transition-transform shadow-[0_0_15px_rgba(0,229,255,0.5)]">
            <span className="font-bold text-white text-lg tracking-tighter">D</span>
          </div>
          <span className="font-bold text-xl tracking-wide text-white group-hover:text-cyan-400 transition-colors">
            DEV<span className="text-gray-400">MIRO</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#services" className="hover:text-white hover:text-cyan-400 transition-colors duration-300">Services</a>
          <a href="#process" className="hover:text-white hover:text-cyan-400 transition-colors duration-300">Process</a>
          <a href="#features" className="hover:text-white hover:text-cyan-400 transition-colors duration-300">Features</a>
          <button className="px-6 py-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-all duration-300 font-semibold backdrop-blur-md">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 animate-[fade-in_1s_ease-out]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm font-medium text-cyan-200">Next-Generation Web Experiences</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 max-w-5xl leading-tight">
            Build The Future <br/>
            <span className="text-gradient">With Dimension.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mb-12 font-light leading-relaxed">
            Elevate your brand with immersive, AI-driven, and hyper-optimized 3D web applications designed for the modern era.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="btn-glow px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 transform hover:-translate-y-1">
              Start Your Project
            </button>
            <button className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 text-white font-bold text-lg transition-all duration-300 flex items-center gap-2 group">
              View Portfolio
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
            </button>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Unrivaled <span className="text-cyan-400">Capabilities</span></h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Everything you need to dominate your market with an unfair technological advantage.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card-3d glass-panel p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Hyper Performance</h3>
              <p className="text-gray-400 leading-relaxed">Lightning-fast load times and smooth 60fps animations, built on Next.js edge infrastructure.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="card-3d glass-panel p-8 relative overflow-hidden group mt-0 md:mt-12">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Spatial Design</h3>
              <p className="text-gray-400 leading-relaxed">Immersive 3D elements and spatial interfaces that blur the line between software and reality.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="card-3d glass-panel p-8 relative overflow-hidden group mt-0 md:mt-24">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              <div className="w-14 h-14 rounded-xl bg-pink-500/20 flex items-center justify-center mb-6 text-pink-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"></path></svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">AI Integrated</h3>
              <p className="text-gray-400 leading-relaxed">Smart, self-optimizing interfaces powered by modern LLMs to provide personalized user experiences.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-900/10 to-[#050507]"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-10 glass-panel p-16 rounded-3xl border-cyan-500/20 shadow-[0_0_100px_rgba(0,229,255,0.05)]">
            <h2 className="text-5xl font-bold mb-6">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Transcend?</span></h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">Join the elite tier of companies leveraging spatial web design to dominate their industries.</p>
            <button className="btn-glow px-12 py-5 rounded-full bg-white text-black font-bold text-xl hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)]">
              Initiate Contact
            </button>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="border-t border-white/10 py-12 px-8 text-center text-gray-500 text-sm">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center">
              <span className="font-bold text-white text-xs">D</span>
            </div>
            <span className="font-bold text-white">DEVMIRO</span>
          </div>
          <p>© 2026 DevMiro. All rights reserved. Ultra Premium Tier.</p>
        </footer>
      </main>
    </div>
  );
}
