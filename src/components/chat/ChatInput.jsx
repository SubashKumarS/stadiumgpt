import Icon from '../common/Icon.jsx'

/**
 * ChatInput - Message composer with send button and clear chat
 *
 * Props:
 * - value: current input text
 * - onChange: handler for input changes
 * - onSubmit: handler for form submission
 * - onClear: handler for clear chat
 * - disabled: whether input is disabled (during loading)
 * - placeholder: input placeholder text
 *
 * Features:
 * - Enter to send, Shift+Enter for newline
 * - Disabled send button when empty
 * - Focus ring for accessibility
 * - Clear chat button
 */
export default function ChatInput({
  value,
  onChange,
  onSubmit,
  onClear,
  disabled = false,
  placeholder = 'Ask StadiumGPT about the stadium...',
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (value.trim() && !disabled) {
        onSubmit(e)
      }
    }
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Composer */}
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm focus-within:border-brand-500 transition"
      >
        <input
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Message input"
          aria-disabled={disabled}
        />
        <button
          type="submit"
          disabled={!value.trim() || disabled}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white transition hover:bg-brand-700 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-brand-600"
          aria-label="Send message"
        >
          <Icon name="send" className="h-5 w-5" />
        </button>
      </form>

      {/* Clear chat button */}
      <button
        type="button"
        onClick={onClear}
        disabled={disabled}
        className="self-end text-xs font-medium text-slate-500 hover:text-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition"
        aria-label="Clear conversation"
      >
        Clear chat
      </button>
    </div>
  )
}