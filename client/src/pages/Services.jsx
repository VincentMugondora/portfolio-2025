import { Link } from 'react-router-dom'
import Services from '../components/Services.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 md:pt-8 pb-10 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gray-100 p-4 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-7">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-800 shadow">
                  SERVICES
                </span>
                <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                  What I Do
                </h1>
                <p className="mt-4 text-gray-600 max-w-2xl">
                  From front‑end interfaces to back‑end APIs, production ML, and mobile apps — I design, build, and ship reliable products end‑to‑end.
                </p>
                <div className="mt-6">
                  <Link to="/contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm hover:bg-gray-900">
                    Book a call
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
                  <div className="text-sm text-gray-600">Highlights</div>
                  <ul className="mt-3 space-y-2 text-sm text-gray-800">
                    <li>React, Node.js, Python/ML</li>
                    <li>APIs, testing, CI/CD</li>
                    <li>Cloud: AWS, GCP</li>
                    <li>Mobile: React Native</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <Services />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-[28px] bg-white p-6 md:p-10 border border-gray-100 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Have something in mind?</h3>
            <p className="mt-2 text-gray-600">Let’s build it right — fast UX, solid APIs, and production‑ready delivery.</p>
            <Link to="/contact" className="mt-5 inline-flex items-center rounded-full bg-black text-white px-6 py-2.5 text-sm hover:bg-gray-900">
              Contact me
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
