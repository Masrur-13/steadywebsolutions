import { motion } from "motion/react";
import { FiArrowRight } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 "
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main Pink Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] lg:w-[800px] lg:h-[800px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(255,0,127,0.25) 0%, rgba(255,0,127,0.05) 40%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Secondary Glow - Offset */}
        <motion.div
          className="absolute top-1/3 right-1/4 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(225,0,106,0.2) 0%, transparent 60%)",
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Geometric Elements - Hidden on small screens */}
        <motion.div
          className="hidden sm:block absolute top-20 right-[15%] w-24 h-24 lg:w-32 lg:h-32 border border-white/10 rounded-2xl rotate-12"
          animate={{ rotate: [12, 24, 12], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden sm:block absolute bottom-32 left-[10%] w-16 h-16 lg:w-24 lg:h-24 border border-[#FF007F]/20 rounded-full"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 pb-12 pt-6 sm:pt-16 md:portrait:pt-32 2xl:pt-24">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 glass rounded-full mb-3 sm:mb-4 md:portrait:mb-6"
        >
          <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#FF007F] rounded-full animate-pulse shadow-[0_0_15px_#FF007F]" />
          <span className="text-xs sm:text-sm text-white/70">
            Web Development Agency
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl font-bold tracking-tight leading-[0.95] mb-3 sm:mb-4 md:portrait:mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="block text-white">Steady</span>
          <span className="block text-gradient">Web Solutions</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base sm:text-lg md:text-xl 2xl:text-2xl text-white/60 max-w-xs sm:max-w-xl mx-auto mb-5 sm:mb-6 md:portrait:mb-10 font-light px-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Digital craftsmanship for modern businesses.
          <br className="hidden sm:block" />
          <span className="text-white/40">
            We build experiences that convert.
          </span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-[#FF007F] to-[#E1006A] text-white font-semibold rounded-full overflow-hidden cursor-pointer text-base sm:text-lg w-full sm:w-auto justify-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <span className="relative z-10">Start Project</span>
            <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </motion.a>

          <motion.a
            href="#services"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-white/20 text-white font-medium rounded-full hover:border-white/40 transition-colors cursor-pointer text-base sm:text-lg w-full sm:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            View Services
          </motion.a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          className="mt-6 sm:mt-8 md:portrait:mt-16 2xl:mt-16 flex items-center justify-center gap-8 sm:gap-16 md:gap-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "98%", label: "Satisfaction" },
            { value: "5yrs", label: "Experience" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <div className="text-3xl sm:text-4xl 2xl:text-5xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/40 uppercase tracking-wider mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div className="w-1 h-2 bg-[#FF007F] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
