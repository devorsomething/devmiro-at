# FONIO.AI — AI Phone Assistant Clone
## Vollständiger Codex Prompt zum Bauen

---

# 🎯 PROJEKT BESCHREIBUNG

**Name:** DEVCALL (oder neuer Name)
**Original:** fonio.ai
**Positioning:** "AI Calls Made Easy"
**Kernwert:** KI-Telefonassistent für Unternehmen — 24/7 verfügbar, keine Wartezeiten, immer freundlich
**Markt:** Deutschland, Österreich, Schweiz (DACH), Europa
**Sprache:** Deutsch (primär), Englisch
**Tagline:** "Machen Sie Ihre Telefonie intelligent"

---

# 📞 USE CASES (Kernfunktionen)

## 1. Front-Desk (Empfang)
- AI nimmt Anrufe entgegen
- Beantwortet häufige Fragen (FAQ)
- Transferiert gezielt an richtige Abteilungen/Mitarbeiter
- Nimmt Messages auf wenn niemand verfügbar
- Klingelt gleichzeitig mit Büro oder nur extern

## 2. Transcription (Transkription)
- Kundenanfragen werden transkribiert
- Per Email an Team weiterleiten
- Unbeantwortete Anrufe = Transkript in Inbox
- Suchbar archiviert

## 3. Customer Service (Kundenservice)
- 24/7 AI für Kundenanfragen
- Konfigurierbare Responses
- Edge Cases abgedeckt
- Eskalation an mensch wenn nötig

## 4. Order Processing (Auftragsbearbeitung)
- Bestellungen telefonisch aufnehmen
- Automatische Verarbeitung
- 24/7 verfügbar
- Schnelle Antwortzeiten

## 5. Appointment Scheduling (Terminbuchung)
- Termine direkt während des Anrufs buchen
- Integration mit cal.com
- Alle Kalender die cal.com unterstützt
- Automatische Erinnerungen

## 6. Outgoing Calls (Ausgehende Anrufe)
- API für主动性 Anrufe
- Personalisierte Ansagen (mit Variablen wie Name)
- Status-Callbacks
- Bulk Calling für Erinnerungen

---

# 🔧 TECHNISCHE ARCHITEKTUR

## Stack
- **Frontend:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Voice AI:** Voiceflow, ElevenLabs, or self-hosted (VITS, XTTS)
- **Telephony:** Twilio, Plivo, or Telnyx
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Auth:** Clerk oder NextAuth
- **Email:** Resend, SendGrid
- **Scheduling:** cal.com API
- **Deployment:** Coolify / Vercel

## Speech-to-Text
- Whisper API (OpenAI)
- oder: Deepgram, AssemblyAI
- Deutsche Sprache optimiert

## Text-to-Speech
- ElevenLabs (high quality)
- oder: VITS, Coqui TTS
- Male/Female Stimmen
- Friendly vs Professional Tone

## Voice AI Engine
- Own orchestration layer (wie fonio)
- Dialog Management
- Context Retention
- Transfer Logic

---

# 📊 PRICING MODEL (VORLAGE)

| Plan | Preis | Min/Monat | Features |
|------|-------|-----------|----------|
| Starter | €85/Mo | 500 Min | Front-Desk, Transcription |
| Professional | €199/Mo | 1.500 Min | + Customer Service, Scheduling |
| Business | €399/Mo | 3.000 Min | + Order Processing, API |
| Enterprise | Custom | Unlimited | + Custom Integration, SLA |

**Berechnung:** 22 Arbeitstage × 8 Stunden × €35/h = €6.160 gesparte Personalkosten

---

# 📋 FEATURES (KOMPLETTE LISTE)

## Phone Configuration
| Feature | Beschreibung |
|---------|-------------|
| Phone Number Purchase | Lokale Nummer in DE/AT/CH |
| Number Porting | Bestehende Nummer mitnehmen |
| Call Forwarding | Anrufweiterleitung konfigurieren |
| Business Hours | Öffnungszeiten setzen |
| IVR Menu | Sprachmenü mit Tasten |
| Voicemail | Voicemail wenn AI nicht rangeht |

## AI Configuration
| Feature | Beschreibung |
|---------|-------------|
| AI Voice | Male/Female wählen |
| AI Personality | Friendly / Professional / Neutral |
| Language | Deutsch, Englisch, etc. |
| Greeting | Custom Willkommensnachricht |
| FAQ Training | Fragen und Antworten hinterlegen |
| Transfer Rules | Wann wird transferiert |
| Escalation | Wann eskaliert AI |
| Hold Music | Wartemusik / Ansage |

