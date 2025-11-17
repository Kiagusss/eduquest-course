"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Mail, Linkedin, Github, Twitter, BookOpen, Trophy, Zap, Award, Sun, Moon, Crown, Check, X } from 'lucide-react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("about")
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [showUpgradeModal, setShowUpgradeModal] = useState(false)
  const [showManageModal, setShowManageModal] = useState(false)

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
    name: "Ujang Asep",
    role: "UI/UX Designer & Learner",
    email: "sarah@example.com",
    location: "Cilegon, Banten",
    bio: "Passionate designer crafting beautiful digital experiences and continuously expanding my skillset through learning.",
    avatar: "/avatarrr.jpg",
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

  const subscription = {
    packageName: "Career Builder",
    price: "$99",
    billingPeriod: "/month",
    status: "Active",
    monthsRemaining: 2,
    startDate: "May 2025",
    renewalDate: "January 2026",
    features: [
      "Advanced AI Career Assessment",
      "Detailed sCareer Roadmap",
      "Unlimited Course Access",
      "Priority Support",
      "Advanced Progress Analytics",
      "Full Gamification System",
      "Skill Certifications",
      "Career Community Access",
    ],
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

  const upgradePlans = [
    {
      name: "Career Accelerator",
      price: "$199",
      billingPeriod: "/month",
      description: "Everything in Career Builder plus premium features",
      features: [
        "Everything in Career Builder",
        "1-on-1 Career Coaching",
        "Personalized Mentorship",
        "Job Interview Preparation",
        "Resume & Portfolio Review",
        "Career Transition Support",
        "Dedicated Success Manager",
        "Custom Learning Paths",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0F172A] transition-colors">
      <header className="border-b border-gray-200 dark:border-slate-700 sticky top-0 z-50 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md transition-colors">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
          <Link
            href="/course"
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

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
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

                <div className="space-y-2 text-sm text-gray-600 dark:text-slate-400 border-t border-gray-200 dark:border-slate-700 pt-6">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#8B5CF6]" />
                    <span className="break-all">{user.email}</span>
                  </div>
                  <p>{user.location}</p>
                  <p className="text-xs">Joined {user.joinDate}</p>
                </div>
              </div>

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

          <main className="lg:col-span-3 space-y-8">
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

            <section className="bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6 hover:shadow-lg transition-all">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-[#8B5CF6]/10 dark:bg-[#06B6D4]/10">
                    <Crown className="w-6 h-6 text-[#8B5CF6] dark:text-[#06B6D4]" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#0F172A] dark:text-white">{subscription.packageName}</h3>
                    <p className="text-sm text-gray-600 dark:text-slate-400 mt-1">Active Subscription</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-0">
                  {subscription.status}
                </Badge>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 dark:bg-slate-900/50 rounded-lg p-4">
                  <p className="text-xs font-medium text-gray-600 dark:text-slate-400 mb-1">Price</p>
                  <p className="text-xl font-bold text-[#0F172A] dark:text-white">
                    {subscription.price}<span className="text-sm font-normal text-gray-600 dark:text-slate-400">{subscription.billingPeriod}</span>
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-900/50 rounded-lg p-4">
                  <p className="text-xs font-medium text-gray-600 dark:text-slate-400 mb-1">Months Remaining</p>
                  <p className="text-xl font-bold text-[#06B6D4]">{subscription.monthsRemaining}</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-900/50 rounded-lg p-4">
                  <p className="text-xs font-medium text-gray-600 dark:text-slate-400 mb-1">Start Date</p>
                  <p className="text-sm font-semibold text-[#0F172A] dark:text-white">{subscription.startDate}</p>
                </div>
                <div className="bg-gray-50 dark:bg-slate-900/50 rounded-lg p-4">
                  <p className="text-xs font-medium text-gray-600 dark:text-slate-400 mb-1">Renewal Date</p>
                  <p className="text-sm font-semibold text-[#0F172A] dark:text-white">{subscription.renewalDate}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-[#0F172A] dark:text-white mb-3">Included Features</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {subscription.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#8B5CF6] dark:text-[#06B6D4] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-6 pt-6 border-t border-gray-200 dark:border-slate-700">
                <Button onClick={() => setShowUpgradeModal(true)} className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white">Upgrade Plan</Button>
                <Button onClick={() => setShowManageModal(true)} variant="outline" className="flex-1">Manage Subscription</Button>
              </div>
            </section>

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

        
            <Card className="border-0 p-8 text-white bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4]">
              <h3 className="text-2xl font-bold mb-2">Keep Growing!</h3>
              <p className="text-sm opacity-90 mb-4">
                You're on a {user.currentStreak}-day streak. Keep it up and unlock more achievements!
              </p>
              <Link href="/course/1/learn">
                <Button className="bg-white text-[#8B5CF6] hover:bg-gray-100">Continue Learning</Button>
              </Link>
            </Card>
          </main>
        </div>
      </div>

      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <Card className="w-full max-w-md bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">
              <h2 className="text-lg font-bold text-[#0F172A] dark:text-white">Upgrade Your Plan</h2>
              <button
                onClick={() => setShowUpgradeModal(false)}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-slate-400" />
              </button>
            </div>

            <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-slate-400 mb-2">Current Plan</p>
                <div className="bg-gray-50 dark:bg-slate-900/50 rounded-lg p-3 border border-gray-200 dark:border-slate-700">
                  <p className="text-sm font-semibold text-[#0F172A] dark:text-white">{subscription.packageName}</p>
                  <p className="text-lg font-bold text-[#8B5CF6] dark:text-[#06B6D4] mt-1">
                    {subscription.price}<span className="text-xs font-normal text-gray-600 dark:text-slate-400">{subscription.billingPeriod}</span>
                  </p>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-slate-400 mb-2">Upgrade To</p>
                {upgradePlans.map((plan) => (
                  <div key={plan.name} className="border-2 border-[#8B5CF6]/20 dark:border-[#06B6D4]/20 rounded-lg p-3 hover:border-[#8B5CF6] dark:hover:border-[#06B6D4] transition-all">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-sm text-[#0F172A] dark:text-white">{plan.name}</h4>
                        <p className="text-xs text-gray-600 dark:text-slate-400 mt-0.5">{plan.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-[#8B5CF6] dark:text-[#06B6D4]">{plan.price}</p>
                        <p className="text-xs text-gray-600 dark:text-slate-400">{plan.billingPeriod}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-1 text-xs text-gray-700 dark:text-slate-300">
                      {plan.features.slice(0, 4).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-3 h-3 text-[#8B5CF6] dark:text-[#06B6D4] flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      {plan.features.length > 4 && (
                        <p className="text-gray-600 dark:text-slate-400 italic">+ {plan.features.length - 4} more features</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

      
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 border border-blue-200 dark:border-blue-800">
                <p className="text-xs text-blue-900 dark:text-blue-300">
                  Upgrade immediately with prorated pricing for your remaining billing period.
                </p>
              </div>
            </div>

            <div className="flex gap-2 p-4 border-t border-gray-200 dark:border-slate-700">
              <Button
                onClick={() => setShowUpgradeModal(false)}
                variant="outline"
                className="flex-1 text-sm"
              >
                Cancel
              </Button>
              <Button className="flex-1 bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm">
                Upgrade
              </Button>
            </div>
          </Card>
        </div>
      )}

      {showManageModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <Card className="w-full max-w-md bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-slate-700">
              <h2 className="text-lg font-bold text-[#0F172A] dark:text-white">Manage Subscription</h2>
              <button
                onClick={() => setShowManageModal(false)}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-slate-400" />
              </button>
            </div>

            <div className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-slate-400 mb-2">Current Plan</p>
                <div className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#06B6D4]/10 dark:from-[#8B5CF6]/5 dark:to-[#06B6D4]/5 rounded-lg p-3 border border-[#8B5CF6]/20 dark:border-[#06B6D4]/20">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <p className="text-xs text-gray-600 dark:text-slate-400">Plan</p>
                      <p className="text-sm font-semibold text-[#0F172A] dark:text-white mt-0.5">{subscription.packageName}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-slate-400">Billing</p>
                      <p className="text-sm font-semibold text-[#0F172A] dark:text-white mt-0.5">{subscription.price}{subscription.billingPeriod}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-slate-400">Renews</p>
                      <p className="text-sm font-semibold text-[#0F172A] dark:text-white mt-0.5">{subscription.renewalDate}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600 dark:text-slate-400">Remaining</p>
                      <p className="text-sm font-semibold text-[#06B6D4] mt-0.5">{subscription.monthsRemaining}m</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xs font-medium text-gray-600 dark:text-slate-400 mb-2">Quick Actions</p>
                <div className="space-y-2">
                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] dark:hover:border-[#06B6D4] hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#0F172A] dark:text-white group-hover:text-[#8B5CF6] dark:group-hover:text-[#06B6D4]">Update Payment</p>
                      </div>
                      <span className="text-gray-400 text-sm">→</span>
                    </div>
                  </button>

                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-[#8B5CF6] dark:hover:border-[#06B6D4] hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-all group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#0F172A] dark:text-white group-hover:text-[#8B5CF6] dark:group-hover:text-[#06B6D4]">Pause Subscription</p>
                      </div>
                      <span className="text-gray-400 text-sm">→</span>
                    </div>
                  </button>

                  <button className="w-full text-left p-3 rounded-lg border border-gray-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-900 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all group">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-[#0F172A] dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400">Cancel Subscription</p>
                      </div>
                      <span className="text-gray-400 text-sm">→</span>
                    </div>
                  </button>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 border border-yellow-200 dark:border-yellow-800">
                <p className="text-xs text-yellow-900 dark:text-yellow-300">
                  Cancellations take effect at the end of your billing period ({subscription.renewalDate}).
                </p>
              </div>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-slate-700">
              <Button
                onClick={() => setShowManageModal(false)}
                className="w-full bg-[#8B5CF6] hover:bg-[#7C3AED] text-white text-sm"
              >
                Close
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
