"use client"

import { motion } from "framer-motion"
import { pantoneColors } from "@/lib/collaboration-data"

export function ColorStory() {
  return (
    <section id="colors" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[#A47148] mb-4">The Palette</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">The Color Story</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Embrace the warmth of nature with our exclusive Pantone palette, designed to transform your home into a
            sanctuary of comfort and style.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {pantoneColors.map((color, index) => (
            <motion.div
              key={color.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6 group-hover:shadow-lg transition-shadow border border-border/50">
                <div className="aspect-[4/3]" style={{ backgroundColor: color.hex }} />
                <div className="p-4 border-t border-border">
                  <p className="text-xs text-muted-foreground tracking-wider">PANTONE</p>
                  <p className="font-bold text-lg text-foreground">{color.code}</p>
                  <p className="text-sm text-muted-foreground">{color.name}</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">{color.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
