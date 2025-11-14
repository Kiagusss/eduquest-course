import type React from "react"
import Link from "next/link"
import { Home, Globe, BarChart3, Mail, Zap, Settings, Book, Users2, Download, Video, Layers } from "lucide-react"

export default function Sidebar({ open, setOpen }: { open: boolean; setOpen: (open: boolean) => void }) {
  return (
    <aside
      className={`${open ? "w-64" : "w-20"} transition-all duration-300 bg-white dark:bg-slate-700 border-r border-border dark:border-slate-500 h-screen overflow-y-auto sticky top-0`}
    >
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
            M
          </div>
          {open && <span className="font-bold text-lg text-foreground">Mentori</span>}
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {/* Main Menu */}
        <NavItem icon={Home} label="Home" open={open} />
        <NavItem icon={Users2} label="Users" open={open} />
        <NavItem icon={Globe} label="Site" open={open} />
        <NavItem icon={BarChart3} label="Sales" open={open} />
        <NavItem icon={Mail} label="Emails" open={open} />
        <NavItem icon={Zap} label="App Hub" open={open} />
        <NavItem icon={Settings} label="Settings" open={open} />

        {/* Products Section */}
        {open && <div className="mt-6 mb-3 px-3 text-xs font-semibold text-muted-foreground dark:text-white uppercase">Products</div>}
        <NavItem icon={Book} label="Courses" open={open} active />
        <NavItem icon={Video} label="Coaching" open={open} />
        <NavItem icon={Download} label="Digital Downloads" open={open} />
        <NavItem icon={Video} label="Webinar" open={open} />

        {/* Other Section */}
        {open && <div className="mt-6 mb-3 px-3 text-xs font-semibold text-muted-foreground uppercase">Other</div>}
        <NavItem icon={Users2} label="Memberships" open={open} />
        <NavItem icon={Layers} label="Bundles" open={open} />
      </nav>
    </aside>
  )
}

function NavItem({
  icon: Icon,
  label,
  open,
  active = false,
}: {
  icon: React.ComponentType<{ className?: string }>
  label: string
  open: boolean
  active?: boolean
}) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-3 px-3 dark:text-slate-200 py-2 rounded-lg transition-colors ${
        active ? "bg-primary text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      {open && <span className="text-sm">{label}</span>}
    </Link>
  )
}
