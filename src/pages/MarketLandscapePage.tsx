import { useEffect, useState } from 'react'

const stats = [
  { value: '~$19–21B', label: 'TAM global BPM 2025', sub: 'USD' },
  { value: '17–19%', label: 'CAGR global proyectado', sub: 'hacia 2034' },
  { value: '$1.2B', label: 'SAM LATAM 2024', sub: 'BPM, creciendo 18.6%/año' },
  { value: '>98%', label: 'empresas LATAM', sub: 'son PyMEs' },
  { value: '45%', label: 'profesionales en AR', sub: 'búsqueda activa 2025' },
]

const competitors = [
  { name: 'Pega', x: 78, y: 15, enterprise: true },
  { name: 'Appian', x: 62, y: 22, enterprise: true },
  { name: 'IBM BPM', x: 55, y: 18, enterprise: true },
  { name: 'Kissflow', x: 45, y: 35, enterprise: true },
  { name: 'Pipefy', x: 58, y: 55, enterprise: false },
  { name: 'Process Street', x: 30, y: 62, enterprise: false },
  { name: 'Tallyfy', x: 22, y: 65, enterprise: false },
  { name: 'Notion', x: 65, y: 72, enterprise: false },
  { name: 'Proocess', x: 72, y: 82, enterprise: false, isUs: true },
]

const whyNow = [
  {
    number: '01',
    title: 'LLMs aptos para elicitación de procesos',
    period: '2024–2025',
    body: 'Hasta 2023, el mapeo de procesos requería consultores o herramientas de process mining. En 2024–2025, los LLMs alcanzaron la capacidad de conducir conversaciones estructuradas para extraer procesos en lenguaje natural, generar diagramas BPMN automáticamente e identificar inconsistencias sin intervención humana.',
    sources: ['arXiv – LLMs to Enhance Business Process Modeling (2025)', 'Springer – LLM-enabled BPM coherence checking (2025)'],
  },
  {
    number: '02',
    title: 'Rotación post-pandemia expuso la fragilidad operativa',
    period: '2021–2025',
    body: 'La pandemia aceleró la rotación de talento en PyMEs. Cada persona que se va lleva el conocimiento de cómo se hacen las cosas. En Argentina, el 45% de los profesionales en búsqueda activa implica ciclos de rotación cada 12–18 meses en roles operativos clave. El dolor es urgente y reconocido.',
    sources: ['Ámbito – Desafíos de las PyMEs con el personal e IA'],
  },
  {
    number: '03',
    title: 'SaaS cloud eliminó la barrera de entrada',
    period: '2025',
    body: 'El BPM enterprise tradicional requería proyectos de 6 a 18 meses con consultores, a $50.000–$200.000 USD. En 2025, el modelo SaaS con onboarding self-service hace que una PyME pueda estar operativa en horas. A $150 USD/mes, Proocess tiene el mismo costo que 3 horas de un consultor de procesos tradicional.',
    sources: ['Mintlify – AI Documentation Trends 2025'],
  },
]

const competitorTable = [
  { name: 'Pipefy', focus: 'Workflow automation, SME & enterprise', revenue: '$65.9M rev · $138.7M funding', price: 'Freemium + desde ~$18/usuario/mes', gap: 'No AI-native para elicitación. Requiere que el usuario ya sepa cómo modelar el proceso.' },
  { name: 'Kissflow', focus: 'BPM low-code', revenue: '$90.3M ARR · bootstrapped', price: 'Desde $1.500/mes (business)', gap: 'Precio prohibitivo para PyMEs. Orientado a enterprise.' },
  { name: 'Process Street', focus: 'Checklists y SOPs', revenue: 'No disclosure', price: '~$25/usuario/mes', gap: 'Sin IA. El usuario escribe el proceso manualmente.' },
  { name: 'Tallyfy', focus: 'Workflows repetitivos', revenue: 'Bootstrapped, nicho pequeño', price: '~$20/usuario/mes', gap: 'Sin IA. Flujos rígidos. Sin elicitación conversacional.' },
  { name: 'Notion', focus: 'Flexibilidad total', revenue: 'Valuado en ~$10B', price: 'Freemium', gap: 'No es BPM. Sin estructura ejecutable ni versionado.' },
  { name: 'Appian / Pega', focus: 'Enterprise BPM', revenue: 'Cotizadas en NASDAQ', price: 'Enterprise pricing', gap: 'Fuera del target PyME. Alta complejidad de implementación.' },
]

