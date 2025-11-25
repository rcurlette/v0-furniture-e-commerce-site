"use client"

import { useState } from "react"
import { Star, Heart, Truck, RotateCcw, Shield, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { Product } from "@/lib/products-data"

interface ProductInfoProps {
  product: Product & {
    description?: string
    dimensions?: string
    care?: string
    shipping?: string
  }
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [selectedMaterial, setSelectedMaterial] = useState(product.materials[0])
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  return (
    <div className="space-y-6">
      {/* Badge */}
      {product.badge && (
        <Badge
          className={`${
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

      {/* Title */}
      <div>
        <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <span className="text-sm font-medium">{product.rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
        </div>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-foreground">${product.price.toLocaleString()}</span>
        {product.originalPrice && (
          <span className="text-xl text-muted-foreground line-through">${product.originalPrice.toLocaleString()}</span>
        )}
      </div>

      <Separator />

      {/* Description */}
      {product.description && <p className="text-base text-muted-foreground leading-relaxed">{product.description}</p>}

      {/* Color selection */}
      <div>
        <label className="text-sm font-semibold uppercase tracking-wider mb-3 block">Color: {selectedColor}</label>
        <div className="flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-2 rounded-md border transition-all ${
                selectedColor === color
                  ? "border-primary bg-primary/10 text-primary font-medium"
                  : "border-border bg-background text-muted-foreground hover:border-primary/50"
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Material selection */}
      <div>
        <label className="text-sm font-semibold uppercase tracking-wider mb-3 block">
          Material: {selectedMaterial}
        </label>
        <div className="flex flex-wrap gap-2">
          {product.materials.map((material) => (
            <button
              key={material}
              onClick={() => setSelectedMaterial(material)}
              className={`px-4 py-2 rounded-md border transition-all ${
                selectedMaterial === material
                  ? "border-primary bg-primary/10 text-primary font-medium"
                  : "border-border bg-background text-muted-foreground hover:border-primary/50"
              }`}
            >
              {material}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Quantity and actions */}
      <div className="space-y-4">
        <div>
          <label className="text-sm font-semibold uppercase tracking-wider mb-3 block">Quantity</label>
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-border rounded-md">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <span className="text-sm text-muted-foreground">In stock and ready to ship</span>
          </div>
        </div>

        <div className="flex gap-3">
          <Button size="lg" className="flex-1">
            Add to Cart - ${(product.price * quantity).toLocaleString()}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className={isWishlisted ? "bg-accent/10" : ""}
            onClick={() => setIsWishlisted(!isWishlisted)}
          >
            <Heart className={`h-5 w-5 ${isWishlisted ? "fill-destructive text-destructive" : ""}`} />
          </Button>
        </div>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
        <div className="flex items-start gap-3">
          <Truck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium">Free Shipping</p>
            <p className="text-xs text-muted-foreground">On orders over $999</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <RotateCcw className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium">100-Day Trial</p>
            <p className="text-xs text-muted-foreground">Risk-free returns</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Shield className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium">Lifetime Warranty</p>
            <p className="text-xs text-muted-foreground">On frame & springs</p>
          </div>
        </div>
      </div>

      {/* Accordions */}
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="details">
          <AccordionTrigger>Product Details</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                {product.description ||
                  "Handcrafted with premium materials and built to last. Each piece is made to order by skilled artisans."}
              </p>
              {product.dimensions && (
                <p>
                  <strong>Dimensions:</strong> {product.dimensions}
                </p>
              )}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="care">
          <AccordionTrigger>Care Instructions</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                {product.care ||
                  "Clean with a soft, damp cloth. Avoid harsh chemicals. For upholstered pieces, vacuum regularly and spot clean stains immediately."}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="shipping">
          <AccordionTrigger>Shipping & Delivery</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>
                {product.shipping ||
                  "Free shipping on orders over $999. Standard delivery takes 2-4 weeks. White-glove delivery available for an additional fee."}
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}
