import { Link } from 'react-router-dom'
import logo from '../assets/isologotipo-coral.svg'
import { DEMO_LINK, solutions, type Solution } from '../data/catalog'

export function Lockup({ name, large = false }: { name: string; large?: boolean }) {
  return (
    <span
      className={[
        'inline-flex items-center font-display font-medium leading-none tracking-[-0.01em]',
        large ? 'gap-3 text-[1.875rem]' : 'gap-2 text-lg',
      ].join(' ')}
    >
      <img src={logo} alt="Proocess" className={large ? 'h-7 w-auto' : 'h-4 w-auto'} />
      {name}
    </span>
  )
}

export function StatusBadge({ available, children }: { available: boolean; children: string }) {
  return (
    <span
      className={[
        'inline-block whitespace-nowrap rounded-full px-2.5 py-0.5 text-xs font-semibold text-ink',
        available ? 'bg-sky-soft' : 'bg-lavender-soft',
      ].join(' ')}
    >
      {children}
    </span>
  )
}

function SolutionRow({ solution }: { solution: Solution }) {
  return (
    <Link
      to={`/soluciones/${solution.id}`}
      className="grid items-center gap-3 rounded-lg border border-ink/10 bg-cream-light p-6 text-ink no-underline transition-shadow hover:shadow-md md:grid-cols-[minmax(210px,0.8fr)_1.6fr_auto] md:gap-7 md:px-7"
    >
      <span className="flex flex-col items-start gap-3">
        <Lockup name={solution.name} />
        <StatusBadge available={solution.available}>{solution.status}</StatusBadge>
      </span>
      <span className="font-display text-xl font-medium leading-tight tracking-[-0.01em]">
        {solution.summary}
      </span>
      <span className="whitespace-nowrap text-[0.9375rem] font-semibold">Conocé {solution.name} →</span>
    </Link>
  )
}

export function SolutionList() {
  return (
    <div className="grid gap-3.5">
      {solutions.map((s) => <SolutionRow key={s.id} solution={s} />)}
    </div>
  )
}

export function DemoBand() {
  return (
    <section className="bg-ink py-16 text-cream md:py-20">
      <div className="container flex flex-wrap items-center justify-between gap-6">
        <h2 className="heading-section">Empezá por <em>un proceso.</em></h2>
        <Link to={DEMO_LINK} className="btn btn-primary">Agendá una demo</Link>
      </div>
    </section>
  )
}
