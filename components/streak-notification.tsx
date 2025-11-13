"use client"
import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false })

interface StreakNotificationProps {
  isVisible: boolean
  streakCount: number
  points: number
  onClose: () => void
}

export function StreakNotification({ isVisible, streakCount, points, onClose }: StreakNotificationProps) {
  const [animate, setAnimate] = useState(false)
  const [lottieData, setLottieData] = useState<any>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetch("/Fire.json") 
      .then((res) => res.json())
      .then((data) => setLottieData(data))
  }, [])

  useEffect(() => {
    if (isVisible) {
      setAnimate(true)
      const timer = setTimeout(onClose, 3500)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) {
      onClose()
    }
  }

  if (!isVisible) return null

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 flex items-center justify-center z-[9999]"
    >
      <div className="absolute inset-0 bg-black/20 transition-opacity duration-500" />

      <div
        className={`relative pointer-events-auto transform transition-all duration-500 ${
          animate ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <div className="bg-white rounded-2xl px-8 py-12 shadow-2xl max-w-sm mx-auto">
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32 flex items-center justify-center">
              {lottieData && <Lottie animationData={lottieData} loop />}
            </div>
          </div>

          <div className="text-center space-y-4">
            <div>
              <h2 className="text-gray-900 text-4xl font-black mb-2">STREAK!</h2>
              <p className="text-gray-600 text-lg font-semibold">Kamu mempertahankan motivasimu!</p>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 border border-amber-200">
                <p className="text-gray-600 text-sm font-medium mb-1">Streak</p>
                <p className="text-amber-600 text-3xl font-black">{streakCount}</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-4 border border-yellow-200">
                <p className="text-gray-600 text-sm font-medium mb-1">Poin</p>
                <p className="text-yellow-600 text-3xl font-black">+{points}</p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-gray-600 text-sm font-semibold">Terus semangat! ✨</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
