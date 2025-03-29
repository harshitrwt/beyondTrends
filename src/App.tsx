import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Menu } from 'lucide-react';
import StarField from './components/StarField';
import FloatingLogos from './components/FloatingLogos';
import Features from './components/Features';
import Working from './components/Working';
import Footer from './components/Footer';
import { InfiniteMovingCards } from './components/ui/infinite-moving-card';


function App() {
  const dashboardRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      if (dashboardRef.current) {
        const scrollPosition = window.scrollY;
        const element = dashboardRef.current;
        const elementPosition = element.offsetTop - window.innerHeight;
        const rotation = Math.max(-30, Math.min(0, ((scrollPosition - elementPosition) / 5) + 30));
        
        element.style.transform = `perspective(1000px) rotateX(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    if (dashboardRef.current) {
      dashboardRef.current.style.transform = 'perspective(1000px) rotateX(30deg)';
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#000007] text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between relative z-10">
          <div className="text-2xl font-bold">ScalePlus</div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="hover:text-gray-300">Features</a>
            <a href="#" className="hover:text-gray-300">Pricing</a>
            <a href="#" className="hover:text-gray-300">Resources</a>
            <button className="flex items-center gap-2 hover:text-gray-300">
              Solutions <ChevronDown size={16} />
            </button>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 hover:text-gray-300">Sign in</button>
            <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200">
              Start Free Trial
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A] z-50 py-4 px-6 space-y-4">
            <a href="#" className="block hover:text-gray-300">Features</a>
            <a href="#" className="block hover:text-gray-300">Pricing</a>
            <a href="#" className="block hover:text-gray-300">Resources</a>
            <button className="flex items-center gap-2 hover:text-gray-300 w-full">
              Solutions <ChevronDown size={16} />
            </button>
            
            <div className="pt-4 space-y-4 border-t border-gray-800">
              <button className="w-full px-4 py-2 hover:text-gray-300">Sign in</button>
              <button className="w-full px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200">
                Start Free Trial
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center px-4 text-center overflow-hidden">
        {/* Background Image Adjustments */}
        <div className="absolute inset-0 z-[1] h-[50vh]  md:w-full w-[70vh] md:h-[170vh]">
  {/* Background Image */}
  <img 
    src="https://images.unsplash.com/photo-1600673645627-1c47394132ac?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmxhY2slMjBwdXJwbGV8ZW58MHx8MHx8fDA%3D" 
    alt="Background" 
    className="w-full h-full object-cover object-center md:object-top"
  />

  {/* Gradient Overlay for Bottom Opacity */}
  <div 
    className="absolute inset-x-0 bottom-0 h-1/2" // Reduced height for subtle effect
    style={{
      background: 'linear-gradient(to top, rgba(0,0,10,1) 30%, rgba(10,10,10,0))',
    }}
  />
</div>


        {/* Purple Star Animation */}
        <div className="absolute inset-0 z-[2] pointer-events-none">
          <StarField />
        </div>

        {/* Content Adjustments */}
        <div className="container mx-auto pt-[12px] relative z-[3]">
          {/* Announcement Banner */}
          <div className="inline-block mx-auto mb-12 px-4 py-2 rounded-full bg-gray-800 border border-green-500">
            <p className="text-sm flex items-center gap-2">
             <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              Soon going to be public
            </p>
          </div>



          {/* Hero Heading */}
          <h1 className="text-[28px] md:text-[40px] lg:text-[64px] font-bold mb-[16px] md:mb-[24px] leading-tight">
            Scale your business with<br />confidence
          </h1>

          {/* Hero Subtext */}
          <p className="text-base md:text-lg lg:text-xl text-[#888888] mb-[32px] max-w-xl mx-auto leading-relaxed">
            The all-in-one platform that helps you scale your business with powerful analytics, automation, and personalized insights.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-[12px] md:gap-[16px] mb-[64px] md:mb-[96px]">
            <button 
              className="px-[32px] py-[16px] bg-white text-black rounded-full hover:bg-[#EAEAEA]"
              style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
            >
              Get Started 
              <ArrowRight size={20} />
            </button>
            
            <button 
              className="px-[32px] py-[16px] border border-[#444444] rounded-full hover:bg-[#222222] hidden sm:inline"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              Watch Demo
            </button>
          </div>

          {/* Dashboard Preview */}
          <motion.div
            ref={dashboardRef}
            initial={{ rotateX: 30, scale: 1.3 }}
            animate={{ rotateX: 0, scale: 1.1 }}
            transition={{ duration: 1 }}
            style={{
              width: '100%',
              maxWidth: '1200px',
              margin: 'auto',
              transformOrigin: 'center',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '20px',
              boxShadow: 'rgba(147,51,234,.6)',
           }}
           >
             {/* Dashboard Image */}
             <img
               src="https://other-levels.com/cdn/shop/products/Sales_Performance_Metrics_excel_Dashboards_templates_dark_theme.png?v=1732564309"
               alt="Dashboard Preview"
               className="w-full rounded-xl shadow-lg"
             />
             
             {/* Enhanced Neon Glow Effect */}
             <div
               className="absolute -bottom-[10px] left-[50%] transform -translate-x-[50%] w-full h-[60px]"
               style={{
                 background: 'radial-gradient(circle, rgba(147,51,234,0.8) 0%, rgba(147,51,234,0.5) 60%, rgba(147,51,234,0) 100%)',
                 boxShadow: '0 0 60px 20px rgba(147,51,234,0.7), 0 0 100px 30px rgba(147,51,234,0.5)',
               }}
             />
           </motion.div>

           {/* Floating Logos */}
           <div className="mt-[40px] relative overflow-hidden z-[20]">
             <FloatingLogos />
           </div>
         </div>

         {/* Features Section */}
         <Features />
         <Working/>
         <InfiniteMovingCards items={[
    {
      quote: "This is an amazing platform!", name: "John Doe", title: "CEO, ExampleCorp",
      image: 'https://placedog.net/180/180'
    },
    {
      quote: "I love using this tool every day.", name: "Jane Smith", title: "CTO, TechWorld",
      image: 'https://placedog.net/180/180'
    },
    {
      quote: "Highly recommended for scaling businesses.", name: "Alice Johnson", title: "Founder, StartupX",
      image: 'https://placedog.net/180/180'
    },
  ]}
  direction="left" 
  speed="normal" 
  pauseOnHover={true} 
  className="my-custom-class"/>

         <Footer />
       </section>
     </div>
   );
}

export default App;
