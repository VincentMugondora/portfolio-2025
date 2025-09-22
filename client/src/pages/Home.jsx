import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Hi, I'm Vincent Mugondora</h1>
        <p className="text-gray-600 mb-6">
          Full‑stack developer passionate about building clean, scalable web applications and delightful user experiences.
        </p>
        <div className="flex gap-3">
          <a
            href="/cv/Vincent_Mugondora_CV.pdf"
            className="inline-flex items-center rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
            download
          >
            Download CV
          </a>
          <Link
            to="/projects"
            className="inline-flex items-center rounded border border-gray-300 px-4 py-2 hover:bg-gray-100"
          >
            View Projects
          </Link>
        </div>
        <div className="mt-6 flex gap-4 text-gray-600">
          <a className="hover:text-blue-600" href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
          <a className="hover:text-blue-600" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="hover:text-blue-600" href="mailto:you@example.com">Email</a>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-56 h-56 rounded-full bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center shadow-inner">
          <span className="text-6xl">👨‍💻</span>
        </div>
      </div>
    </section>
  )
}
