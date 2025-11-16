"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, Play, Download, Share2, BookOpen } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import { Moon, Sun, Trophy } from 'lucide-react'
import { ShareDialog } from "@/components/share-dialog"

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
    episodes: [
      "Day 1. Design Fundamentals & User Research",
      "Day 2. Wireframing & Information Architecture",
      "Day 3. Visual Design & Design Systems",
      "Day 4. Prototyping with Figma",
      "Day 5. User Testing & Iteration",
      "Day 6. Advanced Interactions",
      "Day 7. Final Project Presentation",
    ],
  },
  {
    id: 2,
    title: "Graphic Design Masterclass using Adobe Illustration",
    category: "Graphic Design",
    image: "/graphic-design-concept.png",
    createdDate: "14 Jan 2025",
    sales: "$1,000",
    status: "Unpublished",
    description:
      "Learn professional graphic design techniques using Adobe Creative Suite. Create stunning visual assets for any project.",
    longDescription:
      "This masterclass teaches you everything you need to know about graphic design using Adobe Illustrator and Photoshop. From basic vector drawing to complex composition, you will master the tools and techniques used by professional designers worldwide.",
    instructor: "Michael Chen",
    duration: "8 days",
    difficulty: "Intermediate",
    episodes: [
      "Day 1. Adobe Illustrator Basics",
      "Day 2. Vector Drawing & Shapes",
      "Day 3. Typography & Text Effects",
      "Day 4. Color Theory & Composition",
      "Day 5. Logo Design",
      "Day 6. Branding & Identity Design",
      "Day 7. Printing & Export",
      "Day 8. Portfolio Project",
    ],
  },
  {
    id: 3,
    title: "Fundamental 2D Animation Using Jitter",
    category: "Animation",
    image: "/2d-animation.jpg",
    createdDate: "13 Jan 2025",
    sales: "$950",
    status: "Published",
    description: "Create stunning 2D animations with industry-standard tools.",
    longDescription:
      "Master the art of 2D animation using professional animation software. Learn animation principles, character design, rigging, and motion graphics to create professional animations.",
    instructor: "Emily Rodriguez",
    duration: "7 days",
    difficulty: "Beginner",
    episodes: [
      "Day 1. Animation Principles & History",
      "Day 2. Frame-by-Frame Animation",
      "Day 3. Character Design for Animation",
      "Day 4. Rigging & Skeletal Animation",
      "Day 5. Motion Graphics",
      "Day 6. Sound & Timing",
      "Day 7. Final Animation Project",
    ],
  },
  {
    id: 4,
    title: "Web Development Full Stack",
    category: "Web Development",
    image: "/web-development-concept.png",
    createdDate: "12 Jan 2025",
    sales: "$1,500",
    status: "Published",
    description: "Build complete web applications from frontend to backend.",
    longDescription:
      "Become a full-stack web developer. Learn HTML, CSS, JavaScript, React on the frontend, and Node.js, databases on the backend. Build real-world applications and deploy them to production.",
    instructor: "David Park",
    duration: "9 days",
    difficulty: "Advanced",
    episodes: [
      "Day 1. HTML & CSS Fundamentals",
      "Day 2. JavaScript Basics",
      "Day 3. React & Components",
      "Day 4. State Management",
      "Day 5. Backend & Node.js",
      "Day 6. Database & SQL",
      "Day 7. Authentication & Security",
      "Day 8. Deployment & DevOps",
      "Day 9. Final Full-Stack Project",
    ],
  },
  {
    id: 5,
    title: "Branding & Identity Design",
    category: "Branding",
    image: "/branding.jpg",
    createdDate: "11 Jan 2025",
    sales: "$800",
    status: "Published",
    description: "Create comprehensive brand identities that resonate with audiences.",
    longDescription:
      "Learn how to create powerful brand identities that tell a story. From brand strategy to visual design, we cover all aspects of building memorable brands.",
    instructor: "Jessica Smith",
    duration: "7 days",
    difficulty: "Intermediate",
    episodes: [
      "Day 1. Brand Strategy & Research",
      "Day 2. Brand Positioning",
      "Day 3. Logo Design Process",
      "Day 4. Color Palettes & Typography",
      "Day 5. Brand Guidelines",
      "Day 6. Marketing Collateral",
      "Day 7. Digital Brand Assets",
    ],
  },
  {
    id: 6,
    title: "Advanced UI/UX Design Patterns",
    category: "UI/UX Design",
    image: "/ui-ux.jpg",
    createdDate: "10 Jan 2025",
    sales: "$1,100",
    status: "Published",
    description: "Explore advanced design patterns and best practices in modern UI/UX.",
    longDescription:
      "Master advanced UI/UX design patterns used in modern applications. Learn from real-world examples and implement patterns that improve user experience and engagement.",
    instructor: "Alex Thompson",
    duration: "7 days",
    difficulty: "Advanced",
    episodes: [
      "Day 1. Design Patterns Overview",
      "Day 2. Navigation Patterns",
      "Day 3. Form Design Patterns",
      "Day 4. Mobile UI Patterns",
      "Day 5. Accessibility in UI Design",
      "Day 6. Responsive Design",
      "Day 7. Design Systems at Scale",
    ],
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
            {/* Main Content */}
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

              <h1 className="text-4xl font-bold text-foreground dark:text-white mb-4 text-balance">{course.title}</h1>
                <div className="w-full h-96 relative rounded-xl mb-6 overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>

              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-foreground mb-2 dark:text-slate-200">About this course</h2>
                  <p className="text-muted-foreground leading-relaxed dark:text-slate-300">{course.longDescription}</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 ">
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
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white">
                      Buy By Your Point
                    </Button>
                    <ShareDialog 
                      title={course.title}
                      url={typeof window !== 'undefined' ? window.location.href : ''}
                    />
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Episodes Section */}
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
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
                      <Link href={`/course/${course.id}/learn`} className="inline-flex items-center bg-primary hover:bg-primary/90 text-white px-3 py-1 rounded">
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
    </div>
  )
}
