"use client"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Share2, Copy, Check } from 'lucide-react'

interface ShareDialogProps {
  title: string
  url: string
  className?: string
}

export function ShareDialog({ title, url, className }: ShareDialogProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const shareOptions = [
    {
      name: "Twitter",
      icon: "𝕏",
      action: () => {
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`
        window.open(twitterUrl, "_blank")
      },
    },
    {
      name: "Facebook",
      icon: "f",
      action: () => {
        const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        window.open(facebookUrl, "_blank")
      },
    },
    {
      name: "LinkedIn",
      icon: "in",
      action: () => {
        const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
        window.open(linkedinUrl, "_blank")
      },
    },
    {
      name: "WhatsApp",
      icon: "W",
      action: () => {
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`
        window.open(whatsappUrl, "_blank")
      },
    },
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className={`w-full bg-transparent dark:bg-slate-600 text-primary dark:text-white hover:bg-primary/90 ${className}`}>
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share Course</DialogTitle>
          <DialogDescription>
            Share this course with others using your preferred method
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Copy Link Section */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground dark:text-white">
              Copy Link
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={url}
                readOnly
                className="flex-1 px-3 py-2 bg-muted dark:bg-slate-700 text-foreground dark:text-white rounded-md text-sm border border-border dark:border-slate-600"
              />
              <Button
                size="sm"
                onClick={copyToClipboard}
                className="bg-primary hover:bg-primary/90"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 mr-1" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-1" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Social Media Share Options */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground dark:text-white">
              Share on Social Media
            </label>
            <div className="grid grid-cols-2 gap-3">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={option.action}
                  className="p-4 rounded-lg border border-border dark:border-slate-600 hover:bg-muted dark:hover:bg-slate-700 transition-colors flex flex-col items-center gap-2 group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-slate-600 flex items-center justify-center text-lg font-bold text-primary dark:text-white group-hover:bg-primary group-hover:text-white dark:group-hover:bg-primary transition-colors">
                    {option.icon}
                  </div>
                  <span className="text-xs font-medium text-foreground dark:text-white">
                    {option.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Email Share Option */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground dark:text-white">
              Share via Email
            </label>
            <Button
              onClick={() => {
                const mailtoUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Check out this course: ${url}`)}`
                window.location.href = mailtoUrl
              }}
              className="w-full bg-primary hover:bg-primary/90"
            >
              Open Email Client
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
