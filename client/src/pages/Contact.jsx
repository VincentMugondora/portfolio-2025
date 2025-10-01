import { useState } from 'react'
import { messages } from '../lib/api'
import { FiMail, FiMapPin, FiClock, FiCalendar, FiLinkedin, FiGithub, FiTwitter, FiInstagram } from 'react-icons/fi'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ loading: false, error: '', success: '' })

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ loading: true, error: '', success: '' })
    try {
      await messages.create(form)
      setStatus({ loading: false, error: '', success: 'Thanks! Your message has been sent.' })
      setForm({ name: '', email: '', message: '' })
    } catch (e) {
      setStatus({ loading: false, error: e.message, success: '' })
    }
  }

  return (
    <>
      {/* Hero / Contact */}
      <section className="relative pt-6 md:pt-8 pb-12 md:pb-14">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gray-100 p-4 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left: Info */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-800 shadow">CONTACT</span>
                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Let’s build something impactful</h1>
                <p className="text-gray-600 max-w-md">I’m open to new opportunities and collaborations. Share a bit about your project — I usually reply within 24 hours.</p>

                <div className="rounded-2xl bg-white p-5 border border-gray-100 shadow-sm">
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 text-gray-800">
                      <FiMail className="h-4 w-4 text-gray-500" />
                      <a href="mailto:vincent@uncommon.org" className="hover:underline">vincent@uncommon.org</a>
                    </div>
                    <div className="flex items-center gap-3 text-gray-800">
                      <FiMapPin className="h-4 w-4 text-gray-500" />
                      Harare, Zimbabwe (remote‑friendly)
                    </div>
                    <div className="flex items-center gap-3 text-gray-800">
                      <FiClock className="h-4 w-4 text-gray-500" />
                      Replies in ~24h
                    </div>
                  </div>
                </div>

                {/* Actions: schedule + socials */}
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href="https://calendly.com/your-calendly-username/intro-call"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-full bg-black text-white px-5 py-2 text-sm hover:bg-gray-900"
                  >
                    <FiCalendar className="mr-2 h-4 w-4" />
                    Schedule a call
                  </a>
                </div>
                <div className="mt-3 flex items-center gap-3">
                  <a href="#" aria-label="LinkedIn" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                    <FiLinkedin className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="GitHub" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                    <FiGithub className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                    <FiTwitter className="h-4 w-4" />
                  </a>
                  <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                    <FiInstagram className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-white p-5 md:p-6 shadow-sm border border-gray-100">
                  {status.error && (
                    <div className="mb-4 rounded-lg bg-red-50 text-red-700 px-4 py-2 text-sm border border-red-100">{status.error}</div>
                  )}
                  {status.success && (
                    <div className="mb-4 rounded-lg bg-emerald-50 text-emerald-700 px-4 py-2 text-sm border border-emerald-100">{status.success}</div>
                  )}
                  <form onSubmit={onSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                      <input
                        id="name"
                        name="name"
                        className="w-full rounded-xl ring-1 ring-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                        value={form.name}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full rounded-xl ring-1 ring-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                        value={form.email}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        className="w-full rounded-xl ring-1 ring-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                        rows={6}
                        value={form.message}
                        onChange={onChange}
                        required
                      />
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-gray-500">By sending, you agree to be contacted back about your inquiry.</p>
                      <button
                        type="submit"
                        className="inline-flex items-center rounded-full bg-black text-white px-5 py-2 text-sm hover:bg-gray-900 disabled:opacity-60"
                        disabled={status.loading}
                      >
                        {status.loading ? 'Sending…' : 'Send Message'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
