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
    name: 'Ross Schibbler',
    role: 'Product Manager, SaaS',
    quote:
      'He took our ambiguous requirements and delivered a production‑ready web app with CI/CD, tests, and clear documentation.',
    image: '/testimonials/ross.jpg',
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
    name: 'Dominic Mhiripiri',
    role: 'Founder, Agency',
    quote:
      'Frontend polish + backend robustness. He handled everything from API design to pixel‑perfect UI states.',
    image: '/testimonials/team-44.webp',
  },
  {
    id: 6,
    name: 'Diana Dumbu',
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

          {/* Infinite carousel */}
          <div className="group relative overflow-hidden">
            <div
              className="track flex items-stretch gap-4 md:gap-6 w-max"
              style={{ animation: 'marquee 28s linear infinite' }}
            >
              {[...testimonials, ...testimonials].map((t, idx) => (
                <div
                  key={`${t.id}-${idx}`}
                  className="rounded-2xl bg-white border border-gray-200 shadow-sm p-5 min-w-[320px] max-w-[360px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-16 w-16 rounded-full overflow-hidden bg-gray-100">
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
            <style>{`
              .group:hover .track { animation-play-state: paused; }
              @keyframes marquee {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}</style>
          </div>
        </div>
      </div>
    </section>
  )
}
