import Icon from '../common/Icon.jsx'

/**
 * Emergency assistance card - a UI placeholder only.
 *
 * It deliberately performs no action: no calls, no numbers and no real
 * emergency services are wired up in this step.
 */
export default function EmergencyCard({ className = '' }) {
  return (
    <section
      className={`relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 via-white to-white p-6 shadow-sm shadow-slate-200/50 ${className}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-100 text-rose-600 ring-1 ring-inset ring-rose-200">
        <Icon name="phone" className="h-5 w-5" />
      </span>

      <h2 className="mt-4 text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
        Need urgent assistance?
      </h2>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">
        Contact stadium emergency support.
      </p>

      <div className="mt-auto pt-5">
        <button
          type="button"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-rose-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-600"
        >
          <Icon name="phone" className="h-4 w-4" />
          Contact emergency support
        </button>
        <p className="mt-2 text-center text-xs text-slate-400">
          Demo UI only - no call or emergency service is triggered.
        </p>
      </div>
    </section>
  )
}
