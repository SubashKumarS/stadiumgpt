import Badge from '../common/Badge.jsx'
import Icon from '../common/Icon.jsx'

/**
 * Prominent "selected stadium" card.
 *
 * Dark, brand-forward hero card showing the demo venue, its city and the
 * selected fixture. Every value comes from the `stadium` prop
 * (src/data/dashboardData.js) and is clearly labelled as demo data.
 */
export default function StadiumCard({ stadium, className = '' }) {
  const { name, city, capacity, event, demoNote } = stadium

  const details = [
    { label: 'Current event', value: event.name, icon: 'stadium', wide: true },
    { label: 'Event date', value: event.date, icon: 'calendar' },
    { label: 'Event time', value: event.time, icon: 'clock' },
    { label: 'Stadium capacity', value: `${capacity} seats`, icon: 'users' },
  ]

  return (
    <section
      className={`relative isolate overflow-hidden rounded-2xl bg-navy-950 text-white shadow-lg shadow-slate-900/10 ${className}`}
    >
      {/* Brand glow + pitch-stripe texture overlays */}
      <div className="glow-brand absolute inset-0" aria-hidden="true" />
      <div className="pitch-stripes absolute inset-0" aria-hidden="true" />

      <div className="relative flex h-full flex-col gap-6 p-6 sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
              <Icon name="stadium" className="h-6 w-6 text-brand-400" />
            </span>
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-400">
                Selected stadium
              </p>
              <h2 className="mt-0.5 truncate text-xl font-semibold tracking-tight sm:text-2xl">
                {name}
              </h2>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-300">
                <Icon name="location" className="h-4 w-4 shrink-0" />
                {city}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Badge variant={event.statusTone}>{event.status}</Badge>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-xs font-medium text-slate-200 ring-1 ring-inset ring-white/15">
              Demo data
            </span>
          </div>
        </div>

        <dl className="grid grid-cols-2 gap-x-4 gap-y-4 rounded-xl bg-white/5 p-4 ring-1 ring-inset ring-white/10 sm:grid-cols-3 sm:p-5">
          {details.map((item) => (
            <div
              key={item.label}
              className={item.wide ? 'col-span-2 sm:col-span-3' : 'min-w-0'}
            >
              <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                <Icon name={item.icon} className="h-3.5 w-3.5 shrink-0" />
                {item.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-slate-100">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-auto flex items-start gap-2 text-xs leading-relaxed text-slate-400">
          <Icon name="info" className="mt-0.5 h-4 w-4 shrink-0" />
          {demoNote}
        </p>
      </div>
    </section>
  )
}
