import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { wordpressFeatures, customFeatures } from "../constants";

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section
      id="services"
      className="relative py-12 sm:py-20 px-4 sm:px-6 overflow-hidden"
    >
      {/* Background Lighting Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none transition-all duration-700"
        animate={{
          background:
            activeService === "custom"
              ? "radial-gradient(ellipse 80% 50% at 70% 50%, rgba(255,0,127,0.15) 0%, transparent 60%)"
              : activeService === "wordpress"
                ? "radial-gradient(ellipse 80% 50% at 30% 50%, rgba(59,130,246,0.1) 0%, transparent 60%)"
                : "none",
        }}
      />

      <div ref={sectionRef} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">
            <span className="text-white">Choose your </span>
            <span className="text-gradient">path</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-white/50 text-sm sm:text-lg max-w-2xl mx-auto px-2">
            Two distinct approaches to web development. Both deliver exceptional
            results.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* WordPress Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setActiveService("wordpress")}
            onMouseLeave={() => setActiveService(null)}
            className="group relative"
          >
            <motion.div
              className="relative h-full p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#0a0a0a] border border-white/5 overflow-hidden cursor-pointer"
              whileHover={{ y: -8, borderColor: "rgba(255,255,255,0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-blue-500/5 to-transparent" />

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/5 border border-white/10 mb-6 sm:mb-8">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full" />
                <span className="text-xs sm:text-sm text-white/70">
                  Quick Launch
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                WordPress
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-md">
                The world's most popular CMS. Perfect for businesses that need a
                professional website fast, with the flexibility to manage
                content independently.
              </p>

              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {wordpressFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 sm:gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                    </div>
                    <span className="text-sm sm:text-base text-white/70">
                      {feature.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Price Indicator */}
              <div className="flex items-baseline gap-2">
                <span className="text-xs sm:text-sm text-white/40">
                  Starting from
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-white">
                  $2,500
                </span>
              </div>

              {/* Corner Visual */}
              <div className="absolute -bottom-20 -right-20 w-48 sm:w-60 h-48 sm:h-60 bg-linear-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl" />
            </motion.div>
          </motion.div>

          {/* Custom Engineering Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={() => setActiveService("custom")}
            onMouseLeave={() => setActiveService(null)}
            className="group relative"
          >
            <motion.div
              className="relative h-full p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#0a0a0a] border border-[#FF007F]/20 overflow-hidden cursor-pointer"
              whileHover={{ y: -8, borderColor: "rgba(255,0,127,0.4)" }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-br from-[#FF007F]/10 to-transparent" />

              {/* Popular Badge */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                <motion.span
                  className="px-2 sm:px-3 py-1 text-[10px] sm:text-xs font-medium bg-linear-to-r from-[#FF007F] to-[#E1006A] text-white rounded-full"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  RECOMMENDED
                </motion.span>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#FF007F]/10 border border-[#FF007F]/20 mb-6 sm:mb-8">
                <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#FF007F] rounded-full animate-pulse" />
                <span className="text-xs sm:text-sm text-[#FF007F]">
                  High Performance
                </span>
              </div>

              {/* Title */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                Custom <span className="text-gradient">Engineering</span>
              </h3>

              {/* Description */}
              <p className="text-white/50 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-md">
                Hand-crafted solutions built with modern technologies. For
                businesses that demand exceptional performance and unlimited
                scalability.
              </p>

              {/* Features */}
              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {customFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center gap-3 sm:gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-[#FF007F]/10 flex items-center justify-center shrink-0">
                      <feature.icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF007F]" />
                    </div>
                    <span className="text-sm sm:text-base text-white/70">
                      {feature.text}
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Price Indicator */}
              <div className="flex items-baseline gap-2">
                <span className="text-xs sm:text-sm text-white/40">
                  Starting from
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-gradient">
                  $8,000
                </span>
              </div>

              {/* Corner Visual */}
              <div className="absolute -bottom-20 -right-20 w-48 sm:w-60 h-48 sm:h-60 bg-linear-to-tl from-[#FF007F]/15 to-transparent rounded-full blur-3xl group-hover:from-[#FF007F]/25 transition-colors duration-500" />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <p className="text-white/40 text-sm sm:text-base mb-3 sm:mb-4">
            Not sure which path is right for you?
          </p>
          <motion.a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#FF007F] font-medium hover:text-white transition-colors cursor-pointer text-sm sm:text-base"
            whileHover={{ x: 5 }}
          >
            Let's discuss your project →
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
