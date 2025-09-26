import { Link, useParams, useNavigate } from 'react-router-dom'
import { posts } from '../data/blog.js'

export default function BlogPost() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const post = posts.find((p) => p.slug === slug)

  if (!post) {
    // If the slug doesn't exist, send user back to /blog
    navigate('/blog', { replace: true })
    return null
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-6 md:pt-8 pb-8 md:pb-10">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gray-100 p-4 md:p-8 lg:p-10">
            <div className="flex flex-col gap-3">
              <div className="text-xs text-gray-500 font-semibold tracking-wide">{post.date}</div>
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">{post.title}</h1>
              <div className="flex flex-wrap gap-2 mt-1">
                {post.tags.map((t) => (
                  <span key={t} className="inline-flex items-center rounded-full bg-gray-50 text-gray-700 border border-gray-200 px-3 py-1 text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="relative pb-10 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl overflow-hidden bg-gray-200">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <article className="prose prose-neutral max-w-none">
            {post.content.map((para, i) => (
              <p key={i} className="text-gray-800 leading-relaxed text-[15px] md:text-base">{para}</p>
            ))}
          </article>

          <div className="mt-8 flex items-center justify-between">
            <Link to="/blog" className="inline-flex items-center rounded-full bg-black text-white px-4 py-1.5 text-sm hover:bg-gray-900">← Back to blog</Link>
          </div>
        </div>
      </section>
    </>
  )
}
