"use client"

import { useState } from "react"
import Link from "next/link"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/products-data"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="group relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Image */}
      <Link href={`/products/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden rounded-xl bg-muted">
          <img
            src={isHovered && product.hoverImage ? product.hoverImage : product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-all duration-500"
          />

          {/* Badge */}
          {product.badge && (
            <Badge
              className={`absolute top-3 left-3 ${
                product.badge === "Sale"
                  ? "bg-destructive text-destructive-foreground"
                  : product.badge === "New"
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground"
              }`}
            >
              {product.badge}
            </Badge>
          )}

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

          {/* Quick add */}
          <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button className="w-full" size="sm">
              Quick Add
            </Button>
          </div>
        </div>
      </Link>

      {/* Info */}
      <div className="mt-4 space-y-1">
        <div className="flex items-center gap-1">
          <Star className="h-3.5 w-3.5 fill-accent text-accent" />
          <span className="text-sm text-muted-foreground">
            {product.rating} ({product.reviewCount})
          </span>
        </div>
        <Link
          href={`/products/${product.slug}`}
          className="block font-medium text-foreground hover:text-primary transition-colors"
        >
          {product.name}
        </Link>
        <div className="flex items-center gap-2">
          <span className="font-semibold text-foreground">${product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        {/* Color swatches */}
        <div className="flex items-center gap-1 pt-1">
          {product.colors.slice(0, 4).map((color, index) => (
            <div
              key={index}
              className="h-4 w-4 rounded-full border border-border"
              style={{
                backgroundColor: getColorHex(color),
              }}
              title={color}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-muted-foreground">+{product.colors.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  )
}

function getColorHex(colorName: string): string {
  const colorMap: Record<string, string> = {
    Charcoal: "#36454F",
    Cream: "#FFFDD0",
    Sage: "#9DC183",
    Rust: "#B7410E",
    Navy: "#000080",
    Olive: "#808000",
    "Natural Oak": "#D4A76A",
    Walnut: "#5D432C",
    Mustard: "#FFDB58",
    Teal: "#008080",
    "Forest Green": "#228B22",
    Terracotta: "#E2725B",
    Black: "#000000",
    White: "#FFFFFF",
    Natural: "#F5DEB3",
    Teak: "#B8860B",
    "Light Grey": "#D3D3D3",
    Camel: "#C19A6B",
    "White Oak": "#EADBC5",
    Blush: "#DE5D83",
    "Black Oak": "#3D3D3D",
  }
  return colorMap[colorName] || "#CCCCCC"
}
