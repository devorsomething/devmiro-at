# DEVCALL — Meeting Intelligence SaaS
## Vollständiger Codex Prompt zum Bauen

---

# 🎯 PROJEKT BESCHREIBUNG

**Name:** DEVCALL
**Positioning:** "Meeting Intelligence for Modern Teams"
**Kernwert:** AI-powered meeting notes that actually get used
**Markt:** Österreich, DACH-Region, KMUs

---

# 📋 FEATURES (Komplette Liste)

## 1. Meeting Management

### 1.1 Meeting Creation
- Quick Create: Title, Date, Time, Participants
- Calendar Integration: Google Calendar, Outlook, Apple Calendar
- Video Platform Integration: Zoom, Google Meet, Microsoft Teams
- Recurring Meetings: Daily, Weekly, Monthly
- Meeting Templates: Standard, Standup, 1-on-1, Brainstorm

### 1.2 Real-time Transcription
- Browser-based recording
- Speaker Identification (automatic name detection)
- Multi-language Support (German, English, etc.)
- Punctuation & Formatting
- Offline Recording Support
- Audio Playback with Transcript Sync

### 1.3 AI-Powered Summaries
- Automatic Summary Generation (GPT-4)
- Customizable Summary Templates
- Key Points Extraction
- Decisions Made Tracking
- Meeting Highlights (Timestamps)
- Sentiment Analysis

### 1.4 Action Items
- Task Extraction from Conversation
- Assignee Identification (AI detects who should do what)
- Due Date Suggestions (AI suggests based on context)
- Priority Levels (High, Medium, Low)
- Follow-up Reminders (automatic)
- Status Tracking (Open, In Progress, Done)
- Recurring Task Templates

### 1.5 Team Collaboration
- Shared Meeting Library
- Team Members with Roles (Admin, Editor, Viewer)
- Activity Feed
- @Mentions in Notes
- Comments & Reactions
- Meeting Sharing (link, email)

### 1.6 Search & Find
- Full-text Search across all meetings
- Filter by: Date, Participant, Team, Tags, Status
- Search within Transcript
- Search within Action Items
- Search Highlights
- Export Options (PDF, DOCX, Markdown, Notion)

---

## 2. User Management

### 2.1 Authentication
- Email/Password
- Google OAuth
- Microsoft OAuth
- SSO/SAML (Enterprise)

### 2.2 User Profiles
- Name, Email, Avatar
- Timezone Settings
- Language Preference
- Notification Settings
- Meeting History
- Action Items assigned to me

### 2.3 Team Management
- Create/Join Teams
- Invite Members (email, link)
- Roles: Owner, Admin, Member, Guest
- Permissions System
- Team Settings

---

## 3. Integrations

### 3.1 Calendar
- Google Calendar (2-way sync)
- Outlook Calendar (2-way sync)
- Apple Calendar (read-only)
- Automatic Event Creation

### 3.2 Video Platforms
- Zoom: Auto-join and record
- Google Meet: Auto-join and record
- Microsoft Teams: Auto-join and record
- In-Person: Browser recording

### 3.3 Productivity Tools
- Notion (export summaries)
- Slack (notifications)
- Linear (create tasks)
- Asana (create tasks)
- Jira (create tasks)
- Salesforce (link meetings to deals)

### 3.4 Zapier/Make
- Webhooks (triggers)
- 5000+ app integrations

---

## 4. Enterprise Features

### 4.1 Security
- SOC 2 Type II
- GDPR Compliant
- Data Encryption (at rest, in transit)
- SSO/SAML
- 2FA

### 4.2 Analytics
- Meeting Analytics Dashboard
- Action Item Completion Rates
- Team Usage Stats
- Time Saved Calculator

### 4.3 API
- REST API
- Webhooks
- Custom Integrations

### 4.4 Custom Branding
- Custom Domain
- White-label
- Custom Colors/Logo

---

## 5. Pricing Tiers

