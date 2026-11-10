import { Link, Navigate, useParams } from 'react-router-dom'
import CaptureExample from '../components/CaptureExample'
import { DemoBand, Lockup, StatusBadge } from '../components/ui'
import { usePageTitle } from '../hooks/usePageTitle'
import { DEMO_LINK, SOLUTIONS_LINK, solutions } from '../data/catalog'

const captureSteps = [
  { title: 'Registrás tu empresa', body: 'Unos pocos datos: quién sos, a qué se dedica la empresa y su tamaño.' },
  { title: 'Mapeás con la IA', body: 'La entrevista arranca por tu equipo: quién está y de qué se ocupa cada persona.' },
  { title: 'Tu equipo cuenta lo suyo', body: 'Cada responsable responde a su ritmo. Si no sabe algo, deriva la pregunta a quien lo sabe.' },
  { title: 'Quedan tus manuales', body: 'Mapa de procesos y, por cada uno, objetivo, descripción y diagrama por roles.' },
]

function CaptureDetail() {
  return (
    <>
      <section className="border-y border-ink/10 bg-cream-light py-20 md:py-24">
        <div className="container">
          <span className="label">Cómo funciona</span>
          <h2 className="heading-section mt-3">De la primera charla <em>al manual.</em></h2>
          <ol className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {captureSteps.map((step, i) => (
              <li key={step.title} className="rounded-lg border border-ink/10 bg-cream p-6">
                <span className="mb-2.5 block text-[0.8125rem] font-semibold text-ink/60">0{i + 1}</span>
                <h3 className="mb-2 font-display text-xl font-medium leading-tight">{step.title}</h3>
                <p className="text-[0.9375rem] leading-relaxed text-ink/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="label">Qué te queda</span>
            <h2 className="heading-section mt-3">Un manual que <em>se entiende.</em></h2>
            <ul className="mt-5 grid gap-2.5">
              <li>✓ Mapa con los procesos de la empresa</li>
              <li>✓ Diagramas BPMN con los roles como carriles</li>
              <li>✓ Manual de cada proceso, editable</li>
            </ul>
            <span className="label mt-8">Todavía no incluye</span>
            <ul className="mt-3 grid gap-2.5 text-ink/70">
              <li>– Ejecutar los procesos dentro de la plataforma</li>
              <li>– Métricas de ejecución</li>
            </ul>
          </div>
          <CaptureExample />
        </div>
      </section>
    </>
  )
}

function McpDetail() {
  return (
    <section className="border-t border-ink/10 bg-cream-light py-20 md:py-24">
      <div className="container">
        <span className="label">Qué va a poder hacer</span>
        <h2 className="heading-section mt-3">Tus procesos, <em>donde ya usás IA.</em></h2>
        <ul className="mt-5 grid gap-2.5">
          <li>✓ Consultar los datos de tu organización</li>
          <li>✓ Listar los procesos documentados</li>
          <li>✓ Leer los pasos de un proceso</li>
        </ul>
      </div>
    </section>
  )
}

export default function SolutionPage() {
  const { id } = useParams()
  const solution = solutions.find((s) => s.id === id)
  usePageTitle(solution?.name)

  if (!solution) return <Navigate to={SOLUTIONS_LINK} replace />

  return (
    <div className="bg-cream text-ink">
      <section className="pb-16 pt-32 md:pb-20 md:pt-40">
        <div className="container">
          <p className="mb-5 text-sm text-ink/70">
            <Link to={SOLUTIONS_LINK} className="underline underline-offset-4">Soluciones</Link> / {solution.name}
          </p>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Lockup name={solution.name} large />
            <StatusBadge available={solution.available}>{solution.status}</StatusBadge>
          </div>
          <h1 className="heading-page max-w-[20ch]">
            {solution.title[0]} <em>{solution.title[1]}</em>
          </h1>
          <p className="lead mt-5">{solution.lead}</p>
          <div className="mt-8">
            {solution.available ? (
              <Link to={DEMO_LINK} className="btn btn-primary">{solution.cta}</Link>
            ) : (
              // Simulación pedida para MCP: el botón no hace nada todavía.
              <button type="button" className="btn btn-primary btn-inert">{solution.cta}</button>
            )}
          </div>
        </div>
      </section>
      {solution.id === 'capture' ? <CaptureDetail /> : <McpDetail />}
      {solution.available && <DemoBand />}
    </div>
  )
}
