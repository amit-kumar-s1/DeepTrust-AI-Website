# DeepTrust AI Frontend

## Frontend Requirements

### Node.js
- Node.js >= 20.x (recommended LTS)
- npm >= 10.x

### Framework & Libraries
- Next.js 15.5.2
- React 19.1.1
- TypeScript 5.9+
- Tailwind CSS 3.4+
- Axios
- React Query
- Zustand
- React Hook Form
- Zod
- Framer Motion
- Recharts
- Radix UI Components

## Environment Variables

Create a `.env.local` file inside the frontend directory:

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

Replace the URL with your backend API endpoint if different.

## Installation

```bash
cd frontend
npm install
```

## Run Development Server

```bash
npm run dev
```

Application will start on:

```text
http://localhost:3000
```

## Build for Production

```bash
npm run build
npm run start
```

## Useful Commands

```bash
npm run lint
npm run type-check
npm run format
```

## Project Structure

```text
frontend/
├── src/
│   ├── app/
│   ├── components/
│   ├── services/
│   ├── store/
│   ├── lib/
│   └── types/
├── public/
├── package.json
└── .env.local
```

## Backend Dependency

The frontend communicates with the backend through:

```env
NEXT_PUBLIC_API_URL
```

Ensure the backend server is running before using features such as:
- Authentication
- Text detection
- Image detection
- Video detection
- Document analysis

## Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- Axios
- TanStack React Query
- Zustand
- Radix UI
- Framer Motion
