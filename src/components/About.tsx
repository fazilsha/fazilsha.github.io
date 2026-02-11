import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield } from "lucide-react";

const About = () => {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="fade-up">
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">// 01</p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-8">About Me</h2>
        </div>

        <div className="fade-up grid md:grid-cols-[auto_1fr] gap-8 items-start" style={{ transitionDelay: "0.1s" }}>
          <Shield className="text-primary w-12 h-12 hidden md:block mt-1" />
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a cybersecurity professional with a deep passion for identifying and mitigating 
              security threats across diverse technology landscapes. My journey in information security 
              began with a curiosity about how systems work — and more importantly, how they break.
            </p>
            <p>
              Over the years, I've developed expertise in <span className="text-foreground font-medium">network penetration testing</span>, 
              <span className="text-foreground font-medium"> web application security</span>, 
              <span className="text-foreground font-medium"> cloud security</span>, and the emerging field of 
              <span className="text-foreground font-medium"> LLM security</span>. I believe in a proactive approach 
              to security — finding vulnerabilities before they can be exploited.
            </p>
            <p>
              When I'm not breaking into systems (ethically), I enjoy building security tools, 
              writing about my findings, and contributing to the cybersecurity community through 
              knowledge sharing and open-source projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
