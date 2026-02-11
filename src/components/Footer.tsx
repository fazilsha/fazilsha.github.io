import { Github, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-8 px-4 md:px-8">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground font-mono">
        &copy; {new Date().getFullYear()} Fazil Sha. All rights reserved.
      </p>
      <div className="flex gap-4">
        <a href="https://github.com/fazilsha" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Github size={18} />
        </a>
        <a href="https://www.linkedin.com/in/fazil-sha-6b56ba15b/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
          <Linkedin size={18} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
