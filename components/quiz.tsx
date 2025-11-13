"use client"

import { useState } from "react"
import type { Quiz, QuizResult } from "@/lib/types"
import { Button } from "./ui/button"
import { Card } from "./ui/card"
import { CheckCircle, XCircle, ChevronRight, Lock } from "lucide-react"

interface QuizProps {
  quiz: Quiz
  isLocked: boolean
  onQuizComplete: (result: QuizResult) => void
  isEpisodeUnlocked?: boolean
}

export function QuizComponent({ quiz, isLocked, onQuizComplete, isEpisodeUnlocked }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<number[]>([])
  const [showResults, setShowResults] = useState(false)
  const [hasSubmitted, setHasSubmitted] = useState(false)

  const calculateScore = () => {
    let correct = 0
    answers.forEach((answer, index) => {
      if (answer === quiz.questions[index].correctAnswer) {
        correct++
      }
    })
    return {
      score: correct,
      totalPoints: correct * quiz.pointsPerQuestion,
    }
  }

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResults) return

    const newAnswers = [...answers]
    newAnswers[currentQuestion] = optionIndex
    setAnswers(newAnswers)
  }

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      const { score, totalPoints } = calculateScore()
      setShowResults(true)
      setHasSubmitted(true)

      console.log("[v0] Quiz submitted with score:", score, "out of", quiz.questions.length)

      onQuizComplete({
        quizId: quiz.id,
        episodeId: quiz.episodeId,
        score,
        totalPoints,
        answers,
        completedAt: new Date(),
      })
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const { score, totalPoints } = calculateScore()
  const question = quiz.questions[currentQuestion]
  const isAnswered = answers[currentQuestion] !== undefined
  const isPassed = score >= 7 // Show pass/fail status

  if (isLocked) {
    return (
      <Card className="p-6 text-center bg-muted/50 border-dashed">
        <div className="flex items-center justify-center gap-2 text-muted-foreground mb-2">
          <Lock className="w-5 h-5" />
          <p className="font-medium">Quiz Locked</p>
        </div>
        <p className="text-sm text-muted-foreground">Tonton video terlebih dahulu untuk mengakses quiz</p>
      </Card>
    )
  }

  if (showResults) {
    return (
      <div className="space-y-6">
        <Card
          className={`p-8 text-center bg-gradient-to-br border-2 transition-all ${
            isPassed
              ? "from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 border-green-200 dark:border-green-800"
              : "from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-200 dark:border-red-800"
          }`}
        >
          <h2
            className={`text-3xl font-bold mb-2 ${isPassed ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
          >
            Quiz {isPassed ? "Passed!" : "Failed"} {isPassed ? "✓" : "✗"}
          </h2>
          <p className="text-lg text-foreground mb-6">
            Nilai Anda:{" "}
            <span className={`font-bold text-2xl ${isPassed ? "text-green-600" : "text-red-600"}`}>{score}</span> /{" "}
            {quiz.questions.length}
          </p>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">+{totalPoints} Points</p>

          {isPassed && (
            <div className="mt-4 p-4 bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
              <p className="text-sm font-medium text-green-700 dark:text-green-400">
                🎉 Selamat! Episode berikutnya sudah terbuka. Lanjutkan pembelajaran Anda!
              </p>
            </div>
          )}

          {!isPassed && (
            <div className="mt-4 p-4 bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700 rounded-lg">
              <p className="text-sm font-medium text-red-700 dark:text-red-400">
                Butuh 7 poin untuk melanjutkan. Coba lagi atau review jawaban di bawah.
              </p>
            </div>
          )}
        </Card>

        {/* Review Answers */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Review Jawaban Anda</h3>
          {quiz.questions.map((q, index) => {
            const isCorrect = answers[index] === q.correctAnswer
            return (
              <Card key={q.id} className="p-4">
                <div className="flex items-start gap-3">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium mb-2">
                      {index + 1}. {q.question}
                    </p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Jawaban Anda:{" "}
                      <span className={isCorrect ? "text-green-600" : "text-red-600"}>{q.options[answers[index]]}</span>
                    </p>
                    {!isCorrect && (
                      <p className="text-sm text-green-600">Jawaban Benar: {q.options[q.correctAnswer]}</p>
                    )}
                    {q.explanation && <p className="text-sm text-muted-foreground mt-2 italic">{q.explanation}</p>}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="font-medium">
            Pertanyaan {currentQuestion + 1} dari {quiz.questions.length}
          </span>
          <span className="text-muted-foreground">
            {Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}%
          </span>
        </div>
        <div className="w-full bg-muted rounded-full h-2">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-full transition-all rounded-full"
            style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <Card className="p-6 border-2 border-border">
        <h3 className="text-lg font-semibold mb-6 text-foreground">{question.question}</h3>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, index) => {
            const isSelected = answers[currentQuestion] === index
            const isCorrect = index === question.correctAnswer
            const showCorrect = showResults && isCorrect
            const showIncorrect = showResults && isSelected && !isCorrect

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showResults}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  isSelected
                    ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20"
                    : "border-border hover:border-purple-300"
                } disabled:cursor-not-allowed`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? "border-purple-500 bg-purple-500" : "border-border"
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className="flex-1">{option}</span>
                  {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                  {showIncorrect && <XCircle className="w-5 h-5 text-red-600" />}
                </div>
              </button>
            )
          })}
        </div>
      </Card>

      {/* Navigation */}
      <div className="flex gap-3">
        <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
          ← Sebelumnya
        </Button>
        <div className="flex-1" />
        <Button
          onClick={handleNext}
          disabled={!isAnswered}
          className="gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          {currentQuestion === quiz.questions.length - 1 ? "Selesaikan Quiz" : "Lanjut"}
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