const summaryRows = [
  { variable: 'TAM global (BPM, 2025)', value: '~$19B–$21B USD' },
  { variable: 'CAGR global proyectado', value: '17–19%' },
  { variable: 'SAM LATAM (BPM, 2024)', value: '$1.2B USD, creciendo al 18.6%/año' },
  { variable: '% empresas LATAM que son PyMEs', value: '>98%' },
  { variable: '% empleo privado PyME en Argentina', value: '77%' },
  { variable: 'Rotación profesional en Argentina', value: '45% en búsqueda activa' },
  { variable: 'Pricing Proocess vs. competidores', value: '$150/mes todo incluido vs. $1.500/mes (Kissflow) o $25/usuario/mes (Process Street)' },
  { variable: 'Ventaja diferencial', value: 'Elicitación AI-first — ningún competidor resuelve el punto 0' },
]

const allSources = [
  {
    category: 'Mercado global BPM',
    items: [
      { label: 'Grand View Research – BPM Market Size & Forecast', url: 'https://www.grandviewresearch.com/industry-analysis/business-process-management-bpm-market' },
      { label: 'Precedence Research – BPM Market, USD 68.69B by 2034', url: 'https://www.precedenceresearch.com/business-process-management-market' },
      { label: 'Market Research Future – BPM Market Report 2032', url: 'https://www.marketresearchfuture.com/reports/business-process-management-market-3408' },
      { label: 'Fortune Business Insights – BPM Market 2026–2034', url: 'https://www.fortunebusinessinsights.com/business-process-management-bpm-market-102639' },
      { label: 'Verified Market Research – BPM Software Market', url: 'https://www.verifiedmarketresearch.com/product/business-process-management-software-market/' },
    ],
  },
  {
    category: 'Mercado LATAM',
    items: [
      { label: 'Verified Market Research – Latin America BPM Solution Market 2025–2033', url: 'https://www.verifiedmarketresearch.com/product/latin-america-business-process-management-solution-market/' },
      { label: 'Grand View Research – Latin America BPM Market Outlook 2030', url: 'https://www.grandviewresearch.com/horizon/outlook/business-process-management-market/latin-america' },
    ],
  },
  {
    category: 'Contexto Argentina y PyMEs',
    items: [
      { label: 'UCEMA – Indicadores PyMEs, Marzo 2025', url: 'https://ucema.edu.ar/sites/default/files/2025-03/IndicadoresUCEMA_PyMEs032025.pdf' },
      { label: 'Ámbito – Las PyMEs y los desafíos con el personal e IA', url: 'https://www.ambito.com/negocios/las-pymes-la-argentina-hoy-los-desafios-el-personal-la-integracion-inteligencia-artificial-n6158288' },
      { label: 'ITSitio.ar – El nuevo mapa de las PyMEs argentinas 2025', url: 'https://www.itsitio.com/ar/informes/el-nuevo-mapa-de-las-pymes-argentinas-que-las-preocupa-y-donde-ven-oportunidades/' },
    ],
  },
  {
    category: 'Competidores',
    items: [
      { label: 'GetLatka – Pipefy Revenue, Customers & Funding', url: 'https://getlatka.com/companies/pipefy' },
      { label: 'GetLatka – Kissflow Revenue & Funding', url: 'https://getlatka.com/companies/kissflow#funding' },
      { label: 'Kognitos – Best BPM Companies 2026', url: 'https://www.kognitos.com/blog/best-bpm-companies-enterprise-digital-transformation-2026/' },
      { label: 'Scribe – 10 Process Street Alternatives 2026', url: 'https://scribe.com/library/process-street-alternatives' },
    ],
  },
  {
    category: 'Why Now — IA y BPM',
    items: [
      { label: 'arXiv – LLMs to Enhance Business Process Modeling (2025)', url: 'https://arxiv.org/html/2604.14034v1' },
      { label: 'Springer – LLM-enabled BPM coherence checking (2025)', url: 'https://link.springer.com/article/10.1007/s44311-025-00024-6' },
      { label: 'Mintlify – AI Documentation Trends: What\'s Changing in 2025', url: 'https://www.mintlify.com/blog/ai-documentation-trends-whats-changing-in-2025' },
    ],
  },
]

