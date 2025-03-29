import { motion } from 'framer-motion';
import { Palette, Zap, Globe, BarChart, Clock, Database } from 'lucide-react';

const Features = () => {
  return (
    <section className="container mx-auto px-4 py-16 max-w-[1200px] md:mb-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Platform Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Main Feature Card */}
        <motion.div 
          className="md:col-span-2 row-span-2 relative rounded-xl bg-black p-8 overflow-hidden shadow-purple-500/50 shadow-2xl"
          whileHover={{ scale: 0.98 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600673645627-1c47394132ac"
            alt="Analytics Dashboard"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <img 
            src="https://placedog.net/200/200" 
            alt="Dog" 
            className="absolute bottom-4 right-4 w-20 h-20 rounded-full object-cover border-2 border-purple-400" 
          />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Palette size={32} className="text-purple-400" />
              <h3 className="text-2xl font-semibold">Creative Analytics</h3>
            </div>
            <p className="text-gray-300 text-lg">
              Visualize your data with beautiful, customizable dashboards that tell your business story.
            </p>
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg">Try Now</button>
          </div>
        </motion.div>

        {/* Performance Card */}
        <motion.div
          className="rounded-xl bg-black p-6 shadow-purple-500/50 shadow-xl"
          whileHover={{ y: -5 }}
        >
          <img src="https://placedog.net/150/150" alt="Dog" className="w-16 h-16 rounded-full mx-auto mb-2" />
          <div className="flex flex-col items-center text-center">
            <Zap size={28} className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
            <p className="text-sm text-gray-300">Instant insights with <br />50ms response time</p>
            <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg">Try Now</button>
          </div>
        </motion.div>

        {/* Global Card */}
        <motion.div 
          className="rounded-xl bg-black p-6 shadow-purple-500/50 shadow-xl"
          whileHover={{ rotate: 2 }}
        >
          <img src="https://placedog.net/140/140" alt="Dog" className="w-16 h-16 rounded-full mx-auto mb-2" />
          <Globe size={40} className="text-emerald-400 mb-4" />
          <h3 className="text-xl font-semibold text-center">Global Reach</h3>
          <div className="mt-2 flex gap-2 justify-center">
            <span className="text-xs bg-emerald-900/40 px-2 py-1 rounded-full">150+</span>
            <span className="text-xs bg-emerald-900/40 px-2 py-1 rounded-full">Countries</span>
          </div>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg w-full">Try Now</button>
        </motion.div>

        {/* Vertical Stats Card */}
        <motion.div
          className="md:row-span-2 rounded-xl bg-black p-8 flex flex-col justify-between shadow-purple-500/50 shadow-xl"
          whileHover={{ x: 5 }}
        >
          <img src="https://placedog.net/180/180" alt="Dog" className="w-20 h-20 rounded-full mb-4 mx-auto" />
          <div>
            <BarChart size={32} className="text-orange-400 mb-6 " />
            <h3 className="text-2xl font-semibold mb-4">Daily Insights</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span>Active Users</span>
                <span className="font-mono">24.5k</span>
              </div>
              <div className="h-px bg-orange-800/40"></div>
            </div>
          </div>
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg w-full">Try Now</button>
        </motion.div>

        {/* Small Cards Row */}
        <motion.div
          className="md:col-span-2 rounded-xl bg-black p-6 flex items-center justify-between h-[200px] shadow-purple-500/50 shadow-xl"
          whileHover={{ scale: 0.96 }}
        >
          <div className="flex items-center gap-3">
            <Clock size={32} className="text-purple-400" />
            <div>
              <h4 className="font-medium">24/7 Monitoring</h4>
              <p className="text-sm text-gray-400">Always active</p>
              <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg">Try Now</button>
            </div>
          </div>
          <div className="items-center gap-3 hidden">
            <Database size={32} className="text-sky-400" />
            <div>
              <h4 className="font-medium">Secure Storage</h4>
              <p className="text-sm text-gray-400">Encrypted backups</p>
              <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg">Try Now</button>
            </div>
          </div>
        </motion.div>
        <h1 className='font-extrabold text-3xl w-[80vh] hidden'>One Step Solution</h1>
      </div>
    </section>
  );
};

export default Features;
