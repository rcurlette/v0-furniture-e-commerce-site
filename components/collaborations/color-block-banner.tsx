"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function ColorBlockBanner() {
  const colors = [
    { code: "17-1230", name: "Mocha Mousse", hex: "#A47148", description: "2025 Color of the Year" },
    { code: "18-4417", name: "Tapestry", hex: "#3D5A73", description: "Deep & Meditative" },
    { code: "17-1608", name: "Heather Rose", hex: "#B4838D", description: "Antique & Warm" },
  ]

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Shop by Color</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Find Your Perfect Hue</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {colors.map((color, index) => (
            <motion.div
              key={color.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`#catalog`} className="block group">
                <div
                  className="relative aspect-[4/5] rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundColor: color.hex }}
                >
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="bg-white/95 backdrop-blur rounded-lg p-4">
                      <p className="text-xs text-muted-foreground tracking-wider">PANTONE {color.code}</p>
                      <p className="text-lg font-bold text-foreground">{color.name}</p>
                      <p className="text-sm text-muted-foreground mb-3">{color.description}</p>
                      <span className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                        Shop {color.name}
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
