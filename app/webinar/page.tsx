"use client"

import { useState } from "react"
import { Grid3x3, List, Search } from 'lucide-react'

import WebinarCard from "@/components/webinar-card"
import WebinarFilters from "@/components/webinar-filter"

const dataWebinars = [
  {
    id: 1,
    title: "Advanced Web Development with Next.js 15",
    category: "Development",
    image: "/web-development.jpeg",
    presenter: "David Wilson",
    startDate: "20 Jan 2025",
    time: "2:00 PM",
    duration: "90 mins",
    attendees: 342,
    capacity: 500,
    status: "Upcoming" as const,
    price: "Free",
  },
  {
    id: 2,
    title: "UI/UX Design Trends 2025",
    category: "Design",
    image: "/ui-ux.jpg",
    presenter: "Sarah Chen",
    startDate: "21 Jan 2025",
    time: "10:00 AM",
    duration: "60 mins",
    attendees: 512,
    capacity: 500,
    status: "Upcoming" as const,
    price: "Free",
  },
  {
    id: 3,
    title: "Building Scalable SaaS Applications",
    category: "Technology",
    image: "/web-development.jpeg",
    presenter: "Michael Chen",
    startDate: "19 Jan 2025",
    time: "3:00 PM",
    duration: "120 mins",
    attendees: 287,
    capacity: 1000,
    status: "Live" as const,
    price: "Free",
  },
  {
    id: 4,
    title: "Digital Marketing Strategy Masterclass",
    category: "Marketing",
    image: "/branding.jpg",
    presenter: "Jessica Lee",
    startDate: "22 Jan 2025",
    time: "1:00 PM",
    duration: "75 mins",
    attendees: 198,
    capacity: 300,
    status: "Upcoming" as const,
    price: "Free",
  },
  {
    id: 5,
    title: "Startup Funding & Investor Relations",
    category: "Business",
    image: "/startup.jpg",
    presenter: "Robert Thompson",
    startDate: "18 Jan 2025",
    time: "11:00 AM",
    duration: "90 mins",
    attendees: 654,
    capacity: 1000,
    status: "Completed" as const,
    price: "Free",
  },
  {
    id: 6,
    title: "React Performance Optimization",
    category: "Development",
    image: "/ui.jpg",
    presenter: "Emma Davis",
    startDate: "23 Jan 2025",
    time: "4:00 PM",
    duration: "60 mins",
    attendees: 428,
    capacity: 500,
    status: "Upcoming" as const,
    price: "Free",
  },
]

export default function WebinarsPage() {
  const [viewType, setViewType] = useState<"grid" | "list">("grid")
  const [selectedCategory, setSelectedCategory] = useState("All Category")
  const [searchQuery, setSearchQuery] = useState("")

  let filteredWebinars = dataWebinars
  
  if (selectedCategory !== "All Category") {
    filteredWebinars = filteredWebinars.filter(
      (webinar) => webinar.category === selectedCategory
    )
  }

  if (searchQuery) {
    filteredWebinars = filteredWebinars.filter((webinar) =>
      webinar.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      webinar.presenter.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  return (
    <div className="p-6 md:p-8 bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-white via-blue-50 to-purple-50 min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground dark:text-white mb-2">
          Webinars
        </h1>
        <p className="text-muted-foreground dark:text-slate-300">
          Pelajari dari expert di berbagai bidang. Daftar sekarang dan tingkatkan skill Anda.
        </p>
      </div>

      <div className="mb-8 relative">
        <Search className="absolute left-4 top-3 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Cari webinar..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
        />
      </div>

      <WebinarFilters
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-muted-foreground dark:text-slate-300">
          {filteredWebinars.length} webinar
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setViewType("grid")}
            className={`p-2 rounded-lg transition-colors ${
              viewType === "grid"
                ? "bg-purple-600 text-white"
                : "bg-slate-200 dark:bg-slate-700 text-foreground dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
          >
            <Grid3x3 className="w-5 h-5" />
          </button>
          <button
            onClick={() => setViewType("list")}
            className={`p-2 rounded-lg transition-colors hidden md:block ${
              viewType === "list"
                ? "bg-purple-600 text-white"
                : "bg-slate-200 dark:bg-slate-700 text-foreground dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600"
            }`}
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      {viewType === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWebinars.map((webinar) => (
            <WebinarCard key={webinar.id} webinar={webinar} />
          ))}
        </div>
      ) : (
        <div className="space-y-4 hidden md:block">
          {filteredWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="bg-white dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-purple-600/50 rounded-lg border border-gray-200 p-4 hover:shadow-lg transition-shadow flex gap-4"
            >
              <div className="relative w-48 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <img
                  src={webinar.image || "/placeholder.svg"}
                  alt={webinar.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-foreground dark:text-white hover:text-purple-600 transition-colors">
                    {webinar.title}
                  </h3>
                  <p className="text-sm text-muted-foreground dark:text-slate-400">
                    {webinar.presenter} • {webinar.category}
                  </p>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground dark:text-slate-400">
                  <div className="flex gap-4">
                    <span>{webinar.startDate}</span>
                    <span>{webinar.time}</span>
                    <span>{webinar.duration}</span>
                  </div>
                  <span className="font-bold text-[#7C3AED]">{webinar.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
