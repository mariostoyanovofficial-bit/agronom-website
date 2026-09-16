# Agronom Website - Next.js Project

Modern agricultural information and management platform for crop management, soil analysis, weather monitoring, and farming resources.

## Quick Start

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
agronom-website/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── api/             # API routes
├── components/          # Reusable React components
│   ├── ui/             # UI components (buttons, cards, etc.)
│   └── features/       # Feature components
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## Features

- ✅ TypeScript for type safety
- ✅ Tailwind CSS for modern styling
- ✅ ESLint for code quality
- ✅ Git version control
- ✅ App Router (Next.js 14+)

## Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_SITE_NAME=Agronom
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Build & Deploy

```bash
npm run build
npm start
```

## Technology Stack

- **Framework:** Next.js 15+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** (TBD - PostgreSQL / MongoDB)
- **API:** (TBD - REST / GraphQL)
- **Deployment:** (TBD - Vercel / Docker)

## Getting Started with Development

1. Create feature branches from `main`
2. Use TypeScript for all new code
3. Follow Tailwind CSS utility classes for styling
4. Keep components small and reusable
5. Write meaningful commit messages

## License

TBD
