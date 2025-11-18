# NYCCollegeNav - Build Requirements for Claude Code

## Project Overview
Build a mobile-first web application that helps NYC high school students navigate FAFSA, NYS DREAM Act, and TAP applications. The platform should reduce the $226M in unclaimed aid by making the process simple, accessible, and culturally relevant for underserved communities.

## Core Problem
- 154,000 NYC students experienced homelessness last year
- Students left $226M in unclaimed Pell Grants
- Only 55% of students without FAFSA attend college (vs 90% with FAFSA)
- Complex forms intimidate first-generation, immigrant, and underserved students

## Technical Stack
```
Frontend: Next.js 14+ with App Router
Styling: Tailwind CSS (mobile-first responsive design)
Database: Supabase (PostgreSQL)
Authentication: Supabase Auth
AI Chat: OpenAI API (GPT-4)
SMS: Twilio API
Email: Resend or SendGrid
Hosting: Vercel
Analytics: Vercel Analytics + PostHog
```

## Database Schema

### Users Table
```sql
- id (UUID, primary key)
- email (unique, optional)
- phone (unique, required)
- first_name
- last_name
- high_school_id (foreign key)
- graduation_year
- preferred_language (default: 'en')
- housing_status (stable/temporary/shelter/doubled_up)
- citizenship_status (citizen/permanent_resident/daca/undocumented/other)
- created_at
- updated_at
```

### Schools Table
```sql
- id (UUID, primary key)
- name
- borough
- district_number
- counselor_emails (array)
- total_students
- fafsa_completion_rate
```

### Applications Table
```sql
- id (UUID, primary key)
- user_id (foreign key)
- application_type (FAFSA/DREAM_ACT/TAP/EXCELSIOR)
- status (not_started/in_progress/submitted/completed)
- started_at
- submitted_at
- estimated_aid_amount
```

### Documents Table
```sql
- id (UUID, primary key)
- user_id (foreign key)
- document_type
- status (needed/uploaded/verified)
- reminder_sent_count
```

### Conversations Table
```sql
- id (UUID, primary key)
- user_id (foreign key)
- messages (JSONB array)
- escalated (boolean)
- resolved (boolean)
```

## MVP Features (Priority Order)

### 1. Smart Form Router (Week 1)
**User Flow:**
1. Landing page with simple question: "I need help paying for college"
2. Quick questionnaire (5 questions max):
   - Are you a US Citizen or Permanent Resident?
   - Do you have a Social Security Number?
   - Did you graduate from a NY high school?
   - What's your family situation? (lives with parents/guardian/independent/homeless)
   - What language do you prefer?

**Output:** 
- Clear recommendation: FAFSA, NYS DREAM Act, or TAP
- Explanation in simple terms why this is the right form
- Estimated timeline and aid amount

**Implementation:**
```javascript
// Decision tree logic
const determineApplication = (answers) => {
  if (answers.citizenship === 'undocumented' && answers.nyHighSchool) {
    return 'DREAM_ACT';
  }
  if (answers.citizenship === 'citizen' || answers.citizenship === 'permanent_resident') {
    return 'FAFSA';
  }
  // More logic...
};
```

### 2. Personalized Document Checklist (Week 1-2)
**Features:**
- Dynamic checklist based on user's situation
- Mobile-optimized checkbox interface
- Progress bar showing completion percentage
- Document upload capability (photos from phone)
- Clear explanations of each document

**Required Documents by Type:**
```javascript
const documentRequirements = {
  FAFSA: {
    basic: [
      'Social Security Card',
      'Driver License or State ID',
      'Tax Returns (parent and student)',
      'W-2 Forms',
      'Bank Statements'
    ],
    additional_if_applicable: [
      'Verification of Benefits',
      'Untaxed Income Records'
    ]
  },
  DREAM_ACT: {
    basic: [
      'NY High School Transcript',
      'Proof of NY Residency',
      'Affidavit'
    ]
  }
};
```

### 3. AI-Powered Help Chat (Week 2-3)
**System Prompt for GPT-4:**
```
You are a friendly NYC college counselor helping high school students with financial aid applications. 

Key guidelines:
- Use simple language (6th grade level)
- Be encouraging and supportive
- Never ask for sensitive information like SSN
- If unsure, suggest talking to school counselor
- Be culturally sensitive to immigrant families
- Acknowledge fears about documentation status
- Focus on possibilities, not barriers

Common questions database:
[Include top 50 FAQs from actual counselors]
```

