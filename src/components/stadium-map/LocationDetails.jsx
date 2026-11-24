import Icon from '../common/Icon.jsx'

export default function LocationDetails({ location, onGetDirections }) {
  if (!location) {
    return (
      <div className="flex min-h-52 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 p-6 text-center">
        <div>
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-brand-50 text-brand-600"><Icon name="location" /></span>
          <p className="mt-3 text-sm font-semibold text-slate-700">Select a location</p>
          <p className="mt-1 text-xs text-slate-500">Choose a marker to view demo details.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-slate-200 p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-700"><Icon name="location" /></span>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-brand-600">{location.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-900">{location.name}</h3>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-slate-600">{location.description}</p>
      <dl className="mt-4 space-y-3 rounded-lg bg-slate-50 p-3 text-sm">
        <div className="flex justify-between gap-3"><dt className="text-slate-500">Section</dt><dd className="font-medium text-slate-800">{location.section}</dd></div>
        <div className="flex justify-between gap-3"><dt className="text-slate-500">Nearby</dt><dd className="text-right font-medium text-slate-800">{location.nearbyLandmark}</dd></div>
        <div className="flex justify-between gap-3"><dt className="text-slate-500">Demo coordinates</dt><dd className="font-medium text-slate-800">({location.x}, {location.y})</dd></div>
      </dl>
      {Array.isArray(location.facilities) && location.facilities.length > 0 && (
        <div className="mt-4">
          <p className="text-xs font-bold uppercase tracking-wider text-slate-500">Available facilities</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {location.facilities.map((facility) => (
              <li key={facility} className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                {facility}
              </li>
            ))}
          </ul>
        </div>
      )}
      <button type="button" onClick={() => onGetDirections(location)} className="mt-4 flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-brand-600 text-sm font-semibold text-white transition hover:bg-brand-700 focus:outline-none focus:ring-4 focus:ring-brand-100">
        <Icon name="arrowRight" className="h-4 w-4" /> Get Directions
      </button>
    </div>
  )
}
