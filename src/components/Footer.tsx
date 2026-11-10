import { Link } from 'react-router-dom'
import logo from '../assets/isologotipo-coral.svg'
import { LOGIN_URL, profiles, solutions } from '../data/catalog'

const title = 'text-[0.6875rem] font-semibold uppercase tracking-[0.08em] text-cream/50'
const item = 'text-sm text-cream/70 no-underline transition-colors hover:text-cream'

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream">
      <div className="container flex flex-wrap items-start justify-between gap-12 py-14">
        <div className="flex flex-col gap-3">
          <Link to="/" aria-label="Proocess - Inicio">
            <img src={logo} alt="Proocess" className="h-7 w-auto" />
          </Link>
          <p className="font-display-em text-lg font-light italic text-cream/70">Enjoy the Process</p>
        </div>

        <nav aria-label="Pie de página" className="flex flex-wrap gap-x-16 gap-y-10">
          <div className="flex flex-col gap-3">
            <span className={title}>Soluciones</span>
            {solutions.map((s) => (
              <Link key={s.id} to={`/soluciones/${s.id}`} className={item}>{s.name}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className={title}>Para quién</span>
            {profiles.map((p) => (
              <Link key={p.id} to={`/para-quien/${p.id}`} className={item}>{p.name}</Link>
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <span className={title}>Empresa</span>
            <Link to="/empresa" className={item}>Nosotros</Link>
            <a href={LOGIN_URL} className={item}>Ingresar</a>
            <a href="https://instagram.com/proocess_" target="_blank" rel="noopener noreferrer" className={item}>@proocess_</a>
          </div>
        </nav>
      </div>

      <div className="container border-t border-cream/10 py-5 text-center">
        <p className="m-0 text-xs text-cream/50">© {new Date().getFullYear()} Proocess. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
