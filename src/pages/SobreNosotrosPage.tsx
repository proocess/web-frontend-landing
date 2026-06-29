import { useEffect } from 'react'

const valores = [
  {
    title: 'Mejora continua',
    body: 'No existe el proceso perfecto, solo el proceso mejorado. Cada versión es un paso adelante.',
  },
  {
    title: 'Sin juicio',
    body: 'No hay procesos correctos ni incorrectos, solo procesos que funcionan mejor o peor para cada organización en cada momento. El punto de partida siempre está bien — lo que importa es moverse desde ahí.',
  },
  {
    title: 'Acción sobre inacción',
    body: 'El problema no es cómo están las cosas hoy. El problema es no hacer nada para cambiarlas.',
  },
  {
    title: 'Adaptabilidad',
    body: 'Cada organización tiene su propio camino. Proocess se adapta a él, no al revés.',
  },
  {
    title: 'Simplicidad',
    body: 'Si algo es difícil de entender o de hacer, probablemente no está bien resuelto todavía.',
  },
  {
    title: 'Disfrute',
    body: 'Creemos que trabajar en una organización que funciona bien debería ser disfrutable. Eso no es un lujo — es el objetivo.',
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

export default function SobreNosotrosPage() {
  useEffect(() => { document.title = 'Sobre nosotros — Proocess' }, [])

  return (
    <div id="sobre-nosotros" style={{ background: 'var(--color-bg)', color: 'var(--color-text)' }}>
      <style>{`
        @media (max-width: 640px) {
          #sobre-nosotros .sn-grid-2 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Header */}
      <section style={{ paddingBlock: 'clamp(7rem, 14vw, 11rem) clamp(2rem, 5vw, 3rem)' }}>
        <div className="container-narrow">
          <span style={eyebrowStyle}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
            Sobre nosotros
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: '0 0 1.25rem',
          }}>
            Por qué existe Proocess.
          </h1>
          <p style={{
            fontSize: '1.0625rem', lineHeight: 1.65,
            color: 'rgba(var(--color-ink-rgb), 0.55)',
            margin: 0, maxWidth: '60ch',
          }}>
            No partimos de una idea abstracta de mercado. Partimos de tener que mapear procesos a mano y darnos cuenta de que ese trabajo no debería ser tan tedioso.
          </p>
        </div>
      </section>

      {/* Historia */}
      <section style={{ paddingBlock: 'clamp(2rem, 5vw, 3rem)' }}>
        <div className="container-narrow" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--color-text)', margin: 0 }}>
            Siempre fui obsesivo con que las cosas estén documentadas y funcionen bien. La idea de Proocess nació haciendo consultoría de sistemas con mi socio de entonces: teníamos que mapear los procesos de la empresa de su padre y nos dimos cuenta de que entrevistar a todas las personas iba a ser tedioso, así que intentamos automatizar las entrevistas con n8n. Salió mal. Pero en lugar de abandonar, empezamos a iterar sobre ese proceso hasta obtener mejores resultados.
          </p>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--color-text)', margin: 0 }}>
            Cuando incorporamos los diagramas BPMN, el problema se volvió más claro: los procesos estaban completamente fragmentados. Las personas hacían las mismas tareas de formas distintas, y cada intento de implementar un sistema chocaba con una realidad que nadie había nombrado — el cambio tenía que ser cultural antes de ser tecnológico. El conocimiento de cómo funcionaba la organización vivía en las cabezas de cada uno, no en ningún sistema.
          </p>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: 'var(--color-text)', margin: 0 }}>
            El contraste más claro lo viví trabajando en Vail Resorts, en Estados Unidos. Me capacitaron en tiempo récord, supe exactamente qué hacer durante toda la temporada, y todo fluía. No era magia — era que tenían sus procesos pensados de punta a punta y optimizados al máximo. Eso me dejó grabado que la diferencia entre una empresa que se disfruta trabajar y una que no, muchas veces, es simplemente si las cosas están bien organizadas o no. Y que eso no debería ser un privilegio de las empresas grandes.
          </p>
          <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, fontWeight: 600, color: 'var(--color-text)', margin: 0 }}>
            Desde ese lugar nació Proocess.
          </p>
        </div>
      </section>

      {/* MTP + Propósito */}
      <section style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-narrow">
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '1rem',
            padding: 'clamp(1.75rem, 4vw, 2.5rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
          }}>
            <span style={{
              fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'rgba(var(--color-ink-rgb), 0.4)',
            }}>
              Massive Transformative Purpose
            </span>
            <p style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              margin: 0,
              color: 'var(--color-text)',
            }}>
              Democratizar la excelencia operativa.
            </p>
            <p style={{
              fontSize: '1.0625rem',
              fontStyle: 'italic',
              lineHeight: 1.65,
              color: 'rgba(var(--color-ink-rgb), 0.6)',
              margin: 0,
              paddingTop: '0.5rem',
              borderTop: '1px solid var(--color-border-soft)',
            }}>
              "Quiero que el trabajo en cualquier empresa que crece fluya — porque cuando las cosas fluyen, dejan de ser una carga y empiezan a tener sentido."
            </p>
          </div>
        </div>
      </section>

      {/* Misión / Visión */}
      <section style={{ paddingBlock: 'clamp(1rem, 3vw, 2rem) clamp(3rem, 6vw, 5rem)' }}>
        <div className="container-narrow sn-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '2rem' }}>
          <div>
            <span style={{
              fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--color-primary)',
            }}>
              Misión
            </span>
            <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--color-text)', marginTop: '0.75rem' }}>
              Ayudar a las organizaciones que crecen a entender cómo funcionan, documentar sus procesos y mejorarlos continuamente — adaptándonos a la realidad de cada una, sin imponer una forma de trabajar.
            </p>
          </div>
          <div>
            <span style={{
              fontSize: '0.75rem', fontWeight: 700,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              color: 'var(--color-primary)',
            }}>
              Visión
            </span>
            <p style={{ fontSize: '1rem', lineHeight: 1.65, color: 'var(--color-text)', marginTop: '0.75rem' }}>
              Un mundo donde cualquier organización, sin importar su tamaño o recursos, pueda alcanzar su máximo potencial operativo. Porque cuando las cosas funcionan bien, el trabajo es más fácil. Y cuando es más fácil, se disfruta más.
            </p>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section style={{ paddingBlock: 'clamp(2rem, 5vw, 4rem) clamp(6rem, 12vw, 9rem)' }}>
        <div className="container-narrow">
          <span style={{
            fontSize: '0.75rem', fontWeight: 700,
            letterSpacing: '0.08em', textTransform: 'uppercase',
            color: 'rgba(var(--color-ink-rgb), 0.4)',
            display: 'block',
            marginBottom: '1.5rem',
          }}>
            Valores
          </span>
          <div className="sn-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '1.25rem' }}>
            {valores.map((v) => (
              <div key={v.title} style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.875rem',
                padding: '1.375rem 1.5rem',
              }}>
                <h3 style={{
                  margin: '0 0 0.5rem',
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                }}>
                  {v.title}
                </h3>
                <p style={{ margin: 0, fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--color-text-soft)' }}>
                  {v.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
