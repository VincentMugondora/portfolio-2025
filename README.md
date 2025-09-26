# Vincent Mugondora — Portfolio (Full‑Stack)

A full‑stack personal portfolio built with React + Tailwind CSS on the frontend and Node.js + Express + MongoDB on the backend, including an admin dashboard for managing projects, skills, certificates, and viewing messages.

## Tech Stack
- Frontend: React (Vite) + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB (Mongoose)
- Auth: JWT

## Project Structure
```
my-portfolio/
├─ client/                 # React + Vite frontend (Tailwind v4)
│  ├─ public/
│  │  └─ cv/               # Place CV PDF as Vincent_Mugondora_CV.pdf
│  └─ src/
│     ├─ components/       # Navbar, Footer, ProtectedRoute
│     ├─ lib/              # API helpers (fetch wrapper)
│     └─ pages/            # Home, Projects, Certificates, Skills, Contact, Admin
└─ server/                 # Node/Express API with MongoDB
   ├─ src/
   │  ├─ controllers/
   │  ├─ middleware/
   │  ├─ models/
   │  ├─ routes/
   │  ├─ app.js
   │  └─ index.js
   ├─ .env.example
   └─ README.md
```

## Getting Started (Local Dev)

1) One-command dev (recommended)

```
npm install             # installs root + workspaces (client & server)
npm run dev             # runs server (http://localhost:5000) & client (http://localhost:5173)
```

2) Backend setup (manual)

```
cd server
copy .env.example .env   # or create .env manually on non-Windows
# Edit .env with your values: MONGO_URI, JWT_SECRET, etc.

npm install
npm run seed             # creates initial admin user based on env
npm run dev              # starts http://localhost:5000
```

3) Frontend setup (manual)

```
cd client
copy .env.example .env   # optional; defaults to VITE_API_BASE=/api
npm install
npm run dev              # starts http://localhost:5173
```

During development, the frontend proxies API requests to the backend and also proxies `/uploads`, so uploaded images/PDFs display correctly.

## Admin Login
Go to `/admin/login` on the frontend and use the credentials from `server/.env` (ADMIN_USERNAME/ADMIN_EMAIL + ADMIN_PASSWORD).

## Deployment Notes
- Frontend: Vercel recommended. Set `VITE_API_BASE` to your deployed backend base URL (e.g., `https://your-api.onrender.com/api`).
- Backend: Render/Railway recommended. Set environment variables as per `server/.env.example`. Ensure static `/uploads` is persisted via a disk or object storage if needed.

### Email (Contact Form)
- Configure SMTP settings in `server/.env.example` (host, port, user, pass, from, and CONTACT_TO).
- If SMTP is not configured, messages will still be stored in MongoDB, but email notifications will be skipped.

### Rate Limiting
- The contact endpoint is rate-limited to 5 requests per 10 minutes per IP (`express-rate-limit`).

## Docs
- See `docs/prd.txt` and `docs/prompt.txt` for the original requirements.
