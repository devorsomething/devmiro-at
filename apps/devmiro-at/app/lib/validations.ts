import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name muss mindestens 2 Zeichen haben'),
  email: z.string().email('Bitte geben Sie eine gültige E-Mail-Adresse ein'),
  company: z.string().optional(),
  projectType: z.enum(['Automatisierung', 'Web-Entwicklung', 'Shopify', 'Sonstiges'], {
    required_error: 'Bitte wählen Sie einen Projekt-Typ',
  }),
  message: z.string().min(10, 'Nachricht muss mindestens 10 Zeichen haben'),
  privacy: z.literal(true, {
    required_error: 'Bitte akzeptieren Sie die Datenschutzerklärung',
  }),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
