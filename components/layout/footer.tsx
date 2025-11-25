import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const footerLinks = {
  shop: [
    { name: "Sofas", href: "/products?category=sofas" },
    { name: "Chairs", href: "/products?category=chairs" },
    { name: "Tables", href: "/products?category=tables" },
    { name: "Bedroom", href: "/products?category=bedroom" },
    { name: "All Products", href: "/products" },
  ],
  company: [
    { name: "Our Story", href: "/about" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Careers", href: "/careers" },
    { name: "Press", href: "/press" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faqs" },
    { name: "Shipping & Returns", href: "/shipping" },
    { name: "Warranty", href: "/warranty" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="font-serif text-2xl font-bold tracking-tight mb-2">Arinn</h3>
            <p className="text-xs text-background/50 italic mb-3">From the Old Norse word for "hearth"</p>
            <p className="text-sm text-background/70 mb-4">
              Join our gathering. Get early access to new collections, styling inspiration, and member-only offers
              delivered to your hearth.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
              />
              <Button variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-background/70 hover:text-background transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">© 2025 Arinn. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-sm text-background/60 hover:text-background">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-background/60 hover:text-background">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
