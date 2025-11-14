"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import CourseDashboard from "@/components/course-dashboard"

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
    
  return (
    
    <div className="flex min-h-screen bg-background">
      
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <main className="flex-1 overflow-auto">
        <CourseDashboard />
      </main>
    </div>
  )
}
