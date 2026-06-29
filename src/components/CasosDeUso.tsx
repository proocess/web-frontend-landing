import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const cases = [
  {
    tag: 'Para PyMEs',
    title: 'Que tu empresa funcione sin que todo dependa de vos.',
    hook: 'Documentá cómo trabaja tu equipo hoy, y medí cómo se ejecuta en la realidad después.',
    to: '/para-pymes',
  },
  {
    tag: 'Para consultores e implementadores',
    title: 'Reducí tu discovery a la mitad.',
    hook: 'Usalo gratis en tu próximo engagement y entregá más valor sin más horas.',
    to: '/para-consultores',
  },
]

export default function CasosDeUso() {
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
      { threshold: 0.12 }
    )
    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <style>{`
        #casos-de-uso [data-reveal] {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        #casos-de-uso [data-reveal].revealed {
          opacity: 1;
          transform: translateY(0);
        }
        #casos-de-uso .cdu-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.5rem;
        }
        #casos-de-uso .cdu-card {
          text-decoration: none;
          transition: border-color 0.18s ease, transform 0.18s ease;
        }
        #casos-de-uso .cdu-card:hover {
          border-color: rgba(var(--color-primary-rgb), 0.35) !important;
          transform: translateY(-2px);
        }
        #casos-de-uso .cdu-card:hover .cdu-cta {
          gap: 0.6rem;
        }
        @media (max-width: 720px) {
          #casos-de-uso .cdu-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        id="casos-de-uso"
        style={{
          position: 'relative',
          zIndex: 4,
          background: 'var(--color-bg)',
          color: 'var(--color-text)',
          paddingBlock: 'clamp(5rem, 10vw, 8rem)',
        }}
      >
        <div className="container">

          <div data-reveal data-delay="0" style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)', maxWidth: 600 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              fontSize: '0.6875rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              background: 'var(--color-primary-tint)',
              color: 'var(--color-primary)',
              border: '1px solid rgba(var(--color-primary-rgb), 0.20)',
              borderRadius: '9999px',
              padding: '0.3rem 0.9rem',
              marginBottom: '1.25rem',
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
              Casos de uso
            </span>

            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.875rem, 3.5vw, 2.875rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              margin: '0 0 1rem',
            }}>
              ¿Cómo te sirve Proocess a vos?
            </h2>

            <p style={{
              fontSize: '1rem', lineHeight: 1.65,
              color: 'rgba(var(--color-ink-rgb), 0.5)',
              margin: 0, maxWidth: '52ch',
            }}>
              Elegí tu perfil para ver el paso a paso específico.
            </p>
          </div>

          <div className="cdu-grid">
            {cases.map((c, i) => (
              <Link
                key={c.tag}
                to={c.to}
                className="cdu-card"
                data-reveal
                data-delay={String(i * 100)}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '1rem',
                  padding: 'clamp(1.5rem, 3vw, 2.25rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.875rem',
                }}
              >
                <span style={{
                  fontSize: '0.75rem', fontWeight: 700,
                  letterSpacing: '0.04em',
                  color: 'var(--color-primary)',
                }}>
                  {c.tag}
                </span>

                <h3 style={{
                  margin: 0,
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: 'var(--color-text)',
                  lineHeight: 1.25,
                  letterSpacing: '-0.015em',
                }}>
                  {c.title}
                </h3>

                <p style={{
                  margin: 0,
                  fontSize: '0.9375rem',
                  color: 'var(--color-text-soft)',
                  lineHeight: 1.6,
                }}>
                  {c.hook}
                </p>

                <span
                  className="cdu-cta"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    fontSize: '0.875rem', fontWeight: 700,
                    color: 'var(--color-primary)',
                    marginTop: '0.375rem',
                    transition: 'gap 0.18s ease',
                  }}
                >
                  Ver cómo funciona →
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
