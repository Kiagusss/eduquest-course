"use client"

import { useEffect, useState } from "react"
import { Trophy } from 'lucide-react'
import Sidebar, { TopNav } from "@/components/sidebar"

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
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Set sidebar state based on screen size on mount
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true)
      } else {
        setSidebarOpen(false)
      }
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!mounted) return null

  const topThree = leaderboardData.slice(0, 3)
  const restOfLeaderboard = leaderboardData.slice(3)

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-900">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col transition-all duration-300">
        {/* Top Navigation */}
        <TopNav 
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)} 
          sidebarOpen={sidebarOpen}
        />

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-4 sm:p-6 bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-slate-50 via-white to-slate-100">
          <div className="max-w-7xl mx-auto">
            {/* Top 3 Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8 md:mb-12">
              {/* 1st Place */}
              {topThree[0] && (
                <div
                  className={`flex flex-col items-center p-4 sm:p-6 rounded-2xl border-2 transition-all lg:scale-105 relative ${
                    "bg-gradient-to-br from-slate-700 to-slate-800 border-[#8B5CF6]"
                  }`}
                >
                  <div
                    className="absolute top-2 sm:top-3 left-2 sm:left-3 w-8 sm:w-9 h-8 sm:h-9 rounded-full flex items-center justify-center font-black text-white text-base"
                    style={{ backgroundColor: "#fbbf24" }}
                  >
                    1
                  </div>
                  <div className="relative mb-3 sm:mb-4">
                    <div
                      className="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-black text-white"
                      style={{ backgroundColor: "#8B5CF6" }}
                    >
                      {topThree[0].avatar}
                    </div>
                    <div
                      className="absolute -top-2 -right-2 w-6 sm:w-7 h-6 sm:h-7 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#fbbf24" }}
                    >
                      <Trophy size={14} className="sm:w-4 sm:h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-center mb-2 sm:mb-3 text-white">
                    {topThree[0].name}
                  </h3>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span style={{ color: "#8B5CF6" }} className="text-xl sm:text-2xl font-black">
                        {(topThree[0].points / 1000).toFixed(0)}K
                      </span>
                      <span className="text-xs sm:text-sm text-slate-300">Prize</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 2nd Place */}
              {topThree[1] && (
                <div
                  className={`flex flex-col items-center p-4 sm:p-6 rounded-2xl border-2 transition-all relative ${
                    "bg-slate-800/50 border-slate-700 hover:border-[#06B6D4]/50"
                  }`}
                >
                  <div
                    className="absolute top-2 sm:top-3 left-2 sm:left-3 w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center font-black text-white text-sm"
                    style={{ backgroundColor: "#969393" }}
                  >
                    2
                  </div>
                  <div
                    className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl flex items-center justify-center text-lg sm:text-xl font-black text-white mb-2 sm:mb-3"
                    style={{ backgroundColor: "#06B6D4" }}
                  >
                    {topThree[1].avatar}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-center mb-2 sm:mb-3 text-white">
                    {topThree[1].name}
                  </h3>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span style={{ color: "#06B6D4" }} className="text-lg sm:text-xl font-black">
                        {(topThree[1].points / 1000).toFixed(0)}K
                      </span>
                      <span className="text-xs sm:text-sm text-slate-400">Prize</span>
                    </div>
                  </div>
                </div>
              )}

              {/* 3rd Place */}
              {topThree[2] && (
                <div
                  className={`flex flex-col items-center p-4 sm:p-6 rounded-2xl border-2 transition-all relative ${
                    "bg-slate-800/50 border-slate-700 hover:border-orange-500/50"
                  }`}
                >
                  <div
                    className="absolute top-2 sm:top-3 left-2 sm:left-3 w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center font-black text-white text-sm"
                    style={{ backgroundColor: "#9E805F" }}
                  >
                    3
                  </div>
                  <div
                    className="w-16 sm:w-20 h-16 sm:h-20 rounded-2xl flex items-center justify-center text-lg sm:text-xl font-black text-white mb-2 sm:mb-3"
                    style={{ backgroundColor: "#f97316" }}
                  >
                    {topThree[2].avatar}
                  </div>
                  <h3 className="text-base sm:text-lg font-black text-center mb-2 sm:mb-3 text-white">
                    {topThree[2].name}
                  </h3>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span style={{ color: "#f97316" }} className="text-lg sm:text-xl font-black">
                        {(topThree[2].points / 1000).toFixed(0)}K
                      </span>
                      <span className="text-xs sm:text-sm text-slate-400">Prize</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Rest of Leaderboard */}
            <div>
              {/* Table header - hidden on mobile */}
              <div className="hidden md:grid grid-cols-5 gap-4 px-6 py-4 mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                <div>Rank</div>
                <div className="col-span-2">User name</div>
                <div>Points</div>
                <div className="text-right">Courses</div>
              </div>

              {/* Desktop table view */}
              <div className="hidden md:space-y-2">
                {restOfLeaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className="grid grid-cols-5 gap-4 items-center px-6 py-4 rounded-lg transition-all border bg-slate-800/30 border-slate-700 hover:bg-slate-800/50 hover:border-slate-600"
                  >
                    <div className="font-black text-lg text-slate-300">
                      {entry.rank}
                    </div>
                    <div className="col-span-2 flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
                        style={{ backgroundColor: "#8B5CF6" }}
                      >
                        {entry.avatar}
                      </div>
                      <p className="font-bold text-sm truncate text-white">
                        {entry.name}
                      </p>
                    </div>
                    <div className="text-sm text-slate-400">
                      {(entry.points / 1000).toFixed(0)}K
                    </div>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2">
                        <span>📚</span>
                        <span className="font-bold text-sm text-slate-300">
                          {entry.coursesCompleted}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile card view */}
              <div className="block md:hidden space-y-3 sm:space-y-4">
                {restOfLeaderboard.map((entry) => (
                  <div
                    key={entry.rank}
                    className="p-4 sm:p-5 rounded-lg transition-all border bg-slate-800/30 border-slate-700 hover:bg-slate-800/50"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs text-white flex-shrink-0"
                          style={{ backgroundColor: "#8B5CF6" }}
                        >
                          {entry.avatar}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-bold text-sm truncate text-white">
                            {entry.name}
                          </p>
                          <p className="text-xs text-slate-400">
                            #{entry.rank}
                          </p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="font-black text-sm text-slate-300">
                          {(entry.points / 1000).toFixed(0)}K
                        </p>
                        <p className="text-xs text-slate-400">pts</p>
                      </div>
                    </div>
                    <div className="flex gap-4 text-xs">
                      <div className="flex items-center gap-1 text-slate-400">
                        <span>📚</span>
                        <span className="font-semibold">{entry.coursesCompleted}</span>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <span>🔥</span>
                        <span className="font-semibold">{entry.streak}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
