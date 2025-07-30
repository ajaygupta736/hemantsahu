import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Instagram } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30 pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left animate-fade-in">
            <p className="text-muted-foreground font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="text-foreground">Hemant </span>
              <span className="text-primary">Sahu</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
              Aspiring Full Stack Web Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-lg">
              I craft modern, responsive web applications using the latest technologies including MERN Stack.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button 
                onClick={scrollToProjects}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium"
              >
                View My Work
              </Button>
              <Button 
                onClick={scrollToContact}
                variant="outline" 
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 rounded-lg font-medium"
              >
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start space-x-4">
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
              <div className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center soft-shadow">
                <div className="w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                    alt="Hemant Sahu"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Working on badge */}
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                <span className="flex items-center gap-2">
                  📅 Working on MERN Projects
                </span>
              </div>
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