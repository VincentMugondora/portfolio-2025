import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { certificates } from '../lib/api'
import { uploadUrl } from '../lib/url'

export default function Certificates() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ title: '', description: '', file: null })
  const [uploading, setUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  const onFile = (e) => setForm((f) => ({ ...f, file: e.target.files?.[0] || null }))

  async function reload() {
    setLoading(true)
    try {
      const res = await certificates.list()
      setItems(res.items || [])
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  async function onUpload(e) {
    e.preventDefault()
    setUploadError('')
    if (!form.file) {
      setUploadError('Please select an image or PDF')
      return
    }
    setUploading(true)
    try {
      await certificates.upload({ title: form.title, description: form.description, file: form.file })
      setForm({ title: '', description: '', file: null })
      await reload()
    } catch (e) {
      setUploadError(e.message || 'Upload failed')
    } finally {
      setUploading(false)
    }
  }

  useEffect(() => {
    let mounted = true
    certificates
      .list()
      .then((res) => mounted && setItems(res.items || []))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
    return () => (mounted = false)
  }, [])

  if (loading) return <p>Loading certificates...</p>
  if (error) return <p className="text-red-600">{error}</p>

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Certificates</h1>
      {/* Admin upload (only when authenticated) */}
      <div className="mb-6">
        {typeof window !== 'undefined' && localStorage.getItem('token') ? (
          <form onSubmit={onUpload} className="bg-white rounded border p-4 grid md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm mb-1">Title</label>
              <input
                name="title"
                value={form.title}
                onChange={onChange}
                required
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">File (image or PDF)</label>
              <input type="file" accept="image/*,application/pdf" onChange={onFile} className="w-full" />
            </div>
            <div className="md:col-span-3">
              <label className="block text-sm mb-1">Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={onChange}
                rows={2}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            {uploadError && (
              <div className="md:col-span-3 text-sm text-red-600">{uploadError}</div>
            )}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="inline-flex items-center rounded bg-blue-600 text-white px-4 py-2 hover:bg-blue-700 disabled:opacity-60"
                disabled={uploading}
              >
                {uploading ? 'Uploading...' : 'Upload Certificate'}
              </button>
            </div>
          </form>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4 flex items-center justify-between">
            <p className="text-sm text-yellow-900">Sign in to upload new certificates.</p>
            <Link
              to="/admin/login"
              className="inline-flex items-center rounded border border-gray-300 text-gray-800 px-3 py-1.5 hover:bg-gray-100"
            >
              Admin Login
            </Link>
          </div>
        )}
      </div>
      {items.length === 0 ? (
        <p className="text-gray-600">No certificates yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <article key={c._id} className="bg-white rounded-lg border overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                {c.fileType === 'image' ? (
                  <img src={uploadUrl(c.fileUrl)} alt={c.title} className="object-contain w-full h-full" />
                ) : (
                  <a href={uploadUrl(c.fileUrl)} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                    View PDF
                  </a>
                )}
              </div>
              <div className="p-4">
                <h2 className="font-semibold">{c.title}</h2>
                {c.description && <p className="text-gray-600 text-sm mt-1">{c.description}</p>}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

