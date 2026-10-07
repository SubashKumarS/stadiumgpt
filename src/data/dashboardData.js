/**
 * Mock data for the StadiumGPT dashboard (Step 3).
 *
 * Everything in this file is DEMO/STATIC content: the venue and the
 * fixture below are fictional and must not be presented as real.
 *
 * Keeping data out of the components means a real backend can be plugged
 * in later by replacing these exports with API responses - the component
 * props and markup stay exactly the same.
 */

/** Demo fixture shared by the stadium card and the upcoming-event card. */
const DEMO_EVENT = {
  name: 'India vs Australia',
  status: "Today's Event",
  statusTone: 'warning',
  date: 'Wednesday, 7 October 2026',
  time: '7:30 PM IST',
  /** 24-hour form used by the sidebar status card. */
  time24: '19:30',
}

/** Selected stadium shown on the prominent hero card. */
export const SELECTED_STADIUM = {
  name: 'Coimbatore Arena',
  city: 'Coimbatore, Tamil Nadu',
  capacity: '42,000',
  event: DEMO_EVENT,
  demoNote:
    'Demo venue and fixture - sample data for this preview, not a real stadium or match.',
}

/** Upcoming event card. Derived from the demo fixture so the two never drift apart. */
export const UPCOMING_EVENT = {
  ...DEMO_EVENT,
  stadium: SELECTED_STADIUM.name,
}

/**
 * Short match-day status shown in the sidebar footer card.
 * Derived from the same demo stadium + fixture, so the sidebar and the
 * dashboard can never display two different events.
 */
export const MATCH_DAY_STATUS = {
  label: 'Match day · demo',
  sentence: `${SELECTED_STADIUM.name} is hosting ${DEMO_EVENT.name} today at ${DEMO_EVENT.time24}.`,
}

/**
 * Four reusable dashboard shortcuts.
 * `to` is an existing application route; two actions may share a route.
 */
export const QUICK_ACTIONS = [
  {
    id: 'ask',
    title: 'Ask StadiumGPT',
    description: 'Chat with your AI match-day assistant for instant answers.',
    icon: 'sparkles',
    to: '/assistant',
  },
  {
    id: 'seat',
    title: 'Find My Seat',
    description: 'Locate your section, row and the fastest route to it.',
    icon: 'seat',
    to: '/stadium-map',
  },
  {
    id: 'map',
    title: 'Stadium Map',
    description: 'Explore gates, concourses and facilities on the interactive map.',
    icon: 'map',
    to: '/stadium-map',
  },
  {
    id: 'events',
    title: 'Event Information',
    description: 'Schedules, timings and match-day updates in one place.',
    icon: 'calendar',
    to: '/events',
  },
]

/** Compact facility counts for the stadium information section (mock values). */
export const STADIUM_STATS = [
  { id: 'gates', label: 'Gates', value: '8', icon: 'gate', tone: 'brand' },
  { id: 'sections', label: 'Seating sections', value: '24', icon: 'seat', tone: 'violet' },
  { id: 'food', label: 'Food areas', value: '12', icon: 'food', tone: 'amber' },
  { id: 'restrooms', label: 'Restrooms', value: '18', icon: 'restroom', tone: 'emerald' },
  { id: 'parking', label: 'Parking areas', value: '4', icon: 'parking', tone: 'sky' },
  { id: 'firstAid', label: 'First aid points', value: '3', icon: 'firstAid', tone: 'rose' },
]

/** Recent activity feed - sample history for the signed-out demo user. */
export const RECENT_ACTIVITIES = [
  {
    id: 1,
    title: 'Viewed Stadium Map',
    detail: 'Opened the interactive map near Gate A',
    time: '4 min ago',
    icon: 'map',
    tone: 'brand',
  },
  {
    id: 2,
    title: 'Asked StadiumGPT about Gate A',
    detail: '"Which gate do I use for Block C?"',
    time: '26 min ago',
    icon: 'message',
    tone: 'violet',
  },
  {
    id: 3,
    title: 'Checked event information',
    detail: 'Timings and gates for India vs Australia',
    time: '1 hr ago',
    icon: 'calendar',
    tone: 'sky',
  },
  {
    id: 4,
    title: 'Viewed ticket information',
    detail: 'East Stand, Section 12 seat details',
    time: '3 hrs ago',
    icon: 'ticket',
    tone: 'success',
  },
]
