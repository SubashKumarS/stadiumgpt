import QuickActionCard from './QuickActionCard.jsx'

/**
 * Grid of reusable quick-action cards.
 * The grid collapses to a single column on small screens, two columns on
 * tablets and four columns on wide screens - no horizontal scrolling.
 */
export default function QuickActions({ actions, className = '' }) {
  return (
    <section className={`min-w-0 ${className}`}>
      <div className="mb-4">
        <h2 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
          Quick actions
        </h2>
        <p className="text-sm text-slate-500">
          Jump straight into the tools you use on match day.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => (
          <QuickActionCard
            key={action.id}
            title={action.title}
            description={action.description}
            icon={action.icon}
            to={action.to}
          />
        ))}
      </div>
    </section>
  )
}
