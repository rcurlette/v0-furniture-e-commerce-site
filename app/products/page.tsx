import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductsHero } from "@/components/products/products-hero"
import { ProductGrid } from "@/components/products/product-grid"

export default function ProductsPage() {
  return (
    <>
      <Header />
      <main>
        <ProductsHero />
        <section className="py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <ProductGrid />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
