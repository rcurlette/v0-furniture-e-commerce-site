import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CollaborationHero } from "@/components/collaborations/collaboration-hero"
import { ColorStory } from "@/components/collaborations/color-story"
import { CollaborationCatalog } from "@/components/collaborations/collaboration-catalog"
import { FabricShowcase } from "@/components/collaborations/fabric-showcase"
import { CollaborationCta } from "@/components/collaborations/collaboration-cta"
import { QuoteBanner } from "@/components/collaborations/quote-banner"
import { FullWidthLookbook } from "@/components/collaborations/full-width-lookbook"
import { ColorBlockBanner } from "@/components/collaborations/color-block-banner"
import { TwoSquaresBanner } from "@/components/collaborations/two-squares-banner"
import { SplitImageBanner } from "@/components/collaborations/split-image-banner"
import { FullBleedBanner } from "@/components/collaborations/full-bleed-banner"

export default function PantoneCollaborationPage() {
  return (
    <>
      <Header />
      <main>
        <CollaborationHero />

        <ColorStory />

        <TwoSquaresBanner
          leftImage="/elegant-living-room-mocha-brown-velvet-sofa-warm-l.jpg"
          leftImageAlt="Living room with Mocha Mousse sofa"
          rightTitle="Embrace the Warmth of Mocha Mousse"
          rightSubtitle="2025 Color of the Year"
          rightDescription="Inspired by the comforting essence of chocolate and coffee, Mocha Mousse brings a sense of warmth and sophistication to any space."
          rightCtaText="Shop Mocha Mousse"
          rightCtaLink="#catalog"
          backgroundColor="#A47148"
        />

        <QuoteBanner
          quote="Color is a powerful tool for self-expression. This collection invites you to create a home that truly reflects who you are."
          author="Laurie Pressman"
          role="Vice President, Pantone Color Institute"
          backgroundColor="#A47148"
        />

        <ColorBlockBanner />

        <SplitImageBanner
          title="Shop by Room"
          subtitle="Inspiration"
          images={[
            {
              src: "/cozy-living-room-mocha-brown-sofa-warm-lighting-pl.jpg",
              alt: "Living Room",
              title: "Living Room",
              link: "/products?category=sofas",
            },
            {
              src: "/modern-bedroom-deep-blue-velvet-headboard-warm-lig.jpg",
              alt: "Bedroom",
              title: "Bedroom",
              link: "/products?category=beds",
            },
          ]}
        />

        <CollaborationCatalog />

        <TwoSquaresBanner
          leftImage="/serene-bedroom-deep-blue-velvet-bed-white-linens-n.jpg"
          leftImageAlt="Bedroom with Tapestry blue bed"
          rightTitle="Deep Meditative Blues"
          rightSubtitle="Tapestry Collection"
          rightDescription="PANTONE 18-4417 Tapestry offers a deep, sophisticated blue that evokes timeless elegance. Perfect for creating a serene sanctuary."
          rightCtaText="Shop Tapestry"
          rightCtaLink="#catalog"
          backgroundColor="#3D5A73"
          reverse={true}
        />

        <FabricShowcase />

        <FullBleedBanner
          image="/reading-nook-dusty-rose-armchair-bookshelf-warm-am.jpg"
          imageAlt="Cozy reading nook with Heather Rose chair"
          title="Create Your Perfect Retreat"
          subtitle="Heather Rose Collection"
          description="An antique-inspired floral hue that adds a touch of romantic elegance to any space."
          ctaText="Shop Heather Rose"
          ctaLink="#catalog"
          align="left"
          overlay="dark"
        />

        <FullWidthLookbook
          title="Room Inspiration"
          subtitle="Style Guide"
          items={[
            {
              image: "/cozy-living-room-mocha-brown-sofa-warm-lighting-pl.jpg",
              alt: "Modern Living Room",
              title: "Modern Living Room",
              link: "/inspiration",
            },
            {
              image: "/serene-bedroom-deep-blue-velvet-bed-white-linens-n.jpg",
              alt: "Serene Bedroom",
              title: "Serene Bedroom",
              link: "/inspiration",
            },
            {
              image: "/cozy-reading-nook-dusty-rose-armchair-bookshelf-wa.jpg",
              alt: "Cozy Reading Nook",
              title: "Cozy Reading Nook",
              link: "/inspiration",
            },
          ]}
        />

        <QuoteBanner
          quote="The beauty of this collection lies in its versatility. Each piece is designed to be mixed and matched, creating endless possibilities for personal expression."
          author="Design Team"
          role="Nordic Home Studios"
          backgroundColor="#3D5A73"
        />

        <CollaborationCta />
      </main>
      <Footer />
    </>
  )
}
