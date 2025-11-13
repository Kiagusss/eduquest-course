"use client"

import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "I was completely lost about my career direction until I took the AI assessment. The personalized roadmap showed me exactly what skills to learn, and the gamified courses made learning actually fun!",
    name: "Sarah Chen",
    role: "Software Developer",
    rating: 5,
  },
  {
    quote:
      "The gamification aspect kept me motivated throughout my learning journey. Earning points and unlocking achievements made me want to complete more courses. I landed my dream job in digital marketing thanks to this platform!",
    name: "Marcus Rodriguez",
    role: "Digital Marketing Specialist",
    rating: 5,
  },
  {
    quote:
      "As a recent graduate, I had no idea where to start. The AI career assessment matched me with UX design, and the structured courses gave me the confidence to build a portfolio that impressed employers.",
    name: "Jessica Williams",
    role: "UX Designer",
    rating: 5,
  },
  {
    quote:
      "The combination of AI guidance and engaging learning format is brilliant. I went from career confusion to having multiple job offers in just 3 months. The progress tracking kept me accountable.",
    name: "Alex Thompson",
    role: "Data Analyst",
    rating: 5,
  },
  {
    quote:
      "I tried several career guidance platforms, but this one actually worked. The personalized roadmap was spot-on, and the community support made me feel like I wasn't alone in my journey.",
    name: "Priya Patel",
    role: "Product Manager",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
          />
        ))}
      </div>
    )
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            ⭐ Success Stories
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Transforming Careers, <span className="text-primary">One Story at a Time</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Join thousands of young professionals who have found clarity, built skills, and launched successful careers through our platform.
          </p>
        </div>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {/* Duplicate testimonials for seamless loop */}
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg bg-background/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  {renderStars(testimonial.rating)}
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
            <div className="text-muted-foreground">Careers Transformed</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Career Fields</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-muted-foreground">User Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}