import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiMenu, FiX } from 'react-icons/fi'

const linkClass = 'px-2.5 py-1.5 text-xs md:text-sm text-gray-700 hover:text-black'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  // Lock scroll and close on Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    document.documentElement.classList.toggle('overflow-hidden', open)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.documentElement.classList.remove('overflow-hidden')
    }
  }, [open])

  const close = () => setOpen(false)

  return (
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

            {/* Center nav (desktop) */}
            <nav className="hidden lg:flex items-center gap-2 sm:gap-3">
              <NavLink to="/about" className={linkClass}>About</NavLink>
              <NavLink to="/services" className={linkClass}>Services</NavLink>
              <NavLink to="/portfolio" className={linkClass}>Portfolio</NavLink>
              <a href="/blog" className={linkClass}>Blog</a>
              <NavLink to="/contact" className={linkClass}>Contact</NavLink>
            </nav>

            {/* Right actions */}
            <div className="flex items-center">
              <NavLink
                to="/contact"
                className="inline-flex items-center rounded-full bg-black text-white px-4 py-1.5 hover:bg-gray-900 shadow-inner"
              >
                Book a call
              </NavLink>
              {/* Hamburger (mobile + md) */}
              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={open}
                onClick={() => setOpen(true)}
                className="ml-2 inline-flex lg:hidden items-center justify-center h-9 w-9 rounded-full ring-1 ring-gray-200 hover:bg-gray-100"
              >
                <FiMenu className="h-5 w-5 text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* Mobile menu overlay + panel */}
      <div className={`fixed inset-0 z-[60] ${open ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-200 ${open ? 'opacity-100' : 'opacity-0'}`}
          onClick={close}
          aria-hidden="true"
        />
        {/* Panel */}
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] sm:w-[360px] max-w-[90%]
            bg-white/80 backdrop-blur-xl ring-1 ring-gray-200 shadow-2xl
            transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
          role="dialog"
          aria-modal="true"
        >
          {/* Panel header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200/70 bg-gradient-to-br from-gray-50/70 to-white/40">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-full border border-gray-300 text-gray-900 font-bold">V</div>
              <span className="text-sm font-semibold tracking-widest text-gray-700 uppercase">Vincent Mugondora</span>
            </div>
            <button
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="inline-flex items-center justify-center h-9 w-9 rounded-full ring-1 ring-gray-200 hover:bg-gray-100"
            >
              <FiX className="h-5 w-5 text-gray-800" />
            </button>
          </div>

          {/* Links */}
          <nav className="p-4">
            <ul className="space-y-1.5">
              <li><NavLink to="/about" onClick={close} className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/70 ring-1 ring-gray-200 hover:bg-white/90">About<span className="text-gray-400">→</span></NavLink></li>
              <li><NavLink to="/services" onClick={close} className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/70 ring-1 ring-gray-200 hover:bg-white/90">Services<span className="text-gray-400">→</span></NavLink></li>
              <li><NavLink to="/portfolio" onClick={close} className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/70 ring-1 ring-gray-200 hover:bg-white/90">Portfolio<span className="text-gray-400">→</span></NavLink></li>
              <li><a href="/blog" onClick={close} className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/70 ring-1 ring-gray-200 hover:bg-white/90">Blog<span className="text-gray-400">→</span></a></li>
              <li><NavLink to="/contact" onClick={close} className="flex items-center justify-between rounded-xl px-4 py-3 bg-white/70 ring-1 ring-gray-200 hover:bg-white/90">Contact<span className="text-gray-400">→</span></NavLink></li>
            </ul>
          </nav>

          {/* CTA */}
          <div className="px-4">
            <NavLink
              to="/contact"
              onClick={close}
              className="block text-center rounded-full bg-black text-white px-5 py-2.5 text-sm font-medium shadow-inner hover:bg-gray-900"
            >
              Get In Touch
            </NavLink>
          </div>

          {/* Footer note */}
          <div className="mt-auto p-4 text-[11px] text-gray-500">
            Harare, Zimbabwe • Open to collaborations
          </div>
        </aside>
      </div>
      {/* Spacer to offset fixed header height */}
      <div aria-hidden="true" className="h-16 md:h-20" />
    </>
  )
}
