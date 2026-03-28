# DEVCALL — AI Phone Assistant Platform
## Vollständiger Codex Prompt zum Bauen

---

# 🎯 PROJEKT BESCHREIBUNG

**Produktname:** DEVCALL
**Positioning:** "KI-Telefonassistent für Unternehmen"
**Kernwert:** Dein digitaler Telefonassistent — 24/7 verfügbar, keine Wartezeiten, immer freundlich,无人值守
**Markt:** Deutschland, Österreich, Schweiz (DACH-Region)
**Sprache:** Deutsch (primär), Englisch (optional)
**Tagline:** "Machen Sie Ihre Telefonie intelligent"

---

# 🌟 PRODUKT VISION

DEVCALL ist eine Cloud-Plattform für Unternehmen, die telefonische Kundenkommunikation KI-gestützt automatisiert. Die Plattform ermöglicht es Unternehmen, eingehende und ausgehende Anrufe durch konfigurierbare KI-Assistenten zu bearbeiten, Transkripte zu erstellen, Termine zu buchen und nahtlos in bestehende Systeme zu integrieren.

---

# 📞 KERNFEATURES

## 1. KI-Telefonassistent (AI Agent)

### 1.1 Intelligente Anrufannahme
- KI nimmt eingehende Anrufe entgegen
- Begrüßungsansage mit Firmenidentität
- Natürliche Gesprächsführung mit Kunden
- Kontextverständnis über mehrere Gesprächsrunden
- Emotionserkennung und passende Reaktionen

### 1.2 FAQ & Wissensbasis
- Interaktives FAQ-System mit intelligenten Antworten
- Anpassbare Wissensbasis für jeden KI-Assistenten
- Machine Learning aus vergangenen Gesprächen
- Kategorienbasierte Antwortgruppen
- Mehrsprachige FAQ-Unterstützung

### 1.3 Anrufweiterleitung
- Intelligente Weiterleitung basierend auf Anliegen
- Direkte Weiterleitung an richtige Abteilungen
- Persönliche Weiterleitung an Mitarbeiter
- Warteschleife mit individueller Musik
- Voicemail bei Nichtverfügbarkeit

### 1.4 Terminbuchung
- Integration mit Kalender-Systemen
- Automatische Terminvergabe während des Gesprächs
- Kalender-Synchronisation (Google Calendar, Outlook, Apple Calendar)
- Erinnerungs-SMS/E-Mail vor Terminen
- Doppelbuchungs-Schutz

### 1.5 Auftrags- und Informationsannahme
- Strukturierte Datenerfassung während Gespräch
- Formularbasierte Auftragserfassung
- dynamische Feldgenerierung basierend auf Produkt
- Bestätigungs-SMS nach Auftragserfassung
- Integration in CRM-Systeme

---

## 2. Ausgehende Anrufe (Outbound)

### 2.1 API für主动性 Anrufe
- RESTful API für Programmatische Anrufe
- Personalisierte Ansagen mit Variablen (Name, Datum, etc.)
- Bulk-Calling für Erinnerungen und Benachrichtigungen
- Status-Callbacks via Webhook
-呼叫日志 und Tracking

### 2.2 Anwendungsfälle Outbound
- Terminerinnerungen (SMS + Anruf)
- Lieferankündigungen
- Zahlungserinnerungen
- Kundenzufriedenheitsumfragen
- Bestellstatus-Updates

---

## 3. Transkription & Analytik

### 3.1 Echtzeit-Transkription
- Live-Transkription während des Gesprächs
- Speaker-Trennung (KI vs. Anrufer)
- Zeitstempel für jeden Abschnitt
- Suchbares Transkript-Archiv
- Export als Text/PDF

### 3.2 KI-Zusammenfassungen
- Automatische Gesprächszusammenfassung
- Extrahierte Action Items
- Erkannte Fragen und Antworten
- Stimmungsanalyse des Anrufers

### 3.3 Anruf-Analytics
- Anrufstatistiken (Dauer, Wartezeit, Peak-Zeiten)
- KI-Leistungskennzahlen (Erkennungsrate, Lösungsquote)
- Kostenanalyse pro Anruf
- Export-Funktionen für Berichte

---

## 4. Team-Management

### 4.1 Mehrbenutzer-System
- Rollen: Admin, Teamleiter, Mitarbeiter
- Individuelle Berechtigungen
- Abteilungsbasierte Organisation
- Aktivitätsfeed des gesamten Teams

