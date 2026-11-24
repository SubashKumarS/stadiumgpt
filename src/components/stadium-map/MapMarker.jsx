import Icon from '../common/Icon.jsx'

const CATEGORY_STYLES = {
  Gates: 'bg-brand-600 text-white',
  Seating: 'bg-sky-500 text-white',
  Food: 'bg-amber-500 text-white',
  Restrooms: 'bg-violet-500 text-white',
  Medical: 'bg-rose-500 text-white',
}

const CATEGORY_ICONS = {
  Gates: 'gate', Seating: 'seat', Food: 'food', Restrooms: 'restroom',
  Medical: 'firstAid',
}

export default function MapMarker({ location, selected, routeDestination, onSelect }) {
  const highlighted = selected || routeDestination
  return (
    <g
      role="button"
      tabIndex="0"
      aria-label={`Select ${location.name}`}
      onClick={() => onSelect(location)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          onSelect(location)
        }
      }}
      className="cursor-pointer outline-none"
      transform={`translate(${location.x * 8} ${location.y * 5.2})`}
    >
      {highlighted && <circle r="22" fill="#2563eb" fillOpacity="0.16" className="animate-pulse" />}
      <circle r="15" fill="white" stroke={routeDestination ? '#2563eb' : '#cbd5e1'} strokeWidth={routeDestination ? 4 : 2} />
      <foreignObject x="-11" y="-11" width="22" height="22">
        <div xmlns="http://www.w3.org/1999/xhtml" className={`flex h-[22px] w-[22px] items-center justify-center rounded-full ${CATEGORY_STYLES[location.category] || 'bg-slate-700 text-white'}`}>
          <Icon name={CATEGORY_ICONS[location.category] || 'location'} className="h-3.5 w-3.5" />
        </div>
      </foreignObject>
      <text y="28" textAnchor="middle" className="fill-slate-800 text-[10px] font-bold" style={{ paintOrder: 'stroke', stroke: '#f8fafc', strokeWidth: 4 }}>
        {location.name}
      </text>
    </g>
  )
}
