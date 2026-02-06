import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      className="mt-12 pt-6 sm:pt-8 pb-6 sm:pb-8 border-t border-white/25"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold text-gradient">
            SWS
          </span>
          <span className="text-white/30 text-xs sm:text-sm">
            © 2025 Steady Web Solutions
          </span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#"
            className="text-white/40 hover:text-white transition-colors text-xs sm:text-sm"
          >
            Privacy
          </a>
          <a
            href="#"
            className="text-white/40 hover:text-white transition-colors text-xs sm:text-sm"
          >
            Terms
          </a>
          <a
            href="#"
            className="text-white/40 hover:text-[#FF007F] transition-colors text-xs sm:text-sm"
          >
            Telegram
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
