import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Calendar, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "PG Life",
      description: "A comprehensive PG accommodation platform designed to help students find suitable housing. Features include property listings, detailed descriptions, amenities information, and user-friendly search functionality.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "PHP", "MySQL"],
      features: [
        "Property search and filtering",
        "Detailed property information",
        "User authentication system",
        "Responsive design",
        "Admin panel for property management"
      ],
      role: "Full Stack Developer",
      status: "Completed",
      image: "/placeholder-project-1.jpg",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Skill Up",
      description: "An interactive e-learning website focused on skill development and online education. Built with modern web technologies to provide an engaging learning experience for users.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: [
        "Course catalog and browsing",
        "Interactive learning modules",
        "Progress tracking",
        "Responsive user interface",
        "Clean and modern design"
      ],
      role: "Frontend Developer",
      status: "Completed",
      image: "/placeholder-project-2.jpg",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on that showcase my skills and passion for web development
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`bg-card rounded-lg card-shadow overflow-hidden animate-fade-in ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              } lg:flex items-center`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Code className="text-primary mx-auto mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mt-2">Project Preview</p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {project.status}
                  </span>
                  <span className="text-xs text-muted-foreground">•</span>
                  <span className="text-xs text-muted-foreground">{project.role}</span>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">{project.title}</h3>
                
                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="sm"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    size="sm"
                  >
                    <Github size={16} className="mr-2" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <Button 
            variant="outline" 
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
          >
            <Github size={20} className="mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;