| Feature | Free | Pro ($19/mo) | Team ($49/mo) | Enterprise |
|---------|------|--------------|----------------|------------|
| Meetings/mo | 5 | Unlimited | Unlimited | Unlimited |
| Transcription | 60 min | 8 hours | Unlimited | Unlimited |
| Team Members | 1 | 5 | Unlimited | Unlimited |
| Storage | 1 GB | 100 GB | 1 TB | Unlimited |
| AI Summaries | Basic | Advanced | Advanced | Advanced |
| Action Items | Basic | Advanced | Advanced | Advanced |
| Integrations | 3 | 10 | Unlimited | Unlimited |
| API Access | ❌ | ❌ | ✅ | ✅ |
| SSO | ❌ | ❌ | ❌ | ✅ |
| SLA | ❌ | ❌ | 99.9% | 99.99% |

---

# 🎨 UI/UX DESIGN SPEC

## Color Palette

### Light Mode
```css
--background: #FFFFFF;
--background-secondary: #F8F9FA;
--foreground: #1A1A1A;
--foreground-secondary: #6B7280;
--foreground-muted: #9CA3AF;

--primary: #4F46E5;      /* Indigo */
--primary-hover: #4338CA;
--primary-foreground: #FFFFFF;

--secondary: #F3F4F6;
--secondary-hover: #E5E7EB;

--accent: #10B981;        /* Emerald */
--accent-hover: #059669;

--destructive: #EF4444;
--warning: #F59E0B;
--success: #10B981;

--border: #E5E7EB;
--border-hover: #D1D5DB;

--ring: #4F46E5;

--card: #FFFFFF;
--card-hover: #F9FAFB;
```

### Dark Mode
```css
--background: #0F0F0F;
--background-secondary: #1A1A1A;
--foreground: #FAFAFA;
--foreground-secondary: #A1A1AA;
--foreground-muted: #71717A;

--primary: #6366F1;
--primary-hover: #818CF8;
--primary-foreground: #FFFFFF;

--secondary: #27272A;
--secondary-hover: #3F3F46;

--accent: #34D399;
--accent-hover: #10B981;

--destructive: #F87171;
--warning: #FBBF24;
--success: #34D399;

--border: #27272A;
--border-hover: #3F3F46;

--ring: #6366F1;

--card: #1A1A1A;
--card-hover: #27272A;
```

## Typography

```css
/* Fonts */
--font-display: 'Inter', system-ui, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Sizes */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;         /* 16px */
--text-lg: 1.125rem;      /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */

/* Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* Line Heights */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

## Spacing System

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
```

