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
    <div className="max-w-sm mx-auto bg-white border rounded p-6">
      <h1 className="text-xl font-bold mb-4">Admin Login</h1>
      {status.error && <p className="text-red-600 mb-2">{status.error}</p>}
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1" htmlFor="usernameOrEmail">Username or Email</label>
          <input
            id="usernameOrEmail"
            name="usernameOrEmail"
            className="w-full border rounded px-3 py-2"
            value={form.usernameOrEmail}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1" htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            className="w-full border rounded px-3 py-2"
            value={form.password}
            onChange={onChange}
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 disabled:opacity-60"
          disabled={status.loading}
        >
          {status.loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
    </div>
  )
}
