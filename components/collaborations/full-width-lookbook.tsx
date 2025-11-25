"use client"

import { motion } from "framer-motion"
import Link from "next/link"

interface LookbookItem {
  image: string
  alt: string
  title: string
  link: string
}

interface FullWidthLookbookProps {
  title: string
  subtitle: string
  items: LookbookItem[]
}

export function FullWidthLookbook({ title, subtitle, items }: FullWidthLookbookProps) {
  return (
    <section className="py-16 lg:py-24 bg-accent/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">{subtitle}</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">{title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={item.link}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-muted">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.alt}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
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
