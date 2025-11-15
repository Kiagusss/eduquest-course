"use client"
import { Check, Calendar, Clock, Users, Mail, ArrowRight } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function CoachingConfirmationPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="flex-1 bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-white via-blue-50 to-purple-50 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Success Card */}
        <div className="bg-white dark:bg-slate-800/50 rounded-2xl border border-gray-200 dark:border-slate-700 p-8 md:p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <Check className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Booking Confirmed!
          </h1>
          <p className="text-gray-600 dark:text-slate-400 mb-8 text-lg">
            Your coaching session has been successfully booked.
          </p>

          {/* Booking Reference */}
          <div className="bg-gray-50 dark:bg-slate-700/30 rounded-lg p-6 mb-8 text-left">
            <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
              Booking Reference
            </p>
            <p className="text-2xl font-bold text-[#7C3AED] font-mono">
              #COACH-2025-001234
            </p>
          </div>

          {/* Session Details */}
          <div className="bg-gray-50 dark:bg-slate-700/30 rounded-lg p-8 mb-8 space-y-6 text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
              Session Details
            </h3>

            <div className="flex items-center gap-4">
              <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#7C3AED]">
                <Image
                  src="/professional-woman-diverse.png"
                  alt="Sarah Chen"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  Sarah Chen
                </p>
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  UI/UX Design Mentor
                </p>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-slate-600">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#7C3AED]" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    Date
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Monday, January 20, 2025
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#7C3AED]" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    Time
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    09:00 AM - 10:00 AM (UTC+7)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#7C3AED]" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    Type
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Portfolio Review
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              What Happens Next?
            </h3>
            <ol className="space-y-3 text-sm text-gray-700 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="font-bold text-[#7C3AED]">1</span>
                You will receive a confirmation email with meeting details and
                Zoom link.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#7C3AED]">2</span>
                Join 5 minutes early to test your audio and video setup.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#7C3AED]">3</span>
                After the session, you can leave feedback and get a recording
                link.
              </li>
            </ol>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/coaching/${params.id}`}
              className="flex-1 py-3 px-4 rounded-lg font-semibold border-2 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
            >
              Back to Mentor Profile
            </Link>
            <Link
              href="/coaching"
              className="flex-1 py-3 px-4 rounded-lg font-semibold bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-colors flex items-center justify-center gap-2"
            >
              Explore More Coaches
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
