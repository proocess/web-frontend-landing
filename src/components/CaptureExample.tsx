export default function CaptureExample() {
  return (
    <figure className="m-0 grid gap-3 rounded-xl bg-ink p-4 sm:grid-cols-[0.86fr_1.14fr]">
      <figcaption className="flex justify-between gap-2 px-1.5 text-[0.8125rem] text-cream/70 sm:col-span-2">
        <span>De la charla al manual</span>
        <span>Ejemplo ilustrativo</span>
      </figcaption>

      <div className="flex flex-col gap-2 rounded-lg bg-cream-light p-3.5 text-[0.84rem] leading-snug">
        <span className="text-xs font-semibold text-ink/60">Entrevista</span>
        <p className="max-w-[94%] rounded-md bg-cream px-3 py-2">¿Qué pasa cuando una compra supera el monto habitual?</p>
        <p className="max-w-[94%] self-end rounded-md bg-sky-soft px-3 py-2">La revisa administración y, si corresponde, la aprueba gerencia.</p>
        <p className="max-w-[94%] rounded-md bg-cream px-3 py-2">¿Quién conoce los criterios de aprobación?</p>
        <p className="max-w-[94%] rounded-md bg-lavender-soft px-3 py-2 text-[0.78rem]">Se deriva una pregunta a Gerencia</p>
      </div>

      <div className="min-w-0 rounded-lg bg-cream-light p-3.5">
        <span className="text-xs font-semibold text-ink/60">Manual del proceso</span>
        <h3 className="mb-2 mt-0.5 font-display text-[1.0625rem] font-medium leading-tight">Aprobación de compras</h3>
        <p className="mb-2 text-[0.78rem] leading-snug">
          <b className="block text-[0.6875rem] font-semibold uppercase tracking-wider text-ink/60">Objetivo</b>
          Que cada compra se apruebe con el mismo criterio.
        </p>
        <svg viewBox="0 0 320 112" className="block h-auto w-full rounded-sm border border-ink/10 bg-white" aria-hidden="true">
          <g fontFamily="Inter, sans-serif" fontSize="9" fill="#1A1E23">
            <line x1="0" y1="56" x2="320" y2="56" stroke="#D7D3CE" />
            <line x1="20" y1="0" x2="20" y2="112" stroke="#D7D3CE" />
            <text transform="translate(13 50) rotate(-90)">Administración</text>
            <text transform="translate(13 100) rotate(-90)">Gerencia</text>
            <circle cx="36" cy="28" r="7" fill="#fff" stroke="#1A1E23" />
            <rect x="54" y="14" width="66" height="28" rx="5" fill="#E9E1FF" stroke="#1A1E23" strokeWidth=".8" />
            <text x="87" y="31" textAnchor="middle">Revisar pedido</text>
            <path d="M150 15l13 13-13 13-13-13z" fill="#fff" stroke="#1A1E23" />
            <text x="150" y="31" textAnchor="middle" fontSize="10">×</text>
            <rect x="184" y="14" width="66" height="28" rx="5" fill="#E9E1FF" stroke="#1A1E23" strokeWidth=".8" />
            <text x="217" y="31" textAnchor="middle">Emitir orden</text>
            <circle cx="283" cy="28" r="7" fill="#fff" stroke="#1A1E23" strokeWidth="2" />
            <rect x="117" y="70" width="66" height="28" rx="5" fill="#C7E7F2" stroke="#1A1E23" strokeWidth=".8" />
            <text x="150" y="87" textAnchor="middle">Aprobar compra</text>
            <path d="M43 28h11M120 28h17M163 28h21M250 28h26M150 41v29M183 84h34V42" fill="none" stroke="#1A1E23" strokeWidth=".8" />
          </g>
        </svg>
      </div>
    </figure>
  )
}
