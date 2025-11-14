import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "EduQuest",
  description: "Eduquest Course Platfrom",
  generator: "EduQuest Team",
    icons: {
    icon: "/images/eduquest_logo.png",                // default icon
    shortcut: "/images/eduquest_logo.png",            // optional
    apple: "/images/eduquest_logo.png",      // optional
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="nl" suppressHydrationWarning>
      <head>
            <link rel="icon" href="/images/eduquest_logo.png" />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
        <script src="https://www.youtube.com/iframe_api" async defer></script>
      </body>
    </html>
  )
}

