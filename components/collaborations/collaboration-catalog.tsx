"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CollaborationProductCard } from "./collaboration-product-card"
import { collaborationProducts, pantoneColors } from "@/lib/collaboration-data"
import { Button } from "@/components/ui/button"

export function CollaborationCatalog() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)

  const filteredProducts = activeFilter
    ? collaborationProducts.filter((p) => p.pantoneCode === activeFilter)
    : collaborationProducts

  return (
    <section id="catalog" className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-[#A47148] mb-4">The Collection</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Shop the Collection</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Each piece is handcrafted to order, available in our exclusive Pantone fabrics
          </p>
        </motion.div>

        {/* Color filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <Button
            variant={activeFilter === null ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveFilter(null)}
            className={
              activeFilter === null ? "bg-[#A47148] hover:bg-[#8B5E3C]" : "border-[#A47148]/30 hover:border-[#A47148]"
            }
          >
            All Colors
          </Button>
          {pantoneColors.map((color) => (
            <Button
              key={color.code}
              variant={activeFilter === color.code ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(color.code)}
              className={`gap-2 ${activeFilter === color.code ? "" : "border-[#A47148]/30 hover:border-[#A47148]"}`}
              style={activeFilter === color.code ? { backgroundColor: color.hex } : {}}
            >
              <span className="w-3 h-3 rounded-full border border-white/30" style={{ backgroundColor: color.hex }} />
              {color.name}
            </Button>
          ))}
        </div>

        {/* Product grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <CollaborationProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* Results count */}
        <p className="text-center text-muted-foreground mt-8">
          Showing {filteredProducts.length} of {collaborationProducts.length} products
        </p>
      </div>
    </section>
  )
}
