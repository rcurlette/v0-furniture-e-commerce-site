"use client"
import { ChevronDown, X, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { categories, colors, materials } from "@/lib/products-data"

interface ProductFiltersProps {
  selectedCategory: string
  selectedColors: string[]
  selectedMaterials: string[]
  onCategoryChange: (category: string) => void
  onColorChange: (colors: string[]) => void
  onMaterialChange: (materials: string[]) => void
  onClearFilters: () => void
}

export function ProductFilters({
  selectedCategory,
  selectedColors,
  selectedMaterials,
  onCategoryChange,
  onColorChange,
  onMaterialChange,
  onClearFilters,
}: ProductFiltersProps) {
  const hasActiveFilters = selectedCategory !== "all" || selectedColors.length > 0 || selectedMaterials.length > 0

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Category */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <span className="text-sm font-semibold uppercase tracking-wider">Category</span>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => onCategoryChange(category.value)}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  selectedCategory === category.value
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Colors */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <span className="text-sm font-semibold uppercase tracking-wider">Color</span>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            {colors.map((color) => (
              <label key={color} className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={selectedColors.includes(color)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onColorChange([...selectedColors, color])
                    } else {
                      onColorChange(selectedColors.filter((c) => c !== color))
                    }
                  }}
                />
                <span className="text-sm text-muted-foreground">{color}</span>
              </label>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Materials */}
      <Collapsible defaultOpen>
        <CollapsibleTrigger className="flex w-full items-center justify-between py-2">
          <span className="text-sm font-semibold uppercase tracking-wider">Material</span>
          <ChevronDown className="h-4 w-4" />
        </CollapsibleTrigger>
        <CollapsibleContent className="pt-2">
          <div className="space-y-2">
            {materials.map((material) => (
              <label key={material} className="flex items-center gap-2 cursor-pointer">
                <Checkbox
                  checked={selectedMaterials.includes(material)}
                  onCheckedChange={(checked) => {
                    if (checked) {
                      onMaterialChange([...selectedMaterials, material])
                    } else {
                      onMaterialChange(selectedMaterials.filter((m) => m !== material))
                    }
                  }}
                />
                <span className="text-sm text-muted-foreground">{material}</span>
              </label>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Clear filters */}
      {hasActiveFilters && (
        <Button variant="outline" size="sm" onClick={onClearFilters} className="w-full bg-transparent">
          <X className="h-4 w-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  )

  return (
    <>
      {/* Desktop filters */}
      <aside className="hidden lg:block w-64 shrink-0">
        <div className="sticky top-24">
          <h2 className="text-lg font-semibold mb-4">Filters</h2>
          <FilterContent />
        </div>
      </aside>

      {/* Mobile filters */}
      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">
              <SlidersHorizontal className="h-4 w-4 mr-2" />
              Filters
              {hasActiveFilters && (
                <span className="ml-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                  {(selectedCategory !== "all" ? 1 : 0) + selectedColors.length + selectedMaterials.length}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] bg-background">
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>
            <div className="mt-6">
              <FilterContent />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}