## Border Radius

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.5rem;    /* 8px */
--radius-lg: 0.75rem;   /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;
```

## Shadows

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

## Animations

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-normal: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);

/* Keyframes */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { transform: translateY(10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes slideDown {
  from { transform: translateY(-10px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

# 📄 PAGE STRUCTURE

## 1. Landing Page (Public)

### Hero Section
- Headline: "Machen Sie Ihre Meetings produktiver"
- Subheadline: "DEVCALL transkribiert, fasst zusammen und extrahiert Action Items — automatisch."
- CTA: "Kostenlos starten" → Sign Up
- Secondary CTA: "Demo ansehen"
- Background: Animated gradient mesh or subtle particles

### Social Proof
- Logos: "Vertrauen von X Unternehmen"
- Stats: "100.000+ Meetings transkribiert"
- Testimonials: 3 cards with avatar, quote, name, title

### Features Section
- 6 feature cards in 2x3 grid
- Each card: Icon, Title, Short description
- Hover: Subtle lift + shadow

### How It Works
- 3 steps: "Meeting starten" → "Aufnehmen" → "Zusammenfassung erhalten"
- Animated timeline

### Pricing Section
- 4 pricing cards
- Highlight "Pro" tier
- FAQ accordion

### CTA Section
- Full-width gradient background
- "Starten Sie noch heute"
- Email input + CTA button

### Footer
- Logo
- Links: Features, Pricing, Blog, Careers
- Legal: Privacy, Terms
- Social: Twitter, LinkedIn

---

## 2. Dashboard (Authenticated)

### Layout
- Sidebar (collapsible) with:
  - Logo
  - Navigation: Dashboard, Meetings, Team, Settings
  - User avatar at bottom
- Main content area

### Dashboard Page
#### Stats Row
- Meetings This Week (card with sparkline)
- Action Items Open (card with count)
- Team Activity (card)
- Time Saved (card with € or hours)

#### Upcoming Meetings
- List of next 5 meetings
- Each: Title, Time, Participants avatars, "Join" button

#### Recent Meetings
- List of last 5 meetings
- Each: Title, Date, Duration, Summary preview

#### My Action Items
- Tasks assigned to me
- Filter by: All, Open, Done
- Sort by: Due Date, Priority

#### Team Activity
- Feed of recent actions
- "Sarah created meeting X" etc.

---

## 3. Meetings List Page

### Header
- Title: "Meetings"
- Search bar
- Filters: Date range, Participants, Tags
- "New Meeting" button

### View Toggle
- Grid view (cards)
- List view (table)

### Meeting Cards/Rows
- Title
- Date/Time
- Duration
- Participants (avatars)
- Summary preview (2 lines)
- Action Items count
- Status badge

### Bulk Actions
- Select multiple
- Export selected
- Delete selected

---

## 4. Meeting Detail Page

### Layout
3-panel layout:

#### Left Panel: Transcript
- Speaker name + timestamp
- Text blocks
- Click to jump to timestamp
- Edit capability

#### Center Panel: Summary
- AI-generated summary
- Key points list
- Decisions made
- Edit capability

#### Right Panel: Action Items
- Task title
- Assignee avatar
- Due date
- Priority badge
- Status toggle

### Top Bar
- Meeting title (editable)
- Date/Time
- Participants
- Duration
- Recording status indicator
- Share button
- Export button
- Delete button

### Transcript Editor
- Inline editing
- Speaker name correction
- Timestamp adjustment

### AI Summary Editor
- Edit generated summary
- Regenerate button
- Template selector

### Action Item Editor
- Add new task
- Edit task
- Assign to team member
- Set due date
- Set priority

---

## 5. Settings Page

### Tabs
- Profile
- Team
- Integrations
- Billing
- Security

### Profile Tab
- Avatar upload
- Name, Email, Title
- Timezone
- Language
- Notification preferences

### Team Tab
- Team name
- Members list with roles
- Invite member (email)
- Remove member
- Change role

### Integrations Tab
- Google Calendar: Connect/Disconnect
- Zoom: Connect/Disconnect
- Slack: Connect/Disconnect
- Notion: Connect/Disconnect
- API Keys management

### Billing Tab
- Current plan
- Usage stats
- Upgrade/Downgrade
- Invoice history
- Cancel subscription

### Security Tab
- Change password
- 2FA toggle
- Active sessions
- API tokens

---

## 6. Onboarding

### Step 1: Welcome
- "Willkommen bei DEVCALL"
- Video intro (60 seconds)
- "Next" button

### Step 2: Calendar Connect
- "Verbinden Sie Ihren Kalender"
- Google Calendar OAuth button
- Outlook OAuth button
- Skip option

### Step 3: First Meeting
- "Erstellen Sie Ihr erstes Meeting"
- Quick create form
- "Start Recording" when ready

### Step 4: Invite Team
- "Laden Sie Ihr Team ein"
- Email input
- Skip option

### Step 5: Done
- "Sie sind bereit!"
- Dashboard CTA

---

# 🗄️ DATABASE SCHEMA (Prisma)

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  avatarUrl     String?
  passwordHash  String?
  timezone      String    @default("Europe/Vienna")
  language      String    @default("de")
  emailVerified Boolean   @default(false)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  accounts      Account[]
  sessions      Session[]
  teamMemberships TeamMembership[]
  ownedTeams    Team[]      @relation("TeamOwner")
  meetingsCreated Meeting[]  @relation("MeetingCreator")
  actionItemsAssigned ActionItem[] @relation("ActionItemAssignee")
}

model Team {
  id        String   @id @default(cuid())
  name      String
  slug      String   @unique
  plan      TeamPlan @default(FREE)
  logoUrl   String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  ownerId   String
  owner     User     @relation("TeamOwner", fields: [ownerId], references: [id])
  
  members   TeamMembership[]
  meetings  Meeting[]
  invites   TeamInvite[]
}

model TeamMembership {
  id        String   @id @default(cuid())
  role      TeamRole @default(MEMBER)
  createdAt DateTime @default(now())

  userId    String
  user      User     @relation(fields: [userId], references: [id])
  teamId    String
  team      Team     @relation(fields: [teamId], references: [id])

  @@unique([userId, teamId])
}

model TeamInvite {
  id        String   @id @default(cuid())
  email     String
  role      TeamRole @default(MEMBER)
  token     String   @unique
  expiresAt DateTime
  createdAt DateTime @default(now())

  teamId    String
  team      Team     @relation(fields: [teamId], references: [id])
}

model Meeting {
  id            String    @id @default(cuid())
  title         String
  scheduledAt   DateTime?
  duration      Int?       // minutes
  status        MeetingStatus @default(SCHEDULED)
  
  // Transcription
  transcriptUrl String?
  transcriptRaw String?
  
  // AI Generated
  summaryText  String?
  keyPoints    Json?      // ["point1", "point2"]
  decisions     Json?      // ["decision1", "decision2"]
  
  // Metadata
  recordingUrl  String?
  calendarEventId String?
  videoPlatform MeetingPlatform?
  
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt

  teamId        String
  team          Team      @relation(fields: [teamId], references: [id])
  
  creatorId     String
  creator      User      @relation("MeetingCreator", fields: [creatorId], references: [id])
  
  participants  MeetingParticipant[]
  transcript   TranscriptEntry[]
  actionItems  ActionItem[]
  speakers     Speaker[]
}

model MeetingParticipant {
  id        String   @id @default(cuid())

  userId    String?
  user      User?    @relation(fields: [userId], references: [id])
  
  meetingId String
  meeting   Meeting  @relation(fields: [meetingId], references: [id])
  
  email     String   // For external participants
  name      String
  avatarUrl String?
}

model TranscriptEntry {
  id         String   @id @default(cuid())
  
  meetingId String
  meeting   Meeting  @relation(fields: [meetingId], references: [id])
  
  speakerId String?
  speaker   Speaker? @relation(fields: [speakerId], references: [id])
  
  startTime Float    // seconds
  endTime   Float    // seconds
  text      String
  
  createdAt DateTime @default(now())
}

model Speaker {
  id        String   @id @default(cuid())
  
  meetingId String
  meeting   Meeting  @relation(fields: [meetingId], references: [id])
  
  name      String
  email     String?
  avatarUrl String?
  
  entries   TranscriptEntry[]
}

model ActionItem {
  id          String   @id @default(cuid())
  title       String
  description String?
  status      ActionStatus @default(OPEN)
  priority    Priority @default(MEDIUM)
  dueDate     DateTime?
  
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  meetingId   String
  meeting     Meeting  @relation(fields: [meetingId], references: [id])
  
  assigneeId   String?
  assignee     User?    @relation("ActionItemAssignee", fields: [assigneeId], references: [id])
}

model Account {
  id                String  @id @default(cuid())
  userId             String
  type               String
  provider           String
  providerAccountId   String
  refresh_token      String?
  access_token       String?
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String?
  
  user User @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime
  
  @@unique([identifier, token])
}

enum TeamPlan {
  FREE
  PRO
  TEAM
  ENTERPRISE
}

enum TeamRole {
  OWNER
  ADMIN
  MEMBER
  GUEST
}

enum MeetingStatus {
  SCHEDULED
  IN_PROGRESS
  COMPLETED
  CANCELLED
}

enum MeetingPlatform {
  ZOOM
  GOOGLE_MEET
  TEAMS
  IN_PERSON
  OTHER
}

enum ActionStatus {
  OPEN
  IN_PROGRESS
  DONE
  CANCELLED
}

enum Priority {
  LOW
  MEDIUM
  HIGH
  URGENT
}
```

