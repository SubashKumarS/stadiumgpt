import { useMemo, useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import Card from '../components/common/Card.jsx'
import Icon from '../components/common/Icon.jsx'
import MapFilters from '../components/stadium-map/MapFilters.jsx'
import MapSearch from '../components/stadium-map/MapSearch.jsx'
import StadiumMapCanvas from '../components/stadium-map/StadiumMapCanvas.jsx'
import LocationDetails from '../components/stadium-map/LocationDetails.jsx'
import RouteDirections from '../components/stadium-map/RouteDirections.jsx'
import { stadiumLocations } from '../data/stadiumLocations.js'

export default function StadiumMap() {
  useDocumentTitle('Stadium Map | StadiumGPT')

  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedLocation, setSelectedLocation] = useState(stadiumLocations[0] ?? null)
  const gateLocations = useMemo(
    () => stadiumLocations.filter((location) => location.category === 'Gates'),
    [],
  )
  const [selectedGateId, setSelectedGateId] = useState(gateLocations[0]?.id ?? '')
  const [route, setRoute] = useState(null)

  const visibleLocations = useMemo(() => {
    const query = search.trim().toLowerCase()
    return stadiumLocations.filter((location) => {
      const categoryMatches = activeCategory === 'All' || location.category === activeCategory
      const searchMatches =
        !query ||
        [
          location.name,
          location.category,
          location.section,
          location.nearbyLandmark,
          location.description,
          ...(location.facilities ?? []),
        ].some((value) => value.toLowerCase().includes(query))
      return categoryMatches && searchMatches
    })
  }, [activeCategory, search])

  const routeStart = route?.startGate ?? null
  const routeDestination = route?.destination ?? null

  const routeSteps = routeStart && routeDestination
    ? [
        `Start from ${routeStart.name}.`,
        `Follow the highlighted path toward ${routeDestination.section}.`,
        `Move along the concourse in the direction of ${routeDestination.nearbyLandmark}.`,
        `Arrive at ${routeDestination.name}.`,
      ]
    : []

  function handleGetDirections(destination) {
    const startGate = gateLocations.find((location) => location.id === selectedGateId)
    if (!startGate) return
    setRoute({ startGate, destination })
  }

  function clearRoute() {
    setRoute(null)
  }

  return (
    <div className="flex min-w-0 flex-col gap-5">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Explore Stadium</h1>
        <p className="mt-1 text-sm text-slate-500 sm:text-base">Find your way around the stadium with StadiumGPT.</p>
      </div>

      <div className="grid min-w-0 gap-5 lg:grid-cols-[minmax(0,1fr)_320px]">
        <Card className="min-w-0 p-4 sm:p-5" bodyClassName="mt-4">
          <div className="flex flex-col gap-3">
            <MapSearch value={search} onChange={setSearch} />
            <MapFilters activeCategory={activeCategory} onChange={setActiveCategory} />
          </div>

          <div className="mt-4">
            <StadiumMapCanvas
              locations={visibleLocations}
              selectedLocation={selectedLocation}
              routeStart={routeStart}
              routeDestination={routeDestination}
              onSelect={setSelectedLocation}
            />
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-500">
            <span>{visibleLocations.length} demo locations shown</span>
            <span className="flex items-center gap-1.5"><Icon name="location" className="h-3.5 w-3.5 text-brand-600" /> Demo map only, not real navigation</span>
          </div>
        </Card>

        <Card title="Location Details" className="h-fit p-4 sm:p-5" bodyClassName="mt-4">
          <div>
            <label htmlFor="start-gate" className="mb-1 block text-xs font-semibold uppercase tracking-wider text-slate-500">
              Select start gate
            </label>
            <select
              id="start-gate"
              value={selectedGateId}
              onChange={(event) => setSelectedGateId(event.target.value)}
              className="h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
            >
              {gateLocations.map((gate) => (
                <option key={gate.id} value={gate.id}>{gate.name}</option>
              ))}
            </select>
          </div>
          <LocationDetails location={selectedLocation} onGetDirections={handleGetDirections} />
          <RouteDirections startGate={routeStart} destination={routeDestination} steps={routeSteps} onClear={clearRoute} />
        </Card>
      </div>
    </div>
  )
}