### 4.2 Kundenverwaltung
- Kundenstamm mit Kontakthistorie
- Anrufhistorie pro Kunde
- Notizen und Tags
- Import/Export Funktionen

### 4.3 Benachrichtigungen
- E-Mail-Benachrichtigungen bei Eskalationen
- SMS für kritische Events
- Slack/Discord-Integration
- Push-Benachrichtigungen (Mobile App)

---

## 5. Telefonie-Infrastruktur

### 5.1 Nummernverwaltung
- Lokale Rufnummern (DE, AT, CH)
- Kostenlose Rufnummern (0800)
- Nummernportierung von anderen Anbietern
- Mehrere Nummern pro Account
- Klingelstrategien (simultan, sequentiell, Round-Robin)

### 5.2 IVR-System (Interactive Voice Response)
- Visueller IVR-Editor
- Tastenbasierte Menüs
- Zeitbasierte Weiterleitungen (Öffnungszeiten)
- Feiertagsregelungen
- Sprachmenüs in Deutsch und Englisch

### 5.3 Warteschleifen
- Anpassbare Wartemusik
- Position im Wartefeld Ansage
- Geschätzte Wartezeit
- Callback-Option statt Warten

---

## 6. Integrationen

### 6.1 Kalender
- Google Calendar (bidirektional)
- Microsoft Outlook Calendar
- Apple Calendar (nur Lesen)
- cal.com (Terminbuchung)
- Calendly

### 6.2 CRM-Systeme
- HubSpot
- Salesforce
- Pipedrive
- Custom CRM via API/Webhook

### 6.3 Kommunikation
- Slack
- Microsoft Teams
- Discord
- Signal

### 6.4 Automatisierung
- Zapier
- Make (formerly Integromat)
- n8n
- Custom Webhooks

### 6.5 Weitere Integrationen
- WooCommerce (Bestellungen)
- Shopify
- ServiceNow
- Zendesk

---

## 7. Sicherheit & Compliance

### 7.1 Datenschutz
- DSGVO-konform (EU-Daten in Deutschland)
- GDPR-Export aller Daten
- Right to be Forgotten
- Data Processing Agreement (DPA)

### 7.2 Sicherheit
- Zwei-Faktor-Authentifizierung (2FA)
- Ende-zu-Ende-Verschlüsselung
- SSO/SAML für Enterprise
- Role-based Access Control (RBAC)

### 7.3 Hochverfügbarkeit
- 99.9% SLA
- Redundante Server-Infrastruktur
- Automatisches Failover
- 24/7 Monitoring

---

# 🏗️ TECHNISCHE ARCHITEKTUR

## Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Sprache:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **UI-Komponenten:** shadcn/ui
- **State Management:** Zustand / TanStack Query
- **Formulare:** React Hook Form + Zod
- **Animationen:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts

### Backend
- **Framework:** Node.js + Fastify / Next.js API Routes
- **Datenbank:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Authentifizierung:** Clerk / NextAuth
- **Cache:** Redis (für Session-Management)
- **Queue:** BullMQ (für Hintergrund-Jobs)
- **Suche:** Meilisearch / Algolia

### KI/ML
- **Speech-to-Text:** Whisper API (OpenAI) / AssemblyAI / Deepgram
- **Text-to-Speech:** ElevenLabs / Google Cloud TTS / Amazon Polly
- **NLP:** Custom LLM Integration (GPT-4, Claude)
- **Voice AI Engine:** Custom Dialog Management System

### Telefonie
- **SIP-Trunking:** Twilio / Plivo / Telnyx / Voximplant
- **Telefonnummern:** Lokale Anbieter
- **Recording:** Integriert in SIP

### Storage
- **Audio Files:** AWS S3 / Cloudflare R2
- **Transkripte:** PostgreSQL JSON
- **Backups:** Automatisch, tägliche Snapshots

---

## System-Architektur (Subagent-Design)

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND (Next.js)                       │
│   Dashboard │ KI-Konfiguration │ Anrufverlauf │ Einstellungen │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY (Fastify)                      │
│   Auth │ Rate Limiting │ Logging │ Validation │ Caching        │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│ Call Agent    │    │ Transcription │    │ Task Agent    │
│ (Subagent)    │    │ (Subagent)    │    │ (Subagent)    │
│               │    │               │    │               │
│ • SIP Handler │    │ • Whisper     │    │ • Scheduler   │
│ • Dialogflow  │    │ • Speaker ID  │    │ • Reminders   │
│ • Transfer    │    │ • Format      │    │ • Webhooks    │
└───────────────┘    └───────────────┘    └───────────────┘
        │                     │                     │
        └─────────────────────┼─────────────────────┘
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    MESSAGE QUEUE (BullMQ)                        │
│   Jobs: Transcription, Summary, Export, Notifications          │
└─────────────────────────────────────────────────────────────────┘
                              │
        ┌─────────────────────┼─────────────────────┐
        ▼                     ▼                     ▼
