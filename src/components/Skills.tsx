import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Network, Globe, Cloud, Brain, Terminal, Server, Cpu, Wifi } from "lucide-react";

const specializations = [
  { icon: Network, title: "Network Pentesting", desc: "Infrastructure assessment, vulnerability scanning, exploitation & post-exploitation" },
  { icon: Globe, title: "Web App Pentesting", desc: "OWASP Top 10, API security, authentication bypass, injection attacks" },
  { icon: Cloud, title: "Cloud Security", desc: "AWS security auditing, misconfiguration detection, IAM policy analysis" },
  { icon: Brain, title: "LLM Security", desc: "Prompt injection, model manipulation, AI system hardening & red teaming" },
];

const tools = [
  { icon: Terminal, label: "Python" },
  { icon: Server, label: "Linux" },
  { icon: Cpu, label: "AWS" },
  { icon: Wifi, label: "Networking" },
];

const Skills = () => {
  const ref = useScrollAnimation();

  return (
    <section id="skills" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="fade-up">
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">// 02</p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12">Skills & Expertise</h2>
        </div>

        {/* Specializations */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {specializations.map((s, i) => (
            <div
              key={s.title}
              className="fade-up p-6 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300 group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <s.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-mono font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Tools */}
        <div className="fade-up" style={{ transitionDelay: "0.4s" }}>
          <h3 className="font-mono text-sm text-muted-foreground mb-4 uppercase tracking-widest">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border text-sm font-mono text-foreground"
              >
                <t.icon size={16} className="text-primary" />
                {t.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