---

# 🔌 API ENDPOINTS

## Authentication
```
POST   /api/auth/register        # Email/Password registration
POST   /api/auth/login         # Email/Password login
POST   /api/auth/logout        # Logout
GET    /api/auth/session        # Get current session
POST   /api/auth/google        # Google OAuth
POST   /api/auth/microsoft     # Microsoft OAuth
```

## Users
```
GET    /api/users/me            # Current user profile
PATCH  /api/users/me           # Update profile
DELETE /api/users/me           # Delete account
```

## Teams
```
GET    /api/teams              # List user's teams
POST   /api/teams              # Create team
GET    /api/teams/:id          # Get team details
PATCH  /api/teams/:id           # Update team
DELETE /api/teams/:id           # Delete team

GET    /api/teams/:id/members   # List members
POST   /api/teams/:id/members/invite  # Invite member
DELETE /api/teams/:id/members/:userId # Remove member
PATCH  /api/teams/:id/members/:userId # Change role
```

## Meetings
```
GET    /api/meetings            # List meetings (with filters)
POST   /api/meetings            # Create meeting
GET    /api/meetings/:id        # Get meeting details
PATCH  /api/meetings/:id        # Update meeting
DELETE /api/meetings/:id        # Delete meeting

POST   /api/meetings/:id/start-recording    # Start recording
POST   /api/meetings/:id/stop-recording     # Stop recording
POST   /api/meetings/:id/transcribe         # Transcribe audio
POST   /api/meetings/:id/summarize          # Generate AI summary
POST   /api/meetings/:id/extract-actions    # Extract action items
```

