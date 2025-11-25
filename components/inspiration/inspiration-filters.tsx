"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { rooms, styles, colors, materials } from "@/lib/inspiration-data"

interface InspirationFiltersProps {
  selectedRoom: string
  selectedStyle: string
  selectedColor: string
  selectedMaterial: string
  onRoomChange: (room: string) => void
  onStyleChange: (style: string) => void
  onColorChange: (color: string) => void
  onMaterialChange: (material: string) => void
}

export function InspirationFilters({
  selectedRoom,
  selectedStyle,
  selectedColor,
  selectedMaterial,
  onRoomChange,
  onStyleChange,
  onColorChange,
  onMaterialChange,
}: InspirationFiltersProps) {
  return (
    <div className="space-y-6">
      {/* Material Pills */}
      <div className="flex flex-wrap gap-2 justify-center">
        {materials.map((material) => (
          <Button
            key={material}
            variant={selectedMaterial === material ? "default" : "outline"}
            size="sm"
            onClick={() => onMaterialChange(material)}
            className={
              selectedMaterial === material
                ? "bg-[#A47148] hover:bg-[#8B5E3C] border-[#A47148]"
                : "border-[#D4C4B5] text-[#424242] hover:border-[#A47148] hover:text-[#A47148]"
            }
          >
            {material}
          </Button>
        ))}
      </div>

      {/* Color Swatches */}
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <span className="text-sm text-[#6B6B6B] mr-2">Color:</span>
        {colors.map((color) => {
          const colorMap: Record<string, string> = {
            "All Colors":
              "linear-gradient(135deg, #f5f5f5 25%, #e0e0e0 25%, #e0e0e0 50%, #f5f5f5 50%, #f5f5f5 75%, #e0e0e0 75%)",
            Blush: "#E8C4C4",
            Teal: "#2D6A6A",
            Rust: "#B7472A",
            Green: "#4A5D4A",
            Gray: "#8B8B8B",
            Brown: "#8B6B4D",
            Olive: "#6B7B4C",
            Navy: "#2C3E5A",
            Pink: "#D4A5A5",
            Yellow: "#D4B857",
            Beige: "#C9B99A",
            Charcoal: "#3D3D3D",
            Blue: "#6B9AC4",
            Rose: "#C4A5B0",
            Tan: "#C4A77D",
          }
          const bgStyle =
            color === "All Colors"
              ? { background: colorMap[color], backgroundSize: "8px 8px" }
              : { backgroundColor: colorMap[color] || "#ccc" }

          return (
            <button
              key={color}
              onClick={() => onColorChange(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
                selectedColor === color
                  ? "border-[#424242] ring-2 ring-offset-2 ring-[#A47148]"
                  : "border-white shadow-sm hover:scale-110"
              }`}
              style={bgStyle}
              title={color}
            />
          )
        })}
      </div>

      {/* Room and Style Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        {/* Room tabs - Desktop */}
        <div className="hidden lg:flex flex-wrap gap-2">
          {rooms.map((room) => (
            <Button
              key={room}
              variant={selectedRoom === room ? "default" : "ghost"}
              size="sm"
              onClick={() => onRoomChange(room)}
              className={
                selectedRoom === room
                  ? "bg-[#424242] hover:bg-[#333]"
                  : "text-[#6B6B6B] hover:text-[#424242] hover:bg-[#FAF7F2]"
              }
            >
              {room}
            </Button>
          ))}
        </div>

        {/* Mobile/Tablet select for room */}
        <div className="lg:hidden">
          <Select value={selectedRoom} onValueChange={onRoomChange}>
            <SelectTrigger className="w-[160px] border-[#D4C4B5]">
              <SelectValue placeholder="Room" />
            </SelectTrigger>
            <SelectContent>
              {rooms.map((room) => (
                <SelectItem key={room} value={room}>
                  {room}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Style select */}
        <Select value={selectedStyle} onValueChange={onStyleChange}>
          <SelectTrigger className="w-[180px] border-[#D4C4B5]">
            <SelectValue placeholder="Style" />
          </SelectTrigger>
          <SelectContent>
            {styles.map((style) => (
              <SelectItem key={style} value={style}>
                {style}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}