## Integrations
| Integration | Beschreibung |
|-------------|-------------|
| cal.com | Terminbuchung |
| Google Calendar | Kalender lesen |
| HubSpot | CRM |
| Salesforce | CRM |
| Zapier | Automation |
| API | Outgoing Calls |

## Analytics
| Feature | Beschreibung |
|---------|-------------|
| Call History | Alle Anrufe |
| Transcripts | Alle Transkripte |
| Call Duration | Gesprächsdaue |
| Peak Hours | Stoßzeiten |
| AI Performance | Erkennungsrate |
| Cost Analysis | Kosten pro Anruf |

## Team Features
| Feature | Beschreibung |
|---------|-------------|
| Multi-User | Teammitglieder |
| Roles | Admin / User |
| Notifications | Email/SMS für Eskalation |
| Transfer List | Wer darf transferiert werden |
| Shared Inbox | Team Postfach |

---

# 🎨 UI/UX DESIGN SPEC

## Color Palette

### Primary (Trust + Professional)
```css
--primary: #4F46E5;        /* Indigo - Trust */
--primary-hover: #4338CA;
--primary-light: #EEF2FF;

--accent: #10B981;          /* Emerald - Success */
--accent-hover: #059669;

--background: #FFFFFF;
--background-secondary: #F8FAFC;

--text-primary: #111827;
--text-secondary: #6B7280;

--border: #E5E7EB;
--border-hover: #D1D5DB;

--destructive: #EF4444;
--warning: #F59E0B;
--success: #10B981;
```

### Dark Mode
```css
--background: #0F0F0F;
--background-secondary: #1A1A1A;

--primary: #6366F1;
--accent: #34D399;

--text-primary: #F9FAFB;
--text-secondary: #9CA3AF;

--border: #2D2D2D;
```

## Typography
```css
--font-sans: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', monospace;

--text-xs: 0.75rem;     /* 12px */
--text-sm: 0.875rem;    /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;    /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;     /* 24px */
--text-3xl: 1.875rem;   /* 30px */
--text-4xl: 2.25rem;    /* 36px */
```

## Animations
```css
--transition-fast: 150ms ease;
--transition-normal: 200ms ease;
--transition-slow: 300ms ease;

@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(1.5); opacity: 0; }
}

@keyframes wave {
  0%, 100% { transform: scaleY(1); }
  50% { transform: scaleY(0.6); }
}
```

---

# 📄 PAGES (STRUKTUR)

## 1. Landing Page (Public)

### Hero Section
- Headline: "KI-Telefonassistent für Ihr Unternehmen"
- Subheadline: "Fonio übernimmt Ihre Telefonie — 24/7 verfügbar, keine Wartezeiten, immer freundlich."
- CTA: "Kostenlos testen"
- Visual: Animated phone + AI wave animation

### Use Cases Grid (6 Cards)
1. Front-Desk
2. Transcription
3. Customer Service
4. Order Processing
5. Appointment Scheduling
6. API & Outgoing

### Social Proof
- Testimonials (3 German companies)
- Logos: "Used by X companies"
- Stats: "X minutes calls handled"

### How It Works (3 Steps)
1. "Nummer auswählen oder mitnehmen"
2. "AI konfigurieren (10 Minuten)"
3. "Fertig — AI nimmt ab"

### Pricing Section
- 4 pricing cards
- Calculator for savings
- FAQ accordion

### Footer
- Links: Features, Pricing, Blog, API, Legal
- Contact: Austria HQ

---

## 2. Dashboard (Authenticated)

### Layout
- Sidebar: Logo, Navigation, User
- Main content area

### Dashboard Home
#### Stats Cards Row
- Total Calls (this month)
- Avg Call Duration
- AI Resolution Rate (%)
- Monthly Cost

#### Recent Calls
- Last 10 calls
- Status: Answered, Missed, Transferred
- Quick play transcript

#### Pending Actions
- Unhandled inquiries
- Follow-ups needed
- New messages

#### Quick Actions
- "Neuen Anruf starten"
- "Konfiguration"
- "Analytics"

---

## 3. Phone Numbers Page

### Number List
- Active numbers with status
- Add new number button

### Number Detail
- Phone number
- Assigned AI
- Call forwarding settings
- Business hours
- IVR menu config

