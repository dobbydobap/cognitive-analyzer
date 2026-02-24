# Cognition: Cognitive Productivity Analyzer

> A behavioral analytics platform that analyzes how people work, not just what they complete.

This is a cognitive performance analytics engine designed to track time, measure energy levels, detect context switching, and visualize focus heatmaps. 

## Architecture & Tech Stack

* **Frontend:** Next.js (App Router), TypeScript, TailwindCSS, Zustand, Recharts (Pending)
* **Backend:** Node.js, Express, TypeScript, REST APIs
* **Database:** PostgreSQL (Neon/Supabase serverless)
* **Authentication:** Stateless JWT

## Local Development Setup

### Prerequisites
* Node.js (v18+)
* A PostgreSQL instance (Local or Neon/Supabase)

### Backend Setup
1. Navigate to the backend directory:
   \`\`\`bash
   cd backend
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Environment Variables:
   Create a `.env` file in the `backend/` directory:
   \`\`\`env
   PORT=8080
   NODE_ENV=development
   DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require
   JWT_SECRET=your_super_secret_dev_key
   \`\`\`
4. Run Database Migrations:
   \`\`\`bash
   npm run migrate
   \`\`\`
5. Start the Development Server:
   \`\`\`bash
   npm run dev
   \`\`\`
   The server will start on `http://localhost:8080`.

## 🗺 Roadmap
- [x] Phase 1: Backend Initialization & Database Schema
- [ ] Phase 2: User Authentication & Core Entities
- [ ] Phase 3: Pomodoro & Time Tracking Engine
- [ ] Phase 4: Behavioral Analytics Engine
- [ ] Phase 5: Frontend Dashboard & Next.js Integration
