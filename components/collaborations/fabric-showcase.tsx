"use client"

import { motion } from "framer-motion"
import { fabrics } from "@/lib/collaboration-data"

export function FabricShowcase() {
  return (
    <section className="py-16 md:py-24 bg-[#FAF7F2]">
      <div className="container px-4 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[#A47148] mb-4">Premium Materials</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Exclusive Fabrics</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Discover our specially developed fabrics for the Pantone collection
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {fabrics.map((fabric, index) => (
            <motion.div
              key={fabric.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-muted">
                <img
                  src={`/.jpg?height=400&width=400&query=${encodeURIComponent(fabric.name + " velvet fabric texture closeup luxury soft")}`}
                  alt={fabric.name}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-2">{fabric.name}</h3>
              <p className="text-muted-foreground">{fabric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Free swatches CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-6 py-3 shadow-sm border border-[#A47148]/20">
            <span className="text-sm font-medium text-foreground">Experience the quality firsthand</span>
            <button className="text-sm font-medium text-[#A47148] hover:underline">Order Free Swatches →</button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
