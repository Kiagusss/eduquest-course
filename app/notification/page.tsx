"use client"
import { useState } from "react"
import { Bell, Trash2, Check, Users, FileText, ShoppingCart, Mail, Zap, Award } from 'lucide-react'

// Notification data with diverse content from sidebar items
const notificationsData = [
  {
    id: 1,
    type: "course-update",
    title: "New Course Published",
    message: "UI/UX Design Advanced Techniques has been published successfully",
    icon: "course",
    timestamp: "2 minutes ago",
    category: "Courses",
    read: false,
    color: "bg-purple-500"
  },
  {
    id: 2,
    type: "sales",
    title: "New Sale Alert",
    message: "You have received $1,250 from 'UI/UX Design Level Up with Prototyping'",
    icon: "sales",
    timestamp: "15 minutes ago",
    category: "Sales",
    read: false,
    color: "bg-green-500"
  },
  {
    id: 3,
    type: "user-action",
    title: "New User Enrolled",
    message: "5 new students have enrolled in your courses",
    icon: "users",
    timestamp: "1 hour ago",
    category: "Users",
    read: false,
    color: "bg-blue-500"
  },
  {
    id: 4,
    type: "email",
    title: "Email Campaign Sent",
    message: "Your course promotion email was delivered to 2,450 subscribers",
    icon: "email",
    timestamp: "3 hours ago",
    category: "Emails",
    read: true,
    color: "bg-amber-500"
  },
  {
    id: 5,
    type: "system",
    title: "System Maintenance",
    message: "Scheduled maintenance completed. All systems are operational",
    icon: "system",
    timestamp: "5 hours ago",
    category: "System",
    read: true,
    color: "bg-cyan-500"
  },
  {
    id: 6,
    type: "coaching",
    title: "New Coaching Session",
    message: "You have 3 upcoming coaching sessions scheduled this week",
    icon: "coaching",
    timestamp: "1 day ago",
    category: "Coaching",
    read: true,
    color: "bg-indigo-500"
  },
  {
    id: 7,
    type: "downloads",
    title: "Digital Downloads Report",
    message: "42 new digital resources downloaded this week",
    icon: "downloads",
    timestamp: "2 days ago",
    category: "Digital Downloads",
    read: true,
    color: "bg-rose-500"
  },
  {
    id: 8,
    type: "webinar",
    title: "Webinar Reminder",
    message: "Your upcoming webinar 'Advanced UI Design Patterns' starts in 2 hours",
    icon: "webinar",
    timestamp: "3 days ago",
    category: "Webinar",
    read: true,
    color: "bg-orange-500"
  },
]

