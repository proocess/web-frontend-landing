import { useEffect, useRef } from 'react'
import {
  Eyebrow, StepRow, ValueGrid,
  OrgSetupMock, ChatInterviewMock, DiagramMock, QueryMock, DemoVideo,
} from '../components/CasoUsoUI'

const valueItems = [
  'Discovery previo a un proyecto de software, consultoría o certificación',
  'Onboarding de clientes nuevos, sin sesiones manuales de mapeo',
  'Diagnósticos de procesos que hoy armás con Excel y capturas',
  'Engagements donde necesitás resultados rápido para presupuestar',
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
const iconExport = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" /><path d="M9 14h6M9 17h4" />
  </svg>
)
const iconQuery = (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 19c4.4 0 8-3 8-7s-3.6-7-8-7-8 3-8 7c0 1.6.6 3 1.6 4.2L4 21l4.5-1.2c1 .4 2.2.7 3.5.7z" />
  </svg>
)

export default function ParaConsultoresPage() {
  useEffect(() => { document.title = 'Para consultores e implementadores — Proocess' }, [])
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
          <Eyebrow>Para consultores e implementadores</Eyebrow>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: '0 0 1.25rem',
          }}>
            Tu próximo discovery,<br />
            <em>en la mitad del tiempo.</em>
          </h1>
          <p style={{
            fontSize: '1.0625rem', lineHeight: 1.65,
            color: 'rgba(var(--color-ink-rgb), 0.55)',
            margin: 0, maxWidth: '60ch',
          }}>
            Software factory, consultora de procesos o de RRHH: si tu trabajo empieza por entender cómo funciona una PyME, así se ve usar Proocess en tu próximo engagement — gratis, siempre.
          </p>
        </div>
      </section>

      {/* Pasos */}
      <section style={{ paddingBlock: 'clamp(2rem, 5vw, 3rem)' }}>
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          <StepRow
            number="01"
            icon={iconBuilding}
            title="Cargás la estructura de tu cliente"
            desc="Te registrás y cargás los datos básicos de la PyME que estás atendiendo: nombre, equipos, áreas, personas. Es el primer paso de tu discovery, no un trámite aparte."
            visual={<OrgSetupMock orgName="Cliente SRL" teams={['Ventas', 'Operaciones', '+ Equipo']} />}
          />
          <StepRow
            number="02"
            icon={iconChat}
            title="La IA entrevista a su equipo"
            desc="Invitás a cada persona del equipo de tu cliente a una entrevista conversacional con IA. Responden a su ritmo, en lenguaje natural — no tenés que estar presente en cada sesión."
            visual={<ChatInterviewMock question="¿Qué pasa cuando un pedido llega fuera de horario?" answer="Queda en cola y lo toma el primero que entra al turno." />}
          />
          <StepRow
            number="03"
            icon={iconDiagram}
            title="La documentación se genera sola"
            desc="A medida que se completan las entrevistas, te queda armado el diagrama BPMN, el manual de procesos con tareas y responsables, y la base de conocimiento operativo de tu cliente."
            visual={<DiagramMock />}
          />
          <StepRow
            number="04"
            icon={iconQuery}
            title="Consultás todo en lenguaje natural"
            desc="No hace falta saber leer un diagrama BPMN — son un estándar, pero podés preguntarle a la base de conocimiento de tu cliente como si le preguntaras a una persona."
            visual={<QueryMock question="¿Quién aprueba una compra mayor a $5.000?" answer="Gerencia de Operaciones, según el proceso vigente." />}
          />
          <StepRow
            number="05"
            icon={iconExport}
            title="Lo usás como insumo de tu entrega"
            desc="Con la estructura ya cargada, la usás como insumo de tu propio trabajo —un proyecto de software, una certificación ISO, una reestructura de RRHH— y la entregás a tu cliente como parte del servicio."
            visual={<DemoVideo caption="Demo del producto — próximamente" />}
          />
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
