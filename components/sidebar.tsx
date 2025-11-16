"use client"
import type React from "react"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import Image from "next/image"
import { Home, Globe, BarChart3, Mail, Zap, Settings, Book, Users2, Download, Video, Layers, Menu, X, ChevronDown, Bell, Search, User, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from "react"

// Define navigation items with their routes
const navigationItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard" },
  { icon: Users2, label: "Users", href: "/users" },
  { icon: Globe, label: "Site", href: "/site" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Mail, label: "Messages", href: "/messages", badge: 3 },
]

const productItems = [
  { icon: Book, label: "Courses", href: "/course" },
  { icon: Video, label: "Coaching", href: "/coaching" },
  { icon: Download, label: "Downloads", href: "/downloads" },
  { icon: Video, label: "Webinars", href: "/webinars" },
]

const insightItems = [
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Globe, label: "Leaderboard", href: "/leaderboard" },
]

const systemItems = [
  { icon: Settings, label: "Settings", href: "/settings" },
]

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  const pathname = usePathname()

  // Toggle sidebar
  const toggleSidebar = () => {
    setOpen(!open)
  }

  // Initialize sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // Desktop: default open
        setOpen(true)
      } else {
        // Mobile: default closed
        setOpen(false)
      }
    }

    // Set initial state
    handleResize()

    // Add resize listener
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [setOpen])

  // Close sidebar only on mobile when route changes
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setOpen(false)
    }
  }, [pathname, setOpen])

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      
      <aside
        className={`fixed lg:sticky top-0 left-0 ${open ? 'z-50' : 'z-0'} ${
          open ? "w-64" : "w-20"
        } transition-all duration-300 bg-white dark:bg-slate-800 border-r border-gray-200 dark:border-slate-700 h-screen overflow-y-auto flex flex-col lg:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Header */}
        <div className="p-4 lg:p-6 border-b border-gray-200 dark:border-slate-700 flex-shrink-0">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center text-white font-bold  flex-shrink-0 overflow-hidden">
              <Image
                          src="/images/eduquest_logo.png"
                          alt="EduQuest Logo"
                          width={40}
                          height={40}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
              </div>
              {open && (
                <span className="font-bold text-lg text-gray-900 dark:text-white truncate">
                  EduQuest
                </span>
              )}
            </div>
            {open && (
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 lg:hidden hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors flex-shrink-0"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5 text-gray-600 dark:text-slate-400" />
              </button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-3 lg:p-4 space-y-1 overflow-y-auto">
          {/* Main Menu */}
          {navigationItems.map((item) => (
            <NavItem 
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              open={open}
              active={pathname === item.href}
              badge={item.badge}
            />
          ))}
          
          {/* Products Section */}
          {open && (
            <div className="mt-6 mb-3 px-3 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
              Products
            </div>
          )}
          {productItems.map((item) => (
            <NavItem 
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              open={open}
              active={pathname === item.href}
            />
          ))}

          {/* Insight Section */}
          {open && (
            <div className="mt-6 mb-3 px-3 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
              Insight
            </div>
          )}
          {insightItems.map((item) => (
            <NavItem 
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              open={open}
              active={pathname === item.href}
            />
          ))}
          
          {/* System Section */}
          {open && (
            <div className="mt-6 mb-3 px-3 text-xs font-semibold text-gray-500 dark:text-slate-400 uppercase tracking-wider">
              System
            </div>
          )}
          {systemItems.map((item) => (
            <NavItem 
              key={item.href}
              icon={item.icon}
              label={item.label}
              href={item.href}
              open={open}
              active={pathname === item.href}
            />
          ))}
        </nav>

        {/* User Profile - Bottom */}
        <div className="p-3 lg:p-4 border-t border-gray-200 dark:border-slate-700 flex-shrink-0">
          <Link 
            href="/profile" 
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
              A
            </div>
            {open && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">Admin User</p>
                <p className="text-xs text-gray-500 dark:text-slate-400 truncate">admin@mentori.com</p>
              </div>
            )}
          </Link>
        </div>
      </aside>
    </>
  )
}

function NavItem({
  icon: Icon,
  label,
  href,
  open,
  active = false,
  badge,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  href: string
  open: boolean
  active?: boolean
  badge?: number
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 w-full group relative ${
        active 
          ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25" 
          : "text-gray-600 dark:text-slate-400 hover:bg-gray-50 dark:hover:bg-slate-700 hover:text-gray-900 dark:hover:text-white"
      }`}
    >
      <div className="relative">
        <Icon className={`w-5 h-5 flex-shrink-0 transition-transform group-hover:scale-110 ${
          active ? "text-white" : "text-gray-400 dark:text-slate-500 group-hover:text-purple-600 dark:group-hover:text-purple-400"
        }`} />
        {/* Badge positioned on icon when sidebar collapsed */}
        {!open && badge && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center">
            {badge > 9 ? '9+' : badge}
          </span>
        )}
      </div>
      
      {/* Label and badge - show when sidebar is open */}
      {open && (
        <>
          <span className="text-sm font-medium flex-1 truncate">
            {label}
          </span>
          {badge && (
            <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[20px] text-center flex-shrink-0">
              {badge > 9 ? '9+' : badge}
            </span>
          )}
        </>
      )}

      {/* No tooltip when collapsed - labels removed entirely when sidebar is closed */}
    </Link>
  )
}

