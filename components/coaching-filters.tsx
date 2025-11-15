"use client"

interface CoachingFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  "All Category",
  "UI/UX Design",
  "Graphic Design",
  "Web Development",
  "Mobile Development",
  "Business Strategy",
]

export default function CoachingFilters({
  selectedCategory,
  onCategoryChange,
}: CoachingFiltersProps) {
  return (
    <div className="flex gap-3 mb-6 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
            selectedCategory === category
              ? "bg-purple-600 text-white"
              : "bg-white dark:bg-slate-800 text-foreground dark:text-slate-300 border border-border dark:border-slate-700 hover:border-purple-600 dark:hover:border-purple-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
