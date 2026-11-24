/** Mock conversation shown before the AI API is connected. */
export const INITIAL_MESSAGES = [
  {
    id: 1,
    role: 'assistant',
    text: 'Hi! I am the StadiumGPT assistant for Central Arena. Ask me about gates, seating, fixtures or facilities.',
  },
  {
    id: 2,
    role: 'user',
    text: 'Which gate do I use for the North Stand?',
  },
  {
    id: 3,
    role: 'assistant',
    text: 'North Stand seats are served by Gates A and B. At the moment Gate A has the shortest queue (about 3 minutes).',
  },
]

/** Prompt chips offered above the composer. */
export const SUGGESTED_PROMPTS = [
  'Where is my seat?',
  'What time do gates open?',
  'Show me nearby food options',
  'Is there step-free access?',
]

/** Canned replies used while no AI API is connected. */
export const MOCK_REPLIES = [
  'This is a placeholder response. Once the AI API is connected, this answer will be generated live for your question.',
  'I do not have live data yet - this message is simulated so you can see how the conversation flow works.',
  'Great question! The real assistant will answer this from stadium data. For now, check the Stadium Map page for the layout.',
]