┌───────────────┐    ┌───────────────┐    ┌───────────────┐
│ OpenAI GPT-4  │    │ ElevenLabs    │    │ Twilio/Plivo │
│ (Summaries)   │    │ (TTS)         │    │ (Telephony)  │
└───────────────┘    └───────────────┘    └───────────────┘
```

---

## Datenmodell

### User (Benutzer)
```typescript
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'owner' | 'admin' | 'user' | 'guest';
  timezone: string;
  language: 'de' | 'en';
  createdAt: Date;
  updatedAt: Date;
}
```

### Team (Unternehmen)
```typescript
interface Team {
  id: string;
  name: string;
  slug: string;
  plan: 'starter' | 'professional' | 'business' | 'enterprise';
  settings: TeamSettings;
  createdAt: Date;
  updatedAt: Date;
}
```

### PhoneNumber (Rufnummer)
```typescript
interface PhoneNumber {
  id: string;
  number: string;        // +49...
  country: 'DE' | 'AT' | 'CH';
  type: 'local' | 'tollfree';
  status: 'active' | 'suspended' | 'cancelled';
  forwardToUser: boolean;
  forwardNumber?: string;
  businessHours: BusinessHours;
  ivrEnabled: boolean;
  voicemailEnabled: boolean;
  aiAgentId?: string;
}
```

### AIAgent (KI-Assistent)
```typescript
interface AIAgent {
  id: string;
  name: string;
  voice: 'male' | 'female';
  voiceId?: string;           // ElevenLabs ID
  personality: 'friendly' | 'professional' | 'neutral';
  language: 'de' | 'en';
  greetingType: 'text' | 'audio';
  greetingText?: string;
  greetingAudio?: string;
  transferPrompt?: string;
  escalationKeywords: string[];
  isActive: boolean;
  faqs: FAQ[];
}
```

### FAQ (Wissensbasis)
```typescript
interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
  priority: number;
  isActive: boolean;
}
```

### Call (Anruf)
```typescript
interface Call {
  id: string;
  sid?: string;              // Provider SID
  direction: 'inbound' | 'outbound';
  from: string;
  to: string;
  status: 'queued' | 'ringing' | 'answered' | 'completed' | 'busy' | 'no_answer' | 'failed';
  duration?: number;
  aiDuration?: number;
  startedAt?: Date;
  answeredAt?: Date;
  endedAt?: Date;
  aiHandled: boolean;
  humanTransferred: boolean;
  recordingUrl?: string;
  transcriptId?: string;
  tags: string[];
  notes?: string;
}
```

### Transcript (Transkript)
```typescript
interface Transcript {
  id: string;
  callId: string;
  text: string;
  language: string;
  segments: TranscriptSegment[];
  summary?: string;
  keyPoints: string[];
  actionItems: ActionItem[];
  sentToTeam: boolean;
  sentAt?: Date;
}

interface TranscriptSegment {
  speaker: 'ai' | 'caller';
  start: number;
  end: number;
  text: string;
}

