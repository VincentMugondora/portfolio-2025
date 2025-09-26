import { Link } from 'react-router-dom'
import Services from '../components/Services.jsx'

export default function Home() {
  return (
    <>
      <section className="relative py-10 md:py-14">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gray-100 p-4 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left column */}
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-800 shadow">
                  <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
                  AVAILABLE FOR WORK
                </span>
                <h1 className="mt-4 text-5xl leading-[1.05] font-extrabold tracking-tight md:text-7xl">
                  Hi, I’m a<br />product<br />designer<span className="align-top">©</span>
                </h1>
                <p className="mt-5 max-w-md text-gray-600">
                  I have 11+ years of experience working on useful and mindful products together with startups and known brands.
                </p>
                <div className="mt-7">
                  <Link to="/contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm hover:bg-gray-900">
                    Contact Us
                  </Link>
                </div>
              </div>
              {/* Right column */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Info card */}
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="text-sm font-semibold">Cozydiadora</div>
                  <div className="text-xs text-gray-500">Jakarta, Indonesia</div>
                  <div className="mt-3 aspect-[4/3] rounded-lg bg-gray-100 overflow-hidden" />
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <div className="inline-flex items-center gap-1 text-gray-700">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black text-white text-[10px]">F</span>
                      FRAMER EXPERT
                    </div>
                    <div className="text-sky-600 font-semibold">$150 – $300/HR</div>
                  </div>
                </div>
                {/* Portrait */}
                <div className="rounded-2xl overflow-hidden bg-gray-200">
                  <img src="/avatar.png" alt="Portrait" className="h-full w-full object-cover" loading="lazy" />
                </div>
                {/* Gradient brands card */}
                <div className="col-span-2 relative rounded-2xl p-4 md:p-5" style={{background:'linear-gradient(135deg,#a78bfa 0%, #60a5fa 40%, #8b5cf6 100%)'}}>
                  <div className="text-white/90 text-sm">The most recent brands<br/>I happily worked with &lt;3</div>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-white/90 font-semibold">
                    <span>Squarespace</span>
                    <span>asana</span>
                    <span>attent</span>
                  </div>
                  {/* Social icons rail */}
                  <div className="hidden md:flex flex-col gap-3 absolute right-[-18px] top-1/2 -translate-y-1/2">
                    {['in','li','p','x'].map((k) => (
                      <span key={k} className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow">{k}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Services />
    </>
  )
}

