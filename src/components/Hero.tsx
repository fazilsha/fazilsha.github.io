import { Github, Linkedin, Facebook, Instagram, MessageCircle, ArrowDown } from "lucide-react";
import fazilPhoto from "@/assets/fazil-photo.png";

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/fazil-sha-6b56ba15b/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/fazilsha", label: "GitHub" },
  { icon: MessageCircle, href: "#", label: "Discord" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-primary font-mono text-sm mb-3 tracking-widest uppercase">
            // Hello World
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono font-bold mb-4 leading-tight">
            Fazil Sha
          </h1>
          <div className="overflow-hidden mb-6">
            <p className="text-xl sm:text-2xl text-muted-foreground font-mono">
              <span className="text-primary">&gt;</span> Cybersecurity Professional
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink align-middle" />
            </p>
          </div>
          <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
            Specializing in network pentesting, web application security, cloud security, 
            and LLM security. Passionate about finding vulnerabilities before the bad actors do.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity glow"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-border text-foreground font-mono text-sm font-semibold rounded-lg hover:border-primary/50 transition-colors"
            >
              View Projects
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-4 justify-center md:justify-start">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label={s.label}
              >
                <s.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Profile photo */}
        <div className="flex-shrink-0">
          <div className="relative group">
            {/* Outer rotating ring */}
            <div className="absolute -inset-3 rounded-full border border-dashed border-primary/20 animate-[spin_20s_linear_infinite] pointer-events-none" />
            {/* Glow backdrop */}
            <div className="absolute -inset-6 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all duration-700 pointer-events-none" />
            {/* Photo container */}
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 animate-pulse-glow relative z-10 group-hover:border-primary/60 transition-all duration-500 group-hover:scale-105">
              <img
                src={fazilPhoto}
                alt="Fazil Sha"
                className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Floating orbital ring */}
            <div className="absolute -inset-6 rounded-full border border-primary/10 animate-float pointer-events-none" />
            {/* Corner accents */}
            <div className="absolute -top-2 -right-2 w-3 h-3 border-t-2 border-r-2 border-primary/40 pointer-events-none" />
            <div className="absolute -bottom-2 -left-2 w-3 h-3 border-b-2 border-l-2 border-primary/40 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default Hero;
