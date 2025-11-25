"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface FullBleedBannerProps {
  image: string
  imageAlt: string
  title: string
  subtitle?: string
  description?: string
  ctaText: string
  ctaLink: string
  align?: "left" | "center" | "right"
  overlay?: "light" | "dark"
}

export function FullBleedBanner({
  image,
  imageAlt,
  title,
  subtitle,
  description,
  ctaText,
  ctaLink,
  align = "left",
  overlay = "dark",
}: FullBleedBannerProps) {
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }

  const overlayClasses = {
    light: "bg-white/70",
    dark: "bg-black/50",
  }

  const textColor = overlay === "light" ? "text-foreground" : "text-white"

  return (
    <section className="relative min-h-[70vh] flex items-center">
      <div className="absolute inset-0">
        <img src={image || "/placeholder.svg"} alt={imageAlt} className="w-full h-full object-cover" />
        <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
      </div>

      <div className="relative z-10 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`flex flex-col ${alignmentClasses[align]} max-w-xl ${align === "right" ? "ml-auto" : align === "center" ? "mx-auto" : ""}`}
        >
          {subtitle && (
            <p
              className={`text-sm font-medium uppercase tracking-widest mb-4 ${overlay === "light" ? "text-[#A47148]" : "text-white/80"}`}
            >
              {subtitle}
            </p>
          )}
          <h2 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight ${textColor}`}>
            {title}
          </h2>
          {description && (
            <p
              className={`text-lg mb-8 leading-relaxed ${overlay === "light" ? "text-muted-foreground" : "text-white/90"}`}
            >
              {description}
            </p>
          )}
          <Button
            size="lg"
            className={
              overlay === "light"
                ? "bg-[#A47148] hover:bg-[#8B5E3C] text-white"
                : "bg-white text-foreground hover:bg-white/90"
            }
            asChild
          >
            <Link href={ctaLink}>
              {ctaText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
