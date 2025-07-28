export interface Feature {
  id: string
  title: string
  description: string
  icon: string
}

export interface PricingTier {
  id: string
  name: string
  price: number
  period: string
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface FAQ {
  id: string
  question: string
  answer: string
}
