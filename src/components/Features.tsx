import { motion } from 'framer-motion';
import { Palette, Zap, Globe, BarChart, Clock, Database } from 'lucide-react';

const Features = () => {
  return (
    <section className="container mx-auto px-4 py-16 max-w-[1200px]">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Platform Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Main Feature Card */}
        <motion.div 
          className="md:col-span-2 row-span-2 relative rounded-3xl bg-purple-900/20 p-8 overflow-hidden"
          whileHover={{ scale: 0.98 }}
        >
          <img
            src="https://images.unsplash.com/photo-1600673645627-1c47394132ac"
            alt="Analytics Dashboard"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <Palette size={32} className="text-purple-400" />
              <h3 className="text-2xl font-semibold">Creative Analytics</h3>
            </div>
            <p className="text-gray-300 text-lg">
              Visualize your data with beautiful, customizable dashboards that tell your business story.
            </p>
          </div>
        </motion.div>

        {/* Performance Card */}
        <motion.div
          className="rounded-3xl bg-gradient-to-br from-blue-900/40 to-cyan-900/30 p-6"
          whileHover={{ y: -5 }}
        >
          <div className="flex flex-col items-center text-center">
            <Zap size={28} className="text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Real-time Processing</h3>
            <p className="text-sm text-gray-300">
              Instant insights with <br />50ms response time
            </p>
          </div>
        </motion.div>

        {/* Global Card */}
        <motion.div 
          className="rounded-3xl bg-emerald-900/20 p-6 flex flex-col items-center justify-center"
          whileHover={{ rotate: 2 }}
        >
          <Globe size={40} className="text-emerald-400 mb-4" />
          <h3 className="text-xl font-semibold text-center">Global Reach</h3>
          <div className="mt-2 flex gap-2">
            <span className="text-xs bg-emerald-900/40 px-2 py-1 rounded-full">150+</span>
            <span className="text-xs bg-emerald-900/40 px-2 py-1 rounded-full">Countries</span>
          </div>
        </motion.div>

        {/* Vertical Stats Card */}
        <motion.div
          className="md:row-span-2 rounded-3xl bg-orange-900/20 p-8 flex flex-col justify-between"
          whileHover={{ x: 5 }}
        >
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
        </motion.div>

        {/* Small Cards Row */}
        <motion.div
            className="md:col-span-2 rounded-3xl bg-purple-900/20 p-6 flex items-center justify-between h-[200px]"
            whileHover={{ scale: 0.96 }}
            >
            <div className="flex items-center gap-3">
                <Clock size={32} className="text-purple-400" />
                <div>
                <h4 className="font-medium">24/7 Monitoring</h4>
                <p className="text-sm text-gray-400">Always active</p>
                </div>
            </div>

            <div className="flex items-center gap-3">
                <Database size={32} className="text-sky-400" />
                <div>
                <h4 className="font-medium">Secure Storage</h4>
                <p className="text-sm text-gray-400">Encrypted backups</p>
                </div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Features;
