# Backend API (Node.js + Express + MongoDB)

This is the administrative backend for the portfolio. It provides JWT-based auth and CRUD APIs for projects, certificates, skills, and contact messages.

## Requirements
- Node.js 18+
- A MongoDB connection string (Atlas or local)

## Setup
1. Copy `.env.example` to `.env` and fill in values:
```
PORT=5000
MONGO_URI=your_mongo_uri
JWT_SECRET=change_me_super_secret
CORS_ORIGIN=http://localhost:5173
ADMIN_EMAIL=admin@example.com
ADMIN_USERNAME=admin
ADMIN_PASSWORD=change_me_strong_password
```

2. Install dependencies:
```
npm install
```

3. Seed admin user (one time):
```
npm run seed
```

4. Start the server (dev):
```
npm run dev
```

The API will run on http://localhost:5000

## API Summary
- Auth
  - POST `/api/auth/login` { usernameOrEmail, password } → { token, user }
  - GET  `/api/auth/me` (Bearer token)
- Projects
  - GET  `/api/projects`
  - POST `/api/projects` (auth) { title, description?, techStack?, githubUrl?, demoUrl? }
  - PUT  `/api/projects/:id` (auth)
  - DELETE `/api/projects/:id` (auth)
- Certificates
  - GET  `/api/certificates`
  - POST `/api/certificates` (auth, multipart: file, title, description?) → uploads to `/uploads/certificates/`
  - DELETE `/api/certificates/:id` (auth)
- Skills
  - GET  `/api/skills`
  - POST `/api/skills` (auth) { name, level?, category? }
  - PUT  `/api/skills/:id` (auth)
  - DELETE `/api/skills/:id` (auth)
- Messages
  - POST `/api/messages` { name, email, message }
  - GET  `/api/messages` (auth)
  - PATCH `/api/messages/:id/read` (auth)

Static uploads are served at `/uploads/...`.
