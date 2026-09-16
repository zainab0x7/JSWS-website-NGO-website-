# Jamila Sultan Welfare Society (JSWS) — Official Website

> **Healthcare With Compassion, Hope & Humanity**  
> *Creating Healthier Communities Since 2017 • Registered NGO KAR No. 214*

---

## 🌟 Overview

The **Jamila Sultan Welfare Society (JSWS)** website is a modern, high-performance web platform built to serve deserving patients, volunteers, donors, and job seekers across Pakistan. JSWS is dedicated to providing free and subsidized healthcare, physical & neurological rehabilitation, maternal care, scholarship support, and community welfare programs.

---

## 🚀 Key Programs & Operational Arms

- **Jamila Sultan Medical & Dental Centre (JSMDC)**: Multi-specialty OPD consultations, 100% free prescription pharmacy, dental clinics (SHCC compliant), ENT, eye care, diagnostics, and maternal health care.
- **Sultan Ahmed Rehabilitation Centre (SARC)**: Comprehensive pediatric and neuro-rehabilitation, occupational therapy, physical therapy, sensory integration, and autism rehabilitation.
- **Muhammad Aslam Scholarship Program (MASP)**: Merit & need-based educational scholarships for underprivileged students.
- **Health Awareness Programs (CAP)**: Free community health camps, preventive education drives, and medical outreach.
- **Careers & Job Portal (`/careers`)**: Professional recruitment portal for healthcare, therapy, and administrative vacancies (including active recruitment for Occupational Therapists).
- **Donate & Zakat Portal**: Shariah-compliant Zakat & Sadqah utilization, patient sponsorship, clinic equipment sponsorship, and direct bank transfer integration (BankIslami).

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16 App Router](https://nextjs.org/)
- **UI / Styling**: React 19, [Tailwind CSS](https://tailwindcss.com/), Radix UI primitives, Lucide Icons, Framer Motion
- **Internationalization**: [next-intl](https://next-intl-docs.vercel.app/) supporting full **English (en)** and **Urdu (ur)** locales with RTL/LTR support (`BidiLTR`)
- **Backend API Routes**: Next.js Server API Routes (`/api/contact`, `/api/volunteer`, `/api/scholarship`, `/api/donate`)
- **Integrations**: Google Sheets API integration (`googleapis`), Formspree endpoints, AI & Vector Database integration capabilities (`@ai-sdk/google`, `@qdrant/js-client-rest`)
- **TypeScript**: Full strict type safety with `tsc` validation

---

## 📁 Directory Structure

```text
├── app/
│   ├── [locale]/           # Internationalized page routes (en / ur)
│   │   ├── page.tsx        # Homepage
│   │   ├── about/          # About Us page
│   │   ├── careers/        # Careers Portal & Job Details (/careers/occupational-therapist)
│   │   ├── contact/        # Contact & Map Location page
│   │   ├── jsmdc/          # Medical & Dental Centre
│   │   ├── sarc/           # Rehabilitation Centre
│   │   ├── scholarships/   # Scholarship Application
│   │   ├── volunteer/      # Volunteer Application
│   │   ├── donate/         # Donation & Zakat
│   │   └── ...
│   ├── api/                # Next.js Server API Routes
│   │   ├── contact/        # Contact & Job Application endpoint
│   │   ├── volunteer/      # Volunteer Application endpoint
│   │   ├── scholarship/    # MASP Scholarship Submission endpoint
│   │   └── donate/         # Donation Payment & Receipt endpoints
│   └── globals.css         # Global Tailwind styles & design tokens
├── components/             # Reusable UI & Layout Components
│   ├── layout/             # Navbar, Footer, Drawers
│   ├── donate/             # Quick Donate Modal & Payment Cards
│   └── ui/                 # Buttons, Cards, BidiLTR helpers
├── messages/               # Localization strings (en.json, ur.json)
├── public/                 # Static assets (logos, posters, images)
│   └── ot-hiring-poster.jpg # Official Occupational Therapist Recruitment Poster
└── lib/                    # Helper utilities & Google Sheets API client
```

---

## ⚙️ Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Google Sheets API Config (Scholarships, Contact & Volunteer applications)
GOOGLE_PROJECT_ID=scholership-form
GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"
GOOGLE_SHEET_ID=your_google_sheet_id

# Formspree Endpoints (Optional external fallbacks)
NEXT_PUBLIC_FORMSPREE_VOLUNTEER_ENDPOINT=https://formspree.io/f/your_form_id
NEXT_PUBLIC_FORMSPREE_CONTACT_ENDPOINT=https://formspree.io/f/your_form_id

# Helpline Numbers
NEXT_PUBLIC_MASP_WHATSAPP_NUMBER=923072021882
```

> **Note**: Native Server API routes (`/api/contact`, `/api/volunteer`, `/api/scholarship`) include graceful fallback handling. If Google Sheets environment variables are omitted on deployment platforms, form submissions issue a server log and return a `200 OK` success response without crashing.

---

## 💻 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
# or on platforms with SWC policy restrictions:
npx next dev --webpack
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Run Production Build
```bash
npx next build --webpack
```

### 4. Run Type Checking
```bash
npx tsc --noEmit
```

---

## 🏛️ Governance & Accreditation

- **Registration**: Registered NGO KAR No. 214
- **FBR NTN**: 7488236
- **Zakat Utilization**: Shariah Certified Zakat Utilization
- **SHCC Compliance**: Fully registered & compliant with Sindh Health Care Commission (SHCC)

---

## 📞 Contact Information

- **Phone Helplines**: +92 307 2021882 / +92 336 3398787
- **Email**: `jswswelfare@gmail.com`
- **Headquarters Address**: P-66 - 15 A, Sector 31A, Allah Wala Town, Korangi, Karachi, 74900, Pakistan
- **Website**: [www.jsws.org.pk](https://www.jsws.org.pk)

---

*Copyright &copy; Jamila Sultan Welfare Society. All rights reserved.*
