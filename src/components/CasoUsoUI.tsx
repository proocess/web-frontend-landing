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

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span style={eyebrowStyle}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-primary)', flexShrink: 0 }} />
      {children}
    </span>
  )
}

const stateStyles: Record<string, { bg: string; color: string }> = {
  operativo: { bg: 'var(--color-status-positive-bg)', color: 'var(--color-status-positive-text)' },
  'en desarrollo': { bg: 'var(--color-status-warning-bg)', color: 'var(--color-status-warning-text)' },
  planificado: { bg: 'rgba(var(--color-ink-rgb), 0.06)', color: 'rgba(var(--color-ink-rgb), 0.5)' },
}

export function StateBadge({ state }: { state: 'operativo' | 'en desarrollo' | 'planificado' }) {
  const s = stateStyles[state]
  return (
    <span style={{
      fontSize: '0.5625rem', fontWeight: 700,
      letterSpacing: '0.06em', textTransform: 'uppercase',
      color: s.color, background: s.bg,
      borderRadius: '9999px',
      padding: '0.2rem 0.55rem',
      whiteSpace: 'nowrap',
    }}>
      {state}
    </span>
  )
}

export function StepCard({
  number, title, desc, icon, roadmap, state,
}: {
  number: string
  title: string
  desc: string
  icon: React.ReactNode
  roadmap?: boolean
  state?: 'operativo' | 'en desarrollo' | 'planificado'
}) {
  return (
    <div
      data-reveal
      style={{
        flex: '1 1 16rem',
        background: roadmap ? 'transparent' : 'var(--color-surface)',
        border: roadmap ? '1px dashed var(--color-border)' : '1px solid var(--color-border)',
        borderRadius: '1rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36, borderRadius: '0.5rem',
          background: roadmap ? 'rgba(var(--color-ink-rgb), 0.04)' : 'var(--color-primary-tint)',
          border: roadmap ? '1px solid var(--color-border)' : '1px solid var(--color-primary-glow)',
          color: roadmap ? 'rgba(var(--color-ink-rgb), 0.4)' : 'var(--color-primary)',
          flexShrink: 0,
        }}>
          {icon}
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {state && <StateBadge state={state} />}
          <span style={{ fontSize: '0.6875rem', fontWeight: 800, color: 'rgba(var(--color-primary-rgb), 0.5)', letterSpacing: '0.06em' }}>
            {number}
          </span>
        </div>
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

const stepIconStyle: React.CSSProperties = {
  display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
  color: 'var(--color-primary)', marginBottom: '0.625rem',
}

export function StepRow({
  number, icon, title, desc, visual,
}: {
  number: string
  icon: React.ReactNode
  title: string
  desc: string
  visual: React.ReactNode
}) {
  return (
    <>
      <style>{`
        .cu-step-row .cu-step-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: clamp(1.25rem, 3vw, 2rem);
          align-items: center;
        }
        @media (max-width: 720px) {
          .cu-step-row .cu-step-grid { grid-template-columns: 1fr; }
        }
      `}</style>
      <div data-reveal className="cu-step-row" style={{ display: 'flex', gap: '1.125rem' }}>
        <div style={{
          width: '2.375rem', height: '2.375rem', borderRadius: '50%',
          background: 'var(--color-primary)', color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: '0.8125rem',
          flexShrink: 0,
          fontFamily: 'var(--font-display)',
        }}>
          {number}
        </div>
        <div className="cu-step-grid" style={{ flex: 1, minWidth: 0 }}>
          <div>
            <span style={stepIconStyle}>{icon}</span>
            <h3 style={{
              margin: 0,
              fontFamily: 'var(--font-display)',
              fontSize: '1.0625rem', fontWeight: 700,
              color: 'var(--color-text)',
              lineHeight: 1.3, letterSpacing: '-0.015em',
            }}>
              {title}
            </h3>
            <p style={{ margin: '0.375rem 0 0', fontSize: '0.9375rem', color: 'var(--color-text-soft)', lineHeight: 1.6 }}>
              {desc}
            </p>
          </div>
          {visual}
        </div>
      </div>
    </>
  )
}

const mockCardStyle: React.CSSProperties = {
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border)',
  borderRadius: '0.75rem',
  padding: '1rem 1.125rem',
}

export function OrgSetupMock({ orgName, teams }: { orgName: string; teams: string[] }) {
  return (
    <div style={mockCardStyle}>
      <div style={{ fontSize: '0.625rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(var(--color-ink-rgb), 0.35)', marginBottom: '0.625rem' }}>
        Nueva organización
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--color-bg)', borderRadius: '0.5rem', padding: '0.5rem 0.625rem', fontSize: '0.8125rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>
        {orgName}
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgba(var(--color-ink-rgb), 0.3)' }} aria-hidden="true">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
        </svg>
      </div>
      <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap' }}>
        {teams.map((t, i) => (
          <span key={t} style={{
            fontSize: '0.6875rem',
            background: i === 0 ? 'rgba(var(--color-accent-blue-rgb), 0.4)' : i === 1 ? 'rgba(var(--color-accent-lavender-rgb), 0.5)' : 'rgba(var(--color-ink-rgb), 0.05)',
            color: i === 0 || i === 1 ? 'var(--color-text)' : 'rgba(var(--color-ink-rgb), 0.5)',
            borderRadius: '9999px', padding: '0.25rem 0.625rem',
          }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

export function ChatInterviewMock({ question, answer }: { question: string; answer: string }) {
  return (
    <div style={{ ...mockCardStyle, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
        <span style={{ width: 20, height: 20, borderRadius: '50%', background: 'var(--color-primary)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.5625rem', fontWeight: 700, flexShrink: 0 }}>IA</span>
        <span style={{ background: 'var(--color-bg)', borderRadius: '0.5rem 0.5rem 0.5rem 0.125rem', padding: '0.4375rem 0.6875rem', fontSize: '0.75rem', color: 'var(--color-text)', lineHeight: 1.45 }}>
          {question}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <span style={{ background: 'var(--color-primary-tint)', borderRadius: '0.5rem 0.5rem 0.125rem 0.5rem', padding: '0.4375rem 0.6875rem', fontSize: '0.75rem', color: 'var(--color-text)', lineHeight: 1.45, maxWidth: '85%' }}>
          {answer}
        </span>
      </div>
    </div>
  )
}

export function DiagramMock() {
  return (
    <div style={mockCardStyle}>
      <svg viewBox="0 0 280 76" style={{ width: '100%', display: 'block' }} role="presentation" aria-hidden="true">
        <circle cx="14" cy="38" r="8" fill="var(--color-primary-tint)" stroke="var(--color-primary)" strokeWidth="1.3" />
        <line x1="22" y1="38" x2="48" y2="38" stroke="var(--color-primary)" strokeWidth="1.2" opacity="0.5" />
        <rect x="50" y="23" width="74" height="30" rx="6" fill="var(--color-bg)" stroke="var(--color-border)" />
        <text x="87" y="41" textAnchor="middle" fontSize="9" fill="var(--color-text)" fontFamily="Inter, sans-serif">Recibir pedido</text>
        <line x1="124" y1="38" x2="146" y2="38" stroke="var(--color-primary)" strokeWidth="1.2" opacity="0.5" />
        <polygon points="156,24 169,38 156,52 143,38" fill="var(--color-bg)" stroke="var(--color-border)" />
        <line x1="169" y1="38" x2="191" y2="38" stroke="var(--color-primary)" strokeWidth="1.2" opacity="0.5" />
        <rect x="193" y="23" width="68" height="30" rx="6" fill="var(--color-primary-tint)" stroke="var(--color-primary-glow)" />
        <text x="227" y="41" textAnchor="middle" fontSize="9" fontWeight="600" fill="var(--color-text)" fontFamily="Inter, sans-serif">Asignar</text>
      </svg>
    </div>
  )
}

export function ConsultaMock({ proceso, responsable }: { proceso: string; responsable: string }) {
  return (
    <div style={mockCardStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--color-bg)', borderRadius: '0.5rem', padding: '0.5rem 0.625rem', marginBottom: '0.625rem' }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'rgba(var(--color-ink-rgb), 0.35)', flexShrink: 0 }} aria-hidden="true">
          <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
        </svg>
        <span style={{ fontSize: '0.75rem', color: 'rgba(var(--color-ink-rgb), 0.4)' }}>Buscar proceso…</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8125rem', color: 'var(--color-text)' }}>
        <span style={{ fontWeight: 600 }}>{proceso}</span>
        <span style={{ fontSize: '0.6875rem', color: 'var(--color-text-soft)' }}>{responsable}</span>
      </div>
    </div>
  )
}

export function QueryMock({ question, answer }: { question: string; answer: string }) {
  return (
    <div style={mockCardStyle}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.625rem' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true">
          <path d="M12 19c4.4 0 8-3 8-7s-3.6-7-8-7-8 3-8 7c0 1.6.6 3 1.6 4.2L4 21l4.5-1.2c1 .4 2.2.7 3.5.7z" />
        </svg>
        <span style={{ fontSize: '0.8125rem', color: 'var(--color-text)', fontWeight: 600, lineHeight: 1.4 }}>{question}</span>
      </div>
      <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--color-text-soft)', lineHeight: 1.55, paddingLeft: '1.375rem' }}>
        {answer}
      </p>
    </div>
  )
}

export function DemoVideo({ src, caption }: { src?: string; caption: string }) {
  return (
    <div style={{ position: 'relative', borderRadius: '0.75rem', overflow: 'hidden', border: '1px solid var(--color-border)', aspectRatio: '16 / 10', background: 'var(--color-video-bg)' }}>
      {src ? (
        <video
          src={src}
          poster={undefined}
          controls
          playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      ) : (
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ width: 42, height: 42, borderRadius: '50%', background: 'rgba(247, 245, 242, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="var(--color-bg)" aria-hidden="true">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      )}
      <span style={{ position: 'absolute', bottom: 8, left: 10, fontSize: '0.625rem', color: 'rgba(247, 245, 242, 0.55)' }}>
        {caption}
      </span>
    </div>
  )
}

export function ValueGrid({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0,1fr))', gap: '0.875rem' }}>
      {items.map((text) => (
        <li
          key={text}
          data-reveal
          style={{
            display: 'flex', alignItems: 'flex-start', gap: '0.625rem',
            fontSize: '0.9375rem', color: 'var(--color-text)',
            lineHeight: 1.5,
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: '0.75rem',
            padding: '1rem 1.125rem',
          }}
        >
          <span style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 20, height: 20, borderRadius: '50%',
            background: 'var(--color-primary)',
            color: '#fff', flexShrink: 0, marginTop: 1,
          }}>
            <svg width="8" height="8" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 7l3 3 7-7" />
            </svg>
          </span>
          {text}
        </li>
      ))}
    </ul>
  )
}
