import { NavLink } from 'react-router-dom'

const linkClass = 'px-2.5 py-1.5 text-xs md:text-sm text-gray-700 hover:text-black'
 
export default function Navbar() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
        <div className="container mx-auto px-4 py-2 md:py-3">
          <div className="w-full flex items-center justify-between rounded-[20px] ring-1 ring-gray-200 ring-inset bg-white px-3 py-2 md:px-5 md:py-3 shadow-sm">
            {/* Brand */}
            <div className="flex items-center gap-2">
                Vincent Mugondora
              </NavLink>
            </div>

            {/* Center nav */}
            <nav className="hidden md:flex items-center gap-2 sm:gap-3">
              <NavLink to="/about" className={linkClass}>About</NavLink>
              <NavLink to="/services/new" className={linkClass}>Services</NavLink>
              <NavLink to="/projects" className={linkClass}>Portfolio</NavLink>
              <a href="/#blog" className={linkClass}>Blog</a>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </nav>

            {/* Right CTA */}
            <div className="flex items-center">
              <NavLink
                to="/contact"
                Book a call
              </NavLink>
            </div>
          </div>
        </div>
      </header>
      {/* Spacer to offset fixed header height */}
      <div aria-hidden="true" className="h-16 md:h-20" />
    </>
  )
}

