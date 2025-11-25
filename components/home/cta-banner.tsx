import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/elegant-living-room-interior-with-sunlight--lifest.jpg"
          alt="Sunlit living room with Arinn furniture"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-[#3D3427]/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-white/70 mb-4">The Arinn Promise</p>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
          Furniture worthy of your family's story
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          Like the Viking arinn that warmed homes for generations, our furniture is built to become part of your
          family's legacy. 365-day trial. Lifetime frame warranty. Free white-glove delivery.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" className="bg-white text-[#424242] hover:bg-white/90" asChild>
            <Link href="/products">
              Begin Your Story
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 bg-transparent"
            asChild
          >
            <Link href="/about">Our Heritage</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
