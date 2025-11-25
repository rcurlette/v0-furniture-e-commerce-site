"use client"

import { useState, useMemo } from "react"
import { ProductCard } from "./product-card"
import { ProductFilters } from "./product-filters"
import { ProductSort } from "./product-sort"
import { products } from "@/lib/products-data"

interface ProductGridProps {
  initialCategory?: string
}

export function ProductGrid({ initialCategory = "all" }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("featured")

  const filteredProducts = useMemo(() => {
    let filtered = [...products]

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((p) => p.category === selectedCategory)
    }

    // Filter by colors
    if (selectedColors.length > 0) {
      filtered = filtered.filter((p) => p.colors.some((c) => selectedColors.includes(c)))
    }

    // Filter by materials
    if (selectedMaterials.length > 0) {
      filtered = filtered.filter((p) => p.materials.some((m) => selectedMaterials.includes(m)))
    }

    // Sort
    switch (sortBy) {
      case "newest":
        // For demo, reverse the order
        filtered.reverse()
        break
      case "price-asc":
        filtered.sort((a, b) => a.price - b.price)
        break
      case "price-desc":
        filtered.sort((a, b) => b.price - a.price)
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
    }

    return filtered
  }, [selectedCategory, selectedColors, selectedMaterials, sortBy])

  const clearFilters = () => {
    setSelectedCategory("all")
    setSelectedColors([])
    setSelectedMaterials([])
  }

  return (
    <div className="flex gap-8">
      <ProductFilters
        selectedCategory={selectedCategory}
        selectedColors={selectedColors}
        selectedMaterials={selectedMaterials}
        onCategoryChange={setSelectedCategory}
        onColorChange={setSelectedColors}
        onMaterialChange={setSelectedMaterials}
        onClearFilters={clearFilters}
      />

      <div className="flex-1">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <p className="text-sm text-muted-foreground">
              Showing {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="lg:hidden">
              <ProductFilters
                selectedCategory={selectedCategory}
                selectedColors={selectedColors}
                selectedMaterials={selectedMaterials}
                onCategoryChange={setSelectedCategory}
                onColorChange={setSelectedColors}
                onMaterialChange={setSelectedMaterials}
                onClearFilters={clearFilters}
              />
            </div>
            <ProductSort value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        {/* Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">No products found matching your filters.</p>
            <button onClick={clearFilters} className="mt-4 text-primary hover:underline">
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
