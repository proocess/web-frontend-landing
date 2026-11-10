import { Link } from 'react-router-dom'
import CTAForm from '../components/CTAForm'
import { SolutionList, StatusBadge } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'
import { DEMO_LINK, SOLUTIONS_LINK, profiles } from '../data/catalog'

const problems = [
  {
    title: 'Eso lo sabe solo Fulano.',
    body: 'Algo importante depende de una persona, y cuando falta, se frena.',
  },
  {
    title: 'Cada persona nueva aprende de cero.',
    body: 'Aprende de a poco, preguntando, y de una manera distinta cada vez.',
  },
  {
    title: 'Lo escrito queda viejo.',
    body: 'Está desparramado y desactualizado, y nadie lo consulta.',
  },
]

const path = [
  { name: 'Capturar', body: 'Entendé y documentá cómo se trabaja hoy.', status: 'Disponible con Capture', available: true },
  { name: 'Ejecutar', body: 'Que cada persona sepa qué hacer y con qué criterio.', status: 'En desarrollo', available: false },
  { name: 'Medir', body: 'Mirá cómo se trabaja en la realidad.', status: 'En desarrollo', available: false },
  { name: 'Mejorar', body: 'Decidí qué cambiar con datos.', status: 'Planificado', available: false },
]

export default function HomePage() {
  usePageTitle()

  return (
    <div className="bg-cream text-ink">
      <section className="flex min-h-[78vh] items-center pb-16 pt-32 text-center md:pt-36">
        <div className="container">
          <h1 className="heading-page mx-auto max-w-[19ch]">
            Cuando los procesos están claros, <em>el trabajo fluye.</em>
          </h1>
          <p className="lead mx-auto mt-6 max-w-[52ch]">
            Proocess ayuda a las empresas que crecen a ordenar cómo trabajan: quién hace qué, cómo y con qué criterio.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to={SOLUTIONS_LINK} className="btn btn-primary">Ver soluciones</Link>
            <Link to={DEMO_LINK} className="btn btn-outline">Agendá una demo</Link>
          </div>
        </div>
      </section>

      <section id="soluciones" className="scroll-mt-24 pb-20 md:pb-24">
        <div className="container">
          <span className="label">Soluciones</span>
          <h2 className="heading-section mb-9 mt-3">Empezá por <em>lo que necesitás hoy.</em></h2>
          <SolutionList />
        </div>
      </section>

      <section className="border-y border-ink/10 bg-cream-light py-20 md:py-24">
        <div className="container">
          <span className="label">Por qué importa</span>
          <h2 className="heading-section mt-3">El problema casi nunca es <em>la falta de esfuerzo.</em></h2>
          <div className="mt-9 grid gap-4 md:grid-cols-3">
            {problems.map((p) => (
              <div key={p.title} className="rounded-lg border border-ink/10 bg-cream p-6">
                <h3 className="mb-2 font-display text-xl font-medium leading-tight">{p.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-ink/70">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container">
          <span className="label">Gestión de procesos</span>
          <h2 className="heading-section mt-3">Documentar es <em>el primer paso.</em></h2>
          <ol className="mt-9 grid overflow-hidden rounded-lg border border-ink/10 bg-cream-light sm:grid-cols-2 lg:grid-cols-4">
            {path.map((step, i) => (
              <li
                key={step.name}
                className={[
                  'border-b border-ink/10 p-6 last:border-b-0 sm:border-r lg:border-b-0 lg:last:border-r-0',
                  step.available ? 'bg-ink text-cream' : '',
                ].join(' ')}
              >
                <span className={['text-[0.8125rem] font-semibold', step.available ? 'text-cream/70' : 'text-ink/60'].join(' ')}>
                  0{i + 1}
                </span>
                <h3 className="mb-1.5 mt-2 font-display text-[1.3125rem] font-medium leading-tight">{step.name}</h3>
                <p className={['mb-3 text-sm leading-snug', step.available ? 'text-cream/75' : 'text-ink/70'].join(' ')}>{step.body}</p>
                <StatusBadge available={step.available}>{step.status}</StatusBadge>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-cream-light py-20 md:py-24">
        <div className="container">
          <span className="label">Para quién</span>
          <h2 className="heading-section mt-3">Para quien lo vive <em>y para quien lo resuelve.</em></h2>
          <div className="mt-9 grid gap-4 md:grid-cols-2">
            {profiles.map((p) => (
              <Link
                key={p.id}
                to={`/para-quien/${p.id}`}
                className="rounded-lg border border-ink/10 bg-cream p-6 text-ink no-underline transition-shadow hover:shadow-md"
              >
                <h3 className="mb-2 font-display text-xl font-medium">{p.name}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-ink/70">{p.summary}</p>
                <span className="mt-4 block text-[0.9375rem] font-semibold">Ver cómo →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAForm />
    </div>
  )
}