### Number Purchase
- Country: DE / AT / CH
- Number type: Local / Toll-Free
- Selection UI

---

## 4. AI Configuration Page

### Voice Settings
- Voice selection (Male/Female)
- Personality (Friendly/Professional)
- Language
- Speed
- Test playback

### Greeting Editor
- Record greeting
- Text-to-Speech preview
- Multiple greetings for different times

### FAQ Builder
- Add Q&A pairs
- Bulk import
- Categories
- Training status

### Transfer Rules
- Who can be transferred to
- Direct dial extensions
- Voicemail fallback

### Escalation Settings
- When to escalate (keywords, sentiment)
- How to escalate (transfer, callback request)
- Human fallback

---

## 5. Call History Page

### Filters
- Date range
- Status (All, Answered, Missed, Transferred)
- Duration
- Number

### Call List (Table)
- Date/Time
- Caller Number
- Duration
- Status badge
- AI / Human indicator
- Play/View transcript button

### Call Detail Modal
- Full transcript
- Audio playback with waveform
- Notes
- Tags
- Export

---

## 6. Transcripts Page

### List View
- All transcripts searchable
- Filter by date, topic, status
- Sent to team indicator

### Transcript Detail
- Full conversation
- Speaker labels (AI / Caller)
- Timestamp per segment
- Key points extracted
- Action items
- Export options

---

## 7. Analytics Page

### Overview Cards
- Total calls
- Total minutes
- Avg duration
- Cost

### Charts
- Calls per day (line)
- Call duration distribution (bar)
- Resolution rate (gauge)
- Peak hours heatmap

### AI Performance
- Recognition accuracy
- Common questions
- Unanswered topics

### Export
- CSV, PDF
- Date range selection

---

## 8. Integrations Page

### Available Integrations
- cal.com (Appointment Scheduling)
- Google Calendar
- HubSpot
- Salesforce
- Zapier
- API Keys

### Integration Cards
- Icon + Name
- Status: Connected / Not connected
- Connect/Disconnect button
- Configuration link

---

## 9. Settings Page

### Tabs
- Profile
- Team
- Notifications
- Billing
- Security

### Profile Tab
- Name, Email, Avatar
- Timezone
- Language

### Team Tab
- Team members list
- Invite member
- Roles and permissions

### Notifications Tab
- Email notifications
- SMS for escalations
- Daily digest

### Billing Tab
- Current plan
- Usage this month
- Invoice history
- Upgrade/Cancel

---

## 10. API Page (for Developers)

### API Documentation
- Base URL
- Authentication
- Endpoints
- Request/Response examples

### API Keys
- Create key
- Revoke key
- Usage stats

### Webhooks
- Configure webhooks
- Event types
- Payload examples

---

# 🗄️ DATABASE SCHEMA

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  avatarUrl     String?
  passwordHash  String?
  timezone      String    @default("Europe/Berlin")
  language      String    @default("de")
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  teamMemberships TeamMember[]
  calls           Call[]
  transcripts     Transcript[]
}

model Team {
  id        String   @id @default(cuid())
  name      String
  plan      TeamPlan @default(STARTER)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  members   TeamMember[]
  phoneNumbers PhoneNumber[]
  ais       AIConfig[]
  calls     Call[]
}

model TeamMember {
  id        String   @id @default(cuid())
  role      TeamRole @default(USER)
  createdAt DateTime @default(now())

  userId    String
  user      User     @relation(fields: [userId], references: [id])
  teamId    String
  team      Team     @relation(fields: [teamId], references: [id])

  @@unique([userId, teamId])
}

model PhoneNumber {
  id            String   @id @default(cuid())
  number        String   @unique  // +49...
  country       String            // DE, AT, CH
  type          String            // local, tollfree
  status        PhoneStatus @default(ACTIVE)
  
  // Forwarding
  forwardToUser Boolean @default(false)
  forwardNumber String?
  
  // Settings
  businessHours Json?           // { mon: {start, end}, tue: ... }
  ivrEnabled    Boolean @default(false)
  voicemailEnabled Boolean @default(true)
  
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  teamId        String
  team          Team     @relation(fields: [teamId], references: [id])
  
  aiConfigId    String?
  aiConfig      AIConfig? @relation(fields: [aiConfigId], references: [id])
  
  calls         Call[]
}

