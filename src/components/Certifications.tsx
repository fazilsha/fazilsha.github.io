import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Award, GraduationCap } from "lucide-react";

const certs = [
  { title: "Your Certification Here", org: "Issuing Organization", year: "2024" },
  { title: "Another Certification", org: "Issuing Organization", year: "2023" },
];

const education = [
  { title: "Your Degree / Program", org: "University Name", year: "2020 – 2024" },
];

const Certifications = () => {
  const ref = useScrollAnimation();

  return (
    <section id="certifications" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="fade-up">
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">// 04</p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12">Certifications & Education</h2>
        </div>

        {/* Certs */}
        <div className="mb-12">
          <h3 className="fade-up font-mono text-sm text-muted-foreground mb-6 uppercase tracking-widest flex items-center gap-2">
            <Award size={16} className="text-primary" /> Certifications
          </h3>
          <div className="space-y-4">
            {certs.map((c, i) => (
              <div
                key={i}
                className="fade-up flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-1 h-12 bg-primary rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold">{c.title}</h4>
                  <p className="text-sm text-muted-foreground">{c.org}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{c.year}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="fade-up font-mono text-sm text-muted-foreground mb-6 uppercase tracking-widest flex items-center gap-2">
            <GraduationCap size={16} className="text-primary" /> Education
          </h3>
          <div className="space-y-4">
            {education.map((e, i) => (
              <div
                key={i}
                className="fade-up flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="w-1 h-12 bg-primary rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-semibold">{e.title}</h4>
                  <p className="text-sm text-muted-foreground">{e.org}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{e.year}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
