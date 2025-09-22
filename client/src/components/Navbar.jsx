import { NavLink } from 'react-router-dom'

const navLinkClass = ({ isActive }) =>
  `px-3 py-2 rounded hover:bg-gray-200 ${isActive ? 'font-semibold text-blue-600' : 'text-gray-700'}`

export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold">Vincent Mugondora</NavLink>
        <nav className="hidden md:flex gap-2">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/projects" className={navLinkClass}>
            Projects
          </NavLink>
          <NavLink to="/certificates" className={navLinkClass}>
            Certificates
          </NavLink>
          <NavLink to="/skills" className={navLinkClass}>
            Skills
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
          <NavLink to="/admin" className={navLinkClass}>
            Admin
          </NavLink>
        </nav>
        <a
          href="/cv/Vincent_Mugondora_CV.pdf"
          className="ml-3 inline-flex items-center rounded bg-blue-600 text-white px-3 py-2 hover:bg-blue-700"
          download
        >
          Download CV
        </a>
      </div>
    </header>
  )
}
