import { motion } from 'framer-motion';
import { Palette, Zap, Globe,  Clock, Sparkles, Flame, ArrowRightCircle} from 'lucide-react';
import { Link } from 'react-router-dom';


// Floating icon animation variants
const floatVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
const Features = () => {
  return (
    <section className="container mx-auto px-4 py-16 max-w-[1200px] md:mb-20">
      <h2 className="md:text-[7vh] text-3xl font-semibold text-center md:mb-10 mb-16 shadow-2xl">
        Features
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* Main Feature Card */}
        
        <motion.div  
      className="md:col-span-2 row-span-2 relative rounded-sm bg-gradient-to-br from-[#0a0a23] to-[#000007] shadow-purple-500/50 p-8 overflow-hidden shadow-xl flex flex-col justify-center items-center text-white hidden md:flex"
      whileHover={{ scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle background image overlay */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://images.unsplash.com/photo-1600673645627-1c47394132ac')] bg-cover"></div>
      
      {/* Floating AI/ML icons */}
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
        alt="AI Brain"
        className="absolute left-8 top-8 w-12 opacity-80"
        variants={floatVariants}
        animate="animate"
      />
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
        alt="Neural Network"
        className="absolute right-8 top-16 w-10 opacity-80"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "1s" }}
      />
      <motion.img
        src="https://cdn-icons-png.flaticon.com/512/3771/3771632.png"
        alt="Data"
        className="absolute left-16 bottom-10 w-10 opacity-70"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />

      {/* Glassy, glowing card content */}
      <div className="relative z-10 bg-white/5 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-2xl border border-purple-600/30 w-full max-w-2xl flex flex-col items-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-[#c4fa57] via-purple-400 to-[#c4fa57] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Artificial Intelligence & Machine Learning
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          AI and ML are transforming the world-enabling machines to learn, adapt, and solve complex problems. From natural language processing to predictive analytics, these technologies power innovations in healthcare, finance, robotics, and beyond.
        </motion.p>
        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <span className="px-3 py-1 rounded-full bg-[#c4fa57]/20 text-[#c4fa57] font-semibold text-sm shadow">
            Deep Learning
          </span>
          <span className="px-3 py-1 rounded-full bg-purple-400/20 text-purple-200 font-semibold text-sm shadow">
            Neural Networks
          </span>
          <span className="px-3 py-1 rounded-full bg-[#c4fa57]/20 text-[#c4fa57] font-semibold text-sm shadow">
            Data Science
          </span>
        </motion.div>
      </div>
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
          src="https://i.ytimg.com/vi/QDX-1M5Nj7s/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAGyNpxBZFMOsdF71UAYdLW8lHjfQ"
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
        <Link to="/ArticlesPage">
  <div className="flex items-center justify-between bg-black text-white px-6 py-4 rounded-lg cursor-pointer hover:bg-gray-900 transition duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md">
    <span className="font-semibold text-lg">Try Now</span>
    <ArrowRightCircle size={28} className="text-white" />
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
          src="https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg"
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
        <Link to="/RepoPage">
  <div className="flex items-center justify-between bg-black text-white px-6 py-4 rounded-lg cursor-pointer hover:bg-gray-900 transition duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md">
    <span className="font-semibold text-lg">Try Now</span>
    <ArrowRightCircle size={28} className="text-white" />
  </div>
</Link>

      </div>
    </motion.div>

        {/* Vertical Stats Card */}
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
          src="https://www.bleepstatic.com/content/hl-images/2022/04/08/GitHub__headpic.jpg"
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
            <h3 className="text-xl font-semibold text-white">Video Insights</h3>
          </div>

        </div>

        {/* "Try Now" text with arrow icon */}
        <Link to="/VideoPage">
  <div className="flex items-center justify-between bg-black text-white px-6 py-4 rounded-lg cursor-pointer hover:bg-gray-900 transition duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md">
    <span className="font-semibold text-lg">Try Now</span>
    <ArrowRightCircle size={28} className="text-white" />
  </div>
</Link>

      </div>
    </motion.div>

        {/* Small Cards Row */}
        <motion.div
  className="md:col-span-2 rounded-sm bg-black p-6 flex items-center justify-between h-[200px] md:h-[400px] shadow-purple-500/50 shadow-xl"
  whileHover={{ scale: 0.96 }}
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.5, delay: 0.4 }}
>
  {/* Left side - image */}
  <div className="h-full w-1/2 flex items-center justify-center hidden md:block">
    <img
      src="https://media.nationthailand.com/uploads/images/md/2024/03/TJlBdqRq5ViN34kgqla6.webp" 
      alt="Monitoring"
      className="object-cover h-full w-full rounded"
    />
  </div>

  {/* Right side - text + button */}
  <div className="bg-purple-600 p-4 rounded-xl relative z-10 text-center md:h-full w-full md:w-[45%]">
        <div className="flex flex-col items-center mb-4">
          {/* Globe Icon and Text */}
          <div className="flex items-center gap-2 mb-4">
            <Globe size={30} className="text-black" />
            <h3 className="text-xl font-semibold text-white">24/7 News on the Go</h3>
          </div>

        </div>

        {/* "Try Now" text with arrow icon */}
        <Link to="/">
  <div className="flex items-center justify-between bg-black text-white px-6 py-4 rounded-lg cursor-pointer hover:bg-gray-900 transition duration-300 w-full max-w-xs sm:max-w-sm md:max-w-md">
    <span className="font-semibold text-lg">Try Now</span>
    <ArrowRightCircle size={28} className="text-white" />
  </div>
</Link>

      </div>
</motion.div>


     <div className="md:col-span-2 w-[167vh] rounded-b-xl bg-purple-700 p-5 shadow-xl hidden md:block relative overflow-hidden animate-fadeInBounce">
      {/* Hidden Easter Egg Image */}
      <img src="path_to_image.png" alt="Easter Egg" className="hidden-easter-egg" />
      
      <h1 className="cursive-text md:text-[9vh] text-[5vh] animate-fadeInBounce" data-text="One Step Solution">
        One Step Solution
      </h1>
    </div>
  
             


      </div>
    </section>
  );
};

export default Features;
