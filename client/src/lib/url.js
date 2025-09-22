export function apiBase() {
  return import.meta.env?.VITE_API_BASE || '/api'
}

export function uploadsOrigin() {
  const base = apiBase()
  // If base is '/api', keep it for dev (Vite proxy). In prod, base is e.g. 'https://api.example.com/api'
  if (base === '/api') return '' // same-origin via Vite proxy
  return base.replace(/\/?api\/?$/, '') // strip trailing /api
}

export function uploadUrl(path) {
  if (!path) return ''
  if (/^https?:\/\//i.test(path)) return path
  const origin = uploadsOrigin()
  return `${origin}${path}`
}
