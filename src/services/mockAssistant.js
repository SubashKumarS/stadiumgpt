/**
 * Mock AI Assistant Service
 *
 * Provides realistic stadium-specific responses for demo purposes.
 * All locations and data are DEMO data only.
 *
 * This service can be replaced with a real AI API integration later
 * by implementing the same interface (getResponse function).
 */

const DEMO_RESPONSES = {
  // Gate-related questions
  'gate a': 'Gate A is on the north side of the stadium. From the main entrance, follow the North Stand signs. (Demo data)',
  'gate b': 'Gate B is on the north-east side, serving the North Stand and East Stand lower tier. (Demo data)',
  'gate c': 'Gate C is on the east side, primarily for East Stand and VIP access. (Demo data)',
  'gate d': 'Gate D is on the south-east side, serving the South Stand. (Demo data)',
  'gate e': 'Gate E is on the south side, main access for South Stand lower and upper tiers. (Demo data)',
  'gate f': 'Gate F is on the south-west side, serving the South Stand and West Stand. (Demo data)',
  'gate g': 'Gate G is on the west side, primarily for West Stand and accessible seating. (Demo data)',
  'gate h': 'Gate H is on the north-west side, serving the North Stand and West Stand lower tier. (Demo data)',

  // Restroom questions
  restroom: 'The nearest demo restroom is beside Concourse 1, approximately 40 metres from Gate A. Additional facilities are located near every major concourse. (Demo data)',
  toilet: 'The nearest demo restroom is beside Concourse 1, approximately 40 metres from Gate A. Additional facilities are located near every major concourse. (Demo data)',
  bathroom: 'The nearest demo restroom is beside Concourse 1, approximately 40 metres from Gate A. Additional facilities are located near every major concourse. (Demo data)',

  // Seat/wayfinding questions
  seat: 'To find your demo seat, check your ticket for the stand, block, row, and seat number. Follow the coloured signage from your entry gate to the correct concourse level. (Demo data)',
  'find my seat': 'To find your demo seat, check your ticket for the stand, block, row, and seat number. Follow the coloured signage from your entry gate to the correct concourse level. (Demo data)',
  'where is my seat': 'To find your demo seat, check your ticket for the stand, block, row, and seat number. Follow the coloured signage from your entry gate to the correct concourse level. (Demo data)',

  // Food & beverage questions
  food: 'The demo food court is located near the north concourse (between Gates A and B). Additional concessions: burgers at Gate C, pizza at Gate E, healthy options at Gate G. (Demo data)',
  eat: 'The demo food court is located near the north concourse (between Gates A and B). Additional concessions: burgers at Gate C, pizza at Gate E, healthy options at Gate G. (Demo data)',
  restaurant: 'The demo food court is located near the north concourse (between Gates A and B). Additional concessions: burgers at Gate C, pizza at Gate E, healthy options at Gate G. (Demo data)',
  concession: 'The demo food court is located near the north concourse (between Gates A and B). Additional concessions: burgers at Gate C, pizza at Gate E, healthy options at Gate G. (Demo data)',

  // First aid / medical questions
  'first aid': 'The demo first-aid point is near the east concourse, between Gates C and D. Clearly marked with green cross signage. Staffed throughout all events. (Demo data)',
  'first-aid': 'The demo first-aid point is near the east concourse, between Gates C and D. Clearly marked with green cross signage. Staffed throughout all events. (Demo data)',
  medical: 'The demo first-aid point is near the east concourse, between Gates C and D. Clearly marked with green cross signage. Staffed throughout all events. (Demo data)',
  injury: 'The demo first-aid point is near the east concourse, between Gates C and D. Clearly marked with green cross signage. Staffed throughout all events. (Demo data)',
  'hurt': 'The demo first-aid point is near the east concourse, between Gates C and D. Clearly marked with green cross signage. Staffed throughout all events. (Demo data)',

  // Event timing questions
  'event start': 'Demo event gates open 90 minutes before kick-off. The match starts at the scheduled time on your ticket. Arrive early for the best experience. (Demo data)',
  'what time': 'Demo event gates open 90 minutes before kick-off. The match starts at the scheduled time on your ticket. Arrive early for the best experience. (Demo data)',
  'kick-off': 'Demo event gates open 90 minutes before kick-off. The match starts at the scheduled time on your ticket. Arrive early for the best experience. (Demo data)',
  'gates open': 'Demo event gates open 90 minutes before kick-off. The match starts at the scheduled time on your ticket. Arrive early for the best experience. (Demo data)',
  'start time': 'Demo event gates open 90 minutes before kick-off. The match starts at the scheduled time on your ticket. Arrive early for the best experience. (Demo data)',

  // Parking questions
  park: 'Demo parking: North Car Park (Gates A-B), East Car Park (Gates C-D), South Car Park (Gates E-F), West Car Park (Gates G-H). Accessible bays at all car parks. (Demo data)',
  parking: 'Demo parking: North Car Park (Gates A-B), East Car Park (Gates C-D), South Car Park (Gates E-F), West Car Park (Gates G-H). Accessible bays at all car parks. (Demo data)',

  // Accessibility questions
  accessible: 'Demo accessible entrances: Gates A, E, and G have step-free access with lift access to all concourse levels. Accessible seating in all stands. (Demo data)',
  wheelchair: 'Demo accessible entrances: Gates A, E, and G have step-free access with lift access to all concourse levels. Accessible seating in all stands. (Demo data)',
  'step-free': 'Demo accessible entrances: Gates A, E, and G have step-free access with lift access to all concourse levels. Accessible seating in all stands. (Demo data)',
  disability: 'Demo accessible entrances: Gates A, E, and G have step-free access with lift access to all concourse levels. Accessible seating in all stands. (Demo data)',

  // Merchandise questions
  merch: 'The demo stadium store is near Gate A on the north concourse. Open from gates opening until 30 minutes post-event. Online pickup available. (Demo data)',
  merchandise: 'The demo stadium store is near Gate A on the north concourse. Open from gates opening until 30 minutes post-event. Online pickup available. (Demo data)',
  shop: 'The demo stadium store is near Gate A on the north concourse. Open from gates opening until 30 minutes post-event. Online pickup available. (Demo data)',
  souvenir: 'The demo stadium store is near Gate A on the north concourse. Open from gates opening until 30 minutes post-event. Online pickup available. (Demo data)',

  // Lost & found
  lost: 'Demo lost property is at the Guest Services desk near Gate A. Items held for 30 days. Report lost items via the app or speak to any steward. (Demo data)',
  'lost property': 'Demo lost property is at the Guest Services desk near Gate A. Items held for 30 days. Report lost items via the app or speak to any steward. (Demo data)',
  found: 'Demo lost property is at the Guest Services desk near Gate A. Items held for 30 days. Report lost items via the app or speak to any steward. (Demo data)',

  // Water / hydration
  water: 'Demo water refill stations: North concourse (Gate A), East concourse (Gate C), South concourse (Gate E), West concourse (Gate G). Free chilled water. (Demo data)',
  drink: 'Demo water refill stations: North concourse (Gate A), East concourse (Gate C), South concourse (Gate E), West concourse (Gate G). Free chilled water. (Demo data)',
  hydration: 'Demo water refill stations: North concourse (Gate A), East concourse (Gate C), South concourse (Gate E), West concourse (Gate G). Free chilled water. (Demo data)',

  // WiFi / connectivity
  wifi: 'Demo stadium WiFi: "StadiumGPT_Free" - no password required. Coverage throughout bowl and concourses. Premium high-speed available via app. (Demo data)',
  internet: 'Demo stadium WiFi: "StadiumGPT_Free" - no password required. Coverage throughout bowl and concourses. Premium high-speed available via app. (Demo data)',
  signal: 'Demo stadium WiFi: "StadiumGPT_Free" - no password required. Coverage throughout bowl and concourses. Premium high-speed available via app. (Demo data)',

  // Security / bag policy
  bag: 'Demo bag policy: One small bag (max 30x30x15cm) per person. No backpacks, large bags, or prohibited items. Lockers available at Gates A and E. (Demo data)',
  'bag policy': 'Demo bag policy: One small bag (max 30x30x15cm) per person. No backpacks, large bags, or prohibited items. Lockers available at Gates A and E. (Demo data)',
  security: 'Demo security: All guests pass through screening at entry. Prohibited items: weapons, alcohol, flares, large bags. Medical exceptions with documentation. (Demo data)',

  // Default fallback
  default: "I'm currently using demo stadium data. I can help with gates, seats, facilities, events, tickets, and match-day information. All locations shown are DEMO data only.",
}

