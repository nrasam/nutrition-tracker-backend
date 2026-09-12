# My Nutrition Tracker Backend

This repository contains the backend API for my Nutrition Tracker, a full-stack nutrition tracking application. The API is currently hosted on [Render](https://nutrition-tracker-backend-eubp.onrender.com), and the frontend is available at [noelsnutritiontracker.netlify.app](https://noelsnutritiontracker.netlify.app).

## What It Does

The service provides endpoints for:

- Browsing foods and their nutritional information
- Logging and removing food entries
- Tracking micronutrient goals and intake
- Recording weight entries
- Managing daily macro goals

The API is built with Express and TypeScript, with PostgreSQL persistence through Prisma ORM. Read requests are publicly available, while write requests require the `x-admin-password` header.

## Tech Stack

- Node.js and TypeScript
- Express 5
- PostgreSQL
- Prisma ORM 7 with the PostgreSQL driver adapter
- Render for backend hosting
- Netlify for frontend hosting

## API

The API includes these route groups:

```text
/api/foods
/api/entries
/api/micros
/api/weight
/api/goals
```

## Run Locally

1. Install dependencies:

   ```bash
   npm install
   ```

2. Add environment variables to `.env`:

   ```env
   DATABASE_URL="your-postgresql-connection-string"
   DIRECT_URL="your-direct-postgresql-connection-string"
   ADMIN_PASSWORD="your-admin-password"
   PORT=3001
   ```

3. Generate the Prisma client and apply migrations:

   ```bash
   npx prisma generate
   npx prisma migrate deploy
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

For a production-style local run:

```bash
npm run build
npm start
```

## Project Structure

```text
prisma/          Prisma schema, migrations, and seed data
src/index.ts     Express application entrypoint
src/routes/      API route handlers
src/lib/         Shared Prisma client setup
```
