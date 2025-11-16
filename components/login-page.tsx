"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 flex">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-16 py-12">
        {/* Logo */}
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] flex items-center justify-center">
              <span className="text-white font-bold text-sm">∞</span>
            </div>
            <span className="text-xl font-bold text-[#0F172A] dark:text-white">Edutech</span>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A] dark:text-white mb-3">
            Halo,
            <br />
            Selamat Kembali
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-base">Lanjutkan pembelajaran Anda di platform terbaik</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
          {/* Email */}
          <div>
            <label className="text-sm font-medium text-[#0F172A] dark:text-white mb-2 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B5CF6]/50 pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl pl-10 pr-4 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="text-sm font-medium text-[#0F172A] dark:text-white mb-2 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B5CF6]/50 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-700 rounded-xl pl-10 pr-10 py-3 text-gray-900 dark:text-white placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-[#8B5CF6] transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 accent-[#8B5CF6] cursor-pointer rounded" />
              <span className="text-gray-600 dark:text-gray-400">Ingat saya</span>
            </label>
            <a href="#" className="text-[#8B5CF6] hover:text-[#06B6D4] font-medium transition-colors">
              Lupa password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] hover:shadow-lg hover:shadow-[#8B5CF6]/30 text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-8"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Masuk...</span>
              </>
            ) : (
              <>
                <span>Masuk</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Sign Up Link */}
        <p className="mt-8 text-gray-600 dark:text-gray-400 text-sm">
          Belum punya akun?{" "}
          <a href="#" className="text-[#8B5CF6] hover:text-[#06B6D4] font-semibold transition-colors">
            Daftar sekarang
          </a>
        </p>
      </div>

      {/* Right side - Gradient Hero */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#8B5CF6] via-purple-500 to-[#06B6D4] relative overflow-hidden items-center justify-center">
        {/* Decorative circles */}
        <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-white/5 rounded-full blur-2xl"></div>

        {/* Illustration area with course elements */}
        <div className="relative z-10 text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              {/* Phone/Device frame */}
              <div className="w-48 h-80 bg-white rounded-3xl shadow-2xl relative border-8 border-white/20 backdrop-blur-sm flex flex-col items-center justify-center p-6">
                <div className="w-full space-y-4">
                  <div className="h-12 bg-gradient-to-r from-[#8B5CF6]/30 to-[#06B6D4]/30 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-6 bg-[#06B6D4]/60 rounded"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-[#8B5CF6]/20 rounded w-full"></div>
                    <div className="h-2 bg-[#8B5CF6]/20 rounded w-4/5"></div>
                  </div>
                  <div className="pt-4 space-y-2">
                    <div className="h-2 bg-[#06B6D4]/20 rounded"></div>
                    <div className="h-2 bg-[#06B6D4]/20 rounded w-3/4"></div>
                  </div>
                </div>
              </div>

              {/* Checkmark decoration */}
              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="text-white max-w-xs">
            <h2 className="text-2xl font-bold mb-2">Belajar Tanpa Batas</h2>
            <p className="text-white/80 text-sm leading-relaxed">
              Akses ribuan kursus berkualitas tinggi dari para ahli industri
            </p>
          </div>
        </div>

        {/* Status indicator */}
        <div className="absolute bottom-8 left-8 flex items-center gap-2">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <span className="text-white/80 text-xs">Sistem Online</span>
        </div>
      </div>
    </div>
  )
}
