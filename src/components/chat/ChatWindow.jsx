import { useState, useRef, useEffect } from 'react'
import ChatMessage from './ChatMessage.jsx'
import TypingIndicator from './TypingIndicator.jsx'

/**
 * ChatWindow - Displays the conversation history with scroll management
 *
 * Features:
 * - Auto-scroll to bottom on new messages
 * - Manual scroll detection (user can scroll up without auto-scrolling back)
 * - Responsive height
 * - Demo indicator badge
 */
export default function ChatWindow({ messages, isLoading }) {
  const messagesEndRef = useRef(null)
  const containerRef = useRef(null)
  const [userHasScrolled, setUserHasScrolled] = useState(false)

  useEffect(() => {
    if (!userHasScrolled) {
      scrollToBottom()
    }
  }, [messages, isLoading])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    // User has scrolled up if not near bottom
    const isNearBottom = scrollHeight - scrollTop - clientHeight < 100
    setUserHasScrolled(!isNearBottom)
  }

  return (
    <div
      ref={containerRef}
      className="flex-1 min-h-0 space-y-4 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-6"
      onScroll={handleScroll}
    >
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}

      {isLoading && <TypingIndicator />}

      <div ref={messagesEndRef} />

      {/* Demo indicator */}
      <p className="pt-2 text-center text-xs text-slate-400">
        Demo conversation - responses are mocked
      </p>
    </div>
  )
}