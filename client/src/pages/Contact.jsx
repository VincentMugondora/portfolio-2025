import { useState } from 'react'
import { messages } from '../lib/api'

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
    <section>
      <h1 className="text-2xl font-bold mb-6">Contact</h1>
      <form onSubmit={onSubmit} className="max-w-xl bg-white border rounded p-6 space-y-4">
        {status.error && <p className="text-red-600">{status.error}</p>}
        {status.success && <p className="text-green-600">{status.success}</p>}
        <div>
          <label className="block text-sm mb-1" htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            className="w-full border rounded px-3 py-2"
            value={form.name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full border rounded px-3 py-2"
            value={form.email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            className="w-full border rounded px-3 py-2"
            rows={5}
            value={form.message}
            onChange={onChange}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 disabled:opacity-60"
          disabled={status.loading}
        >
          {status.loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  )
}
