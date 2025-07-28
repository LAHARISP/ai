import { Card, CardContent } from "./card"
import { Star, User } from "lucide-react"
import type { Testimonial } from "../../types"

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card className="glass hover:scale-105 transition-all duration-300 border-white/20">
      <CardContent className="p-6">
        <div className="flex items-center gap-1 mb-4">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-gray-700 mb-4 italic">{testimonial.content}</p>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-gray-900">{testimonial.name}</p>
            <p className="text-sm text-gray-600">
              {testimonial.role} at {testimonial.company}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
