"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface LifestyleBannerProps {
  title: string
  subtitle: string
  description: string
  image: string
  imageAlt: string
  ctaText: string
  ctaLink: string
  reverse?: boolean
  pantoneColor?: {
    code: string
    name: string
    hex: string
  }
}

export function LifestyleBanner({
  title,
  subtitle,
  description,
  image,
  imageAlt,
  ctaText,
  ctaLink,
  reverse = false,
  pantoneColor,
}: LifestyleBannerProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${reverse ? "direction-rtl" : ""}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={reverse ? "lg:order-2" : ""}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-lg">
              <img src={image || "/placeholder.svg"} alt={imageAlt} className="object-cover w-full h-full" />
              {pantoneColor && (
                <div className="absolute bottom-4 left-4 bg-white p-2 shadow-lg rounded">
                  <div className="w-14 h-14 rounded-sm" style={{ backgroundColor: pantoneColor.hex }} />
                  <div className="pt-2">
                    <p className="text-[8px] text-muted-foreground tracking-wider">PANTONE</p>
                    <p className="text-xs font-bold">{pantoneColor.code}</p>
                    <p className="text-[9px] text-muted-foreground">{pantoneColor.name}</p>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={reverse ? "lg:order-1" : ""}
          >
            <p className="text-sm font-medium uppercase tracking-widest text-[#A47148] mb-4">{subtitle}</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">{title}</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{description}</p>
            <Button size="lg" className="bg-[#A47148] hover:bg-[#8B5E3C] text-white" asChild>
              <Link href={ctaLink}>
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
