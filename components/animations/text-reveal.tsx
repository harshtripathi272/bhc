"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

interface TextRevealProps {
  children: string
  className?: string
}

export default function TextReveal({ children, className }: TextRevealProps) {
  const words = children.split(" ")

  return (
    <span className={className}>
      {words.map((word, i) => (
        <Word key={`${word}-${i}`}>
          {word}
        </Word>
      ))}
    </span>
  )
}

function Word({
  children,
}: {
  children: string
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.6"],
  })

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
