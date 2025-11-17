"use client"
import { useState, useCallback, useEffect } from "react"
import { VideoPlayer } from "@/components/video-player"
import { QuizComponent } from "@/components/quiz"
import { EpisodeList } from "@/components/episode-list"
import { CourseCompletionScreen } from "@/components/course-completion-screen"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { sampleCourse, sampleQuiz, sampleQuiz2, sampleQuiz3 } from "@/lib/quiz-data"
import type { QuizResult, UserProgress, EpisodeProgress } from "@/lib/types"
import { ArrowLeft, Clock, Users, Award, Trophy } from 'lucide-react'
import Link from "next/link"
import { Moon, Sun } from 'lucide-react'
import Chatbot from "@/components/chatbot"

export default function CoursePage() {
  const [theme, setTheme] = useState<"light" | "dark">("dark")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const course = sampleCourse
  const [currentEpisodeId, setCurrentEpisodeId] = useState(course.episodes[0].id)
  const [videoProgress, setVideoProgress] = useState(0)
  const [videoCompleted, setVideoCompleted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState([])

  const [episodeProgress, setEpisodeProgress] = useState<Record<string, EpisodeProgress>>({
    "ep-1": {
      episodeId: "ep-1",
      videoWatched: false,
      videoProgress: 0,
      quizCompleted: false,
      quizScore: 0,
      pointsEarned: 0,
      isUnlocked: true,
    },
    "ep-2": {
      episodeId: "ep-2",
      videoWatched: false,
      videoProgress: 0,
      quizCompleted: false,
      quizScore: 0,
      pointsEarned: 0,
      isUnlocked: false,
    },
    "ep-3": {
      episodeId: "ep-3",
      videoWatched: false,
      videoProgress: 0,
      quizCompleted: false,
      quizScore: 0,
      pointsEarned: 0,
      isUnlocked: false,
    },
  })

  const [userProgress, setUserProgress] = useState<UserProgress>({
    userId: "user-1",
    courseId: course.id,
    totalPoints: 0,
    completedQuizzes: [],
    currentEpisodeId: course.episodes[0].id,
    episodeProgress,
  })

  const currentEpisode = course.episodes.find((ep) => ep.id === currentEpisodeId)
  const currentEpisodeProgress = episodeProgress[currentEpisodeId]
  const isVideoCompleted = currentEpisodeProgress?.videoWatched ?? false

  const allEpisodesCompleted = course.episodes.every((episode) => {
    const progress = episodeProgress[episode.id]
    return progress?.videoWatched && progress?.quizCompleted
  })

  const handleVideoProgress = useCallback(
    (progress: number) => {
      setVideoProgress(progress)
      setEpisodeProgress((prev) => ({
        ...prev,
        [currentEpisodeId]: {
          ...prev[currentEpisodeId],
          videoProgress: progress,
          videoWatched: progress >= 95,
        },
      }))
    },
    [currentEpisodeId],
  )

  const handleVideoComplete = useCallback(() => {
    setVideoCompleted(true)
    setEpisodeProgress((prev) => ({
      ...prev,
      [currentEpisodeId]: {
        ...prev[currentEpisodeId],
        videoWatched: true,
      },
    }))
  }, [currentEpisodeId])

  const handleQuizComplete = (result: QuizResult) => {
    const isPassed = result.score >= 7

    setEpisodeProgress((prev) => ({
      ...prev,
      [currentEpisodeId]: {
        ...prev[currentEpisodeId],
        quizCompleted: true,
        quizScore: result.score,
        pointsEarned: result.totalPoints,
      },
    }))

    setUserProgress((prev) => ({
      ...prev,
      totalPoints: prev.totalPoints + result.totalPoints,
      completedQuizzes: [...prev.completedQuizzes, result],
    }))

    setQuizCompleted(true)

    if (isPassed) {
      const currentEpisodeIndex = course.episodes.findIndex((ep) => ep.id === currentEpisodeId)
      if (currentEpisodeIndex < course.episodes.length - 1) {
        const nextEpisodeId = course.episodes[currentEpisodeIndex + 1].id
        setEpisodeProgress((prev) => ({
          ...prev,
          [nextEpisodeId]: {
            ...prev[nextEpisodeId],
            isUnlocked: true,
          },
        }))
      }
    }
  }

  const handleSelectEpisode = (episodeId: string) => {
    setCurrentEpisodeId(episodeId)
    setVideoProgress(0)
    setVideoCompleted(false)
    setQuizCompleted(false)
    setCurrentQuestion(0)
    setAnswers([])
  }

  const quizMap: Record<string, any> = {
    "ep-1": sampleQuiz,
    "ep-2": sampleQuiz2,
    "ep-3": sampleQuiz3,
  }

  const currentQuiz = quizMap[currentEpisodeId]

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  if (!currentQuiz) {
    return (
      <div className="min-h-screen bg-background dark:bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A]">
        <div className="bg-card dark:bg-slate-700 border-b border-border sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
            <Link href="/course" className="text-muted-foreground dark:text-slate-200 hover:text-foreground transition">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <h1 className="font-bold text-xl dark:text-white">Error Loading Quiz</h1>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 py-8">
          <Card className="p-6 text-center">
            <p className="text-red-600">Quiz data not found for this episode</p>
          </Card>
        </div>
      </div>
    )
  }

  if (allEpisodesCompleted) {
    return (
      <CourseCompletionScreen
        courseTitle={course.title}
        totalPoints={userProgress.totalPoints}
        instructor={course.instructor}
        duration={course.duration}
        onDownloadCertificate={() => {}}
      />
    )
  }

  if (!currentEpisode) {
    return <div>Episode not found</div>
  }

  if (!mounted) return null

  const isDark = theme === "dark"

  return (
    <div className="min-h-screen bg-background dark:bg-gradient-to-br  dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A]">
      <div className="bg-card dark:bg-slate-700 border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link href="/course" className="text-muted-foreground dark:text-slate-200 dark:hover:text-slate-300 hover:text-foreground transition">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div className="flex-1">
            <h1 className="font-bold text-xl dark:text-white">{course.title}</h1>
            <p className="text-sm text-muted-foreground dark:text-slate-200">by {course.instructor}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-purple-600">{userProgress.totalPoints}</div>
            <div className="text-xs text-muted-foreground dark:text-white">Total Points</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 ">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2 space-y-6">

            <div>
              <h2 className="font-semibold text-lg mb-3 dark:text-white">Episode: {currentEpisode.title}</h2>
              <VideoPlayer
                videoUrl={currentEpisode.videoUrl}
                title={currentEpisode.title}
                onVideoComplete={handleVideoComplete}
                onProgressChange={handleVideoProgress}
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-lg">Quiz</h2>
                <Badge variant={isVideoCompleted ? "default" : "secondary"}>
                  {isVideoCompleted ? "Siap Dikerjakan" : "Terkunci"}
                </Badge>
              </div>
              <QuizComponent quiz={currentQuiz} isLocked={!isVideoCompleted} onQuizComplete={handleQuizComplete} currentQuestion={currentQuestion} answers={answers} />
            </div>
          </div>

          <div className="space-y-4">
            <EpisodeList
              episodes={course.episodes}
              currentEpisodeId={currentEpisodeId}
              episodeProgress={episodeProgress}
              onSelectEpisode={handleSelectEpisode}
            />

            <Card className="p-6 space-y-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200 dark:border-purple-800">
              <div className="aspect-video bg-muted  rounded-lg overflow-hidden">
                <img
                  src={course.thumbnail || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground dark:text-slate-200 line-clamp-3">{course.description}</p>
                <div className="space-y-2 pt-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="dark:bg-primary dark:text-white">{course.level}</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-slate-300">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-slate-300">
                    <Users className="w-4 h-4" />
                    <span>by {course.instructor}</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200 dark:border-purple-800">
              <h3 className="font-semibold mb-4 flex items-center gap-2 dark:text-white">
                <Award className="w-5 h-5 text-purple-600" />
                Progress Anda
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground dark:text-slate-200 mb-1">Video Ditonton</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-full rounded-full transition-all ${
                        currentEpisodeProgress?.videoProgress >= 95 ? "bg-green-500" : "bg-yellow-500"
                      }`}
                      style={{ width: `${Math.min(currentEpisodeProgress?.videoProgress ?? 0, 100)}%` }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1 dark:text-slate-300">{Math.round(currentEpisodeProgress?.videoProgress ?? 0)}%</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 dark:text-slate-200">Quiz Diselesaikan</p>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-full rounded-full ${currentEpisodeProgress?.quizCompleted ? "bg-blue-500 w-full" : "w-0"}`}
                    />
                  </div>
                </div>
                <div className="pt-3 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-1 dark:text-slate-200">Total Poin Diperoleh</p>
                  <p className="text-2xl font-bold text-purple-600">{userProgress.totalPoints}</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-purple-200 dark:border-purple-800">
              <h4 className="font-semibold text-sm mb-2 dark:text-white flex items-center gap-2">
                <Trophy className="w-4 h-4" />
                Tentang Quiz
              </h4>
              <ul className="text-sm text-muted-foreground dark:text-slate-300 space-y-1">
                <li>• {currentQuiz?.questions?.length || 0} soal Pilihan Ganda</li>
                <li>• {currentQuiz?.pointsPerQuestion || 0} poin per soal</li>
                <li>• Total {(currentQuiz?.questions?.length || 0) * (currentQuiz?.pointsPerQuestion || 0)} poin</li>
                <li className="pt-2 text-foreground font-medium">• Min 7/10 untuk lanjut</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
       <Chatbot />
    </div>
  )
}
