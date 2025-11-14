"use client"

import { useEffect, useState } from "react"
import { Moon, Sun, Trophy } from "lucide-react"

interface LeaderboardEntry {
  rank: number
  name: string
  points: number
  avatar: string
  coursesCompleted: number
  streak: number
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, name: "Jolie Joie", points: 100000, avatar: "JJ", coursesCompleted: 45, streak: 120 },
  { rank: 2, name: "Brian Ngo", points: 50000, avatar: "BN", coursesCompleted: 32, streak: 89 },
  { rank: 3, name: "David Do", points: 20000, avatar: "DD", coursesCompleted: 18, streak: 45 },
  { rank: 4, name: "Henrietta O'Connell", points: 2114424, avatar: "HO", coursesCompleted: 62, streak: 156 },
  { rank: 5, name: "Darrel Bins", points: 2114424, avatar: "DB", coursesCompleted: 58, streak: 142 },
  { rank: 6, name: "Alex Rodriguez", points: 1950000, avatar: "AR", coursesCompleted: 54, streak: 128 },
  { rank: 7, name: "Emma Wilson", points: 1850000, avatar: "EW", coursesCompleted: 51, streak: 115 },
  { rank: 8, name: "David Kim", points: 1720000, avatar: "DK", coursesCompleted: 48, streak: 98 },
  { rank: 9, name: "Lisa Anderson", points: 1600000, avatar: "LA", coursesCompleted: 44, streak: 87 },
  { rank: 10, name: "Chris Morgan", points: 1450000, avatar: "CM", coursesCompleted: 39, streak: 72 },
]

