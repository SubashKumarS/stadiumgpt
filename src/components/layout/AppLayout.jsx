import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar.jsx'
import Header from './Header.jsx'

/**
 * AppLayout is the route layout for every application page.
 *
 * Structure:
 *   Sidebar (fixed / drawer)  +  [ Header, <page content from Outlet /> ]
 *
 * Pages rendered through this layout contain NO header/sidebar code -
 * they only render their own content into the <Outlet />. That is what
 * makes adding a new page a two-line change in App.jsx.
 *
 * Mobile state (drawer open/closed) lives here because both the Header
 * (menu button) and the Sidebar (backdrop/close button) need it.
 */
export default function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="lg:pl-72">
        <Header onMenuClick={() => setSidebarOpen(true)} />

        <main
          key={pathname}
          className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
        >
          <Outlet />
        </main>
      </div>
    </div>
  )
}
