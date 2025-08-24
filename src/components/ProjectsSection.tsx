import { GlitchText } from './GlitchText';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ExternalLink } from 'lucide-react';

export const ProjectsSection = () => {
  const projects = [
    {
      title: "TaskNotes",
      description: "LeetCode inspired daily notes taking system with docs uploading, green progress boxes, and AI chat helper with multiple AI models. Save your work and track progress in production with upcoming features.",
      link: "https://log-growth-leet-code-inspired-45ty.vercel.app/",
      status: "In Production"
    },
    {
      title: "Civic Sense",
      description: "Reporting app for citizens so government can listen and work harder. Report issues and get rewards (mock rewards) with Twitter-like UI/UX for seamless user experience.",
      link: "https://civic-report-and-reward.vercel.app/",
      status: "Live"
    },
    {
      title: "Global Chat",
      description: "Want to chat with anyone from anywhere? Features live language translation so you don't have to worry about language barriers - just talk in your own language and connect globally.",
      link: "https://global-chat-omegle-knockoff.vercel.app/",
      status: "Live"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <GlitchText text="PROJECTS" className="text-gradient" />
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="terminal-border bg-card/50 p-6 backdrop-blur-sm hover:glow-blue transition-all duration-300 flex flex-col"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-display font-bold text-primary">
                  {project.title.toUpperCase()}
                </h3>
                <span className="text-xs font-mono text-secondary bg-secondary/20 px-2 py-1 rounded">
                  {project.status}
                </span>
              </div>
              
              <p className="text-muted-foreground font-mono text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>
              
              <Button 
                variant="outline"
                size="sm"
                className="terminal-border glow-orange font-mono text-sm w-full"
                onClick={() => window.open(project.link, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                VIEW PROJECT
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};