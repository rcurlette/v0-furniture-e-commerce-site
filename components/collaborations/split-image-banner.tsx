"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface SplitImageBannerProps {
  images: {
    src: string
    alt: string
    title: string
    link: string
  }[]
  title?: string
  subtitle?: string
}

export function SplitImageBanner({ images, title, subtitle }: SplitImageBannerProps) {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {subtitle && (
              <p className="text-sm font-medium uppercase tracking-widest text-[#A47148] mb-4">{subtitle}</p>
            )}
            {title && <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">{title}</h2>}
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-serif text-2xl font-bold text-white mb-3">{image.title}</h3>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-foreground bg-transparent"
                  asChild
                >
                  <Link href={image.link}>Shop Now</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