interface ActionItem {
  id: string;
  title: string;
  assignee?: string;
  dueDate?: Date;
  status: 'open' | 'in_progress' | 'done';
  priority: 'low' | 'medium' | 'high';
}
```

---

# 📄 SEITEN-STRUKTUR

## 1. Öffentliche Seiten

### Landing Page
- Hero Section mit animated Phone Mockup
- Feature Cards (6 Stück)
- Use Cases Grid
- Testimonials
- Pricing Section mit Calculator
- FAQ Accordion
- CTA Footer
- Dark/Light Mode Toggle

### Preise
- 4 Pricing Tiers (Starter €85, Professional €199, Business €399, Enterprise Custom)
- Savings Calculator
- Feature Comparison Table
- FAQ
- CTA für Demo

### Dokumentation (Docs)
- Getting Started Guide
- API Reference
- Integration Guides
- Best Practices
- Changelog

---

## 2. Authentifiziertes Dashboard

### Dashboard Home
**Stats Row:**
- Anrufe diese Woche
- Durchschnittliche Dauer
- KI-Lösungsquote (%)
- Monatliche Kosten

**Recent Calls:**
- Letzte 10 Anrufe
- Status: Angenommen, Verpasst, Weitergeleitet
- Quick-Play Transkript

**Pending Actions:**
- Offene Action Items
- Fällige Erinnerungen

**Quick Actions:**
- Neuen Anruf starten
- KI konfigurieren
- Analytics ansehen

---

## 3. Anrufverwaltung

### Anrufliste
**Filter:**
- Zeitraum
- Status (Alle, Angenommen, Verpasst, Weiterleitet)
- Nummer
- KI/Mensch

**Tabelle:**
- Datum/Uhrzeit
- Anrufer-Nummer
- Dauer
- Status Badge
- KI/Mensch Indikator
- Play/Transkript Button

**Call Detail Modal:**
- Vollständiges Transkript
- Audio-Playback mit Waveform
- Zusammenfassung
- Action Items
- Notizen
- Tags
- Export

---

## 4. KI-Assistent Konfiguration

### Voice Settings
- Voice Auswahl (Male/Female)
- Persönlichkeit (Friendly/Professional)
- Sprache (Deutsch/Englisch)
- Sprechgeschwindigkeit
- Test-Playback

### Begrüßung
- Text-to-Speech Konfiguration
- Audio-Upload Alternative
- Mehrere Begrüßungen für verschiedene Zeiten

### FAQ Editor
- Q&A Paare hinzufügen
- Bulk Import (CSV/JSON)
- Kategorien
- Priorisierung
- Trainingsstatus

### Weiterleitungsregeln
- Wer darf weitergeleitet werden
- Direktwahlen
- Voicemail Fallback

### Eskalations-Einstellungen
- Keywords für Eskalation
- Wie eskalieren (Weiterleitung, Callback, Voicemail)
- Menschlicher Fallback

---

## 5. Nummernverwaltung

### Nummernliste
- Aktive Nummern mit Status
- Neue Nummer kaufen Button

### Nummern-Detail
- Telefonnummer
- Zugewiesener KI-Assistent
- Weiterleitungseinstellungen
- Öffnungszeiten
- IVR-Menü Konfiguration

### Nummern-Kauf
- Land: DE/AT/CH
- Nummerntyp: Lokal/Freephone
- Nummernauswahl

---

## 6. Transkripte

### Transkript-Liste
- Alle Transkripte durchsuchbar
- Filter nach Datum, Thema, Status
- Sent-to-Team Indikator

### Transkript-Detail
- Vollständige Konversation
- Speaker Labels (KI/Anrufer)
- Zeitstempel pro Segment
- Extrahierte Key Points
- Action Items
- Export-Optionen

---

## 7. Analytics

### Übersicht
- Anrufe gesamt
- Minuten gesamt
- Durchschnittliche Dauer
- Kosten

### Charts
- Anrufe pro Tag (Linie)
- Anruf-Dauer-Verteilung (Balken)
- Lösungsquote (Gauge)
- Peak-Hours Heatmap

### KI-Leistung
- Erkennungsgenauigkeit
- Häufigste Fragen
- Unbeantwortete Themen

### Export
- CSV, PDF
- Zeitraumauswahl

---

## 8. Integrationen

### Verfügbare Integrationen
- cal.com (Terminbuchung)
- Google Calendar
- HubSpot
- Salesforce
- Zapier
- API Keys

### Integration Cards
- Icon + Name
- Status: Verbunden/Nicht verbunden
- Verbinden/Trennen Button
- Konfigurations-Link

---

## 9. Einstellungen

### Tabs
- Profil
- Team
- Benachrichtigungen
- Abrechnung
- Sicherheit

### Profil Tab
- Name, Email, Avatar
- Zeitzone
- Sprache

### Team Tab
- Teammitglieder-Liste
- Mitglied einladen
- Rollen und Berechtigungen

### Benachrichtigungen Tab
- Email-Benachrichtigungen
- SMS für Eskalationen
- Tageszusammenfassung

### Abrechnung Tab
- Aktueller Plan
- Nutzung diesen Monat
- Rechnungshistorie
- Upgrade/Kündigen

### Sicherheit Tab
- Passwort ändern
- 2FA aktivieren
- Aktive Sitzungen
- API-Tokens

---

## 10. API-Entwickler

### API-Dokumentation
- Base URL
- Authentifizierung
- Endpoints
- Request/Response Beispiele

### API Keys
- Key erstellen
- Key widerrufen
- Nutzungsstatistiken

### Webhooks
- Webhooks konfigurieren
- Event-Typen
- Payload-Beispiele

---

# 🔌 API ENDPOINTS

## Authentifizierung
```
POST   /api/auth/register         # Registrierung
POST   /api/auth/login           # Login
POST   /api/auth/logout          # Logout
GET    /api/auth/session         # Aktuelle Session
POST   /api/auth/google          # Google OAuth
POST   /api/auth/microsoft       # Microsoft OAuth
```

## Teams
```
GET    /api/teams                # Teams auflisten
POST   /api/teams                # Team erstellen
GET    /api/teams/:id            # Team-Details
PATCH  /api/teams/:id            # Team aktualisieren
DELETE /api/teams/:id            # Team löschen

