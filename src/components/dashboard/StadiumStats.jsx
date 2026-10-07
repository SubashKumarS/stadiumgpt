import StatCard from '../common/StatCard.jsx'

/**
 * Compact stadium information section: facility counts rendered as small
 * stat tiles. Values are mock numbers from src/data/dashboardData.js.
 */
export default function StadiumStats({ stats, className = '' }) {
  return (
    <section
      className={`min-w-0 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 ${className}`}
    >
      <h2 className="text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
        Stadium information
      </h2>
      <p className="text-sm text-slate-500">
        Key facilities at a glance - demo values for this preview.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            tone={stat.tone}
          />
        ))}
      </div>
    </section>
  )
}
