import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Send, Github, Linkedin, MessageCircle, Facebook, Instagram } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only — no backend
    alert("Thanks for reaching out! This form is a demo — connect a backend to make it functional.");
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <div className="fade-up">
          <p className="text-primary font-mono text-sm mb-2 tracking-widest">// 06</p>
          <h2 className="text-3xl md:text-4xl font-mono font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground mb-12 max-w-lg">
            Interested in collaborating or have a security concern? Drop me a message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="fade-up space-y-4" style={{ transitionDelay: "0.1s" }}>
            <input
              placeholder="Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary text-sm"
              required
            />
            <textarea
              placeholder="Message"
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary text-sm resize-none"
              required
            />
            <button
              type="submit"
              className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity glow"
            >
              <Send size={16} /> Send Message
            </button>
          </form>

          <div className="fade-up flex flex-col justify-center" style={{ transitionDelay: "0.2s" }}>
            <h3 className="font-mono text-sm text-muted-foreground mb-6 uppercase tracking-widest">Connect</h3>
            <div className="space-y-4">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/fazil-sha-6b56ba15b/" },
                { icon: Github, label: "GitHub", href: "https://github.com/fazilsha" },
                { icon: MessageCircle, label: "Discord", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
                { icon: Instagram, label: "Instagram", href: "#" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  <s.icon size={18} /> {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
