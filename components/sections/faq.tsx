"use client"

import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    id: "1",
    question: "What is ADmyBRAND AI Suite?",
    answer:
      "ADmyBRAND AI Suite is a comprehensive marketing platform that uses artificial intelligence to help businesses create, optimize, and scale their marketing campaigns across multiple channels.",
  },
  {
    id: "2",
    question: "How does the AI content generation work?",
    answer:
      "Our AI analyzes your brand voice, target audience, and campaign goals to generate high-quality content including ad copy, social media posts, email campaigns, and more. The AI learns from your feedback to improve over time.",
  },
  {
    id: "3",
    question: "Can I integrate ADmyBRAND with my existing tools?",
    answer:
      "Yes! ADmyBRAND integrates with over 100+ popular marketing tools including Google Ads, Facebook Ads, HubSpot, Salesforce, Mailchimp, and many more through our robust API and native integrations.",
  },
  {
    id: "4",
    question: "Is there a free trial available?",
    answer:
      "Absolutely! We offer a 14-day free trial with full access to all features. No credit card required to start, and you can cancel anytime during the trial period.",
  },
  {
    id: "5",
    question: "How secure is my data?",
    answer:
      "We take security seriously. ADmyBRAND is SOC 2 compliant with bank-level encryption, regular security audits, and strict data privacy policies. Your data is never shared with third parties.",
  },
  {
    id: "6",
    question: "What kind of support do you provide?",
    answer:
      "We offer 24/7 email support for all plans, priority support for Professional plans, and dedicated account managers for Enterprise customers. We also have extensive documentation and video tutorials.",
  },
  {
    id: "7",
    question: "Can I change my plan anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments on your next invoice.",
  },
  {
    id: "8",
    question: "Do you offer custom AI model training?",
    answer:
      "Yes, our Enterprise plan includes custom AI model training tailored to your specific industry, brand voice, and marketing objectives for maximum performance and relevance.",
  },
]

export function FaqSection() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (id: string) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about ADmyBRAND AI Suite
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.id} delay={index * 0.1}>
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openItems.includes(faq.id) ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openItems.includes(faq.id) && (
                    <div className="px-6 pb-6">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-4">Still have questions? We're here to help!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="text-purple-600 hover:text-purple-700 font-medium">Contact Support →</button>
              <button className="text-purple-600 hover:text-purple-700 font-medium">Schedule a Demo →</button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
