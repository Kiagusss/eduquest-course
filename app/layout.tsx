import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ms-webdesign | Hoogwaardige Websites",
  description: "Moderne, resultaatgerichte webdesigns die bezoekers omzetten in klanten",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
<<<<<<< HEAD
    <html lang="en" suppressHydrationWarning>
=======
    <html lang="nl" suppressHydrationWarning>
>>>>>>> 1db27fb0255a20cd916333fad63ea92c6a82c2cb
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
<<<<<<< HEAD
        <script src="https://www.youtube.com/iframe_api" async defer></script>
=======
>>>>>>> 1db27fb0255a20cd916333fad63ea92c6a82c2cb
        <Analytics />
      </body>
    </html>
  )
}
