import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building2 } from "lucide-react"

const experiences = [
  {
    title: "Frontend Developer",
    company: "Drop Techno Lab Private Limited",
    duration: "09/2022 - 03/2025",
    location: "Ahmedabad, India",
    type: "Full-time",
    description: "A technology company specializing in front-end development solutions.",
    achievements: [
      "Developed and maintained dynamic web applications using React.js, enhancing user interfaces and improving client satisfaction",
      "Utilized Next.js for server-side rendering and static site generation, significantly improving website performance and SEO",
      "Collaborated with backend developers to integrate RESTful APIs, ensuring seamless data flow and application functionality",
      "Implemented state management using Redux, optimizing application performance and reducing load times",
      "Conducted code reviews and provided mentorship to frontend developers, fostering a collaborative and growth-oriented team environment"
    ],
    technologies: ["React.js", "Next.js", "Redux", "REST APIs", "SEO", "JavaScript", "TypeScript"]
  },
  {
    title: "React Developer",
    company: "The Dezine Pvt Ltd",
    duration: "05/2025 - 08/2025",
    location: "India",
    type: "Remote",
    description: "Specialized in advanced authentication and security implementations.",
    achievements: [
      "Integrated Supabase authentication system",
      "Implemented Login with Passkey feature for enhanced security",
      "Developed AppLock functionality for mobile applications",
      "Built Two-Factor Authentication (2FA) system",
      "Enhanced application security and user experience"
    ],
    technologies: ["React.js", "Supabase", "WebAuthn", "TypeScript", "Authentication"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="skill-badge mb-4">
              Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              My career progression in frontend development
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="card-gradient card-hover border-0 overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Company Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-2 mb-2">
                        <Building2 className="w-5 h-5 text-primary" />
                        <h3 className="text-xl font-bold text-primary">{exp.company}</h3>
                      </div>
                      
                      <h4 className="text-lg font-semibold mb-3">{exp.title}</h4>
                      
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                        <Badge variant="outline" className="skill-badge text-xs">
                          {exp.type}
                        </Badge>
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="lg:w-2/3">
                      <p className="text-muted-foreground mb-4">{exp.description}</p>
                      
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="font-semibold mb-3">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="skill-badge text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}