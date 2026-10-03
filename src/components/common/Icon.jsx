/**
 * Single source of truth for every icon used in the application.
 * Inline SVGs keep the bundle small (no icon library dependency) and
 * make icons themeable with Tailwind text-size/color utilities.
 *
 * Usage: <Icon name="sparkles" className="h-5 w-5" />
 */
const ICONS = {
  grid: (
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </>
  ),
  sparkles: (
    <>
      <path d="M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3z" />
      <path d="M18.5 15.5l.9 2.1 2.1.9-2.1.9-.9 2.1-.9-2.1-2.1-.9 2.1-.9.9-2.1z" />
    </>
  ),
  map: (
    <>
      <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4z" />
      <path d="M9 4v13M15 6.5v13" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  ticket: (
    <>
      <path d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.5a2.5 2.5 0 0 0 0 5V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.5a2.5 2.5 0 0 0 0-5V8z" />
      <path d="M13.5 6.5v11" strokeDasharray="2 2.5" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.6 9.4a2.5 2.5 0 1 1 3.4 2.3c-.7.3-1 .9-1 1.6v.3" />
      <path d="M12 17.2h.01" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m20 20-3.6-3.6" />
    </>
  ),
  bell: (
    <>
      <path d="M18 9a6 6 0 1 0-12 0c0 5-2 6.5-2 6.5h16S18 14 18 9z" />
      <path d="M13.7 19a2 2 0 0 1-3.4 0" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  arrowRight: <path d="M4 12h15m-6-6 6 6-6 6" />,
  chevronRight: <path d="m9 5 7 7-7 7" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5" />
      <path d="M16 5.2a3.5 3.5 0 0 1 0 5.6M17.5 14.8c2 .9 3.5 2.7 3.5 5.2" />
    </>
  ),
  message: <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  shield: <path d="M12 3.5 5 6v6c0 4.3 3 7.4 7 8.5 4-1.1 7-4.2 7-8.5V6l-7-2.5z" />,
  location: (
    <>
      <path d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  send: <path d="M4.5 12 20 4.5 15 20l-4-6-6.5-2z" />,
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  plus: <path d="M12 5v14M5 12h14" />,
  mail: (
    <>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4 7.5 8 5.5 8-5.5" />
    </>
  ),
  phone: (
    <path d="M6 3.5h3l1.5 4-2 1.5a12 12 0 0 0 6 6l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 5.7 2 2 0 0 1 6 3.5z" />
  ),
  seat: (
    <>
      <path d="M6 10V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4" />
      <path d="M4 10h16v6H4z" />
      <path d="M6 16v3M18 16v3" />
    </>
  ),
  star: (
    <path d="m12 4 2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 9.7l5.4-.8L12 4z" />
  ),
  info: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5M12 8h.01" />
    </>
  ),
  filter: <path d="M4 6h16l-6 7v5l-4 2v-7L4 6z" />,
  /* Stadium seen from above: outer bowl, inner pitch, halfway line */
  stadium: (
    <>
      <ellipse cx="12" cy="12" rx="9" ry="6.5" />
      <ellipse cx="12" cy="12" rx="5" ry="3.4" />
      <path d="M12 8.6v6.8" />
    </>
  ),
}

export default function Icon({ name, className = 'h-5 w-5' }) {
  const glyph = ICONS[name]
  if (!glyph) return null

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  )
}
