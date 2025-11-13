"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Lock, CheckCircle } from "lucide-react"
import type { Episode } from "@/lib/types"

interface EpisodeListProps {
  episodes: Episode[]
  currentEpisodeId: string
  episodeProgress: Record<string, { videoWatched: boolean; quizScore: number; isUnlocked: boolean }>
  onSelectEpisode: (episodeId: string) => void
}

export function EpisodeList({ episodes, currentEpisodeId, episodeProgress, onSelectEpisode }: EpisodeListProps) {
  return (
    <div className="space-y-3">
      <h3 className="font-semibold text-lg">Episodes</h3>
      <div className="space-y-2">
        {episodes.map((episode, index) => {
          const progress = episodeProgress[episode.id]
          const isLocked = !progress?.isUnlocked && index > 0
          const isCurrentEpisode = episode.id === currentEpisodeId
          const isCompleted = progress?.quizScore >= 7

          return (
            <button
              key={episode.id}
              onClick={() => !isLocked && onSelectEpisode(episode.id)}
              disabled={isLocked}
              className={`w-full text-left transition-all ${
                isLocked ? "opacity-50 cursor-not-allowed" : "hover:bg-muted/50 cursor-pointer"
              }`}
            >
              <Card
                className={`p-4 border-2 transition-all ${
                  isCurrentEpisode
                    ? "border-purple-500 bg-purple-50/50 dark:bg-purple-950/20"
                    : "border-border hover:border-border"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0">
                    {isLocked ? (
                      <Lock className="w-5 h-5 text-muted-foreground" />
                    ) : isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-muted-foreground" />
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium">{episode.title}</h4>
                      {isCompleted && <Badge className="bg-green-600">Completed</Badge>}
                      {isLocked && <Badge variant="secondary">Locked</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-1">{episode.description}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                      <Clock className="w-3 h-3" />
                      <span>{Math.floor(episode.duration / 60)} min</span>
                    </div>
                  </div>

                  {isCompleted && (
                    <div className="text-right flex-shrink-0">
                      <div className="text-sm font-bold text-green-600">{progress?.quizScore}/10</div>
                      <div className="text-xs text-muted-foreground">Score</div>
                    </div>
                  )}
                </div>
              </Card>
            </button>
          )
        })}
      </div>
    </div>
  )
}
