import { FiCode, FiCpu, FiSmartphone, FiCloud } from 'react-icons/fi'

const services = [
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
]

export default function Services() {
  return (
    <section id="services" className="relative py-10 md:py-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
            How Can I
            <br />
            Assist You?
          </h2>
        </div>

        {/* Assist grid (matching Home style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {services.map((s) => (
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
    </section>
  )
}
