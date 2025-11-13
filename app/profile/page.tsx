"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Mail, Linkedin, Github, Twitter, BookOpen, Trophy, Zap, Award, Sun, Moon } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("about")
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleTheme = () => {
    if (mounted) {
      document.documentElement.classList.toggle("dark")
      setIsDark(!isDark)
    }
  }

  const user = {
    id: "1",
    name: "Sarah Johnson",
    role: "UI/UX Designer & Learner",
    email: "sarah@example.com",
    location: "San Francisco, CA",
    bio: "Passionate designer crafting beautiful digital experiences and continuously expanding my skillset through learning.",
    avatar: "/user-profile-avatar.png",
    totalPoints: 3200,
    coursesCompleted: 8,
    currentStreak: 15,
    joinDate: "January 2024",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
      twitter: "https://twitter.com",
    },
  }

  const stats = [
    { label: "Total Points", value: user.totalPoints, icon: Trophy, color: "#8B5CF6" },
    { label: "Courses Completed", value: user.coursesCompleted, icon: BookOpen, color: "#06B6D4" },
    { label: "Day Streak", value: user.currentStreak, icon: Zap, color: "#8B5CF6" },
    { label: "Achievements", value: "12", icon: Award, color: "#06B6D4" },
  ]

  const achievements = [
    { title: "First Steps", description: "Complete your first quiz", unlocked: true, icon: "🎯" },
    { title: "Quiz Master", description: "Score 100 on a quiz", unlocked: true, icon: "🏆" },
    { title: "Consistency Pro", description: "Maintain a 14-day streak", unlocked: true, icon: "🔥" },
    { title: "Knowledge Seeker", description: "Enroll in 5 courses", unlocked: true, icon: "📚" },
    { title: "Expert Level", description: "Complete 10 courses", unlocked: false, icon: "👑" },
    { title: "Perfect Score", description: "Score 100 on 5 quizzes", unlocked: false, icon: "⭐" },
  ]

  const courseProgress = [
    {
      name: "UI/UX Design Level Up with Prototyping",
      progress: 100,
      pointsEarned: 1000,
      status: "Completed",
      level: "Intermediate",
    },
    { name: "Advanced Figma Techniques", progress: 85, pointsEarned: 850, status: "In Progress", level: "Advanced" },
    { name: "Web Design Fundamentals", progress: 60, pointsEarned: 600, status: "In Progress", level: "Beginner" },
    { name: "Design Systems Mastery", progress: 30, pointsEarned: 300, status: "In Progress", level: "Advanced" },
    { name: "Mobile App Design", progress: 0, pointsEarned: 0, status: "Not Started", level: "Intermediate" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A] transition-colors">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-600 dark:text-slate-400 hover:text-[#8B5CF6] dark:hover:text-[#06B6D4] transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back</span>
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] bg-clip-text text-transparent">
            EduQuest
          </h1>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-slate-700 transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />)}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="space-y-6">
              <div className="text-center lg:text-left">
                <div className="mb-6 flex justify-center lg:justify-start">
                  <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
                    <img
                      src={user.avatar || "/placeholder.svg"}
                      alt={user.name}
                      className="w-full h-full rounded-full object-cover bg-white dark:bg-slate-800"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-1">{user.name}</h2>
                <p className="text-[#8B5CF6] dark:text-[#06B6D4] text-sm font-medium mb-4">{user.role}</p>
                <p className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed mb-6">{user.bio}</p>

                {/* Social Links */}
                <div className="flex justify-center lg:justify-start gap-3 mb-6">
                  <a
                    href={user.social.linkedin}
                    className="p-2 text-gray-500 dark:text-slate-400 hover:text-[#8B5CF6] dark:hover:text-[#06B6D4] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={user.social.github}
                    className="p-2 text-gray-500 dark:text-slate-400 hover:text-[#8B5CF6] dark:hover:text-[#06B6D4] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={user.social.twitter}
                    className="p-2 text-gray-500 dark:text-slate-400 hover:text-[#8B5CF6] dark:hover:text-[#06B6D4] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 text-sm text-gray-600 dark:text-slate-400 border-t border-gray-200 dark:border-slate-700 pt-6">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#8B5CF6]" />
                    <span className="break-all">{user.email}</span>
                  </div>
                  <p>{user.location}</p>
                  <p className="text-xs">Joined {user.joinDate}</p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <nav className="border-t border-gray-200 dark:border-slate-700 pt-6 hidden lg:block">
                <div className="space-y-2">
                  {["about", "achievements", "courses"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-all capitalize text-sm font-medium ${
                        activeTab === tab
                          ? "bg-[#8B5CF6]/10 text-[#8B5CF6] dark:bg-[#06B6D4]/10 dark:text-[#06B6D4] border-l-2 border-[#8B5CF6] dark:border-[#06B6D4]"
                          : "text-gray-600 dark:text-slate-400 hover:text-[#0F172A] dark:hover:text-slate-200"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => {
                const Icon = stat.icon
                return (
                  <Card
                    key={stat.label}
                    className="border-0 p-6 text-white transition-all hover:shadow-lg"
                    style={{ backgroundColor: stat.color }}
                  >
                    <Icon className="w-6 h-6 mb-3 opacity-80" />
                    <div className="text-2xl font-bold">{stat.value}</div>
                    <div className="text-xs opacity-90 mt-2">{stat.label}</div>
                  </Card>
                )
              })}
            </div>

            {/* Achievements Section */}
            {(activeTab === "about" || activeTab === "achievements") && (
              <section>
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-6">Achievements</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {achievements.map((achievement, idx) => (
                    <Card
                      key={idx}
                      className={`p-4 border transition-all ${
                        achievement.unlocked
                          ? "bg-white dark:bg-slate-800 border-[#8B5CF6]/20 dark:border-[#06B6D4]/20 hover:border-[#8B5CF6]/50 dark:hover:border-[#06B6D4]/50"
                          : "bg-gray-50 dark:bg-slate-900 border-gray-200 dark:border-slate-700 opacity-60"
                      }`}
                    >
                      <div className="text-3xl mb-2">{achievement.icon}</div>
                      <h4
                        className={`font-semibold text-sm ${
                          achievement.unlocked ? "text-[#0F172A] dark:text-white" : "text-gray-500 dark:text-slate-600"
                        }`}
                      >
                        {achievement.title}
                      </h4>
                      <p
                        className={`text-xs ${
                          achievement.unlocked
                            ? "text-gray-600 dark:text-slate-400"
                            : "text-gray-400 dark:text-slate-600"
                        }`}
                      >
                        {achievement.description}
                      </p>
                      {achievement.unlocked && (
                        <Badge className="mt-3 bg-[#8B5CF6]/20 text-[#8B5CF6] border-[#8B5CF6]/30 dark:bg-[#06B6D4]/20 dark:text-[#06B6D4] dark:border-[#06B6D4]/30">
                          Unlocked
                        </Badge>
                      )}
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* Courses Section */}
            {(activeTab === "about" || activeTab === "courses") && (
              <section>
                <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white mb-6">Learning Progress</h3>
                <div className="space-y-4">
                  {courseProgress.map((course, idx) => (
                    <Card
                      key={idx}
                      className="bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 p-6 hover:shadow-md dark:hover:shadow-slate-900/50 transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#0F172A] dark:text-white mb-2">{course.name}</h4>
                          <div className="flex items-center gap-2 flex-wrap">
                            <Badge
                              variant="outline"
                              className="text-xs border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300"
                            >
                              {course.level}
                            </Badge>
                            <Badge className="bg-[#8B5CF6]/20 text-[#8B5CF6] dark:bg-[#06B6D4]/20 dark:text-[#06B6D4] border-[#8B5CF6]/30 dark:border-[#06B6D4]/30 text-xs">
                              +{course.pointsEarned} pts
                            </Badge>
                            <Badge variant="secondary" className="text-xs">
                              {course.status}
                            </Badge>
                          </div>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden border border-gray-300 dark:border-slate-600">
                          <div
                            className="bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] h-full transition-all duration-500"
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                        <div className="text-xs text-gray-600 dark:text-slate-400">{course.progress}% Complete</div>
                      </div>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Section */}
            <Card className="border-0 p-8 text-white bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
              <h3 className="text-2xl font-bold mb-2">Keep Growing!</h3>
              <p className="text-sm opacity-90 mb-4">
                You're on a {user.currentStreak}-day streak. Keep it up and unlock more achievements!
              </p>
              <Link href="/courses">
                <Button className="bg-white text-[#8B5CF6] hover:bg-gray-100">Continue Learning</Button>
              </Link>
            </Card>
          </main>
        </div>
      </div>
    </div>
  )
}
