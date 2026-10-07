import useDocumentTitle from '../hooks/useDocumentTitle.js'
import Badge from '../components/common/Badge.jsx'
import Icon from '../components/common/Icon.jsx'
import { TICKETS, TICKET_SUMMARY } from '../data/tickets.js'

export default function Tickets() {
  useDocumentTitle('Tickets | StadiumGPT')

  return (
    <div className="flex flex-col gap-6">
      {/* Summary */}
      <div className="grid gap-4 sm:grid-cols-3">
        {TICKET_SUMMARY.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
              <Icon name="ticket" className="h-5 w-5" />
            </span>
            <div>
              <p className="text-2xl font-semibold tracking-tight text-slate-900">
                {item.value}
              </p>
              <p className="text-sm text-slate-500">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Ticket list */}
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
          <h2 className="text-base font-semibold text-slate-900">
            Your tickets
          </h2>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg bg-brand-600 px-3 py-2 text-sm font-medium text-white transition hover:bg-brand-700"
          >
            <Icon name="plus" className="h-4 w-4" />
            Add ticket
          </button>
        </div>

        <ul className="divide-y divide-slate-100">
          {TICKETS.map((ticket) => (
            <li
              key={ticket.id}
              className="flex flex-col gap-4 px-5 py-5 transition hover:bg-slate-50 sm:flex-row sm:items-center sm:px-6"
            >
              {/* Ticket stub */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-dashed border-brand-300 bg-brand-50 text-brand-600">
                <Icon name="ticket" className="h-6 w-6" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-medium text-slate-900">{ticket.event}</p>
                  <Badge variant={ticket.tone}>{ticket.status}</Badge>
                </div>
                <p className="mt-0.5 text-sm text-slate-500">{ticket.date}</p>
                <p className="mt-0.5 text-sm text-slate-400">
                  {ticket.section} - {ticket.seat}
                </p>
              </div>

              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-700">
                    {ticket.type}
                  </p>
                  <p className="font-mono text-xs text-slate-400">
                    {ticket.id}
                  </p>
                </div>
                <button
                  type="button"
                  className="rounded-lg border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-600 transition hover:border-brand-400 hover:text-brand-700"
                >
                  View pass
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
