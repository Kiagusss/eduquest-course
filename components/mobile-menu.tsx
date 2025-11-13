"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Menu, X, User, ArrowRight } from "lucide-react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#courses", label: "Courses" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Success Stories" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Contact" },
]

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-[400px] mx-auto data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top">
       
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
        
        <div className="flex flex-col max-h-[80vh]">
     
          <div className="flex items-center justify-between mb-6">
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
              CareerPath
            </span>
          
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-lg transition-colors border-b border-border/40 last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="space-y-3 pt-6 mt-4 border-t border-border">
            <Button 
              variant="outline" 
              className="w-full justify-center gap-2" 
              asChild
            >
              <Link href="/login" onClick={() => setOpen(false)}>
                <User className="h-4 w-4" />
                Login
              </Link>
            </Button>
            <Button 
              className="w-full justify-center gap-2 bg-primary hover:bg-primary/90" 
              asChild
            >
              <Link href="#pricing" onClick={() => setOpen(false)}>
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}