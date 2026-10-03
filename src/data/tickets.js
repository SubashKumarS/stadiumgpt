/** Mock tickets for the Tickets page. */
export const TICKETS = [
  {
    id: 'TCK-9042',
    event: 'Metro United vs. Riverside FC',
    date: 'Sat, 3 Oct 2026 - 19:45',
    section: 'North Stand',
    seat: 'Block N12, Row F, Seat 24',
    type: 'Season Pass',
    status: 'Confirmed',
    tone: 'success',
  },
  {
    id: 'TCK-9110',
    event: 'Harmony Nights Concert',
    date: 'Fri, 9 Oct 2026 - 20:00',
    section: 'East Stand',
    seat: 'Block E04, Row A, Seat 07',
    type: 'General Admission',
    status: 'Confirmed',
    tone: 'success',
  },
  {
    id: 'TCK-9187',
    event: 'Stadium Tour: Behind the Scenes',
    date: 'Sun, 4 Oct 2026 - 10:00',
    section: 'Pitchside',
    seat: 'Tour group 3',
    type: 'Tour Pass',
    status: 'Pending',
    tone: 'warning',
  },
  {
    id: 'TCK-8875',
    event: 'Riverside FC vs. Harborside City',
    date: 'Sat, 26 Sep 2026 - 17:30',
    section: 'South Stand',
    seat: 'Block S09, Row H, Seat 11',
    type: 'Single Match',
    status: 'Used',
    tone: 'neutral',
  },
]

export const TICKET_SUMMARY = [
  { label: 'Active tickets', value: '3' },
  { label: 'Upcoming events', value: '3' },
  { label: 'Saved seats', value: '2' },
]
