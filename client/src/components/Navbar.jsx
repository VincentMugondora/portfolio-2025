import { NavLink } from 'react-router-dom'

const linkClass = 'px-2.5 py-1.5 text-xs md:text-sm text-gray-700 hover:text-black'
 
export default function Navbar() {
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 py-2 md:py-3">
          <div className="w-full flex items-center justify-between rounded-[20px] ring-1 ring-gray-200 ring-inset bg-white px-3 py-2 md:px-5 md:py-3 shadow-sm">
            {/* Brand */}
            <div className="flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-full border border-gray-300 text-gray-900 font-bold">V</div>
              <NavLink to="/" className="text-[12px] md:text-sm font-semibold tracking-widest text-gray-700 uppercase">
                Vincent Mugondora
              </NavLink>
            </div>

            {/* Center nav */}
            <nav className="hidden md:flex items-center gap-2 sm:gap-3">
              <NavLink to="/about" className={linkClass}>About</NavLink>
              <a href="/about#services" className={linkClass}>Services</a>
              <NavLink to="/projects" className={linkClass}>Portfolio</NavLink>
              <a href="/#blog" className={linkClass}>Blog</a>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </nav>

            {/* Right CTA */}
            <div className="flex items-center">
              <NavLink
                to="/contact"
                className="inline-flex items-center rounded-full bg-black text-white px-4 py-1.5 hover:bg-gray-900 shadow-inner"
              >
                Book a call
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      {/* Spacer to offset fixed header height */}
      <div aria-hidden="true" className="h-16 md:h-20" />
  )
}

