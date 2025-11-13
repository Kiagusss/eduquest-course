"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ChevronRight, ChevronLeft } from "lucide-react"

interface CareerSurveyProps {
  onComplete: (answers: number[], career: string) => void
}

const questions = [
  {
    id: 1,
    question: "How do you prefer to spend your free time?",
    options: [
      "Building things / DIY projects",
      "Helping others / volunteering",
      "Creating art / music / content",
      "Analyzing problems and data",
      "Leading teams / organizing events",
    ],
  },
  {
    id: 2,
    question: "What environment do you thrive in?",
    options: [
      "Structured and organized",
      "Collaborative and dynamic",
      "Creative and experimental",
      "Quiet and focused",
      "Fast-paced and challenging",
    ],
  },
  {
    id: 3,
    question: "What motivates you most?",
    options: [
      "Building and creating",
      "Helping people",
      "Expressing creativity",
      "Solving complex problems",
      "Making an impact",
    ],
  },
  {
    id: 4,
    question: "What are your strongest skills?",
    options: [
      "Technical / Engineering",
      "Communication / Empathy",
      "Artistic / Design",
      "Analytical / Research",
      "Leadership / Strategy",
    ],
  },
  {
    id: 5,
    question: "What type of work appeals to you?",
    options: [
      "Building products / technology",
      "Educating / mentoring",
      "Creating experiences",
      "Researching / discovering",
      "Organizing / managing",
    ],
  },
]

const careerPaths = [
  {
    id: "tech",
    name: "Software Engineer / Tech",
    color: "from-accent to-primary",
    description: "Build cutting-edge products and solve complex technical challenges",
    icon: "💻",
  },
  {
    id: "healthcare",
    name: "Healthcare Professional",
    color: "from-primary to-accent",
    description: "Make a direct impact on people's lives through healthcare",
    icon: "⚕️",
  },
  {
    id: "creative",
    name: "Creative Professional",
    color: "from-accent via-primary to-accent",
    description: "Express your creativity through design, art, or entertainment",
    icon: "🎨",
  },
  {
    id: "research",
    name: "Researcher / Scientist",
    color: "from-primary to-accent",
    description: "Advance human knowledge through research and discovery",
    icon: "🔬",
  },
  {
    id: "business",
    name: "Business Leader",
    color: "from-accent to-primary",
    description: "Lead organizations and shape the future of industries",
    icon: "📈",
  },
]

export default function CareerSurvey({ onComplete }: CareerSurveyProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

  const handleSelectAnswer = (index: number) => {
    setSelectedAnswer(index)
  }

  const handleNext = () => {
    if (selectedAnswer !== null) {
      const newAnswers = [...answers, selectedAnswer]
      setAnswers(newAnswers)

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
      } else {
        // Calculate matched career
        const scores: Record<string, number> = {
          tech: 0,
          healthcare: 0,
          creative: 0,
          research: 0,
          business: 0,
        }

        // Simple scoring algorithm based on answers
        newAnswers.forEach((answer, index) => {
          if (index === 0) {
            if (answer === 0) scores.tech += 2
            if (answer === 1) scores.healthcare += 2
            if (answer === 2) scores.creative += 2
            if (answer === 3) scores.research += 2
            if (answer === 4) scores.business += 2
          } else if (index === 1) {
            if (answer === 0) scores.business += 1
            if (answer === 1) scores.business += 2
            if (answer === 2) scores.creative += 2
            if (answer === 3) scores.tech += 2
            if (answer === 4) scores.tech += 1
          } else if (index === 2) {
            if (answer === 0) scores.tech += 2
            if (answer === 1) scores.healthcare += 2
            if (answer === 2) scores.creative += 2
            if (answer === 3) scores.research += 2
            if (answer === 4) scores.business += 1
          } else if (index === 3) {
            if (answer === 0) scores.tech += 2
            if (answer === 1) scores.healthcare += 2
            if (answer === 2) scores.creative += 2
            if (answer === 3) scores.research += 2
            if (answer === 4) scores.business += 2
          } else if (index === 4) {
            if (answer === 0) scores.tech += 2
            if (answer === 1) scores.healthcare += 2
            if (answer === 2) scores.creative += 2
            if (answer === 3) scores.research += 2
            if (answer === 4) scores.business += 2
          }
        })

        const matchedId = Object.entries(scores).sort(([, a], [, b]) => b - a)[0][0]
        onComplete(newAnswers, matchedId)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
      setAnswers(answers.slice(0, -1))
      setSelectedAnswer(answers[currentQuestion - 1])
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-semibold text-muted-foreground">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-semibold text-primary">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-balance">
              {questions[currentQuestion].question}
            </h2>

            {/* Options */}
            <div className="space-y-3 mb-8">
              {questions[currentQuestion].options.map((option, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleSelectAnswer(index)}
                  className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left font-medium ${
                    selectedAnswer === index
                      ? "border-primary bg-primary/10 text-foreground"
                      : "border-border hover:border-primary/50 text-foreground"
                  }`}
                >
                  {option}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex gap-4 justify-between">
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant="outline"
            className="gap-2 bg-transparent"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>

          <Button
            onClick={handleNext}
            disabled={selectedAnswer === null}
            className="gap-2 bg-primary hover:bg-primary/90"
          >
            {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
