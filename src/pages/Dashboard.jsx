import useDocumentTitle from '../hooks/useDocumentTitle.js'
import WelcomeSection from '../components/dashboard/WelcomeSection.jsx'
import StadiumCard from '../components/dashboard/StadiumCard.jsx'
import QuickActions from '../components/dashboard/QuickActions.jsx'
import UpcomingEvent from '../components/dashboard/UpcomingEvent.jsx'
import StadiumStats from '../components/dashboard/StadiumStats.jsx'
import RecentActivity from '../components/dashboard/RecentActivity.jsx'
import EmergencyCard from '../components/dashboard/EmergencyCard.jsx'
import {
  SELECTED_STADIUM,
  UPCOMING_EVENT,
  QUICK_ACTIONS,
  STADIUM_STATS,
  RECENT_ACTIVITIES,
} from '../data/dashboardData.js'

/**
 * Dashboard - the StadiumGPT match-day control centre.
 *
 * This page only composes presentational components; every value comes
 * from src/data/dashboardData.js (mock data for now). Layout:
 *
 *   Welcome
 *   [ Stadium card (2 cols) | Emergency card (1 col) ]
 *   Quick actions (4 cards)
 *   [ Upcoming event | Stadium information ]
 *   Recent activity
 *
 * All grids stack to a single column on mobile.
 */
export default function Dashboard() {
  useDocumentTitle('Dashboard | StadiumGPT')

  return (
    <div className="flex min-w-0 flex-col gap-6">
      <WelcomeSection />

      <div className="grid min-w-0 gap-6 lg:grid-cols-3">
        <StadiumCard stadium={SELECTED_STADIUM} className="lg:col-span-2" />
        <EmergencyCard />
      </div>

      <QuickActions actions={QUICK_ACTIONS} />

      <div className="grid min-w-0 gap-6 lg:grid-cols-5">
        <UpcomingEvent event={UPCOMING_EVENT} className="lg:col-span-2" />
        <StadiumStats stats={STADIUM_STATS} className="lg:col-span-3" />
      </div>

      <RecentActivity activities={RECENT_ACTIVITIES} />
    </div>
  )
}
