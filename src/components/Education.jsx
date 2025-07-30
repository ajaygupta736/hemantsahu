import { GraduationCap, Award, Calendar } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "SIES College",
      duration: "2022 - 2025",
      description: "Specialized in modern web technologies, databases, and software development methodologies. Completed coursework in advanced programming, data structures, and web application development.",
      subjects: ["Web Development", "Database Systems", "Software Engineering"],
      icon: <GraduationCap className="text-primary" size={24} />
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Maharashtra State Board",
      duration: "2020 - 2022",
      description: "Focused on computer science fundamentals, mathematics, and physics. Developed strong problem-solving skills and logical thinking abilities.",
      subjects: ["Computer Science", "Mathematics", "Physics"],
      icon: <Award className="text-primary" size={24} />
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Maharashtra State Board",
      duration: "2020",
      description: "Developed foundational knowledge in science and mathematics. First exposure to computer programming and logical thinking.",
      subjects: ["Science", "Mathematics", "Computer Applications"],
      icon: <Award className="text-primary" size={24} />
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            {educationData.map((item, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-20 bg-card p-6 rounded-lg card-shadow hover-lift animate-fade-in border border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      {item.icon}
                      <span className="ml-2 text-primary font-medium text-sm bg-primary/10 px-3 py-1 rounded-full">
                        {item.duration}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.degree}
                  </h3>
                  
                  <p className="text-primary font-medium mb-3">
                    {item.institution}
                  </p>
                  
                  <p className="text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.subjects.map((subject, subjectIndex) => (
                      <span 
                        key={subjectIndex}
                        className="text-xs px-3 py-1 bg-muted text-muted-foreground rounded-full"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;