import { BrowserRouter, Routes, Route } from 'react-router-dom'

import MainLayout from './layouts/MainLayout.jsx'
import AppLayout from './components/layout/AppLayout.jsx'

import Home from './pages/Home.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Assistant from './pages/Assistant.jsx'
import StadiumMap from './pages/StadiumMap.jsx'
import Events from './pages/Events.jsx'
import Tickets from './pages/Tickets.jsx'
import Help from './pages/Help.jsx'
import NotFound from './pages/NotFound.jsx'

/**
 * Route table - the single place where URLs are mapped to pages.
 *
 * Two layout routes wrap groups of pages:
 *   - MainLayout : public site (landing page, 404)
 *   - AppLayout  : application shell (sidebar + header) for the six app pages
 *
 * To add a page: create it in src/pages, then add one <Route> inside
 * the matching layout group below (and one entry in data/navigation.js
 * if it should appear in the sidebar).
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public website */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* StadiumGPT application */}
        <Route element={<AppLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/stadium-map" element={<StadiumMap />} />
          <Route path="/events" element={<Events />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/help" element={<Help />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
