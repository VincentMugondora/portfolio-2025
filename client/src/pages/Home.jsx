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

      {/* Rotating Hire Me sticker (hidden for tighter match to reference) */}
      <div className="hidden">
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

      {/* Heading (hidden to match cropped hero look) */}
      <div className="hidden">
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
      <div className="mt-6 md:mt-10 grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-12">
        {/* Left: testimonial + reviews */}
        <div className="order-2 lg:order-1 lg:col-span-3 space-y-4 md:space-y-6 max-w-sm lg:max-w-none pl-2 md:pl-4 lg:pl-2 justify-self-start">
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
              <div className="font-semibold"><span className="text-orange-600">150+ Reviews</span> <span className="text-gray-900">(4.9 of 5)</span></div>
              <div className="text-gray-500 text-sm">Reviews from valued clients</div>
            </div>
          </div>
        </div>

        {/* Center: portrait with orange circle + floating CTA */}
        <div className="order-1 lg:order-2 lg:col-span-6 relative flex justify-center items-end min-h-[26rem] md:min-h-[32rem] lg:min-h-[36rem]">
          {/* Orange circle backdrop */}
          <div className="absolute bottom-8 lg:bottom-10 w-80 h-80 md:w-[30rem] md:h-[30rem] lg:w-[34rem] lg:h-[34rem] rounded-full bg-orange-500" />
          <div
            className="absolute bottom-8 lg:bottom-10 w-80 h-80 md:w-[30rem] md:h-[30rem] lg:w-[34rem] lg:h-[34rem] rounded-full opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 30% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 60%, white 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />

          {/* Portrait (placeholder) */}
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop"
            alt="Portrait"
            className="relative z-20 w-72 md:w-[23rem] lg:w-[26rem] drop-shadow-2xl"
            loading="lazy"
          />

          {/* Floating CTA */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-30 bg-white border-4 md:border-6 border-black rounded-full shadow-[0_12px_24px_rgba(0,0,0,0.15)] flex gap-2 p-1.5 md:p-2.5">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full px-6 md:px-7 py-3 md:py-3 text-base md:text-lg font-semibold bg-black text-white hover:bg-gray-900"
            >
              <span>Portfolio</span>
              <span className="inline-block w-2 h-2 rounded-full bg-orange-500" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full px-6 md:px-7 py-3 md:py-3 text-base md:text-lg font-semibold bg-white text-gray-900 hover:bg-gray-50"
            >
              Hire Me
            </Link>
          </div>

          {/* Floating skill tags to the right of portrait */}
          <div className="pointer-events-none absolute -right-4 md:-right-6 top-6 md:top-10 w-56 md:w-64 hidden md:block">
            <div className="flex flex-wrap gap-3 justify-end">
              <span className="px-3 py-1.5 rounded-full bg-black text-white text-sm">Prototype</span>
              <span className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-sm">Dashboard</span>
              <span className="px-3 py-1.5 rounded-full bg-white border text-sm">Mobile App Design</span>
              <span className="px-3 py-1.5 rounded-full bg-orange-500 text-white text-sm">Design System</span>
              <span className="px-3 py-1.5 rounded-full bg-black text-white text-sm">Website Design</span>
            </div>
          </div>
        </div>

        {/* Right: social only to match layout */}
        <div className="order-3 lg:order-3 lg:col-span-3 flex flex-col items-start lg:items-end gap-6">
          <div className="hidden" />
          <div className="pt-2 pr-2 text-right">
            <div className="text-sm text-gray-500 mb-3">Follow Us On</div>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full border hover:bg-black hover:text-white">f</a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full border hover:bg-black hover:text-white">x</a>
              <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full border hover:bg-black hover:text-white">p</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 grid place-items-center rounded-full border hover:bg-black hover:text-white">ig</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom skills strip (full-width, pinned to hero bottom) */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-screen px-4 md:px-8 z-10">
        <div className="mx-auto max-w-none bg-black text-white rounded-full px-6 md:px-10 py-3 md:py-4 flex items-center justify-center gap-8 md:gap-12">
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

