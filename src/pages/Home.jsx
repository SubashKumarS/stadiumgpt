import { Link } from 'react-router-dom'
import Card from '../components/common/Card.jsx'
import { APP_NAME, HIGHLIGHTS } from '../data/content.js'

/**
 * Landing page. Static for now - AI features and dynamic data will be
 * added later without changing this component's structure.
 */
export default function Home() {
  return (
    <div className="flex flex-col gap-12">
      <section className="rounded-2xl bg-gradient-to-br from-brand-600 to-brand-700 px-6 py-16 text-center text-white sm:px-10">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-brand-50">
          {APP_NAME}
        </p>
        <h1 className="mx-auto max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">
          A smarter stadium experience for everyone
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-50 sm:text-lg">
          StadiumGPT helps fans, organizers, volunteers, and venue staff get
          answers, find their way, and enjoy the event with less friction.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/dashboard"
            className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 transition hover:bg-brand-50"
          >
            Explore features
          </Link>
          <a
            href="#about"
            className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            About the project
          </a>
        </div>
      </section>

      <section id="features">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight text-slate-900">
          What StadiumGPT will do
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>

      <section id="about">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-slate-900">
          About this project
        </h2>
        <Card>
          <p className="text-sm leading-relaxed text-slate-600">
            StadiumGPT is an open-source, AI-powered platform aimed at
            improving stadium operations and visitor experiences. This release
            contains the frontend foundation only: build tooling, styling, and
            a scalable folder structure. AI features, backend services, and
            authentication arrive in later steps.
          </p>
        </Card>
      </section>
    </div>
  )
}
