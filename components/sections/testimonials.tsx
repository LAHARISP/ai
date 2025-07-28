"use client"

import { TestimonialCard } from "@/components/ui/testimonial-card"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import type { Testimonial } from "@/types"

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    content:
      "ADmyBRAND AI has transformed our marketing strategy. We've seen a 300% increase in engagement and our campaigns are more targeted than ever.",
    avatar: "",
    rating: 5,
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    content:
      "The AI-powered content generation is incredible. What used to take our team hours now takes minutes, and the quality is consistently high.",
    avatar: "",
    rating: 5,
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    role: "Growth Manager",
    company: "E-commerce Plus",
    content:
      "The predictive analytics feature helped us identify new market opportunities we never would have found manually. ROI increased by 250%.",
    avatar: "",
    rating: 5,
  },
  {
    id: "4",
    name: "David Thompson",
    role: "Marketing Manager",
    company: "RetailCo",
    content:
      "Customer targeting has never been this precise. We're reaching exactly the right people at the right time with the right message.",
    avatar: "",
    rating: 5,
  },
  {
    id: "5",
    name: "Lisa Wang",
    role: "CMO",
    company: "FinanceFlow",
    content:
      "The automation features have freed up our team to focus on strategy while AI handles the execution. It's like having a marketing team that never sleeps.",
    avatar: "",
    rating: 5,
  },
  {
    id: "6",
    name: "James Miller",
    role: "Digital Marketing Lead",
    company: "HealthTech",
    content:
      "Multi-channel management is seamless. We can now coordinate campaigns across all platforms from one dashboard. Game-changer!",
    avatar: "",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Trusted by Marketing Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers are saying about their experience with ADmyBRAND AI Suite
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} delay={index * 0.1}>
              <TestimonialCard testimonial={testimonial} />
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">10,000+</div>
                <div className="text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">250%</div>
                <div className="text-sm">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">4.9/5</div>
                <div className="text-sm">Customer Rating</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
