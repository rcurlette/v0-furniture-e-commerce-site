"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CollaborationProduct } from "@/lib/collaboration-data"
import { pantoneColors } from "@/lib/collaboration-data"

interface CollaborationProductCardProps {
  product: CollaborationProduct
}

export function CollaborationProductCard({ product }: CollaborationProductCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const pantoneColor = pantoneColors.find((c) => c.code === product.pantoneCode)
  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />

          {/* Sale badge */}
          <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs font-medium px-2 py-1 rounded">
            {discount}% OFF
          </div>

          {/* Wishlist button */}
          <Button
            variant="secondary"
            size="icon"
            className={`absolute top-3 right-3 h-9 w-9 rounded-full opacity-0 group-hover:opacity-100 transition-opacity ${
              isWishlisted ? "opacity-100" : ""
            }`}
            onClick={(e) => {
              e.preventDefault()
              setIsWishlisted(!isWishlisted)
            }}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? "fill-destructive text-destructive" : ""}`} />
          </Button>

          {/* Quick view overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        </div>
      </Link>

      {/* Info */}
      <div className="p-4">
        <Link
          href={`/products/${product.slug}`}
          className="block font-medium text-foreground hover:text-primary transition-colors line-clamp-2 min-h-[3rem]"
        >
          {product.name}
        </Link>

        {/* Pricing */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-muted-foreground line-through">${product.originalPrice.toLocaleString()}</span>
          <span className="font-semibold text-foreground">${product.price.toLocaleString()}</span>
        </div>

        {/* Fabric and color info */}
        <div className="mt-3 pt-3 border-t border-border">
          <div className="flex items-center gap-2">
            {pantoneColor && (
              <div
                className="w-4 h-4 rounded-full border border-border"
                style={{ backgroundColor: pantoneColor.hex }}
              />
            )}
            <span className="text-xs text-muted-foreground">
              {product.fabric} in Pantone {product.pantoneCode} {product.pantoneName}
            </span>
          </div>
          {product.orientation && <p className="text-xs text-muted-foreground mt-1">{product.orientation}</p>}
        </div>
      </div>
    </div>
  )
}
