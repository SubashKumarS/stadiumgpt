import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader.jsx'
import SiteFooter from './SiteFooter.jsx'

/**
 * MainLayout is the route layout for the public website.
 * Pages (Home, NotFound) render into <Outlet />, exactly like the
 * application's AppLayout - so both surfaces follow the same pattern.
 */
export default function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-8 sm:px-6">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
