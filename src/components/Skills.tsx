import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Globe, Settings } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Technologies",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js"]
  },
  {
    title: "Styling & Frameworks",
    icon: Globe,
    skills: ["Tailwind CSS", "Bootstrap", "CSS3", "Responsive Design"]
  },
  {
    title: "State & Data Management", 
    icon: Database,
    skills: ["Redux", "REST APIs", "JSON", "Local Storage"]
  },
  {
    title: "Tools & Workflow",
    icon: Settings,
    skills: ["GitHub", "Git", "npm", "Webpack", "VS Code"]
  }
]

const allSkills = [
  "HTML", "CSS", "JavaScript", "React.js", "Next.js", "Redux", 
  "Tailwind CSS", "TypeScript", "GitHub", "Bootstrap", "REST", "Git"
]

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-surface/50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="skill-badge mb-4">
              Skills
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical Expertise
            </h2>
            <p className="text-xl text-muted-foreground">
              Technologies and tools I work with
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <Card key={index} className="card-gradient card-hover border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <category.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-sm">{category.title}</h3>
                  </div>
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <div key={skill} className="text-sm text-muted-foreground">
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Skills Badges */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8">All Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {allSkills.map((skill, index) => (
                <Badge 
                  key={skill} 
                  variant="outline" 
                  className="skill-badge text-sm px-4 py-2 hover:scale-110"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}