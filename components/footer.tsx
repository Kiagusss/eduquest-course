"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Sparkles,
  Gamepad,
  Brain,
  Target
} from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = {
    platform: [
      { name: "AI Career Assessment", href: "#assessment" },
      { name: "Gamified Courses", href: "#courses" },
      { name: "Career Roadmaps", href: "#roadmaps" },
      { name: "Progress Tracking", href: "#progress" },
      { name: "Achievement System", href: "#achievements" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Process", href: "#process" },
      { name: "Success Stories", href: "#testimonials" },
      { name: "Pricing", href: "#pricing" },
      { name: "Contact", href: "#contact" },
    ],
    resources: [
      { name: "Career Blog", href: "/blog" },
      { name: "Learning Tips", href: "/tips" },
      { name: "Industry Insights", href: "/insights" },
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
    ],
    support: [
      { name: "Contact Support", href: "mailto:support@eduquest.com" },
      { name: "FAQ", href: "/faq" },
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ]
  }

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/eduquest",
      icon: Linkedin,
      color: "hover:bg-blue-600"
    },
    {
      name: "Twitter",
      href: "https://twitter.com/eduquest",
      icon: Twitter,
      color: "hover:bg-sky-500"
    },
    {
      name: "Instagram",
      href: "https://instagram.com/eduquest",
      icon: Instagram,
      color: "hover:bg-pink-600"
    },
    {
      name: "YouTube",
      href: "https://youtube.com/eduquest",
      icon: Youtube,
      color: "hover:bg-red-600"
    },
    {
      name: "Facebook",
      href: "https://facebook.com/eduquest",
      icon: Facebook,
      color: "hover:bg-blue-500"
    }
  ]

  const contactInfo = [
    {
      icon: Mail,
      text: "eduquest@gmail.com",
      href: "eduquest@gmail.com"
    },
    {
      icon: Phone,
      text: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      text: "123 Career Street, Tech City, TC 10101",
      href: "https://maps.google.com"
    }
  ]

  return (
    <footer className="relative bg-background border-t border-border">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
              <Sparkles className="h-4 w-4" />
              Stay Ahead in Your Career
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Get Career Insights Delivered Weekly
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join 10,000+ professionals receiving exclusive career tips, industry trends, and platform updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Links Sections */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white">
                <Brain className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold">Eduquest</span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming career confusion into clarity through AI-powered assessments and engaging gamified learning experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.text}</span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className={`p-2 rounded-lg bg-muted text-muted-foreground hover:text-white transition-all duration-300 ${social.color}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Platform</h4>
            <ul className="space-y-3">
              {navigation.platform.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              {navigation.support.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>© {currentYear} Eduquest. All rights reserved.</span>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                <span>Transforming careers worldwide</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Gamepad className="h-4 w-4 text-primary" />
                <span>Gamified Learning</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <span>AI-Powered</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}