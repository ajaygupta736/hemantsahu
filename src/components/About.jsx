import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 card-shadow">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop" 
                alt="Coding workspace" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Who am I?
            </h3>
            <div className="space-y-4 text-muted-foreground mb-8">
              <p>
                A passionate Web Developer and Programmer with a knack for creating visually appealing and 
                user-friendly websites. I specialize in crafting responsive designs, clean code, and seamless user 
                experiences. Constantly learning and evolving, I enjoy solving challenges and turning ideas into 
                reality through technology.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, working on personal projects, or 
                learning about the latest trends in web development. I believe in continuous learning and staying 
                updated with the latest technologies.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-sm font-medium text-foreground">Name:</p>
                <p className="text-muted-foreground">Hemant Sahu</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email:</p>
                <p className="text-muted-foreground">hemant.sahu@example.com</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">From:</p>
                <p className="text-muted-foreground">Mumbai, Maharashtra</p>
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Phone:</p>
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg">
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;