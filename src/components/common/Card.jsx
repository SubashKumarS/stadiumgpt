/**
 * Reusable card used to present a feature or piece of information.
 * Purely presentational - no data fetching or business logic.
 *
 * The same component serves the public landing page and the app
 * dashboard, which keeps both surfaces visually consistent.
 */
export default function Card({
  title,
  description,
  children,
  className = '',
  bodyClassName = '',
}) {
  return (
    <div
      className={`rounded-xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition hover:shadow-md ${className}`}
    >
      {title && (
        <h3 className="mb-2 text-base font-semibold text-slate-900">{title}</h3>
      )}
      {description && (
        <p className="text-sm leading-relaxed text-slate-600">{description}</p>
      )}
      {children && <div className={bodyClassName}>{children}</div>}
    </div>
  )
}
