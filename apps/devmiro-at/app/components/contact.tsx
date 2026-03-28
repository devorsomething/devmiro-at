'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactFormSchema, type ContactFormData } from '@/app/lib/validations'
import { Button } from '@/app/components/ui/button'
import { Input } from '@/app/components/ui/input'
import { Textarea } from '@/app/components/ui/textarea'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/app/components/ui/dropdown-menu'
import { cn } from '@/app/lib/utils'

const projectTypes = [
  { value: 'Automatisierung', label: 'Workflow-Automatisierung' },
  { value: 'Web-Entwicklung', label: 'Web-Entwicklung' },
  { value: 'Shopify', label: 'Shopify Development' },
  { value: 'Sonstiges', label: 'Etwas anderes' },
]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [selectedType, setSelectedType] = useState('')

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL
      
      if (!webhookUrl) {
        console.warn('NEXT_PUBLIC_N8N_WEBHOOK_URL not set, simulating success')
        await new Promise(resolve => setTimeout(resolve, 1000))
        setSubmitStatus('success')
        reset()
        return
      }

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error('Failed to submit')

      setSubmitStatus('success')
      reset()
      setSelectedType('')
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <section id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--cta)]/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[var(--cta)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              Danke für Ihre Nachricht!
            </h3>
            <p className="text-[var(--text-secondary)] mb-6">
              Ich melde mich innerhalb von 24 Stunden bei Ihnen.
            </p>
            <Button variant="secondary" onClick={() => setSubmitStatus('idle')}>
              Neue Nachricht senden
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="kontakt" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[var(--accent)] uppercase tracking-widest mb-3">
            Kontakt
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Lassen Sie uns sprechen
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten ein Projekt besprechen? 
            Schreiben Sie mir — ich antworte innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6">
                Direkter Kontakt
              </h3>
              <div className="space-y-4">
                <a
                  href="mailto:info@devmiro.at"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[var(--accent)]/10">
                    <Mail className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-secondary)]">E-Mail</div>
                    <div className="text-[var(--text-primary)]">info@devmiro.at</div>
                  </div>
                </a>

                <a
                  href="tel:+436600000000"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                >
                  <div className="p-2 rounded-lg bg-[var(--accent)]/10">
                    <Phone className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-secondary)]">Telefon</div>
                    <div className="text-[var(--text-primary)]">+43 660 000 0000</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg bg-[var(--surface)] border border-[var(--border)]">
                  <div className="p-2 rounded-lg bg-[var(--accent)]/10">
                    <MapPin className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <div>
                    <div className="text-sm text-[var(--text-secondary)]">Standort</div>
                    <div className="text-[var(--text-primary)]">Vorarlberg, Österreich</div>
                  </div>
                </div>
              </div>
            </div>

            <Button
              variant="secondary"
              size="lg"
              className="w-full gap-2"
              asChild
            >
              <a
                href="https://wa.me/436600000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp schreiben
              </a>
            </Button>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--surface)] rounded-2xl border border-[var(--border)] p-8">
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 rounded-lg bg-red-600/10 border border-red-600/30 flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <p className="text-sm text-red-500">
                  Etwas ist schiefgelaufen. Schreib mir direkt: info@devmiro.at
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    Name *
                  </label>
                  <Input
                    {...register('name')}
                    placeholder="Ihr Name"
                    error={errors.name?.message}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                    E-Mail *
                  </label>
                  <Input
                    {...register('email')}
                    type="email"
                    placeholder="ihre@email.at"
                    error={errors.email?.message}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Firma (optional)
                </label>
                <Input
                  {...register('company')}
                  placeholder="Ihre Firma"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Projekt-Typ *
                </label>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      type="button"
                      className={cn(
                        'flex h-11 w-full items-center justify-between rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm',
                        errors.projectType
                          ? 'border-red-500'
                          : 'focus:outline-none focus:ring-2 focus:ring-[var(--accent)]'
                      )}
                    >
                      <span className={selectedType ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}>
                        {selectedType || 'Projekt-Typ auswählen'}
                      </span>
                      <svg className="w-4 h-4 text-[var(--text-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    {projectTypes.map((type) => (
                      <DropdownMenuItem
                        key={type.value}
                        onClick={() => {
                          setSelectedType(type.label)
                          setValue('projectType', type.value as ContactFormData['projectType'])
                        }}
                      >
                        {type.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {errors.projectType && (
                  <p className="mt-1 text-xs text-red-500">{errors.projectType.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-primary)] mb-2">
                  Nachricht *
                </label>
                <Textarea
                  {...register('message')}
                  placeholder="Beschreiben Sie kurz Ihr Projekt oder Anliegen..."
                  error={errors.message?.message}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
                )}
              </div>

              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('privacy')}
                    className="mt-1 h-4 w-4 rounded border-[var(--border)] bg-[var(--surface)] text-[var(--accent)] focus:ring-[var(--accent)]"
                  />
                  <span className="text-sm text-[var(--text-secondary)]">
                    Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                    <a href="#" className="text-[var(--accent)] hover:underline">Datenschutzerklärung</a> zu. *
                  </span>
                </label>
                {errors.privacy && (
                  <p className="mt-1 text-xs text-red-500">{errors.privacy.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Nachricht senden
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
