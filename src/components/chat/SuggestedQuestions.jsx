/**
 * SuggestedQuestions - Quick-action prompt chips
 *
 * Props:
 * - questions: array of question strings
 * - onSelect: callback when a question is clicked
 * - disabled: whether chips are disabled
 *
 * Features:
 * - Horizontally scrollable on mobile
 * - Wraps on larger screens
 * - Keyboard accessible
 * - Stadium-themed styling
 */

const DEFAULT_QUESTIONS = [
  'Where is Gate A?',
  'Where is the nearest restroom?',
  'How do I find my seat?',
  'Where can I get food?',
  'Where is the first-aid center?',
  'What time does the event start?',
]

export default function SuggestedQuestions({
  questions = DEFAULT_QUESTIONS,
  onSelect,
  disabled = false,
}) {
  return (
    <div
      className="flex flex-wrap gap-2 overflow-x-auto pb-2 scrollbar-hide"
      role="list"
      aria-label="Suggested questions"
    >
      {questions.map((question) => (
        <button
          key={question}
          type="button"
          onClick={() => onSelect(question)}
          disabled={disabled}
          role="listitem"
          className="flex-shrink-0 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 transition hover:border-brand-500 hover:text-brand-700 hover:bg-brand-50 disabled:opacity-40 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-500/20"
        >
          {question}
        </button>
      ))}
    </div>
  )
}