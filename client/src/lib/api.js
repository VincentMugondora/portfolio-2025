const BASE = import.meta.env?.VITE_API_BASE || '/api'

function getToken() {
  return localStorage.getItem('token')
}

export function setToken(token) {
  if (token) localStorage.setItem('token', token)
}

export function clearToken() {
  localStorage.removeItem('token')
}

async function request(path, { method = 'GET', body, auth = false, isForm = false } = {}) {
  const headers = {}
  if (auth) {
    const token = getToken()
    if (token) headers['Authorization'] = `Bearer ${token}`
  }
  let fetchOptions = { method, headers }
  if (body) {
    if (isForm) {
      fetchOptions.body = body
    } else {
      headers['Content-Type'] = 'application/json'
      fetchOptions.body = JSON.stringify(body)
    }
  }
  const res = await fetch(`${BASE}${path}`, fetchOptions)
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    throw new Error(data?.message || `API error: ${res.status}`)
  }
  return data
}

export const auth = {
  login: (usernameOrEmail, password) => request('/auth/login', { method: 'POST', body: { usernameOrEmail, password } }),
  me: () => request('/auth/me', { auth: true }),
}

export const projects = {
  list: () => request('/projects'),
  create: (payload) => request('/projects', { method: 'POST', body: payload, auth: true }),
  update: (id, payload) => request(`/projects/${id}`, { method: 'PUT', body: payload, auth: true }),
  remove: (id) => request(`/projects/${id}`, { method: 'DELETE', auth: true }),
}

export const certificates = {
  list: () => request('/certificates'),
  upload: ({ title, description, file }) => {
    const form = new FormData()
    form.append('title', title)
    form.append('description', description || '')
    form.append('file', file)
    return request('/certificates', { method: 'POST', body: form, isForm: true, auth: true })
  },
  remove: (id) => request(`/certificates/${id}`, { method: 'DELETE', auth: true }),
}

export const skills = {
  list: () => request('/skills'),
  create: (payload) => request('/skills', { method: 'POST', body: payload, auth: true }),
  update: (id, payload) => request(`/skills/${id}`, { method: 'PUT', body: payload, auth: true }),
  remove: (id) => request(`/skills/${id}`, { method: 'DELETE', auth: true }),
}

export const messages = {
  create: (payload) => request('/messages', { method: 'POST', body: payload }),
  list: () => request('/messages', { auth: true }),
  markRead: (id) => request(`/messages/${id}/read`, { method: 'PATCH', auth: true }),
}

// Generic uploads (admin-only)
export const uploads = {
  upload: (file) => {
    const form = new FormData()
    form.append('file', file)
    return request('/uploads', { method: 'POST', body: form, isForm: true, auth: true })
  },
}
