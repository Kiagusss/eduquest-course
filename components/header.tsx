"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] rounded-lg"></div>
            <span className="text-xl font-bold text-[#0F172A]">LearnHub</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#courses" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">
              Courses
            </a>
            <a href="#features" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">
              Features
            </a>
            <a href="#about" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">
              About
            </a>
            <a href="#contact" className="text-gray-600 hover:text-[#8B5CF6] transition-colors">
              Contact
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-600 hover:text-[#8B5CF6] transition-colors">Sign In</button>
            <button className="px-6 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              Get Started
            </button>
          </div>

          <button className="md:hidden text-[#0F172A]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-4">
            <a href="#courses" className="block text-gray-600 hover:text-[#8B5CF6]">
              Courses
            </a>
            <a href="#features" className="block text-gray-600 hover:text-[#8B5CF6]">
              Features
            </a>
            <a href="#about" className="block text-gray-600 hover:text-[#8B5CF6]">
              About
            </a>
            <a href="#contact" className="block text-gray-600 hover:text-[#8B5CF6]">
              Contact
            </a>
            <button className="w-full px-4 py-2 bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white rounded-lg">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
