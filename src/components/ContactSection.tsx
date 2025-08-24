import { GlitchText } from './GlitchText';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const ContactSection = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/KushuCon",
      icon: Github,
      color: "hover:text-primary"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/kaustubhconsul/",
      icon: Linkedin,
      color: "hover:text-secondary"
    },
    {
      name: "Twitter",
      url: "https://x.com/kryptonitic_us", 
      icon: Twitter,
      color: "hover:text-primary"
    },
    {
      name: "Email",
      url: "mailto:kushucon@gmail.com",
      icon: Mail,
      color: "hover:text-secondary"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6">
            <GlitchText text="CONTACT" className="text-gradient" />
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="terminal-border bg-card/50 p-8 backdrop-blur-sm text-center">
            <div className="mb-8">
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                LET'S CONNECT
              </h3>
              <p className="text-muted-foreground font-mono leading-relaxed">
                Ready to collaborate on your next big idea? Let's build something amazing together.
                Reach out through any of these channels and let's start coding the future.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    size="lg"
                    className={`terminal-border font-mono text-sm p-6 flex flex-col items-center gap-2 ${social.color} transition-all duration-300 hover:glow-orange`}
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <IconComponent className="w-6 h-6" />
                    <span className="text-xs">{social.name}</span>
                  </Button>
                );
              })}
            </div>

            <div className="mt-8 font-mono text-sm text-muted-foreground">
              <div className="text-morse mb-2">{'>'} STATUS: ONLINE</div>
              <div className="text-primary">LOCATION: READY TO WORK GLOBALLY</div>
              <div className="text-secondary">RESPONSE_TIME: {'<'} 24 HOURS</div>
              <div className="text-morse mt-2">{'>'} ALWAYS OPEN TO NEW OPPORTUNITIES</div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};