"use client"

interface WebinarFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  "All Category",
  "Technology",
  "Business",
  "Design",
  "Marketing",
  "Development",
]

export default function WebinarFilters({
  selectedCategory,
  onCategoryChange,
}: WebinarFiltersProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full font-medium transition-all ${
            selectedCategory === category
              ? "bg-[#7C3AED] text-white"
              : "bg-gray-200 dark:bg-slate-700 text-gray-900 dark:text-slate-300 hover:bg-gray-300 dark:hover:bg-slate-600"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
