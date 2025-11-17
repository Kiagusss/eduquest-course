"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, Share2, Trophy, Star, Clock, Users, BookOpen, ArrowRight, Zap } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

interface CompletionScreenProps {
  courseTitle: string
  totalPoints: number
  instructor: string
  duration: string
  onDownloadCertificate: () => void
}

export function CourseCompletionScreen({
  courseTitle,
  totalPoints,
  instructor,
  duration,
  onDownloadCertificate,
}: CompletionScreenProps) {
  const [certificateDownloaded, setCertificateDownloaded] = useState(false)

  const handleDownloadCertificate = () => {
    onDownloadCertificate()
    setCertificateDownloaded(true)
  }

  const recommendedCourses = [
    {
      id: 2,
      title: "Graphic Design Masterclass using Adobe Illustration",
      instructor: "Michael Chen",
      level: "Intermediate",
      duration: "8 days",
      thumbnail: "/design-graph.jpg",
      category: "Graphic Design",
      learners: "1,245",
    },
    {
      id: 6,
      title: "Advanced UI/UX Design Patterns",
      instructor: "Alex Thompson",
      level: "Advanced",
      duration: "7 days",
      thumbnail: "/ui-ux.jpg",
      category: "UI/UX Design",
      learners: "892",
    },
    {
      id: 4,
      title: "Web Development Full Stack",
      instructor: "David Park",
      level: "Advanced",
      duration: "9 days",
      thumbnail: "/web-development.jpeg",
      category: "Web Development",
      learners: "2,156",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6 sm:p-8">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -20, opacity: 0, rotate: 0 }}
            animate={{ 
              y: "100vh", 
              opacity: [0, 1, 0.5, 0],
              rotate: Math.random() * 360
            }}
            transition={{
              duration: 2.5 + Math.random() * 1.5,
              delay: Math.random() * 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          >
            {["🎉", "⭐", "🏆", "✨", "🎊", "🌟", "💫"][Math.floor(Math.random() * 7)]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Congratulations Section */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-8">
            <motion.div
              animate={{ 
                rotate: 360,
                boxShadow: ["0 0 20px rgba(249, 115, 22, 0.5)", "0 0 40px rgba(249, 115, 22, 0.8)", "0 0 20px rgba(249, 115, 22, 0.5)"]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl"
            >
              <Trophy className="w-12 h-12 text-white" />
            </motion.div>
          </div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance leading-tight"
          >
            Selamat! Kamu Sudah Menyelesaikan Kursus
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl sm:text-2xl text-purple-300 font-semibold mb-2"
          >
            {courseTitle}
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 text-lg"
          >
            by {instructor}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <motion.div
            whileHover={{ translateY: -8 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gradient-to-br from-purple-500/30 to-purple-600/20 border-purple-500/40 backdrop-blur-sm p-8 text-center hover:border-purple-400/60 transition-all">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="text-5xl font-bold text-purple-300 mb-3"
              >
                {totalPoints}
              </motion.div>
              <div className="text-slate-300 flex items-center justify-center gap-2 font-medium">
                <Zap className="w-5 h-5 text-yellow-400" />
                Total Points Diperoleh
              </div>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ translateY: -8 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <Card className="bg-gradient-to-br from-blue-500/30 to-blue-600/20 border-blue-500/40 backdrop-blur-sm p-8 text-center hover:border-blue-400/60 transition-all">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="text-5xl font-bold text-blue-300 mb-3"
              >
                100%
              </motion.div>
              <div className="text-slate-300 flex items-center justify-center gap-2 font-medium">
                <Trophy className="w-5 h-5 text-amber-400" />
                Course Progress
              </div>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ translateY: -8 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-green-500/30 to-green-600/20 border-green-500/40 backdrop-blur-sm p-8 text-center hover:border-green-400/60 transition-all">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="text-5xl font-bold text-green-300 mb-3"
              >
                {duration}
              </motion.div>
              <div className="text-slate-300 flex items-center justify-center gap-2 font-medium">
                <Clock className="w-5 h-5 text-cyan-400" />
                Total Duration
              </div>
            </Card>
          </motion.div>
        </motion.div>

        {/* Certificate Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <Card className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 border-slate-600 overflow-hidden backdrop-blur-sm shadow-2xl">
            <div className="p-8 sm:p-12 lg:p-16">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-r from-amber-100 via-yellow-50 to-amber-100 rounded-lg p-8 sm:p-12 lg:p-16 text-center border-4 border-amber-200 shadow-lg"
              >
                <div className="mb-6">
                  <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-sm font-bold text-amber-800 uppercase tracking-widest"
                  >
                    Certificate of Completion
                  </motion.div>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                  Anda telah berhasil menyelesaikan
                </h2>
                <p className="text-xl sm:text-2xl text-slate-800 mb-10 italic font-semibold">{courseTitle}</p>
                <div className="space-y-4 text-slate-700 mb-8">
                  <p className="text-lg">
                    Dengan ini diakui bahwa Anda telah mendemonstrasikan pengetahuan dan keterampilan yang diperlukan untuk berhasil menyelesaikan kursus ini dengan skor {totalPoints} poin.
                  </p>
                  <div className="pt-6 border-t-2 border-amber-300">
                    <p className="font-bold text-lg">Instructor: {instructor}</p>
                  </div>
                </div>
              </motion.div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={handleDownloadCertificate}
                    className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold flex items-center justify-center gap-2 px-8 py-3 text-lg"
                  >
                    <Download className="w-5 h-5" />
                    {certificateDownloaded ? "Sertifikat Berhasil Diunduh ✓" : "Unduh Sertifikat"}
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="text-white bg-transparent border-slate-400 hover:bg-slate-700/50 hover:border-slate-300 font-semibold dark: flex items-center justify-center gap-2 px-8 py-3 text-lg dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-[#06B6D4]/50"
                  >
                    <Share2 className="w-5 h-5" />
                    Bagikan Pencapaian
                  </Button>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-purple-400" />
            Kursus Berikutnya yang Kami Rekomendasikan
          </h2>
          <p className="text-slate-400 mb-8 text-lg">Lanjutkan perjalanan pembelajaran Anda dengan kursus-kursus terbaik berikutnya</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {recommendedCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                whileHover={{ translateY: -8 }}
              >
                <Card className="bg-gradient-to-br from-slate-800 to-slate-700 border-slate-700 overflow-hidden hover:border-purple-500 transition-all duration-300 group cursor-pointer h-full flex flex-col shadow-lg">
                  <div className="relative h-48 overflow-hidden bg-slate-700">
                    <img
                      src={course.thumbnail || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold">
                        {course.level}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col space-y-4">
                    <div>
                      <h3 className="font-bold text-white line-clamp-2 mb-2 text-lg group-hover:text-purple-300 transition">{course.title}</h3>
                      <p className="text-sm text-slate-400 font-medium">{course.instructor}</p>
                    </div>

                    <div className="space-y-2 text-sm text-slate-300 flex-1">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-pink-400" />
                        <span>{course.learners} learners</span>
                      </div>
                    </div>

                    <Link
                      href={`/course/${course.id}`}
                      className="w-full mt-2"
                    >
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 px-4 rounded-lg transition-all flex items-center justify-center gap-2"
                      >
                        Lihat Kursus
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/course">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-slate-700 to-slate-800 border border-slate-600 hover:border-slate-500 text-white font-semibold py-3 px-8 rounded-lg transition-all inline-flex items-center gap-2"
              >
                Lihat Semua Kursus
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
