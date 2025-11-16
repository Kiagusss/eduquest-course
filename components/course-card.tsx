import Link from "next/link"
import Image from "next/image"

interface CourseCardProps {
  course: {
    id: number
    title: string
    category: string
    image: string
    creationDate: string
    sales: string
    status: string
  }
}
export default function CourseCard({ course }: CourseCardProps) {
  return (
   <Link href={'/course/' + course.id}>

   
    <div className="bg-white dark:bg-slate-800/50 dark:border-slate-700 dark:hover:border-[#06B6D4]/50 rounded-xl border border-border overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
      <div className="relative overflow-hidden h-40 bg-gradient-to-br from-purple-100 to-cyan-100">
        <Image src={course.image} alt={course.title} fill/>
        <div className="absolute top-3 left-3 bg-white/90  backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary">
          {course.category}
        </div>
      </div>

      <div className="p-4">
        <span className="font-bold text-foreground line-clamp-2 group-hover:text-primary dark:text-white dark:group-hover:text-primary transition-colors mb-3">
          {course.title}
        </span>

        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between text-muted-foreground dark:text-slate-200">
            <span>Creation Date</span>
            <span className="font-medium text-foreground dark:text-slate-300">{course.creationDate}</span>
          </div>
          <div className="flex items-center justify-between text-muted-foreground dark:text-slate-200">
            <span>Sales</span>
            <span className="font-medium text-foreground dark:text-slate-300">{course.sales}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground dark:text-slate-200">Status</span>
            <span
              className={`px-2 py-1 rounded-full text-xs font-semibold ${
                course.status === "Published" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"
              }`}
            >
              {course.status}
            </span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  )
}
