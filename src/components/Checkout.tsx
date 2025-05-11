import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect } from "react";

export function CTAButton() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const handleScroll = () => {
    const featuresSection = document.getElementById("features");
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 80 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 1, ease: "easeOut" },
        },
      }}
      className="relative w-full max-w-7xl mx-auto bg-gradient-to-br from-purple-700 to-purple-900 text-white rounded-2xl mt-16 md:mt-32 mb-6 md:mb-32 shadow-xl shadow-purple-500 flex flex-col md:flex-row items-center justify-between p-6 md:p-12 overflow-hidden"
      style={{ minHeight: "340px" }}
    >
      {/* Left Image - Fine Art or Project Illustration */}
      <motion.img
        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=180&q=80"
        alt="Abstract Code Art"
        className="w-24 h-24 md:w-36 md:h-36 rounded-xl shadow-lg object-cover mb-4 md:mb-0"
        whileHover={{ rotate: 5, scale: 1.06 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      />

      {/* CTA Content */}
      <div className="flex flex-col flex-grow px-4 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white drop-shadow-lg">
          Experience the Magic of Our Platform!
        </h2>
        <p className="text-base md:text-lg text-violet-100 mb-3 hidden md:block">
          Unlock exclusive features and get instant access to premium content.<br />
          Our AI-powered tools are designed to make your workflow smoother and more enjoyable.
        </p>
        <p className="text-sm text-purple-200 mb-3">
          Join thousands of happy users and discover what you've been missing!
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <motion.button
            onClick={handleScroll}
            whileTap={{ scale: 0.93 }}
            whileHover={{ scale: 1.08, backgroundColor: "#a78bfa" }}
            className="bg-black text-white px-6 py-3 font-semibold text-base shadow-lg transition-all"
          >
            Explore
          </motion.button>
        </div>
      </div>

      {/* Decorative Right Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1555949963-aa79dcee9816?auto=format&fit=crop&w=180&q=80"
        alt="Creative Concept"
        className="absolute right-4 bottom-4 w-16 h-16 md:w-24 md:h-24 rounded-lg shadow-lg object-cover opacity-80"
        initial={{ scale: 0, rotate: 0 }}
        animate={{ scale: inView ? 1 : 0, rotate: inView ? 10 : 0 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 180, damping: 18 }}
      />
    </motion.section>
  );
}
