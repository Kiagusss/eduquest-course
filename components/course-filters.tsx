"use client"

const categories = ["All Category", "UI/UX Design", "Graphic Design", "Animation", "Web Development", "Branding"]

export default function CourseFilters({
  selectedCategory,
  onCategoryChange,
}: {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}) {
  return (
    <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors ${
            selectedCategory === category
              ? "bg-primary text-white"
              : "bg-white border border-border text-foreground hover:bg-muted"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  )
}