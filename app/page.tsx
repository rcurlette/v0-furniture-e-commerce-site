import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { HeroBanner } from "@/components/home/hero-banner"
import { FeaturedCollections } from "@/components/home/featured-collections"
import { LifestyleGallery } from "@/components/home/lifestyle-gallery"
import { TestimonialSection } from "@/components/home/testimonial-section"
import { CtaBanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <FeaturedCollections />
        <LifestyleGallery />
        <TestimonialSection />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
