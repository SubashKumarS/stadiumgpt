/**
 * Dashboard greeting.
 *
 * Intentionally name-free: this step has no user accounts, so the copy
 * addresses the visitor instead of a fabricated person.
 */
export default function WelcomeSection() {
  return (
    <section className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-600">
        Match-day control centre
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        Good morning 👋
      </h2>
      <p className="mt-1 text-base font-medium text-slate-700 sm:text-lg">
        Your StadiumGPT match-day assistant
      </p>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-500 sm:text-base">
        Everything you need to navigate the stadium, follow events, and get
        assistance.
      </p>
    </section>
  )
}
