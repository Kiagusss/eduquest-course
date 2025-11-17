"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, Play, Download, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Moon, Sun, Trophy } from "lucide-react"
import { ShareDialog } from "@/components/share-dialog"
import Chatbot from "@/components/chatbot"

const coursesData = [
  {
    id: 1,
    title: "UI/UX Design Level Up with Prototyping",
    category: "UI/UX Design",
    image: "/ui.jpg",
    createdDate: "16 Jan 2025",
    sales: "$1,250",
    status: "Published",
    description:
      "Master the fundamentals of UI/UX design and learn advanced prototyping techniques. This comprehensive course covers everything from user research to final prototype presentation.",
    longDescription:
      "In this intensive course, you will learn the complete UX/UI design process from start to finish. We cover user research methodologies, wireframing techniques, visual design principles, and advanced prototyping in Figma. By the end of the course, you will have built a complete design system and interactive prototype.",
    instructor: "Sarah Johnson",
    duration: "7 days",
    difficulty: "Intermediate",
    episodes: ["Day 1. Design Fundamentals & User Research"],
  },
]

const difficultyColor = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-blue-100 text-blue-700",
  Advanced: "bg-red-100 text-red-700",
}

interface PageProps {
  params: Promise<{ id: string }>
}

export default function CourseDetailPage({ params }: PageProps) {
  const { id } = require("react").use(params)
  const course = coursesData.find((c) => c.id === Number.parseInt(id))
  const [expandedEpisode, setExpandedEpisode] = useState<number | null>(0)
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

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  if (!mounted) return null

  const isDark = theme === "dark"

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Course not found</h1>
          <Link href="/course">
            <Button className="bg-primary hover:bg-primary/90">Back to Courses</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background dark:bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A]">
      <div className="border-b border-border">
        <div className="px-8 py-6">
          <Link href="/course" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-4">
            <ChevronLeft className="h-5 w-5" />
            <span className="font-medium">Back to Courses</span>
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
            <div className="lg:col-span-2">
              <div className="flex items-start gap-3 mb-4">
                <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {course.category}
                </span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    difficultyColor[course.difficulty as keyof typeof difficultyColor]
                  }`}
                >
                  {course.difficulty}
                </span>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${
                    course.status === "Published" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
                  }`}
                >
                  {course.status}
                </span>
              </div>

              <h1 className="text-4xl font-bold text-foreground dark:text-white mb-4 text-balance">
                {course.title}
              </h1>

              <div className="w-full h-96 relative rounded-xl mb-6 overflow-hidden">
                <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
              </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2 dark:text-slate-200">About this course</h2>
                  <p className="text-muted-foreground leading-relaxed dark:text-slate-300">
                    {course.longDescription}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-6 dark:bg-slate-700 dark:border-slate-700">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground dark:text-slate-200">Instructor</p>
                    <p className="text-lg font-bold text-foreground dark:text-white">{course.instructor}</p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground dark:text-slate-200">Duration</p>
                    <p className="text-lg font-bold text-foreground dark:text-white">{course.duration}</p>
                  </div>

                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground dark:text-slate-200">Point</p>
                    <p className="text-lg font-bold text-foreground dark:text-white">{course.sales}</p>
                  </div>

                  <div className="border-t border-border pt-4 space-y-2">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">Buy By Your Point</Button>
                    <ShareDialog
                      title={course.title}
                      url={typeof window !== "undefined" ? window.location.href : ""}
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground dark:text-white">Course Content</h2>
            <span className="text-sm text-muted-foreground dark:text-slate-500 bg-muted px-3 py-1 rounded-full">
              {course.episodes.length} episodes
            </span>
          </div>

          <div className="space-y-3">
            {course.episodes.map((episode, index) => (
              <div key={index} className="border border-border dark:border-slate-700 rounded-lg overflow-hidden transition-all">
                <button
                  onClick={() => setExpandedEpisode(expandedEpisode === index ? null : index)}
                  className="w-full p-4 flex items-center justify-between hover:bg-muted dark:bg-slate-700 dark:hover:bg-slate-600 transition-colors text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 dark:bg-slate-800 text-primary font-bold">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-foreground dark:text-white">{episode}</p>
                      <p className="text-sm text-muted-foreground dark:text-slate-300">~45 minutes</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded font-medium">Video</span>
                    <svg
                      className={`w-5 h-5 text-muted-foreground dark:text-slate-200 transition-transform ${
                        expandedEpisode === index ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                </button>

                {expandedEpisode === index && (
                  <div className="border-t border-border dark:border-slate-500 p-4 bg-muted/50 dark:bg-slate-600 space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground dark:text-white mb-2">Learning objectives:</h4>
                      <ul className="text-sm text-muted-foreground dark:text-slate-200 space-y-1 list-disc list-inside">
                        <li>Understand key concepts and methodologies</li>
                        <li>Practice with real-world examples</li>
                        <li>Apply knowledge to your own projects</li>
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <Link
                        href={`/course/${course.id}/learn`}
                        className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded"
                      >
                        <Play className="h-4 w-4 mr-2" />
                        Watch
                      </Link>

                      <Button size="sm" variant="outline" className="dark:text-white">
                        <Download className="h-4 w-4 mr-2 dark:text-white" />
                        Resources
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
       <Chatbot />
    </div>
  )
}
