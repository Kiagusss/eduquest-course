"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Lock, Eye, EyeOff, ArrowRight, User } from "lucide-react"
import Image from "next/image"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-white flex">
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-[#8B5CF6] via-purple-500 to-[#06B6D4] relative overflow-hidden items-center justify-center">

        <div className="absolute top-10 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-28 h-28 bg-white/5 rounded-full blur-2xl"></div>

        <div className="relative z-10 text-center">
          <div className="mb-1 flex justify-center">
            <div className="relative">
              <Image src="/signIn.png" width={300} height={300} alt="Orang Belajar" />

              <div className="absolute -top-6 -right-6 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-[#8B5CF6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-white max-w-xs ">
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
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start px-6 sm:px-12 lg:px-16 py-12">
        <div className="mb-12">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] flex items-center justify-center">
              <span className="text-white font-bold text-sm">∞</span>
            </div>
            <span className="text-xl font-bold text-[#0F172A]">Edutech</span>
          </div>
        </div>

        <div className="mb-5 ">
          <h1 className=" lg:text-5xl md:text-4xl text-3xl font-bold text-[#0F172A] mb-2">
            Halo,
            <br />
            Ayo Belajar
          </h1>
          <p className="text-gray-600 text-base">Ayo Belajar, di jamin seru dan menyenangkan</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 max-w-md">
          <div>
            <label className="text-sm font-medium text-[#0F172A] mb-2 block">Nama</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B5CF6]/50 pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nama Anda..."
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="text-sm font-medium text-[#0F172A] mb-2 block">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B5CF6]/50 pointer-events-none" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all"
              />
            </div>
          </div>
         

          <div>
            <label className="text-sm font-medium text-[#0F172A] mb-2 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B5CF6]/50 pointer-events-none" />
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-20 md:pl-25 lg:pl-10 pr-10 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#8B5CF6] transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium text-[#0F172A] mb-2 block">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B5CF6]/50 pointer-events-none" />
              <input
                type={showConfirm ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 rounded-xl pl-20 md:pl-25 lg:pl-10 pr-10 py-3 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/20 transition-all"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#8B5CF6] transition-colors"
              >
                {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>
          

      
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] hover:shadow-lg hover:shadow-[#8B5CF6]/30 text-white font-medium py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 mt-8"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Daftar...</span>
              </>
            ) : (
              <>
                <span>Daftar</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        </form>


        <p className="mt-8 text-gray-600 text-sm">
          Sudah punya akun?{" "}
          <a href="/login" className="text-[#8B5CF6] hover:text-[#06B6D4] font-semibold transition-colors">
            Masuk sekarang
          </a>
        </p>
      </div>

      
    </div>
  )
}
