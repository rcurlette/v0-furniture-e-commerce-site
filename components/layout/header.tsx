"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingBag, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"

const navigation = [
  { name: "Sofas", href: "/products?category=sofas" },
  { name: "Chairs", href: "/products?category=chairs" },
  { name: "Tables", href: "/products?category=tables" },
  { name: "Bedroom", href: "/products?category=bedroom" },
  { name: "Inspiration", href: "/inspiration" },
  { name: "Pantone", href: "/collaborations/pantone", highlight: true },
]

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Mobile menu */}
            <div className="flex lg:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] bg-background">
                  <nav className="mt-8 flex flex-col gap-4">
                    {navigation.map((item) => (
                      <SheetClose asChild key={item.name}>
                        <Link
                          href={item.href}
                          className={`text-lg font-medium transition-colors ${
                            item.highlight ? "text-primary hover:text-primary/80" : "text-foreground hover:text-primary"
                          }`}
                        >
                          {item.name}
                          {item.highlight && (
                            <span className="ml-2 text-xs bg-primary text-primary-foreground px-1.5 py-0.5 rounded">
                              New
                            </span>
                          )}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>

            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="font-serif text-2xl font-bold tracking-tight text-foreground">Arinn</span>
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden lg:flex lg:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${
                    item.highlight
                      ? "text-primary hover:text-primary/80"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                  {item.highlight && (
                    <span className="text-[10px] bg-primary text-primary-foreground px-1.5 py-0.5 rounded">New</span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:flex">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </Button>
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-primary text-[10px] font-medium text-primary-foreground flex items-center justify-center">
                  2
                </span>
                <span className="sr-only">Cart</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {isSearchOpen && (
          <div className="border-t border-border py-4 px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search for sofas, chairs, tables..."
                  className="w-full rounded-md border border-input bg-background py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
