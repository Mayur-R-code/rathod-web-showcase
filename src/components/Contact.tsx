import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, Linkedin, MapPin, Send, MessageCircle } from "lucide-react"

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "mayurrathod1176@gmail.com",
    action: () => window.location.href = "mailto:mayurrathod1176@gmail.com",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 9510416943",
    action: () => window.location.href = "tel:+919510416943",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Connect with me",
    action: () => window.open("https://www.linkedin.com/in/rathod-mayur-a87a06197/", "_blank"),
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Ahmedabad, India",
    action: () => {},
    color: "from-purple-500 to-purple-600"
  }
]

export function Contact() {
  const handleEmailClick = () => {
    window.location.href = "mailto:mayurrathod1176@gmail.com?subject=Hello Mayur - Let's Connect&body=Hi Mayur,%0D%0A%0D%0AI would like to discuss potential opportunities with you.%0D%0A%0D%0ABest regards"
  }

  return (
    <section id="contact" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="skill-badge mb-4">
              Contact
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your ideas to life? I'm available for new opportunities 
              and exciting projects. Let's create something amazing together!
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="card-gradient card-hover border-0 cursor-pointer group"
                onClick={method.action}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <method.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{method.title}</h3>
                      <p className="text-muted-foreground text-sm">{method.value}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="card-gradient border-0 overflow-hidden">
              <CardContent className="p-8">
                <div className="max-w-2xl mx-auto">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">
                    Ready to Start a Project?
                  </h3>
                  
                  <p className="text-muted-foreground mb-8">
                    I'm passionate about creating exceptional digital experiences. 
                    Whether you need a new website, web application, or want to improve 
                    an existing project, I'd love to hear from you.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={handleEmailClick} className="hero-button">
                      <Send size={18} className="mr-2" />
                      Send Message
                    </Button>
                    <Button 
                      variant="outline" 
                      className="hero-button-outline"
                      onClick={() => window.open("https://www.linkedin.com/in/rathod-mayur-a87a06197/", "_blank")}
                    >
                      <Linkedin size={18} className="mr-2" />
                      Connect on LinkedIn
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}