import { useEffect, useState } from 'react'
import { certificates } from '../lib/api'

export default function Certificates() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

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
      {items.length === 0 ? (
        <p className="text-gray-600">No certificates yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((c) => (
            <article key={c._id} className="bg-white rounded-lg border overflow-hidden">
              <div className="aspect-video bg-gray-100 flex items-center justify-center">
                {c.fileType === 'image' ? (
                  <img src={c.fileUrl} alt={c.title} className="object-contain w-full h-full" />
                ) : (
                  <a href={c.fileUrl} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
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
