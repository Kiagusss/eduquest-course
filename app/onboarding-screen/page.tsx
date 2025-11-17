"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import OnboardingIntro from "@/components/onboarding-intro"
import CareerSurvey from "@/components/career-survey"
import ResultsDisplay from "@/components/results-display"

export default function Page() {
  const [step, setStep] = useState<"intro" | "survey" | "results">("intro")
  const [surveyAnswers, setSurveyAnswers] = useState<number[]>([])
  const [matchedCareer, setMatchedCareer] = useState<string>("")

  const handleStartSurvey = () => {
    setStep("survey")
  }

  const handleSurveyComplete = (answers: number[], career: string) => {
    setSurveyAnswers(answers)
    setMatchedCareer(career)
    playCelebrationSound()
    setStep("results")
  }

  const playCelebrationSound = () => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    const now = audioContext.currentTime

    const playNote = (frequency: number, duration: number, startTime: number) => {
      const osc = audioContext.createOscillator()
      const gain = audioContext.createGain()

      osc.connect(gain)
      gain.connect(audioContext.destination)

      osc.frequency.value = frequency
      osc.type = "sine"

      gain.gain.setValueAtTime(0.3, startTime)
      gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration)

      osc.start(startTime)
      osc.stop(startTime + duration)
    }

    const notes = [
      { freq: 523.25, duration: 0.15 },
      { freq: 659.25, duration: 0.15 },
      { freq: 783.99, duration: 0.15 },
      { freq: 1046.5, duration: 0.3 },
    ]

    let currentTime = now
    notes.forEach((note) => {
      playNote(note.freq, note.duration, currentTime)
      currentTime += note.duration + 0.05
    })
  }

  const handleRetake = () => {
    setSurveyAnswers([])
    setMatchedCareer("")
    setStep("survey")
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        {step === "intro" && <OnboardingIntro onStart={handleStartSurvey} />}
        {step === "survey" && <CareerSurvey onComplete={handleSurveyComplete} />}
        {step === "results" && <ResultsDisplay career={matchedCareer} onRetake={handleRetake} />}
      </motion.div>
    </main>
  )
}
