"use client"
import { useState, useEffect } from "react"
import { Plus, Grid3x3, List } from 'lucide-react'
import CoachingFilters from "@/components/coaching-filters"
import CoachingSessionCard from "@/components/coaching-session-card"
import Sidebar, { TopNav } from "@/components/sidebar"
import Image from "next/image"
import Chatbot from "@/components/chatbot"

const dataCoachingSessions = [
  {
    id: 1,
    title: "Mastering UI/UX Design Principles",
    category: "UI/UX Design",
    image: "/ui.jpg",
    mentor: "Sarah Anderson",
    startDate: "18 Jan 2025",
    duration: "90 mins",
    slots: 5,
    bookings: 3,
    status: "Available" as const,
  },
  {
    id: 2,
    title: "Advanced Graphic Design Techniques",
    category: "Graphic Design",
    image: "/design-graph.jpg",
    mentor: "Michael Chen",
    startDate: "19 Jan 2025",
    duration: "60 mins",
    slots: 6,
    bookings: 6,
    status: "Booked" as const,
  },
  {
    id: 3,
    title: "Web Development Best Practices",
    category: "Web Development",
    image: "/web-development.jpeg",
    mentor: "David Wilson",
    startDate: "20 Jan 2025",
    duration: "120 mins",
    slots: 8,
    bookings: 2,
    status: "Available" as const,
  },
  {
    id: 4,
    title: "Mobile App Development with React Native",
    category: "Mobile Development",
    image: "/ui-ux.jpg",
    mentor: "Jessica Lee",
    startDate: "21 Jan 2025",
    duration: "90 mins",
    slots: 5,
    bookings: 4,
    status: "Available" as const,
  },
  {
    id: 5,
    title: "Business Strategy & Growth Planning",
    category: "Business Strategy",
    image: "/branding.jpg",
    mentor: "Robert Thompson",
    startDate: "22 Jan 2025",
    duration: "75 mins",
    slots: 4,
    bookings: 1,
    status: "Available" as const,
  },
  {
    id: 6,
    title: "UI/UX Design for E-commerce",
    category: "UI/UX Design",
    image: "/ui.jpg",
    mentor: "Emma Davis",
    startDate: "23 Jan 2025",
    duration: "60 mins",
    slots: 5,
    bookings: 5,
    status: "Completed" as const,
  },
]

export default function CoachingDashboard() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("All Category")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const filteredSessions =
    selectedCategory === "All Category"
      ? dataCoachingSessions
      : dataCoachingSessions.filter((session) => session.category === selectedCategory)

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-900">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav onMenuToggle={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />
        
        <main className="flex-1 p-4 sm:p-6 bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-white via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Coaching Sessions</h1>
                <p className="text-gray-600 dark:text-slate-400 mt-1">
                  Belajar langsung dari mentor berpengalaman kami.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <div className="bg-white dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-slate-700 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">Total Sessions</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{dataCoachingSessions.length}</p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-slate-700 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">Available</p>
                <p className="text-xl sm:text-2xl font-bold text-green-600">
                  {dataCoachingSessions.filter(s => s.status === "Available").length}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-slate-700 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">Booked</p>
                <p className="text-xl sm:text-2xl font-bold text-blue-600">
                  {dataCoachingSessions.filter(s => s.status === "Booked").length}
                </p>
              </div>
              <div className="bg-white dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-slate-700 p-3 sm:p-4">
                <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-400">Completed</p>
                <p className="text-xl sm:text-2xl font-bold text-gray-600">
                  {dataCoachingSessions.filter(s => s.status === "Completed").length}
                </p>
              </div>
            </div>

            <CoachingFilters selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />

            <div className="flex items-center justify-between mb-6 mt-6">
              <span className="text-sm text-gray-600 dark:text-slate-300">
                {filteredSessions.length} session mentoring ditemukan
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewType("grid")}
                  className={`p-2 rounded-lg transition-colors ${
                    viewType === "grid"
                      ? "bg-purple-600 text-white"
                      : "bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                  }`}
                >
                  <Grid3x3 className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={() => setViewType("list")}
                  className={`p-2 rounded-lg transition-colors hidden sm:block ${
                    viewType === "list"
                      ? "bg-purple-600 text-white"
                      : "bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
                  }`}
                >
                  <List className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {viewType === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {filteredSessions.map((session) => (
                  <CoachingSessionCard key={session.id} session={session} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredSessions.map((session) => (
                  <div
                    key={session.id}
                    className="bg-white dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-slate-700 p-4 sm:p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                      <div className="relative w-full sm:w-32 h-40 sm:h-20 flex-shrink-0">
                        <Image
                          src={session.image || "/placeholder.svg"}
                          alt={session.title}
                          fill
                          className="object-cover rounded-md"
                        />
                        <div className="absolute top-2 right-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            session.status === "Available"
                              ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                              : session.status === "Booked"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                              : "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
                          }`}>
                            {session.status}
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-white mb-1 line-clamp-2">
                          {session.title}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-2">
                          {session.category} • by {session.mentor}
                        </p>

                        <div className="sm:hidden space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-slate-400">Tanggal:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{session.startDate}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-slate-400">Durasi:</span>
                            <span className="font-medium text-gray-900 dark:text-white">{session.duration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600 dark:text-slate-400">Peserta:</span>
                            <span className="font-medium text-gray-900 dark:text-white">
                              {session.bookings}/{session.slots}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="hidden sm:flex gap-6 lg:gap-8 text-sm flex-shrink-0">
                        <div className="text-center">
                          <p className="text-gray-600 dark:text-slate-400">Tanggal</p>
                          <p className="font-medium text-gray-900 dark:text-white whitespace-nowrap">{session.startDate}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-600 dark:text-slate-400">Durasi</p>
                          <p className="font-medium text-gray-900 dark:text-white">{session.duration}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-gray-600 dark:text-slate-400">Peserta</p>
                          <p className="font-medium text-gray-900 dark:text-white">
                            {session.bookings}/{session.slots}
                          </p>
                        </div>
                        <div className="flex items-center">
                          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition-colors whitespace-nowrap">
                            Details
                          </button>
                        </div>
                      </div>

                      <div className="sm:hidden">
                        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
       <Chatbot />
    </div>
  )
}
