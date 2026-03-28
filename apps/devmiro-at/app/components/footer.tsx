import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: Logo + Tagline */}
          <div className="text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2">
              <span className="text-xl font-bold text-[var(--text-primary)]">
                Dev<span className="text-[var(--accent)]">Miro</span>
              </span>
            </a>
            <p className="text-sm text-[var(--text-secondary)] mt-2">
              Systeme, die mitdenken.
            </p>
          </div>

          {/* Center: Nav Links */}
          <nav className="flex items-center gap-6">
            <a
              href="#"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Impressum
            </a>
            <a
              href="#"
              className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              Datenschutz
            </a>
          </nav>

          {/* Right: Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/mirogavanelli"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/devmiro"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-[var(--border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-[var(--border)] text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            © {currentYear} Miro Gavanelli. Alle Rechte vorbehalten. Inhaber: Einzelunternehmen, UID: AT00000000
          </p>
        </div>
      </div>
    </footer>
  )
}
