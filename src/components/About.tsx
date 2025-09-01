import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Users, Lightbulb, Target } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "2+ Years Experience",
    description: "Frontend development with modern technologies"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Effective teamwork and mentorship experience"
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description: "Creative solutions for complex challenges"
  },
  {
    icon: Target,
    title: "Performance Focus",
    description: "SEO optimization and user experience"
  }
]

export function About() {
  return (
    <section id="about" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="skill-badge mb-4">
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building Digital Experiences
            </h2>
            <p className="text-xl text-muted-foreground">
              Passionate about creating engaging user interfaces with modern web technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I am a dedicated and skilled web developer with over 2 years of experience specializing in 
                front-end development. My expertise includes HTML, CSS, JavaScript, React, and Next.js.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I have a proven track record of collaborating effectively with teams to deliver successful projects, 
                enhancing user satisfaction and site performance. I am passionate about creating engaging user 
                interfaces and continuously learning new technologies.
              </p>

              <div className="flex flex-wrap gap-3">
                {["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux"].map((tech) => (
                  <Badge key={tech} variant="outline" className="skill-badge">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="card-gradient card-hover border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}