"use client"

import { Star, Users, Clock } from "lucide-react"
import { useState } from "react"

const courses = [
  {
    id: 1,
    title: "Web Development Masterclass",
    category: "Development",
    level: "Beginner",
    students: 2500,
    rating: 4.9,
    duration: "12 weeks",
    image: "bg-gradient-to-br from-[#8B5CF6]/30 to-[#06B6D4]/30",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    category: "Design",
    level: "Intermediate",
    students: 1800,
    rating: 4.8,
    duration: "8 weeks",
    image: "bg-gradient-to-br from-[#06B6D4]/30 to-[#8B5CF6]/30",
  },
  {
    id: 3,
    title: "Mobile App Development",
    category: "Development",
    level: "Advanced",
    students: 1200,
    rating: 4.7,
    duration: "16 weeks",
    image: "bg-gradient-to-br from-[#8B5CF6]/20 to-purple-400/20",
  },
  {
    id: 4,
    title: "Data Science Essentials",
    category: "Data",
    level: "Intermediate",
    students: 3100,
    rating: 4.9,
    duration: "14 weeks",
    image: "bg-gradient-to-br from-[#06B6D4]/20 to-cyan-400/20",
  },
  {
    id: 5,
    title: "Cloud Computing with AWS",
    category: "Infrastructure",
    level: "Advanced",
    students: 1450,
    rating: 4.8,
    duration: "10 weeks",
    image: "bg-gradient-to-br from-purple-400/20 to-[#8B5CF6]/20",
  },
  {
    id: 6,
    title: "JavaScript Advanced Concepts",
    category: "Development",
    level: "Advanced",
    students: 2800,
    rating: 4.9,
    duration: "9 weeks",
    image: "bg-gradient-to-br from-cyan-400/20 to-[#06B6D4]/20",
  },
]

export default function CoursesSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A]">Featured Courses</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of professionally designed courses created by industry experts
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#8B5CF6] transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              onMouseEnter={() => setHoveredId(course.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Course Image */}
              <div className={`h-40 ${course.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Course Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-purple-100 text-[#8B5CF6] text-xs font-semibold rounded-full">
                    {course.category}
                  </span>
                  <span className="px-3 py-1 bg-blue-100 text-[#06B6D4] text-xs font-semibold rounded-full">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#8B5CF6] transition-colors line-clamp-2">
                  {course.title}
                </h3>

                {/* Stats */}
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-semibold text-[#0F172A]">{course.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={16} />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-1 text-sm text-gray-600">
                  <Clock size={16} />
                  <span>{course.duration}</span>
                </div>

                {/* Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    hoveredId === course.id
                      ? "bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white shadow-lg"
                      : "bg-gray-100 text-[#0F172A] hover:bg-gray-200"
                  }`}
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <button className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-purple-500/40 transition-all">
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  )
}
