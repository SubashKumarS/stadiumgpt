import { Link } from 'react-router-dom'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import StatCard from '../components/common/StatCard.jsx'
import Card from '../components/common/Card.jsx'
import Badge from '../components/common/Badge.jsx'
import Icon from '../components/common/Icon.jsx'
import {
  STATS,
  QUICK_ACTIONS,
  ACTIVITY,
  OCCUPANCY,
} from '../data/dashboard.js'

const ACTIVITY_TONES = {
  brand: 'bg-brand-50 text-brand-600',
  success: 'bg-emerald-50 text-emerald-600',
  warning: 'bg-amber-50 text-amber-600',
  danger: 'bg-rose-50 text-rose-600',
}

export default function Dashboard() {
  useDocumentTitle('Dashboard | StadiumGPT')

  return (
    <div className="flex flex-col gap-6">
      {/* Match-day hero */}
      <section className="glow-brand pitch-stripes relative overflow-hidden rounded-2xl bg-navy-950 px-6 py-8 text-white sm:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Badge variant="warning">Match day - kickoff 19:45</Badge>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Welcome to Central Arena
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              Everything for today&rsquo;s fixture in one place: gate queues,
              seat guidance, facilities and live support.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {QUICK_ACTIONS.map((action) => (
              <Link
                key={action.to}
                to={action.to}
                className="group inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3.5 py-2 text-sm font-medium text-slate-100 transition hover:border-brand-400/60 hover:bg-brand-600/30"
              >
                <Icon name={action.icon} className="h-4 w-4 text-brand-400" />
                {action.label}
                <Icon
                  name="chevronRight"
                  className="h-4 w-4 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-white"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* KPIs */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      {/* Occupancy + activity */}
      <section className="grid gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-3" title="Stand occupancy">
          <p className="mb-5 text-sm text-slate-500">
            Live capacity per stand, updated every 5 minutes.
          </p>
          <ul className="space-y-4">
            {OCCUPANCY.map((row) => (
              <li key={row.stand}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700">{row.stand}</span>
                  <span className="text-slate-500">{row.percent}%</span>
                </div>
                <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-brand-500 to-brand-700"
                    style={{ width: `${row.percent}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="lg:col-span-2" title="Activity feed">
          <p className="mb-4 text-sm text-slate-500">
            Operations updates from the last hour.
          </p>
          <ul className="space-y-4">
            {ACTIVITY.map((item) => (
              <li key={item.id} className="flex gap-3">
                <span
                  className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                    ACTIVITY_TONES[item.tone] ?? ACTIVITY_TONES.brand
                  }`}
                >
                  <Icon name="info" className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-slate-800">
                    {item.title}
                  </p>
                  <p className="text-sm text-slate-500">{item.detail}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </section>
    </div>
  )
}
