import { Link } from 'react-router-dom'
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter, FiPenTool, FiCode, FiImage, FiType } from 'react-icons/fi'

export default function Home() {
  return (
    <>
      <section className="relative pt-6 md:pt-8 pb-10 md:pb-12">
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
                  Hi, I’m a<br />full‑stack<br />developer<span className="align-top">©</span>
                </h1>
                <p className="mt-5 max-w-md text-gray-600">
                  I craft fast, accessible web apps with React, Node.js, and MongoDB — from idea to production.
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
                  <div className="text-sm font-semibold">Vincent Mugondora</div>
                  <div className="text-xs text-gray-500">Harare, Zimbabwe</div>
                  <div className="mt-3 aspect-[4/3] rounded-lg bg-gray-100 overflow-hidden" />
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <div className="inline-flex items-center gap-1 text-gray-700">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black text-white text-[10px]">FS</span>
                      FULL‑STACK EXPERT
                    </div>
                    <div className="text-sky-600 font-semibold">$150 – $300/HR</div>
                  </div>
                </div>
                {/* Portrait */}
                <div className="rounded-2xl overflow-hidden bg-gray-200">
                  <img src="/avatar.png" alt="Portrait" className="h-full w-full object-cover" loading="lazy" />
                </div>
                {/* Gradient brands card */}
                <div className="col-span-2 relative rounded-2xl p-4 md:p-5" style={{background:'linear-gradient(135deg,#93c5fd 0%, #60a5fa 40%, #1d4ed8 100%)'}}>
                  <div className="text-white/90 text-sm">The most recent brands<br/>I happily worked with &lt;3</div>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-white/90 font-semibold">
                    <span>Squarespace</span>
                    <span>asana</span>
                    <span>attent</span>
                  </div>
                  {/* Social icons rail */}
                  <div className="hidden md:flex flex-col gap-3 absolute right-[-18px] top-1/2 -translate-y-1/2">
                    <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                      <FiLinkedin className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                      <FiGithub className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                      <FiInstagram className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                      <FiTwitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Assist section */}
      <section className="relative pb-14 md:pb-16">
        <div className="container mx-auto px-4">
          {/* Mission banner */}
          <div className="rounded-[30px] text-white p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]" style={{background:'linear-gradient(180deg,#1497A4 0%, #0F8E9B 100%)'}}>
            <p className="text-2xl md:text-4xl font-semibold leading-snug max-w-5xl">
              My mission is to assist startups and enterprises in creating an emotional bond between their products and
              satisfied, engaged customers.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/70">
              {['Jeep','amazon','bitcoin','HubSpot','stripe','Google'].map((b) => (
                <span key={b} className="text-sm md:text-base font-semibold tracking-wider">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Assist grid */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                How Can I
                <br />
                Assist You?
              </h2>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  k: '01',
                  title: 'UI Design',
                  desc:
                    'We create intuitive, visually appealing interfaces that enhance user experience and navigation, ensuring your app is both beautiful and functional across all devices.',
                  icon: FiPenTool,
                },
                {
                  k: '02',
                  title: 'Development',
                  desc:
                    'Our team builds reliable, scalable solutions, delivering clean code that powers websites and mobile apps with top‑notch performance and security.',
                  icon: FiCode,
                },
                {
                  k: '03',
                  title: 'Graphic Design',
                  desc:
                    'We design responsive, user‑friendly websites that blend aesthetics with functionality, providing a seamless experience across devices and reflecting your brand’s identity.',
                  icon: FiImage,
                },
                {
                  k: '04',
                  title: 'Branding',
                  desc:
                    'We craft memorable brand identities, from logos to complete strategies, ensuring consistency and a strong connection with your audience across all platforms.',
                  icon: FiType,
                },
              ].map((s) => (
                <div key={s.k} className="relative rounded-[22px] bg-white p-4 md:p-5 border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-indigo-50 text-indigo-600">
                      {s.icon ? <s.icon className="h-4 w-4" /> : null}
                    </span>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between pr-10">
                    <div className="font-semibold">{s.title}</div>
                  </div>
                  <div className="absolute right-4 bottom-4 text-gray-400 font-semibold">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

