import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import { FaTelegram } from "react-icons/fa";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Please enter a valid email"),
  message: z.string().min(1, "Message is required").min(100, "Message must be at least 100 characters"),
});

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        email: fieldErrors.email?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }
    setErrors({});
    console.log("Form submitted:", formData);
  };

  // Circular text for Telegram button
  const circularText = "BOOK A SESSION • CHAT WITH US • ";

  return (
    <section
      id="contact"
      className="relative pt-12 sm:pt-20 pb-0 px-4 sm:px-6 overflow-hidden"
    >

      <div ref={sectionRef} className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#FF007F] text-xs sm:text-sm font-medium uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
            <span className="text-white">Let's </span>
            <span className="text-gradient italic pr-2 sm:pr-3">build</span>
            <span className="text-white"> something</span>
            <br className="hidden sm:block" />
            <span className="text-white"> amazing</span>
          </h2>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
              Send us a message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Name Field */}
              <div className="relative group">
                <FiUser className="absolute left-0 top-3 sm:top-4 text-white/30 group-hover:text-[#FF007F]/60 group-focus-within:text-[#FF007F] group-focus-within:group-hover:text-[#FF007F] transition-colors w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={`w-full pl-7 sm:pl-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent border-b transition-colors ${errors.name ? "border-red-500" : "border-white/10 hover:border-[#FF007F]/60 focus:border-[#FF007F] focus:hover:border-[#FF007F]"}`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div className="relative group">
                <FiMail className="absolute left-0 top-3 sm:top-4 text-white/30 group-hover:text-[#FF007F]/60 group-focus-within:text-[#FF007F] group-focus-within:group-hover:text-[#FF007F] transition-colors w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full pl-7 sm:pl-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent border-b transition-colors ${errors.email ? "border-red-500" : "border-white/10 hover:border-[#FF007F]/60 focus:border-[#FF007F] focus:hover:border-[#FF007F]"}`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div className="relative group">
                <FiMessageSquare className="absolute left-0 top-3 sm:top-4 text-white/30 group-hover:text-[#FF007F]/60 group-focus-within:text-[#FF007F] group-focus-within:group-hover:text-[#FF007F] transition-colors w-4 h-4 sm:w-5 sm:h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project... (minimum 100 characters)"
                  rows={4}
                  className={`w-full pl-7 sm:pl-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent border-b transition-colors resize-none ${errors.message ? "border-red-500" : "border-white/10 hover:border-[#FF007F]/60 focus:border-[#FF007F] focus:hover:border-[#FF007F]"}`}
                />
                <div className="flex justify-between items-center mt-1">
                  {errors.message ? <p className="text-red-500 text-sm">{errors.message}</p> : <span />}
                  <span className={`text-sm ${formData.message.length >= 100 ? "text-green-500" : "text-white/50"}`}>
                    {formData.message.length}/100
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-[#FF007F] to-[#E1006A] text-white font-semibold rounded-full overflow-hidden cursor-pointer w-full sm:w-auto text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <span>Send Message</span>
                <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Telegram Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col items-center lg:items-start"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
              Or book a session
            </h3>
            <p className="text-white/50 text-sm sm:text-base mb-8 sm:mb-10 max-w-md text-center lg:text-left">
              Prefer a quick chat? Connect with us directly on Telegram for
              instant consultation booking.
            </p>

            {/* Telegram Card with Rotating Text */}
            <motion.a
              href="https://t.me/steadyws_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Rotating Text Circle */}
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56">
                <svg
                  className="w-full h-full animate-spin-slow"
                  viewBox="0 0 200 200"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                    />
                  </defs>
                  <text className="text-[10px] uppercase tracking-[0.23em] sm:tracking-[0.22em] fill-white/60">
                    <textPath href="#circlePath" startOffset="0%">
                      {circularText}
                      {circularText}
                    </textPath>
                  </text>
                </svg>

                {/* Center Icon */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-18 h-18 sm:w-20 sm:h-20 md:w-28 md:h-28 rounded-full bg-linear-to-br from-[#FF007F] to-[#E1006A] flex items-center justify-center glow-pink group-hover:glow-pink-intense transition-shadow duration-300">
                    <FaTelegram className="w-9 h-9 md:w-16 md:h-16 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Label */}
              <div className="mt-4 sm:mt-6 text-center">
                <span className="text-white font-semibold text-sm sm:text-base">
                  @steadyws_bot
                </span>
                <p className="text-white/40 text-xs sm:text-sm mt-1">
                  Chat on Telegram
                </p>
              </div>
            </motion.a>

            {/* Additional Contact Info */}
            <motion.div
              className="mt-10 sm:mt-16 space-y-4 w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <FiMail className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF007F]" />
                </div>
                <span className="text-white/70 text-sm sm:text-base break-all">
                  hello@steadywebsolutions.dev
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
