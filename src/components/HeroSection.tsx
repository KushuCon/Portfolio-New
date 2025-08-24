import { TypewriterText } from './TypewriterText';
import { GlitchText } from './GlitchText';
import { Button } from './ui/button';

const ROLES = [
  'PROGRAMMER',
  'FULL STACK DEV',
  'AI/ML DESIGNER', 
  'WEB DEVELOPER',
  'VIDEO EDITOR'
];

export const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 reveal-text">
            <h1 className="text-6xl md:text-8xl font-display font-bold mb-4">
              <GlitchText 
                text="KAUSTUBH CONSUL" 
                className="text-gradient inline-block"
              />
            </h1>
          </div>

          <div className="mb-8 h-20 flex items-center justify-center">
            <div className="text-2xl md:text-4xl font-mono">
              <span className="text-muted-foreground">I AM A </span>
              <TypewriterText 
                texts={ROLES}
                className="text-primary font-bold"
                speed={150}
              />
            </div>
          </div>

          <div className="mb-12 max-w-2xl mx-auto reveal-text">
            <p className="text-lg text-muted-foreground font-mono leading-relaxed">
              Transforming ideas into digital realities through code, innovation, and cutting-edge technology.
              Welcome to my digital space where algorithms meet creativity.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal-text">
            <Button 
              variant="default"
              size="lg"
              className="terminal-border glow-orange font-mono text-lg px-8 py-4 bg-primary hover:bg-primary-glow"
              onClick={() => window.open('https://github.com/KushuCon', '_blank')}
            >
              EXPLORE WORK
            </Button>
            <Button 
              variant="outline"
              size="lg" 
              className="terminal-border glow-blue font-mono text-lg px-8 py-4 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground"
              onClick={() => window.open('https://www.linkedin.com/in/kaustubhconsul/', '_blank')}
            >
              GET IN TOUCH
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Code Symbols */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 text-primary/20 text-4xl font-mono animate-pulse">{'{'}</div>
        <div className="absolute top-40 right-20 text-secondary/20 text-4xl font-mono animate-pulse" style={{animationDelay: '1s'}}>{'}'}</div>
        <div className="absolute bottom-40 left-20 text-primary/20 text-4xl font-mono animate-pulse" style={{animationDelay: '2s'}}>{'</'}</div>
        <div className="absolute bottom-20 right-10 text-secondary/20 text-4xl font-mono animate-pulse" style={{animationDelay: '3s'}}>{'>'}</div>
      </div>
    </section>
  );
};