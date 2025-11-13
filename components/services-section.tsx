"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Gamepad, Target, GraduationCap, TrendingUp, Users, Rocket, Award, BarChart3, Clock, Shield, Zap } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Career Assessment",
    description: "Take our intelligent personality and skills survey powered by advanced AI. Get personalized career recommendations that match your strengths, interests, and aspirations perfectly.",
  },
  {
    icon: Gamepad,
    title: "Gamified Learning",
    description: "Learn through interactive courses with video lessons and fun quizzes. Earn points, unlock achievements, and level up as you progress through your personalized learning journey.",
  },
  {
    icon: Target,
    title: "Personalized Career Roadmap",
    description: "Receive a clear, step-by-step career path tailored just for you. Know exactly what skills to learn and in what order to reach your career goals efficiently.",
  },
  {
    icon: GraduationCap,
    title: "Structured Courses",
    description: "Access carefully curated courses that progress from beginner to advanced levels. Each course builds on previous knowledge with engaging video content and practical exercises.",
  },
  {
    icon: TrendingUp,
    title: "Progress Tracking",
    description: "Monitor your learning journey with detailed analytics. Track your skill development, course completion, and career readiness as you advance through the program.",
  },
  {
    icon: Users,
    title: "Career Community",
    description: "Connect with peers on similar career paths. Share experiences, get support, and network with other young professionals building their futures.",
  },
  {
    icon: Rocket,
    title: "Skill Development",
    description: "Build in-demand skills that employers are looking for. Our courses focus on practical, real-world abilities that prepare you for today's job market.",
  },
  {
    icon: Award,
    title: "Achievement System",
    description: "Earn badges and certificates as you master new skills. Showcase your accomplishments to potential employers and build a portfolio of verified competencies.",
  },
  {
    icon: BarChart3,
    title: "Career Analytics",
    description: "Get insights into job market trends and salary expectations for your chosen career path. Make informed decisions about your professional future.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Learn at your own pace, anytime, anywhere. Our platform adapts to your schedule, allowing you to balance education with other commitments.",
  },
  {
    icon: Shield,
    title: "Career Confidence",
    description: "Gain the confidence to pursue your dream career. Our guided approach ensures you're always moving forward with clarity and purpose.",
  },
  {
    icon: Zap,
    title: "Rapid Skill Acquisition",
    description: "Accelerate your learning with our optimized curriculum. Focus on what matters most and avoid wasting time on irrelevant content.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto">
            🚀 Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
            Everything You Need to <span className="text-primary">Launch Your Career</span>
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
            From career discovery to skill mastery - we provide the complete toolkit to transform your potential into a successful career path.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 