import { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import Badge from '../components/common/Badge.jsx'
import Icon from '../components/common/Icon.jsx'
import { EVENTS, EVENT_FILTERS } from '../data/events.js'

const CATEGORY_ICONS = {
  Football: 'stadium',
  Concert: 'star',
  Tour: 'map',
  Athletics: 'users',
  'Fan Fest': 'sparkles',
}

export default function Events() {
  useDocumentTitle('Events | StadiumGPT')

  const [filter, setFilter] = useState('All')
  const visible = EVENTS.filter(
    (event) => filter === 'All' || event.category === filter,
  )

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Upcoming events
          </h2>
          <p className="text-sm text-slate-500">
            {visible.length} events at Central Arena
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {EVENT_FILTERS.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                filter === item
                  ? 'bg-brand-600 text-white shadow-sm'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-brand-400 hover:text-brand-700'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {visible.map((event) => (
          <article
            key={event.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            {/* Gradient banner with category glyph */}
            <div className="relative flex h-28 items-center justify-center bg-gradient-to-br from-navy-900 via-navy-800 to-brand-800">
              <div className="pitch-stripes absolute inset-0" />
              <Icon
                name={CATEGORY_ICONS[event.category] ?? 'calendar'}
                className="relative h-10 w-10 text-brand-400/80"
              />
              <span className="absolute right-3 top-3">
                <Badge variant={event.tone}>{event.status}</Badge>
              </span>
            </div>

            <div className="flex flex-1 flex-col p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">
                {event.category}
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                {event.title}
              </h3>

              <dl className="mt-3 space-y-1.5 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Icon name="calendar" className="h-4 w-4 text-slate-400" />
                  <dd>
                    {event.date} - {event.time}
                  </dd>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="location" className="h-4 w-4 text-slate-400" />
                  <dd>
                    {event.venue} - {event.gate}
                  </dd>
                </div>
              </dl>

              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <span className="text-sm font-semibold text-slate-900">
                  {event.price}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 transition group-hover:gap-1.5">
                  Details
                  <Icon name="arrowRight" className="h-4 w-4" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
