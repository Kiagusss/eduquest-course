"use client"

import Image from "next/image"
import Link from "next/link"
import { Users, Clock, MapPin, Calendar } from 'lucide-react'

interface CoachingSession {
  id: number
  title: string
  category: string
  image: string
  mentor: string
  startDate: string
  duration: string
  slots: number
  bookings: number
  status: "Available" | "Booked" | "Completed"
}

interface CoachingSessionCardProps {
  session: CoachingSession
}

export default function CoachingSessionCard({ session }: CoachingSessionCardProps) {
  const getStatusColor = (status: "Available" | "Booked" | "Completed") => {
    switch (status) {
      case "Available":
        return {
          bg: "bg-green-100 dark:bg-green-900/30",
          text: "text-green-700 dark:text-green-400",
          border: "border-green-200 dark:border-green-800"
        }
      case "Booked":
        return {
          bg: "bg-blue-100 dark:bg-blue-900/30", 
          text: "text-blue-700 dark:text-blue-400",
          border: "border-blue-200 dark:border-blue-800"
        }
      case "Completed":
        return {
          bg: "bg-gray-100 dark:bg-gray-800/50",
          text: "text-gray-700 dark:text-gray-400",
          border: "border-gray-200 dark:border-gray-700"
        }
      default:
        return {
          bg: "bg-gray-100 dark:bg-gray-800/50",
          text: "text-gray-700 dark:text-gray-400",
          border: "border-gray-200 dark:border-gray-700"
        }
    }
  }

  const getStatusVariant = (status: "Available" | "Booked" | "Completed") => {
    switch (status) {
      case "Available":
        return "Available"
      case "Booked":
        return "Full Booked" 
      case "Completed":
        return "Completed"
      default:
        return status
    }
  }

  const statusColors = getStatusColor(session.status)
  const progressPercentage = (session.bookings / session.slots) * 100

  return (
    <Link href={`/coaching/${session.id}`} className="block h-full">
      <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full hover:border-purple-300 dark:hover:border-purple-600/50 group">
        {/* Image Section */}
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={session.image || "/placeholder.svg"}
            alt={session.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="bg-purple-600 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg">
              {session.category}
            </span>
          </div>
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${statusColors.bg} ${statusColors.text} ${statusColors.border} shadow-lg`}>
              {getStatusVariant(session.status)}
            </span>
          </div>
          {/* Progress Bar Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex items-center justify-between text-white text-xs mb-2">
              <span>Terisi</span>
              <span>{session.bookings}/{session.slots}</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-1.5">
              <div 
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  progressPercentage >= 80 ? 'bg-red-400' : 
                  progressPercentage >= 50 ? 'bg-yellow-400' : 'bg-green-400'
                }`}
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          {/* Title */}
          <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
            {session.title}
          </h3>

          {/* Mentor Info */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-slate-400 mb-3">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {session.mentor.charAt(0)}
            </div>
            <span>by {session.mentor}</span>
          </div>

          {/* Session Details */}
          <div className="space-y-2.5 mb-4 text-sm">
            <div className="flex items-center text-gray-600 dark:text-slate-400">
              <Calendar className="w-4 h-4 mr-3 text-purple-500" />
              <span>{session.startDate}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-slate-400">
              <Clock className="w-4 h-4 mr-3 text-purple-500" />
              <span>{session.duration}</span>
            </div>
            <div className="flex items-center text-gray-600 dark:text-slate-400">
              <Users className="w-4 h-4 mr-3 text-purple-500" />
              <span>{session.bookings} dari {session.slots} peserta</span>
            </div>
          </div>

          {/* Action Button */}
          <div className={`text-center py-2.5 rounded-lg font-semibold text-sm border transition-all duration-300 ${
            session.status === "Available" 
              ? "bg-purple-600 hover:bg-purple-700 text-white border-purple-600 hover:border-purple-700 shadow-lg hover:shadow-purple-500/25" 
              : session.status === "Booked"
              ? "bg-blue-600 hover:bg-blue-700 text-white border-blue-600 hover:border-blue-700"
              : "bg-gray-500 hover:bg-gray-600 text-white border-gray-500 hover:border-gray-600 cursor-not-allowed"
          }`}>
            {session.status === "Available" && "Book Now"}
            {session.status === "Booked" && "Full Booked"}
            {session.status === "Completed" && "Completed"}
          </div>
        </div>
      </div>
    </Link>
  )
}