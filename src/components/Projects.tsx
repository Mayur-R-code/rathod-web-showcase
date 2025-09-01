import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Shield, ShoppingCart, Image } from "lucide-react"

const projects = [
  {
    title: "Case Path",
    description: "A React-based project aimed at preventing child abuse through proactive measures. Features comprehensive role-based permissions and an extensive admin panel.",
    icon: Shield,
    features: [
      "React-based child abuse prevention platform",
      "Comprehensive admin panel with various modules",
      "Role-based permissions and user management", 
      "Extensive functionalities tailored for child protection actions",
      "Responsive design for all devices"
    ],
    technologies: ["React.js", "JavaScript", "CSS3", "REST APIs", "Admin Panel"],
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "Luzan",
    description: "An e-commerce platform designed to deliver a seamless shopping experience with dynamic page functionalities and optimized performance.",
    icon: ShoppingCart,
    features: [
      "Next.js-based e-commerce platform",
      "Dynamic page functionalities for enhanced UX",
      "Optimized e-commerce features for better performance",
      "Seamless shopping experience implementation",
      "Modern and responsive design"
    ],
    technologies: ["Next.js", "React.js", "TypeScript", "E-commerce", "Performance Optimization"],
    gradient: "from-blue-500 to-purple-500"
  },
  {
    title: "Edengallery",
    description: "A dynamic web platform aimed at showcasing artwork and galleries with an engaging and seamless user experience.",
    icon: Image,
    features: [
      "Next.js-based dynamic web platform",
      "Optimized frontend for engaging user experience",
      "Art gallery showcase functionality",
      "Responsive design for artwork display",
      "Seamless navigation and user interface"
    ],
    technologies: ["Next.js", "React.js", "UI/UX", "Gallery Management", "Frontend Optimization"],
    gradient: "from-green-500 to-teal-500"
  }
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="skill-badge mb-4">
              Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Work
            </h2>
            <p className="text-xl text-muted-foreground">
              Showcasing my development projects and achievements
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-gradient card-hover border-0 overflow-hidden group">
                <CardContent className="p-0">
                  {/* Project Header */}
                  <div className={`h-32 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <div className="w-1 h-1 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="skill-badge text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="hero-button-outline flex-1 text-xs">
                        <ExternalLink size={14} className="mr-1" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Interested in seeing more of my work?
            </p>
            <Button className="hero-button">
              <ExternalLink size={18} className="mr-2" />
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}