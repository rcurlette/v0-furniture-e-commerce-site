import Link from "next/link"
import { ArrowRight } from "lucide-react"

const collections = [
  {
    name: "Sofas",
    description: "Sink into comfort",
    image: "/mid-century-modern-sofa-in-warm-living-room--lifes.jpg",
    href: "/products?category=sofas",
    productCount: 45,
  },
  {
    name: "Chairs",
    description: "Your favorite seat awaits",
    image: "/elegant-accent-chair-in-styled-room-corner--lifest.jpg",
    href: "/products?category=chairs",
    productCount: 62,
  },
  {
    name: "Tables",
    description: "Where memories gather",
    image: "/wooden-coffee-table-in-cozy-living-space--lifestyl.jpg",
    href: "/products?category=tables",
    productCount: 38,
  },
]

export function FeaturedCollections() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#424242] mb-4">Find Your Perfect Piece</h2>
          <p className="text-lg text-[#737373] max-w-2xl mx-auto">
            From statement sofas to accent chairs, discover furniture designed to transform any room into your
            sanctuary.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative overflow-hidden rounded-xl bg-white"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={collection.image || "/placeholder.svg"}
                  alt={`${collection.name} collection - ${collection.description}`}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#424242]/80 via-[#424242]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-white/70 mb-1">{collection.productCount} Products</p>
                <h3 className="font-serif text-2xl font-bold text-white mb-1">{collection.name}</h3>
                <p className="text-white/80 mb-3">{collection.description}</p>
                <span className="inline-flex items-center text-sm font-medium text-white group-hover:gap-2 transition-all">
                  Shop Now
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
