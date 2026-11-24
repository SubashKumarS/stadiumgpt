import Icon from '../common/Icon.jsx'

export default function RouteDirections({ startGate, destination, steps, onClear }) {
  if (!destination) return null

  return (
    <div className="mt-4 rounded-xl border border-brand-100 bg-brand-50 p-4">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">Demo route</p>
          <p className="mt-1 text-sm font-semibold text-slate-900">From {startGate?.name} to {destination.name}</p>
        </div>
        <button type="button" onClick={onClear} className="shrink-0 text-xs font-semibold text-brand-700 hover:text-brand-800">Clear Route</button>
      </div>
      <ol className="mt-3 space-y-2">
        {steps.map((step, index) => (
          <li key={step} className="flex items-start gap-2 text-xs leading-relaxed text-slate-600">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-bold text-brand-700 ring-1 ring-brand-200">{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 flex items-center gap-1.5 text-[11px] text-slate-500"><Icon name="info" className="h-3.5 w-3.5" /> Illustrative only — not GPS or real walking directions.</p>
    </div>
  )
}
