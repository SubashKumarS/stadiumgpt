import { Link } from 'react-router-dom'

/** Header for the public website (landing page). */
export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-sm font-bold text-white">
            S
          </span>
          <span className="text-lg font-semibold tracking-tight text-slate-900">
            StadiumGPT
          </span>
        </Link>

        <nav className="hidden gap-6 text-sm font-medium text-slate-600 sm:flex">
          <Link
            className="transition hover:text-brand-600"
            to="/dashboard"
          >
            Dashboard
          </Link>
          <a className="transition hover:text-brand-600" href="/#features">
            Features
          </a>
          <a className="transition hover:text-brand-600" href="/#about">
            About
          </a>
        </nav>

        <Link
          to="/dashboard"
          className="rounded-lg bg-brand-600 px-3.5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Open app
        </Link>
      </div>
    </header>
  )
}
