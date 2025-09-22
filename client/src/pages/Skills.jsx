import { useEffect, useState } from 'react'
import { skills } from '../lib/api'

export default function Skills() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let mounted = true
    skills
      .list()
      .then((res) => mounted && setItems(res.items || []))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
    return () => (mounted = false)
  }, [])

  if (loading) return <p>Loading skills...</p>
  if (error) return <p className="text-red-600">{error}</p>

  const byCategory = items.reduce((acc, s) => {
    const key = s.category || 'General'
    acc[key] = acc[key] || []
    acc[key].push(s)
    return acc
  }, {})

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6">Skills</h1>
      {Object.keys(byCategory).length === 0 ? (
        <p className="text-gray-600">No skills yet.</p>
      ) : (
        <div className="space-y-8">
          {Object.entries(byCategory).map(([cat, list]) => (
            <div key={cat}>
              <h2 className="font-semibold mb-4">{cat}</h2>
              <div className="flex flex-wrap gap-2">
                {list.map((s) => (
                  <span key={s._id} className="px-3 py-1 rounded-full bg-white border text-sm">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
