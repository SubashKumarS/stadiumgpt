/**
 * Central navigation manifest.
 *
 * Drives the Sidebar links, the Header page titles and the document
 * title. Adding a route = adding one entry here + one <Route> in App.jsx.
 */
export const NAV_ITEMS = [
  { path: '/dashboard', label: 'Dashboard', icon: 'grid', title: 'Dashboard' },
  {
    path: '/assistant',
    label: 'AI Assistant',
    icon: 'sparkles',
    title: 'AI Assistant',
  },
  {
    path: '/stadium-map',
    label: 'Stadium Map',
    icon: 'map',
    title: 'Stadium Map',
  },
  { path: '/events', label: 'Events', icon: 'calendar', title: 'Events' },
  { path: '/tickets', label: 'Tickets', icon: 'ticket', title: 'Tickets' },
  { path: '/help', label: 'Help', icon: 'help', title: 'Help & Support' },
]

/**
 * Resolves the current pathname to its navigation entry so the Header
 * can display the right title. Returns null for unknown paths.
 */
export function findNavItem(pathname) {
  return NAV_ITEMS.find((item) => item.path === pathname) ?? null
}
