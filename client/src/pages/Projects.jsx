import { useEffect, useState } from 'react'
import { projects } from '../lib/api'
import { uploadUrl } from '../lib/url'

export default function Projects() {
  const [items, setItems] = useState([])
  const [viewer, setViewer] = useState({ open: false, images: [], index: 0, title: '' })
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    projects
      .list()
      .then((res) => {
        if (mounted) setItems(res.items || [])
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
    return () => (mounted = false)
  }, [])

  if (loading) return <p>Loading projects...</p>
  if (error) return <p className="text-red-600">{error}</p>

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">No projects yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p) => (
            <article key={p._id} className="rounded-[24px] bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col transition hover:shadow-md">
              <button
                type="button"
                className="aspect-[16/10] w-full overflow-hidden bg-gray-100"
                onClick={() => {
                  const imgs = Array.isArray(p.screenshots) ? p.screenshots : []
                  if (imgs.length > 0) {
                    setViewer({ open: true, images: imgs, index: 0, title: p.title })
                  }
                }}
                aria-label={`View images for ${p.title}`}
              >
                {Array.isArray(p.screenshots) && p.screenshots.length > 0 ? (
                  <img src={uploadUrl(p.screenshots[0])} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="h-full w-full grid place-items-center text-gray-400 text-sm">No image</div>
                )}
              </button>
              <div className="px-4 md:px-5 pb-4 md:pb-5 pt-3 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold">{p.title}</h2>
                {p.description && <p className="mt-2 text-sm text-gray-600 flex-1">{p.description}</p>}
                {Array.isArray(p.techStack) && p.techStack.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.techStack.map((t, i) => (
                      <span key={i} className="inline-flex items-center rounded-full bg-gray-50 text-gray-700 border border-gray-200 px-2 py-0.5 text-[11px]">
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="mt-4 flex gap-2">
                  {p.demoUrl && (
                    <a href={p.demoUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-black text-white px-3 py-1.5 text-sm hover:bg-gray-900">
                      Live Demo
                    </a>
                  )}
                  {p.githubUrl && (
                    <a href={p.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-white text-gray-900 px-3 py-1.5 text-sm ring-1 ring-gray-200 hover:bg-gray-50">
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {viewer.open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" onClick={() => setViewer((v) => ({ ...v, open: false }))}>
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="rounded-2xl overflow-hidden bg-gray-900">
              <img
                src={uploadUrl(viewer.images[viewer.index])}
                alt={viewer.title}
                className="w-full h-full object-contain max-h-[80vh] bg-black"
                loading="lazy"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-white">
              <button
                type="button"
                className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm hover:bg-white/20"
                onClick={() => setViewer((v) => ({ ...v, open: false }))}
              >
                Close
              </button>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
                  onClick={() => setViewer((v) => ({ ...v, index: (v.index - 1 + v.images.length) % v.images.length }))}
                >
                  Prev
                </button>
                <span className="text-xs text-white/80">{viewer.index + 1} / {viewer.images.length}</span>
                <button
                  type="button"
                  className="inline-flex items-center rounded-full bg-white/10 px-3 py-1.5 text-sm hover:bg-white/20"
                  onClick={() => setViewer((v) => ({ ...v, index: (v.index + 1) % v.images.length }))}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
