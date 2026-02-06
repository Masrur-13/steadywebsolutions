import { motion } from "motion/react";
import { useRef } from "react";
import { aboutItems } from "../constants";

const AboutCard = ({ item }) => {
  // Define styles: Base = Mobile Theme, md = Desktop Unified Dark Theme
  const styles = {
    white: {
      container:
        "bg-white border-transparent md:bg-[#0a0a0a] md:border-white/5",
      title: "text-black md:text-white",
      desc: "text-black/60 md:text-white/60",
      number: "text-black/5 md:text-white/5",
      accent: "bg-[#FF007F]", // Pink pill looks good on both
      // Mobile: Subtle shadow. Desktop: Removed (replaced by hover gradient)
      mobileGradientLabel: "from-black/5 to-transparent md:hidden",
    },
    gradient: {
      container:
        "bg-linear-to-br from-[#8B0046] to-[#5A002E] border-transparent md:bg-[#0a0a0a] md:bg-none md:border-white/5",
      title: "text-white",
      desc: "text-white/80 md:text-white/60",
      number: "text-white/20 md:text-white/5",
      accent: "bg-white md:bg-[#FF007F]", // White pill on pink, Pink on dark
      mobileGradientLabel: "from-black/10 to-transparent md:hidden",
    },
    dark: {
      container: "bg-[#0a0a0a] border-white/5",
      title: "text-white",
      desc: "text-white/60",
      number: "text-white/5",
      accent: "bg-[#FF007F]",
      mobileGradientLabel: "from-[#FF007F]/20 to-transparent md:hidden",
    },
  };

  const currentStyle = styles[item.theme];

  return (
    <motion.div
      className={`relative group p-8 sm:p-10 rounded-3xl overflow-hidden border ${currentStyle.container} ${item.className}`}
      whileHover="hover"
      initial="initial"
    >
      {/* Mobile Ambience (Theme Specific) - Hidden on Desktop */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${currentStyle.mobileGradientLabel}`}
      />

      {/* Desktop Hover Gradient (Unified) - Hidden on Mobile, Shows on Group Hover */}
      <motion.div className="hidden md:block absolute inset-0 bg-linear-to-br from-[#FF007F]/40 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Massive Number */}
      <motion.span
        className={`absolute -bottom-8 -right-4 text-[12rem] sm:text-[16rem] font-bold leading-none select-none pointer-events-none transition-colors duration-300 ${currentStyle.number} md:group-hover:text-white/20`}
        variants={{
          initial: { y: 0 },
          hover: { y: -10 },
        }}
        transition={{ duration: 0.5 }}
      >
        {item.id}
      </motion.span>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col justify-between"
        variants={{
          initial: { y: 0 },
          hover: { y: -5 },
        }}
        transition={{ duration: 0.4 }}
      >
        <div>
          <h3
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 select-none ${currentStyle.title}`}
          >
            {item.title}
          </h3>
          <p
            className={`text-lg sm:text-xl max-w-md font-light transition-colors duration-300 select-none ${currentStyle.desc}`}
          >
            {item.description}
          </p>
        </div>

        {/* Decorative Pill */}
        <div
          className={`mt-8 h-1.5 rounded-full transition-all duration-500 w-12 md:w-12 md:opacity-50 group-hover:w-24 group-hover:opacity-100 ${currentStyle.accent}`}
        />
      </motion.div>
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);

  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 sm:mb-24">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-[0.9]">
            Built for those
            <br />
            <span className="text-white/50">who dare to lead.</span>
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 sm:gap-6 auto-rows-[minmax(200px,auto)]"
        >
          {aboutItems.map((item) => (
            <AboutCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
