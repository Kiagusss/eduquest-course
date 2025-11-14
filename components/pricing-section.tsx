"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star, Crown, Zap, ArrowRight } from "lucide-react"

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
    buttonText: "Start Free Trial",
    buttonVariant: "outline" as const,
    customButtonClass: "dark:bg-white dark:text-black dark:border-white dark:hover:bg-gray-100 dark:hover:border-gray-100"
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
    buttonText: "Start Free Trial",
    buttonVariant: "default" as const,
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
    buttonText: "Get Custom Quote",
    buttonVariant: "outline" as const,
    customButtonClass: "dark:bg-white dark:text-black dark:border-white dark:hover:bg-gray-100 dark:hover:border-gray-100"
  },
]

export function PricingSection() {
  const handleGetStarted = (tierName: string, price: string) => {
    console.log(`Selected plan: ${tierName} at ${price}`)
    // Here you can add your logic for handling the button click
    // For example: redirect to signup, open a modal, etc.
  }

  const handleCustomQuote = () => {
    console.log("Requesting custom quote")
    // Here you can add your logic for handling custom quote requests
    // For example: redirect to contact form, open a modal, etc.
  }

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
                
                {/* Pricing Button */}
                <Button
                  variant={tier.buttonVariant}
                  size="lg"
                  className={`w-full group ${
                    tier.highlighted ? "shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30" : ""
                  } ${tier.customButtonClass || ""}`}
                  onClick={() => 
                    tier.price === "Custom" 
                      ? handleCustomQuote() 
                      : handleGetStarted(tier.name, tier.price)
                  }
                >
                  {tier.buttonText}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
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

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg"
              onClick={() => handleGetStarted("Career Builder", "$99")}
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-primary/20 font-semibold px-8 py-6 text-lg dark:bg-white dark:text-black dark:border-white dark:hover:bg-gray-100 dark:hover:border-gray-100"
              onClick={handleCustomQuote}
            >
              Need Custom Solution?
            </Button>
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with our platform
          </p>
        </div>
      </div>
    </section>
  )
}