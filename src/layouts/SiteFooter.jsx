/** Footer for the public website (landing page). */
export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} StadiumGPT. Built to improve the
          stadium experience.
        </p>
        <p className="text-slate-400">MIT Licensed</p>
      </div>
    </footer>
  )
}