// Top Navigation Bar Component
export function TopNav({ onMenuToggle, sidebarOpen }: { onMenuToggle: () => void, sidebarOpen?: boolean }) {
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const pathname = usePathname()

  // Get current page title based on route
  const getPageTitle = () => {
    const routes: { [key: string]: string } = {
      '/coaching': 'Coaching Sessions',
      '/course': 'Courses',
      '/dashboard': 'Dashboard',
      '/users': 'Users',
      '/analytics': 'Analytics',
      '/messages': 'Messages',
      '/settings': 'Settings',
    }
    return routes[pathname] || 'Dashboard'
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (!target.closest('.profile-dropdown')) {
        setIsProfileOpen(false)
      }
      if (!target.closest('.search-container')) {
        setIsSearchOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <header className="bg-white dark:bg-slate-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 sticky top-0 z-10">
      <div className="flex items-center justify-between p-4">
        {/* Left Section */}
        <div className="flex items-center gap-4 flex-1">
          {/* Hamburger Menu - Always visible */}
          <button
            onClick={onMenuToggle}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-gray-600 dark:text-slate-300" />
          </button>

          {/* Page Title - Show on mobile when search is not open */}
          {!isSearchOpen && sidebarOpen !== false && (
            <div className="md:hidden">
              <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
                {getPageTitle()}
              </h1>
            </div>
          )}

          {/* Desktop Page Title */}
          {sidebarOpen !== false && (
            <div className="hidden md:block ml-2">
              <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
                {getPageTitle()}
              </h1>
              <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
                Manage your coaching sessions and courses
              </p>
            </div>
          )}

          {/* Search Bar - Desktop */}
          <div className="relative hidden md:block search-container flex-1 max-w-lg ml-8">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search sessions, mentors..."
              className="pl-10 pr-4 py-2 w-full bg-gray-50 dark:bg-slate-700 border border-gray-200 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Search Bar - Mobile */}
          {isSearchOpen && (
            <div className="md:hidden absolute left-4 right-4 top-16 z-50 search-container">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search sessions, mentors..."
                  className="pl-10 pr-4 py-2 w-full bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-lg"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Mobile Search Toggle */}
          <button 
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors md:hidden"
          >
            {isSearchOpen ? (
              <X className="w-5 h-5 text-gray-600 dark:text-slate-300" />
            ) : (
              <Search className="w-5 h-5 text-gray-600 dark:text-slate-300" />
            )}
          </button>

          {/* Notifications */}
          <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600 dark:text-slate-300" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Profile Dropdown */}
          <div className="relative profile-dropdown">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-white text-sm font-bold">
                A
              </div>
              <div className="hidden sm:block text-left">
                <p className="text-sm font-medium text-gray-900 dark:text-white">Admin</p>
                <p className="text-xs text-gray-500 dark:text-slate-400">Administrator</p>
              </div>
              <ChevronDown className={`w-4 h-4 text-gray-400 hidden sm:block transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {isProfileOpen && (
              <div className="absolute right-0 top-12 w-48 bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-lg py-2 z-50">
                <Link 
                  href="/profile" 
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <User className="w-4 h-4" />
                  Profile
                </Link>
                <Link 
                  href="/settings" 
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-700"
                  onClick={() => setIsProfileOpen(false)}
                >
                  <Settings className="w-4 h-4" />
                  Settings
                </Link>
                <div className="border-t border-gray-200 dark:border-slate-700 my-1"></div>
                <button 
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-50 dark:hover:bg-slate-700"
                  onClick={() => setIsProfileOpen(false)}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
