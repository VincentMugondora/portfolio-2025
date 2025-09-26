const testimonials = [
  {
    id: 1,
    name: 'Elisha Urombo',
    role: 'Founder, Startup',
    quote:
      'Vincent shipped our MVP twice as fast as planned and the quality exceeded expectations. Clean code, thoughtful UX, and great communication.',
    image: '/testimonials/team-12.webp',
  },
  {
    id: 2,
    name: 'Munyaradzi Mamu',
    role: 'Product Manager, SaaS',
    quote:
      'He took our ambiguous requirements and delivered a production‑ready web app with CI/CD, tests, and clear documentation.',
    image: '/testimonials/team-16.webp',
  },
  {
    id: 3,
    name: 'Rachel Bulombo',
    role: 'CTO, Fintech',
    quote:
      'Solid full‑stack engineering with strong ML understanding. We integrated model features without slowing delivery.',
    image: '/testimonials/team-19.webp',
  },
  {
    id: 4,
    name: 'Samuel Zana',
    role: 'Lead Engineer',
    quote:
      'Excellent collaborator. Pragmatic technical decisions, great testing practices, and reliable delivery cadence.',
    image: '/testimonials/team-20.webp',
  },
  {
    id: 5,
    name: 'dominic mhiripiri',
    role: 'Founder, Agency',
    quote:
      'Frontend polish + backend robustness. He handled everything from API design to pixel‑perfect UI states.',
    image: '/testimonials/team-44.webp',
  },
  {
    id: 6,
    name: 'Ross Schibbler',
    role: 'Ops Lead',
    quote:
      'Our cloud costs went down and reliability went up. Monitoring, alerts, and pipelines — all set up right.',
    image: '/testimonials/team-9.webp',
  },
]

export default function Testimonials() {
  return (
    <section className="relative pb-16">
      <div className="container mx-auto px-4">
        <div className="rounded-[28px] bg-gray-100 p-4 md:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 md:mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">What clients say</h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                    <img src={t.image} alt={t.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{t.name}</div>
                    <div className="text-xs text-gray-500">{t.role}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-700 leading-relaxed">“{t.quote}”</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
