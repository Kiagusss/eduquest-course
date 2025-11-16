"use client"

import { use } from "react"
import { Check, Calendar, Clock, Users, Mail, ArrowRight, Download } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function WebinarConfirmationPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params)
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
            Registration Confirmed!
          </h1>
          <p className="text-gray-600 dark:text-slate-400 mb-8 text-lg">
            You are now registered for the webinar. Check your email for confirmation.
          </p>

          {/* Registration Reference */}
          <div className="bg-gray-50 dark:bg-slate-700/30 rounded-lg p-6 mb-8 text-left">
            <p className="text-sm text-gray-600 dark:text-slate-400 mb-2">
              Registration Reference
            </p>
            <p className="text-2xl font-bold text-[#7C3AED] font-mono">
              #WEBINAR-2025-001245
            </p>
          </div>

          {/* Webinar Details */}
          <div className="bg-gray-50 dark:bg-slate-700/30 rounded-lg p-8 mb-8 space-y-6 text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
              Webinar Details
            </h3>

            <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-slate-600">
              <div className="relative w-16 h-16 flex-shrink-0 rounded-full overflow-hidden border-2 border-[#7C3AED]">
                <Image
                  src="/professional-man.jpg"
                  alt="David Wilson"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">
                  David Wilson
                </p>
                <p className="text-sm text-gray-600 dark:text-slate-400">
                  Advanced Web Development with Next.js 15
                </p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-[#7C3AED]" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    Date
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    January 20, 2025
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
                    2:00 PM - 3:30 PM (UTC+7)
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-[#7C3AED]" />
                <div>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    Ticket Type
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Premium Access
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              What to Expect
            </h3>
            <ol className="space-y-3 text-sm text-gray-700 dark:text-slate-300">
              <li className="flex gap-3">
                <span className="font-bold text-[#7C3AED]">1</span>
                Check your email for the webinar link and login credentials.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#7C3AED]">2</span>
                Join 10 minutes early to test your audio and camera.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#7C3AED]">3</span>
                Participate in live Q&A session with the presenter.
              </li>
              <li className="flex gap-3">
                <span className="font-bold text-[#7C3AED]">4</span>
                Download the recording and materials after the webinar.
              </li>
            </ol>
          </div>

          {/* Download Options */}
          <div className="bg-gray-50 dark:bg-slate-700/30 rounded-lg p-6 mb-8 space-y-3">
            <h3 className="font-semibold text-gray-900 dark:text-white text-left">
              Download Resources
            </h3>
            <div className="flex gap-2 flex-col sm:flex-row">
              <button className="flex-1 flex items-center justify-center gap-2 p-3 border border-gray-200 dark:border-slate-600 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600/50 transition-colors text-gray-700 dark:text-slate-300 font-medium">
                <Download className="w-4 h-4" />
                Download iCal
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 p-3 border border-gray-200 dark:border-slate-600 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-600/50 transition-colors text-gray-700 dark:text-slate-300 font-medium">
                <Download className="w-4 h-4" />
                Download PDF
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/webinar/${id}`}
              className="flex-1 py-3 px-4 rounded-lg font-semibold border-2 border-gray-200 dark:border-slate-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-slate-700/50 transition-colors"
            >
              Back to Webinar
            </Link>
            <Link
              href="/webinar"
              className="flex-1 py-3 px-4 rounded-lg font-semibold bg-[#7C3AED] hover:bg-[#6D28D9] text-white transition-colors flex items-center justify-center gap-2"
            >
              Explore More Webinars
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
