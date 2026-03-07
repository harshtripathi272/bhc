"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"
import { FAQ_RESPONSES, COMPANY_PHONE, COMPANY_WHATSAPP } from "@/lib/chatbot-data"

interface ChatAction {
  label: string
  href: string
  type?: "whatsapp" | "call" | "link"
}

interface ChatMessage {
  from: "bot" | "user"
  text: string
  actions?: ChatAction[]
}

const quickActions = [
  { label: "Products", key: "products" },
  { label: "Services", key: "services" },
  { label: "Pricing", key: "pricing" },
  { label: "Contact", key: "contact" },
  { label: "Location", key: "location" },
  { label: "About", key: "about" },
]

const welcomeMessage: ChatMessage = {
  from: "bot",
  text: "Hi! I'm the Balaji Health Care assistant. How can I help you today? Choose a topic below or type your question.",
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage])
  const [input, setInput] = useState("")
  const [loading, setLoading] = useState(false)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, loading])

  const addBotMessage = (text: string, actions?: ChatAction[]) => {
    setMessages((prev) => [...prev, { from: "bot", text, actions }])
  }

  const handleQuickAction = (key: string) => {
    setMessages((prev) => [...prev, { from: "user", text: quickActions.find((q) => q.key === key)?.label || key }])

    const faq = FAQ_RESPONSES[key as keyof typeof FAQ_RESPONSES]
    if (faq) {
      setTimeout(() => {
        const actions: ChatAction[] = []
        if (key === "contact" || key === "pricing") {
          actions.push(
            { label: "WhatsApp", href: `https://wa.me/${COMPANY_WHATSAPP}`, type: "whatsapp" },
            { label: "Call Now", href: `tel:${COMPANY_PHONE}`, type: "call" }
          )
        }
        if (key === "products") {
          actions.push({ label: "Browse Products", href: "/products", type: "link" })
        }
        if (key === "services") {
          actions.push({ label: "View Services", href: "/services", type: "link" })
        }
        if (key === "location") {
          actions.push({ label: "View on Maps", href: "https://maps.app.goo.gl/RSBC7tL2P1Bs8axE8", type: "link" })
        }
        // Also add any links from the FAQ data itself
        if (faq.links) {
          faq.links.forEach((l) => {
            if (!actions.some((a) => a.href === l.href)) {
              actions.push({ label: l.label, href: l.href, type: "link" })
            }
          })
        }
        addBotMessage(faq.answer, actions)
      }, 300)
    }
  }

  const matchFAQ = (text: string): string | null => {
    const lower = text.toLowerCase()
    if (/product|machine|dialysis|ro |reverse osmosis|consumable|spare/.test(lower)) return "products"
    if (/service|install|maintenance|amc|repair|setup/.test(lower)) return "services"
    if (/price|cost|rate|quote|how much/.test(lower)) return "pricing"
    if (/contact|phone|call|email|reach/.test(lower)) return "contact"
    if (/where|location|address|map|office|indore/.test(lower)) return "location"
    if (/about|company|who|history|founded/.test(lower)) return "about"
    return null
  }

  const handleSend = async () => {
    const text = input.trim()
    if (!text || loading) return
    setInput("")
    setMessages((prev) => [...prev, { from: "user", text }])

    // Check for FAQ match first
    const faqKey = matchFAQ(text)
    if (faqKey) {
      const faq = FAQ_RESPONSES[faqKey as keyof typeof FAQ_RESPONSES]
      setTimeout(() => {
        const actions: ChatAction[] = []
        if (faqKey === "contact" || faqKey === "pricing") {
          actions.push(
            { label: "WhatsApp", href: `https://wa.me/${COMPANY_WHATSAPP}`, type: "whatsapp" },
            { label: "Call Now", href: `tel:${COMPANY_PHONE}`, type: "call" }
          )
        }
        if (faq.links) {
          faq.links.forEach((l) => {
            if (!actions.some((a) => a.href === l.href)) {
              actions.push({ label: l.label, href: l.href, type: "link" })
            }
          })
        }
        addBotMessage(faq.answer, actions)
      }, 300)
      return
    }

    // Try AI API
    setLoading(true)
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      })
      const data = await res.json()
      if (data.reply) {
        addBotMessage(data.reply, [
          { label: "WhatsApp", href: `https://wa.me/${COMPANY_WHATSAPP}`, type: "whatsapp" },
          { label: "Call Us", href: `tel:${COMPANY_PHONE}`, type: "call" },
        ])
      } else {
        addBotMessage(
          "I'm not sure about that. Let me connect you with our team for the best answer.",
          [
            { label: "WhatsApp", href: `https://wa.me/${COMPANY_WHATSAPP}`, type: "whatsapp" },
            { label: "Call Us", href: `tel:${COMPANY_PHONE}`, type: "call" },
          ]
        )
      }
    } catch {
      addBotMessage(
        "Sorry, I couldn't process that right now. Please contact us directly.",
        [
          { label: "WhatsApp", href: `https://wa.me/${COMPANY_WHATSAPP}`, type: "whatsapp" },
          { label: "Call Us", href: `tel:${COMPANY_PHONE}`, type: "call" },
        ]
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Toggle Button */}
      <AnimatePresence>
        {!open && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => setOpen(true)}
            className="fixed bottom-5 right-5 z-50 w-13 h-13 bg-[#0B2B5E] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0B2B5E]/90 transition-colors"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-5 right-5 z-50 w-[360px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-100 flex flex-col overflow-hidden"
            style={{ maxHeight: "min(550px, calc(100vh - 6rem))" }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#0B2B5E] text-white shrink-0">
              <div>
                <h3 className="text-sm font-semibold">Balaji Health Care</h3>
                <p className="text-[10px] text-blue-200">Online · Usually replies instantly</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] rounded-xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      msg.from === "user"
                        ? "bg-[#0B2B5E] text-white rounded-br-sm"
                        : "bg-slate-100 text-slate-700 rounded-bl-sm"
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.text}</p>
                    {msg.actions && msg.actions.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-slate-200/50">
                        {msg.actions.map((action) => (
                          <a
                            key={action.label}
                            href={action.href}
                            target={action.type === "link" && !action.href.startsWith("/") ? "_blank" : undefined}
                            rel={action.type === "link" ? "noopener noreferrer" : undefined}
                            className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                              action.type === "whatsapp"
                                ? "bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366]/20"
                                : action.type === "call"
                                  ? "bg-blue-50 text-blue-600 hover:bg-blue-100"
                                  : "bg-slate-200/60 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {action.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 rounded-xl rounded-bl-sm px-3.5 py-2.5">
                    <Loader2 className="w-4 h-4 text-slate-400 animate-spin" />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 py-2 border-t border-slate-100 bg-slate-50/50 shrink-0">
              <div className="flex flex-wrap gap-1.5">
                {quickActions.map((action) => (
                  <button
                    key={action.key}
                    onClick={() => handleQuickAction(action.key)}
                    className="px-2.5 py-1 bg-white border border-slate-200 rounded-full text-xs font-medium text-slate-600 hover:bg-slate-100 hover:border-slate-300 transition-colors"
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="px-3 py-2.5 border-t border-slate-100 bg-white shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 bg-slate-50 rounded-lg text-sm text-slate-900 placeholder:text-slate-400 outline-none focus:ring-1 focus:ring-[#0284C7]/30 border border-slate-200"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0B2B5E] text-white disabled:opacity-40 hover:bg-[#0B2B5E]/90 transition-colors shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
