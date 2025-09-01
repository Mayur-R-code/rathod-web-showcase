import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Github, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleEmailClick = () => {
    window.location.href = "mailto:mayur.rathod17@gmail.com"
  }

  const handleLinkedInClick = () => {
    window.open("https://www.linkedin.com/in/rathod-mayur-a87a06197/", "_blank")
  }

  return (
    <footer className="py-12 border-t border-border bg-surface/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Brand */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-primary mb-2">
                Mayur Rathod
              </h3>
              <p className="text-muted-foreground">
                Frontend Developer | React | Next.js
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={handleLinkedInClick}
                className="hero-button-outline"
              >
                <Linkedin size={18} />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleEmailClick}
                className="hero-button-outline"
              >
                <Mail size={18} />
              </Button>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <span>© {currentYear} Mayur Rathod. Made with</span>
              <Heart size={14} className="text-red-500 fill-current" />
              <span>and React</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span>Ahmedabad, India</span>
              <span>•</span>
              <span>Available for opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}