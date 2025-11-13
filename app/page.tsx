"use client"

import { ArrowRight, Play, Star, Users, BookOpen, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Master HTML, CSS, and JavaScript from scratch",
      level: "Beginner",
      students: "12.5K",
      rating: "4.9",
      price: "$49",
      image: "/web-development-course.png",
    },
    {
      id: 2,
      title: "Advanced React & Next.js",
      description: "Build modern full-stack applications with React and Next.js",
      level: "Advanced",
      students: "8.2K",
      rating: "4.8",
      price: "$79",
      image: "/react-nextjs-course.jpg",
    },
    {
      id: 3,
      title: "UI/UX Design Mastery",
      description: "Design beautiful and user-friendly interfaces",
      level: "Intermediate",
      students: "6.8K",
      rating: "4.9",
      price: "$59",
      image: "/ui-ux-design-course.png",
    },
  ]

  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with 10+ years experience",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Support",
      description: "Join thousands of learners and get help from mentors",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Career Growth",
      description: "Get certified and advance your tech career with job placement",
    },
  ]

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">LearnHub</div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#courses" className="text-foreground hover:text-primary transition">
              Courses
            </a>
            <a href="#features" className="text-foreground hover:text-primary transition">
              Features
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition">
              Pricing
            </a>
          </div>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign In</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-8 border border-accent/40">
          <span className="text-accent-foreground text-sm font-medium">✨ Enroll now and save 30%</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Master the Skills of Tomorrow
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance">
          Learn cutting-edge technologies from expert instructors. Get certified, build projects, and launch your tech
          career.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
            Explore Courses <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            <Play className="w-4 h-4" /> Watch Demo
          </Button>
        </div>
        <img
          src="/online-course-dashboard.png"
          alt="Platform showcase"
          className="rounded-lg border border-border shadow-lg"
        />
      </section>

      {/* Features Section */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center text-foreground mb-16">Why Choose LearnHub?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card key={feature.title} className="p-8 bg-card border-border hover:shadow-lg transition">
              <div className="text-primary mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-foreground mb-4">Popular Courses</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Choose from our carefully curated selection of courses designed to help you succeed
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden bg-card border-border hover:shadow-lg transition">
              <img src={course.image || "/placeholder.svg"} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-accent bg-accent/20 px-3 py-1 rounded-full">
                    {course.level}
                  </span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="text-sm font-medium text-foreground">{course.rating}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{course.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center gap-1 text-muted-foreground text-sm">
                    <Users className="w-4 h-4" />
                    {course.students} students
                  </div>
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                </div>
                <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                  Enroll Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="pricing" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Start Learning?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join 50,000+ students already learning on LearnHub. Start free today.
        </p>
        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
          Get Started Free <ArrowRight className="w-4 h-4" />
        </Button>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4">LearnHub</h4>
              <p className="text-sm text-muted-foreground">Empowering learners worldwide</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Courses
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Mobile App
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 LearnHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
