"use client"
import { useState } from "react"
import { Plus, Grid3x3, List } from "lucide-react"
import CourseFilters from "@/components/course-filters"
import CourseCard from "@/components/course-card"
import Image from "next/image"
import Link from "next/link"

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

  const filteredCourses =
    selectedCategory === "All Category"
      ? dataCourse
      : dataCourse.filter((course) => course.category === selectedCategory)

  return (
    <div className="flex-1 p-8 bg-gradient-to-br from-white via-blue-50 to-purple-50">

      <div className="mt-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Courses</h1>
            <p className="text-muted-foreground mt-1">Create and manage courses in your school.</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white hover:opacity-90 transition-opacity font-medium">
            <Plus className="w-5 h-5" />
            New Course
          </button>
        </div>

        <CourseFilters selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

        <div className="flex items-center justify-between mb-6">
          <span className="text-sm text-muted-foreground">{filteredCourses.length} courses</span>
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
              className={`p-2 rounded-lg transition-colors ${
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
          <div className="space-y-4">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-lg border border-border p-4 hover:shadow-lg transition-shadow"
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
                    <Link href={'/course/detail/' + course.id} className="font-semibold text-foreground">{course.title}</Link>
                    <p className="text-sm text-muted-foreground mt-1">{course.category}</p>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div>
                      <p className="text-muted-foreground">Creation Date</p>
                      <p className="font-medium text-foreground">{course.creationDate}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Sales</p>
                      <p className="font-medium text-foreground">{course.sales}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Status</p>
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
