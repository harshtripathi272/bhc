"use client"

import { useState, useRef, useEffect, type ReactNode } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X } from "lucide-react"

interface TreeNode {
  text: string
  chips: { label: string; next?: string; link?: string }[]
}

const TREE: Record<string, TreeNode> = {
  welcome: {
    text: "Hi there! 👋 Welcome to Balaji Health Care. How can I help you today?",
    chips: [
      { label: "Products", next: "products" },
      { label: "Services", next: "services" },
      { label: "Contact Us", next: "contact" },
      { label: "WhatsApp", next: "whatsapp" },
    ],
  },
  products: {
    text: "We supply a wide range of dialysis equipment wholesale. What are you looking for?",
    chips: [
      { label: "Dialysis Machines", next: "machines" },
      { label: "Consumables", next: "consumables" },
      { label: "Spare Parts", next: "spareparts" },
      { label: "← Back", next: "welcome" },
    ],
  },
  machines: {
    text: "We carry machines from top brands — <b>Fresenius 4008S</b>, <b>B.Braun Dialog+</b>, <b>Nipro SURDIAL-55 Plus</b>, and <b>Nikkiso DBB-05</b>.",
    chips: [
      { label: "View Products", link: "/products" },
      { label: "Enquire Now", link: "/contact" },
      { label: "← Back", next: "products" },
    ],
  },
  consumables: {
    text: "Our consumables include <b>FX Series Dialyzers</b>, <b>AV Fistula Needles</b>, <b>Bicarbonate Cartridges</b>, <b>Blood Tubing Sets</b>, and <b>Saline Bags</b>.",
    chips: [
      { label: "View Products", link: "/products" },
      { label: "Enquire Now", link: "/contact" },
      { label: "← Back", next: "products" },
    ],
  },
  spareparts: {
    text: "We stock genuine spare parts including <b>Pump Segment Tubing</b> and <b>Pressure Transducer Protectors</b> for all major brands.",
    chips: [
      { label: "View Products", link: "/products" },
      { label: "Enquire Now", link: "/contact" },
      { label: "← Back", next: "products" },
    ],
  },
  services: {
    text: "We offer comprehensive service solutions for dialysis centres:",
    chips: [
      { label: "24/7 Support", next: "support247" },
      { label: "AMC Plans", next: "amc" },
      { label: "Installation", next: "installation" },
      { label: "← Back", next: "welcome" },
    ],
  },
  support247: {
    text: "Our <b>24/7 technical support hotline</b> provides immediate troubleshooting for dialysis machine errors. We also offer on-site repair with factory-trained engineers.",
    chips: [
      { label: "All Services", link: "/services" },
      { label: "Call Now", link: "tel:+919826593932" },
      { label: "← Back", next: "services" },
    ],
  },
  amc: {
    text: "Our <b>Annual Maintenance Contracts</b> include preventive maintenance, priority emergency repairs, and discounted spare parts. Flexible plans for all scales.",
    chips: [
      { label: "All Services", link: "/services" },
      { label: "Enquire Now", link: "/contact" },
      { label: "← Back", next: "services" },
    ],
  },
  installation: {
    text: "We provide <b>complete turn-key installation</b> — site survey, infrastructure planning, machine setup, testing, and staff training.",
    chips: [
      { label: "All Services", link: "/services" },
      { label: "Enquire Now", link: "/contact" },
      { label: "← Back", next: "services" },
    ],
  },
  contact: {
    text: 'Reach us at:<br/><b>Vinod Tripathi</b> — <a href="tel:+919826593932" class="text-cyan hover:underline">+91 98265 93932</a><br/><b>Revati Raman Mishra</b> — <a href="tel:+919755489707" class="text-cyan hover:underline">+91 97554 89707</a>',
    chips: [
      { label: "Contact Page", link: "/contact" },
      { label: "WhatsApp", next: "whatsapp" },
      { label: "← Back", next: "welcome" },
    ],
  },
  whatsapp: {
    text: "Chat with us directly on WhatsApp for quick enquiries, quotes, or support:",
    chips: [
      {
        label: "Open WhatsApp",
        link: "https://wa.me/919826593932?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20dialysis%20equipment.",
      },
      { label: "← Back", next: "welcome" },
    ],
  },
}

interface Message {
  type: "bot" | "user"
  content: string
  chips?: { label: string; next?: string; link?: string }[]
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [showDot, setShowDot] = useState(true)
  const [typing, setTyping] = useState(false)
  const messagesRef = useRef<HTMLDivElement>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true
    addBotMessage("welcome")

