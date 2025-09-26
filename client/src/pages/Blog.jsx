import { Link } from 'react-router-dom'

const posts = [
  {
    id: 1,
    title: 'Shipping ML features in full‑stack apps',
    date: 'Sep 2025',
    excerpt:
      'A practical checklist to take ML from notebook to production: APIs, monitoring, and UX details that matter.',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    tags: ['ML', 'Backend', 'MLOps'],
  },
  {
    id: 2,
    title: 'React patterns I use for speed and reliability',
    date: 'Aug 2025',
    excerpt:
      'State, data‑fetching, and testing patterns that keep UI code simple, testable, and fast to ship.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    tags: ['Frontend', 'React'],
  },
  {
    id: 3,
    title: 'From prototype to product: a CI/CD setup that sticks',
    date: 'Jul 2025',
    excerpt:
      'A minimal CI/CD pipeline that scales from a single repo to a team. Linting, tests, builds, and previews.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    tags: ['DevOps', 'CI/CD'],
  },
]

export default function Blog() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 md:pt-8 pb-10 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gray-100 p-4 md:p-8 lg:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-800 shadow">BLOG</span>
                <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">Insights & Articles</h1>
                <p className="mt-3 text-gray-600 max-w-2xl">Notes on building full‑stack, ML, and mobile software — in the field and in production.</p>
              </div>
              <div>
                <Link to="/contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm hover:bg-gray-900">Work with me</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p.id} className="rounded-[24px] bg-white border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="px-4 md:px-5 pb-4 md:pb-5 pt-3 flex-1 flex flex-col">
                  <div className="text-xs text-gray-500 flex items-center justify-between">
                    <span className="font-semibold tracking-wide">{p.date}</span>
                    <div className="flex flex-wrap gap-1">
                      {p.tags.map((t) => (
                        <span key={t} className="inline-flex items-center rounded-full bg-gray-50 text-gray-700 border border-gray-200 px-2 py-0.5 text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h2 className="mt-2 text-lg font-semibold">{p.title}</h2>
                  <p className="mt-2 text-sm text-gray-600 flex-1">{p.excerpt}</p>
                  <div className="mt-3">
                    <a href="#" className="inline-flex items-center rounded-full bg-black text-white px-4 py-1.5 text-sm hover:bg-gray-900">Read more</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-[28px] bg-white p-6 md:p-10 border border-gray-100 text-center">
            <h3 className="text-2xl md:text-3xl font-bold">Get new posts</h3>
            <p className="mt-2 text-gray-600">Occasional posts on engineering and product — no spam.</p>
            <form className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
              <input type="email" placeholder="Your email" className="rounded-full ring-1 ring-gray-200 px-4 py-2 text-sm outline-none" />
              <button className="inline-flex items-center rounded-full bg-black text-white px-6 py-2 text-sm hover:bg-gray-900">Subscribe</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
