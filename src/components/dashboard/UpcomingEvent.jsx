import { Link } from 'react-router-dom'
import Badge from '../common/Badge.jsx'
import Icon from '../common/Icon.jsx'

/**
 * Upcoming event card: name, date, time, stadium and status, plus a
 * "View Event" button that routes to the events page.
 */
export default function UpcomingEvent({ event, className = '' }) {
  const rows = [
    { icon: 'calendar', label: event.date },
    { icon: 'clock', label: event.time },
    { icon: 'location', label: event.stadium },
  ]

  return (
    <section
      className={`flex min-w-0 flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 ${className}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
            Upcoming event
          </p>
          <h2 className="mt-1 truncate text-lg font-semibold text-slate-900">
            {event.name}
          </h2>
        </div>
        <Badge variant={event.statusTone}>{event.status}</Badge>
      </div>

      <ul className="mt-5 space-y-3">
        {rows.map((row) => (
          <li key={row.icon} className="flex items-center gap-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
              <Icon name={row.icon} className="h-4 w-4" />
            </span>
            <span className="min-w-0 text-sm text-slate-600">{row.label}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6">
        <Link
          to="/events"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
        >
          View Event
          <Icon name="arrowRight" className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
