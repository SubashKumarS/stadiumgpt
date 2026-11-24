const FILTERS = ['All', 'Seating', 'Food', 'Restrooms', 'Medical', 'Gates']

export default function MapFilters({ activeCategory, onChange }) {
  return (
    <div className="scrollbar-hide flex gap-2 overflow-x-auto pb-1" aria-label="Location categories">
      {FILTERS.map((filter) => {
        const active = filter === activeCategory
        return (
          <button key={filter} type="button" onClick={() => onChange(filter)}
            className={`shrink-0 rounded-full px-3.5 py-2 text-sm font-semibold transition ${active ? 'bg-brand-600 text-white shadow-sm' : 'border border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700'}`}
            aria-pressed={active}>{filter}</button>
        )
      })}
    </div>
  )
}
