import Icon from '../common/Icon.jsx'

/**
 * ChatMessage - Individual message bubble with avatar and timestamp
 *
 * Props:
 * - message: { id, role ('user' | 'assistant'), text, timestamp }
 *
 * Features:
 * - Role-based alignment (user right, assistant left)
 * - Avatars with role-specific icons/colors
 * - Accessible color contrast
 * - Timestamp display
 */
export default function ChatMessage({ message }) {
  const isUser = message.role === 'user'
  const timestamp = message.timestamp
    ? new Date(message.timestamp).toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      })
    : null

  return (
    <div
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
      role="article"
      aria-label={`${isUser ? 'Your message' : 'StadiumGPT response'}`}
    >
      {/* Avatar */}
      <div
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-semibold ${
          isUser
            ? 'bg-navy-900 text-white'
            : 'bg-brand-600 text-white'
        }`}
        aria-hidden="true"
      >
        {isUser ? (
          <span className="text-xs font-medium">U</span>
        ) : (
          <Icon name="sparkles" className="h-4 w-4" />
        )}
      </div>

      {/* Message bubble */}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? 'rounded-tr-sm bg-brand-600 text-white'
            : 'rounded-tl-sm bg-slate-100 text-slate-700'
        }`}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>

        {timestamp && (
          <p
            className={`mt-1.5 text-[10px] text-right ${
              isUser ? 'text-white/70' : 'text-slate-500'
            }`}
          >
            {timestamp}
          </p>
        )}
      </div>
    </div>
  )
}