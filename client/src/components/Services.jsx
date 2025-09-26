import { useState } from 'react'

const services = [
  { id: 1, title: 'Frontend Development' },
  {
    id: 2,
    title: 'Full‑Stack Applications',
    tags: [
      'React & Next.js',
      'Node.js & Express',
      'REST & GraphQL APIs',
      'Testing & CI/CD',
    ],
    description:
      'I build production‑ready web applications end‑to‑end: responsive React/Next.js frontends, secure Node.js/Express backends, and robust REST/GraphQL APIs with automated testing and CI/CD.',
    image: '/avatar.png',
  },
  { id: 3, title: 'Backend Development' },
  { id: 4, title: 'API Development' },
  { id: 5, title: 'DevOps & CI/CD' },
]

function Num({ n }) {
  const num = String(n).padStart(2, '0')
  return <span className="font-semibold text-gray-500">{num}.</span>
}

export default function Services() {
  const [active, setActive] = useState(2)

  return (
    <section className="relative py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="h-px w-6 bg-orange-500" />
            Services
          </div>
          <div className="mt-2 flex flex-col md:flex-row md:items-end md:justify-between gap-3">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">What I Do</h2>
            <p className="text-gray-600 max-w-xl">
              I design and build fast, reliable web apps—frontend, backend, APIs, and CI/CD.
            </p>
          </div>
        </div>

        {/* Accordion - simple, clean cards */}
        <div className="space-y-3 md:space-y-4">
          {services.map((s, idx) => {
            const open = active === s.id
            return (
              <div key={s.id} className="bg-white border rounded-xl">
                <button
                  onClick={() => setActive(open ? 0 : s.id)}
                  aria-expanded={open}
                  className="w-full flex items-center justify-between px-4 py-4 md:px-5 md:py-5"
                >
                  <div className="flex items-center gap-3 md:gap-4">
                    <Num n={idx + 1} />
                    <span className="font-semibold">{s.title}</span>
                  </div>
                  <span className={`shrink-0 w-7 h-7 grid place-items-center rounded-full ${open ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
                    {open ? '–' : '+'}
                  </span>
                </button>
                {open && (
                  <div className="px-4 pb-4 md:px-5 md:pb-5 pt-0">
                    {s.tags?.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-2">
                        {s.tags.map((t) => (
                          <span key={t} className="px-3 py-1.5 rounded-full bg-gray-50 border text-sm">{t}</span>
                        ))}
                      </div>
                    )}
                    {s.description && <p className="mt-3 text-gray-600">{s.description}</p>}
                    {s.image && (
                      <div className="mt-4 rounded-lg overflow-hidden bg-gray-100">
                        <div className="aspect-video">
                          <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <button className="inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm hover:bg-gray-50">
            View All Services
          </button>
        </div>
      </div>
    </section>
  )
}