GET    /api/teams/:id/members    # Mitglieder auflisten
POST   /api/teams/:id/members/invite   # Mitglied einladen
DELETE /api/teams/:id/members/:userId   # Mitglied entfernen
PATCH  /api/teams/:id/members/:userId   # Rolle ändern
```

## Telefonnummern
```
GET    /api/phone-numbers                    # Nummern auflisten
POST   /api/phone-numbers                    # Nummer erstellen
GET    /api/phone-numbers/:id               # Nummer-Details
PATCH  /api/phone-numbers/:id               # Nummer aktualisieren
DELETE /api/phone-numbers/:id               # Nummer löschen

POST   /api/phone-numbers/purchase          # Nummer kaufen
POST   /api/phone-numbers/:id/port          # Nummer portieren
```

## KI-Assistenten
```
GET    /api/ai-agents                       # KI-Assistenten auflisten
POST   /api/ai-agents                       # Erstellen
GET    /api/ai-agents/:id                   # Details
PATCH  /api/ai-agents/:id                   # Aktualisieren
DELETE /api/ai-agents/:id                   # Löschen

GET    /api/ai-agents/:id/faqs             # FAQs abrufen
POST   /api/ai-agents/:id/faqs             # FAQ hinzufügen
PATCH  /api/ai-agents/:id/faqs/:faqId      # FAQ aktualisieren
DELETE /api/ai-agents/:id/faqs/:faqId      # FAQ löschen

POST   /api/ai-agents/:id/test-call        # Testanruf
```

## Anrufe
```
GET    /api/calls                           # Anrufe auflisten
GET    /api/calls/:id                       # Anruf-Details
POST   /api/calls/:id/notes                # Notizen hinzufügen
POST   /api/calls/:id/tags                 # Tags hinzufügen

POST   /api/calls/:id/transfer              # Weiterleiten
POST   /api/calls/:id/recording            # Recording abrufen
```

## Transkripte
```
GET    /api/transcripts                      # Transkripte auflisten
GET    /api/transcripts/:id                 # Transkript-Details
POST   /api/transcripts/:id/send-to-team   # An Team senden
GET    /api/transcripts/:id/export          # Exportieren
```

## Ausgehende Anrufe (API)
```
POST   /api/calls/outbound                  # Anruf starten
GET    /api/calls/outbound/status/:id       # Status abfragen
POST   /api/calls/outbound/bulk            # Bulk-Anrufe
```

## Integrationen
```
GET    /api/integrations                    # Integrationen auflisten
POST   /api/integrations/:type/connect      # Verbinden
DELETE /api/integrations/:id                # Trennen
GET    /api/integrations/:id/status         # Status prüfen
POST   /api/integrations/:type/sync         # Synchronisieren
```

## Analytics
```
GET    /api/analytics/overview              # Übersicht
GET    /api/analytics/calls                 # Anrufstatistik
GET    /api/analytics/duration              # Dauerstatistik
GET    /api/analytics/peak-hours            # Stoßzeiten
GET    /api/analytics/export                # Exportieren
```

## Abrechnung
```
GET    /api/billing                         # Abonnement
GET    /api/billing/invoices               # Rechnungen
GET    /api/billing/usage                  # Nutzung
POST   /api/billing/checkout               # Checkout
POST   /api/billing/portal                 # Kundenportal
```

---

# 🚀 SPRACH-TO-SPEECH KONFIGURATION

## ElevenLabs Integration
```typescript
// Voice Settings
interface VoiceConfig {
  voiceId: string;        // z.B. "21m00Tcm4TlvDq8ikWAM"
  model: string;           // "eleven_multilingual_v2"
  stability: number;       // 0.5
  similarityBoost: number; // 0.75
}

