"use client"

import { Calendar, Clock, Users, Play } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

interface WebinarCardProps {
  webinar: {
    id: number
    title: string
    category: string
    image: string
    presenter: string
    startDate: string
    time: string
    duration: string
    attendees: number
    capacity: number
    status: "Upcoming" | "Live" | "Completed"
    price: string
  }
}

export default function WebinarCard({ webinar }: WebinarCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-red-500/20 text-red-600 dark:text-red-400 border-red-200 dark:border-red-900/30"
      case "Upcoming":
        return "bg-blue-500/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/30"
      case "Completed":
        return "bg-gray-500/20 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-900/30"
      default:
        return ""
    }
  }

  return (
    <Link href={`/webinar/${webinar.id}`}>
      <div className="bg-white dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-slate-700 hover:shadow-xl dark:hover:border-purple-600/50 transition-all overflow-hidden cursor-pointer h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-slate-700">
          <Image
            src={webinar.image || "/placeholder.svg"}
            alt={webinar.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          
          {/* Status Badge */}
          <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(webinar.status)}`}>
            {webinar.status === "Live" && <span className="inline-block w-2 h-2 bg-red-500 rounded-full mr-1 animate-pulse" />}
            {webinar.status}
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 bg-[#7C3AED]/80 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {webinar.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-gray-900 dark:text-white line-clamp-2 mb-2 text-base">
            {webinar.title}
          </h3>

          <p className="text-sm text-gray-600 dark:text-slate-400 mb-4">
            with {webinar.presenter}
          </p>

          {/* Details */}
          <div className="space-y-2 text-xs text-gray-600 dark:text-slate-400 mb-4 mt-auto">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#7C3AED]" />
              <span>{webinar.startDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#7C3AED]" />
              <span>{webinar.time} • {webinar.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-[#7C3AED]" />
              <span>{webinar.attendees}/{webinar.capacity} attendees</span>
            </div>
          </div>

          {/* Price and CTA */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-slate-700">
            <span className="font-bold text-[#7C3AED]">{webinar.price}</span>
            <button className="flex items-center gap-1 text-[#7C3AED] hover:text-[#6D28D9] text-sm font-semibold transition-colors">
              {webinar.status === "Live" ? (
                <>
                  <Play className="w-3 h-3 fill-current" />
                  Join Now
                </>
              ) : (
                <>
                  <span>Register</span>
                  →
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </Link>
  )
}
