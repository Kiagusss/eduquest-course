"use client"

import { Play, CheckCircle2 } from "lucide-react"
import { Card } from "@/components/ui/card"

interface Episode {
  id: number
  title: string
  description: string
  duration: string
  completed: boolean
  thumbnail: string
}

interface EpisodeCardProps {
  episode: Episode
  isSelected: boolean
  onSelect: () => void
}

export default function EpisodeCard({ episode, isSelected, onSelect }: EpisodeCardProps) {
  return (
    <Card
      onClick={onSelect}
      className={`p-4 cursor-pointer transition-all duration-300 border-2 ${
        isSelected
          ? "border-primary bg-primary/5 shadow-lg shadow-primary/20"
          : "border-border hover:border-primary/50 hover:bg-primary/5"
      }`}
    >
      <div className="flex gap-3 items-start">
        <div className="flex-shrink-0 mt-1">
          {episode.completed ? (
            <CheckCircle2 className="w-5 h-5 text-secondary" />
          ) : (
            <div
              className={`w-5 h-5 rounded-full border-2 ${
                isSelected ? "border-primary bg-primary" : "border-border group-hover:border-primary"
              } flex items-center justify-center`}
            >
              {isSelected && <Play className="w-2 h-2 text-white fill-white" />}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {episode.title}
          </h4>
          <p className="text-xs text-muted-foreground mt-1">{episode.duration}</p>
        </div>
      </div>
    </Card>
  )
}
