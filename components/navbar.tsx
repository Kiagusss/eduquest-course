"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Logo } from "@/components/logo"
import { MobileMenu } from "@/components/mobile-menu"
import { ThemeToggle } from "./theme-toggle"
import { Button } from "@/components/ui/button"
import { User, ArrowRight } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024) // 1024px = xl breakpoint
    }

    // Initial check
    checkScreenSize()

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)

      // Improved active section detection
      const sections = [
        "home",
        "services",
        "about",
        "process",
        "testimoni",
        "courses",
        "pricing",
        "contact",
      ]

      let currentSection = ""
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height
          
          // Check if element is in viewport with offset
          if (window.scrollY >= elementTop - 100 && window.scrollY < elementBottom - 100) {
            currentSection = section
            break
          }
        }
      }

      // Fallback: if no section found, check which section is closest to top
      if (!currentSection) {
        let closestSection = ""
        let closestDistance = Infinity

        for (const section of sections) {
          const element = document.getElementById(section)
          if (element) {
            const rect = element.getBoundingClientRect()
            const distance = Math.abs(rect.top)
            if (distance < closestDistance) {
              closestDistance = distance
              closestSection = section
            }
          }
        }
        currentSection = closestSection
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", checkScreenSize)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", checkScreenSize)
    }
  }, [])

  const navItems = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#process", label: "Process" },
    { href: "#testimoni", label: "Testimoni" },
    { href: "#courses", label: "Courses" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ]

  const isActive = (href: string) => activeSection === href.replace("#", "")

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex h-14 sm:h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9">
              <Logo />
            </div>
            <span className="font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              EduQuest
            </span>
          </Link>

          {/* Desktop Navigation - Only show on screens >= 1024px */}
          <div className="hidden xl:flex items-center justify-center gap-6 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium relative transition-all duration-200 py-2 px-1 ${
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "text-foreground/80 hover:text-primary"
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5 bg-primary rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop Auth Buttons - Only show on screens >= 1024px */}
            <div className="hidden xl:flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className="text-foreground/80 hover:text-primary hover:bg-accent/50"
              >
                <Link href="/login" className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                <Link href="#pricing" className="flex items-center gap-1">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Desktop Theme Toggle - Only show on screens >= 1024px */}
            <div className="hidden xl:flex">
              <ThemeToggle />
            </div>

            {/* Mobile Section - Show on screens < 1024px */}
            <div className="flex xl:hidden items-center gap-2">
              <ThemeToggle />

              {/* Compact buttons for mobile */}
              <Button
                variant="ghost"
                size="icon"
                className="text-foreground/80 hover:text-primary h-9 w-9"
                asChild
              >
                <Link href="/login">
                  <User className="h-4 w-4" />
                  <span className="sr-only">Login</span>
                </Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="px-3 bg-primary hover:bg-primary/90 text-primary-foreground h-9"
              >
                <Link href="#pricing">
                  Start
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Link>
              </Button>

              {/* Mobile Menu - Always visible on screens < 1024px */}
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}