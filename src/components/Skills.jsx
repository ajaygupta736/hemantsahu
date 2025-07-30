import { useState } from 'react';
import { Code, Database, Globe, Server, GitBranch, Palette } from 'lucide-react';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'Tools' }
  ];

  const skills = [
    {
      category: 'frontend',
      name: 'HTML5',
      description: 'Semantic markup, accessibility, modern standards.',
      icon: '🏗️',
      tags: ['Semantic HTML', 'Accessibility', 'SEO']
    },
    {
      category: 'frontend',
      name: 'CSS3',
      description: 'Responsive design, animations, Flexbox/Grid.',
      icon: '🎨',
      tags: ['Flexbox', 'Grid', 'Animations']
    },
    {
      category: 'frontend',
      name: 'JavaScript',
      description: 'ES6+, async programming, DOM manipulation.',
      icon: '⚡',
      tags: ['ES6+', 'DOM API', 'Async/Await']
    },
    {
      category: 'frontend',
      name: 'React',
      description: 'Hooks, Context API, Redux, performance.',
      icon: '⚛️',
      tags: ['Hooks', 'Context API', 'Redux']
    },
    {
      category: 'backend',
      name: 'Node.js',
      description: 'Server-side JavaScript, REST APIs, middleware.',
      icon: '🚀',
      tags: ['REST APIs', 'Middleware', 'Express']
    },
    {
      category: 'backend',
      name: 'MongoDB',
      description: 'NoSQL database, aggregation, indexing.',
      icon: '🍃',
      tags: ['NoSQL', 'Aggregation', 'Indexing']
    },
    {
      category: 'tools',
      name: 'Git & GitHub',
      description: 'Version control, collaboration, CI/CD.',
      icon: '📝',
      tags: ['Version Control', 'Collaboration', 'CI/CD']
    },
    {
      category: 'tools',
      name: 'VS Code',
      description: 'Code editor, extensions, debugging.',
      icon: '💻',
      tags: ['Extensions', 'Debugging', 'Productivity']
    }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I work with, categorized by specialization.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg card-shadow hover-lift animate-fade-in border border-border/50"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mr-4">
                  {skill.icon}
                </div>
                <div>
                  <span className={`text-xs px-2 py-1 rounded-full text-primary bg-primary/10 ${
                    skill.category === 'frontend' ? 'bg-blue-100 text-blue-600' :
                    skill.category === 'backend' ? 'bg-green-100 text-green-600' :
                    'bg-purple-100 text-purple-600'
                  }`}>
                    {skill.category.charAt(0).toUpperCase() + skill.category.slice(1)}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">{skill.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>
              
              <div className="flex flex-wrap gap-1">
                {skill.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex}
                    className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;