import Icon from '../common/Icon.jsx'

const TONES = {
  brand: 'bg-brand-50 text-brand-600',
  violet: 'bg-violet-50 text-violet-600',
  sky: 'bg-sky-50 text-sky-600',
  success: 'bg-emerald-50 text-emerald-600',
  warning: 'bg-amber-50 text-amber-600',
}

/**
 * Recent activity feed: what the visitor did in the app recently,
 * each entry with a timestamp. Single column on mobile, two on wider screens.
 */
export default function RecentActivity({ activities, className = '' }) {
  return (
    <section
      className={`min-w-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 ${className}`}
    >
      <h2 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
        Recent activity
      </h2>
      <p className="text-sm text-slate-500">
        Your latest match-day actions on this device.
      </p>

      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {activities.map((item) => (
          <li
            key={item.id}
            className="flex min-w-0 items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-4"
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                TONES[item.tone] ?? TONES.brand
              }`}
            >
              <Icon name={item.icon} className="h-4 w-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-slate-800">{item.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-slate-500">
                {item.detail}
              </p>
              <p className="mt-1 text-xs text-slate-400">{item.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
