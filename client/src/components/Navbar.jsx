import { NavLink } from 'react-router-dom'

const navItemClass = ({ isActive }) =>
  [
    'px-2.5 py-1.5 text-sm text-gray-700 hover:text-black',
    isActive && 'text-orange-600 underline decoration-2 underline-offset-8 decoration-orange-500',
  ]
    .filter(Boolean)
    .join(' ')

export default function Navbar() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
  const adminTo = token ? '/admin' : '/admin/login'
  const adminText = token ? 'Dashboard' : 'Admin'
  return (
    <>
    <header className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 py-2 md:py-3">
        <div className="flex items-center justify-between rounded-full border border-gray-200 bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur">
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
            <NavLink to="/projects" className={navItemClass}>
              Projects
            </NavLink>
            <NavLink to="/skills" className={navItemClass}>
              Skills
            </NavLink>
            <NavLink to="/certificates" className={navItemClass}>
              Certificates
            </NavLink>
            <NavLink to="/contact" className={navItemClass}>
              Contact
            </NavLink>
          </nav>

          {/* Right CTA */}
          <div className="flex items-center gap-2">
            <NavLink
              to={adminTo}
              className="inline-flex items-center rounded-full border border-gray-300 text-gray-800 px-3 py-1.5 hover:bg-gray-100"
            >
              {adminText}
            </NavLink>
            <a
              href="/cv/Vincent_Mugondora_CV.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="hidden sm:inline-flex items-center rounded-full border border-gray-300 text-gray-800 px-3 py-1.5 hover:bg-gray-100"
            >
              Download CV
            </a>
            <NavLink
              to="/contact"
              className="inline-flex items-center rounded-full bg-black text-white px-4 py-1.5 hover:bg-gray-900 shadow-inner"
            >
              Contact Me
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

