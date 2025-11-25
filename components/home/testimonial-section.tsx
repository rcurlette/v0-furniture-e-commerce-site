import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "We spent 3 months searching for the perfect sofa. The Lewis sectional was worth every day of the wait—it's been 2 years and it still looks brand new.",
    author: "Sarah & Michael T.",
    location: "Portland, OR",
    product: "Lewis Sectional in Moss Velvet",
    rating: 5,
  },
  {
    quote:
      "The quality is unreal. I've had my Soto chair for 5 years through two moves and a toddler. Still my favorite spot in the house.",
    author: "Jennifer R.",
    location: "Austin, TX",
    product: "Soto Chair in Cognac Leather",
    rating: 5,
  },
  {
    quote:
      "Free design consultation was a game-changer. They helped me pick fabrics that work with my kids and dogs. Finally, a beautiful home I can actually live in.",
    author: "David & Lisa K.",
    location: "Brooklyn, NY",
    product: "Custom Living Room Set",
    rating: 5,
  },
]

export function TestimonialSection() {
  return (
    <section className="py-16 lg:py-24 bg-[#A47148]/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[#A47148] text-[#A47148]" />
            ))}
          </div>
          <p className="text-sm font-medium text-[#A47148] mb-2">4.9 out of 5 based on 12,847 reviews</p>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#424242]">
            Loved by Thousands of Happy Homes
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 relative shadow-sm">
              <div className="flex gap-0.5 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-[#A47148] text-[#A47148]" />
                ))}
              </div>
              <blockquote className="text-lg text-[#424242] mb-6 leading-relaxed">"{testimonial.quote}"</blockquote>
              <div>
                <p className="font-semibold text-[#424242]">{testimonial.author}</p>
                <p className="text-sm text-[#737373]">{testimonial.location}</p>
                <p className="text-sm text-[#A47148] mt-1">{testimonial.product}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
