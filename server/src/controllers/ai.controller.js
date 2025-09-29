import { cohereChatJSON } from '../services/cohere.js'

const SYSTEM_PROMPT = `You are an assistant for Hustlr, a WhatsApp-based chatbot that connects customers with service providers.
Your job:
1) Take in vague or unclear customer requests.
2) Predict the most likely customer intents based on the request. Output 2–4 options when uncertain; output 1 when clear.
3) If the query is not clear enough to pick just one, include a short clarifying question.

Format the response strictly as JSON with two fields and nothing else:
{
  "likely_intents": ["Intent1", "Intent2"],
  "clarifying_question": "Your question here or null"
}
- likely_intents must be an array of strings (1–4 entries).
- clarifying_question must be a string when helpful, otherwise null.
- Keep responses professional, concise, and easy to understand.
- Do not include code fences or commentary.
`

export async function predictIntents(req, res) {
  try {
    const { text } = req.body || {}
    if (!text || typeof text !== 'string') {
      return res.status(400).json({ message: 'text is required' })
    }

    const result = await cohereChatJSON({
      systemPrompt: SYSTEM_PROMPT,
      userMessage: `Customer request: ${text}`,
      temperature: 0.2,
    })

    // Basic schema guard
    let likely = []
    let clarify = null
    if (result && Array.isArray(result.likely_intents)) {
      likely = result.likely_intents.map((s) => String(s).trim()).filter(Boolean).slice(0, 4)
    }
    if (typeof result?.clarifying_question === 'string') clarify = result.clarifying_question
    if (clarify === undefined) clarify = null

    // If Cohere returns 1 clear intent, prefer null for question
    if (likely.length === 1) clarify = null

    // Fallback in worst case
    if (likely.length === 0) {
      likely = ['General Inquiry']
      clarify = 'Could you share a bit more about what you need so I can connect you with the right service?'
    }

    return res.json({ likely_intents: likely, clarifying_question: clarify })
  } catch (err) {
    console.error('predictIntents error', err)
    return res.status(500).json({ message: 'Failed to predict intents' })
  }
}
