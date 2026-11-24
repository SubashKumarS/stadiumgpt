import useDocumentTitle from '../hooks/useDocumentTitle.js'
import Card from '../components/common/Card.jsx'
import Icon from '../components/common/Icon.jsx'
import { FAQS, SUPPORT_CHANNELS } from '../data/help.js'

export default function Help() {
  useDocumentTitle('Help & Support | StadiumGPT')

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-slate-900">
          How can we help?
        </h2>
        <p className="text-sm text-slate-500">
          Quick answers to the most common match-day questions.
        </p>
      </div>

      {/* Support channels */}
      <div className="grid gap-4 sm:grid-cols-3">
        {SUPPORT_CHANNELS.map((channel) => (
          <div
            key={channel.title}
            className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-950 text-brand-400">
              <Icon name={channel.icon} className="h-5 w-5" />
            </span>
            <p className="mt-3 font-medium text-slate-900">{channel.title}</p>
            <p className="mt-0.5 text-sm text-slate-500">{channel.detail}</p>
            <button
              type="button"
              className="mt-4 self-start text-sm font-medium text-brand-600 transition hover:text-brand-700"
            >
              {channel.action} &rarr;
            </button>
          </div>
        ))}
      </div>

      {/* FAQ */}
      <Card title="Frequently asked questions" bodyClassName="mt-4">
        <div className="divide-y divide-slate-100">
          {FAQS.map((faq) => (
            <details key={faq.id} className="group py-3">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-slate-800 marker:hidden">
                <span className="flex items-center gap-3">
                  <span className="rounded-md bg-brand-50 px-2 py-0.5 text-xs font-semibold text-brand-700">
                    {faq.category}
                  </span>
                  {faq.question}
                </span>
                <Icon
                  name="chevronRight"
                  className="h-4 w-4 shrink-0 text-slate-400 transition group-open:rotate-90"
                />
              </summary>
              <p className="mt-2 max-w-3xl pl-0 text-sm leading-relaxed text-slate-600 sm:pl-[4.5rem]">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Card>
    </div>
  )
}
