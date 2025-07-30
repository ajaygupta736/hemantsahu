import { Code, Database, Globe, Server, Smartphone, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe className="text-primary" size={32} />,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 }
      ]
    },
    {
      title: "Backend",
      icon: <Server className="text-primary" size={32} />,
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 70 },
        { name: "PHP", level: 65 },
        { name: "API Development", level: 70 }
      ]
    },
    {
      title: "Database",
      icon: <Database className="text-primary" size={32} />,
      skills: [
        { name: "MongoDB", level: 75 },
        { name: "MySQL", level: 80 },
        { name: "Database Design", level: 70 },
        { name: "Data Modeling", level: 65 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <GitBranch className="text-primary" size={32} />,
      skills: [
        { name: "Git & GitHub", level: 75 },
        { name: "VS Code", level: 90 },
        { name: "Responsive Design", level: 85 },
        { name: "Problem Solving", level: 80 }
      ]
    }
  ];

  const technologies = [
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-500" },
    { name: "React", color: "bg-cyan-500" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "MongoDB", color: "bg-green-600" },
    { name: "Express.js", color: "bg-gray-600" },
    { name: "MySQL", color: "bg-blue-600" },
    { name: "PHP", color: "bg-purple-600" },
    { name: "Git", color: "bg-red-500" }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-card p-6 rounded-lg card-shadow hover-lift animate-fade-in">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <span 
                key={index}
                className={`inline-flex items-center px-4 py-2 rounded-full text-white font-medium text-sm hover-lift ${tech.color}`}
              >
                <span className="w-2 h-2 rounded-full bg-white/20 mr-2"></span>
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;