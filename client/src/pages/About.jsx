import { Link } from 'react-router-dom'
import { FiBriefcase, FiGlobe, FiTrendingUp } from 'react-icons/fi'
import Services from '../components/Services.jsx'
import Testimonials from '../components/Testimonials.jsx'

export default function About() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="relative pt-6 md:pt-8 pb-10 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gray-100 p-4 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left column */}
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-800 shadow">
                  ABOUT
                </span>
                <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                  Vincent Mugondora
                </h1>
                <p className="mt-4 text-gray-600">
                  I’m a full‑stack engineer focused on shipping data‑driven products across web and mobile. I combine React, Node.js, and Python/ML to build fast UIs, reliable APIs, and production ML features.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Link to="/contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm hover:bg-gray-900">
                    Contact Me
                  </Link>
                  <a href="/cv/Vincent_Mugondora_CV.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-2.5 text-sm ring-1 ring-gray-200 hover:bg-gray-50">
                    Download CV
                  </a>
                </div>
              </div>

              {/* Right column */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Info card */}
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="text-sm font-semibold">Vincent Mugondora</div>
                  <div className="text-xs text-gray-500">Harare, Zimbabwe</div>
                  <div className="mt-3 aspect-[4/3] rounded-lg bg-gray-100 overflow-hidden" />
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <div className="inline-flex items-center gap-1 text-gray-700">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black text-white text-[10px]">ML</span>
                      FULL‑STACK + ML
                    </div>
                    <div className="text-sky-600 font-semibold">5+ yrs</div>
                  </div>
                </div>
                {/* Portrait */}
                <div className="rounded-2xl overflow-hidden bg-gray-200">
                  <img src="/avatar.png" alt="Portrait" className="h-full w-full object-cover" loading="lazy" />
                </div>
                {/* Tools gradient */}
                <div className="col-span-2 relative rounded-2xl p-4 md:p-5 overflow-hidden" style={{background:'linear-gradient(135deg,#93c5fd 0%, #60a5fa 40%, #1d4ed8 100%)'}}>
                  <div className="text-white/90 text-sm">Recent tools I enjoy using</div>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-white/90 font-semibold">
                    <span>AWS</span>
                    <span>GCP</span>
                    <span>PyTorch</span>
                    <span>TensorFlow</span>
                    <span>React</span>
                    <span>Node.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience snapshot */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-[28px] bg-gray-100 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-gray-400 font-semibold">
                  <FiBriefcase className="h-4 w-4" />
                  Uncommon.org
                </div>
                <div className="mt-1 text-gray-800">Full‑time Software Engineer</div>
                <div className="mt-3 text-xs text-gray-500">2024–present</div>
              </div>
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-gray-400 font-semibold">
                  <FiGlobe className="h-4 w-4" />
                  Mugo Plumbing Solutions
                </div>
                <div className="mt-1 text-gray-800">Built the company website</div>
                <div className="mt-3 text-xs text-gray-500">2024</div>
              </div>
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-2 text-gray-400 font-semibold">
                  <FiTrendingUp className="h-4 w-4" />
                  Hustlr (dev startup)
                </div>
                <div className="mt-1 text-gray-800">Part‑time Developer</div>
                <div className="mt-3 text-xs text-gray-500">2025–present</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services reuse */}
      <div id="services">
        <Services />
      </div>

      {/* Testimonials */}
      <Testimonials />

      {/* CTA */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-[28px] bg-white p-6 md:p-10 border border-gray-100 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to collaborate?</h3>
            <p className="mt-2 text-gray-600">Let’s design, build, and ship something great together.</p>
            <Link to="/contact" className="mt-5 inline-flex items-center rounded-full bg-black text-white px-6 py-2.5 text-sm hover:bg-gray-900">
              Book a call
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
