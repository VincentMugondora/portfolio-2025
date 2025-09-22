import { NavLink } from 'react-router-dom'

const navItemClass = ({ isActive }) =>
  [
    'px-3 py-2 text-sm text-gray-700 hover:text-black',
    isActive && 'text-orange-600 underline decoration-2 underline-offset-8 decoration-orange-500',
  ]
    .filter(Boolean)
    .join(' ')

export default function Navbar() {
  return (
    <header className="bg-transparent">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between rounded-full border border-gray-200 bg-white/90 px-4 py-2 shadow-sm backdrop-blur">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
              V
            </div>
            <NavLink to="/" className="text-xl font-semibold">
              Vincent<span className="text-orange-500">.</span>
            </NavLink>
          </div>

          {/* Center nav */}
          <nav className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={navItemClass} end>
              Home
            </NavLink>
            <a href="/#services" className="px-3 py-2 text-sm text-gray-700 hover:text-black">
              Services
            </a>
            <a href="/#about" className="px-3 py-2 text-sm text-gray-700 hover:text-black">
              About
            </a>
            <NavLink to="/projects" className={navItemClass}>
              Projects
            </NavLink>
            <a href="/#blogs" className="px-3 py-2 text-sm text-gray-700 hover:text-black">
              Blogs
            </a>
            <a href="/#testimonials" className="px-3 py-2 text-sm text-gray-700 hover:text-black">
              Testimonials
            </a>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2">
            <NavLink
              to="/contact"
              className="inline-flex items-center rounded-full bg-black text-white px-5 py-2 hover:bg-gray-900 shadow-inner"
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  )
}
