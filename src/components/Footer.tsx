
import { Github, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6">
      <div className="container mx-auto flex flex-col items-center justify-between md:flex-row px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} BeyondTrends. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <Github className="w-6 h-6 hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-6 h-6 hover:text-gray-400 transition-colors" />
          </a>
          <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
            <Youtube className="w-6 h-6 hover:text-gray-400 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
