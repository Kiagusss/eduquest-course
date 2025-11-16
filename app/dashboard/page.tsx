"use client"

import { useState, useEffect } from "react"
import { Users, TrendingUp, Calendar, CheckCircle, Moon, Sun, BarChart3, PieChartIcon } from 'lucide-react'
import Image from "next/image"

export default function DashboardPage() {
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

  const stats = [
    { label: "Total Webinars", value: "24", icon: Calendar, color: "from-blue-500 to-blue-600" },
    { label: "Total Registrations", value: "3,456", icon: Users, color: "from-purple-500 to-purple-600" },
    { label: "Avg Attendance Rate", value: "78%", icon: TrendingUp, color: "from-green-500 to-green-600" },
    { label: "Completed", value: "18", icon: CheckCircle, color: "from-orange-500 to-orange-600" },
  ]

  const recentWebinars = [
    { id: 1, title: "Advanced Web Development with Next.js 15", presenter: "David Wilson", date: "20 Jan 2025", attendees: 342, registrations: 450, image: "/web-development.jpeg" },
    { id: 2, title: "UI/UX Design Trends 2025", presenter: "Sarah Chen", date: "21 Jan 2025", attendees: 512, registrations: 580, image: "/ui-ux-design-mentor-coaching.jpg" },
    { id: 3, title: "Building Scalable SaaS Applications", presenter: "Michael Chen", date: "19 Jan 2025", attendees: 287, registrations: 320, image: "/web-development.jpeg" },
  ]

  return (
    <div className="flex-1 p-8 bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-white via-blue-50 to-purple-50 min-h-screen">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className={`flex-none p-2 sm:p-3 rounded-lg transition-all duration-300 border mb-8 ${
          isDark
            ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-[#06B6D4]"
            : "bg-slate-100 border-slate-300 hover:bg-slate-200 text-[#8B5CF6]"
        }`}
        aria-label="Toggle theme"
      >
        {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground dark:text-white mb-2">
          Dashboard
        </h1>
        <p className="text-muted-foreground dark:text-slate-300">
          Pantau kinerja webinar dan engagement peserta Anda.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-gradient-to-br ${stat.color} p-3 rounded-lg text-white`}>
                  <Icon className="w-6 h-6" />
                </div>
              </div>
              <p className="text-gray-600 dark:text-slate-400 text-sm font-medium mb-1">
                {stat.label}
              </p>
              <p className="text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          )
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Attendance Trend */}
        <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Attendance Trend
            </h3>
            <BarChart3 className="w-5 h-5 text-[#7C3AED]" />
          </div>
          <div className="space-y-4">
            {[
              { label: "Week 1", value: 65, percentage: 72 },
              { label: "Week 2", value: 78, percentage: 85 },
              { label: "Week 3", value: 82, percentage: 90 },
              { label: "Week 4", value: 71, percentage: 78 },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                    {item.label}
                  </span>
                  <span className="text-sm font-bold text-[#7C3AED]">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-[#7C3AED] to-[#06B6D4] h-2 rounded-full transition-all"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Webinar Status Distribution */}
        <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Webinar Status
            </h3>
            <PieChartIcon className="w-5 h-5 text-[#7C3AED]" />
          </div>
          <div className="space-y-3">
            {[
              { label: "Completed", value: "18", color: "from-green-500 to-green-600" },
              { label: "Upcoming", value: "4", color: "from-blue-500 to-blue-600" },
              { label: "Live", value: "1", color: "from-red-500 to-red-600" },
              { label: "Cancelled", value: "1", color: "from-gray-500 to-gray-600" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`} />
                  <span className="text-sm font-medium text-gray-700 dark:text-slate-300">
                    {item.label}
                  </span>
                </div>
                <span className="font-bold text-gray-900 dark:text-white">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Webinars */}
      <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
          Recent Webinars
        </h3>
        <div className="space-y-4">
          {recentWebinars.map((webinar) => (
            <div
              key={webinar.id}
              className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-slate-700/30 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700/50 transition-colors"
            >
              <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={webinar.image || "/placeholder.svg"}
                  alt={webinar.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  {webinar.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  {webinar.presenter} • {webinar.date}
                </p>
              </div>
              <div className="text-right">
                <p className="font-bold text-[#7C3AED]">{webinar.attendees}</p>
                <p className="text-xs text-gray-600 dark:text-slate-400">
                  {webinar.registrations} registered
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
