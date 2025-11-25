"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface TwoSquaresBannerProps {
  leftImage: string
  leftImageAlt: string
  rightTitle: string
  rightSubtitle: string
  rightDescription: string
  rightCtaText: string
  rightCtaLink: string
  backgroundColor?: string
  reverse?: boolean
}

export function TwoSquaresBanner({
  leftImage,
  leftImageAlt,
  rightTitle,
  rightSubtitle,
  rightDescription,
  rightCtaText,
  rightCtaLink,
  backgroundColor = "#A47148",
  reverse = false,
}: TwoSquaresBannerProps) {
  return (
    <section className="py-0">
      <div className={`grid md:grid-cols-2 ${reverse ? "direction-rtl" : ""}`}>
        {/* Image Square */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 30 : -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`relative aspect-square md:aspect-auto md:min-h-[500px] ${reverse ? "md:order-2" : ""}`}
        >
          <img
            src={leftImage || "/placeholder.svg"}
            alt={leftImageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>

        {/* Content Square */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`flex items-center justify-center p-8 md:p-16 ${reverse ? "md:order-1" : ""}`}
          style={{ backgroundColor }}
        >
          <div className="max-w-md text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-white/80 mb-4">{rightSubtitle}</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">{rightTitle}</h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">{rightDescription}</p>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
              asChild
            >
              <Link href={rightCtaLink}>
                {rightCtaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
