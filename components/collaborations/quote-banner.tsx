"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

interface QuoteBannerProps {
  quote: string
  author: string
  role: string
  backgroundColor?: string
}

export function QuoteBanner({ quote, author, role, backgroundColor = "#A47148" }: QuoteBannerProps) {
  return (
    <section className="py-16 lg:py-24" style={{ backgroundColor }}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quote className="w-12 h-12 mx-auto mb-6 text-white/60" />
          <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 leading-relaxed">
            "{quote}"
          </blockquote>
          <div>
            <p className="text-white font-medium text-lg">{author}</p>
            <p className="text-white/70">{role}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
