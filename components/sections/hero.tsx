"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { Play, ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800" />

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <ScrollReveal>
            <Badge variant="gradient" className="mb-6 text-sm px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              New: AI-Powered Marketing Suite 2025
            </Badge>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Marketing with{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                AI Intelligence
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              ADmyBRAND AI Suite revolutionizes your marketing strategy with cutting-edge artificial intelligence.
              Create, optimize, and scale your campaigns like never before.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.6}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button
                variant="default"
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent border-2"
              >
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.8}>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Hero Image/Video Placeholder */}
        <ScrollReveal delay={1.0}>
          <div className="mt-16 relative">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto border-white/30">
              <div className="aspect-video bg-gradient-to-br from-blue-900/50 to-purple-900/50 rounded-xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
                <div className="text-center text-white relative z-10">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg font-semibold">Interactive Product Demo</p>
                  <p className="text-sm opacity-70">See ADmyBRAND AI in action</p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
