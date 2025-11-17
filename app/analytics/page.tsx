'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Clock, CheckCircle, Award } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Progress } from '@/components/ui/progress'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import Sidebar, { TopNav } from '@/components/sidebar'
import Chatbot from '@/components/chatbot'

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState('week')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const progressData = [
    { name: 'Mon', progress: 20 },
    { name: 'Tue', progress: 35 },
    { name: 'Wed', progress: 28 },
    { name: 'Thu', progress: 45 },
    { name: 'Fri', progress: 52 },
    { name: 'Sat', progress: 40 },
    { name: 'Sun', progress: 58 },
  ]

  const engagementData = [
    { name: 'Videos', value: 45 },
    { name: 'Quizzes', value: 28 },
    { name: 'Assignments', value: 18 },
    { name: 'Resources', value: 9 },
  ]

  const moduleData = [
    { name: 'Module 1', completed: 95, attempted: 100 },
    { name: 'Module 2', completed: 87, attempted: 95 },
    { name: 'Module 3', completed: 72, attempted: 88 },
    { name: 'Module 4', completed: 45, attempted: 60 },
    { name: 'Module 5', completed: 20, attempted: 35 },
  ]

  const skillsData = [
    { skill: 'UI Design', mastery: 78 },
    { skill: 'Typography', mastery: 65 },
    { skill: 'Color Theory', mastery: 82 },
    { skill: 'Prototyping', mastery: 71 },
    { skill: 'User Research', mastery: 58 },
  ]

  const COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b']

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-slate-900">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col min-w-0">
        <TopNav onMenuToggle={() => setSidebarOpen(!sidebarOpen)} sidebarOpen={sidebarOpen} />

        <main className="flex-1 p-4 sm:p-6 bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-white via-blue-50 to-purple-50">
          <div className="max-w-7xl mx-auto">

            <div className="mb-8">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Your Learning Analytics</h1>
                  <p className="text-gray-600 dark:text-slate-400">Track your progress and performance metrics</p>
                </div>
                <div className="flex gap-2">
                  {['week', 'month', 'all'].map(range => (
                    <Button
                      key={range}
                      variant={timeRange === range ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setTimeRange(range)}
                      className="capitalize"
                    >
                      {range}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <Card className="p-6 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">Overall Progress</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">72%</p>
                  </div>
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">Learning Hours</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">24.5</p>
                  </div>
                  <div className="bg-blue-500/10 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-blue-500" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">Completed Modules</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">3 / 5</p>
                  </div>
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-slate-400 mb-1">Quiz Average</p>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white">86%</p>
                  </div>
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                </div>
              </Card>
            </div>

            <Tabs defaultValue="progress" className="space-y-6">
              <TabsList>
                <TabsTrigger value="progress">Progress Trend</TabsTrigger>
                <TabsTrigger value="modules">Module Performance</TabsTrigger>
                <TabsTrigger value="skills">Skills Assessment</TabsTrigger>
                <TabsTrigger value="engagement">Engagement</TabsTrigger>
              </TabsList>

              <TabsContent value="progress">
                <Card className="p-6 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Learning Progress</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={progressData}>
                      <defs>
                        <linearGradient id="colorProgress" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="progress" stroke="#3b82f6" fillOpacity={1} fill="url(#colorProgress)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </Card>
              </TabsContent>

              <TabsContent value="modules">
                <Card className="p-6 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Module Completion Rate</h3>
                  <div className="space-y-6">
                    {moduleData.map((module, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{module.name}</span>
                          <span className="text-sm text-gray-600 dark:text-slate-400">{module.completed}%</span>
                        </div>
                        <Progress value={module.completed} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="skills">
                <Card className="p-6 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Skill Mastery Level</h3>
                  <div className="space-y-6">
                    {skillsData.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-900 dark:text-white">{skill.skill}</span>
                          <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">{skill.mastery}%</span>
                        </div>
                        <Progress value={skill.mastery} className="h-3" />
                      </div>
                    ))}
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="engagement" className="grid md:grid-cols-2 gap-6">
                <Card className="p-6 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Activity Distribution</h3>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={engagementData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, value }) => `${name}: ${value}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {engagementData.map((entry, index) => (
                          <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </Card>

                <Card className="p-6 bg-white dark:bg-slate-800/50 border border-gray-200 dark:border-slate-700">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Learning Statistics</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-slate-700">
                      <span className="text-gray-600 dark:text-slate-400">Avg. Session Duration</span>
                      <span className="font-semibold text-gray-900 dark:text-white">45 min</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-slate-700">
                      <span className="text-gray-600 dark:text-slate-400">Completed Quizzes</span>
                      <span className="font-semibold text-gray-900 dark:text-white">12 / 15</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200 dark:border-slate-700">
                      <span className="text-gray-600 dark:text-slate-400">Course Rank</span>
                      <span className="font-semibold text-gray-900 dark:text-white">Top 15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-slate-400">Streak</span>
                      <span className="font-semibold text-gray-900 dark:text-white">8 days</span>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
      <Chatbot/>
    </div>
  )
}
