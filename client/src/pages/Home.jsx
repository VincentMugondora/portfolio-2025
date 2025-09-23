import { Link } from 'react-router-dom'
import Services from '../components/Services.jsx'

export default function Home() {
  return (
    <>
    <section className="relative pt-2 md:pt-4 pb-10 md:pb-12 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(0,0,0,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: 'center',
        }}
      />

      {/* Rotating Hire Me sticker */}
      <div className="hidden md:block absolute right-6 top-4 z-20">
        <div className="relative w-24 h-24">
          <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin">
            <defs>
              <path id="textcircle" d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0" />
            </defs>
            <text fontSize="10" fontWeight="600" letterSpacing="2" fill="#111">
              <textPath href="#textcircle">• HIRE ME • HIRE ME • HIRE ME • HIRE ME</textPath>
            </text>
          </svg>
          <Link
            to="/contact"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 text-white grid place-items-center shadow"
            aria-label="Hire Me"
          >
            ↗
          </Link>
        </div>
      </div>

      {/* Heading */}
      <div className="text-center">
        <div className="inline-flex items-center gap-1 text-sm text-gray-500">
          <span className="h-px w-8 bg-orange-500" />
          Hello There!
        </div>
        <h1 className="mt-1 md:mt-2 text-3xl md:text-6xl font-extrabold tracking-tight">
          I’m <span className="text-orange-600">Vincent Mugondora</span>
        </h1>
        <p className="mt-1 md:mt-2 text-gray-600 md:text-lg">Full‑stack Developer</p>
      </div>

      {/* Main hero content */}
      <div className="mt-4 md:mt-6 grid grid-cols-1 lg:grid-cols-3 items-center gap-3 md:gap-4">
        {/* Left: testimonial + reviews */}
        <div className="order-2 lg:order-1 space-y-3 md:space-y-4">
          <div className="text-orange-500 text-5xl leading-none">“</div>
          <p className="text-gray-700 max-w-xs">
            Vincent’s remarkable work transformed our website — highly recommended!
          </p>
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              <span className="w-8 h-8 rounded-full bg-gray-200 border border-white inline-block" />
              <span className="w-8 h-8 rounded-full bg-gray-300 border border-white inline-block" />
              <span className="w-8 h-8 rounded-full bg-gray-200 border border-white inline-block" />
              <span className="w-8 h-8 rounded-full bg-gray-300 border border-white inline-block" />
            </div>
            <div>
              <div className="text-orange-600 font-semibold">150+ Reviews (4.9 of 5)</div>
              <div className="text-gray-500 text-sm">Reviews from valued clients</div>
            </div>
          </div>
        </div>

        {/* Center: portrait with orange circle + floating CTA */}
        <div className="order-1 lg:order-2 relative flex justify-center">
          {/* Orange circle backdrop */}
          <svg
            className="absolute bottom-5 md:bottom-8 w-72 h-72 md:w-[26rem] md:h-[26rem] z-0 opacity-90 text-orange-500"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              fill="currentColor"
              d="M49.2,-61.2C63.3,-50.8,75.6,-37,79.2,-21.6C82.7,-6.2,77.4,10.8,69.3,25.9C61.1,41,50.1,54.2,36.5,63C23,71.8,6.9,76.2,-8.6,77.5C-24,78.8,-47.8,77,-60.2,65.6C-72.6,54.2,-73.7,33.1,-76.5,13.2C-79.2,-6.7,-83.6,-25.4,-76.5,-39.3C-69.4,-53.2,-50.8,-62.3,-33.4,-72.1C-16,-81.8,0.3,-92.2,16.6,-92.1C32.9,-92,49.2,-81.5,49.2,-61.2Z"
              transform="translate(100 100)"
            />
          </svg>

          {/* Portrait (placeholder) */}
          <img
            src="/avatar.png"
            alt="Portrait"
            className="relative z-10 w-64 md:w-80 drop-shadow-xl"
            loading="lazy"
          />

          {/* Floating CTA */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-4 md:bottom-6 z-30 bg-white rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.15)] flex gap-3 md:gap-4 p-2 md:p-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 rounded-full px-7 md:px-9 h-11 md:h-12 bg-black text-white font-semibold hover:bg-gray-900"
            >
              <span>Portfolio</span>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-orange-500 text-white text-[10px] md:text-xs leading-none">→</span>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full px-7 md:px-9 h-11 md:h-12 bg-white text-gray-900 border-2 border-black font-semibold hover:bg-gray-50"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Right: skill tags + social */}
        <div className="order-3 lg:order-3 flex flex-col items-start lg:items-end gap-3">
          <div className="flex flex-wrap gap-2 justify-start lg:justify-end max-w-xs">
            <span className="px-3 py-1.5 rounded-full bg-black text-white text-sm">Frontend</span>
            <span className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-sm">Backend</span>
            <span className="px-3 py-1.5 rounded-full bg-white border text-sm">REST APIs</span>
            <span className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-sm">DevOps</span>
            <span className="px-3 py-1.5 rounded-full bg-black text-white text-sm">Databases</span>
          </div>
          <div className="pt-1">
            <div className="text-sm text-gray-500 mb-2">Follow Us On</div>
            <div className="flex items-center gap-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full bg-white text-gray-900 shadow hover:bg-black hover:text-white">f</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full bg-white text-gray-900 shadow hover:bg-black hover:text-white">x</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full bg-white text-gray-900 shadow hover:bg-black hover:text-white">p</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full bg-white text-gray-900 shadow hover:bg-black hover:text-white">ig</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom skills strip (full-width pinned, infinite auto-scroll) */}
      <div className="absolute left-0 lg:w-[calc(100vw-1.1vw)] lg:left-[-3rem] right-0 bottom-0 z-20">
        <div className="w-full bg-black text-white rounded  lg:rounded-none">
          <div className="marquee w-full overflow-hidden">
            <div className="flex items-center gap-12 md:gap-16 py-3 md:py-4 px-6 md:px-10 whitespace-nowrap animate-marquee text-lg md:text-xl font-bold">
              {/* Sequence A */}
              <div className="flex items-center gap-12 md:gap-16">
                <span>Frontend</span>
                <span className="text-orange-500">✦</span>
                <span>Backend</span>
                <span className="text-orange-500">✦</span>
                <span>APIs</span>
                <span className="text-orange-500">✦</span>
                <span>DevOps</span>
                <span className="text-orange-500">✦</span>
                <span>Databases</span>
                <span className="text-orange-500">✦</span>
                <span>CI/CD</span>
                <span className="text-orange-500">✦</span>
                <span>Docker</span>
                <span className="text-orange-500">✦</span>
                <span>Kubernetes</span>
                <span className="text-orange-500">✦</span>
                <span>React</span>
                <span className="text-orange-500">✦</span>
                <span>Node.js</span>
                <span className="text-orange-500">✦</span>
                <span>Express</span>
                <span className="text-orange-500">✦</span>
                <span>TypeScript</span>
                <span className="text-orange-500">✦</span>
                <span>Next.js</span>
              </div>

              {/* Sequence B (duplicate for seamless loop) */}
              <div className="flex items-center gap-12 md:gap-16" aria-hidden="true">
                <span>Frontend</span>
                <span className="text-orange-500">✦</span>
                <span>Backend</span>
                <span className="text-orange-500">✦</span>
                <span>APIs</span>
                <span className="text-orange-500">✦</span>
                <span>DevOps</span>
                <span className="text-orange-500">✦</span>
                <span>Databases</span>
                <span className="text-orange-500">✦</span>
                <span>CI/CD</span>
                <span className="text-orange-500">✦</span>
                <span>Docker</span>
                <span className="text-orange-500">✦</span>
                <span>Kubernetes</span>
                <span className="text-orange-500">✦</span>
                <span>React</span>
                <span className="text-orange-500">✦</span>
                <span>Node.js</span>
                <span className="text-orange-500">✦</span>
                <span>Express</span>
                <span className="text-orange-500">✦</span>
                <span>TypeScript</span>
                <span className="text-orange-500">✦</span>
                <span>Next.js</span>
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

