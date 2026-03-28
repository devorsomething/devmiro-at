const stats = [
  { value: '50+%', label: 'Zeit gespart', sub: 'durch Automatisierung' },
  { value: '12+', label: 'Projekte', sub: 'erfolgreich umgesetzt' },
  { value: '99.9%', label: 'Uptime', sub: 'für gehostete Lösungen' },
  { value: '<4h', label: 'Reaktionszeit', sub: 'im Support' },
]

export function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[var(--surface)] border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--accent)] mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-[var(--text-primary)] mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-[var(--text-secondary)]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
