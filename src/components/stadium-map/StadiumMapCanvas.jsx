import MapMarker from './MapMarker.jsx'

export default function StadiumMapCanvas({ locations, selectedLocation, routeStart, routeDestination, onSelect }) {
  const startX = routeStart ? routeStart.x * 8 : null
  const startY = routeStart ? routeStart.y * 5.2 : null
  const destinationX = routeDestination ? routeDestination.x * 8 : null
  const destinationY = routeDestination ? routeDestination.y * 5.2 : null

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900" aria-label="Fictional demo stadium map">
      <svg viewBox="0 0 800 520" className="h-full w-full" role="img" aria-label="Top-down schematic of a fictional stadium">
        <defs>
          <pattern id="stadium-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <path d="M24 0H0V24" fill="none" stroke="#94a3b8" strokeOpacity="0.07" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="800" height="520" fill="#0f172a" />
        <rect width="800" height="520" fill="url(#stadium-grid)" />

        <ellipse cx="400" cy="260" rx="330" ry="205" fill="#1e293b" stroke="#334155" strokeWidth="18" />
        <ellipse cx="400" cy="260" rx="278" ry="158" fill="#0f172a" stroke="#475569" strokeWidth="2" strokeDasharray="8 8" />

        <g fill="#334155" stroke="#64748b" strokeWidth="1">
          <rect x="123" y="75" width="554" height="46" rx="20" />
          <rect x="123" y="399" width="554" height="46" rx="20" />
          <rect x="92" y="152" width="48" height="216" rx="20" />
          <rect x="660" y="152" width="48" height="216" rx="20" />
        </g>

        <text x="400" y="62" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">NORTH STAND</text>
        <text x="400" y="475" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700">SOUTH STAND</text>
        <text x="75" y="260" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700" transform="rotate(-90 75 260)">WEST STAND</text>
        <text x="725" y="260" textAnchor="middle" fill="#94a3b8" fontSize="12" fontWeight="700" transform="rotate(90 725 260)">EAST STAND</text>

        <rect x="250" y="155" width="300" height="210" rx="18" fill="#15803d" stroke="#dcfce7" strokeWidth="3" />
        <rect x="270" y="175" width="260" height="170" rx="8" fill="none" stroke="#bbf7d0" strokeOpacity="0.8" />
        <line x1="400" y1="175" x2="400" y2="345" stroke="#bbf7d0" strokeOpacity="0.8" />
        <circle cx="400" cy="260" r="44" fill="none" stroke="#bbf7d0" strokeOpacity="0.8" />
        <rect x="270" y="220" width="42" height="80" fill="none" stroke="#bbf7d0" strokeOpacity="0.8" />
        <rect x="488" y="220" width="42" height="80" fill="none" stroke="#bbf7d0" strokeOpacity="0.8" />

        {routeStart && routeDestination && (
          <g>
            <polyline
              points={`${startX},${startY} ${startX},${destinationY} ${destinationX},${destinationY}`}
              fill="none"
              stroke="#60a5fa"
              strokeWidth="7"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="14 10"
              className="animate-pulse"
            />
            <circle cx={startX} cy={startY} r="9" fill="#fff" stroke="#2563eb" strokeWidth="5" />
            <text x={startX + 13} y={startY - 12} fill="#bfdbfe" fontSize="11" fontWeight="700">START</text>
          </g>
        )}

        {locations.map((location) => (
          <MapMarker
            key={location.id}
            location={location}
            selected={selectedLocation?.id === location.id}
            routeDestination={routeDestination?.id === location.id}
            onSelect={onSelect}
          />
        ))}

        <g fill="#cbd5e1">
          <rect x="388" y="8" width="24" height="36" rx="5" /><rect x="388" y="476" width="24" height="36" rx="5" />
          <text x="400" y="34" textAnchor="middle" fill="#0f172a" fontSize="9" fontWeight="900">N</text>
        </g>
      </svg>
      <div className="absolute bottom-3 left-3 rounded-md bg-navy-950/90 px-2.5 py-1.5 text-[10px] font-semibold text-slate-300 ring-1 ring-white/10">
        DEMO REPRESENTATION · Not a real stadium floor plan
      </div>
    </div>
  )
}
