import { GlitchText } from './GlitchText';
import { Card } from './ui/card';

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
              <GlitchText text="ABOUT" className="text-gradient" />
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="reveal-text">
                <h3 className="text-2xl font-display font-bold text-primary mb-4">
                  WHO AM I?
                </h3>
                <p className="text-muted-foreground font-mono leading-relaxed">
                  A passionate developer and programmer who speaks in code and dreams in algorithms. 
                  I transform ideas into digital realities and future proven ideas and beliefs, one line of code at a time.
                </p>
              </div>

              <div className="reveal-text">
                <h3 className="text-2xl font-display font-bold text-secondary mb-4">
                  MISSION.EXE
                </h3>
                <p className="text-muted-foreground font-mono leading-relaxed">
                  To push the boundaries of myself and ideas to create experiences 
                  that blur the line between technology and peoples art.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="terminal-border bg-card/50 p-6 backdrop-blur-sm">
                <div className="font-mono text-sm">
                  <div className="text-morse mb-2">{'>'} INITIALIZING...</div>
                  <div className="text-primary">EXPERIENCE: 3+ YEARS</div>
                  <div className="text-secondary">PROJECTS_COMPLETED: 10+</div>
                  <div className="text-foreground">STATUS: AVAILABLE_FOR_HIRE</div>
                  <div className="text-morse mt-2">{'>'} READY TO COLLABORATE</div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};