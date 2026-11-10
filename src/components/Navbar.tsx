import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/isologotipo-coral.svg'
import { DEMO_LINK, LOGIN_URL, SOLUTIONS_LINK, profiles, solutions } from '../data/catalog'
import { Lockup, StatusBadge } from './ui'

type Menu = 'soluciones' | 'perfiles' | null

const task = 'flex items-center gap-1.5 whitespace-nowrap rounded-md border px-3 py-2 text-sm font-semibold transition-colors duration-150'
const taskIdle = 'border-transparent text-ink/70 hover:border-ink/20 hover:bg-cream-light hover:text-ink'
const taskCurrent = 'border-ink/20 bg-cream-light text-ink'

function taskClass(current: boolean) {
  return `${task} ${current ? taskCurrent : taskIdle}`
}

function Caret({ open }: { open: boolean }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`transition-transform duration-200 motion-reduce:transition-none ${open ? 'rotate-180' : ''}`}
    >
      <path d="M2.5 4.5L6 8l3.5-3.5" />
    </svg>
  )
}

function Sheet({ title, children, footer }: { title: ReactNode; children: ReactNode; footer?: ReactNode }) {
  return (
    <div className="nav-sheet absolute inset-x-0 top-full rounded-b-xl border-y border-ink/10 bg-cream-light text-ink shadow-lg">
      <div className="container grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.6fr)] gap-10 py-8">
        <div className="flex flex-col items-start justify-between gap-5">
          <p className="font-display max-w-[17ch] text-[1.625rem] font-medium leading-[1.12] tracking-[-0.02em]">{title}</p>
          {footer}
        </div>
        <div className="grid grid-cols-2 gap-3">{children}</div>
      </div>
    </div>
  )
}

const sheetItem = 'flex h-full flex-col rounded-lg border border-ink/10 bg-cream p-5 text-ink no-underline transition-[border-color,box-shadow] duration-150 hover:border-ink/25 hover:shadow-md'

