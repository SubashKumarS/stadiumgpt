/** Mock KPIs for the dashboard. Replace with API data later. */
export const STATS = [
  {
    label: 'Fans in venue',
    value: '48,210',
    trend: '+4.2%',
    icon: 'users',
    tone: 'brand',
  },
  {
    label: 'Open assistance queries',
    value: '126',
    icon: 'message',
    tone: 'amber',
  },
  {
    label: 'Gates operational',
    value: '18 / 20',
    icon: 'shield',
    tone: 'emerald',
  },
  {
    label: 'Avg. response time',
    value: '1.4s',
    icon: 'clock',
    tone: 'violet',
  },
]

/** Short-cuts shown as chips on the dashboard. */
export const QUICK_ACTIONS = [
  { label: 'Ask the AI Assistant', to: '/assistant', icon: 'sparkles' },
  { label: 'Open stadium map', to: '/stadium-map', icon: 'map' },
  { label: 'Browse events', to: '/events', icon: 'calendar' },
  { label: 'Manage tickets', to: '/tickets', icon: 'ticket' },
]

/** Mock activity feed. */
export const ACTIVITY = [
  {
    id: 1,
    title: 'Gate C queue is above threshold',
    detail: '8 min average wait - staff redeployed from Gate B',
    time: '2 min ago',
    tone: 'warning',
  },
  {
    id: 2,
    title: 'Section 114 reported a medical assist',
    detail: 'Response team on site, no disruption to play',
    time: '11 min ago',
    tone: 'danger',
  },
  {
    id: 3,
    title: 'Lost & found item claimed',
    detail: 'Blue jacket returned at the concierge desk',
    time: '26 min ago',
    tone: 'success',
  },
  {
    id: 4,
    title: 'Tonight\u2019s fixture confirmed',
    detail: 'Metro United vs. Riverside FC - kickoff 19:45',
    time: '1 hr ago',
    tone: 'brand',
  },
]

/** Occupancy per stand, used by the dashboard bar chart. */
export const OCCUPANCY = [
  { stand: 'North Stand', percent: 96 },
  { stand: 'South Stand', percent: 88 },
  { stand: 'East Stand', percent: 74 },
  { stand: 'West Stand', percent: 61 },
]
