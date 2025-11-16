"use client"

import { useState } from "react"
import { Heart, Reply, Flag } from 'lucide-react'
import Image from "next/image"

interface Reply {
  id: number
  author: string
  avatar: string
  timestamp: string
  content: string
  isInstructor?: boolean
  likes: number
}

interface Comment {
  id: number
  author: string
  avatar: string
  timestamp: string
  content: string
  likes: number
  replies: Reply[]
}

interface CommentSectionProps {
  comments: Comment[]
  courseTitle: string
}

export default function CommentSection({ comments, courseTitle }: CommentSectionProps) {
  const [expandedReplies, setExpandedReplies] = useState<number[]>([])
  const [likedComments, setLikedComments] = useState<number[]>([])

  const toggleReplies = (commentId: number) => {
    setExpandedReplies((prev) =>
      prev.includes(commentId) ? prev.filter((id) => id !== commentId) : [...prev, commentId]
    )
  }

  const toggleLike = (commentId: number) => {
    setLikedComments((prev) =>
      prev.includes(commentId) ? prev.filter((id) => id !== commentId) : [...prev, commentId]
    )
  }

  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="bg-white dark:bg-slate-800/50 rounded-lg border border-border dark:border-slate-700 p-4">
          {/* Main Comment */}
          <div className="flex gap-3">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src={comment.avatar || "/placeholder.svg"}
                alt={comment.author}
                fill
                className="object-cover rounded-full"
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-foreground dark:text-white">{comment.author}</p>
                  <p className="text-xs text-muted-foreground dark:text-slate-400">{comment.timestamp}</p>
                </div>
              </div>
              <p className="text-foreground dark:text-slate-200 mt-2">{comment.content}</p>
              
              {/* Comment Actions */}
              <div className="flex items-center gap-4 mt-3">
                <button
                  onClick={() => toggleLike(comment.id)}
                  className="flex items-center gap-1 text-sm text-muted-foreground dark:text-slate-400 hover:text-primary transition-colors"
                >
                  <Heart className={`w-4 h-4 ${likedComments.includes(comment.id) ? "fill-red-500 text-red-500" : ""}`} />
                  <span>{comment.likes}</span>
                </button>
                <button
                  onClick={() => toggleReplies(comment.id)}
                  className="flex items-center gap-1 text-sm text-muted-foreground dark:text-slate-400 hover:text-primary transition-colors"
                >
                  <Reply className="w-4 h-4" />
                  {comment.replies.length > 0 && <span>{comment.replies.length}</span>}
                </button>
                <button className="text-sm text-muted-foreground dark:text-slate-400 hover:text-primary transition-colors">
                  <Flag className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Replies */}
          {expandedReplies.includes(comment.id) && comment.replies.length > 0 && (
            <div className="mt-4 ml-13 space-y-3 border-l-2 border-border dark:border-slate-700 pl-4">
              {comment.replies.map((reply) => (
                <div key={reply.id} className="flex gap-3">
                  <div className="relative w-8 h-8 flex-shrink-0">
                    <Image
                      src={reply.avatar || "/placeholder.svg"}
                      alt={reply.author}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-sm text-foreground dark:text-white">{reply.author}</p>
                      {reply.isInstructor && (
                        <span className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-200 text-xs rounded-full font-medium">
                          Instructor
                        </span>
                      )}
                      <p className="text-xs text-muted-foreground dark:text-slate-400">{reply.timestamp}</p>
                    </div>
                    <p className="text-foreground dark:text-slate-200 mt-1 text-sm">{reply.content}</p>
                    <div className="flex items-center gap-4 mt-2">
                      <button className="flex items-center gap-1 text-xs text-muted-foreground dark:text-slate-400 hover:text-primary transition-colors">
                        <Heart className="w-3 h-3" />
                        <span>{reply.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
