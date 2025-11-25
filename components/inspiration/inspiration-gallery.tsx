"use client"

import { useState, useMemo } from "react"
import { InspirationFilters } from "./inspiration-filters"
import { InspirationCard } from "./inspiration-card"
import { inspirationImages } from "@/lib/inspiration-data"

export function InspirationGallery() {
  const [selectedRoom, setSelectedRoom] = useState("All Rooms")
  const [selectedStyle, setSelectedStyle] = useState("All Styles")
  const [selectedColor, setSelectedColor] = useState("All Colors")
  const [selectedMaterial, setSelectedMaterial] = useState("All Materials")

  const filteredImages = useMemo(() => {
    return inspirationImages.filter((image) => {
      const roomMatch = selectedRoom === "All Rooms" || image.room === selectedRoom
      const styleMatch = selectedStyle === "All Styles" || image.style === selectedStyle
      const colorMatch = selectedColor === "All Colors" || image.color === selectedColor
      const materialMatch = selectedMaterial === "All Materials" || image.material === selectedMaterial
      return roomMatch && styleMatch && colorMatch && materialMatch
    })
  }, [selectedRoom, selectedStyle, selectedColor, selectedMaterial])

  const activeFiltersCount = [selectedRoom, selectedStyle, selectedColor, selectedMaterial].filter(
    (f) => !f.startsWith("All"),
  ).length

  return (
    <div className="space-y-8">
      <InspirationFilters
        selectedRoom={selectedRoom}
        selectedStyle={selectedStyle}
        selectedColor={selectedColor}
        selectedMaterial={selectedMaterial}
        onRoomChange={setSelectedRoom}
        onStyleChange={setSelectedStyle}
        onColorChange={setSelectedColor}
        onMaterialChange={setSelectedMaterial}
      />

      {/* Results count */}
      <div className="text-center">
        <p className="text-sm text-[#6B6B6B]">
          Showing {filteredImages.length} {filteredImages.length === 1 ? "photo" : "photos"}
          {activeFiltersCount > 0 && (
            <button
              onClick={() => {
                setSelectedRoom("All Rooms")
                setSelectedStyle("All Styles")
                setSelectedColor("All Colors")
                setSelectedMaterial("All Materials")
              }}
              className="ml-2 text-[#A47148] hover:underline"
            >
              Clear filters
            </button>
          )}
        </p>
      </div>

      {filteredImages.length > 0 ? (
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <InspirationCard key={image.id} image={image} index={index} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg text-[#6B6B6B]">No inspiration found matching your filters.</p>
          <button
            onClick={() => {
              setSelectedRoom("All Rooms")
              setSelectedStyle("All Styles")
              setSelectedColor("All Colors")
              setSelectedMaterial("All Materials")
            }}
            className="mt-4 text-[#A47148] hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  )
}
