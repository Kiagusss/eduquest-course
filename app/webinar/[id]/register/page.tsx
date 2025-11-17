"use client"

import { useState } from "react"
import { use } from "react"
import { ChevronLeft, Calendar, Clock, Users, Check } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import Chatbot from "@/components/chatbot"

export default function WebinarRegistrationPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [selectedTicket, setSelectedTicket] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    interests: "",
  })

  const webinarInfo = {
    title: "Advanced Web Development with Next.js 15",
    presenter: "David Wilson",
    presenterImage: "/profileMen.jpg",
    startDate: "20 Jan 2025",
    startTime: "2:00 PM",
    duration: "90 mins",
  }

  const ticketTypes = [
    { id: "standard", name: "Standard Access", desc: "Live webinar access + Recording", price: "Free" },
    { id: "premium", name: "Premium Access", desc: "Everything + Q&A Priority + Resources", price: "$29" },
    { id: "vip", name: "VIP Access", desc: "Everything + 1:1 Consultation with Presenter", price: "$99" },
  ]

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const isStep1Complete = selectedTicket
  const isStep2Complete =
    formData.fullName && formData.email && formData.phone

  return (
    <div className="flex-1 bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-white via-blue-50 to-purple-50 min-h-screen">
     

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full transition-colors ${
                  s <= step
                    ? "bg-[#7C3AED]"
                    : "bg-gray-200 dark:bg-slate-700"
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
                  Choose Your Ticket
                </h2>
                <p className="text-gray-600 dark:text-slate-300">
                  Select the ticket type that best suits your needs.
                </p>

                <div className="space-y-3">
                  {ticketTypes.map((ticket) => (
                    <label
                      key={ticket.id}
                      className={`flex items-center p-6 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedTicket === ticket.id
                          ? "border-[#7C3AED] bg-[#7C3AED]/10"
                          : "border-gray-200 dark:border-slate-700 hover:border-[#7C3AED]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="ticket"
                        value={ticket.id}
                        checked={selectedTicket === ticket.id}
                        onChange={(e) => setSelectedTicket(e.target.value)}
                        className="w-4 h-4"
                      />
                      <div className="ml-4 flex-1">
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {ticket.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-slate-400">
                          {ticket.desc}
                        </p>
                      </div>
                      <p className="font-bold text-[#7C3AED] text-lg">
                        {ticket.price}
                      </p>
                    </label>
                  ))}
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
                  Continue to Registration
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
                    Full Name *
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
                    Email *
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
                    Phone *
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
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleFormChange}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    What are you most interested in learning?
                  </label>
                  <textarea
                    name="interests"
                    value={formData.interests}
                    onChange={handleFormChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-200 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-700/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                    placeholder="Tell us your interests..."
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
                    Review Registration
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-8 space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Review Your Registration
                </h2>

                <div className="space-y-4 pb-6 border-b border-gray-200 dark:border-slate-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Webinar Details
                  </h3>
                  <div className="space-y-2 text-sm">
                    <p className="flex justify-between text-gray-700 dark:text-slate-300">
                      <span>Title:</span>
                      <span className="font-semibold">{webinarInfo.title}</span>
                    </p>
                    <p className="flex justify-between text-gray-700 dark:text-slate-300">
                      <span>Date:</span>
                      <span className="font-semibold">{webinarInfo.startDate}</span>
                    </p>
                    <p className="flex justify-between text-gray-700 dark:text-slate-300">
                      <span>Time:</span>
                      <span className="font-semibold">{webinarInfo.startTime} ({webinarInfo.duration})</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4 pb-6 border-b border-gray-200 dark:border-slate-700">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Your Information
                  </h3>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-slate-300">
                    <p><span className="text-gray-600 dark:text-slate-400">Name: </span>{formData.fullName}</p>
                    <p><span className="text-gray-600 dark:text-slate-400">Email: </span>{formData.email}</p>
                    <p><span className="text-gray-600 dark:text-slate-400">Phone: </span>{formData.phone}</p>
                    {formData.company && <p><span className="text-gray-600 dark:text-slate-400">Company: </span>{formData.company}</p>}
                  </div>
                </div>

                
                <div className="space-y-2 pb-6 border-b border-gray-200 dark:border-slate-700">
                  <p className="flex justify-between font-semibold text-gray-900 dark:text-white">
                    <span>Selected Ticket:</span>
                    <span>
                      {ticketTypes.find(t => t.id === selectedTicket)?.name}
                    </span>
                  </p>
                  <p className="flex justify-between font-semibold text-[#7C3AED] text-lg">
                    <span>Price:</span>
                    <span>
                      {ticketTypes.find(t => t.id === selectedTicket)?.price}
                    </span>
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 py-3 px-4 rounded-lg font-semibold border-2 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
                  >
                    Back
                  </button>
                  <Link
                    href={`/webinar/${id}/confirmation`}
                    className="flex-1 py-3 px-4 rounded-lg font-semibold bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-colors text-center"
                  >
                    Complete Registration
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-20 bg-white dark:bg-slate-800/50 rounded-xl border border-gray-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                Registration Summary
              </h3>

              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200 dark:border-slate-700">
                <div className="relative w-12 h-12 flex-shrink-0 rounded-full overflow-hidden">
                  <Image
                    src={webinarInfo.presenterImage || "/placeholder.svg"}
                    alt={webinarInfo.presenter}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {webinarInfo.presenter}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-slate-400">
                    Presenter
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200 dark:border-slate-700 text-sm">
                <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300">
                  <Calendar className="w-4 h-4 text-[#7C3AED]" />
                  {webinarInfo.startDate}
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300">
                  <Clock className="w-4 h-4 text-[#7C3AED]" />
                  {webinarInfo.startTime}
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-slate-300">
                  <Users className="w-4 h-4 text-[#7C3AED]" />
                  {webinarInfo.duration}
                </div>
              </div>

              {selectedTicket && (
                <div className="space-y-2 pb-6 border-b border-gray-200 dark:border-slate-700">
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    {ticketTypes.find(t => t.id === selectedTicket)?.name}
                  </p>
                  <p className="text-2xl font-bold text-[#7C3AED]">
                    {ticketTypes.find(t => t.id === selectedTicket)?.price}
                  </p>
                </div>
              )}

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-4 text-xs text-blue-900 dark:text-blue-200">
                <p>
                  You will receive confirmation email with webinar link after registration.
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
