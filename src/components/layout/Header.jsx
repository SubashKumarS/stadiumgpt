import { useLocation } from 'react-router-dom'
import Icon from '../common/Icon.jsx'
import { findNavItem } from '../../data/navigation.js'

/**
 * Application header.
 *
 * The page title is derived from the current URL using the navigation
 * manifest, so it always matches the sidebar selection automatically.
 *
 * Props:
 *  - onMenuClick: opens the mobile sidebar drawer (wired by AppLayout)
 */
export default function Header({ onMenuClick }) {
  const { pathname } = useLocation()
  const activeItem = findNavItem(pathname)
  const title = activeItem?.title ?? 'StadiumGPT'

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/85 backdrop-blur-md">
      <div className="flex h-16 items-center gap-3 px-4 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        <button
          type="button"
          onClick={onMenuClick}
          className="-ml-1 rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 lg:hidden"
          aria-label="Open navigation"
        >
          <Icon name="menu" className="h-5 w-5" />
        </button>

        {/* Page title */}
        <div className="min-w-0">
          <p className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-600 sm:block">
            StadiumGPT
          </p>
          <h1 className="truncate text-lg font-semibold tracking-tight text-slate-900">
            {title}
          </h1>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          {/* Search */}
          <div className="relative hidden md:block">
            <Icon
              name="search"
              className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            />
            <input
              type="search"
              placeholder="Search events, gates, tickets..."
              className="w-64 rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-4 text-sm text-slate-700 placeholder:text-slate-400 transition outline-none focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/20 lg:w-72"
            />
          </div>
          <button
            type="button"
            className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 md:hidden"
            aria-label="Search"
          >
            <Icon name="search" className="h-5 w-5" />
          </button>

          {/* Notifications */}
          <button
            type="button"
            className="relative rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-800"
            aria-label="Notifications"
          >
            <Icon name="bell" className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-rose-500 ring-2 ring-white" />
          </button>

          {/* Profile */}
          <button
            type="button"
            className="flex items-center gap-2 rounded-full py-1 pl-1 pr-1 transition hover:bg-slate-100 sm:pr-3"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-xs font-semibold text-white">
              FG
            </span>
            <span className="hidden text-left leading-tight sm:block">
              <span className="block text-sm font-medium text-slate-800">
                Guest Fan
              </span>
              <span className="block text-[11px] text-slate-400">No account</span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