## Action Items
```
GET    /api/meetings/:id/actions      # List action items for meeting
POST   /api/meetings/:id/actions     # Create action item
PATCH  /api/actions/:id              # Update action item
DELETE /api/actions/:id              # Delete action item
```

## Integrations
```
GET    /api/integrations              # List connected integrations
POST   /api/integrations/google/connect    # Google OAuth
POST   /api/integrations/zoom/connect      # Zoom OAuth
POST   /api/integrations/slack/connect     # Slack OAuth
DELETE /api/integrations/:id          # Disconnect integration
```

## Billing
```
GET    /api/billing                 # Get subscription
POST   /api/billing/checkout        # Create checkout session
POST   /api/billing/portal          # Customer portal
POST   /api/billing/webhook        # Stripe webhook
```

---

# 🛠️ TECH STACK

## Frontend
- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS v4
- **UI Components:** shadcn/ui
- **State:** Zustand
- **Forms:** React Hook Form + Zod
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Charts:** Recharts

## Backend
- **Framework:** Next.js API Routes
- **Database:** PostgreSQL (Supabase)
- **ORM:** Prisma
- **Auth:** Clerk
- **Storage:** AWS S3 / R2
- **Real-time:** Socket.io (for live transcription)

## AI/ML
- **Transcription:** OpenAI Whisper API
- **Summaries:** OpenAI GPT-4 Turbo
- **Embeddings:** OpenAI text-embedding-3

## Infrastructure
- **Deploy:** Vercel (Frontend) + Coolify (Backend)
- **Database:** Supabase
- **Storage:** Cloudflare R2
- **Monitoring:** Sentry
- **Analytics:** Plausible

---

# 🚀 DEPLOYMENT CHECKLIST

## Environment Variables

```env
# Database
DATABASE_URL="postgresql://..."

# Auth
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="pk_..."
CLERK_SECRET_KEY="sk_..."

# AI
OPENAI_API_KEY="sk-..."

# Storage
R2_ACCOUNT_ID="..."
R2_ACCESS_KEY_ID="..."
R2_SECRET_ACCESS_KEY="..."
R2_BUCKET_NAME="..."
R2_PUBLIC_URL="https://..."

# App
NEXT_PUBLIC_APP_URL="https://devcall.io"
```

