import { Zap, Users, TrendingUp, Award } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Learn at Your Pace",
    description: "Access course materials 24/7 and learn whenever it works best for you",
  },
  {
    icon: Users,
    title: "Expert Instructors",
    description: "Learn from industry professionals with years of real-world experience",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Get recognized with certificates and boost your professional portfolio",
  },
  {
    icon: Award,
    title: "Quality Content",
    description: "High-production courses with hands-on projects and practical assignments",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0F172A]">Why Choose LearnHub?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're committed to providing the best learning experience
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-[#8B5CF6] transition-all hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
