"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  Youtube,
  Facebook,
  MessageSquare
} from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "We'll respond quickly",
      details: "eduquest@gmail.com",
      link: "mailto:eduquest@gmail.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      details: "+62 812-3456-7890",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      details: "123 Career Street, Tech City, TC 10101",
      link: "https://maps.google.com"
    },
    {
      icon: Clock,
      title: "Office Hours",
      description: "We're here to help",
      details: "Monday - Friday: 9:00 AM - 6:00 PM",
      link: "#"
    }
  ]

  const socialMedia = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/company/eduquest",
      color: "hover:bg-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/eduquest",
      color: "hover:bg-sky-500"
    },
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/eduquest",
      color: "hover:bg-pink-600"
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/eduquest",
      color: "hover:bg-red-600"
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/eduquest",
      color: "hover:bg-blue-500"
    }
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            <MessageCircle className="h-4 w-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Let's Start Your <span className="text-primary">Career Journey</span> Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Have questions about our platform? Ready to transform your career? Reach out to us - we're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-2 hover:border-primary/20 transition-all duration-300 bg-background/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <MessageSquare className="h-6 w-6 text-primary" />
                Send us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your career goals or questions..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" className="w-full group" size="lg">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Social Media */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-background/50 backdrop-blur-sm"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                        <a 
                          href={item.link}
                          className="text-foreground hover:text-primary transition-colors font-medium"
                        >
                          {item.details}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media Section */}
            <Card className="bg-background/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-xl">Follow Our Journey</CardTitle>
                <CardDescription>
                  Stay updated with career tips, success stories, and platform updates.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {socialMedia.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className={`flex-1 min-w-[120px] group ${social.color} hover:text-white transition-all duration-300`}
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-4 w-4 mr-2" />
                        {social.name}
                      </a>
                    </Button>
                  ))}
                </div>
                
                {/* Newsletter Signup */}
                <div className="mt-8 p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Mail className="h-4 w-4 text-primary" />
                    Career Insights Newsletter
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get weekly career tips and industry insights delivered to your inbox.
                  </p>
                  <div className="flex gap-2">
                    <Input 
                      placeholder="Enter your email" 
                      type="email"
                      className="flex-1"
                    />
                    <Button size="sm">
                      Subscribe
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg">
              Start Free Trial
              <MessageCircle className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/20 font-semibold px-8 py-6 text-lg">
              Book a Demo
            </Button>
          </div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to transform your career? Start with our 7-day free trial or schedule a personalized demo.
          </p>
        </div>
      </div>
    </section>
  )
}