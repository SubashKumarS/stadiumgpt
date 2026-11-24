import Icon from '../common/Icon.jsx'

export default function MapSearch({ value, onChange }) {
  return (
    <label className="relative block">
      <span className="sr-only">Search stadium locations</span>
      <Icon name="search" className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search Gate A, North Stand, Food Court..."
        className="h-11 w-full rounded-xl border border-slate-200 bg-white pl-10 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100"
      />
    </label>
  )
}
