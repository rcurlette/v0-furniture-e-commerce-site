import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera } from "lucide-react"

export function InspirationCta() {
  return (
    <section className="py-16 lg:py-24 bg-[#FAF7F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm uppercase tracking-widest text-[#A47148] mb-4 font-medium">Share Your Space</p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#424242] mb-6">
              Your hearth. Your story.
            </h2>
            <p className="text-lg text-[#6B6B6B] mb-6 leading-relaxed">
              We love seeing how you&apos;ve made Arinn furniture the center of your home. Share your space using
              <span className="text-[#A47148] font-medium"> #MyArinn</span> for a chance to be featured and inspire
              others.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#A47148] hover:bg-[#8B5E3C]" asChild>
                <Link href="/products">
                  Shop All Furniture
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#A47148] text-[#A47148] hover:bg-[#A47148] hover:text-white bg-transparent"
                asChild
              >
                <Link href="#">
                  <Camera className="mr-2 h-4 w-4" />
                  Submit Your Photo
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Customer home featuring Arinn furniture"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Customer bedroom with Arinn bed"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=300&width=300"
                    alt="Customer dining room with Arinn chairs"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-xl">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Customer reading nook with Arinn chair"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
