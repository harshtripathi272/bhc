import { NextRequest, NextResponse } from "next/server"
import { SYSTEM_PROMPT } from "@/lib/chatbot-data"

// ══════════════════════════════════════════════════════
// AI PROVIDER CONFIG — Change this to switch providers
// Options: "gemini" | "groq"
// ══════════════════════════════════════════════════════
const AI_PROVIDER: "gemini" | "groq" = "gemini"

// Set these in your .env.local:
// GEMINI_API_KEY=your_gemini_api_key
// GROQ_API_KEY=your_groq_api_key

interface ChatMessage {
  role: "user" | "assistant" | "system"
  content: string
}

async function callGemini(messages: ChatMessage[]) {
  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return { error: "GEMINI_API_KEY not set in environment variables" }
  }

  const contents = messages
    .filter((m) => m.role !== "system")
    .map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }))

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 300,
        },
      }),
    }
  )

  if (!res.ok) {
    const err = await res.text()
    return { error: `Gemini API error: ${err}` }
  }

  const data = await res.json()
  const text =
    data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't generate a response."
  return { text }
}

async function callGroq(messages: ChatMessage[]) {
  const apiKey = process.env.GROQ_API_KEY
  if (!apiKey) {
    return { error: "GROQ_API_KEY not set in environment variables" }
  }

  const groqMessages = [
    { role: "system" as const, content: SYSTEM_PROMPT },
    ...messages.map((m) => ({ role: m.role, content: m.content })),
  ]

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages: groqMessages,
      temperature: 0.7,
      max_tokens: 300,
    }),
  })

  if (!res.ok) {
    const err = await res.text()
    return { error: `Groq API error: ${err}` }
  }

  const data = await res.json()
  const text =
    data?.choices?.[0]?.message?.content || "Sorry, I couldn't generate a response."
  return { text }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { messages } = body as { messages: ChatMessage[] }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Invalid request — messages array required" },
        { status: 400 }
      )
    }

    let result: { text?: string; error?: string }

    if (AI_PROVIDER === "gemini") {
      result = await callGemini(messages)
    } else {
      result = await callGroq(messages)
    }

    // If primary fails, try fallback
    if (result.error) {
      const fallbackProvider = AI_PROVIDER === "gemini" ? "groq" : "gemini"
      const fallbackFn = fallbackProvider === "gemini" ? callGemini : callGroq
      const fallbackResult = await fallbackFn(messages)

      if (fallbackResult.error) {
        // Both failed — return a static helpful response
        return NextResponse.json({
          text: "I'm currently unable to process your request. Please contact us directly:\n\n📞 Vinod Tripathi: +91 98265 93932\n📞 Revati Raman: +91 97554 89707\n\nOr WhatsApp us for quick assistance!",
          fallback: true,
        })
      }

      return NextResponse.json({ text: fallbackResult.text })
    }

    return NextResponse.json({ text: result.text })
  } catch {
    return NextResponse.json(
      {
        text: "Something went wrong. Please contact us directly at +91 98265 93932 or via WhatsApp.",
        fallback: true,
      },
      { status: 200 }
    )
  }
}
