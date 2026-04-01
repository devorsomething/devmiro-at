export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* Background Particles/Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[-1]">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-20 animate-pulse"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 3 + 2 + 's',
              animationDelay: Math.random() * 2 + 's',
            }}
          ></div>
        ))}
      </div>

      <div className="z-10 text-center max-w-4xl mx-auto flex flex-col items-center gap-6 hero-animation">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#004D40]/30 border border-[#00E5FF]/20 shadow-[0_0_15px_rgba(0,229,255,0.2)] backdrop-blur-sm">
          <div className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse"></div>
          <span className="text-[#00E5FF] text-sm font-semibold tracking-wider">
            IT-LÖSUNGEN FÜR VORARLBERG
          </span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.1] mb-2 drop-shadow-2xl">
          <span className="block text-white">Ihre Website.</span>
          <span className="block text-[#00E5FF] drop-shadow-[0_0_20px_rgba(0,229,255,0.5)]">Automatisiert.</span>
          <span className="block bg-gradient-to-r from-[#00E5FF] to-[#8B5CF6] text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            Umsatzsteigernd.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mt-4">
          DevMiro baut digitale Lösungen für Bregenzer und Vorarlberger Unternehmen — 
          von professionellen Websites bis hin zu KI-gestützter Kundenkommunikation. 
          Schnell, ehrlich, local.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="px-8 py-4 rounded-xl bg-[#00E5FF] text-black font-bold hover:bg-white transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,229,255,0.6)] transform hover:-translate-y-1 active:translate-y-0">
            Projekt starten →
          </button>
          <button className="px-8 py-4 rounded-xl bg-transparent border border-white/20 text-white font-bold hover:bg-white/10 transition-all duration-300 hover:border-white/50 transform hover:-translate-y-1 active:translate-y-0 backdrop-blur-md">
            Leistungen ansehen →
          </button>
        </div>
      </div>

      {/* Floating 3D Orbs / Glassmorphism Elements (Decorative) */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-[#00E5FF] to-transparent rounded-full blur-2xl opacity-30 hero-animation" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-tr from-[#8B5CF6] to-transparent rounded-full blur-3xl opacity-20 hero-animation" style={{ animationDelay: '2s' }}></div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
        <span className="text-xs font-semibold tracking-widest text-white/50">SCROLLEN</span>
      </div>

    </main>
  );
}
