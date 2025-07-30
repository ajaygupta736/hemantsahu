import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center hero-gradient">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <p className="text-primary font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Hemant Sahu
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Aspiring Full Stack Web Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              Passionate about building modern web applications and continuously learning new technologies. 
              Explore my work and journey in full stack development.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3"
              >
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="mailto:hemant@example.com" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://github.com/hemantsahu" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/hemantsahu" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://instagram.com/hemantsahu" className="p-2 text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center md:justify-end animate-slide-up">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center soft-shadow">
                <div className="w-72 h-72 md:w-88 md:h-88 rounded-full bg-muted flex items-center justify-center">
                  {/* Placeholder for profile image */}
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-4xl md:text-6xl font-bold text-primary">HS</span>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full animate-pulse delay-700"></div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-muted-foreground" size={24} />
        </div>
      </div>
    </section>
  );
};

export default Hero;