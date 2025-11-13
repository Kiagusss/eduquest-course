"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Sparkles, Target, Users, Rocket, Heart } from "lucide-react"

const values = [
  { 
    title: "Personalized Guidance", 
    description: "AI-powered career assessments that provide tailored recommendations based on your unique strengths and interests" 
  },
  { 
    title: "Gamified Learning", 
    description: "Engaging educational experience with points, levels, and achievements that make skill-building fun and addictive" 
  },
  { 
    title: "Proven Results", 
    description: "Structured career paths that have helped thousands of young professionals find their direction and succeed" 
  },
  { 
    title: "Student-First Approach", 
    description: "Your career goals and learning preferences always come first in our platform design and content" 
  },
  { 
    title: "Future-Ready Skills", 
    description: "Courses designed to prepare you for tomorrow's job market with relevant, in-demand competencies" 
  },
  { 
    title: "Continuous Support", 
    description: "Ongoing guidance and community support throughout your career discovery and skill development journey" 
  },
]

const stats = [
  { number: "10,000+", label: "Career Paths Discovered" },
  { number: "95%", label: "User Satisfaction Rate" },
  { number: "50+", label: "Career Fields Available" },
  { number: "24/7", label: "Platform Access" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <Sparkles className="h-4 w-4" />
            About Eduquest
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Transforming Career{" "}
            <span className="text-primary relative">
              Confusion into Clarity
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                <path d="M0 4C50 2 150 6 200 4" stroke="currentColor" strokeWidth="2" className="text-primary" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            We believe every young professional deserves a clear path to success. Our AI-powered platform combines 
            personalized career assessment with engaging gamified learning to help you discover your perfect career 
            and build the skills needed to thrive in it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group bg-background/50 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="border-none shadow-lg bg-gradient-to-br from-primary/5 to-primary/10">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Target className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To eliminate career confusion among young professionals by providing AI-powered guidance and 
                gamified learning experiences that make career discovery engaging, effective, and accessible to everyone.
              </p>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg bg-gradient-to-br from-primary/10 to-primary/5">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <Rocket className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                A world where every individual can easily discover their ideal career path and acquire the skills 
                needed to build a fulfilling professional life, regardless of their background or starting point.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group cursor-default">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold">
            <Heart className="h-5 w-5" />
            Ready to start your career journey?
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Join thousands of young professionals who have found their path with our AI-powered career guidance platform.
          </p>
        </div>
      </div>
    </section>
  )
}