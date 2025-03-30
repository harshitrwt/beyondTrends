import { motion } from "framer-motion";
import { useState } from "react";

export function CTAButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section 
      className="relative w-full max-w-lg mx-auto bg-gray-900 text-white rounded-sm md:mt-32 mt-6 mb-6 md:mb-32 shadow-xl shadow-purple-500 flex items-center justify-between p-4 overflow-hidden"
    >
      

      {/* Image Section */}
      <motion.img 
        src="https://placedog.net/100/100" 
        alt="Try Now" 
        className="w-20 h-20 rounded-lg shadow-lg"
        whileHover={{ rotate: 5, scale: 1.1 }}
      />

      {/* CTA Content */}
      <div className="flex flex-col flex-grow px-4">
        <h2 className="text-lg font-semibold">Try it now!!</h2>
        <p className="text-sm text-gray-400">Click the button for a surprise.</p>
      </div>

      {/* CTA Button */}
      <motion.button 
        onClick={() => setIsClicked(true)}
        whileTap={{ scale: 0.9 }}
        className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all"
      >
        Click Me!
      </motion.button>
    </section>
  );
}
