# Agronom Project Setup & Development Guide

## Project Overview

**Agronom** is a modern Next.js web application for agricultural management and information. This document describes the project structure, setup process, and development workflow.

## Current Status

✅ Project initialized with:
- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS
- ESLint
- Git repository

## Next Steps to Start Development

### 1. Understand the Architecture

The project uses a **client-side Next.js App Router** structure:

```
app/
├── layout.tsx          # Root wrapper
├── page.tsx            # Home page (/)
├── api/               # API route handlers (optional)
│   └── health/        # Health check endpoint
└── features/          # Feature pages (crops, weather, etc.)
    ├── crops/         # Crop management
    ├── soil/          # Soil analysis
    └── weather/       # Weather data
```

### 2. Install Dependencies

```bash
cd d:\agronom-website
npm install
```

✅ Already done! (364 packages installed)

### 3. Start Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000)

### 4. Project Structure to Create

Create these directories:

```bash
mkdir -p components/ui components/features lib/utils
```

### 5. Create Core Components

Start with:
- `components/ui/Button.tsx` - Reusable button
- `components/ui/Card.tsx` - Card container
- `components/Header.tsx` - Navigation header
- `components/Footer.tsx` - Footer

### 6. Set Up Environment

1. Copy `.env.example` to `.env.local`
2. Update configuration as needed
3. Never commit `.env.local` to git

### 7. Development Workflow

```bash
# Create a feature branch
git checkout -b feature/crop-management

# Make changes
# Commit frequently
git add .
git commit -m "feat: add crop management page"

# Push to origin
git push origin feature/crop-management

# Create PR for review
```

## Database Setup (When Ready)

Options:
- **PostgreSQL** - Structured data, relations
- **MongoDB** - Document-based, flexible schema

Recommended: PostgreSQL with Prisma ORM

```bash
npm install @prisma/client
npm install -D prisma
```

## API Routes (When Ready)

Create `app/api/crops/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ crops: [] });
}

export async function POST(request: Request) {
  const data = await request.json();
  return NextResponse.json({ success: true, data });
}
```

## Styling Convention

Use Tailwind CSS utility classes:

```tsx
// ✅ Good
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  <h1 className="text-2xl font-bold text-gray-900">Crops</h1>
</div>

// ❌ Avoid
<div style={{ display: 'flex', padding: '16px' }}>
```

## Key Files to Remember

- `tsconfig.json` - TypeScript configuration
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `.eslintrc.json` - ESLint rules
- `package.json` - Dependencies & scripts

## Common Commands

```bash
# Development
npm run dev                # Start dev server
npm run lint              # Check code quality
npm run build             # Build for production

# Useful git commands
git status                # See changes
git log --oneline        # View commit history
git diff                 # See what changed
git branch -a            # List all branches
```

## Folder Structure (Complete)

```
agronom-website/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout wrapper
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI primitives
│   ├── features/         # Feature components
│   ├── Header.tsx        # Nav header
│   └── Footer.tsx        # Footer
├── lib/                   # Utilities & helpers
│   └── utils.ts          # Common functions
├── public/                # Static assets
│   └── favicon.ico        # Site icon
├── styles/                # Additional styles
├── .env.local             # Local environment (not committed)
├── .env.example           # Environment template
├── .eslintrc.json         # ESLint configuration
├── next.config.js         # Next.js configuration
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
└── README.md              # This file
```

## Tips for Success

1. **Keep components small** - One responsibility per component
2. **Use TypeScript** - Catch errors early
3. **Commit often** - Small, focused commits
4. **Test in browser** - Use DevTools
5. **Read Next.js docs** - https://nextjs.org/docs

## When You're Ready for More

- Add authentication (NextAuth.js or Auth0)
- Set up database (Prisma + PostgreSQL)
- Create API endpoints
- Add testing (Jest + React Testing Library)
- Set up CI/CD (GitHub Actions)

---

**Ready to start?** Run `npm run dev` and begin building! 🚀