model AIConfig {
  id        String   @id @default(cuid())
  name      String   // "Rezeption", "Support", etc.
  
  // Voice
  voiceGender VoiceGender @default(FEMALE)
  voiceId     String?      // ElevenLabs voice ID
  personality AI personality @default(FRIENDLY)
  language    String    @default("de-DE")
  speechSpeed Float     @default(1.0)
  
  // Greeting
  greetingType GreetingType @default(TEXT)
  greetingText String?      // TTS text
  greetingAudio String?     // or uploaded audio URL
  
  // FAQ
  faqs         FAQ[]
  
  // Transfer
  transferToUser Boolean @default(true)
  transferList  Json?    // [{name, number, department}]
  transferPrompt String?  // When to transfer
  
  // Escalation
  escalationKeywords Json?  // ["speak to manager", "escalate"]
  escalationAction EscalationAction @default(TRANSFER)
  escalationNumber String?
  
  // Active
  isActive    Boolean @default(true)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  teamId      String
  team        Team    @relation(fields: [teamId], references: [id])
  
  phoneNumbers PhoneNumber[]
  calls       Call[]
}

model FAQ {
  id        String   @id @default(cuid())
  question  String
  answer    String
  category  String?
  priority  Int      @default(0)
  isActive  Boolean  @default(true)
  
  aiConfigId String
  aiConfig  AIConfig @relation(fields: [aiConfigId], references: [id])
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Call {
  id            String   @id @default(cuid())
  sid           String?  // Twilio/Provider SID
  
  direction     CallDirection // INBOUND, OUTBOUND
  
  from          String   // Caller number
  to            String   // Called number (our number)
  
  status        CallStatus // QUEUED, RINGING, ANSWERED, COMPLETED, BUSY, NO_ANSWER, FAILED
  
  duration      Int?     // seconds
  aiDuration    Int?     // seconds handled by AI
  
  startedAt     DateTime?
  answeredAt    DateTime?
  endedAt       DateTime?
  
  // AI
  aiHandled     Boolean @default(false) // AI answered
  humanTransferred Boolean @default(false)
  
  // Recording
  recordingUrl  String?
  
  // Transcript
  transcriptId  String?
  transcript    Transcript?
  
  // Metadata
  tags          String[]
  notes         String?
  
  createdAt     DateTime @default(now())
  
  teamId        String
  team          Team @relation(fields: [teamId], references: [id])
  
  phoneNumberId String
  phoneNumber   PhoneNumber @relation(fields: [phoneNumberId], references: [id])
  
  aiConfigId    String?
  aiConfig      AIConfig? @relation(fields: [aiConfigId], references: [id])
  
  userId        String?   // Who handled if transferred
  user          User?     @relation(fields: [userId], references: [id])
}

model Transcript {
  id        String   @id @default(cuid())
  
  callId    String   @unique
  call      Call     @relation(fields: [callId], references: [id])
  
  text      String   // Full transcript
  language  String   @default("de")
  
  segments  Json     // [{speaker, start, end, text}]
  
  summary   String?  // AI generated summary
  keyPoints Json?     // ["point1", "point2"]
  actionItems Json?   // [{task, assignee, dueDate}]
  
  sentToTeam Boolean @default(false)
  sentAt     DateTime?
  
  createdAt  DateTime @default(now())
  
  userId     String?
  user       User?    @relation(fields: [userId], references: [id])
}

model Integration {
  id        String   @id @default(cuid())
  type      IntegrationType // CAL_COM, HUBSPOT, SALESFORCE, ZAPIER, GOOGLE_CALENDAR
  
  status    IntegrationStatus @default(DISCONNECTED)
  
  accessToken  String?
  refreshToken String?
  expiresAt   DateTime?
  
  config    Json?    // Type-specific config
  
  teamId    String
  team      Team     @relation(fields: [teamId], references: [id])
  
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model ApiKey {
  id        String   @id @default(cuid())
  name      String
  key       String   @unique  // Hashed
  
  lastUsed  DateTime?
  createdAt DateTime @default(now())
  
  teamId    String
  team      Team     @relation(fields: [teamId], references: [id])
}

model Invoice {
  id        String   @id @default(cuid())
  
  amount    Float
  currency  String   @default("EUR")
  status    InvoiceStatus @default(PENDING)
  
  periodStart DateTime
  periodEnd   DateTime
  
  callsIncluded Int
  callsUsed     Int
  extraMinutes  Int
  extraCost     Float @default(0)
  
  createdAt DateTime @default(now())
  
  teamId    String
  team      Team     @relation(fields: [teamId], references: [id])
}

enum TeamPlan {
  STARTER      // €85/mo, 500 min
  PROFESSIONAL // €199/mo, 1500 min
  BUSINESS     // €399/mo, 3000 min
  ENTERPRISE   // Custom
}

enum TeamRole {
  OWNER
  ADMIN
  USER
}

enum PhoneStatus {
  ACTIVE
  SUSPENDED
  CANCELLED
}

enum VoiceGender {
  MALE
  FEMALE
}

enum AIPersonality {
  FRIENDLY
  PROFESSIONAL
  NEUTRAL
}

enum GreetingType {
  TEXT      // TTS
  AUDIO     // Uploaded
  NONE
}

enum EscalationAction {
  TRANSFER
  CALLBACK_REQUEST
  VOICEMAIL
}

enum CallDirection {
  INBOUND
  OUTBOUND
}

enum CallStatus {
  QUEUED
  RINGING
  ANSWERED
  COMPLETED
  BUSY
  NO_ANSWER
  FAILED
}

enum IntegrationType {
  CAL_COM
  HUBSPOT
  SALESFORCE
  ZAPIER
  GOOGLE_CALENDAR
}

enum IntegrationStatus {
  CONNECTED
  DISCONNECTED
  ERROR
}

enum InvoiceStatus {
  PENDING
  PAID
  FAILED
  REFUNDED
}
```

---

# 🔌 API ENDPOINTS

## Authentication
```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/session
```

## Teams
```
GET    /api/teams
POST   /api/teams
GET    /api/teams/:id
PATCH  /api/teams/:id
DELETE /api/teams/:id

GET    /api/teams/:id/members
POST   /api/teams/:id/members/invite
DELETE /api/teams/:id/members/:userId
```

## Phone Numbers
```
GET    /api/phone-numbers
POST   /api/phone-numbers
GET    /api/phone-numbers/:id
PATCH  /api/phone-numbers/:id
DELETE /api/phone-numbers/:id

POST   /api/phone-numbers/purchase
POST   /api/phone-numbers/:id/port
```

## AI Configuration
```
GET    /api/ai-configs
POST   /api/ai-configs
GET    /api/ai-configs/:id
PATCH  /api/ai-configs/:id
DELETE /api/ai-configs/:id

GET    /api/ai-configs/:id/faqs
POST   /api/ai-configs/:id/faqs
PATCH  /api/ai-configs/:id/faqs/:faqId
DELETE /api/ai-configs/:id/faqs/:faqId

POST   /api/ai-configs/:id/test-call
```

## Calls
```
GET    /api/calls
GET    /api/calls/:id
POST   /api/calls/:id/notes
POST   /api/calls/:id/tags

POST   /api/calls/:id/transfer
POST   /api/calls/:id/recording
```

## Transcripts
```
GET    /api/transcripts
GET    /api/transcripts/:id
POST   /api/transcripts/:id/send-to-team
GET    /api/transcripts/:id/export
```

## Outgoing Calls (API)
```
POST   /api/calls/outbound
GET    /api/calls/outbound/status/:id
POST   /api/calls/outbound/bulk
```

## Integrations
```
GET    /api/integrations
POST   /api/integrations/:type/connect
DELETE /api/integrations/:id
GET    /api/integrations/:id/status
POST   /api/integrations/:type/sync
```

## Analytics
```
GET    /api/analytics/overview
GET    /api/analytics/calls
GET    /api/analytics/duration
GET    /api/analytics/peak-hours
GET    /api/analytics/export
```

## Billing
```
GET    /api/billing
GET    /api/billing/invoices
GET    /api/billing/usage
POST   /api/billing/checkout
POST   /api/billing/portal
```

---

# 🛠️ VOICE AI IMPLEMENTATION

## Speech-to-Text
```typescript
// Use OpenAI Whisper
const transcript = await openai.audio.transcriptions.create({
  file: audioFile,
  model: "whisper-1",
  language: "de"
});
```

## Text-to-Speech
```typescript
// Use ElevenLabs
const audio = await elevenLabs.speech.toStream({
  text: greetingText,
  voice_id: selectedVoiceId,
  model: "eleven_multilingual_v2"
});
```

## Dialog Flow
```typescript
interface DialogState {
  callId: string;
  step: 'greeting' | 'menu' | 'faq' | 'transfer' | 'voicemail';
  collectedInfo: Record<string, string>;
  transferTarget?: string;
  escalationTriggered: boolean;
}

// State machine for call flow
function handleAIResponse(state: DialogState, userInput: string): DialogState {
  // 1. Check for escalation keywords
  // 2. Match against FAQ
  // 3. Determine next step
  // 4. Generate response
}
```

## Phone Provider Integration (Twilio Example)
```typescript
// Inbound call webhook
app.post('/api/webhooks/twilio', (req, res) => {
  const { From, To, CallSid } = req.body;
  
  // Find phone number in DB
  // Find AI config
  // Start call flow
  
  const twiml = new VoiceResponse();
  twiml.start().stream({
    url: `wss://your-domain.com/api/voice/stream/${CallSid}`
  });
  
  res.type('text/xml').send(twiml.toString());
});
```

---

# 🚀 DEPLOYMENT

## Environment Variables
```env
# Database
DATABASE_URL="postgresql://..."

# Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."

# Voice AI
OPENAI_API_KEY="sk-..."
ELEVENLABS_API_KEY="..."

# Phone (Twilio)
TWILIO_ACCOUNT_SID="..."
TWILIO_AUTH_TOKEN="..."
TWILIO_PHONE_NUMBER="+49..."

# Email
RESEND_API_KEY="re_..."

# App
NEXT_PUBLIC_APP_URL="https://your-domain.com"
```

## Database Setup
```bash
npx prisma db push
npx prisma generate
```

## Build
```bash
npm install
npm run build
```

---

# 📧 SALES COPY (German)

## Hero
"KI-Telefonassistent für Ihr Unternehmen"

## Subheadline
"Fonio übernimmt Ihre Telefonie — 24/7 verfügbar, keine Wartezeiten, immer freundlich."

## Use Cases

### Front-Desk
"Ihre KI-Rezeptionistin nimmt Anrufe entgegen, beantwortet Fragen und transferiert — ohne Wartezeit."

### Transcription
"Jeder Anruf wird dokumentiert. Nie wieder wichtige Informationen vergessen."

### Customer Service
"24/7 Kundenbetreuung ohne Personalkosten. Konfigurierbar für jede Situation."

### Appointment Scheduling
"Termine werden direkt telefonisch gebucht — ohne Wartezeit, ohne Back-and-Forth."

## Testimonials
"Wir haben Fonio im Einsatz und sind begeistert. Unsere Kunden erreichen uns jetzt 24/7."
— Paul Urban, Luum

"Die besten AI-Telefonassistent auf Deutsch. Absolut empfehlenswert!"
— Michael Kowatschew, Morgen Ventures

## Pricing
Ab €85/Monat — weniger als eine Stunde Personal pro Tag.

---

# 📋 PROMPT FÜR CODEX

```
Build DEVCALL — an AI Phone Assistant like fonio.ai.

Tech Stack:
- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- Prisma + PostgreSQL
- Clerk for auth
- ElevenLabs for TTS
- Whisper for STT
- Twilio for telephony

Core Features:
1. Front-Desk AI — answers calls, transfers, takes messages
2. Call Transcription — all calls transcribed and searchable
3. Customer Service AI — 24/7 FAQ handling
4. Appointment Scheduling — cal.com integration
5. Outgoing Calls API — bulk calling, notifications

Pages:
1. Landing page (public)
2. Dashboard (stats, recent calls, quick actions)
3. Phone Numbers (buy, port, configure)
4. AI Configuration (voice, personality, FAQ, transfer rules)
5. Call History (filterable list, playback, transcripts)
6. Transcripts (searchable, exportable)
7. Analytics (charts, peak hours, AI performance)
8. Integrations (cal.com, HubSpot, Zapier, API)
9. Settings (profile, team, notifications, billing)

Database schema ready.

Design specs in design.md.

Build production-ready, not prototype.
```

---

# ✅ SUCCESS CRITERIA

1. User can sign up/login
2. User can purchase/port phone number
3. User can configure AI (voice, FAQ, transfer rules)
4. Inbound calls are answered by AI
5. Transcripts are generated automatically
6. Calls can be transferred to human
7. cal.com integration works
8. API can initiate outgoing calls
9. Analytics show call stats
10. Mobile responsive
11. Dark mode works
12. Production build succeeds
13. No console errors
14. GDPR compliant (EU data)

---

Build this completely. Make it production-ready.
