import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroBanner() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 py-12 lg:py-20 items-center">
          {/* Content - Viking hearth-inspired messaging */}
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-widest text-[#A47148] mb-4">The Modern Hearth</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#424242] leading-tight text-balance mb-6">
              Where families gather, stories begin
            </h1>
            <p className="text-lg text-[#737373] mb-8 max-w-lg leading-relaxed">
              Inspired by the ancient Viking arinn—the sacred hearth at the center of every home. We craft furniture
              that brings people together, built to witness generations of memories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#A47148] hover:bg-[#8B6240] text-white" asChild>
                <Link href="/products">
                  Explore the Collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#A47148] text-[#A47148] hover:bg-[#A47148]/10 bg-transparent"
                asChild
              >
                <Link href="/inspiration">Find Inspiration</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 mt-8 pt-8 border-t border-[#E5E5E5]">
              <div className="text-sm">
                <p className="font-semibold text-[#424242]">365-Day Home Trial</p>
                <p className="text-[#737373]">Live with it, love it</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-[#424242]">Heirloom Warranty</p>
                <p className="text-[#737373]">Built for generations</p>
              </div>
              <div className="text-sm">
                <p className="font-semibold text-[#424242]">White-Glove Delivery</p>
                <p className="text-[#737373]">Placed with care</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden rounded-2xl bg-[#F5F0EA]">
              <img
                src="/modern-living-room-with-mid-century-sofa-in-warm-e.jpg"
                alt="Modern living room featuring a velvet sofa in warm earth tones with wooden coffee table"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
