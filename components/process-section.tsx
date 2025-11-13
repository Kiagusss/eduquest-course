"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Gamepad, Target, Rocket, ArrowRight, UserCheck, GraduationCap, Award } from "lucide-react"
import { Fragment } from "react"

const steps = [
  {
    icon: Brain,
    title: "AI Career Assessment",
    description: "Start with our intelligent personality and skills survey. Our AI analyzes your strengths, interests, and aspirations to recommend the perfect career paths tailored just for you.",
    number: "01",
  },
  {
    icon: Target,
    title: "Personalized Roadmap",
    description: "Receive a clear, step-by-step career plan showing exactly what skills to learn and in what order. Your customized roadmap guides you from beginner to career-ready professional.",
    number: "02",
  },
  {
    icon: Gamepad,
    title: "Gamified Learning",
    description: "Dive into interactive courses with engaging video lessons and fun quizzes. Earn points, unlock achievements, and level up as you master new skills in an enjoyable learning environment.",
    number: "03",
  },
  {
    icon: Rocket,
    title: "Career Launch",
    description: "Complete your learning journey with verified certificates and a portfolio of accomplishments. Get ready to confidently pursue your dream career with the skills employers are looking for.",
    number: "04",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            🎯 Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            From <span className="text-primary">Confusion</span> to <span className="text-primary">Career Ready</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            In four simple steps, we transform your career uncertainty into a clear path forward with engaging, gamified learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <Card
                className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background"
              >
                <div className="absolute top-0 right-0 text-[100px] font-bold bg-gradient-to-br from-primary/10 to-primary/5 bg-clip-text text-transparent leading-none p-4">
                  {step.number}
                </div>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-6">
                    <step.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:flex items-center justify-center absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${(index + 1) * 25 - 2}%` }}
                >
                  <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-semibold">
            <Award className="h-5 w-5" />
            Start Your Journey in Minutes
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Join thousands of young professionals who have discovered their ideal career path through our proven process.
          </p>
        </div>
      </div>
    </section>
  )
}