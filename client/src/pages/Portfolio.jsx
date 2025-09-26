import { Link } from 'react-router-dom'
import Projects from './Projects.jsx'
import Skills from './Skills.jsx'

export default function Portfolio() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 md:pt-8 pb-10 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gray-100 p-4 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-800 shadow">PORTFOLIO</span>
                <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                  Projects, Certificates & Skills
                </h1>
                <p className="mt-3 text-gray-600 max-w-2xl">A selection of my work, certifications, and the skills I use to deliver production‑ready products.</p>
              </div>
              <div>
                <Link to="/contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm hover:bg-gray-900">
                  Book a call
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section className="relative pb-10 md:pb-12">
        <div className="container mx-auto px-4">
          <Projects />
        </div>
      </section>

      {/* Certificates section */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <Certificates />
        </div>
      </section>

      {/* Skills section */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <Skills />
        </div>
      </section>
    </>
  )
}
