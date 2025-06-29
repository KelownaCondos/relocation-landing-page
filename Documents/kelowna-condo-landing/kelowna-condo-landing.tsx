"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  DollarSign,
  Home,
  Users,
  ChevronLeft,
  ChevronRight,
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [email, setEmail] = useState("")

  const testimonials = [
    {
      quote:
        "Mark made our relocation to Kelowna seamless. His guide was incredibly detailed and helped us find the perfect condo in our ideal neighborhood.",
      author: "Sarah & David Chen",
      location: "Moved from Vancouver",
    },
    {
      quote:
        "The local insights in Mark's guide saved us months of research. We felt confident in our decision and love our new Kelowna lifestyle.",
      author: "Jennifer Martinez",
      location: "Relocated from Calgary",
    },
    {
      quote:
        "As retirees, we needed someone who understood our specific needs. Mark's expertise and this guide made our dream move a reality.",
      author: "Robert & Linda Thompson",
      location: "Moved from Toronto",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Email submitted:", email)
    setEmail("")
  }

  return (
    <div className="min-h-screen bg-white font-['Montserrat',sans-serif]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/Kelowna-Lake-View.jpg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-[#ff9c2a] hover:bg-[#e85213] text-white px-4 py-2 text-sm font-medium rounded-full">
            Free Download Available
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-[#484b5a] mb-6 leading-tight">
            Your Seamless Move <br />
            <span className="text-[#ff9c2a]">Starts Here</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Download the ultimate guide to relocating and buying a condo in Kelowna, BC.
          </p>
          <Button
            size="lg"
            className="bg-[#ff9c2a] hover:bg-[#e85213] text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Get My Free Guide
          </Button>
        </div>
      </section>

      {/* What's Inside the Guide */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#484b5a] mb-4">What's Inside Your Guide</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to know for a successful relocation to Kelowna
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#ff9c2a] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#484b5a] mb-4">Top Neighbourhoods for Condo Buyers</h3>
                <p className="text-gray-600 leading-relaxed">
                  Discover the best areas that match your lifestyle and budget preferences.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#e85213] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#484b5a] mb-4">Real Estate Process Made Simple</h3>
                <p className="text-gray-600 leading-relaxed">
                  Step-by-step guidance through BC's real estate buying process.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#ff9c2a] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#484b5a] mb-4">
                  Local Insights Only a Kelowna Realtor Would Know
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Insider knowledge about amenities, transportation, and community life.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-0">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-[#e85213] rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#484b5a] mb-4">Cost of Living & Lifestyle Tips</h3>
                <p className="text-gray-600 leading-relaxed">
                  Budget planning and lifestyle insights for your new Kelowna life.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Mark Walker */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <Image
                src="/Mark-Condo-Expert.jpg"
                alt="Mark Walker - Kelowna Condo Specialist"
                width={400}
                height={400}
                className="rounded-2xl shadow-lg mx-auto md:mx-0 w-80 h-80 object-cover"
              />
            </div>
            <div>
              <Badge className="mb-4 bg-[#ff9c2a] text-white px-3 py-1 text-sm rounded-full">Your Kelowna Realtor</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-[#484b5a] mb-6">Meet Mark Walker</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I’m Mark Walker, a Kelowna condo expert with RE/MAX. I help people just like you relocate with confidence—and 
                start their next chapter in the Okanagan lifestyle they’ve been dreaming about.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Having relocated to Kelowna in 2013 with my family, I understand the unique challenges of
                relocating to the Okanagan. This guide contains all the insights I wish every client knew before making their move.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="border-[#ff9c2a] text-[#ff9c2a] px-3 py-1">
                  20+ Years Experience
                </Badge>
                <Badge variant="outline" className="border-[#ff9c2a] text-[#ff9c2a] px-3 py-1">
                  RE/MAX Professional
                </Badge>
                <Badge variant="outline" className="border-[#ff9c2a] text-[#ff9c2a] px-3 py-1">
                  Condo Specialist
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#484b5a] mb-4">What My Clients Say</h2>
            <p className="text-lg text-gray-600">Real client relocation sucess stories</p>
          </div>

          <div className="relative">
            <Card className="bg-white rounded-2xl shadow-lg border-0 p-8 md:p-12">
              <CardContent className="text-center">
                <div className="text-4xl text-[#ff9c2a] mb-6">"</div>
                <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed italic">
                  {testimonials[currentTestimonial].quote}
                </p>
                <div>
                  <p className="font-bold text-[#484b5a] text-lg">{testimonials[currentTestimonial].author}</p>
                  <p className="text-gray-600">{testimonials[currentTestimonial].location}</p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center items-center mt-8 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-[#ff9c2a] text-[#ff9c2a] hover:bg-[#ff9c2a] hover:text-white bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-[#ff9c2a]" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-[#ff9c2a] text-[#ff9c2a] hover:bg-[#ff9c2a] hover:text-white bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call-to-Action */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#ff9c2a] to-[#e85213]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make the Move?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Download your free Kelowna Condo Relocation Guide today and take the first step toward your new life in
            beautiful Kelowna, BC.
          </p>

          <Card className="bg-white rounded-2xl shadow-xl border-0 p-8 max-w-md mx-auto">
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="rounded-full border-gray-300 px-4 py-3 text-center"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#ff9c2a] hover:bg-[#e85213] text-white py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Me the Guide
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#484b5a] text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Image
  src="/kelownacondos-logo.png"
  alt="KelownaCondos.ca logo"
  width={180}
  height={40}
  className="mb-4"/>
              <p className="text-gray-300 leading-relaxed">
                Your trusted partner for condo buying and relocation services in Kelowna, BC.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-gray-300">mark@kelownacondos.ca</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-gray-300">(250) 980-3379</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <Link href="https://www.facebook.com/markknowscondos/" className="text-gray-300 hover:text-[#ff9c2a] transition-colors">
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link href="https://www.instagram.com/markknowscondos/" className="text-gray-300 hover:text-[#ff9c2a] transition-colors">
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link href="https://www.linkedin.com/in/markwalkerre/" className="text-gray-300 hover:text-[#ff9c2a] transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">© {new Date().getFullYear()} KelownaCondos.ca. All rights reserved.</p>
            <Link href="https://www.kelownacondos.ca" className="text-gray-300 hover:text-[#ff9c2a] text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
