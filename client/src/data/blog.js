export const posts = [
  {
    id: 1,
    slug: 'shipping-ml-features-in-full-stack-apps',
    title: 'Shipping ML features in full‑stack apps',
    date: 'Sep 2025',
    excerpt:
      'A practical checklist to take ML from notebook to production: APIs, monitoring, and UX details that matter.',
    image:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    tags: ['ML', 'Backend', 'MLOps'],
    content: [
      "Machine learning can add real value to products—but only if it ships. This post walks through the minimal steps I use to get ML features from notebooks into production.",
      'Start with a simple contract. Define a clear API or interface—inputs, outputs, and error conditions. Make it measurable and testable. Then build the smallest viable model that satisfies the contract.',
      'Productionize early: wrap your model behind a service (REST/gRPC), add basic monitoring (latency, errors), and design for retries/timeouts. Keep logs for debugging mispredictions and build a feedback loop to improve your model over time.',
      'Finally, keep your UX simple. Show what the model is doing when helpful, and always provide clear fallbacks. Shipping beats perfection.'
    ],
  },
  {
    id: 2,
    slug: 'react-patterns-for-speed-and-reliability',
    title: 'React patterns I use for speed and reliability',
    date: 'Aug 2025',
    excerpt:
      'State, data‑fetching, and testing patterns that keep UI code simple, testable, and fast to ship.',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop',
    tags: ['Frontend', 'React'],
    content: [
      'I focus on components that do one thing, co-locate state, and isolate data-fetching into hooks. Testing favors behavior over implementation details. The result: small, predictable surfaces that are easy to maintain.',
      'If a page gets complex, split it into feature folders—with hooks, components, and tests in one place. Use React Query or SWR for server state and caching. Avoid global state unless you truly need it.'
    ],
  },
  {
    id: 3,
    slug: 'from-prototype-to-product-a-cicd-setup-that-sticks',
    title: 'From prototype to product: a CI/CD setup that sticks',
    date: 'Jul 2025',
    excerpt:
      'A minimal CI/CD pipeline that scales from a single repo to a team. Linting, tests, builds, and previews.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    tags: ['DevOps', 'CI/CD'],
    content: [
      'Start small: linting, unit tests, and a single build step. Add preview environments for pull requests and a short DORA cycle. Keep the pipeline fast so it does not block shipping.',
      'Automate deployments and rollbacks. Monitor the basics—latency, errors, and throughput—before reaching for complex graphs. Keep configuration in code and version everything.'
    ],
  },
]
