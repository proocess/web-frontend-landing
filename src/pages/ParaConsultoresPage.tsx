import { useEffect } from 'react'

const steps = [
  {
    number: '01',
    title: 'Usás Proocess gratis en tu próximo engagement',
    desc: 'Nunca pagás. Es tu herramienta de discovery, no un costo más para el proyecto.',
  },
  {
    number: '02',
    title: 'La IA entrevista al equipo de tu cliente',
    desc: 'Genera diagramas BPMN y un manual de procesos versionado. Vos seguís liderando la relación con el cliente.',
  },
  {
    number: '03',
    title: 'Presupuestás y ejecutás con certeza',
    desc: 'Reducís tu tiempo de discovery a la mitad — las horas de back-office que antes se iban en transcribir y armar entregables a mano, quedan libres para tomar más clientes.',
  },
  {
    number: '04',
    title: 'Tu cliente queda con Proocess configurado',
    desc: 'Al cerrar el engagement, la estructura que generaste queda instalada en la PyME — un plus de tu servicio, no una competencia.',
  },
]

const eyebrowStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
  fontSize: '0.6875rem', fontWeight: 700,
  letterSpacing: '0.12em', textTransform: 'uppercase',
  background: 'var(--color-primary-tint)',
  color: 'var(--color-primary)',
  border: '1px solid rgba(var(--color-primary-rgb), 0.20)',
  borderRadius: '9999px',
  padding: '0.3rem 0.9rem',
  marginBottom: '1.25rem',
}

function StepCard({ number, title, desc }: { number: string; title: string; desc: string }) {
  return (
    <div style={{
      flex: '1 1 16rem',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: '0.875rem',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.625rem',
    }}>
      <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: 'rgba(var(--color-primary-rgb), 0.5)', letterSpacing: '0.06em' }}>
        {number}
      </span>
      <h3 style={{
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: '1.0625rem', fontWeight: 700,
        color: 'var(--color-text)',
        lineHeight: 1.3, letterSpacing: '-0.015em',
      }}>
        {title}
      </h3>
      <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--color-text-soft)', lineHeight: 1.6 }}>
        {desc}
      </p>
    </div>
  )
}

export default function ParaConsultoresPage() {
  useEffect(() => { document.title = 'Para consultores e implementadores — Proocess' }, [])

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>

      {/* Header */}
      <section style={{ paddingBlock: 'clamp(7rem, 14vw, 11rem) clamp(2rem, 5vw, 3rem)' }}>
        <div className="container-narrow">
          <span style={eyebrowStyle}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
            Para consultores e implementadores
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: '0 0 1.25rem',
          }}>
            Tu próximo discovery, en la mitad del tiempo.
          </h1>
          <p style={{
            fontSize: '1.0625rem', lineHeight: 1.65,
            color: 'rgba(var(--color-ink-rgb), 0.55)',
            margin: 0, maxWidth: '60ch',
          }}>
            Software factories, consultoras de procesos y de RRHH: si tu trabajo empieza por entender cómo funciona una PyME, Proocess hace esa parte por vos.
          </p>
        </div>
      </section>

      {/* Paso a paso */}
      <section style={{ paddingBlock: 'clamp(2rem, 5vw, 3rem)' }}>
        <div className="container-narrow">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {steps.map((s) => <StepCard key={s.number} {...s} />)}
          </div>
        </div>
      </section>

      {/* Evidencia */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-narrow">
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '1rem',
            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(var(--color-ink-rgb), 0.4)' }}>
              Validado en discovery real (anonimizado)
            </span>
            <p style={{
              fontSize: '1.0625rem', lineHeight: 1.65,
              color: 'var(--color-text)',
              margin: '0.875rem 0 0',
            }}>
              Un consultor de procesos que hoy hace discovery sesión por sesión validó que, con el mismo tipo de proyecto, pasó de un mes completo de entrevistas a la mitad del tiempo — sin perder profundidad en el análisis.
            </p>
          </div>
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
