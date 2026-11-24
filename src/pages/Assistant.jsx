import { useState, useCallback, useEffect } from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle.js'
import { getResponse, simulateThinking } from '../services/mockAssistant.js'
import ChatWindow from '../components/chat/ChatWindow.jsx'
import ChatInput from '../components/chat/ChatInput.jsx'
import SuggestedQuestions from '../components/chat/SuggestedQuestions.jsx'

/**
 * Initial greeting message from StadiumGPT
 */
const INITIAL_MESSAGE = {
  id: 1,
  role: 'assistant',
  text: "Hi! I'm StadiumGPT. I can help you find gates, seats, facilities, events, tickets, and other stadium information.",
  timestamp: Date.now(),
}

/**
 * Suggested questions for quick access
 */
const SUGGESTED_QUESTIONS = [
  'Where is Gate A?',
  'Where is the nearest restroom?',
  'How do I find my seat?',
  'Where can I get food?',
  'Where is the first-aid center?',
  'What time does the event start?',
]

/**
 * Assistant Page - AI-powered stadium chat interface
 *
 * Architecture:
 * - State managed locally (messages, input, loading)
 * - Mock responses from mockAssistant.js service
 * - Reusable chat components
 * - Ready for real AI API integration
 */
export default function Assistant() {
  useDocumentTitle('AI Assistant | StadiumGPT')

  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [draft, setDraft] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  /**
   * Add a user message and trigger AI response
   */
  const sendMessage = useCallback(async (text) => {
    const trimmed = text.trim()
    if (!trimmed || isLoading) return

    const userMessage = {
      id: Date.now(),
      role: 'user',
      text: trimmed,
      timestamp: Date.now(),
    }

    // 1. Add user message
    setMessages((prev) => [...prev, userMessage])
    setDraft('')
    setIsLoading(true)

    try {
      // 2. Simulate thinking delay
      await simulateThinking()

      // 3. Generate mock response
      const responseText = getResponse(trimmed)

      const assistantMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        text: responseText,
        timestamp: Date.now(),
      }

      // 4. Add AI response
      setMessages((prev) => [...prev, assistantMessage])
    } finally {
      setIsLoading(false)
    }
  }, [isLoading])

  /**
   * Handle suggested question click
   */
  const handleSuggestionClick = useCallback(
    (question) => {
      sendMessage(question)
    },
    [sendMessage]
  )

  /**
   * Handle form submit
   */
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault()
      sendMessage(draft)
    },
    [draft, sendMessage]
  )

  /**
   * Clear conversation and reset to initial state
   */
  const handleClearChat = useCallback(() => {
    setMessages([INITIAL_MESSAGE])
    setDraft('')
  }, [])

  /**
   * Handle input change
   */
  const handleChange = useCallback((e) => {
    setDraft(e.target.value)
  }, [])

  return (
    <div className="flex h-[calc(100vh-8.5rem)] flex-col gap-4">
      {/* Page Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          StadiumGPT Assistant
        </h1>
        <p className="text-sm text-slate-600">Your AI-powered match-day companion</p>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-amber-800">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-amber-500" />
          </span>
          Demo assistant
        </span>
      </div>

      {/* Chat Window */}
      <ChatWindow messages={messages} isLoading={isLoading} />

      {/* Suggested Questions */}
      <SuggestedQuestions
        questions={SUGGESTED_QUESTIONS}
        onSelect={handleSuggestionClick}
        disabled={isLoading}
      />

      {/* Chat Input */}
      <ChatInput
        value={draft}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onClear={handleClearChat}
        disabled={isLoading}
        placeholder="Ask StadiumGPT about the stadium..."
      />
    </div>
  )
}