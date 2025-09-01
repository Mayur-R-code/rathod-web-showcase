import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react"

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="skill-badge mb-4">
              Education
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Academic Background
            </h2>
            <p className="text-xl text-muted-foreground">
              My educational foundation in technology
            </p>
          </div>

          {/* Education Card */}
          <Card className="card-gradient card-hover border-0 overflow-hidden">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                {/* Icon & Badge */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <Badge variant="outline" className="skill-badge">
                    <Award className="w-3 h-3 mr-1" />
                    Graduate
                  </Badge>
                </div>

                {/* Education Details */}
                <div className="flex-1">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">
                      Master of Science (MSC-IT)
                    </h3>
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      Vidhyasagar Infotech College
                    </h4>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">01/2021 - 01/2023</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span className="text-muted-foreground">Jamnagar, India</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold mb-2">Specialization:</h5>
                      <p className="text-muted-foreground">
                        Information Technology with focus on software development, 
                        web technologies, and modern programming practices.
                      </p>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-2">Key Coursework:</h5>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Software Engineering",
                          "Web Development", 
                          "Database Management",
                          "Programming Languages",
                          "System Analysis",
                          "Project Management"
                        ].map((course) => (
                          <Badge key={course} variant="outline" className="skill-badge text-xs">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}