**Features:**
- Real-time chat interface
- Quick action buttons for common questions
- Escalation to human volunteer when needed
- Save conversation history for continuity
- Multi-language support (Spanish, Chinese, Bengali, Arabic, Russian)

### 4. Smart Reminders System (Week 3)
**Notification Logic:**
- SMS preferred (higher open rates)
- Escalating urgency as deadlines approach
- Personalized based on application status
- School-specific deadlines
- Time-zone aware (send at optimal times)

**Message Templates:**
```javascript
const reminderTemplates = {
  gentle: "Hi {name}! You're 75% done with your FAFSA. Just need {missing_docs}. Need help?",
  urgent: "⏰ {name}, FAFSA deadline is in 3 days! You're so close - just upload {missing_docs}",
  celebration: "🎉 You did it! Your FAFSA is complete. You could receive up to ${amount} in aid!"
};
```

### 5. Money Left Behind Calculator (Week 3-4)
**Display:**
- Large, prominent number: "You could get $5,500 in FREE money for college!"
- Breakdown by source (Federal Pell, NY TAP, etc.)
- Comparison with dream schools' costs
- "Students like you typically receive..."

**Calculation Logic:**
```javascript
const calculatePotentialAid = (userData) => {
  let totalAid = 0;
  
  // Pell Grant estimate based on income
  if (userData.familyIncome < 30000) {
    totalAid += 7395; // Max Pell
  }
  
  // NYS TAP estimate
  if (userData.nyResident) {
    totalAid += 5665; // Max TAP
  }
  
  // Additional opportunities
  if (userData.firstGeneration) {
    totalAid += 1000; // Typical first-gen scholarships
  }
  
  return totalAid;
};
```

## UI/UX Requirements

### Design Principles
1. **Mobile-First**: Every feature works perfectly on a phone
2. **Accessibility**: WCAG 2.1 AA compliant
3. **Simple Language**: 6th-grade reading level
4. **Visual Hierarchy**: Most important info immediately visible
5. **Cultural Relevance**: Images reflecting NYC diversity

### Color Palette
```css
:root {
  --primary: #1E40AF; /* Trustworthy blue */
  --secondary: #10B981; /* Success green */
  --warning: #F59E0B; /* Deadline orange */
  --danger: #EF4444; /* Error red */
  --neutral: #6B7280; /* Text gray */
  --background: #F9FAFB; /* Light background */
}
```

### Component Library Needs
- Progress bars
- Checkbox lists
- Chat bubbles
- Document upload zones
- Deadline countdown timers
- Mobile-friendly forms
- Language selector
- Help tooltips

## Multi-Language Support

### Implementation Strategy
```javascript
// i18n configuration
const languages = {
  en: 'English',
  es: 'Español',
  zh: '中文',
  bn: 'বাংলা',
  ar: 'العربية',
  ru: 'Русский',
  ht: 'Kreyòl Ayisyen'
};

// Use next-i18next for translations
// Store translations in JSON files
// RTL support for Arabic
```

## API Integrations

### Required APIs
1. **OpenAI API**
   - Model: GPT-4
   - Purpose: Chat assistance
   - Rate limiting: 100 requests/minute

2. **Twilio API**
   - SMS notifications
   - Phone verification
   - Estimated cost: $0.0075/SMS

3. **Supabase**
   - Authentication
   - Real-time database
   - File storage for documents

4. **NYC Schools Data**
   - NYC Open Data API for school information
   - Update school data weekly

## Security & Privacy

### Critical Requirements
1. **FERPA Compliant** - Educational records privacy
2. **COPPA Compliant** - Some users may be under 13
3. **Encryption** - All sensitive data encrypted at rest
4. **No SSN Storage** - Never store Social Security Numbers
5. **Document Purging** - Auto-delete uploaded docs after 90 days
6. **Audit Logging** - Track all data access

### Authentication Flow
```javascript
// Phone-first authentication
1. User enters phone number
2. Send SMS verification code
3. Create/retrieve user account
4. Optional: Add email later
```

## Analytics & Success Metrics

### Track These KPIs
```javascript
const metrics = {
  activation: {
    'Started Application Process': count,
    'Completed Form Router': count,
    'Uploaded First Document': count
  },
  completion: {
    'FAFSA Submitted': count,
    'All Documents Uploaded': count,
    'Aid Amount Claimed': sum
  },
  engagement: {
    'Daily Active Users': unique_count,
    'Chat Messages Sent': count,
    'Average Session Duration': time
  },
  impact: {
    'Total Aid Unlocked': sum,
    'Schools Onboarded': count,
    'Completion Rate by School': percentage
  }
};
```

