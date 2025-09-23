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
        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start mb-8 md:mb-12">
          <div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span className="h-px w-6 bg-orange-500" />
              My Specialization
            </div>
            <h2 className="mt-2 text-2xl md:text-4xl font-extrabold tracking-tight">
              <span className="text-black">Services I </span>
              <span className="text-orange-600">Provide</span>
              <sup className="text-orange-500 align-super">✦</sup>
            </h2>
          </div>
          <p className="text-gray-600 max-w-md md:ml-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3 md:space-y-4">
          {services.map((s, idx) => {
            const open = active === s.id
            if (open) {
              return (
                <div key={s.id} className="rounded-2xl bg-black text-white p-5 md:p-8 relative overflow-hidden">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 md:gap-4">
                      <Num n={idx + 1} />
                      <h3 className="text-xl md:text-2xl font-semibold">{s.title}</h3>
                    </div>
                    <button
                      aria-label="Collapse"
                      onClick={() => setActive(0)}
                      className="shrink-0 w-8 h-8 md:w-9 md:h-9 grid place-items-center rounded-full bg-orange-600 hover:bg-orange-500 text-white"
                    >
                      ×
                    </button>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(s.tags || []).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1.5 rounded-full bg-gray-900 border border-gray-700 text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  {s.description && (
                    <p className="mt-4 text-gray-300 max-w-2xl">{s.description}</p>
                  )}

                  {/* Image */}
                  <div className="mt-5 md:mt-6 rounded-xl overflow-hidden bg-gray-900">
                    <div className="aspect-video">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className="w-full text-left flex items-center justify-between bg-white rounded-xl border px-4 py-4 md:px-5 md:py-5 hover:bg-gray-50"
              >
                <div className="flex items-center gap-3 md:gap-4">
                  <Num n={idx + 1} />
                  <span className="font-semibold">{s.title}</span>
                </div>
                <span className="shrink-0 w-8 h-8 grid place-items-center rounded-full bg-gray-100 text-gray-900">×
                </span>
              </button>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-8 md:mt-10 flex justify-center">
          <button className="inline-flex items-center gap-3 rounded-full bg-orange-600 text-white px-6 py-3 md:px-7 md:py-3.5 shadow hover:bg-orange-500">
            View All Services
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white text-black">+
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}
