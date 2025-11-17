"use client"

import { useState } from "react"
import { ChevronLeft, Star, Calendar, Clock, Users, Award, Share2, Bell } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { use } from "react"

const webinarDetails = {
  1: {
    id: 1,
    title: "Advanced Web Development with Next.js 15",
    description: "Pelajari advanced features di Next.js 15 termasuk Server Components, App Router, dan optimization techniques terbaru untuk membangun aplikasi web yang scalable dan performant.",
    presenter: "David Wilson",
    presenterImage: "/profileMen.jpg",
    category: "Development",
    image: "/web-development.jpeg",
    startDate: "20 Jan 2025",
    startTime: "2:00 PM",
    endTime: "3:30 PM",
    duration: "90 mins",
    timezone: "UTC+7",
    attendees: 342,
    capacity: 500,
    status: "Upcoming",
    price: "Free",
    rating: 4.8,
    reviews: 124,
    bio: "David Wilson adalah senior developer dengan 12+ tahun pengalaman di industri. Dia telah membantu ribuan developer mastering modern web development dengan fokus pada Next.js dan React ecosystem.",
    highlights: [
      "Server Components in Next.js 15",
      "Advanced API Routes & Middleware",
      "Performance Optimization Techniques",
      "Real-world Project Structure",
      "Deployment Best Practices",
    ],
    agenda: [
      { time: "2:00 PM", topic: "Introduction & Setup" },
      { time: "2:10 PM", topic: "Server Components Deep Dive" },
      { time: "2:35 PM", topic: "Advanced Routing Patterns" },
      { time: "3:00 PM", topic: "Q&A Session" },
      { time: "3:30 PM", topic: "Closing Remarks" },
    ],
    requirements: [
      "Basic knowledge of React",
      "Node.js installed",
      "Code editor (VS Code recommended)",
      "Curiosity to learn",
    ],
    resources: [
      "Next.js 15 Documentation",
      "Starter Project Files",
      "Recording & Slides",
      "Bonus Tutorial Series",
    ],
  },
}

export default function WebinarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const webinarId = parseInt(id, 10)
  const webinar = (webinarId in webinarDetails ? webinarDetails[webinarId as keyof typeof webinarDetails] : webinarDetails[1])
  const [activeTab, setActiveTab] = useState("overview")
  const [isReminded, setIsReminded] = useState(false)

  return (
    <div className="flex-1 bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-white via-blue-50 to-purple-50 min-h-screen">
     

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <Image
                src={webinar.image || "/placeholder.svg"}
                alt={webinar.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute top-4 left-4 bg-[#7C3AED]/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {webinar.status}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {webinar.title}
              </h2>
              <p className="text-lg text-gray-600 dark:text-slate-300">
                {webinar.description}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                About Presenter
              </h3>
              <div className="flex items-start gap-4">
                <div className="relative w-20 h-20 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#7C3AED]">
                  <Image
                    src={webinar.presenterImage || "/placeholder.svg"}
                    alt={webinar.presenter}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                    {webinar.presenter}
                  </h4>
                  <div className="flex items-center gap-2 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(webinar.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300 dark:text-slate-600"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 dark:text-slate-400">
                      ({webinar.reviews} reviews)
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-slate-300">
                    {webinar.bio}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-200 dark:border-slate-700">
              <div className="flex gap-8">
                {["overview", "agenda", "requirements"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-2 font-semibold border-b-2 transition-colors capitalize ${
                      activeTab === tab
                        ? "border-[#7C3AED] text-[#7C3AED]"
                        : "border-transparent text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-slate-300"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "overview" && (
              <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    What You'll Learn
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {webinar.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#7C3AED] text-sm font-bold">✓</span>
                        </div>
                        <p className="text-gray-700 dark:text-slate-300">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Resources Provided
                  </h3>
                  <ul className="space-y-2">
                    {webinar.resources.map((resource, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-gray-700 dark:text-slate-300"
                      >
                        <span className="text-[#7C3AED]">•</span>
                        {resource}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {activeTab === "agenda" && (
              <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Webinar Agenda
                </h3>
                <div className="space-y-4">
                  {webinar.agenda.map((item, idx) => (
                    <div key={idx} className="flex gap-4 pb-4 border-b border-gray-200 dark:border-slate-700 last:border-0">
                      <div className="w-24 text-sm font-semibold text-[#7C3AED]">
                        {item.time}
                      </div>
                      <div className="flex-1 text-gray-700 dark:text-slate-300">
                        {item.topic}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "requirements" && (
              <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Requirements
                </h3>
                <ul className="space-y-3">
                  {webinar.requirements.map((req, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700 dark:text-slate-300"
                    >
                      <span className="w-6 h-6 rounded-full bg-[#7C3AED]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#7C3AED] text-sm font-bold">✓</span>
                      </span>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6 shadow-lg space-y-6">
              <div>
                <p className="text-gray-600 dark:text-slate-400 text-sm mb-1">
                  Price
                </p>
                <p className="text-4xl font-bold text-[#7C3AED]">
                  {webinar.price}
                </p>
              </div>

              <div className="space-y-3 pb-6 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-gray-700 dark:text-slate-300">
                    {webinar.startDate}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-gray-700 dark:text-slate-300">
                    {webinar.startTime} - {webinar.endTime} ({webinar.timezone})
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-gray-700 dark:text-slate-300">
                    {webinar.attendees}/{webinar.capacity} registered
                  </span>
                </div>
              </div>

              <Link
                href={`/webinar/${webinar.id}/register`}
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center block"
              >
                Register Now
              </Link>

              <button
                onClick={() => setIsReminded(!isReminded)}
                className={`w-full py-3 px-4 rounded-lg font-semibold transition-all ${
                  isReminded
                    ? "bg-[#7C3AED]/10 text-[#7C3AED] border-2 border-[#7C3AED]"
                    : "border-2 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:border-[#7C3AED] hover:text-[#7C3AED]"
                }`}
              >
                <Bell className="w-4 h-4 inline mr-2" />
                {isReminded ? "Reminder Set" : "Set Reminder"}
              </button>

              <button className="w-full border-2 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700/50 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
