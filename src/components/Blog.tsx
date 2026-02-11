import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar, ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Understanding Network Penetration Testing Methodologies",
    date: "Coming Soon",
    excerpt: "A deep dive into modern network pentesting approaches, tools, and techniques used in professional assessments.",
  },
  {
    title: "OWASP Top 10: A Practical Guide",
    date: "Coming Soon",
    excerpt: "Breaking down the most critical web application security risks with real-world examples and remediation strategies.",
  },
  {
    title: "Securing LLM-Powered Applications",
    date: "Coming Soon",
    excerpt: "Exploring the unique security challenges of AI/LLM applications including prompt injection and data poisoning.",
  },
];

const Blog = () => {
  const ref = useScrollAnimation();

  return (
    <section id="blog" className="section-padding" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="fade-up">
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">// 05</p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-12">Blog & Write-ups</h2>
        </div>

        <div className="space-y-6">
          {posts.map((p, i) => (
            <div
              key={i}
              className="fade-up group p-6 rounded-xl bg-card border border-border hover:glow-border transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono mb-2">
                <Calendar size={12} />
                {p.date}
              </div>
              <h3 className="font-mono font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">{p.excerpt}</p>
              <span className="text-primary text-sm font-mono flex items-center gap-1">
                Read more <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