function SectionLabel({ number, title }: { number: string; title: string }) {
  return (
    <div className="flex items-start gap-4 mb-8">
      <span className="font-display text-xs font-semibold tracking-[0.2em] text-coral/60 uppercase pt-0.5 shrink-0">{number}</span>
      <h2 className="font-display text-2xl md:text-3xl font-medium text-cream tracking-tight">{title}</h2>
    </div>
  )
}

function Divider() {
  return <div className="border-t border-cream/[0.06] my-16" />
}

export default function MarketLandscapePage() {
  useEffect(() => { document.title = 'Análisis de Mercado — Proocess' }, [])
  const [sourcesOpen, setSourcesOpen] = useState(false)

  return (
    <div className="bg-ink min-h-screen text-cream">
      {/* Hero */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-narrow mx-auto">
          <div className="flex flex-wrap items-center gap-3 mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral/10 border border-coral/20 text-coral text-xs font-medium font-sans tracking-wide">
              Founders Institute · Actividad 2
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/[0.05] border border-cream/10 text-cream/40 text-xs font-medium font-sans tracking-wide">
              Junio 2026
            </span>
          </div>

          <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.0] mb-6 text-cream">
            Análisis de<br />
            <em className="font-display-em not-italic italic font-light text-coral">mercado</em>
          </h1>

          <p className="font-display text-lg md:text-xl text-cream/50 font-normal leading-relaxed max-w-lg mt-6">
            BPM · Knowledge Management · AI-native process automation
          </p>

          <p className="font-sans text-base text-cream/40 leading-relaxed max-w-xl mt-4">
            Análisis del espacio donde opera Proocess: tamaño, crecimiento, jugadores clave y las fuerzas que hacen que este sea el momento preciso para construirlo.
          </p>
        </div>
      </section>

      {/* Executive Summary Stats */}
      <section className="px-4 pb-20">
        <div className="max-w-narrow mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-ink-soft rounded-lg p-5 border border-cream/[0.06]"
              >
                <div className="font-display text-2xl md:text-3xl font-semibold text-coral tracking-tight leading-none mb-2">
                  {s.value}
                </div>
                <div className="font-sans text-xs text-cream/60 leading-snug mb-1">{s.label}</div>
                <div className="font-sans text-[10px] text-cream/30 leading-snug">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-narrow mx-auto px-4">
        <Divider />

        {/* 1.1 Definición del espacio */}
        <section className="mb-16">
          <SectionLabel number="1.1" title="Definición del espacio" />
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { tag: 'Capa 1', title: 'BPM', desc: 'Software para modelar, ejecutar y auditar procesos de negocio.' },
              { tag: 'Capa 2', title: 'Knowledge Management', desc: 'Captura y sistematización del conocimiento operativo tácito en PyMEs.' },
              { tag: 'Capa 3', title: 'AI-native process automation', desc: 'Uso de LLMs para elicitar, estructurar y mejorar procesos sin intervención manual intensiva.' },
            ].map((c) => (
              <div key={c.title} className="bg-ink-soft rounded-lg p-5 border border-cream/[0.06]">
                <span className="inline-block px-2 py-0.5 rounded text-[10px] font-sans font-medium text-sky-soft bg-sky-soft/10 border border-sky-soft/20 mb-3">
                  {c.tag}
                </span>
                <div className="font-display text-base font-semibold text-cream mb-2">{c.title}</div>
                <p className="font-sans text-sm text-cream/50 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="rounded-lg border border-coral/20 bg-coral/5 p-5">
            <p className="font-sans text-sm text-cream/70 leading-relaxed">
              <span className="font-semibold text-coral">Posicionamiento de Proocess:</span>{' '}
              La diferenciación no está en el BPM tradicional (eso lo hacen Pipefy, Kissflow). Está en ser{' '}
              <span className="text-cream font-medium">el primer punto de entrada</span> para PyMEs que todavía no tienen nada documentado,
              usando IA conversacional como mecanismo de captura — resolviendo el <em>punto 0</em> que ningún competidor atiende.
            </p>
          </div>
        </section>

        <Divider />

        {/* 1.2 Mercado Global */}
        <section className="mb-16">
          <SectionLabel number="1.2" title="Tamaño de mercado global" />

          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm font-sans border-collapse">
              <thead>
                <tr className="border-b border-cream/10">
                  <th className="text-left py-3 pr-4 text-cream/40 font-medium text-xs uppercase tracking-wider">Fuente</th>
                  <th className="text-right py-3 px-4 text-cream/40 font-medium text-xs uppercase tracking-wider">Valor 2024–2025</th>
                  <th className="text-right py-3 px-4 text-cream/40 font-medium text-xs uppercase tracking-wider">Proyección</th>
                  <th className="text-right py-3 pl-4 text-cream/40 font-medium text-xs uppercase tracking-wider">CAGR</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { source: 'Grand View Research', val: '$21.25B (2025)', proj: '$91.87B (2034)', cagr: '17.2%' },
                  { source: 'Precedence Research', val: '$17.5B (2025)', proj: '$38.1B (2034)', cagr: '9.0%' },
                  { source: 'Market Research Future', val: '$19.4B (2024)', proj: '$63.4B (2032)', cagr: '18.9%' },
                  { source: 'Fortune Business Insights', val: 'n/d', proj: '$68.69B (2034)', cagr: 'n/d' },
                ].map((r) => (
                  <tr key={r.source} className="border-b border-cream/[0.04] hover:bg-cream/[0.02] transition-colors">
                    <td className="py-3.5 pr-4 text-cream/70">{r.source}</td>
                    <td className="py-3.5 px-4 text-right text-cream/80 font-medium">{r.val}</td>
                    <td className="py-3.5 px-4 text-right text-cream/80 font-medium">{r.proj}</td>
                    <td className="py-3.5 pl-4 text-right text-coral font-semibold">{r.cagr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-sky-soft/[0.08] border border-sky-soft/20 rounded-lg p-5">
            <p className="font-sans text-sm text-cream/70 leading-relaxed">
              <span className="font-semibold text-sky-soft">Consenso razonable:</span>{' '}
              el mercado global de BPM vale entre{' '}
              <span className="text-cream font-medium">$17B y $21B en 2025</span> y crecerá a{' '}
              <span className="text-cream font-medium">$40B–$90B hacia 2034</span>, con un CAGR sostenido de{' '}
              <span className="text-cream font-medium">9% a 19%</span> dependiendo de cuánto se incluya el segmento de automatización con IA.
            </p>
            <p className="font-sans text-xs text-cream/30 mt-2">
              El spread entre fuentes se explica por diferencias en la delimitación del mercado: algunas incluyen RPA e hiperautomatización, otras solo BPM clásico.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-base font-semibold text-cream mb-4">Distribución regional del mercado global</h3>
            <div className="space-y-3">
              {[
                { region: 'Norteamérica', pct: 34 },
                { region: 'Asia-Pacífico', pct: 29 },
                { region: 'Europa', pct: 27 },
                { region: 'Medio Oriente y África', pct: 10 },
              ].map((r) => (
                <div key={r.region} className="flex items-center gap-4">
                  <span className="font-sans text-sm text-cream/50 w-44 shrink-0">{r.region}</span>
                  <div className="flex-1 h-1.5 bg-cream/[0.06] rounded-full overflow-hidden">
                    <div
                      className="h-full bg-sky-soft/60 rounded-full transition-all"
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                  <span className="font-display text-sm font-semibold text-cream/60 w-10 text-right shrink-0">{r.pct}%</span>
                </div>
              ))}
              <div className="flex items-center gap-4">
                <span className="font-sans text-sm text-coral/80 w-44 shrink-0">LATAM (potencial)</span>
                <div className="flex-1 h-1.5 bg-cream/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-coral/40 rounded-full" style={{ width: '6%' }} />
                </div>
                <span className="font-display text-sm font-semibold text-coral/60 w-10 text-right shrink-0">↑</span>
              </div>
            </div>
            <p className="font-sans text-xs text-cream/25 mt-3">
              LATAM tiene potencial de crecimiento acelerado dado el volumen de PyMEs y la baja penetración actual de herramientas formales de BPM.
            </p>
          </div>
        </section>

        <Divider />

        {/* 1.3 LATAM */}
        <section className="mb-16">
          <SectionLabel number="1.3" title="Mercado en América Latina" />
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              { label: 'Mercado BPM LATAM 2024', value: '$1,204.3M', unit: 'USD' },
              { label: 'CAGR proyectado 2025–2030', value: '18.6%', unit: 'anual' },
            ].map((m) => (
              <div key={m.label} className="bg-ink-soft rounded-lg p-6 border border-cream/[0.06]">
                <div className="font-display text-4xl font-semibold text-coral tracking-tight mb-1">{m.value}</div>
                <div className="font-sans text-xs text-cream/30 uppercase tracking-wider mb-1">{m.unit}</div>
                <div className="font-sans text-sm text-cream/60">{m.label}</div>
              </div>
            ))}
          </div>
          <p className="font-sans text-sm text-cream/60 leading-relaxed mb-4">
            Las PyMEs representan{' '}
            <span className="text-cream font-medium">más del 98% de las empresas en América Latina</span> y son el target principal de la adopción de SaaS.
            La principal barrera histórica era el costo de implementación de soluciones enterprise.
            Los modelos SaaS con precios fijos y sin fricción de onboarding eliminan esa barrera.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Automatización cloud', 'Transformación digital', 'Cloud-first', 'Mayor crecimiento proyectado: segmento PyME'].map((t) => (
              <span key={t} className="px-3 py-1 rounded-full bg-lavender-soft/[0.08] border border-lavender-soft/20 text-lavender-soft text-xs font-sans">
                {t}
              </span>
            ))}
          </div>
        </section>

        <Divider />

        {/* 1.4 Argentina */}
        <section className="mb-16">
          <SectionLabel number="1.4" title="Contexto específico Argentina" />
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { stat: '77%', title: 'Empleo PyME', desc: 'de los empleos privados en Argentina son en PyMEs.', source: 'UCEMA · Mar 2025' },
              { stat: '45%', title: 'Rotación profesional', desc: 'de los profesionales en búsqueda activa de nuevas oportunidades en 2025.', source: 'Ámbito · 2025', highlight: true },
              { stat: '43%', title: 'Informalidad laboral', desc: 'de la población ocupada trabaja en la informalidad al Q4 2025.', source: 'UCEMA · Mar 2025' },
            ].map((a) => (
              <div
                key={a.title}
                className={`rounded-lg p-5 border ${a.highlight ? 'bg-coral/5 border-coral/20' : 'bg-ink-soft border-cream/[0.06]'}`}
              >
                <div className={`font-display text-4xl font-semibold tracking-tight mb-2 ${a.highlight ? 'text-coral' : 'text-cream'}`}>{a.stat}</div>
                <div className="font-display text-sm font-semibold text-cream mb-1">{a.title}</div>
                <p className="font-sans text-xs text-cream/50 leading-relaxed mb-3">{a.desc}</p>
                <span className="font-sans text-[10px] text-cream/25">{a.source}</span>
              </div>
            ))}
          </div>
          <div className="bg-coral/5 border border-coral/20 rounded-lg p-5">
            <p className="font-sans text-sm text-cream/70 leading-relaxed">
              <span className="font-semibold text-coral">El dolor central de Proocess:</span>{' '}
              La alta rotación hace que el conocimiento operativo se vaya con las personas — exactamente el problema que resuelve el Pilar 1 de Proocess (elicitación).
              A $150 USD/mes y con onboarding en horas, Proocess llega al mercado en el momento preciso en que las PyMEs argentinas reconocen la IA como palanca de eficiencia operativa.
            </p>
          </div>
        </section>

        <Divider />

        {/* 1.5 Competitive Landscape */}
        <section className="mb-16">
          <SectionLabel number="1.5" title="Landscape competitivo" />

          {/* Mapa de posicionamiento */}
          <div className="bg-ink-soft rounded-lg border border-cream/[0.06] p-6 mb-8">
            <div className="text-xs font-sans text-cream/30 text-center mb-4 uppercase tracking-wider">Mapa de posicionamiento</div>
            <div className="relative w-full" style={{ paddingBottom: '60%' }}>
              <svg
                viewBox="0 0 100 80"
                className="absolute inset-0 w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Ejes */}
                <line x1="50" y1="4" x2="50" y2="76" stroke="rgba(255,252,250,0.08)" strokeWidth="0.3" />
                <line x1="4" y1="50" x2="96" y2="50" stroke="rgba(255,252,250,0.08)" strokeWidth="0.3" />

                {/* Labels de ejes */}
                <text x="50" y="2.5" textAnchor="middle" className="text-[3px]" fill="rgba(255,252,250,0.25)" fontSize="3">PRECIO ALTO</text>
                <text x="50" y="79" textAnchor="middle" fill="rgba(255,252,250,0.25)" fontSize="3">PRECIO BAJO</text>
                <text x="2" y="50" textAnchor="middle" fill="rgba(255,252,250,0.25)" fontSize="3" transform="rotate(-90 2 50)">ENTERPRISE</text>
                <text x="98" y="50" textAnchor="middle" fill="rgba(255,252,250,0.25)" fontSize="3" transform="rotate(90 98 50)">PyME</text>

                {/* Cuadrante Proocess */}
                <rect x="50" y="50" width="46" height="26" fill="rgba(249,80,104,0.04)" rx="1" />

                {competitors.map((c) => (
                  <g key={c.name}>
                    <circle
                      cx={c.x}
                      cy={c.y}
                      r={c.isUs ? 2.5 : 1.8}
                      fill={c.isUs ? '#F95068' : c.enterprise ? 'rgba(199,231,242,0.5)' : 'rgba(255,252,250,0.25)'}
                      stroke={c.isUs ? '#F95068' : 'none'}
                      strokeWidth={c.isUs ? '0.5' : '0'}
                    />
                    <text
                      x={c.x + (c.x > 70 ? -3 : 3)}
                      y={c.y + (c.y > 60 ? -3 : 4)}
                      fontSize="2.8"
                      fill={c.isUs ? '#F95068' : c.enterprise ? 'rgba(199,231,242,0.7)' : 'rgba(255,252,250,0.5)'}
                      textAnchor={c.x > 70 ? 'end' : 'start'}
                      fontWeight={c.isUs ? '600' : '400'}
                    >
                      {c.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            <div className="flex gap-6 mt-2 justify-center">
              {[
                { color: 'bg-sky-soft/50', label: 'Enterprise' },
                { color: 'bg-cream/25', label: 'PyME' },
                { color: 'bg-coral', label: 'Proocess' },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${l.color}`} />
                  <span className="font-sans text-[10px] text-cream/40">{l.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabla comparativa */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs font-sans border-collapse">
              <thead>
                <tr className="border-b border-cream/10">
                  {['Player', 'Foco', 'Revenue / Funding', 'Precio base', 'Gap vs. Proocess'].map((h) => (
                    <th key={h} className="text-left py-3 pr-4 text-cream/30 font-medium uppercase tracking-wider text-[10px] last:text-cream/40">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {competitorTable.map((r) => (
                  <tr key={r.name} className="border-b border-cream/[0.04] hover:bg-cream/[0.02] transition-colors align-top">
                    <td className="py-3.5 pr-4 font-semibold text-cream/80 whitespace-nowrap">{r.name}</td>
                    <td className="py-3.5 pr-4 text-cream/50 leading-relaxed">{r.focus}</td>
                    <td className="py-3.5 pr-4 text-cream/40 whitespace-nowrap">{r.revenue}</td>
                    <td className="py-3.5 pr-4 text-cream/40 whitespace-nowrap">{r.price}</td>
                    <td className="py-3.5 text-cream/60 leading-relaxed">{r.gap}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 bg-coral/5 border border-coral/20 rounded-lg p-5">
            <p className="font-sans text-sm text-cream/70 leading-relaxed">
              <span className="font-semibold text-coral">El gap real no está en precio.</span>{' '}
              Todos los competidores asumen que el usuario ya sabe cómo es su proceso y solo necesita documentarlo o ejecutarlo.
              Proocess resuelve el paso previo: <span className="text-cream font-medium">extraer el conocimiento tácito mediante IA conversacional</span> para construir la documentación desde cero, sin esfuerzo del usuario.
            </p>
          </div>
        </section>

        <Divider />

        {/* 1.6 Why Now */}
        <section className="mb-16">
          <SectionLabel number="1.6" title="Why Now — Las 3 fuerzas que convergen en 2025" />
          <div className="space-y-4">
            {whyNow.map((w) => (
              <div key={w.number} className="bg-lavender-soft/[0.06] border border-lavender-soft/15 rounded-lg p-6">
                <div className="flex items-start gap-5">
                  <div className="shrink-0">
                    <div className="font-display text-3xl font-light text-lavender-soft/40 leading-none">{w.number}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h3 className="font-display text-base md:text-lg font-semibold text-cream">{w.title}</h3>
                      <span className="font-sans text-xs text-lavender-soft/60 border border-lavender-soft/20 px-2 py-0.5 rounded-full">{w.period}</span>
                    </div>
                    <p className="font-sans text-sm text-cream/60 leading-relaxed mb-4">{w.body}</p>
                    <div className="flex flex-wrap gap-2">
                      {w.sources.map((s) => (
                        <span key={s} className="font-sans text-[10px] text-cream/25 bg-cream/[0.03] border border-cream/[0.06] px-2 py-1 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Resumen ejecutivo */}
        <section className="mb-16">
          <SectionLabel number="1.7" title="Resumen ejecutivo del mercado" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-sans border-collapse">
              <tbody>
                {summaryRows.map((r, i) => (
                  <tr key={r.variable} className={`border-b border-cream/[0.05] ${i === summaryRows.length - 1 ? 'border-b-0' : ''}`}>
                    <td className="py-4 pr-6 text-cream/40 text-xs align-top w-64 shrink-0">{r.variable}</td>
                    <td className="py-4 text-cream/80 font-medium leading-relaxed">{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <Divider />

        {/* Fuentes */}
        <section className="mb-20">
          <button
            onClick={() => setSourcesOpen((v) => !v)}
            className="flex items-center gap-3 group mb-6 w-full text-left"
          >
            <span className="font-display text-sm font-medium text-cream/40 group-hover:text-cream/60 transition-colors">Fuentes</span>
            <span className="text-cream/20 text-xs">{sourcesOpen ? '▲ ocultar' : '▼ ver todas'}</span>
          </button>

          {sourcesOpen && (
            <div className="space-y-8 animate-[fadeIn_0.2s_ease]">
              {allSources.map((cat) => (
                <div key={cat.category}>
                  <h4 className="font-sans text-xs font-semibold text-cream/30 uppercase tracking-wider mb-3">{cat.category}</h4>
                  <ul className="space-y-2">
                    {cat.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-sans text-xs text-cream/40 hover:text-sky-soft transition-colors underline underline-offset-2 decoration-cream/10 hover:decoration-sky-soft/40"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <p className="font-sans text-[10px] text-cream/20 pt-4 border-t border-cream/[0.04]">
                Documento generado como parte del proceso de validación comercial de Proocess para Founders Institute — Junio 2026.
              </p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
