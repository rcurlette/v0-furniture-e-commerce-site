import Link from "next/link"
import { Button } from "@/components/ui/button"

const lifestyleImages = [
  {
    src: "/cozy-bedroom-with-wooden-bed-frame-and-warm-textil.jpg",
    alt: "Cozy bedroom featuring a walnut bed frame with linen bedding",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/modern-dining-room-with-elegant-table-setting--lif.jpg",
    alt: "Modern dining room with oak table and upholstered chairs",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/reading-nook-with-comfortable-armchair-and-bookshe.jpg",
    alt: "Cozy reading nook with leather armchair and floor lamp",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/bright-living-room-with-sectional-sofa-and-plants-.jpg",
    alt: "Bright living room with sectional sofa and indoor plants",
    span: "col-span-2 row-span-1 lg:col-span-1 lg:row-span-2",
  },
]

export function LifestyleGallery() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#424242] mb-2">Your Hearth, Your Story</h2>
            <p className="text-lg text-[#737373]">Real homes where families gather. Share yours with #MyArinn</p>
          </div>
          <Button
            variant="outline"
            className="border-[#A47148] text-[#A47148] hover:bg-[#A47148]/10 bg-transparent"
            asChild
          >
            <Link href="/inspiration">View All Inspiration</Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {lifestyleImages.map((image, index) => (
            <div key={index} className={`${image.span} relative overflow-hidden rounded-xl group cursor-pointer`}>
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="object-cover w-full h-full min-h-[200px] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#424242]/0 group-hover:bg-[#424242]/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
