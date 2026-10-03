import { useState } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import Icon from '../components/common/Icon.jsx'
import {
  INITIAL_MESSAGES,
  SUGGESTED_PROMPTS,
  MOCK_REPLIES,
} from '../data/assistant.js'

let nextId = 100

/**
 * Chat interface. The conversation is fully mocked - no AI API is
 * called. Sending a message appends a canned placeholder reply so the
 * interaction feels real until the backend lands.
 */
export default function Assistant() {
  useDocumentTitle('AI Assistant | StadiumGPT')

  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [draft, setDraft] = useState('')

  function sendMessage(text) {
    const trimmed = text.trim()
    if (!trimmed) return

    const reply = MOCK_REPLIES[(nextId + trimmed.length) % MOCK_REPLIES.length]

    setMessages((prev) => [
      ...prev,
      { id: nextId++, role: 'user', text: trimmed },
      { id: nextId++, role: 'assistant', text: reply },
    ])
    setDraft('')
  }

  return (
    <div className="flex h-[calc(100vh-8.5rem)] flex-col gap-4">
      {/* Conversation */}
      <div className="flex-1 space-y-4 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === 'user' ? 'flex-row-reverse' : ''
            }`}
          >
            <span
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
                message.role === 'assistant'
                  ? 'bg-brand-600 text-white'
                  : 'bg-navy-900 text-white'
              }`}
            >
              {message.role === 'assistant' ? (
                <Icon name="sparkles" className="h-4 w-4" />
              ) : (
                'FG'
              )}
            </span>

            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                message.role === 'assistant'
                  ? 'rounded-tl-sm bg-slate-100 text-slate-700'
                  : 'rounded-tr-sm bg-brand-600 text-white'
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}

        <p className="pt-2 text-center text-xs text-slate-400">
          Demo conversation - no AI API is connected yet.
        </p>
      </div>

      {/* Suggested prompts */}
      <div className="flex flex-wrap gap-2">
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            onClick={() => sendMessage(prompt)}
            className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-brand-500 hover:text-brand-700"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Composer */}
      <form
        className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm focus-within:border-brand-500"
        onSubmit={(event) => {
          event.preventDefault()
          sendMessage(draft)
        }}
      >
        <input
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Ask about gates, seats, fixtures or facilities..."
          className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 outline-none"
        />
        <button
          type="submit"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white transition hover:bg-brand-700 disabled:opacity-40"
          disabled={!draft.trim()}
          aria-label="Send message"
        >
          <Icon name="send" className="h-5 w-5" />
        </button>
      </form>
    </div>
  )
}
