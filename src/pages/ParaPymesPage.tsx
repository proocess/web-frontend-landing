import { useEffect, useRef } from 'react'
import {
  Eyebrow, StepRow, StepCard, ValueGrid,
  OrgSetupMock, ChatInterviewMock, DiagramMock, ConsultaMock,
} from '../components/CasoUsoUI'

const valueItems = [
  'Onboarding de personas nuevas, sin reuniones de traspaso',
  'Aprobaciones internas, con criterio escrito en vez de en la cabeza de alguien',
  'Gestión de entregas con varios responsables',
  'Operaciones que hoy dependen de quién esté disponible ese día',
]

function useReveal() {
  const sectionRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const root = sectionRef.current
    if (!root) return
    const reveals = root.querySelectorAll<HTMLElement>('[data-reveal]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
  return sectionRef
}

const iconBuilding = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M9 8h6M9 12h6M9 16h3" />
  </svg>
)
const iconChat = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /><path d="M8 10h8M8 14h5" />
  </svg>
)
const iconDiagram = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="5" cy="12" r="2.5" /><rect x="10" y="7" width="8" height="6" rx="1.5" /><path d="M7.3 11l2.5-2M21 10l-3 0" />
  </svg>
)
const iconCheck = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
)
const iconSitemap = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)
const iconTrend = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" />
  </svg>
)

export default function ParaPymesPage() {
  useEffect(() => { document.title = 'Para PyMEs — Proocess' }, [])
  const rootRef = useReveal()

  return (
    <div ref={rootRef} style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <style>{`
        [data-reveal] { opacity: 0; transform: translateY(18px); transition: opacity 0.6s ease, transform 0.6s ease; }
        [data-reveal].revealed { opacity: 1; transform: translateY(0); }
      `}</style>

      {/* Header */}
      <section style={{ paddingBlock: 'clamp(7rem, 14vw, 11rem) clamp(2rem, 5vw, 3rem)' }}>
        <div className="container-narrow">
          <Eyebrow>Para PyMEs</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: '0 0 1.25rem',
          }}>
            Documentá cómo trabaja tu equipo,<br />
            <em>sin que dependa solo de tu cabeza.</em>
          </h1>
          <p style={{
            fontSize: '1.0625rem', lineHeight: 1.65,
            color: 'rgba(var(--color-ink-rgb), 0.55)',
            margin: 0, maxWidth: '60ch',
          }}>
            El conocimiento de cómo opera tu empresa hoy vive en las cabezas de tu equipo. Así lo sacás de ahí y lo ponés en una estructura clara, versionada, que cualquiera puede consultar.
          </p>
        </div>
      </section>

      {/* Pasos de hoy */}
      <section style={{ paddingBlock: 'clamp(2rem, 5vw, 3rem)' }}>
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <StepRow
            number="01"
            icon={iconBuilding}
            title="Cargás la estructura de tu organización"
            desc="Creás la cuenta y cargás lo básico: nombre de tu empresa, equipos, áreas y personas."
            visual={<OrgSetupMock orgName="Tu empresa" teams={['Ventas', 'Operaciones', '+ Equipo']} />}
          />
          <StepRow
            number="02"
            icon={iconChat}
            title="Tu equipo cuenta cómo trabaja, a su ritmo"
            desc='Cada persona de tu equipo responde una entrevista conversacional con IA, en lenguaje natural, sin agenda de reunión y sin saber "cómo se documenta un proceso".'
            visual={<ChatInterviewMock question="¿Qué pasa cuando un pedido llega fuera de horario?" answer="Queda en cola y lo toma el primero que entra al turno." />}
          />
          <StepRow
            number="03"
            icon={iconDiagram}
            title="Tu base de conocimiento se construye sola"
            desc="A medida que se completan las entrevistas, te queda armado el diagrama BPMN, el manual de procesos con tareas y responsables, y la base de conocimiento operativo de tu empresa."
            visual={<DiagramMock />}
          />
          <StepRow
            number="04"
            icon={iconCheck}
            title="Tu equipo consulta la estructura para trabajar"
            desc="Con los manuales y diagramas ya generados, cualquier persona puede consultar qué hacer y con qué criterio, sin reconstruir el conocimiento de memoria."
            visual={<ConsultaMock proceso="Aprobación de compras" responsable="Gerencia" />}
          />
        </div>
      </section>

      {/* Roadmap */}
      <section style={{ paddingBlock: 'clamp(2rem, 5vw, 3rem)' }}>
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <span data-reveal style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(var(--color-ink-rgb), 0.3)' }}>
            Próximamente — tier Pro, $150 USD/mes hasta 50 empleados
          </span>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <StepCard
              number="05"
              roadmap
              state="en desarrollo"
              title="Tu equipo ejecuta dentro de la plataforma"
              desc="Tus procesos documentados se convierten en interfaces de carga, consulta y aprobación, con trazabilidad de quién hizo qué y cuándo."
              icon={iconSitemap}
            />
            <StepCard
              number="06"
              roadmap
              state="planificado"
              title="Medís y mejorás con datos reales"
              desc="Tiempos de ciclo, cuellos de botella y desvíos por proceso, con sugerencias de optimización generadas por IA."
              icon={iconTrend}
            />
          </div>
        </div>
      </section>

      {/* Dónde aporta más valor */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 4rem)' }}>
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <h2 data-reveal style={{
            margin: 0,
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.375rem, 2.5vw, 1.75rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
          }}>
            Dónde te aporta más valor
          </h2>
          <ValueGrid items={valueItems} />
        </div>
      </section>


      {/* CTA */}
      <section style={{ paddingBlock: 'clamp(2rem, 5vw, 4rem) clamp(6rem, 12vw, 9rem)' }}>
        <div className="container-narrow" style={{ textAlign: 'center' }}>
          <a
            href="/#cta-form"
            style={{
              display: 'inline-flex',
              padding: '0.875rem 1.75rem',
              fontSize: '0.9375rem',
              fontWeight: 700,
              background: 'var(--color-primary)',
              color: '#fff',
              borderRadius: '0.625rem',
              textDecoration: 'none',
            }}
          >
            Agendá una demo
          </a>
        </div>
      </section>

    </div>
  )
}
