"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Brain, Target, BarChart3, Zap, Users, Shield, Sparkles, TrendingUp } from "lucide-react"

const features = [
  {
    id: "1",
    title: "AI Content Generation",
    description: "Create compelling ad copy, social media posts, and email campaigns with our advanced AI engine.",
    icon: Brain,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: "2",
    title: "Smart Audience Targeting",
    description: "Identify and reach your ideal customers with precision using machine learning algorithms.",
    icon: Target,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: "3",
    title: "Real-time Analytics",
    description: "Track campaign performance with detailed insights and actionable recommendations.",
    icon: BarChart3,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: "4",
    title: "Automated Optimization",
    description: "Let AI continuously improve your campaigns for maximum ROI and engagement.",
    icon: Zap,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    id: "5",
    title: "Multi-Channel Management",
    description: "Manage all your marketing channels from one unified, intelligent dashboard.",
    icon: Users,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    id: "6",
    title: "Enterprise Security",
    description: "Bank-level security with SOC 2 compliance and advanced data protection.",
    icon: Shield,
    gradient: "from-red-500 to-pink-500",
  },
  {
    id: "7",
    title: "Predictive Insights",
    description: "Forecast trends and customer behavior to stay ahead of the competition.",
    icon: Sparkles,
    gradient: "from-teal-500 to-blue-500",
  },
  {
    id: "8",
    title: "Performance Scaling",
    description: "Scale your successful campaigns automatically across multiple platforms.",
    icon: TrendingUp,
    gradient: "from-orange-500 to-red-500",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
              Powerful Features for Modern Marketing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and optimize your marketing campaigns with the power of AI
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={feature.id} delay={index * 0.1}>
              <Card className="glass hover:scale-105 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