export default function LeaderboardPage() {
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
  const topThree = leaderboardData.slice(0, 3)
  const restOfLeaderboard = leaderboardData.slice(3)

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? "bg-gradient-to-br from-[#0F172A] via-[#1a2540] to-[#0F172A]"
          : "bg-gradient-to-br from-slate-50 via-white to-slate-100"
      }`}
    >

      <header
        className={`border-b backdrop-blur-sm transition-colors ${
          isDark ? "border-slate-800 bg-[#0F172A]/95" : "border-slate-200 bg-white/95"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
          <div>
            <h1 className={`text-2xl sm:text-3xl font-black ${isDark ? "text-white" : "text-slate-900"}`}>
              Leaderboard
            </h1>
            <p className={`text-xs sm:text-sm mt-1 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Top learners by points
            </p>
          </div>

          <button
            onClick={toggleTheme}
            className={`p-2 sm:p-3 rounded-lg transition-all duration-300 border ${
              isDark
                ? "bg-slate-800 border-slate-700 hover:bg-slate-700 text-[#06B6D4]"
                : "bg-slate-100 border-slate-300 hover:bg-slate-200 text-[#8B5CF6]"
            }`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">

       

        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {/* 2nd Place - Left */}
          {topThree[1] && (
            <div
              className={`flex flex-col items-center p-6 sm:p-8 rounded-2xl border-2 transition-all relative ${
                isDark
                  ? "bg-slate-800/50 border-slate-700 hover:border-[#06B6D4]/50"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div
                className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center font-black text-white text-lg sm:text-xl"
                style={{ backgroundColor: "#969393" }}
              >
                2
              </div>
              <div
                className="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4"
                style={{ backgroundColor: "#06B6D4" }}
              >
                {topThree[1].avatar}
              </div>
              <h3
                className={`text-lg sm:text-xl font-black text-center mb-1 sm:mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {topThree[1].name}
              </h3>
              <div className="text-center">
             
                <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3">
                  <span style={{ color: "#06B6D4" }} className="text-xl sm:text-2xl font-black">
                    {(topThree[1].points / 1000).toFixed(0)}K
                  </span>
                  <span className={`text-xs sm:text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Prize</span>
                </div>
              </div>
            </div>
          )}

          {/* 1st Place - Center (Larger) */}
          {topThree[0] && (
            <div
              className={`flex flex-col items-center p-6 sm:p-8 rounded-2xl border-2 transition-all transform sm:col-span-2 md:col-span-1 md:scale-105 relative ${
                isDark
                  ? "bg-gradient-to-br from-slate-700 to-slate-800 border-[#8B5CF6]"
                  : "bg-gradient-to-br from-purple-50 to-white border-[#8B5CF6]"
              }`}
            >
              <div
                className="absolute top-3 sm:top-4 left-3 sm:left-4 w-9 sm:w-11 h-9 sm:h-11 rounded-full flex items-center justify-center font-black text-white text-xl sm:text-2xl"
                style={{ backgroundColor: "#fbbf24" }}
              >
                1
              </div>
              <div className="relative mb-3 sm:mb-4">
                <div
                  className="w-24 sm:w-28 h-24 sm:h-28 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-black text-white"
                  style={{ backgroundColor: "#8B5CF6" }}
                >
                  {topThree[0].avatar}
                </div>
                <div
                  className="absolute -top-2 -right-2 w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#fbbf24" }}
                >
                  <Trophy size={16} className="sm:w-[18px] sm:h-[18px] text-white" />
                </div>
              </div>
              <h3
                className={`text-xl sm:text-2xl font-black text-center mb-1 sm:mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {topThree[0].name}
              </h3>
              <div className="text-center">
               
                <div className="flex items-center justify-center gap-2 mt-1 sm:mt-3">
                  <span style={{ color: "#8B5CF6" }} className="text-2xl sm:text-3xl font-black">
                    {(topThree[0].points / 1000).toFixed(0)}K
                  </span>
                  <span className={`text-xs sm:text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>Prize</span>
                </div>
              </div>
            </div>
          )}

          {/* 3rd Place - Right */}
          {topThree[2] && (
            <div
              className={`flex flex-col items-center p-6 sm:p-8 rounded-2xl border-2 transition-all relative ${
                isDark
                  ? "bg-slate-800/50 border-slate-700 hover:border-orange-500/50"
                  : "bg-white border-slate-200 hover:border-slate-300"
              }`}
            >
              <div
                className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center font-black text-white text-lg sm:text-xl"
                style={{ backgroundColor: "#9E805F" }}
              >
                3
              </div>
              <div
                className="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-black text-white mb-3 sm:mb-4"
                style={{ backgroundColor: "#f97316" }}
              >
                {topThree[2].avatar}
              </div>
              <h3
                className={`text-lg sm:text-xl font-black text-center mb-3 sm:mb-4 ${isDark ? "text-white" : "text-slate-900"}`}
              >
                {topThree[2].name}
              </h3>
              <div className="text-center">
               
                <div className="flex items-center justify-center gap-2 mt-2 sm:mt-3">
                  <span style={{ color: "#f97316" }} className="text-xl sm:text-2xl font-black">
                    {(topThree[2].points / 1000).toFixed(0)}K
                  </span>
                  <span className={`text-xs sm:text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Prize</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Countdown & User Stats */}
       

        {/* Leaderboard Table */}
        <div className="overflow-x-auto">
          <div
            className={`grid grid-cols-5 gap-2 sm:gap-4 px-3 sm:px-6 py-3 sm:py-4 mb-2 text-xs font-bold uppercase tracking-wider min-w-max sm:min-w-0 ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            <div>Rank</div>
            <div className="col-span-2">User name</div>
            <div>Points</div>
            <div className="text-right">Courses</div>
          </div>

          <div className="space-y-2 min-w-max sm:min-w-0">
            {restOfLeaderboard.map((entry) => (
              <div
                key={entry.rank}
                className={`grid grid-cols-5 gap-2 sm:gap-4 items-center px-3 sm:px-6 py-3 sm:py-4 rounded-lg transition-all border ${
                  isDark
                    ? "bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 hover:border-slate-600"
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
              >
                {/* Rank */}
                <div className={`font-black text-base sm:text-lg ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                  {entry.rank}
                </div>

                {/* Avatar + Name */}
                <div className="col-span-2 flex items-center gap-2 sm:gap-3 min-w-0">
                  <div
                    className="w-8 sm:w-10 h-8 sm:h-10 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                    style={{ backgroundColor: "#8B5CF6" }}
                  >
                    {entry.avatar}
                  </div>
                  <p className={`font-bold text-xs sm:text-sm truncate ${isDark ? "text-white" : "text-slate-900"}`}>
                    {entry.name}
                  </p>
                </div>

                {/* Points */}
                <div className={`text-xs sm:text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {(entry.points / 1000).toFixed(0)}K
                </div>

                {/* Courses completed */}
                <div className="text-right">
                  <div className="flex items-center justify-end gap-1 sm:gap-2">
                    <span>📚</span>
                    <span className={`font-bold text-xs sm:text-sm ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {entry.coursesCompleted}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
