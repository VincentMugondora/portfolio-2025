import { useEffect, useState } from 'react'
import { certificates } from '../lib/api'
import { uploadUrl } from '../lib/url'

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
            <article key={c._id} className="rounded-[24px] bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
                {c.fileType === 'image' ? (
                  <img src={uploadUrl(c.fileUrl)} alt={c.title} className="h-full w-full object-cover" loading="lazy" />
                ) : (
                  <div className="h-full w-full grid place-items-center text-gray-700">
                    <span className="inline-flex items-center rounded-full bg-white text-gray-900 px-3 py-1 ring-1 ring-gray-200 text-sm">PDF Document</span>
                  </div>
                )}
                {c.fileType === 'pdf' && (
                  <a href={uploadUrl(c.fileUrl)} target="_blank" rel="noreferrer" className="absolute bottom-2 right-2 inline-flex items-center rounded-full bg-black text-white px-3 py-1.5 text-xs hover:bg-gray-900">
                    View PDF
                  </a>
                )}
              </div>
              <div className="px-4 md:px-5 pb-4 md:pb-5 pt-3 flex-1 flex flex-col">
                <h2 className="text-lg font-semibold">{c.title}</h2>
                {c.description && <p className="mt-2 text-sm text-gray-600 flex-1">{c.description}</p>}
                {c.fileType !== 'pdf' && (
                  <div className="mt-3">
                    <a href={uploadUrl(c.fileUrl)} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-white text-gray-900 px-3 py-1.5 text-sm ring-1 ring-gray-200 hover:bg-gray-50">View full</a>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  )
}

