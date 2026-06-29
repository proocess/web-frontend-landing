import { useEffect } from 'react'

const todaySteps = [
  {
    number: '01',
    title: 'Documentás cómo trabaja tu equipo',
    desc: 'En lenguaje natural. La IA te entrevista con preguntas clave para no omitir nada importante — sin reuniones eternas.',
  },
  {
    number: '02',
    title: 'Proocess genera la estructura',
    desc: 'Diagrama BPMN, tareas, responsables y manual versionado. En minutos, automáticamente.',
  },
]

const roadmapSteps = [
  {
    number: '03',
    title: 'Tu equipo ejecuta dentro de la plataforma',
    desc: 'Cada persona consulta qué hacer y con qué criterio, sin reconstruir el conocimiento de memoria.',
  },
  {
    number: '04',
    title: 'Medís y mejorás con datos reales',
    desc: 'Cuellos de botella, tiempos de ciclo y sugerencias de optimización con IA — process intelligence.',
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

function StepCard({ number, title, desc, roadmap }: { number: string; title: string; desc: string; roadmap?: boolean }) {
  return (
    <div style={{
      flex: '1 1 16rem',
      background: roadmap ? 'transparent' : 'var(--color-surface)',
      border: roadmap ? '1px dashed var(--color-border)' : '1px solid var(--color-border)',
      borderRadius: '0.875rem',
      padding: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.625rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: 'rgba(var(--color-primary-rgb), 0.5)', letterSpacing: '0.06em' }}>
          {number}
        </span>
        {roadmap && (
          <span style={{
            fontSize: '0.5625rem', fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            color: 'rgba(var(--color-ink-rgb), 0.4)',
            background: 'rgba(var(--color-ink-rgb), 0.04)',
            border: '1px solid var(--color-border)',
            borderRadius: '9999px',
            padding: '0.2rem 0.55rem',
          }}>
            Próximamente
          </span>
        )}
      </div>
      <h3 style={{
        margin: 0,
        fontFamily: 'var(--font-display)',
        fontSize: '1.0625rem', fontWeight: 700,
        color: roadmap ? 'rgba(var(--color-ink-rgb), 0.65)' : 'var(--color-text)',
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

export default function ParaPymesPage() {
  useEffect(() => { document.title = 'Para PyMEs — Proocess' }, [])

  return (
    <div style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>

      {/* Header */}
      <section style={{ paddingBlock: 'clamp(7rem, 14vw, 11rem) clamp(2rem, 5vw, 3rem)' }}>
        <div className="container-narrow">
          <span style={eyebrowStyle}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
            Para PyMEs
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: '0 0 1.25rem',
          }}>
            Que tu empresa funcione, incluso cuando vos no estés.
          </h1>
          <p style={{
            fontSize: '1.0625rem', lineHeight: 1.65,
            color: 'rgba(var(--color-ink-rgb), 0.55)',
            margin: 0, maxWidth: '60ch',
          }}>
            El conocimiento de cómo opera tu empresa hoy vive en las cabezas de tu equipo. Proocess lo saca de ahí y lo pone en una estructura clara, versionada, que cualquiera puede consultar.
          </p>
        </div>
      </section>

      {/* Paso a paso */}
      <section style={{ paddingBlock: 'clamp(2rem, 5vw, 3rem)' }}>
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(var(--color-ink-rgb), 0.4)' }}>
              Hoy
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {todaySteps.map((s) => <StepCard key={s.number} {...s} />)}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(var(--color-ink-rgb), 0.3)' }}>
              Hacia dónde va
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {roadmapSteps.map((s) => <StepCard key={s.number} {...s} roadmap />)}
            </div>
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
              Una PyME de servicios que ordenó sus procesos por primera vez descubrió que estaba contratando por intuición, no por estrategia. Ordenar la estructura le generó ahorro en RRHH y más caja todos los meses.
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
