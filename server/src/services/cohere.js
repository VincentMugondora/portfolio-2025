import assert from 'node:assert'

const API_URL = 'https://api.cohere.ai/v1/chat'
const MODEL = process.env.COHERE_MODEL || 'command-r-plus-08-2024'

function extractText(resp) {
  // Cohere may return either `text` or `message.content[{ text }]`
  if (resp?.text) return String(resp.text)
  const parts = resp?.message?.content
  if (Array.isArray(parts)) {
    const joined = parts.map((p) => p?.text).filter(Boolean).join('\n')
    if (joined) return joined
  }
  return ''
}

export async function cohereChatJSON({ systemPrompt, userMessage, temperature = 0.2 }) {
  const apiKey = process.env.COHERE_API_KEY
  assert(apiKey, 'Missing COHERE_API_KEY')

  const body = {
    model: MODEL,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage },
    ],
    temperature,
  }

  const resp = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  if (!resp.ok) {
    const errText = await resp.text().catch(() => '')
    throw new Error(`Cohere API error: ${resp.status} ${resp.statusText} ${errText}`)
  }

  const data = await resp.json()
  const text = extractText(data)
  if (!text) throw new Error('Empty response from Cohere')

  // Try strict JSON parse first
  try {
    const parsed = JSON.parse(text)
    return parsed
  } catch (_) {
    // Fallback: attempt to locate JSON-looking substring
    const match = text.match(/[\{\[].*[\}\]]/s)
    if (match) {
      try {
        return JSON.parse(match[0])
      } catch (_) {
        // ignore
      }
    }
    throw new Error('Cohere response not valid JSON')
  }
}
