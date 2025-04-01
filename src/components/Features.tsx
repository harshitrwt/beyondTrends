import { motion } from 'framer-motion';
import { Palette, Zap, Globe, BarChart, Clock, Sparkles, Flame, ArrowRightCircle} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  return (
    <section className="container mx-auto px-4 py-16 max-w-[1200px] md:mb-20">
      <h2 className="md:text-[7vh] text-3xl font-semibold text-center md:mb-32 mb-16 shadow-2xl">
        Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Main Feature Card */}
        <motion.div  
      className="md:col-span-2 row-span-2 relative rounded-sm bg-gradient-to-br bg-[#000007]  shadow-purple-500/50 p-8 overflow-hidden shadow-xl flex flex-col justify-center items-center text-white"
      whileHover={{ scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1600673645627-1c47394132ac')] bg-cover"></div>
      <motion.div className="absolute top-10 left-10 text-purple-400" animate={{ rotate: 360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
        <Sparkles size={80} className='hidden md:block text-purple-400'/>
      </motion.div>
      <motion.div className="absolute bottom-10 right-10 text-purple-400" animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}>
        <Flame size={80} />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <h3 className="text-4xl  bg-clip-text bg-gradient-to-r text-white font-semibold drop-shadow-lg">
          Discover Hidden Tech Gems
        </h3>
        <p className="text-lg mt-4 px-6 max-w-lg text-gray-400 hidden md:block">
          Unearth lesser-known but powerful insights in tech. From cutting-edge research to deep-dive blogs, we bring you the most underrated yet impactful content.
        </p>
      </div>

      {/* Image Showcase */}
      <div className="relative z-10 mt-6 flex flex-wrap justify-center gap-4 ">
        <motion.img 
          src="https://source.unsplash.com/400x250/?technology,coding"
          alt="Tech Insight"
          className="w-48 h-32 rounded-lg shadow-lg hover:scale-105 transition duration-300"
        />
        <motion.img 
          src="https://source.unsplash.com/400x250/?innovation,computer"
          alt="Innovative Tech"
          className="w-48 h-32 rounded-lg shadow-lg hover:scale-105 transition duration-300"
        />
        <motion.img 
          src="https://source.unsplash.com/400x250/?cybersecurity"
          alt="Cybersecurity"
          className="w-48 h-32 rounded-lg shadow-lg hover:scale-105 transition duration-300"
        />
      </div>

      {/* CTA Button */}
      <Link to="/ArticlesPage">
      <button className="mt-6 px-6 py-3 bg-purple-500 text-white rounded-full font-semibold text-lg hover:bg-purple-600 transition-all duration-300 shadow-lg hidden md:block">
        Explore Now
      </button>
      </Link>
      
    </motion.div>


        {/* Performance Card */}
        <motion.div
      className="relative rounded-sm bg-black p-6 shadow-purple-500/50 shadow-xl"
      whileHover={{ y: -5 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      {/* Neutral image */}
      <div className="relative overflow-hidden mb-6">
        <img
          src="https://placedog.net/150/150"
          alt="Dog"
          className="w-full h-40 object-cover"
        />
      </div>
      
      {/* Purple section inside the box */}
      <div className="bg-purple-600 p-4 rounded-t-xl relative z-10 text-center">
        <div className="flex flex-col items-center mb-4">
          {/* Zap Icon and Text */}
          <div className="flex items-center gap-2 mb-4">
            <Zap size={28} className="text-black" />
            <h3 className="text-xl font-semibold text-white">Articles worth reading</h3>
          </div>
          <p className="text-sm text-gray-100 mb-6">
            Explore the top underrated, but worth-to-watch tech articles and content online.
          </p>
        </div>

        {/* Circle with arrow icon and hover animation */}
        <Link to="/VideoPage">
        <div className="flex justify-center items-center bg-black text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-900 transition duration-350">
            <span className="font-semibold mr-2">Try Now</span>
            <ArrowRightCircle size={24} className="text-white ml-40" />
          </div>
        </Link>
      </div>
    </motion.div>
        {/* Global Card */}
        <motion.div
      className="rounded-sm bg-black p-6 shadow-purple-500/50 shadow-xl"
      whileHover={{ rotate: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {/* Neutral image */}
      <div className="relative overflow-hidden mb-6">
        <img
          src="https://placedog.net/140/140"
          alt="Dog"
          className="w-full h-40 object-cover"
        />
      </div>

      {/* Purple section inside the box */}
      <div className="bg-purple-600 p-4 rounded-t-xl relative z-10 text-center">
        <div className="flex flex-col items-center mb-4">
          {/* Globe Icon and Text */}
          <div className="flex items-center gap-2 mb-4">
            <Globe size={30} className="text-black" />
            <h3 className="text-xl font-semibold text-white">Global Github Repos</h3>
          </div>

          {/* Country Information */}
          <div className="mt-2 flex gap-2 justify-center">
            <span className="text-xs bg-emerald-900/40 px-2 py-1 rounded-full text-white">150+</span>
            <span className="text-xs bg-emerald-900/40 px-2 py-1 rounded-full text-white">Countries</span>
          </div>
        </div>

        {/* "Try Now" text with arrow icon */}
        <Link to="/VideoPage">
        <div className="flex justify-center items-center bg-black text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-gray-900 transition duration-350">
            <span className="font-semibold mr-2">Try Now</span>
            <ArrowRightCircle size={24} className="text-white ml-40" />
          </div>
        </Link>
      </div>
    </motion.div>

        {/* Vertical Stats Card */}
        <motion.div
          className="md:row-span-2 rounded-sm bg-black p-8 flex flex-col justify-between shadow-purple-500/50 shadow-xl"
          whileHover={{ x: 5 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.3 }}
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
          <Link to="/RepoPage">
          <button className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-lg w-full">Try Now</button>
          </Link>
          
        </motion.div>

        {/* Small Cards Row */}
        <motion.div
          className="md:col-span-2 rounded-sm bg-black p-6 flex items-center justify-between h-[200px] shadow-purple-500/50 shadow-xl"
          whileHover={{ scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center gap-3">
            <Clock size={32} className="text-purple-400" />
            <div>
              <h4 className="font-medium">24/7 Monitoring</h4>
              <p className="text-sm text-gray-400">Always active</p>
              <button className="mt-2 px-4 py-2 bg-purple-500 text-white rounded-lg">Try Now</button>
            </div>
          </div>
        </motion.div>
        <h1 className='font-semibold md:text-[10vh] text-0 md:w-[100vh] w-full border 2 border-purple-900 p-5 bg-purple-900 shadow-purple-500/50 shadow-xl'>One Step Solution</h1>
        


      </div>
    </section>
  );
};

export default Features;
