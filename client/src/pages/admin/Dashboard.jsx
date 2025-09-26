import { useEffect, useState } from 'react'
import { auth, clearToken, projects, skills, certificates, messages, uploads } from '../../lib/api'
import { useNavigate } from 'react-router-dom'
import { uploadUrl } from '../../lib/url'

function Section({ title, children, actions }) {
  return (
    <section className="rounded-2xl bg-white p-5 md:p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold">{title}</h2>
        {actions}
      </div>
      {children}
    </section>
  )
}

function ProjectsManager() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ title: '', description: '', techStack: '', githubUrl: '', demoUrl: '', screenshots: [] })

  const load = () => {
    setLoading(true)
    projects
      .list()
      .then((res) => setItems(res.items || []))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onScreenshotsSelected = async (e) => {
    const files = Array.from(e.target.files || [])
    if (files.length === 0) return
    try {
      // upload sequentially to keep it simple and show in selected order
      const uploaded = []
      for (const file of files) {
        const res = await uploads.upload(file)
        if (res?.url) uploaded.push(res.url)
      }
      setForm((f) => ({ ...f, screenshots: [...(f.screenshots || []), ...uploaded] }))
      e.target.value = ''
    } catch (err) {
      alert(err.message || 'Upload failed')
    }
  }

  const removeScreenshot = (url) => {
    setForm((f) => ({ ...f, screenshots: (f.screenshots || []).filter((u) => u !== url) }))
  }

  const onCreate = async (e) => {
    e.preventDefault()
    try {
      const payload = {
        title: form.title,
        description: form.description,
        techStack: form.techStack
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        githubUrl: form.githubUrl,
        demoUrl: form.demoUrl,
        screenshots: form.screenshots || [],
      }
      await projects.create(payload)
      setForm({ title: '', description: '', techStack: '', githubUrl: '', demoUrl: '', screenshots: [] })
      load()
    } catch (e) {
      setError(e.message)
    }
  }

  const onDelete = async (id) => {
    if (!confirm('Delete this project?')) return
    await projects.remove(id)
    setItems((prev) => prev.filter((p) => p._id !== id))
  }

  return (
    <Section title="Projects">
      <form onSubmit={onCreate} className="grid md:grid-cols-2 gap-4 mb-6">
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Title</label>
          <input name="title" value={form.title} onChange={onChange} required className="w-full border rounded px-3 py-2" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Description</label>
          <textarea name="description" value={form.description} onChange={onChange} rows={3} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Tech Stack (comma-separated)</label>
          <input name="techStack" value={form.techStack} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">GitHub URL</label>
          <input name="githubUrl" value={form.githubUrl} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Demo URL</label>
          <input name="demoUrl" value={form.demoUrl} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Screenshots (images)</label>
          <input type="file" accept="image/*" multiple onChange={onScreenshotsSelected} className="w-full" />
          {(form.screenshots || []).length > 0 && (
            <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {form.screenshots.map((url) => (
                <div key={url} className="relative group">
                  <div className="aspect-[16/10] overflow-hidden rounded border">
                    <img src={url} alt="screenshot" className="h-full w-full object-cover" />
                  </div>
                  <button
                    type="button"
                    onClick={() => removeScreenshot(url)}
                    className="mt-1 text-xs text-red-600 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="md:col-span-2">
          <button className="inline-flex items-center rounded-full bg-black text-white px-5 py-2 text-sm hover:bg-gray-900">Add Project</button>
        </div>
      </form>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-600">No projects yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((p) => (
            <div key={p._id} className="border rounded p-4 bg-gray-50">
              <h3 className="font-semibold mb-1">{p.title}</h3>
              {p.description && <p className="text-sm text-gray-600 mb-2">{p.description}</p>}
              <div className="flex gap-3 text-sm">
                {p.githubUrl && (
                  <a className="text-blue-600 hover:underline" href={p.githubUrl} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                )}
                {p.demoUrl && (
                  <a className="text-blue-600 hover:underline" href={p.demoUrl} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                )}
              </div>
              <button
                onClick={() => onDelete(p._id)}
                className="mt-3 text-sm text-red-600 hover:underline"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}

function SkillsManager() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', category: 'General' })

  const load = () => {
    setLoading(true)
    skills
      .list()
      .then((res) => setItems(res.items || []))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onCreate = async (e) => {
    e.preventDefault()
    try {
      await skills.create({
        name: form.name,
        category: form.category,
      })
      setForm({ name: '', category: 'General' })
      load()
    } catch (e) {
      setError(e.message)
    }
  }

  const onDelete = async (id) => {
    if (!confirm('Delete this skill?')) return
    await skills.remove(id)
    setItems((prev) => prev.filter((s) => s._id !== id))
  }

  return (
    <Section title="Skills">
      <form onSubmit={onCreate} className="grid md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input name="name" value={form.name} onChange={onChange} required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">Category</label>
          <input name="category" value={form.category} onChange={onChange} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="md:col-span-3">
          <button className="inline-flex items-center rounded-full bg-black text-white px-5 py-2 text-sm hover:bg-gray-900">Add Skill</button>
        </div>
      </form>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-600">No skills yet.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((s) => (
            <li key={s._id} className="border rounded p-3 flex items-center justify-between bg-gray-50">
              <div>
                <span className="font-medium">{s.name}</span>
                <span className="text-sm text-gray-500 ml-2">{s.category}</span>
              </div>
              <button className="text-red-600 text-sm hover:underline" onClick={() => onDelete(s._id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}

function CertificatesManager() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ title: '', description: '', file: null })

  const load = () => {
    setLoading(true)
    certificates
      .list()
      .then((res) => setItems(res.items || []))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const onFile = (e) => setForm((f) => ({ ...f, file: e.target.files?.[0] || null }))

  const onCreate = async (e) => {
    e.preventDefault()
    if (!form.file) return setError('Please select an image or PDF')
    try {
      await certificates.upload({ title: form.title, description: form.description, file: form.file })
      setForm({ title: '', description: '', file: null })
      load()
    } catch (e) {
      setError(e.message)
    }
  }

  const onDelete = async (id) => {
    if (!confirm('Delete this certificate?')) return
    await certificates.remove(id)
    setItems((prev) => prev.filter((c) => c._id !== id))
  }

  return (
    <Section title="Certificates">
      <form onSubmit={onCreate} className="grid md:grid-cols-3 gap-4 mb-6">
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Title</label>
          <input name="title" value={form.title} onChange={onChange} required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm mb-1">File (image or PDF)</label>
          <input type="file" accept="image/*,application/pdf" onChange={onFile} className="w-full" />
        </div>
        <div className="md:col-span-3">
          <label className="block text-sm mb-1">Description</label>
          <textarea name="description" value={form.description} onChange={onChange} rows={2} className="w-full border rounded px-3 py-2" />
        </div>
        <div className="md:col-span-3">
          <button className="inline-flex items-center rounded-full bg-black text-white px-5 py-2 text-sm hover:bg-gray-900">Upload</button>
        </div>
      </form>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-600">No certificates yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((c) => (
            <div key={c._id} className="border rounded overflow-hidden bg-gray-50">
              <div className="aspect-video flex items-center justify-center bg-white">
                {c.fileType === 'image' ? (
                  <img src={uploadUrl(c.fileUrl)} alt={c.title} className="object-contain w-full h-full" />
                ) : (
                  <a href={uploadUrl(c.fileUrl)} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    View PDF
                  </a>
                )}
              </div>
              <div className="p-3">
                <div className="font-medium">{c.title}</div>
                {c.description && <div className="text-sm text-gray-600 mt-1">{c.description}</div>}
                <button className="mt-2 text-sm text-red-600 hover:underline" onClick={() => onDelete(c._id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  )
}

function MessagesManager() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const load = () => {
    setLoading(true)
    messages
      .list()
      .then((res) => setItems(res.items || []))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    load()
  }, [])

  const onMarkRead = async (id) => {
    await messages.markRead(id)
    setItems((prev) => prev.map((m) => (m._id === id ? { ...m, read: true } : m)))
  }

  return (
    <Section title="Messages">
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-gray-600">No messages yet.</p>
      ) : (
        <ul className="space-y-3">
          {items.map((m) => (
            <li key={m._id} className="border rounded p-3 bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{m.name}</div>
                  <div className="text-sm text-gray-600">{m.email}</div>
                </div>
                <div className="text-sm text-gray-500">{new Date(m.createdAt).toLocaleString()}</div>
              </div>
              <p className="mt-2">{m.message}</p>
              <div className="mt-2">
                {m.read ? (
                  <span className="text-xs text-green-700">Read</span>
                ) : (
                  <button className="text-sm text-blue-600 hover:underline" onClick={() => onMarkRead(m._id)}>
                    Mark as Read
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </Section>
  )
}

export default function Dashboard() {
  const [user, setUser] = useState(null)
  const [tab, setTab] = useState('projects')
  const navigate = useNavigate()

  useEffect(() => {
    auth
      .me()
      .then((res) => setUser(res.user))
      .catch(() => {
        clearToken()
        navigate('/admin/login', { replace: true })
      })
  }, [navigate])

  const logout = () => {
    clearToken()
    navigate('/admin/login', { replace: true })
  }

  return (
    <section className="relative pt-6 md:pt-8 pb-12 md:pb-14">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl bg-gray-100 p-4 md:p-8 lg:p-10">
          <div className="flex items-center justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-800 shadow">ADMIN</span>
              <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight">Dashboard</h1>
              {user && <p className="mt-1 text-sm text-gray-600">Signed in as {user.username || user.email}</p>}
            </div>
            <button
              onClick={logout}
              className="inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-2 text-sm ring-1 ring-gray-200 hover:bg-gray-50"
            >
              Log out
            </button>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {[
              ['projects', 'Projects'],
              ['skills', 'Skills'],
              ['certs', 'Certificates'],
              ['messages', 'Messages'],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`px-3 py-1.5 rounded-full ring-1 ${tab === key ? 'bg-black text-white ring-black' : 'bg-white text-gray-800 ring-gray-200 hover:bg-gray-50'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {tab === 'projects' && <ProjectsManager />}
          {tab === 'skills' && <SkillsManager />}
          {tab === 'certs' && <CertificatesManager />}
          {tab === 'messages' && <MessagesManager />}
        </div>
      </div>
    </section>
  )
}
