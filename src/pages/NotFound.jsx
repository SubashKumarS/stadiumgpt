import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import Icon from '../components/common/Icon.jsx'

export default function NotFound() {
  useDocumentTitle('Page not found | StadiumGPT')

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
        <Icon name="map" className="h-7 w-7" />
      </span>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900">
        404 - Wrong turn
      </h1>
      <p className="mt-2 max-w-md text-sm text-slate-500">
        This route does not exist. Let&rsquo;s get you back to the stadium.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link
          to="/dashboard"
          className="rounded-lg bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Go to dashboard
        </Link>
        <Link
          to="/"
          className="rounded-lg border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-600 transition hover:border-brand-400 hover:text-brand-700"
        >
          Back to home
        </Link>
      </div>
    </div>
  )
}
