import { useEffect, useState } from 'react'
import { projects } from '../lib/api'

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
            <article key={p._id} className="bg-white rounded-lg border p-4 flex flex-col">
              <h2 className="text-lg font-semibold mb-2">{p.title}</h2>
              {p.description && <p className="text-gray-600 mb-3">{p.description}</p>}
              {Array.isArray(p.techStack) && p.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {p.techStack.map((t, i) => (
                    <span key={i} className="text-xs bg-gray-100 px-2 py-1 rounded border">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-auto flex gap-3">
                {p.githubUrl && (
                  <a
                    href={p.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {p.demoUrl && (
                  <a
                    href={p.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}
