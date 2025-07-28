"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Check, Star } from "lucide-react"
import type { PricingTier } from "../../types"
import { formatPrice } from "../../lib/utils"

const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    name: "Starter",
    price: 29,
    period: "month",
    description: "Perfect for small businesses and startups",
    features: [
      "AI Content Generation (100 pieces/month)",
      "Basic Analytics Dashboard",
      "Email Support",
      "2 Marketing Channels",
      "Standard Templates",
      "Basic Audience Insights",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "professional",
    name: "Professional",
    price: 99,
    period: "month",
    description: "Ideal for growing businesses and marketing teams",
    features: [
      "AI Content Generation (500 pieces/month)",
      "Advanced Analytics & Reporting",
      "Priority Support",
      "10 Marketing Channels",
      "Custom Templates",
      "Advanced Audience Targeting",
      "A/B Testing",
      "Campaign Automation",
      "Team Collaboration (5 users)",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 299,
    period: "month",
    description: "For large organizations with advanced needs",
    features: [
      "Unlimited AI Content Generation",
      "Custom Analytics & White-label Reports",
      "Dedicated Account Manager",
      "Unlimited Marketing Channels",
      "Custom AI Model Training",
      "Advanced Predictive Analytics",
      "Multi-brand Management",
      "API Access",
      "Unlimited Team Members",
      "Custom Integrations",
      "SOC 2 Compliance",
    ],
    cta: "Contact Sales",
  },
]

export function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include a 14-day free trial.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <ScrollReveal key={tier.id} delay={index * 0.2}>
              <Card
                className={`relative hover:scale-105 transition-all duration-300 ${
                  tier.popular ? "ring-2 ring-purple-500 shadow-2xl" : "shadow-lg"
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge variant="gradient" className="px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-5xl font-bold gradient-text">{formatPrice(tier.price)}</span>
                    <span className="text-gray-600">/{tier.period}</span>
                  </div>
                  <p className="text-gray-600">{tier.description}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant={tier.popular ? "gradient" : "outline"} size="lg" className="w-full">
                    {tier.cta}
                  </Button>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">
              Need a custom solution? We offer enterprise packages tailored to your specific needs.
            </p>
            <Button variant="ghost" size="lg">
              Contact our sales team →
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
