"use client"
import { useState, useEffect } from "react"
import { Plus, Grid3x3, List } from "lucide-react"
import CourseFilters from "@/components/course-filters"
import CourseCard from "@/components/course-card"
import Image from "next/image"
import Link from "next/link"
import { Moon, Sun, Trophy } from "lucide-react"

const dataCourse = [
  {
    id: 1,
    title: "UI/UX Design Level Up with Prototyping",
    category: "UI/UX Design",
    image: "/ui.jpg",
    creationDate: "16 Jan 2025",
    sales: "$1,250",
    status: "Published",
  },
  {
    id: 2,
    title: "Graphic Design Masterclass using Adobe Illustration",
    category: "Graphic Design",
    image: "/design-graph.jpg",
    creationDate: "14 Jan 2025",
    sales: "$1,000",
    status: "Unpublished",
  },
  {
    id: 3,
    title: "Fundamental 2D Animation Using Jitter",
    category: "Animation",
    image: "/animation.jpg",
    creationDate: "13 Jan 2025",
    sales: "$950",
    status: "Published",
  },
  {
    id: 4,
    title: "Web Development Fundamentals with React",
    category: "Web Development",
    image: "/web-development.jpeg",
    creationDate: "12 Jan 2025",
    sales: "$1,500",
    status: "Published",
  },
  {
    id: 5,
    title: "Branding Strategy for Startups",
    category: "Branding",
    image: "/branding.jpg",
    creationDate: "11 Jan 2025",
    sales: "$800",
    status: "Unpublished",
  },
  {
    id: 6,
    title: "UI/UX Design Advanced Techniques",
    category: "UI/UX Design",
    image: "/ui-ux.jpg",
    creationDate: "10 Jan 2025",
    sales: "$1,200",
    status: "Published",
  },
]

export default function CourseDashboard() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("All Category")

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
    
  
  const filteredCourses =
    selectedCategory === "All Category"
      ? dataCourse
      : dataCourse.filter((course) => course.category === selectedCategory)

  return (
    <div className="flex-1 p-8 bg-gradient-to-br   dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-white via-blue-50 to-purple-50">
    <button
            onClick={toggleTheme}
            className={`flex-none p-2 sm:p-3 rounded-lg transition-all duration-300 border ${
              isDark
                ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-[#06B6D4]"
                : "bg-slate-100 border-slate-300 hover:bg-slate-200 text-[#8B5CF6]"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
          </button>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground dark:text-white">Courses</h1>
            <p className="text-muted-foreground mt-1 dark:text-slate-300">Belajar dengan semangat bersama kami.</p>
          </div>
          
        </div>

        <CourseFilters selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-muted-foreground dark:text-slate-300">{filteredCourses.length} courses</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewType("grid")}
              className={`p-2 rounded-lg transition-colors ${
                viewType === "grid" ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <Grid3x3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewType("list")}
              className={`p-2 rounded-lg transition-colors hidden md:block ${
                viewType === "list" ? "bg-primary text-white" : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {viewType === "grid" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="space-y-2 hidden md:block">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-[#06B6D4]/50 rounded-lg border border-border dark:border-slate-400 p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-24 h-16 flex-shrink-0">
                    <Image
                      src={course.image}
                      alt={course.title}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <Link href={'/course/' + course.id} className="font-semibold text-foreground dark:text-white hover:text-primary">{course.title}</Link>
                    <p className="text-sm text-muted-foreground dark:text-slate-300 mt-1">{course.category}</p>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <p className="text-muted-foreground dark:text-slate-200">Creation Date</p>
                      <p className="font-medium text-foreground dark:text-slate-300">{course.creationDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground dark:text-slate-200">Sales</p>
                      <p className="font-medium text-foreground dark:text-slate-300">{course.sales}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground dark:text-slate-200">Status</p>
                      <p
                        className={`font-medium ${
                          course.status === "Published" ? "text-green-600" : "text-orange-600"
                        }`}
                      >
                        {course.status}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