// TTS Request
async function synthesizeSpeech(text: string, config: VoiceConfig) {
  const response = await elevenLabs.speech.toStream({
    text,
    voice_id: config.voiceId,
    model: config.model
  });
  return response;
}
```

## Speech-to-Text (Whisper)
```typescript
// Transcription Request
async function transcribeAudio(audioFile: Buffer) {
  const transcript = await openai.audio.transcriptions.create({
    file: audioFile,
    model: "whisper-1",
    language: "de"
  });
  return transcript;
}
```

---

# 📧 VERTRIEBSTEXTE (DEUTSCH)

## Hero Section
"Ki-Telefonassistent für Ihr Unternehmen"

## Subheadline
"Fonio übernimmt Ihre Telefonie — 24/7 verfügbar, keine Wartezeiten, immer freundlich."

## Use Cases

### Front-Desk
"Ihre Ki-Rezeptionistin nimmt Anrufe entgegen, beantwortet Fragen und transferiert — ohne Wartezeit."

### Transkription
"Jeder Anruf wird dokumentiert. Nie wieder wichtige Informationen vergessen."

### Kundenbetreuung
"24/7 Kundenbetreuung ohne Personalkosten. Konfigurierbar für jede Situation."

### Terminbuchung
"Termine werden direkt telefonisch gebucht — ohne Wartezeit, ohne Back-and-Forth."

## Testimonials
"Wir haben DEVCALL im Einsatz und sind begeistert. Unsere Kunden erreichen uns jetzt 24/7."
— Paul Urban, Luum

"Die besten KI-Telefonassistent auf Deutsch. Absolut empfehlenswert!"
— Michael Kowatschew, Morgen Ventures

---

# 📋 CODEX PROMPT

```
Build DEVCALL — an AI Phone Assistant Platform like a professional telephony system.

Tech Stack:
- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- Prisma + PostgreSQL (Supabase)
- Clerk for authentication
- ElevenLabs for TTS
- Whisper for STT
- Twilio/Plivo for telephony

Core Features:
1. AI Phone Agent — answers calls, FAQ handling, natural conversation
2. Call Transcription — all calls transcribed and searchable
3. Outbound Calls API — bulk calling, notifications, reminders
4. Appointment Scheduling — cal.com integration
5. Team Management — multi-user, roles, notifications
6. Analytics Dashboard — call stats, AI performance

Architecture:
- Subagent-based design for scalability
- Message queue for background jobs
- RESTful API for integrations

Pages:
1. Landing page (public) with pricing
2. Dashboard (authenticated) with stats and recent calls
3. Calls list (filterable, searchable)
4. Call detail (transcript, recording, action items)
5. AI Agent configuration (voice, FAQ, transfer rules)
6. Phone Numbers management (buy, port, configure)
7. Transcripts (searchable, exportable)
8. Analytics (charts, peak hours, AI performance)
9. Integrations (cal.com, HubSpot, Zapier)
10. Settings (profile, team, notifications, billing)
11. API documentation page

Database schema ready.

Design specs in SPEC.md.

Build production-ready, not prototype.
All features must be fully implemented.
```

---

# ✅ ERFOLGSKRITERIEN

1. User can sign up/login with email or OAuth
2. User can purchase phone number
3. User can port existing number
4. User can configure AI agent (voice, FAQ, transfer rules)
5. Inbound calls are answered by AI
6. Transcripts are generated automatically
7. Calls can be transferred to human
8. cal.com integration works for appointment booking
9. API can initiate outgoing calls
10. Analytics show call statistics
11. Mobile responsive design
12. Dark mode works
13. Production build succeeds without errors
14. No console errors in production
15. GDPR compliant (EU data storage)
16. 99.9% uptime SLA achievable

---

# 🧪 TESTING REQUIREMENTS

## Unit Tests
- API endpoint tests
- Component rendering tests
- Utility function tests

## Integration Tests
- Payment flow
- Email notifications
- Calendar sync

## E2E Tests
- Full call flow (inbound)
- Full call flow (outbound)
- User onboarding

## Performance Tests
- Concurrent calls handling
- API response times
- Database query optimization

---

Build this completely. Make it production-ready. Every feature must work.
