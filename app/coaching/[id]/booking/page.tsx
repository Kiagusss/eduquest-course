"use client"
import { useState } from "react"
import { ChevronLeft, Calendar, Clock } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import Chatbot from "@/components/chatbot"

export default function CoachingBookingPage({
  params,
}: {
  params: { id: string }
}) {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")
  const [sessionType, setSessionType] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    goals: "",
  })

  const mentorInfo = {
    mentorName: "Sarah Chen",
    mentorImage: "/profile.jpg",
    price: "$80",
    duration: "60 min",
  }

  const availableDates = [
    "2025-01-20",
    "2025-01-21",
    "2025-01-22",
    "2025-01-23",
    "2025-01-24",
  ]

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
  ]

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const isStep1Complete = selectedDate && selectedTime && sessionType
  const isStep2Complete =
    formData.fullName && formData.email && formData.phone && formData.goals

  return (
    <div className="flex-1 bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-white via-blue-50 to-purple-50 min-h-screen">

      <div className="bg-white dark:bg-slate-800/50 border-b border-gray-200 dark:border-slate-700 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            href={`/coaching/${params.id}`}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-slate-300" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Book Coaching Session
            </h1>
            <p className="text-sm text-gray-600 dark:text-slate-400">
              Step {step} of 3
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">

        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full transition-colors ${
                  s <= step ? "bg-[#7C3AED]" : "bg-gray-200 dark:bg-slate-700"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          <div className="lg:col-span-2">

            {step === 1 && (
              <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Select Date & Time
                </h2>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Session Type
                  </label>
                  <div className="space-y-3">
                    {[
                      { id: "beginner", label: "Beginner Consultation", desc: "New to design" },
                      { id: "portfolio", label: "Portfolio Review", desc: "Get feedback on your work" },
                      { id: "advanced", label: "Advanced Coaching", desc: "Deep dive into specific topics" },
                    ].map((type) => (
                      <label
                        key={type.id}
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                          sessionType === type.id
                            ? "border-[#7C3AED] bg-[#7C3AED]/10"
                            : "border-gray-200 dark:border-slate-700 hover:border-[#7C3AED]"
                        }`}
                      >
                        <input
                          type="radio"
                          name="sessionType"
                          value={type.id}
                          checked={sessionType === type.id}
                          onChange={(e) => setSessionType(e.target.value)}
                          className="w-4 h-4"
                        />
                        <div className="ml-4">
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {type.label}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-slate-400">
                            {type.desc}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    <Calendar className="w-5 h-5 inline mr-2" />
                    Select Date
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {availableDates.map((date) => (
                      <button
                        key={date}
                        onClick={() => setSelectedDate(date)}
                        className={`p-4 rounded-lg border-2 transition-all font-medium ${
                          selectedDate === date
                            ? "border-[#7C3AED] bg-[#7C3AED]/10 text-[#7C3AED]"
                            : "border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:border-[#7C3AED]"
                        }`}
                      >
                        {new Date(date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    <Clock className="w-5 h-5 inline mr-2" />
                    Select Time
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 rounded-lg border-2 transition-all font-medium ${
                          selectedTime === time
                            ? "border-[#7C3AED] bg-[#7C3AED]/10 text-[#7C3AED]"
                            : "border-gray-200 dark:border-slate-700 text-gray-700 dark:text-slate-300 hover:border-[#7C3AED]"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!isStep1Complete}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors ${
                    isStep1Complete
                      ? "bg-[#7C3AED] hover:bg-[#6D28D9] text-white cursor-pointer"
                      : "bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-slate-400 cursor-not-allowed"
                  }`}
                >
                  Continue to Details
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Your Information
                </h2>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Learning Goals
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleFormChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                    placeholder="Tell us about your learning goals..."
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-3 px-4 rounded-lg font-semibold border-2 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!isStep2Complete}
                    className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-colors ${
                      isStep2Complete
                        ? "bg-[#7C3AED] hover:bg-[#6D28D9] text-white cursor-pointer"
                        : "bg-gray-200 dark:bg-slate-700 text-gray-500 dark:text-slate-400 cursor-not-allowed"
                    }`}
                  >
                    Review Booking
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Review & Confirm
                </h2>

                <div className="space-y-4 pb-6 border-b border-gray-200 dark:border-slate-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Session Details
                  </h3>
                  <div className="space-y-2">
                    <p className="flex justify-between text-gray-700 dark:text-slate-300">
                      <span>Date:</span>
                      <span className="font-semibold">
                        {new Date(selectedDate).toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </p>
                    <p className="flex justify-between text-gray-700 dark:text-slate-300">
                      <span>Time:</span>
                      <span className="font-semibold">{selectedTime}</span>
                    </p>
                    <p className="flex justify-between text-gray-700 dark:text-slate-300">
                      <span>Type:</span>
                      <span className="font-semibold capitalize">
                        {sessionType}
                      </span>
                    </p>
                    <p className="flex justify-between text-gray-700 dark:text-slate-300">
                      <span>Duration:</span>
                      <span className="font-semibold">
                        {mentorInfo.duration}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pb-6 border-b border-gray-200 dark:border-slate-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Your Information
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-slate-300">
                    <p>
                      <span className="text-gray-600 dark:text-slate-400">
                        Name:{" "}
                      </span>
                      {formData.fullName}
                    </p>
                    <p>
                      <span className="text-gray-600 dark:text-slate-400">
                        Email:{" "}
                      </span>
                      {formData.email}
                    </p>
                    <p>
                      <span className="text-gray-600 dark:text-slate-400">
                        Phone:{" "}
                      </span>
                      {formData.phone}
                    </p>
                    <p>
                      <span className="text-gray-600 dark:text-slate-400">
                        Goals:{" "}
                      </span>
                      {formData.goals}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 px-4 rounded-lg font-semibold border-2 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    Back
                  </button>
                  <Link
                    href={`/coaching/${params.id}/confirmation`}
                    className="flex-1 py-3 px-4 rounded-lg font-semibold bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-colors text-center"
                  >
                    Confirm Booking
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Order Summary
              </h3>

              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200 dark:border-slate-700">
                <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src={mentorInfo.mentorImage || "/placeholder.svg"}
                    alt={mentorInfo.mentorName}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {mentorInfo.mentorName}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    {mentorInfo.duration} session
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200 dark:border-slate-700">
                <div className="flex justify-between text-gray-700 dark:text-slate-300">
                  <span>Session Price</span>
                  <span className="font-semibold">{mentorInfo.price}</span>
                </div>
                <div className="flex justify-between text-gray-700 dark:text-slate-300">
                  <span>Tax & Fee</span>
                  <span className="font-semibold">$8</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-gray-900 dark:text-white">
                  <span>Total</span>
                  <span className="text-[#7C3AED]">$88</span>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-4 text-sm text-blue-900 dark:text-blue-200">
                <p>
                  You will receive a confirmation email with meeting details
                  after booking.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
       <Chatbot />
    </div>
  )
}
