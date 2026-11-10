// Para sumar una solución o un perfil alcanza con agregar una entrada acá.
// El menú, el footer, los listados y las rutas se arman desde estas listas.

export type Solution = {
  id: 'capture' | 'mcp'
  name: string
  status: string
  available: boolean
  summary: string
  title: [string, string]
  lead: string
  cta: string
}

export type Profile = {
  id: string
  name: string
  summary: string
  title: [string, string]
  lead: string
}

export const solutions: Solution[] = [
  {
    id: 'capture',
    name: 'Capture',
    status: 'Disponible',
    available: true,
    summary: 'Tu equipo cuenta cómo trabaja y quedan tus manuales de procesos.',
    title: ['Tu equipo cuenta cómo trabaja.', 'Capture lo deja escrito.'],
    lead: 'Una IA entrevista a cada persona, pregunta lo que falta y arma el mapa de procesos, los diagramas y los manuales. Nadie tiene que saber de BPMN.',
    cta: 'Agendá una demo',
  },
  {
    id: 'mcp',
    name: 'MCP',
    status: 'Próximamente',
    available: false,
    summary: 'Preguntale a tu asistente de IA cómo se hace algo en tu empresa.',
    title: ['Preguntale a tu IA', 'cómo se hace en tu empresa.'],
    lead: 'Conectá tus procesos documentados a tu asistente de IA, para que responda con lo que tu empresa hace de verdad y no con algo genérico.',
    cta: 'Avisame cuando esté',
  },
]

export const profiles: Profile[] = [
  {
    id: 'empresas',
    name: 'Empresas',
    summary: 'Que el trabajo no dependa de quién esté ese día.',
    title: ['Que el trabajo fluya,', 'esté quien esté.'],
    lead: 'Para empresas que crecen y ya no pueden depender de «eso lo sabe solo Fulano». Empezás vos con una entrevista sobre tu equipo, y después cada responsable cuenta lo suyo a su ritmo.',
  },
  {
    id: 'implementadores',
    name: 'Implementadores',
    summary: 'Entendé cómo trabaja tu cliente antes de presupuestar.',
    title: ['Entendé cómo trabaja tu cliente', 'antes de presupuestar.'],
    lead: 'Para software factories y consultoras. La IA hace las entrevistas, y vos arrancás el proyecto con los procesos del cliente ya escritos.',
  },
]

export const DEMO_LINK = '/#cta-form'
export const SOLUTIONS_LINK = '/#soluciones'
export const LOGIN_URL = 'https://app.proocess.com/login'
