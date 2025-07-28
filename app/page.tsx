import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Pricing } from "@/components/sections/pricing"
import { Testimonials } from "@/components/sections/testimonials"
import { FaqSection } from "@/components/sections/faq"
import { ContactForm } from "@/components/forms/contact-form"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FaqSection />
      <ContactForm />
      <Footer />
    </main>
  )
}
