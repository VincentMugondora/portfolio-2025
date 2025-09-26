import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { auth, setToken } from '../../lib/api'

export default function Login() {
  const navigate = useNavigate()
  const location = useLocation()
  const [form, setForm] = useState({ usernameOrEmail: '', password: '' })
  const [status, setStatus] = useState({ loading: false, error: '' })

  function onChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setStatus({ loading: true, error: '' })
    try {
      const res = await auth.login(form.usernameOrEmail, form.password)
      setToken(res.token)
      const from = location.state?.from?.pathname || '/admin'
      navigate(from, { replace: true })
    } catch (e) {
      setStatus({ loading: false, error: e.message || 'Login failed' })
      return
    }
    setStatus({ loading: false, error: '' })
  }

  return (
    <section className="relative pt-6 md:pt-8 pb-12 md:pb-14">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-gray-100 p-4 md:p-8 lg:p-10">
          <div className="max-w-md mx-auto">
            <div className="text-center mb-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-800 shadow">ADMIN</span>
              <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Sign in</h1>
              <p className="mt-1 text-gray-600 text-sm">Access your dashboard to manage projects, skills, certificates, and messages.</p>
            </div>

            <div className="rounded-2xl bg-white p-5 md:p-6 shadow-sm border border-gray-100">
              {status.error && (
                <div className="mb-4 rounded-lg bg-red-50 text-red-700 px-4 py-2 text-sm border border-red-100">{status.error}</div>
              )}
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="usernameOrEmail">Username or Email</label>
                  <input
                    id="usernameOrEmail"
                    name="usernameOrEmail"
                    className="w-full rounded-xl ring-1 ring-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                    value={form.usernameOrEmail}
                    onChange={onChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1" htmlFor="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="w-full rounded-xl ring-1 ring-gray-200 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-black"
                    value={form.password}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">Use your admin credentials to continue</span>
                  <button
                    type="submit"
                    className="inline-flex items-center rounded-full bg-black text-white px-5 py-2 text-sm hover:bg-gray-900 disabled:opacity-60"
                    disabled={status.loading}
                  >
                    {status.loading ? 'Signing in…' : 'Sign In'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
