import { useEffect, useRef } from 'react'

const todaySteps = [
  {
    number: '01',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h8M8 14h5" />
      </svg>
    ),
    title: 'Describís cómo hace las cosas tu equipo',
    desc: 'En lenguaje natural. La IA te guía con preguntas clave para no omitir nada importante.',
  },
  {
    number: '02',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M9 9h.01M12 9h.01M15 9h.01M9 12h.01M12 12h.01M15 12h.01M9 15h.01M12 15h.01M15 15h.01" />
      </svg>
    ),
    title: 'Proocess lo convierte en proceso documentado',
    desc: 'Genera el diagrama BPMN, identifica tareas y responsables, y versiona cada cambio. En minutos, automáticamente.',
  },
]

const roadmapSteps = [
  {
    number: '03',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Tu equipo ejecuta el proceso dentro de la plataforma',
    desc: 'Cada persona consulta qué hacer y con qué criterio, sin reconstruir el conocimiento de memoria.',
  },
  {
    number: '04',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
        strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
    title: 'Medís la ejecución real y mejorás con datos',
    desc: 'Cuellos de botella, tiempos de ciclo y sugerencias de optimización con IA — la base de process intelligence.',
  },
]

function TodayCard({ step }: { step: typeof todaySteps[number] }) {
  return (
    <div
      style={{
        flex: '1 1 13.5rem',
        minWidth: '12rem',
        maxWidth: '18rem',
        background: 'rgba(var(--color-surface-rgb), 0.04)',
        border: '1px solid rgba(var(--color-cream-rgb), 0.08)',
        borderRadius: '1rem',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 40, height: 40, borderRadius: '0.5rem',
          background: 'var(--color-primary-tint)',
          border: '1px solid var(--color-primary-glow)',
          color: 'var(--color-primary)',
          flexShrink: 0,
        }}>
          {step.icon}
        </span>
        <span style={{
          fontSize: '0.625rem', fontWeight: 800,
          color: 'rgba(var(--color-primary-rgb), 0.5)',
          letterSpacing: '0.06em',
        }}>
          {step.number}
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
        <h3 style={{
          margin: 0,
          fontSize: '0.9375rem', fontWeight: 700,
          color: 'var(--color-text-dark)',
          lineHeight: 1.3, letterSpacing: '-0.015em',
        }}>
          {step.title}
        </h3>
        <p style={{
          margin: 0,
          fontSize: '0.8125rem',
          color: 'rgba(var(--color-cream-rgb), 0.45)',
          lineHeight: 1.55,
        }}>
          {step.desc}
        </p>
      </div>
    </div>
  )
}

function RoadmapCard({ step }: { step: typeof roadmapSteps[number] }) {
  return (
    <div
      style={{
        flex: '1 1 13.5rem',
        minWidth: '12rem',
        maxWidth: '18rem',
        background: 'transparent',
        border: '1px dashed rgba(var(--color-cream-rgb), 0.14)',
        borderRadius: '1rem',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 40, height: 40, borderRadius: '0.5rem',
          background: 'rgba(var(--color-cream-rgb), 0.04)',
          border: '1px solid rgba(var(--color-cream-rgb), 0.1)',
          color: 'rgba(var(--color-cream-rgb), 0.4)',
          flexShrink: 0,
        }}>
          {step.icon}
        </span>
        <span style={{
          display: 'inline-flex', alignItems: 'center',
          fontSize: '0.5625rem', fontWeight: 700,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          color: 'rgba(var(--color-cream-rgb), 0.4)',
          background: 'rgba(var(--color-cream-rgb), 0.05)',
          border: '1px solid rgba(var(--color-cream-rgb), 0.1)',
          borderRadius: '9999px',
          padding: '0.2rem 0.55rem',
        }}>
          Próximamente
        </span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
        <h3 style={{
          margin: 0,
          fontSize: '0.9375rem', fontWeight: 700,
          color: 'rgba(var(--color-cream-rgb), 0.7)',
          lineHeight: 1.3, letterSpacing: '-0.015em',
        }}>
          {step.title}
        </h3>
        <p style={{
          margin: 0,
          fontSize: '0.8125rem',
          color: 'rgba(var(--color-cream-rgb), 0.38)',
          lineHeight: 1.55,
        }}>
          {step.desc}
        </p>
      </div>
    </div>
  )
}

export default function ComoFunciona() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const reveals = section.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.transitionDelay = `${el.dataset.delay ?? '0'}ms`
            el.classList.add('revealed')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        #como-funciona [data-reveal] {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        #como-funciona [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="como-funciona"
        style={{
          position: 'relative',
          zIndex: 4,
          background: 'var(--color-bg-dark)',
          color: 'var(--color-text-dark)',
          paddingTop: '1.5rem',
          paddingBottom: '5.5rem',
          overflow: 'hidden',
        }}
      >
        <div
          className="container"
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          <div
            data-reveal
            data-delay="0"
            style={{
              textAlign: 'center',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', gap: '0.875rem',
            }}
          >
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.6875rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              background: 'rgba(var(--color-primary-rgb), 0.07)',
              color: 'var(--color-primary)',
              border: '1px solid rgba(var(--color-primary-rgb), 0.14)',
              borderRadius: '9999px',
              padding: '0.3rem 0.9rem',
            }}>
              <span style={{
                width: 5, height: 5, borderRadius: '50%',
                background: 'var(--color-primary)', flexShrink: 0,
              }} />
              Cómo funciona
            </span>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.875rem, 3.5vw, 2.875rem)',
              fontWeight: 700,
              color: 'var(--color-text-dark)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
              margin: 0,
            }}>
              Hoy documentás. Después, medís y mejorás.
            </h2>

            <p style={{
              fontSize: '1rem',
              color: 'rgba(var(--color-cream-rgb), 0.5)',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '46ch',
            }}>
              Empezás por capturar el conocimiento de tu equipo. El resto es el camino hacia una plataforma de process intelligence.
            </p>
          </div>

          {/* Hoy */}
          <div data-reveal data-delay="100" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{
              fontSize: '0.6875rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(var(--color-cream-rgb), 0.45)',
            }}>
              Hoy
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {todaySteps.map((step) => (
                <TodayCard key={step.number} step={step} />
              ))}
            </div>
          </div>

          {/* Hacia dónde va */}
          <div data-reveal data-delay="180" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{
              fontSize: '0.6875rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'rgba(var(--color-cream-rgb), 0.3)',
            }}>
              Hacia dónde va
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {roadmapSteps.map((step) => (
                <RoadmapCard key={step.number} step={step} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
