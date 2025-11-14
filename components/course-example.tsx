"use client"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Star, ArrowRight, PlayCircle, Target, Zap, TrendingUp, Gamepad, Award, Eye, DollarSign, Calendar } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const dataCourse = [
  {
    id: 1,
    title: "UI/UX Design Level Up with Prototyping",
    category: "UI/UX Design",
    image: "/ui.jpg",
    creationDate: "16 Jan 2025",
    sales: "$1,250",
    status: "Published",
    duration: "8 weeks",
    students: "2.5K+",
    rating: 4.9,
    points: 3000,
    level: "Intermediate",
  },
  {
    id: 2,
    title: "Graphic Design Masterclass using Adobe Illustration",
    category: "Graphic Design",
    image: "/design-graph.jpg",
    creationDate: "14 Jan 2025",
    sales: "$1,000",
    status: "Unpublished",
    duration: "6 weeks",
    students: "1.8K+",
    rating: 4.7,
    points: 2500,
    level: "Beginner",
  },
  {
    id: 3,
    title: "Fundamental 2D Animation Using Jitter",
    category: "Animation",
    image: "/animation.jpg",
    creationDate: "13 Jan 2025",
    sales: "$950",
    status: "Published",
    duration: "10 weeks",
    students: "1.2K+",
    rating: 4.8,
    points: 3500,
    level: "Intermediate",
  },
  {
    id: 4,
    title: "Web Development Fundamentals with React",
    category: "Web Development",
    image: "/web-development.jpeg",
    creationDate: "12 Jan 2025",
    sales: "$1,500",
    status: "Published",
    duration: "12 weeks",
    students: "3.2K+",
    rating: 4.9,
    points: 4000,
    level: "Beginner",
  },
  {
    id: 5,
    title: "Branding Strategy for Startups",
    category: "Branding",
    image: "/branding.jpg",
    creationDate: "11 Jan 2025",
    sales: "$800",
    status: "Unpublished",
    duration: "4 weeks",
    students: "900+",
    rating: 4.6,
    points: 1500,
    level: "Beginner",
  },
  {
    id: 6,
    title: "UI/UX Design Advanced Techniques",
    category: "UI/UX Design",
    image: "/ui-ux.jpg",
    creationDate: "10 Jan 2025",
    sales: "$1,200",
    status: "Published",
    duration: "8 weeks",
    students: "1.5K+",
    rating: 4.8,
    points: 3200,
    level: "Advanced",
  },
]

export function CoursesExample() {
  const [selectedCategory, setSelectedCategory] = useState("All Category")
  
  const categories = ["All Category", ...new Set(dataCourse.map(course => course.category))]
  
  const filteredCourses = selectedCategory === "All Category" 
    ? dataCourse 
    : dataCourse.filter((course) => course.category === selectedCategory)

  return (
    <section id="courses" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <PlayCircle className="h-4 w-4" />
            Discover Learning Paths
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Explore Our <span className="text-primary">Gamified Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Dive into engaging, interactive courses designed with gamification at their core. Earn points, unlock achievements, 
            and level up your skills while building your dream career.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/20 relative overflow-hidden bg-background/50 backdrop-blur-sm"
            >
              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge 
                  className={`
                    ${course.status === "Published" 
                      ? "bg-green-500 hover:bg-green-600" 
                      : "bg-orange-500 hover:bg-orange-600"
                    } text-white border-0 shadow-lg
                  `}
                >
                  {course.status}
                </Badge>
              </div>

              {/* Course Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              </div>

              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {course.level}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm mt-2">
                  {course.category}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-4">
                {/* Course Stats */}
                <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gamepad className="h-4 w-4 text-primary" />
                    <span>{course.points} pts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-green-500" />
                    <span>{course.sales}</span>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{course.creationDate}</span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button className="w-full group/btn" size="lg" asChild>
                  <Link href={`/course/${course.id}`}>
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
              View All Courses
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/20 font-semibold px-8 py-6 text-lg">
              Take Career Assessment
            </Button>
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Not sure where to start? Take our 5-minute AI assessment to discover your perfect career path.
          </p>
        </div>
      </div>
    </section>
  )
}