import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Download, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleEmailClick = () => {
    window.location.href = "mailto:mayurrathod1176@gmail.com"
  }

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/rathod-mayur-a87a06197/", "_blank")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+919510416943"
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-60 float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-60 float" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">

          {/* Main Heading */}
          <div className={`mb-6 ${isVisible ? "slide-up" : "opacity-0"}`} style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl mt-[97px] md:mt-0 md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Mayur Rathod
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Front-end Developer | React | Next.js
            </h2>
          </div>

          {/* Location */}
          <div className={`mb-8 ${isVisible ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center justify-center text-muted-foreground">
              <MapPin size={18} className="mr-2" />
              <span>Ahmedabad, India</span>
            </div>
          </div>

          {/* Description */}
          <div className={`mb-12 ${isVisible ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "0.6s" }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Experienced Frontend Developer with 2 years specializing in React, Next.js, and modern web technologies. 
              Passionate about creating engaging user interfaces and delivering exceptional digital experiences.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className={`mb-12 ${isVisible ? "bounce-in" : "opacity-0"}`} style={{ animationDelay: "0.8s" }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={handleEmailClick} className="hero-button text-lg px-8 py-6">
                <Mail size={20} className="mr-2" />
                Get In Touch
              </Button>
              <Button onClick={handleLinkedInClick} variant="outline" className="hero-button-outline text-lg px-8 py-6">
                <ExternalLink size={20} className="mr-2" />
                View LinkedIn
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div className={`${isVisible ? "fade-in" : "opacity-0"}`} style={{ animationDelay: "1s" }}>
            <div className="flex justify-center space-x-6">
              <Button
                variant="outline"
                size="icon"
                onClick={handleLinkedInClick}
                className="hero-button-outline w-12 h-12"
              >
                <Linkedin size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleEmailClick}
                className="hero-button-outline w-12 h-12"
              >
                <Mail size={20} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handlePhoneClick}
                className="hero-button-outline w-12 h-12"
              >
                <span className="text-sm font-mono">📞</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}