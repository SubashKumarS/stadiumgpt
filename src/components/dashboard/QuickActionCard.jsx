import { Link } from 'react-router-dom'
import Icon from '../common/Icon.jsx'

/**
 * Single clickable dashboard shortcut: icon, title, description.
 * Navigates to an existing application route (`to`).
 */
export default function QuickActionCard({ title, description, icon, to }) {
  return (
    <Link
      to={to}
      className="group flex min-w-0 items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm shadow-slate-200/50 transition hover:-translate-y-0.5 hover:border-brand-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition group-hover:bg-brand-600 group-hover:text-white">
        <Icon name={icon} className="h-5 w-5" />
      </span>

      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-2">
          <span className="text-sm font-semibold text-slate-900">{title}</span>
          <Icon
            name="chevronRight"
            className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-brand-600"
          />
        </span>
        <span className="mt-1 block text-sm leading-relaxed text-slate-500">
          {description}
        </span>
      </span>
    </Link>
  )
}
