import { NavLink } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { NAV_ITEMS } from '../../data/navigation.js'
import { MATCH_DAY_STATUS } from '../../data/dashboardData.js'

/**
 * Application sidebar.
 *
 * - Desktop (lg+): fixed dark rail on the left, content offset by pl-72.
 * - Mobile: off-canvas drawer controlled by AppLayout via `open`/`onClose`.
 * - Active state comes from react-router's <NavLink>, which adds
 *   `active` styling through the className callback below.
 */
export default function Sidebar({ open, onClose }) {
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-navy-950/60 backdrop-blur-sm lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col overflow-hidden bg-navy-950 text-white transition-transform duration-200 ease-out lg:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand + floodlight glow */}
        <div className="glow-brand relative flex items-center gap-3 px-5 py-6">
          <NavLink to="/" className="flex items-center gap-3" onClick={onClose}>
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 shadow-lg shadow-brand-600/40">
              <Icon name="stadium" className="h-5 w-5 text-white" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-semibold tracking-tight">
                StadiumGPT
              </span>
              <span className="block text-[11px] font-medium uppercase tracking-[0.18em] text-brand-400">
                Stadium Intelligence
              </span>
            </span>
          </NavLink>

          <button
            type="button"
            onClick={onClose}
            className="ml-auto rounded-lg p-1.5 text-slate-400 transition hover:bg-white/10 hover:text-white lg:hidden"
            aria-label="Close navigation"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
            Application
          </p>
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group relative flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                      isActive
                        ? 'bg-brand-600/15 text-white'
                        : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-brand-400 transition ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                      <Icon
                        name={item.icon}
                        className={`h-5 w-5 shrink-0 ${
                          isActive ? 'text-brand-400' : 'text-slate-500'
                        }`}
                      />
                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer card */}
        <div className="p-3">
          <div className="pitch-stripes rounded-xl border border-white/10 bg-navy-800/70 p-4">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {MATCH_DAY_STATUS.label}
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
              {MATCH_DAY_STATUS.sentence}
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}
