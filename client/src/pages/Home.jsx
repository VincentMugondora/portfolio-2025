import { Link } from 'react-router-dom'
import { FiLinkedin, FiGithub, FiInstagram, FiTwitter, FiCode, FiCpu, FiSmartphone, FiCloud } from 'react-icons/fi'

export default function Home() {
  return (
    <>
      <section className="relative pt-6 md:pt-8 pb-10 md:pb-12">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-gray-100 p-4 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Left column */}
              <div className="max-w-xl">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-800 shadow">
                  <span className="inline-block h-2 w-2 rounded-full bg-sky-500" />
                  AVAILABLE FOR WORK
                </span>
                <h1 className="mt-4 text-5xl leading-[1.05] font-extrabold tracking-tight md:text-7xl">
                  Hi, I’m a<br />full‑stack<br />developer<span className="align-top">©</span>
                </h1>
                <p className="mt-5 max-w-md text-gray-600">
                  I build ML‑powered web and mobile apps with React, React Native, Node.js, and Python — from data to production.
                </p>
                <div className="mt-7">
                  <Link to="/contact" className="inline-flex items-center rounded-full bg-black text-white px-5 py-2.5 text-sm hover:bg-gray-900">
                    Contact Us
                  </Link>
                </div>
              </div>
              {/* Right column */}
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {/* Info card */}
                <div className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="text-sm font-semibold">Vincent Mugondora</div>
                  <div className="text-xs text-gray-500">Harare, Zimbabwe</div>
                  <div className="mt-3 aspect-[4/3] rounded-lg bg-gray-100 overflow-hidden" />
                  <div className="mt-3 flex items-center justify-between text-xs">
                    <div className="inline-flex items-center gap-1 text-gray-700">
                      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-black text-white text-[10px]">ML</span>
                      FULL‑STACK + ML EXPERT
                    </div>
                    <div className="text-sky-600 font-semibold">$150 – $300/HR</div>
                  </div>
                </div>
                {/* Portrait */}
                <div className="rounded-2xl overflow-hidden bg-gray-200">
                  <img src="/avatar.png" alt="Portrait" className="h-full w-full object-cover" loading="lazy" />
                </div>
                {/* Gradient brands card */}
                <div className="col-span-2 relative rounded-2xl p-4 md:p-5 overflow-hidden pr-16 md:pr-20" style={{background:'linear-gradient(135deg,#93c5fd 0%, #60a5fa 40%, #1d4ed8 100%)'}}>
                  <div className="text-white/90 text-sm">Recent tools & platforms I build with</div>
                  <div className="mt-3 flex flex-wrap items-center gap-4 text-white/90 font-semibold">
                    <span>AWS</span>
                    <span>GCP</span>
                    <span>PyTorch</span>
                    <span>TensorFlow</span>
                    <span>React</span>
                    <span>Node.js</span>
                  </div>
                  {/* Social icons rail */}
                  <div className="hidden md:flex flex-col gap-3 absolute right-4 top-1/2 -translate-y-1/2">
                    <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                      <FiLinkedin className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                      <FiGithub className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                      <FiInstagram className="h-4 w-4" />
                    </a>
                    <a href="#" target="_blank" rel="noreferrer" className="grid h-9 w-9 place-items-center rounded-full bg-white text-gray-800 shadow hover:bg-black hover:text-white">
                      <FiTwitter className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission + Assist section */}
      <section className="relative pb-14 md:pb-16">
        <div className="container mx-auto px-4">
          {/* Mission banner */}
          <div className="rounded-[30px] text-white p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]" style={{background:'linear-gradient(180deg,#1497A4 0%, #0F8E9B 100%)'}}>
            <p className="text-2xl md:text-4xl font-semibold leading-snug max-w-5xl">
              My mission is to help teams ship reliable, data‑driven products — blending full‑stack engineering, machine learning, and mobile to delight users and drive outcomes.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-white/70">
              {['AWS','GCP','PyTorch','TensorFlow','React','Node.js'].map((b) => (
                <span key={b} className="text-sm md:text-base font-semibold tracking-wider">
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Assist grid */}
          <div className="mt-8 md:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                How Can I
                <br />
                Assist You?
              </h2>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {[
                {
                  k: '01',
                  title: 'Full‑Stack Web Development',
                  desc:
                    'Production‑ready frontends (React/Vite) and secure APIs (Node.js/Express) backed by MongoDB/Postgres, with testing and CI/CD.',
                  icon: FiCode,
                },
                {
                  k: '02',
                  title: 'Machine Learning & AI',
                  desc:
                    'Model development with PyTorch/TensorFlow, NLP/CV, feature engineering, and serving models behind scalable REST/gRPC endpoints.',
                  icon: FiCpu,
                },
                {
                  k: '03',
                  title: 'Mobile App Development',
                  desc:
                    'Cross‑platform apps with React Native, offline‑first UX, native modules, and app store deployment and analytics.',
                  icon: FiSmartphone,
                },
                {
                  k: '04',
                  title: 'MLOps & Cloud',
                  desc:
                    'Pipelines and deployments with Docker, Kubernetes, MLflow, and AWS/GCP; monitoring, tracing, and cost‑effective scaling.',
                  icon: FiCloud,
                },
              ].map((s) => (
                <div key={s.k} className="relative rounded-[22px] bg-white p-4 md:p-5 border border-gray-100 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                  <div className="flex items-start gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-indigo-50 text-indigo-600">
                      {s.icon ? <s.icon className="h-4 w-4" /> : null}
                    </span>
                    <p className="text-sm text-gray-600">{s.desc}</p>
                  </div>
                  <div className="mt-4 flex items-center justify-between pr-10">
                    <div className="font-semibold">{s.title}</div>
                  </div>
                  <div className="absolute right-4 bottom-4 text-gray-400 font-semibold">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Selected Work section */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-[28px] bg-gray-100 p-4 md:p-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left rail */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl md:text-4xl font-bold">Selected<br/>work</h2>
                <div className="mt-4">
                  <Link to="/projects" className="inline-flex items-center rounded-full bg-black text-white px-4 py-1.5 text-sm hover:bg-gray-900">See All</Link>
                </div>
                <p className="mt-6 text-sm text-gray-600 max-w-xs">
                  Full‑Stack Developer • ML Scientist • Mobile App Developer. I ship performant products end‑to‑end: React/Node, Python ML, and React Native.
                </p>
              </div>

              {/* Right content */}
              <div className="lg:col-span-9 space-y-6">
                {/* Data */}
                {(() => {
                  const works = [
                    {
                      id: 1,
                      title: 'Digital Agency',
                      year: 2021,
                      tags: ['FULL STACK', 'MOBILE DEV'],
                      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?q=80&w=1600&auto=format&fit=crop',
                      featured: true,
                    },
                    {
                      id: 2,
                      title: 'Zenpoint',
                      year: 2024,
                      tags: ['UI DESIGN', 'WEB DEV'],
                      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop',
                    },
                    {
                      id: 3,
                      title: 'PayU',
                      year: 2024,
                      tags: ['FULL STACK', 'WEB DEV'],
                      image: 'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?q=80&w=1600&auto=format&fit=crop',
                    },
                    {
                      id: 4,
                      title: 'CompAI',
                      year: 2024,
                      tags: ['ML', 'MOBILE DEV', 'WEB DEV'],
                      image: 'https://images.unsplash.com/photo-1517433456452-f9633a875f6f?q=80&w=1600&auto=format&fit=crop',
                    },
                    {
                      id: 5,
                      title: 'ChatPic.AI',
                      year: 2024,
                      tags: ['ML', 'MOBILE DEV'],
                      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop',
                    },
                  ]

                  const FeatureCard = ({ item }) => (
                    <div className="rounded-[28px] bg-white border border-gray-200 shadow-sm overflow-hidden">
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <div className="px-4 md:px-5 pb-4 md:pb-5 pt-3">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="font-semibold tracking-wide">{item.title.toUpperCase()}</span>
                          <span className="font-semibold">{item.year}</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map((t) => (
                            <span key={t} className="inline-flex items-center rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100 px-3 py-1 text-[11px] shadow-sm">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )

                  const Card = ({ item }) => (
                    <div className="rounded-[24px] bg-white border border-gray-200 shadow-sm overflow-hidden">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <img src={item.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <div className="px-4 md:px-5 pb-4 md:pb-5 pt-3">
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="font-semibold tracking-wide">{item.title.toUpperCase()}</span>
                          <span className="font-semibold">{item.year}</span>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {item.tags.map((t) => (
                            <span key={t} className="inline-flex items-center rounded-full bg-cyan-50 text-cyan-700 border border-cyan-100 px-3 py-1 text-[11px] shadow-sm">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )

                  const featured = works.find((w) => w.featured)
                  const rest = works.filter((w) => !w.featured)

                  return (
                    <>
                      {featured && <FeatureCard item={featured} />}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {rest.map((w) => (
                          <Card key={w.id} item={w} />
                        ))}
                      </div>
                    </>
                  )
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience section */}
      <section className="relative pb-16">
        <div className="container mx-auto px-4">
          <div className="rounded-[28px] bg-gray-100 p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Intro card */}
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm flex flex-col justify-between">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">Wanna see<br/>my experience?</h3>
                <div className="mt-6">
                  <Link to="/contact" className="inline-flex items-center rounded-full bg-black text-white px-4 py-1.5 text-sm hover:bg-gray-900">Book a call</Link>
                </div>
              </div>

              {/* Google */}
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm">
                <div className="text-gray-400 font-semibold">Google</div>
                <div className="mt-1 text-gray-800">Full‑time Software Engineer (Web) at Google</div>
                <div className="mt-3 text-xs text-gray-500">2016–2019</div>
              </div>

              {/* Grammarly */}
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm">
                <div className="text-gray-400 font-semibold">grammarly</div>
                <div className="mt-1 text-gray-800">Part‑time Developer at Grammarly</div>
                <div className="mt-3 text-xs text-gray-500">2016–2019</div>
              </div>

              {/* Airbnb */}
              <div className="rounded-2xl bg-white p-6 md:p-8 shadow-sm">
                <div className="text-gray-400 font-semibold">airbnb</div>
                <div className="mt-1 text-gray-800">Full‑time Mobile/ML Engineer at Airbnb</div>
                <div className="mt-3 text-xs text-gray-500">2016–2019</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
