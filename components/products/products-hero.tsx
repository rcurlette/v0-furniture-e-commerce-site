interface ProductsHeroProps {
  title?: string
  description?: string
}

export function ProductsHero({
  title = "Shop All Furniture",
  description = "Discover our complete collection of handcrafted furniture designed for modern living.",
}: ProductsHeroProps) {
  return (
    <section className="bg-muted/50 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>
    </section>
  )
}
