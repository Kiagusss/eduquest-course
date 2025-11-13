// Quiz and course types
export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number // index of correct option
  explanation?: string
}

export interface Quiz {
  id: string
  episodeId: string
  title: string
  questions: QuizQuestion[]
  pointsPerQuestion: number
}

export interface Episode {
  id: string
  courseId: string
  title: string
  description: string
  videoUrl: string
  duration: number // in seconds
  quizId: string
}

export interface EpisodeProgress {
  episodeId: string
  videoWatched: boolean
  videoProgress: number // 0-100%
  quizCompleted: boolean
  quizScore: number // 0-10
  pointsEarned: number
  isUnlocked: boolean
}

export interface Course {
  id: string
  title: string
  description: string
  instructor: string
  price: number
  duration: string
  level: string
  episodes: Episode[]
  thumbnail: string
  nextCourseId?: string // Link to next course if unlocked
}

export interface QuizResult {
  quizId: string
  episodeId: string
  score: number
  totalPoints: number
  answers: number[]
  completedAt: Date
}

export interface UserProgress {
  userId: string
  courseId: string
  totalPoints: number
  completedQuizzes: QuizResult[]
  currentEpisodeId?: string
  episodeProgress: Record<string, EpisodeProgress> // Track progress per episode
}
