# DIGOS Wellness

A modern web application built with Next.js for wellness solutions.

## Technology Stack

- **Frontend**: Next.js 15, React 19, TailwindCSS 4
- **Backend**: Next.js API routes, Better Auth
- **Database**: PostgreSQL with Prisma ORM
- **Languages**: TypeScript

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or newer recommended)
- npm or yarn
- PostgreSQL database

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/digos-wellness.git
cd digos-wellness
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Copy the example.env file to .env:
   ```bash
   cp example.env .env
   ```
   - Fill in the required variables in the .env file:
     - `BETTER_AUTH_SECRET`: A random string for auth encryption
     - `BETTER_AUTH_URL`: Your application URL (http://localhost:3000 for development)
     - `NEXT_PUBLIC_API_URL`: Your application URL (http://localhost:3000 for development)
     - `DATABASE_URL`: Your PostgreSQL connection string with connection pooling
     - `DIRECT_URL`: Direct PostgreSQL connection string for database migrations

4. Set up the database:
```bash
npx prisma db push    # Apply the Prisma schema to your database
npx prisma generate   # Generate the Prisma client
```

## Running the Application

### Development Mode

```bash
npm run dev
# or
yarn dev
```

This will:
- Generate Prisma client
- Start the Next.js development server with Turbopack
- Open [http://localhost:3000](http://localhost:3000) to view the application

### Production Build

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## Project Structure

```
digos-wellness-capstone/
├── prisma/               # Database schema and migrations
├── public/               # Static assets
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   │   ├── api/          # API routes
│   │   │   └── auth/     # Authentication API routes
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── components/       # React components
│   │   └── ui/           # UI components (buttons, inputs, etc.)
│   ├── generated/        # Auto-generated files (Prisma client)
│   └── lib/              # Utility functions and shared code
│       ├── auth.ts       # Authentication configuration
│       └── prisma.ts     # Database client
├── .env                  # Environment variables (not in repo)
├── example.env           # Example environment variables
└── package.json          # Project dependencies and scripts
```

## Database

This project uses PostgreSQL with Prisma ORM. The schema includes:
- User model - User account information
- Session model - Authentication sessions
- Account model - OAuth accounts
- Verification model - Verification codes for email verification, password reset, etc.

## Authentication

Authentication is handled by Better Auth with the Prisma adapter. Configuration is in `src/lib/auth.ts`.

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Lint code

## Contributing

Please read our contributing guidelines before submitting PRs.

## License

[Include license information here]
