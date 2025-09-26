import { useEffect, useState } from 'react'
import { projects } from '../lib/api'
import { uploadUrl } from '../lib/url'

export default function Projects() {
  const [items, setItems] = useState([])
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
            <article key={p._id} className="rounded-[24px] bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="aspect-[16/10] w-full overflow-hidden bg-gray-100">
                {Array.isArray(p.screenshots) && p.screenshots.length > 0 ? (
                  <img src={uploadUrl(p.screenshots[0])} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="h-full w-full grid place-items-center text-gray-400 text-sm">No image</div>
                )}
              </div>
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
    </section>
  )
}
