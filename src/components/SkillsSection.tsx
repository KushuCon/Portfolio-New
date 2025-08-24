import { GlitchText } from './GlitchText';
import { Card } from './ui/card';

export const SkillsSection = () => {
  const skills = [
    { category: "Programming", items: ["C/C++", "Java", "Python"] },
    { category: "AI/ML", items: ["Machine Learning", "Deep Learning", "Data Science"] },
    { category: "Blockchain", items: ["Rust", "Smart Contracts", "Ethereum"] },
    { category: "Core CS", items: ["DSA", "Algorithms", "System Design"] },
    { category: "Web Dev", items: ["Full Stack", "React", "Node.js"] },
    { category: "Creative", items: ["Video Editing", "Photoshop", "UI/UX"] }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <GlitchText text="SKILLS" className="text-gradient" />
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="terminal-border bg-card/50 p-6 backdrop-blur-sm hover:glow-orange transition-all duration-300"
            >
              <h3 className="text-xl font-display font-bold text-primary mb-4">
                {skill.category.toUpperCase()}
              </h3>
              <div className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="font-mono text-muted-foreground hover:text-secondary transition-colors cursor-pointer"
                  >
                    {'>'} {item}
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};