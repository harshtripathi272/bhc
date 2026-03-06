"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  children: string
  className?: string
  once?: boolean
}

export default function TextReveal({ children, className, once = true }: TextRevealProps) {
  const words = children.split(" ")

  return (
    <span className={className}>
      {words.map((word, i) => (
        <Word key={`${word}-${i}`} index={i} total={words.length}>
          {word}
        </Word>
      ))}
    </span>
  )
}

function Word({
  children,
  index,
  total,
}: {
  children: string
  index: number
  total: number
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.6"],
  })

  const start = index / total
  const end = start + 1 / total
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.5, 1])

  return (
    <motion.span
      ref={ref}
      className="inline-block mr-[0.3em] will-change-[opacity]"
      style={{ opacity }}
    >
      {children}
    </motion.span>
  )
}
