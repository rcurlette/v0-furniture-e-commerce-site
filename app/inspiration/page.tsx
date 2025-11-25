import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { InspirationHero } from "@/components/inspiration/inspiration-hero"
import { InspirationGallery } from "@/components/inspiration/inspiration-gallery"
import { InspirationCta } from "@/components/inspiration/inspiration-cta"

export default function InspirationPage() {
  return (
    <>
      <Header />
      <main>
        <InspirationHero />
        <section className="py-12 lg:py-16 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <InspirationGallery />
          </div>
        </section>
        <InspirationCta />
      </main>
      <Footer />
    </>
  )
}
