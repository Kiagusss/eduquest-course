"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Target, Gamepad, Brain } from "lucide-react"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { motion, Variants } from "framer-motion"

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

  // Framer Motion variants dengan tipe yang tepat
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const drawUnderline: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut", delay: 1 },
        opacity: { duration: 0.3 }
      }
    }
  }

  const featureCardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.8,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Keep your original background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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

      {/* Main Content with Framer Motion */}
      <motion.div 
        className="container mx-auto text-center max-w-5xl relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">
            AI-Powered Career Discovery
          </span>
        </motion.div>

        {/* Main Heading with Draw Underline */}
        <motion.h1 
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 text-balance"
        >
          Find Your{" "}
          <span className="text-primary relative inline-block">
            Perfect Career
            <svg 
              className="absolute -bottom-2 left-0 w-full" 
              height="12" 
              viewBox="0 0 200 12" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path 
                d="M2 10C50 5 150 5 198 10" 
                stroke="currentColor" 
                strokeWidth="3" 
                strokeLinecap="round" 
                className="text-primary"
                variants={drawUnderline}
                initial="hidden"
                animate="visible"
              />
            </svg>
          </span>
          {" "}Path
        </motion.h1>

      
        <motion.p 
          variants={itemVariants}
          className="text-xl sm:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Stop guessing, start knowing. Our AI-powered assessment reveals your ideal career path, then guides you through engaging gamified courses to build the skills you need to succeed.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg group shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all"
            asChild
          >
            <a href="/login">
              Discover Your Path
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          
        <Button 
          size="lg" 
  variant="outline" 
  className="border-2 border-primary/20 text-foreground hover:text-primary font-semibold px-8 py-6 text-lg backdrop-blur-sm transition-all"
  asChild
>
  <a href="#process">How It Works</a>
</Button>

        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {[
            { icon: Brain, title: "AI Career Assessment", description: "Personalized survey that matches you with ideal career paths" },
            { icon: Gamepad, title: "Gamified Learning", description: "Earn points, level up, and unlock advanced courses through quizzes" },
            { icon: Target, title: "Structured Career Path", description: "Clear roadmap from beginner to advanced in your chosen field" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={featureCardVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center text-center p-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
        >
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
        </motion.div>
      </motion.div>
    </section>
  )
}