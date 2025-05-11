import { Github, Linkedin, Youtube, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-10">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8">
          {/* Logo and About */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">BeyondTrends</h1>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
              <Github className="w-6 h-6 hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-6 h-6 hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://youtube.com/yourchannel" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-6 h-6 hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
              <Twitter className="w-6 h-6 hover:text-gray-400 transition-colors" />
            </a>
            <a href="https://facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-6 h-6 hover:text-gray-400 transition-colors" />
            </a>
          </div>
        </div>

        {/* Middle Section */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 mt-8 text-sm">
  

  {/* Column 3 */}
  <div>
    <h3 className="font-semibold mb-2 text-left">Resources</h3>
    <ul className="space-y-1 text-left">
      <li><a href="/guides" className="hover:underline">Guides</a></li>
      <li><a href="/case-studies" className="hover:underline">Case Studies</a></li>
      <li><a href="/whitepapers" className="hover:underline">Whitepapers</a></li>
      <li><a href="/events" className="hover:underline">Events</a></li>
    </ul>
  </div>

  {/* Column 4 */}
  <div>
    <h3 className="font-semibold mb-2 text-left">Legal</h3>
    <ul className="space-y-1 text-left">
      <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
      <li><a href="/cookie-policy" className="hover:underline">Cookie Policy</a></li>
      <li><a href="/disclaimer" className="hover:underline">Disclaimer</a></li>
      <li><a href="/accessibility-statement" className="hover:underline">Accessibility Statement</a></li>
    </ul>
  </div>
</div>


        {/* Bottom Section */}
        <div className="mt-8 text-center text-xs text-gray-500">
          &copy; {new Date().getFullYear()} BeyondTrends. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