## Database Setup

```bash
# Push schema
npx prisma db push

# Generate Prisma Client
npx prisma generate

# Create indexes
# (Handled by Prisma)
```

## Build & Deploy

```bash
# Install dependencies
npm install

# Build
npm run build

# Deploy to Vercel
vercel --prod
```

---

# 📧 SALES COPY (German)

## Hero
"Machen Sie Ihre Meetings produktiver"

## Subheadline
"DEVCALL transkribiert automatisch, fasst zusammen und extrahiert Action Items — damit Sie sich auf das Wesentliche konzentrieren können."

## Features Descriptions

### Transcription
"Echtzeit-Transkription in Minuten. Kein Wort geht verloren."

### AI Summaries
"Automatische Zusammenfassungen die Sie nie selbst schreiben müssen."

### Action Items
"Extraktion von Aufgaben mit Verantwortlichen und Fälligkeitsdaten."

## Pricing

### Free
"Für Einzelpersonen"
- 5 Meetings/Monat
- 60 Min Transkription
- Basic Summaries
- Google Calendar Integration

### Pro
"Für Professionals"
- Unlimited Meetings
- 8 Stunden Transkription
- Advanced AI Summaries
- Alle Integrationen
- Priority Support

### Team
"Für Teams"
- Everything in Pro
- Unlimited Team Members
- Admin Dashboard
- API Access
- SSO (bald)

---

# 📋 PROMPT FÜR CODEX

Copy this to Codex/claude code:

```
Build DEVCALL — a Meeting Intelligence SaaS like fonio.io.

Tech Stack:
- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- Prisma + PostgreSQL
- Clerk for auth
- OpenAI Whisper + GPT-4

Pages:
1. Landing page (public)
2. Dashboard (authenticated)
3. Meetings list
4. Meeting detail (3-panel: transcript + summary + actions)
5. Settings (profile, team, integrations, billing)
6. Onboarding wizard

Design specs in SPEC.md.

Database schema in schema.prisma.

API endpoints documented.

Build production-ready, not prototype.
```

---

# 📁 FILE STRUCTURE

```
devcall/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                    # Landing
│   ├── dashboard/
│   │   ├── layout.tsx              # Dashboard sidebar
│   │   ├── page.tsx               # Dashboard home
│   │   └── meetings/
│   │       ├── page.tsx           # Meetings list
│   │       └── [id]/
│   │           └── page.tsx        # Meeting detail
│   ├── settings/
│   │   └── page.tsx               # Settings
│   ├── auth/
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   └── layout.tsx
│   └── api/
│       ├── auth/
│       ├── meetings/
│       ├── teams/
│       └── billing/
├── components/
│   ├── ui/                        # shadcn components
│   ├── layout/
│   │   ├── sidebar.tsx
│   │   ├── header.tsx
│   │   └── footer.tsx
│   ├── dashboard/
│   │   ├── stats-card.tsx
│   │   ├── meeting-card.tsx
│   │   └── action-item.tsx
│   ├── meetings/
│   │   ├── transcript-panel.tsx
│   │   ├── summary-panel.tsx
│   │   └── actions-panel.tsx
│   └── landing/
│       ├── hero.tsx
│       ├── features.tsx
│       ├── pricing.tsx
│       └── testimonials.tsx
├── lib/
│   ├── prisma.ts
│   ├── auth.ts
│   ├── openai.ts
│   └── utils.ts
├── prisma/
│   └── schema.prisma
├── public/
│   └── ...
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

# ✅ SUCCESS CRITERIA

1. User can sign up/login with email or Google
2. User can create a meeting
3. User can upload/transcribe audio
4. AI generates summary
5. AI extracts action items
6. User can manage action items (complete, assign, due date)
7. User can search meetings
8. User can invite team members
9. User can connect Google Calendar
10. Landing page converts (CTA clicks)
11. Mobile responsive
12. Dark mode works
13. Production build succeeds
14. No console errors

---

Build this completely. Make it production-ready.
