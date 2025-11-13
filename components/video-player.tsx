"use client"

import { useState, useRef, useEffect } from "react"
import { AlertCircle } from "lucide-react"

interface VideoPlayerProps {
  videoUrl: string
  title: string
  onVideoComplete: () => void
  onProgressChange: (progress: number) => void
}

export function VideoPlayer({ videoUrl, title, onVideoComplete, onProgressChange }: VideoPlayerProps) {
  const [progress, setProgress] = useState(0)
  const [hasCompleted, setHasCompleted] = useState(false)
  const [isYouTube, setIsYouTube] = useState(false)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const playerRef = useRef<any>(null)
  const completedRef = useRef(false)
  const trackingIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const lastProgressRef = useRef(0)

  const getYouTubeVideoId = (url: string): string | null => {
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
    ]
    for (const pattern of patterns) {
      const match = url.match(pattern)
      if (match) return match[1]
    }
    return null
  }

  useEffect(() => {
    const isYouTubeUrl = videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")
    setIsYouTube(isYouTubeUrl)
  }, [videoUrl])

  useEffect(() => {
    if (!isYouTube || !iframeRef.current) return

    const videoId = getYouTubeVideoId(videoUrl)
    if (!videoId) {
      console.error("[v0] Could not extract YouTube video ID")
      return
    }

    const onYouTubeIframeAPIReady = () => {
      if (window.YT) {
        playerRef.current = new window.YT.Player(iframeRef.current, {
          videoId: videoId,
          width: "100%",
          height: "100%",
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
          },
          events: {
            onReady: (event: any) => {
              console.log("[v0] YouTube player ready")
            },
            onStateChange: (event: any) => {
              console.log("[v0] YouTube player state:", event.data)
            },
          },
        })
      }
    }

    // Check if YT API is already loaded
    if (window.YT && window.YT.Player) {
      onYouTubeIframeAPIReady()
    } else {
      // Wait for API to load
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady
    }

    return () => {
      if (playerRef.current && typeof playerRef.current.destroy === "function") {
        playerRef.current.destroy()
      }
    }
  }, [isYouTube, videoUrl])

  useEffect(() => {
    if (!isYouTube || !playerRef.current) return

    trackingIntervalRef.current = setInterval(() => {
      try {
        if (
          playerRef.current &&
          typeof playerRef.current.getCurrentTime === "function" &&
          typeof playerRef.current.getDuration === "function"
        ) {
          const currentTime = playerRef.current.getCurrentTime()
          const duration = playerRef.current.getDuration()

          if (duration > 0) {
            const currentProgress = (currentTime / duration) * 100
            setProgress(Math.min(currentProgress, 100))
            setDuration(duration)

            // Only log significant changes
            if (Math.abs(currentProgress - lastProgressRef.current) >= 5) {
              console.log(
                `[v0] YouTube progress: ${Math.round(currentProgress)}% (${Math.round(currentTime)}s / ${Math.round(duration)}s)`,
              )
              lastProgressRef.current = currentProgress
            }

            // Trigger quiz at 95%
            if (currentProgress >= 95 && !completedRef.current) {
              console.log("[v0] YouTube 95% reached, triggering quiz unlock")
              completedRef.current = true
              setHasCompleted(true)
              onVideoComplete()
            }
          }
        }
      } catch (error) {
        console.error("[v0] Error tracking YouTube progress:", error)
      }
    }, 1000) // Check every second for accuracy

    return () => {
      if (trackingIntervalRef.current) clearInterval(trackingIntervalRef.current)
    }
  }, [isYouTube, onVideoComplete])

  // Native video tracking
  useEffect(() => {
    if (isYouTube || !videoRef.current) return

    const video = videoRef.current
    const handleTimeUpdate = () => {
      if (video.duration > 0) {
        const currentProgress = (video.currentTime / video.duration) * 100

        if (Math.abs(currentProgress - lastProgressRef.current) >= 1) {
          setProgress(currentProgress)
          setDuration(video.duration)
          lastProgressRef.current = currentProgress
        }

        if (currentProgress >= 95 && !completedRef.current) {
          console.log("[v0] Native video 95% reached, triggering quiz unlock")
          completedRef.current = true
          setHasCompleted(true)
          onVideoComplete()
        }
      }
    }

    video.addEventListener("timeupdate", handleTimeUpdate)
    return () => video.removeEventListener("timeupdate", handleTimeUpdate)
  }, [isYouTube, onVideoComplete])

  // Progress change effect
  useEffect(() => {
    if (Math.abs(progress - lastProgressRef.current) >= 1) {
      onProgressChange(progress)
    }
  }, [progress, onProgressChange])

  // Reset on URL change
  useEffect(() => {
    completedRef.current = false
    setHasCompleted(false)
    setProgress(0)
    setDuration(0)
    lastProgressRef.current = 0
  }, [videoUrl])

  return (
    <div className="w-full bg-black rounded-lg overflow-hidden">
      {/* Video Container */}
      <div className="relative bg-black aspect-video">
        {isYouTube ? (
          <div ref={iframeRef} className="w-full h-full" id="youtube-player" />
        ) : (
          <video
            ref={videoRef}
            src={videoUrl}
            title={title}
            controls
            className="w-full h-full"
            style={{ backgroundColor: "#000" }}
          />
        )}
      </div>

      {/* Video Info */}
      <div className="bg-card p-4 border-t border-border">
        <h3 className="font-semibold text-foreground mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
          <span>Watch the video to unlock the quiz (95% needed)</span>
          <span className={`font-medium ${hasCompleted ? "text-green-600" : "text-yellow-600"}`}>
            {hasCompleted ? "✓ Video Completed" : `${Math.round(progress)}% Progress`}
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
          <div
            className="bg-gradient-to-r from-purple-500 to-blue-500 h-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {progress >= 90 && !hasCompleted && (
          <div className="mt-3 p-3 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg flex gap-2">
            <AlertCircle className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-yellow-700 dark:text-yellow-400">
              Hampir selesai! Finish video untuk unlock quiz.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}
