import { useEffect, useState } from 'react'

const TALLY_EMBED_URL = 'https://tally.so/embed/ZjQKWy?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1'

export default function QuizPage() {
  const [started, setStarted] = useState(false)

  useEffect(() => {
    document.title = 'Customer Discovery Quiz — Proocess'
  }, [])

  useEffect(() => {
    if (!started) return
    window.scrollTo({ top: 0, behavior: 'smooth' })
    if (!document.querySelector('script[src="https://tally.so/widgets/embed.js"]')) {
      const s = document.createElement('script')
      s.src   = 'https://tally.so/widgets/embed.js'
      s.async = true
      document.body.appendChild(s)
    } else if (typeof (window as any).Tally !== 'undefined') {
      (window as any).Tally.loadEmbeds()
    }
  }, [started])

  return (
    <div className="min-h-screen bg-ink">
      {!started ? (
        /* ── Pantalla de entrada ── */
        <section className="min-h-screen flex items-center px-4">
          <div className="max-w-xl mx-auto w-full py-32">

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral/10 border border-coral/20 text-coral text-xs font-medium font-sans tracking-wide">
                Founders Institute · Validación comercial
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/[0.05] border border-cream/10 text-cream/40 text-xs font-medium font-sans">
                ~5 minutos
              </span>
            </div>

            <h1 className="font-display font-light text-4xl md:text-5xl tracking-[-0.025em] leading-[1.05] text-cream mb-5">
              ¿Cómo opera tu empresa{' '}
              <em className="font-display-em not-italic italic font-light text-coral">hoy?</em>
            </h1>

            <p className="font-sans text-base text-cream/45 leading-relaxed max-w-lg mb-10">
              12 preguntas sobre cómo documentan procesos, qué pasa cuando alguien se va, y cuánto vale resolver ese problema. No hay respuestas correctas ni incorrectas.
            </p>

            <div className="flex items-center gap-6 pb-10 mb-10 border-b border-cream/[0.06]">
              {[
                { n: '5',    label: 'bloques temáticos' },
                { n: '12',   label: 'preguntas' },
                { n: '100%', label: 'anónimo' },
              ].map((s) => (
                <div key={s.label} className="flex items-baseline gap-2">
                  <span className="font-display text-xl font-semibold text-coral">{s.n}</span>
                  <span className="font-sans text-xs text-cream/30">{s.label}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setStarted(true)}
              className="px-8 py-4 bg-coral text-cream font-sans font-semibold text-base rounded-lg hover:opacity-90 transition-opacity duration-150"
              style={{ boxShadow: '0 6px 28px rgba(249,80,104,0.30)' }}
            >
              Comenzar →
            </button>

          </div>
        </section>
      ) : (
        /* ── Formulario ── */
        <section className="pt-28 pb-20 px-4">
          <div className="max-w-xl mx-auto">
            <iframe
              data-tally-src={TALLY_EMBED_URL}
              width="100%"
              height="800"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Customer Discovery Quiz — Proocess"
              className="w-full"
            />
          </div>
        </section>
      )}
    </div>
  )
}
