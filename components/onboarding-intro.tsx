"use client"

import { motion } from "framer-motion"
import { ArrowRight, Zap, Target, Lightbulb } from "lucide-react"

interface OnboardingIntroProps {
  onStart: () => void
}

export default function OnboardingIntro({ onStart }: OnboardingIntroProps) {
  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl"
      >
        {/* Hero Section */}
        <div className="text-center mb-16">
          {/* Subtle decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
              className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
              className="absolute bottom-32 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
            />
          </div>

        
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 text-balance leading-tight">
              Discover Your
              <br />
              <span className="text-primary">Perfect Career Path</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Confused about your future? Our personalized career assessment will match you with opportunities that align
            with your passions, skills, and values.
          </motion.p>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: Zap, title: "Quick & Smart", description: "5-minute personalized survey" },
            { icon: Target, title: "Accurate Matching", description: "AI-powered career recommendations" },
            { icon: Lightbulb, title: "Actionable Insights", description: "Learning paths & resources" },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              className="p-6 rounded-2xl bg-muted border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center space-y-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onStart}
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Start Your Journey
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <p className="text-sm text-muted-foreground font-medium">Takes about 5 minutes • No commitments</p>
        </motion.div>
      </motion.div>
    </div>
  )
}