const getIcon = (type: string) => {
  switch (type) {
    case "course":
      return <Award className="w-5 h-5" />
    case "sales":
      return <ShoppingCart className="w-5 h-5" />
    case "users":
      return <Users className="w-5 h-5" />
    case "email":
      return <Mail className="w-5 h-5" />
    case "system":
      return <Zap className="w-5 h-5" />
    case "coaching":
      return <FileText className="w-5 h-5" />
    case "downloads":
      return <FileText className="w-5 h-5" />
    case "webinar":
      return <Users className="w-5 h-5" />
    default:
      return <Bell className="w-5 h-5" />
  }
}

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(notificationsData)
  const [filterType, setFilterType] = useState<"all" | "unread">("all")

  const isDark = true // Default to dark theme as managed by sidebar

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(notif => 
      notif.id === id ? { ...notif, read: true } : notif
    ))
  }

  const markAllAsRead = () => {
    setNotifications(notifications.map(notif => ({ ...notif, read: true })))
  }

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(notif => notif.id !== id))
  }

  const deleteAllNotifications = () => {
    setNotifications([])
  }

  const unreadCount = notifications.filter(n => !n.read).length
  const filteredNotifications = filterType === "unread" 
    ? notifications.filter(n => !n.read) 
    : notifications

  return (
    <div className="flex-1 bg-gradient-to-br dark:from-[#0F172A] dark:via-[#1a2540] dark:to-[#0F172A] from-white via-blue-50 to-purple-50 min-h-screen flex flex-col">
      {/* Main Container */}
      <div className="flex-1 p-6 md:p-8 flex flex-col">
        <div className="w-full max-w-6xl mx-auto flex flex-col flex-1">
        

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setFilterType("all")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filterType === "all"
                  ? "bg-purple-500 text-white"
                  : isDark
                  ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              All Notifications
            </button>
            <button
              onClick={() => setFilterType("unread")}
              className={`px-4 py-2 rounded-lg transition-colors ${
                filterType === "unread"
                  ? "bg-purple-500 text-white"
                  : isDark
                  ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                  : "bg-slate-200 text-slate-700 hover:bg-slate-300"
              }`}
            >
              Unread ({unreadCount})
              
            </button>
            
            {notifications.length > 0 && (
              <>
                <button
                  onClick={markAllAsRead}
                  className={`ml-auto px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    isDark
                      ? "bg-slate-800 text-slate-200 hover:bg-slate-700"
                      : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  <Check className="w-4 h-4" />
                  Mark all as read
                </button>
                <button
                  onClick={deleteAllNotifications}
                  className={`px-4 py-2 rounded-lg transition-colors flex items-center gap-2 ${
                    isDark
                      ? "bg-red-900/30 text-red-400 hover:bg-red-900/50"
                      : "bg-red-100 text-red-600 hover:bg-red-200"
                  }`}
                >
                  <Trash2 className="w-4 h-4" />
                  Clear all
                </button>
              </>
            )}
          </div>

          {/* Notifications List - Flex1 to fill remaining space */}
          <div className="flex-1 space-y-3 overflow-y-auto">
            {filteredNotifications.length > 0 ? (
              filteredNotifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 rounded-lg border transition-all relative ${
                    notification.read
                      ? isDark
                        ? "bg-slate-800/30 border-slate-700/50"
                        : "bg-white/50 border-slate-200/50"
                      : isDark
                      ? "bg-slate-800/80 border-purple-500/50 shadow-lg shadow-purple-500/10"
                      : "bg-white border-purple-200 shadow-lg shadow-purple-200/30"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className={`p-3 rounded-lg flex-shrink-0 ${notification.color} text-white`}>
                      {getIcon(notification.type)}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <h3 className={`font-semibold ${isDark ? "text-white" : "text-foreground"}`}>
                          {notification.title}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${
                          isDark
                            ? "bg-slate-700/50 text-slate-300"
                            : "bg-slate-200 text-slate-600"
                        }`}>
                          {notification.category}
                        </span>
                      </div>
                      <p className={`text-sm mb-2 ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                        {notification.message}
                      </p>
                      <p className={`text-xs ${isDark ? "text-slate-500" : "text-slate-500"}`}>
                        {notification.timestamp}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {!notification.read && (
                        <button
                          onClick={() => markAsRead(notification.id)}
                          className={`p-2 rounded-lg transition-colors ${
                            isDark
                              ? "hover:bg-slate-700 text-slate-400 hover:text-green-400"
                              : "hover:bg-slate-200 text-slate-500 hover:text-green-600"
                          }`}
                          title="Mark as read"
                        >
                          <Check className="w-4 h-4" />
                        </button>
                      )}
                      <button
                        onClick={() => deleteNotification(notification.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          isDark
                            ? "hover:bg-red-900/30 text-slate-400 hover:text-red-400"
                            : "hover:bg-red-100 text-slate-500 hover:text-red-600"
                        }`}
                        title="Delete notification"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Unread indicator */}
                  {!notification.read && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-purple-500 rounded-l-lg"></div>
                  )}
                </div>
              ))
            ) : (
              <div className={`flex items-center justify-center py-12 rounded-lg border ${
                isDark
                  ? "bg-slate-800/30 border-slate-700/50"
                  : "bg-white/50 border-slate-200/50"
              }`}>
                <div className="text-center">
                  <Bell className={`w-12 h-12 mx-auto mb-3 ${isDark ? "text-slate-500" : "text-slate-400"}`} />
                  <p className={`text-lg font-semibold ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    No notifications
                  </p>
                  <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {filterType === "unread" ? "You're all caught up!" : "Check back later for updates"}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
