import Hero from "@/components/hero/hero"
import Stats from "@/components/sections/stats"
import FeaturedProducts from "@/components/sections/featured-products"
import WhyChooseUs from "@/components/sections/why-choose-us"
import ServicesTeaser from "@/components/sections/services-teaser"
import CTABanner from "@/components/sections/cta-banner"

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Stats */}
      <Stats />

      {/* Featured Products */}
      <FeaturedProducts />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Services Teaser */}
      <ServicesTeaser />

      {/* CTA */}
      <CTABanner
        title="Ready to Equip Your Dialysis Centre?"
        description="Get competitive wholesale pricing on genuine dialysis equipment. Reach out for a custom quote."
        primaryLabel="Enquire Now"
        primaryHref="/contact"
        secondaryLabel="WhatsApp Us"
        secondaryHref="https://wa.me/919826593932"
      />
    </>
  )
}