    // Auto-open after 30s on first visit
    const opened = sessionStorage.getItem("bhc_chat_opened")
    if (!opened) {
      const timer = setTimeout(() => {
        setIsOpen(true)
        setShowDot(false)
        sessionStorage.setItem("bhc_chat_opened", "1")
      }, 30000)
      return () => clearTimeout(timer)
    }
  }, [])

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages, typing])

  function addBotMessage(key: string) {
    const node = TREE[key]
    if (!node) return
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages((prev) => [
        ...prev,
        { type: "bot", content: node.text, chips: node.chips },
      ])
    }, 800)
  }

  function handleChip(label: string, next?: string) {
    // Disable chips by clearing them from the last message
    setMessages((prev) => {
      const copy = [...prev]
      if (copy.length > 0 && copy[copy.length - 1].chips) {
        copy[copy.length - 1] = { ...copy[copy.length - 1], chips: undefined }
      }
      return copy
    })

    // Add user message
    setMessages((prev) => [...prev, { type: "user", content: label }])

    // Trigger next bot response
    if (next) addBotMessage(next)
  }

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {/* Chat Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-[76px] right-0 w-[380px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col"
            style={{ height: "520px" }}
          >
            {/* Header */}
            <div className="bg-navy px-5 py-4 flex items-center gap-3 shrink-0">
              <div className="w-9 h-9 rounded-full bg-cyan/20 flex items-center justify-center text-cyan font-heading font-bold text-xs">
                BHC
              </div>
              <div>
                <p className="text-white font-semibold text-sm">
                  BHC Assistant
                </p>
                <p className="text-white/50 text-xs flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={messagesRef}
              className="flex-1 overflow-y-auto p-4 space-y-3"
            >
              {messages.map((msg, i) => (
                <div key={i}>
                  <div
                    className={`max-w-[85%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                      msg.type === "bot"
                        ? "bg-surface-alt text-dark rounded-bl-md"
                        : "bg-cyan text-white ml-auto rounded-br-md"
                    }`}
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                  {msg.chips && (
                    <div className="flex flex-wrap gap-2 mt-2">
                      {msg.chips.map((chip, j) => {
                        if (chip.link) {
                          const isExternal =
                            chip.link.startsWith("http") ||
                            chip.link.startsWith("tel:")
                          if (isExternal) {
                            return (
                              <a
                                key={j}
                                href={chip.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3.5 py-1.5 rounded-full border border-cyan/30 text-cyan text-xs font-medium hover:bg-cyan/10 transition-colors"
                              >
                                {chip.label}
                              </a>
                            )
                          }
                          return (
                            <Link
                              key={j}
                              href={chip.link}
                              className="px-3.5 py-1.5 rounded-full border border-cyan/30 text-cyan text-xs font-medium hover:bg-cyan/10 transition-colors"
                              onClick={() => setIsOpen(false)}
                            >
                              {chip.label}
                            </Link>
                          )
                        }
                        return (
                          <button
                            key={j}
                            onClick={() => handleChip(chip.label, chip.next)}
                            className="px-3.5 py-1.5 rounded-full border border-cyan/30 text-cyan text-xs font-medium hover:bg-cyan/10 transition-colors cursor-pointer"
                          >
                            {chip.label}
                          </button>
                        )
                      })}
                    </div>
                  )}
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex gap-1 px-4 py-3 bg-surface-alt rounded-2xl rounded-bl-md w-fit">
                  <span className="w-2 h-2 bg-muted/40 rounded-full animate-bounce [animation-delay:0ms]" />
                  <span className="w-2 h-2 bg-muted/40 rounded-full animate-bounce [animation-delay:150ms]" />
                  <span className="w-2 h-2 bg-muted/40 rounded-full animate-bounce [animation-delay:300ms]" />
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-3 border-t border-border text-center">
              <span className="text-[11px] text-muted">
                Balaji Health Care · Quick-reply assistant
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAB */}
      <button
        onClick={() => {
          setIsOpen(!isOpen)
          setShowDot(false)
        }}
        className="w-[60px] h-[60px] rounded-full bg-cyan hover:bg-cyan-hover text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer relative"
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <X className="w-6 h-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Notification dot */}
        {showDot && !isOpen && (
          <span className="absolute -top-0.5 -right-0.5 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse-dot" />
        )}
      </button>
    </div>
  )
}