## Testing Requirements

### User Testing Scenarios
1. Student with stable housing completing FAFSA
2. Undocumented student finding DREAM Act
3. Student in shelter accessing on phone with poor connection
4. Parent helping student in Spanish
5. Student with learning disability using screen reader

### Performance Requirements
- Page load: < 3 seconds on 3G
- Time to Interactive: < 5 seconds
- Offline capability for started applications
- Works on phones from 2018+

## Launch Strategy

### Phase 1: Pilot (Weeks 1-4)
- 1 school in the Bronx (highest need)
- 100 student target
- Daily feedback sessions
- Iterate based on usage

### Phase 2: Expand (Weeks 5-8)
- 5 schools across NYC
- 1,000 student target
- Add volunteer counselors
- Refine AI responses

### Phase 3: Citywide (Week 9+)
- All NYC public high schools
- Marketing campaign
- Teacher/counselor training
- Corporate partnerships

## Environment Variables Needed
```env
# Database
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_KEY=

# APIs
OPENAI_API_KEY=
TWILIO_ACCOUNT_SID=
TWILIO_AUTH_TOKEN=
TWILIO_PHONE_NUMBER=

# Email
RESEND_API_KEY=

# Analytics
POSTHOG_KEY=
VERCEL_ANALYTICS_ID=

# App Config
NEXT_PUBLIC_APP_URL=
NODE_ENV=development
```

## Folder Structure
```
nyccollegenav/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── verify/
│   ├── (dashboard)/
│   │   ├── checklist/
│   │   ├── chat/
│   │   └── documents/
│   ├── api/
│   │   ├── chat/
│   │   ├── sms/
│   │   └── documents/
│   └── layout.tsx
├── components/
│   ├── ui/
│   ├── forms/
│   └── chat/
├── lib/
│   ├── supabase/
│   ├── openai/
│   └── twilio/
├── hooks/
├── utils/
├── translations/
└── public/
```

## Initial Data Seeds

### Schools Data (Top 10 High-Need)
```javascript
const prioritySchools = [
  { name: "DeWitt Clinton High School", borough: "Bronx", students: 3000 },
  { name: "John F. Kennedy High School", borough: "Bronx", students: 2100 },
  { name: "Brooklyn Technical High School", borough: "Brooklyn", students: 6000 },
  // ... more schools
];
```

## Success Criteria for MVP
1. ✅ 100 students complete form router
2. ✅ 50 students submit FAFSA/DREAM Act
3. ✅ 80% find the tool helpful (survey)
4. ✅ Average time to complete: < 30 minutes
5. ✅ $500,000 in aid unlocked

## Post-MVP Features (Future)
- College matching based on aid packages
- Scholarship finder
- SAT/ACT fee waiver applications
- College essay help
- Virtual college tours
- Alumni mentorship matching
- Parent/guardian portal
- School counselor dashboard
- Real-time FAFSA completion parties
- Gamification with school leaderboards

## Getting Started Commands
```bash
# Clone and setup
npx create-next-app@latest nyccollegenav --typescript --tailwind --app
cd nyccollegenav

# Install dependencies
npm install @supabase/supabase-js
npm install openai
npm install twilio
npm install react-hook-form zod
npm install @radix-ui/react-dialog
npm install @radix-ui/react-checkbox
npm install framer-motion
npm install next-i18next
npm install react-hot-toast

# Setup Supabase
npx supabase init
npx supabase start

# Environment setup
cp .env.example .env.local
# Add your API keys

# Run development
npm run dev
```

---

## IMPORTANT NOTES FOR CLAUDE CODE:

1. **Start Simple**: Build the form router first, it provides immediate value
2. **Mobile-First**: Test everything on phone viewport (375px width)
3. **Real Content**: Use actual NYC school names and realistic scenarios
4. **Accessibility**: Include alt text, ARIA labels, keyboard navigation
5. **Error Handling**: Students will have poor internet, plan for failures
6. **Trust Building**: Always show "Your data is private and secure"
7. **Encouraging Tone**: These students face many barriers, be supportive

This is a tool that can literally change lives by unlocking hundreds of millions in education funding. Build with empathy, test with real users, and iterate quickly based on feedback.
