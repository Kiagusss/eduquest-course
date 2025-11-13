"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Star, Crown, Zap } from "lucide-react"
import { QuoteFormDialog } from "@/components/quote-form-dialog"

const pricingTiers = [
  {
    name: "Career Explorer",
    price: "$49",
    period: "month",
    features: [
      "AI Career Assessment",
      "Basic Career Roadmap",
      "Access to 5 Starter Courses",
      "Community Support",
      "Progress Tracking",
      "Basic Achievement System",
    ],
    highlighted: false,
    icon: Zap,
  },
  {
    name: "Career Builder",
    price: "$99",
    period: "month",
    features: [
      "Advanced AI Career Assessment",
      "Detailed Career Roadmap",
      "Unlimited Course Access",
      "Priority Support",
      "Advanced Progress Analytics",
      "Full Gamification System",
      "Skill Certifications",
      "Career Community Access",
    ],
    highlighted: true,
    icon: Crown,
  },
  {
    name: "Career Accelerator",
    price: "Custom",
    period: "",
    features: [
      "Everything in Career Builder",
      "1-on-1 Career Coaching",
      "Personalized Mentorship",
      "Job Interview Preparation",
      "Resume & Portfolio Review",
      "Career Transition Support",
      "Dedicated Success Manager",
      "Custom Learning Paths",
    ],
    highlighted: false,
    icon: Star,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Transparent Pricing
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance">
            Start Your <span className="text-primary">Career Journey</span> Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the perfect plan to transform your career confusion into clarity and success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative group ${
                tier.highlighted
                  ? "border-primary shadow-xl scale-105 bg-gradient-to-b from-background to-primary/5"
                  : "hover:border-primary/50 hover:shadow-lg"
              } transition-all duration-300`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  ⭐ Most Popular
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <tier.icon className="h-6 w-6" />
                  </div>
                </div>
                <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    {tier.price === "Custom" ? (
                      <span className="text-3xl">{tier.price}</span>
                    ) : (
                      <>
                        {tier.price}
                        <span className="text-lg font-normal text-muted-foreground">/{tier.period}</span>
                      </>
                    )}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 group/item">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <QuoteFormDialog
                  packageName={tier.name}
                  variant={tier.highlighted ? "default" : "outline"}
                  className={`w-full ${tier.highlighted ? "shadow-lg shadow-primary/20" : ""}`}
                >
                  {tier.price === "Custom" ? "Get Custom Quote" : "Start Free Trial"}
                </QuoteFormDialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            All plans include <span className="text-primary font-semibold">7-day free trial</span> and{" "}
            <span className="text-primary font-semibold">cancel anytime</span>
          </p>
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">AI-Powered Matching</h3>
            <p className="text-sm text-muted-foreground">Smart career recommendations based on your unique profile</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <Crown className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Gamified Learning</h3>
            <p className="text-sm text-muted-foreground">Engaging courses with points, badges, and achievements</p>
          </div>
          <div className="space-y-3">
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold">Career Support</h3>
            <p className="text-sm text-muted-foreground">Ongoing guidance and community to help you succeed</p>
          </div>
        </div>
      </div>
    </section>
  )
}