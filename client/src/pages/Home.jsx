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
          <div className="absolute bottom-5 md:bottom-8 w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full bg-orange-500/90" />
          <div
            className="absolute bottom-5 md:bottom-8 w-72 h-72 md:w-[26rem] md:h-[26rem] rounded-full opacity-20"
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
    </section>
  )
}

