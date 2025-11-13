"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Target, GraduationCap, Gamepad, Brain } from "lucide-react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setIsClient(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const mouseFollowColor = theme === "light" ? "bg-primary/30" : "bg-muted/20"

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft animated background */}
        <div 
          className="absolute w-[500px] h-[500px] rounded-full bg-muted/40 blur-3xl animate-pulse"
          style={{ 
            top: "20%", 
            left: "10%", 
            animationDuration: "4s",
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-muted/30 blur-3xl animate-pulse"
          style={{ 
            bottom: "10%", 
            right: "15%", 
            animationDuration: "6s",
            animationDelay: "1s",
          }}
        />
        
        {/* Mouse-following gradient — only render on client */}
        {isClient && (
          <div 
            className={`absolute w-[300px] h-[300px] rounded-full blur-3xl transition-all duration-700 ease-out ${mouseFollowColor}`}
            style={{
              left: `${mousePosition.x - 150}px`,
              top: `${mousePosition.y - 150}px`,
            }}
          />
        )}
      </div>

      {/* Floating icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Target className="absolute text-muted-foreground/30 animate-float" style={{ top: "15%", left: "15%" }} size={40} />
        <Brain className="absolute text-muted-foreground/30 animate-float" style={{ top: "25%", right: "20%", animationDelay: "2s" }} size={35} />
        <Gamepad className="absolute text-muted-foreground/30 animate-float" style={{ bottom: "20%", left: "20%", animationDelay: "1s" }} size={30} />
        <GraduationCap className="absolute text-muted-foreground/30 animate-float" style={{ bottom: "30%", right: "15%", animationDelay: "1.5s" }} size={32} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            AI-Powered Career Discovery
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up text-balance">
          Find Your{" "}
          <span className="text-primary relative inline-block">
            Perfect Career
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 200 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10C50 5 150 5 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary" />
            </svg>
          </span>
          {" "}Path
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto animate-fade-in-up animate-delay-100 leading-relaxed">
          Stop guessing, start knowing. Our AI-powered assessment reveals your ideal career path, then guides you through engaging gamified courses to build the skills you need to succeed.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-200 mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            asChild
          >
            <a href="#survey">
              Discover Your Path
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary/20 text-foreground hover:bg-primary/5 hover:border-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm bg-transparent"
            asChild
          >
            <a href="#how-it-works">How It Works</a>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-fade-in-up animate-delay-300">
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Brain className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">AI Career Assessment</h3>
            <p className="text-sm text-muted-foreground">Personalized survey that matches you with ideal career paths</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Gamepad className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Gamified Learning</h3>
            <p className="text-sm text-muted-foreground">Earn points, level up, and unlock advanced courses through quizzes</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Structured Career Path</h3>
            <p className="text-sm text-muted-foreground">Clear roadmap from beginner to advanced in your chosen field</p>
          </div>
        </div>

        {/* Stats section */}
        <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground mt-12 animate-fade-in-up animate-delay-400">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>10,000+ Career Paths Discovered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.5s" }} />
            <span>95% User Satisfaction</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ animationDelay: "1s" }} />
            <span>Interactive Gamified Courses</span>
          </div>
        </div>
      </div>
    </section>
  )
}