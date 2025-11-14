"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { BookOpen, Briefcase, Trophy, RotateCcw, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ResultsDisplayProps {
  career: string
  onRetake: () => void
}

const careerDetails: Record<
  string,
  {
    name: string
    icon: string
    description: string
    skills: string[]
    resources: Array<{ title: string; description: string }>
    salary: string
    growth: string
  }
> = {
  tech: {
    name: "Software Engineer / Tech Professional",
    icon: "💻",
    description: "Build innovative products, solve complex problems, and shape the future of technology.",
    skills: ["Programming", "Problem-solving", "System design", "Collaboration", "Continuous learning"],
    resources: [
      {
        title: "Coding Bootcamps",
        description: "Accelerated programs like Codecademy, freeCodeCamp, or Coursera",
      },
      {
        title: "Computer Science Degree",
        description: "Traditional 4-year degrees in CS or related fields",
      },
      {
        title: "Online Communities",
        description: "GitHub, Stack Overflow, and tech communities for networking",
      },
    ],
    salary: "$80K - $200K+",
    growth: "Very High - 13% projected growth",
  },
  healthcare: {
    name: "Healthcare Professional",
    icon: "⚕️",
    description: "Make a direct, meaningful impact on people's lives through healthcare and wellness.",
    skills: ["Empathy", "Communication", "Critical thinking", "Technical knowledge", "Teamwork"],
    resources: [
      {
        title: "Medical/Nursing Programs",
        description: "Specialized degree programs at universities",
      },
      {
        title: "Allied Health Certifications",
        description: "Programs for physical therapy, nursing, lab tech, and more",
      },
      {
        title: "Volunteer Experience",
        description: "Hospital volunteering and healthcare internships",
      },
    ],
    salary: "$50K - $250K+ (varies by specialty)",
    growth: "High - 16% projected growth",
  },
  creative: {
    name: "Creative Professional",
    icon: "🎨",
    description: "Express your creativity through design, art, music, film, or content creation.",
    skills: ["Creative thinking", "Visual communication", "Design tools", "Storytelling", "Originality"],
    resources: [
      {
        title: "Art & Design Schools",
        description: "Schools like RISD, Rhode Island School of Design, or comparable programs",
      },
      {
        title: "Online Portfolios",
        description: "Platforms like Behance, Dribbble to showcase your work",
      },
      {
        title: "Skill Development",
        description: "Learn software like Adobe Creative Suite, Figma, Cinema 4D",
      },
    ],
    salary: "$35K - $150K+ (project-based)",
    growth: "Moderate - Growing with digital media",
  },
  research: {
    name: "Researcher / Scientist",
    icon: "🔬",
    description: "Advance human knowledge and solve real-world problems through scientific research.",
    skills: ["Critical analysis", "Experimentation", "Data interpretation", "Attention to detail", "Published writing"],
    resources: [
      {
        title: "STEM Degrees",
        description: "Bachelor's, Master's, or PhD programs in science and engineering",
      },
      {
        title: "Research Internships",
        description: "University labs, research institutes, and government agencies",
      },
      {
        title: "Academic Journals",
        description: "Publication platforms like ResearchGate and academic conferences",
      },
    ],
    salary: "$60K - $180K+ (varies by field and level)",
    growth: "High - Critical for innovation",
  },
  business: {
    name: "Business Leader / Entrepreneur",
    icon: "📈",
    description: "Lead organizations, drive strategy, and create value for businesses and communities.",
    skills: ["Leadership", "Strategic thinking", "Financial acumen", "Communication", "Decision making"],
    resources: [
      {
        title: "Business Schools",
        description: "MBA programs and business degrees at universities",
      },
      {
        title: "Entrepreneurship Programs",
        description: "Accelerators like Y Combinator or startup incubators",
      },
      {
        title: "Business Mentorship",
        description: "Network with experienced entrepreneurs and leaders",
      },
    ],
    salary: "$70K - $300K+ (CEO salaries can exceed)",
    growth: "High - Always in demand",
  },
}

export default function ResultsDisplay({ career, onRetake }: ResultsDisplayProps) {
  const details = careerDetails[career]

  useEffect(() => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const now = audioContext.currentTime

    // Create ascending melody for celebration
    const notes = [523, 659, 784, 1047] // C, E, G, C (one octave higher)
    const duration = 0.3

    notes.forEach((frequency, index) => {
      const oscillator = audioContext.createOscillator()
      const gain = audioContext.createGain()

      oscillator.connect(gain)
      gain.connect(audioContext.destination)

      oscillator.frequency.value = frequency
      oscillator.type = "sine"

      gain.gain.setValueAtTime(0.3, now + index * duration)
      gain.gain.exponentialRampToValueAtTime(0.01, now + index * duration + duration)

      oscillator.start(now + index * duration)
      oscillator.stop(now + index * duration + duration)
    })
  }, [])

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-6xl md:text-8xl mb-6"
          >
            {details.icon}
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Your Perfect Match: <span className="text-primary">{details.name}</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{details.description}</p>
        </motion.div>

        {/* Key Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card className="p-6 bg-card border border-border hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Salary Range</h3>
              </div>
              <p className="text-2xl font-bold text-primary">{details.salary}</p>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Card className="p-6 bg-card border border-border hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Career Growth</h3>
              </div>
              <p className="text-lg font-semibold text-primary">{details.growth}</p>
            </Card>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6">Key Skills to Develop</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {details.skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="p-4 bg-muted rounded-lg border border-border hover:border-primary/30 transition-colors"
              >
                <p className="font-semibold text-foreground">{skill}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Resources */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary" />
            Learning Resources
          </h2>
          <div className="space-y-4">
            {details.resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all">
                  <h3 className="font-bold text-foreground mb-2">{resource.title}</h3>
                  <p className="text-muted-foreground">{resource.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center space-y-6"
        >
          <p className="text-lg text-muted-foreground">
            Ready to start learning or want to explore other career options?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg flex-1 sm:flex-none transition-all duration-300"
            >
              <Link href="/course">
                Go to Course
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            
            <Button 
              onClick={onRetake} 
              variant="outline"
              className="gap-2 px-8 py-6 text-lg flex-1 sm:flex-none border-2 border-primary/20 hover:border-primary hover:bg-primary/5 text-foreground transition-all duration-300"
            >
              <RotateCcw className="w-5 h-5" />
              Retake Survey
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}