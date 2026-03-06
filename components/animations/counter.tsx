"use client"

import { useEffect, useRef, useState } from "react"
import { useInView, motion } from "framer-motion"

interface CounterProps {
  target: number
  suffix?: string
  duration?: number
  className?: string
}

export default function Counter({
  target,
  suffix = "",
  duration = 2,
  className,
}: CounterProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const end = target
    const stepTime = (duration * 1000) / end
    const increment = Math.max(1, Math.floor(end / 60))

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, stepTime * increment)

    return () => clearInterval(timer)
  }, [isInView, target, duration])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {count}
      {suffix}
    </motion.span>
  )
}
