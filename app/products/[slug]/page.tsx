import { notFound } from "next/navigation"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { ProductImageGallery } from "@/components/product-detail/product-image-gallery"
import { ProductInfo } from "@/components/product-detail/product-info"
import { RelatedProducts } from "@/components/product-detail/related-products"
import { products } from "@/lib/products-data"

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  // Get related products from the same category
  const relatedProducts = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)

  // Gallery images (for demo, using the same image multiple times)
  const galleryImages = [
    product.image,
    product.hoverImage || product.image,
    product.image,
    product.hoverImage || product.image,
  ]

  // Enhanced product with additional details
  const enhancedProduct = {
    ...product,
    description:
      "Experience the perfect blend of mid-century modern design and contemporary comfort. Handcrafted by skilled artisans using premium materials, this piece is built to last for generations. The thoughtful design features clean lines, tapered legs, and carefully selected upholstery that brings warmth and sophistication to any space.",
    dimensions: '84" W × 36" D × 32" H',
    care: "Clean with a soft, damp cloth. Avoid harsh chemicals and direct sunlight. For upholstered pieces, vacuum regularly using the soft brush attachment. Blot spills immediately with a clean cloth. Professional cleaning recommended annually.",
    shipping:
      "Free standard shipping on all orders over $999. Your piece will be delivered within 2-4 weeks. White-glove delivery service is available for $199, which includes room placement and packaging removal. Assembly is included with white-glove delivery.",
  }

  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <ProductImageGallery images={galleryImages} productName={product.name} />
            <ProductInfo product={enhancedProduct} />
          </div>
        </div>

        <RelatedProducts products={relatedProducts} />
      </main>
      <Footer />
    </>
  )
}
