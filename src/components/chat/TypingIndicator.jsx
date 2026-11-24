import Icon from '../common/Icon.jsx'

/**
 * TypingIndicator - Shows when StadiumGPT is "thinking"
 *
 * Features:
 * - Animated dots
 * - StadiumGPT avatar
 * - Accessible loading state
 * - Minimal, non-distracting animation
 */
export default function TypingIndicator() {
  return (
    <div className="flex gap-3" aria-live="polite" aria-label="StadiumGPT is thinking">
      {/* Avatar */}
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-white" aria-hidden="true">
        <Icon name="sparkles" className="h-4 w-4" />
      </div>

      {/* Typing bubble */}
      <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-sm bg-slate-100 px-4 py-3">
        <span className="text-sm text-slate-500">StadiumGPT is thinking</span>
        <div className="flex gap-1 ml-2" aria-hidden="true">
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-brand-500" />
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-brand-500" style={{ animationDelay: '0.15s' }} />
          <span className="typing-dot h-1.5 w-1.5 rounded-full bg-brand-500" style={{ animationDelay: '0.3s' }} />
        </div>
      </div>
    </div>
  )
}