/**
 * Normalizes a question string for matching
 */
function normalizeQuestion(question) {
  return question
    .toLowerCase()
    .trim()
    .replace(/[?.,!]/g, '')
    .replace(/\s+/g, ' ')
}

/**
 * Finds the best matching response for a given question
 * @param {string} question - The user's question
 * @returns {string} - The mock response
 */
function getResponse(question) {
  const normalized = normalizeQuestion(question)

  // Check for exact keyword matches first
  for (const [keyword, response] of Object.entries(DEMO_RESPONSES)) {
    if (keyword === 'default') continue
    if (normalized.includes(keyword)) {
      return response
    }
  }

  // Check for partial word matches (e.g., "gate" in "where is gate a")
  const words = normalized.split(' ')
  for (const word of words) {
    if (word.length > 2 && DEMO_RESPONSES[word]) {
      return DEMO_RESPONSES[word]
    }
  }

  return DEMO_RESPONSES.default
}

/**
 * Simulates AI thinking delay
 * @param {number} minMs - Minimum delay in milliseconds
 * @param {number} maxMs - Maximum delay in milliseconds
 * @returns {Promise<void>}
 */
async function simulateThinking(minMs = 800, maxMs = 1500) {
  const delay = Math.random() * (maxMs - minMs) + minMs
  return new Promise((resolve) => setTimeout(resolve, delay))
}

export { getResponse, simulateThinking }