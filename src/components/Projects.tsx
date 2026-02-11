import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AmiPwned",
    desc: "A tool to check if your credentials have been compromised in known data breaches.",
    tags: ["Python", "Security"],
    github: "https://github.com/fazilsha/AmiPwned",
  },
  {
    title: "Python Basics",
    desc: "A comprehensive collection of Python fundamentals and exercises for beginners.",
    tags: ["Python", "Education"],
    github: "https://github.com/fazilsha/python-basics",
  },
  {
    title: "AWS Boto3 Scripts",
    desc: "Automation scripts for AWS services using the Boto3 SDK for cloud security tasks.",
    tags: ["AWS", "Python", "Cloud"],
    github: "https://github.com/fazilsha/aws-boto3",
  },
  {
    title: "Security Toolkit",
    desc: "Custom scripts and tools for penetration testing and vulnerability assessment.",
    tags: ["Pentesting", "Tools"],
    github: "https://github.com/fazilsha",
  },
];

const Projects = () => {
  const ref = useScrollAnimation();

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="fade-up">
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">// 03</p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12">Projects</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="fade-up group p-6 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-mono font-semibold text-lg group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={18} />
                </a>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary"
                  >
                    {t}
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

export default Projects;
