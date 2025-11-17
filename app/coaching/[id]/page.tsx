"use client"
import { useState } from "react"
import { use } from "react"
import { ChevronLeft, Star, MapPin, Clock, Users, Award, MessageCircle } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

const coachingDetails = {
  1: {
    id: 1,
    mentorName: "Sarah Chen",
    mentorImage: "/profile.jpg",
    category: "UI/UX Design",
    image: "/ui-uxx.jpg",
    price: "$80",
    rating: 4.9,
    reviews: 245,
    duration: "60 min sessions",
    availability: "Flexible hours",
    students: 1200,
    experience: "10+ years",
    bio: "Sarah Chen adalah desainer UI/UX berpengalaman dengan track record membantu ratusan desainer meningkatkan skill mereka. Spesialisasi dalam design thinking, prototyping, dan user research.",
    highlights: [
      "Expert dalam Figma & Adobe XD",
      "Berpengalaman di startup dan perusahaan besar",
      "Personalized learning path",
      "Real-world project guidance",
    ],
    qualifications: [
      "Google UX Design Certification",
      "Interaction Design Specialist",
      "10+ years in Product Design",
      "Led design teams at Fortune 500 companies",
    ],
    schedule: [
      { day: "Senin-Jumat", time: "9:00 AM - 5:00 PM" },
      { day: "Sabtu", time: "10:00 AM - 2:00 PM" },
    ],
    studentReviews: [
      {
        name: "John Doe",
        rating: 5,
        comment: "Sarah is an amazing mentor! She helped me transition into UX design successfully.",
        date: "2 weeks ago",
      },
      {
        name: "Jane Smith",
        rating: 5,
        comment: "Very knowledgeable and patient. Highly recommended for anyone serious about design.",
        date: "1 month ago",
      },
    ],
  },
}

export default function CoachingDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const coachingId = parseInt(id, 10)
  const coaching = (coachingId in coachingDetails ? coachingDetails[coachingId as keyof typeof coachingDetails] : coachingDetails[1])
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex-1 bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-white via-blue-50 to-purple-50 min-h-screen">
      <div className="bg-white dark:bg-slate-800/50 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            href="/coaching"
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-slate-300" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Coaching Detail
            </h1>
            <p className="text-sm text-gray-600 dark:text-slate-400">
              {coaching.category}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-full h-80 rounded-xl overflow-hidden">
              <Image
                src={coaching.image || "/placeholder.svg"}
                alt={coaching.mentorName}
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-full overflow-hidden border-4 border-[#7C3AED]">
                  <Image
                    src={coaching.mentorImage || "/placeholder.svg"}
                    alt={coaching.mentorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {coaching.mentorName}
                  </h2>
                  <p className="text-[#7C3AED] font-semibold">{coaching.category}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(coaching.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300 dark:text-slate-600"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-600 dark:text-slate-300">
                      {coaching.rating} ({coaching.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y border-gray-200 dark:border-slate-700">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#7C3AED]">
                    {coaching.students}+
                  </p>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    Students
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#7C3AED]">
                    {coaching.experience}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    Experience
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#7C3AED]">98%</p>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    Satisfaction
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                About Mentor
              </h3>
              <p className="text-gray-700 dark:text-slate-300 leading-relaxed">
                {coaching.bio}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                What You'll Learn
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {coaching.highlights.map((highlight, idx) => (
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

            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#7C3AED]" />
                Qualifications
              </h3>
              <ul className="space-y-2">
                {coaching.qualifications.map((qual, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-gray-700 dark:text-slate-300"
                  >
                    <span className="text-[#7C3AED] mt-1">•</span>
                    {qual}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#7C3AED]" />
                Availability
              </h3>
              <div className="space-y-2">
                {coaching.schedule.map((slot, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center p-3 bg-gray-50 dark:bg-slate-700/30 rounded-lg"
                  >
                    <span className="font-medium text-gray-700 dark:text-slate-300">
                      {slot.day}
                    </span>
                    <span className="text-gray-600 dark:text-slate-400">
                      {slot.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#7C3AED]" />
                Student Reviews
              </h3>
              <div className="space-y-4">
                {coaching.studentReviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gray-50 dark:bg-slate-700/30 rounded-lg"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {review.name}
                      </h4>
                      <span className="text-xs text-gray-500 dark:text-slate-400">
                        {review.date}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 dark:text-slate-300">
                      {review.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6 shadow-lg">
              <div className="mb-6">
                <p className="text-gray-600 dark:text-slate-400 text-sm mb-2">
                  Price per session
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-[#7C3AED]">
                    {coaching.price}
                  </span>
                  <span className="text-gray-600 dark:text-slate-400">
                    / {coaching.duration}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200 dark:border-slate-700">
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-gray-700 dark:text-slate-300">
                    {coaching.duration}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-gray-700 dark:text-slate-300">
                    {coaching.availability}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-4 h-4 text-[#7C3AED]" />
                  <span className="text-gray-700 dark:text-slate-300">
                    {coaching.students}+ students
                  </span>
                </div>
              </div>

              <Link
                href={`/coaching/${coaching.id}/booking`}
                className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-semibold py-3 px-4 rounded-lg transition-colors mb-3 block text-center"
              >
                Book Session
              </Link>

              <button className="w-full border-2 border-[#7C3AED] text-[#7C3AED] hover:bg-[#7C3AED]/10 font-semibold py-3 px-4 rounded-lg transition-colors">
                Message Mentor
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
