"use client"

import { useState } from "react"
import Link from "next/link"
import { X, ShoppingBag, MapPin, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { InspirationImage } from "@/lib/inspiration-data"

interface InspirationCardProps {
  image: InspirationImage
  index: number
}

export function InspirationCard({ image, index }: InspirationCardProps) {
  const [showProducts, setShowProducts] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const aspectRatios = ["aspect-[4/5]", "aspect-[3/4]", "aspect-square", "aspect-[4/3]", "aspect-[3/4]", "aspect-[4/5]"]
  const aspectRatio = aspectRatios[index % aspectRatios.length]

  return (
    <div className="group relative overflow-hidden rounded-xl bg-[#FAF7F2] break-inside-avoid mb-4">
      {/* Image */}
      <div className={`${aspectRatio} overflow-hidden`}>
        <img
          src={image.image || "/placeholder.svg"}
          alt={image.title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#424242]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Like button */}
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all hover:scale-110"
      >
        <Heart className={`h-5 w-5 ${isLiked ? "fill-red-500 text-red-500" : "text-[#424242]"}`} />
      </button>

      {/* Badges */}
      <div className="absolute top-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Badge className="bg-white/90 text-[#424242] hover:bg-white">{image.room}</Badge>
      </div>

      {/* Info overlay on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="text-base font-medium text-white mb-1">{image.title}</h3>
        {image.customerName && (
          <p className="text-sm text-white/80 flex items-center gap-1 mb-3">
            <span>{image.customerName}</span>
            {image.location && (
              <>
                <MapPin className="h-3 w-3" />
                <span>{image.location}</span>
              </>
            )}
          </p>
        )}
        <Button size="sm" onClick={() => setShowProducts(true)} className="bg-white text-[#424242] hover:bg-[#FAF7F2]">
          <ShoppingBag className="h-4 w-4 mr-2" />
          Shop This Room ({image.products.length})
        </Button>
      </div>

      {/* Products modal overlay */}
      {showProducts && (
        <div className="absolute inset-0 bg-white p-5 flex flex-col">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-serif text-lg text-[#424242]">Shop This Room</h4>
            <Button variant="ghost" size="icon" onClick={() => setShowProducts(false)} className="h-8 w-8">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 space-y-2 overflow-auto">
            {image.products.map((product, idx) => (
              <Link
                key={idx}
                href={`/products/${product.toLowerCase().replace(/\s+/g, "-")}`}
                className="block p-3 bg-[#FAF7F2] rounded-lg hover:bg-[#F0E6D9] transition-colors"
              >
                <span className="text-sm font-medium text-[#424242]">{product}</span>
              </Link>
            ))}
          </div>
          <Button className="mt-4 w-full bg-[#A47148] hover:bg-[#8B5E3C]" onClick={() => setShowProducts(false)}>
            View All Products
          </Button>
        </div>
      )}
    </div>
  )
}
