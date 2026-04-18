'use client';

import { useState, useEffect } from 'react';

export default function SystemScanner() {
  const [step, setStep] = useState(0);
  
  useEffect(() => {
    if (step > 0 && step < 5) {
      const timer = setTimeout(() => setStep(step + 1), 800 + Math.random() * 600);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="scanner-block">
      <div className="scanner-header">
        <div className="scanner-dots">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
        </div>
        <span className="scanner-title">DEVMIRO_AUDIT_PROTOCOL.exe</span>
      </div>
      <div className="scanner-body">
        {step === 0 ? (
          <div className="scanner-init">
            <p className="subtitle">Wie sicher ist deine aktuelle IT?</p>
            <button className="btn btn--primary" onClick={() => setStep(1)}>
              &gt; System-Check starten
            </button>
          </div>
        ) : (
          <div className="scanner-console">
            <p className="log"><span>$</span> init_scan --target=your_business</p>
            {step >= 2 && <p className="log success">[OK] Analyzing infrastructure...</p>}
            {step >= 3 && <p className="log success">[OK] Checking performance metrics...</p>}
            {step >= 4 && <p className="log warning">[WARN] Security vulnerabilities detected.</p>}
            {step >= 5 && (
              <div className="scanner-result animate-fade-in mt-4">
                <p className="critical">⚠️ ACTION REQUIRED</p>
                <p className="desc">Lass keine Lücken für Angreifer. Wir schließen sie.</p>
                <a href="/kontakt?audit=1" className="btn btn--outline mt-4">
                  Kostenlosen Audit sichern
                </a>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .scanner-block {
          background: var(--bg-tertiary);
          border: 1px solid var(--border);
          border-radius: 0;
          overflow: hidden;
          font-family: var(--font-mono);
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
          position: relative;
          min-height: 260px;
          display: flex;
          flex-direction: column;
        }
        .scanner-header {
          display: flex;
          align-items: center;
          padding: 0.75rem 1rem;
          background: #111;
          border-bottom: 1px solid var(--border);
        }
        .scanner-dots { display: flex; gap: 6px; margin-right: 1rem; }
        .dot { width: 10px; height: 10px; border-radius: 50%; }
        .dot-red { background: #FF5F56; }
        .dot-yellow { background: #FFBD2E; }
        .dot-green { background: #27CA40; }
        .scanner-title { font-size: 0.65rem; color: var(--text-dim); text-transform: uppercase; letter-spacing: 0.1em; }
        .scanner-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; justify-content: center; }
        .scanner-init { text-align: center; }
        .subtitle { font-family: var(--font-body); color: var(--text-muted); margin-bottom: 1.5rem; font-size: 1.1rem;}
        .scanner-console { font-size: 0.85rem; line-height: 1.6; width: 100%;}
        .log { color: var(--text-muted); margin-bottom: 0.5rem; }
        .log span { color: var(--accent); margin-right: 0.5rem; }
        .success { color: #27CA40; }
        .warning { color: #FFBD2E; }
        .critical { color: var(--accent); font-weight: bold; margin-bottom: 0.5rem; animation: blink 1s infinite; font-size: 1rem; }
        .desc { font-family: var(--font-body); color: var(--text-muted); margin-bottom: 1.5rem;}
        .mt-4 { margin-top: 1rem; }
        @keyframes blink { 50% { opacity: 0.5; } }
      `}</style>
    </div>
  );
}
