import useDocumentTitle from '../hooks/useDocumentTitle.js'
import Card from '../components/common/Card.jsx'
import Badge from '../components/common/Badge.jsx'
import Icon from '../components/common/Icon.jsx'

const MARKERS = [
  { id: 'A', label: 'Gate A', x: 15, y: 18, type: 'gate' },
  { id: 'B', label: 'Gate B', x: 85, y: 18, type: 'gate' },
  { id: 'C', label: 'Gate C', x: 15, y: 82, type: 'gate' },
  { id: 'D', label: 'Gate D', x: 85, y: 82, type: 'gate' },
  { id: 'F1', label: 'Food court', x: 50, y: 12, type: 'food' },
  { id: 'M1', label: 'Medical', x: 92, y: 50, type: 'medical' },
  { id: 'R1', label: 'Restrooms', x: 8, y: 50, type: 'restroom' },
  { id: 'L1', label: 'Lost & found', x: 50, y: 88, type: 'info' },
]

const LEGEND = [
  { type: 'gate', label: 'Entrance gates', color: 'bg-brand-500' },
  { type: 'food', label: 'Food & beverage', color: 'bg-amber-500' },
  { type: 'medical', label: 'Medical point', color: 'bg-rose-500' },
  { type: 'restroom', label: 'Restrooms', color: 'bg-violet-500' },
  { type: 'info', label: 'Guest services', color: 'bg-emerald-500' },
]

const MARKER_COLORS = {
  gate: 'bg-brand-500',
  food: 'bg-amber-500',
  medical: 'bg-rose-500',
  restroom: 'bg-violet-500',
  info: 'bg-emerald-500',
}

/**
 * Static schematic of the venue (no map provider - pure CSS/SVG).
 * Markers are positioned with percentages so the layout scales.
 */
export default function StadiumMap() {
  useDocumentTitle('Stadium Map | StadiumGPT')

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-slate-900">
            Central Arena - ground floor
          </h2>
          <p className="text-sm text-slate-500">
            Tap a marker for directions. Full navigation arrives with the maps
            integration.
          </p>
        </div>
        <Badge variant="brand">18 of 20 gates open</Badge>
      </div>

      <div className="grid gap-6 lg:grid-cols-4">
        {/* Map */}
        <Card className="lg:col-span-3" bodyClassName="mt-4">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-navy-950">
            {/* Stands */}
            <div className="absolute inset-[6%] rounded-[2rem] border-4 border-white/10 bg-navy-800" />
            <div className="absolute inset-[16%] rounded-xl border border-dashed border-white/10" />

            {/* Pitch */}
            <div className="absolute inset-x-[26%] inset-y-[30%] rounded-md bg-turf-600/90">
              <div className="absolute inset-3 rounded-sm border border-white/40" />
              <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
              <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/50" />
            </div>

            {/* Markers */}
            {MARKERS.map((marker) => (
              <button
                key={marker.id}
                type="button"
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-1 transition hover:scale-110"
                title={marker.label}
              >
                <span
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white shadow-lg ring-2 ring-navy-950 ${
                    MARKER_COLORS[marker.type]
                  }`}
                >
                  {marker.label.charAt(0)}
                </span>
              </button>
            ))}
          </div>
        </Card>

        {/* Legend */}
        <div className="flex flex-col gap-6">
          <Card title="Legend">
            <ul className="mt-4 space-y-3">
              {LEGEND.map((item) => (
                <li key={item.type} className="flex items-center gap-3">
                  <span
                    className={`h-3 w-3 shrink-0 rounded-full ${item.color}`}
                  />
                  <span className="text-sm text-slate-600">{item.label}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card title="You are here">
            <div className="mt-4 flex items-start gap-3 rounded-lg bg-brand-50 p-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white">
                <Icon name="location" className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm font-medium text-slate-800">
                  Concourse 1 - Gate A
                </p>
                <p className="text-xs text-slate-500">
                  North Stand, 40m from the food court
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
