"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CollaborationHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background lifestyle image */}
      <div className="absolute inset-0">
        <img
          src="/luxurious-living-room-mocha-brown-velvet-sofa-warm.jpg"
          alt="Pantone collaboration living room"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2]/95 via-[#FAF7F2]/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm font-medium uppercase tracking-widest text-[#A47148] mb-4">Exclusive Collaboration</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Nordic × Pantone
              <br />
              <span className="text-[#A47148]">2025 Collection</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-4 max-w-lg leading-relaxed">
              Introducing our curated collection featuring the 2025 Color of the Year. Embrace warmth, comfort, and
              sophisticated style.
            </p>

            {/* Pantone badge */}
            <div className="flex items-center gap-3 mb-8 p-3 bg-white/80 backdrop-blur rounded-lg inline-flex shadow-sm">
              <div className="w-12 h-12 rounded" style={{ backgroundColor: "#A47148" }} />
              <div>
                <p className="text-xs text-muted-foreground tracking-wider">PANTONE 17-1230</p>
                <p className="font-bold text-foreground">Mocha Mousse</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#A47148] hover:bg-[#8B5E3C] text-white" asChild>
                <Link href="#catalog">
                  Shop the Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#A47148] text-[#A47148] hover:bg-[#A47148] hover:text-white bg-transparent"
                asChild
              >
                <Link href="#colors">Explore Colors</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Pantone chips floating on right - desktop only */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4"
      >
        {[
          { code: "17-1230", name: "Mocha Mousse", hex: "#A47148" },
          { code: "18-4417", name: "Tapestry", hex: "#3D5A73" },
          { code: "17-1608", name: "Heather Rose", hex: "#B4838D" },
        ].map((color) => (
          <div
            key={color.code}
            className="bg-white p-2 shadow-lg hover:scale-105 transition-transform cursor-pointer rounded"
          >
            <div className="w-20 h-20 rounded-sm" style={{ backgroundColor: color.hex }} />
            <div className="pt-2 text-left">
              <p className="text-[10px] text-muted-foreground tracking-wider">PANTONE</p>
              <p className="text-xs font-bold">{color.code}</p>
              <p className="text-[10px] text-muted-foreground truncate">{color.name}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
