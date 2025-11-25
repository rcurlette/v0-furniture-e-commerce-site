"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CollaborationCta() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/luxurious-living-room-mocha-brown-velvet-sofa-warm.jpg"
          alt="Nordic x Pantone Living Room"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="text-white/70 text-sm font-medium uppercase tracking-widest mb-4">Limited Edition</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transform Your Space with Color
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Our Pantone collection pieces are made-to-order with premium materials and expert craftsmanship. Experience
            the difference of custom furniture.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" asChild>
              <Link href="/products">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
            >
              <Link href="/inspiration">Get Inspired</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
