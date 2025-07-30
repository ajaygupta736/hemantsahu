import { GraduationCap, Code, Users, Target } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="text-primary" size={24} />,
      title: "Education",
      description: "BSc IT from SIES College"
    },
    {
      icon: <Code className="text-primary" size={24} />,
      title: "Tech Stack",
      description: "MERN Stack Developer"
    },
    {
      icon: <Target className="text-primary" size={24} />,
      title: "Goal",
      description: "Full Stack Mastery"
    },
    {
      icon: <Users className="text-primary" size={24} />,
      title: "Collaboration",
      description: "Team Player"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and passion for web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Hello! I'm Hemant Sahu
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am an aspiring full stack web developer and a recent graduate from 
                <span className="text-primary font-medium"> SIES College</span> with a 
                <span className="text-primary font-medium"> BSc in Information Technology</span>.
              </p>
              <p>
                I'm passionate about building web applications and continuously learning new technologies. 
                Although I am a fresher, I've worked on practical projects that demonstrate my skills 
                and commitment to web development.
              </p>
              <p>
                My journey in technology started during my college years, where I discovered my love 
                for creating digital solutions. I enjoy the problem-solving aspect of programming and 
                the satisfaction of bringing ideas to life through code.
              </p>
              <p>
                I'm always eager to learn new technologies and take on challenging projects that 
                help me grow as a developer. My goal is to become a proficient full stack developer 
                and contribute to meaningful projects.
              </p>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-lg card-shadow hover-lift text-center"
              >
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;