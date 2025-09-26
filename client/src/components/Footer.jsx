import { Link } from 'react-router-dom'
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter, FiMail } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-10">
      <div className="container mx-auto px-4">
        <div className="rounded-[28px] bg-gray-100 p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand + CTA */}
            <div>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">V</div>
                <div className="text-xl font-semibold">Vincent<span className="text-orange-500">.</span></div>
              </div>
              <p className="mt-3 text-sm text-gray-600 max-w-xs">
                Full‑stack • ML • Mobile. Based in Harare, Zimbabwe.
              </p>
              <Link to="/contact" className="mt-4 inline-flex items-center rounded-full bg-black text-white px-4 py-1.5 text-sm hover:bg-gray-900">
                Book a call
              </Link>
            </div>

            {/* Site links */}
            <div>
              <div className="text-sm font-semibold text-gray-800">Site</div>
              <ul className="mt-3 space-y-2 text-sm">
                <li><Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                <li><Link to="/projects" className="text-gray-600 hover:text-gray-900">Projects</Link></li>
                <li><Link to="/skills" className="text-gray-600 hover:text-gray-900">Skills</Link></li>
                <li><Link to="/certificates" className="text-gray-600 hover:text-gray-900">Certificates</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
              </ul>
            </div>

            {/* Social + Contact */}
            <div>
              <div className="text-sm font-semibold text-gray-800">Connect</div>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <a href="mailto:vincent@uncommon.org" className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-sm text-gray-800 ring-1 ring-gray-200 hover:bg-gray-50">
                  <FiMail className="h-4 w-4" /> vincent@uncommon.org
                </a>
                <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white"><FiLinkedin className="h-4 w-4" /></a>
                <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white"><FiGithub className="h-4 w-4" /></a>
                <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white"><FiInstagram className="h-4 w-4" /></a>
                <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white"><FiTwitter className="h-4 w-4" /></a>
              </div>
            </div>
          </div>

          {/* Bottom rail */}
          <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="grid h-6 w-6 place-items-center rounded-full border border-gray-400 text-gray-600">V</span>
              <span className="font-semibold tracking-wide">VINCENT MUGONDORA</span>
            </div>
            <div>© {year}</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
