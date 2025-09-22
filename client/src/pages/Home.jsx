import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="relative pt-6 md:pt-10 pb-20 md:pb-28">
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
        <div className="inline-flex items-center gap-2 text-sm text-gray-500">
          <span className="h-px w-8 bg-orange-500" />
          Hello There!
        </div>
        <h1 className="mt-3 md:mt-4 text-3xl md:text-6xl font-extrabold tracking-tight">
          I’m <span className="text-orange-600">Vincent Mugondora</span>
        </h1>
        <p className="mt-3 text-gray-600 md:text-lg">Full‑stack Developer</p>
      </div>

      {/* Main hero content */}
      <div className="mt-10 md:mt-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
        {/* Left: testimonial + reviews */}
        <div className="order-2 lg:order-1 space-y-6">
          <div className="text-orange-500 text-5xl leading-none">“</div>
          <p className="text-gray-700 max-w-xs">
            Vincent’s remarkable work transformed our website — highly recommended!
          </p>
          <div className="flex items-center gap-4">
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
            className="relative z-10 w-64 md:w-80 lg:w-96 drop-shadow-xl"
            loading="lazy"
          />

          {/* Floating CTA */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-20 bg-white border rounded-full shadow-xl flex gap-2 p-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2 bg-black text-white hover:bg-gray-900"
            >
              <span>Portfolio</span>
              <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full px-5 py-2 bg-white text-gray-900 border hover:bg-gray-50"
            >
              Hire Me
            </Link>
          </div>
        </div>

        {/* Right: skill tags + social */}
        <div className="order-3 lg:order-3 flex flex-col items-start lg:items-end gap-6">
          <div className="flex flex-wrap gap-3 justify-start lg:justify-end max-w-xs">
            <span className="px-3 py-1.5 rounded-full bg-black text-white text-sm">Prototype</span>
            <span className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-sm">Dashboard</span>
            <span className="px-3 py-1.5 rounded-full bg-white border text-sm">Mobile App Design</span>
            <span className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-sm">Design System</span>
            <span className="px-3 py-1.5 rounded-full bg-black text-white text-sm">Website Design</span>
          </div>
          <div className="pt-2">
            <div className="text-sm text-gray-500 mb-3">Follow Me On</div>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full border hover:bg-black hover:text-white">f</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full border hover:bg-black hover:text-white">x</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full border hover:bg-black hover:text-white">p</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full border hover:bg-black hover:text-white">ig</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom skills strip */}
      <div className="mt-12 md:mt-16">
        <div className="bg-black text-white rounded-full px-5 py-3 flex items-center gap-6 overflow-x-auto">
          <span className="whitespace-nowrap">Website Design</span>
          <span className="text-orange-500">✦</span>
          <span className="whitespace-nowrap">Dashboard</span>
          <span className="text-orange-500">✦</span>
          <span className="whitespace-nowrap">Wireframe</span>
          <span className="text-orange-500">✦</span>
          <span className="whitespace-nowrap">User Research</span>
        </div>
      </div>
    </section>
  )
}