const mobileItem = 'block py-2.5 text-[0.9375rem] font-medium text-ink'
const mobileTitle = 'pb-1 pt-4 text-xs font-semibold uppercase tracking-wider text-ink/60'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [menu, setMenu] = useState<Menu>(null)
  const headerRef = useRef<HTMLElement>(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    if (!menu) return
    const onClick = (e: MouseEvent) => {
      if (!headerRef.current?.contains(e.target as Node)) setMenu(null)
    }
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenu(null) }
    document.addEventListener('mousedown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [menu])

  const toggle = (next: Menu) => setMenu((current) => (current === next ? null : next))
  const solid = scrolled || menu !== null || mobileOpen

  return (
    <header
      ref={headerRef}
      className={[
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-200',
        solid ? 'border-ink/10 bg-cream-light/95 backdrop-blur-xl' : 'border-transparent',
      ].join(' ')}
      onClick={(e) => {
        // Cierra los menús al navegar.
        if ((e.target as HTMLElement).closest('a')) {
          setMenu(null)
          setMobileOpen(false)
        }
      }}
    >
      <div className="container flex items-center justify-between py-3">
        <Link to="/" aria-label="Proocess - Inicio" className="flex shrink-0 items-center">
          <img src={logo} alt="Proocess" className="h-9 w-auto" />
        </Link>

        {/* Desktop */}
        <nav aria-label="Principal" className="hidden items-center gap-1 lg:flex">
          <button
            type="button"
            aria-expanded={menu === 'soluciones'}
            onClick={() => toggle('soluciones')}
            className={taskClass(menu === 'soluciones' || pathname.startsWith('/soluciones'))}
          >
            Soluciones <Caret open={menu === 'soluciones'} />
          </button>
          <button
            type="button"
            aria-expanded={menu === 'perfiles'}
            onClick={() => toggle('perfiles')}
            className={taskClass(menu === 'perfiles' || pathname.startsWith('/para-quien'))}
          >
            Para quién <Caret open={menu === 'perfiles'} />
          </button>
          <Link to="/empresa" className={taskClass(pathname === '/empresa')}>Empresa</Link>
          <a href={LOGIN_URL} className={taskClass(false)}>Ingresar</a>
          <Link
            to={DEMO_LINK}
            className="ml-3 whitespace-nowrap rounded-md border border-coral bg-coral px-4 py-2 text-sm font-semibold text-cream-light transition-[background-color,border-color] duration-150 hover:border-coral-strong hover:bg-coral-strong"
          >
            Agendá una demo
          </Link>
        </nav>

        {/* Botón de menú — mobile */}
        <button
          type="button"
          className="relative h-10 w-10 shrink-0 rounded-md border border-ink/15 bg-cream-light lg:hidden"
          aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className={`absolute left-[10px] top-1/2 h-[1.5px] w-[18px] bg-ink transition-transform duration-200 motion-reduce:transition-none ${mobileOpen ? 'rotate-45' : '-translate-y-[4px]'}`} />
          <span className={`absolute left-[10px] top-1/2 h-[1.5px] w-[18px] bg-ink transition-transform duration-200 motion-reduce:transition-none ${mobileOpen ? '-rotate-45' : 'translate-y-[4px]'}`} />
        </button>
      </div>

      {/* Paneles — desktop */}
      {menu === 'soluciones' && (
        <div className="hidden lg:block">
          <Sheet
            title={<>Empezá por <em>lo que necesitás hoy.</em></>}
            footer={<Link to={SOLUTIONS_LINK} className="text-sm font-semibold text-ink underline underline-offset-4">Ver soluciones →</Link>}
          >
            {solutions.map((s) => (
              <Link key={s.id} to={`/soluciones/${s.id}`} className={sheetItem}>
                <span className="flex flex-wrap items-center gap-2">
                  <Lockup name={s.name} />
                  {!s.available && <StatusBadge available={false}>{s.status}</StatusBadge>}
                </span>
                <span className="mt-3 block text-[0.9375rem] leading-snug text-ink/70">{s.summary}</span>
              </Link>
            ))}
          </Sheet>
        </div>
      )}
      {menu === 'perfiles' && (
        <div className="hidden lg:block">
          <Sheet title={<>Para quien lo vive <em>y para quien lo resuelve.</em></>}>
            {profiles.map((p) => (
              <Link key={p.id} to={`/para-quien/${p.id}`} className={sheetItem}>
                <span className="font-display text-lg font-medium leading-tight">{p.name}</span>
                <span className="mt-3 block text-[0.9375rem] leading-snug text-ink/70">{p.summary}</span>
              </Link>
            ))}
          </Sheet>
        </div>
      )}

      {/* Menú mobile */}
      {mobileOpen && (
        <nav
          aria-label="Principal móvil"
          className="nav-sheet absolute inset-x-0 top-full max-h-[calc(100dvh-65px)] overflow-auto border-b border-ink/10 bg-cream-light text-ink shadow-lg lg:hidden"
        >
          <div className="container py-5">
            <div className={`${mobileTitle} pt-0`}>Soluciones</div>
            {solutions.map((s) => (
              <Link key={s.id} to={`/soluciones/${s.id}`} className={mobileItem}>
                {s.name}{!s.available && <span className="text-ink/60"> · {s.status}</span>}
              </Link>
            ))}
            <div className={mobileTitle}>Para quién</div>
            {profiles.map((p) => (
              <Link key={p.id} to={`/para-quien/${p.id}`} className={mobileItem}>{p.name}</Link>
            ))}
            <div className="my-3 border-t border-ink/10" />
            <Link to="/empresa" className={mobileItem}>Empresa</Link>
            <a href={LOGIN_URL} className={mobileItem}>Ingresar</a>
            <Link to={DEMO_LINK} className="mt-3 block rounded-md bg-coral px-4 py-3 text-center text-sm font-semibold text-cream-light transition-colors hover:bg-coral-strong">
              Agendá una demo
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
