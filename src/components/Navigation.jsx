import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "../constants";

const MagneticLink = ({ children, href, onClick }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.3;
    const y = (clientY - (top + height / 2)) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="relative px-6 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 cursor-pointer"
    >
      {children}
      <motion.span
        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-linear-to-r from-[#FF007F] to-[#E1006A] rounded-full"
        initial={{ width: 0, opacity: 0 }}
        whileHover={{ width: "60%", opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.a>
  );
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[calc(100%-2rem)] md:w-auto max-w-[95vw] ${isScrolled ? "top-3" : "top-4 md:top-6"
          }`}
      >
        <motion.div
          className="glass rounded-full px-2 py-2 md:px-3 md:py-2 flex items-center justify-between md:justify-center md:gap-4"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
        >
          {/* Logo */}
          <motion.div
            className="px-3 py-1.5 md:px-4 md:py-2 bg-linear-to-r from-[#FF007F] to-[#E1006A] rounded-full md:mr-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="text-white font-bold text-xs md:text-sm tracking-tight">
              SWS
            </span>
          </motion.div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <MagneticLink key={link.name} href={link.href}>
                {link.name}
              </MagneticLink>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <motion.a
            href="#contact"
            className="hidden md:block ml-4 px-6 py-2 bg-white text-black font-semibold text-sm rounded-full cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#FF007F",
              color: "#ffffff",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            Let's Talk
          </motion.a>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="md:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </motion.button>
        </motion.div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center justify-center h-full gap-6"
            >
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  className="text-2xl font-medium text-white hover:text-[#FF007F] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={closeMobileMenu}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 px-8 py-3 bg-linear-to-r from-[#FF007F] to-[#E1006A] text-white font-semibold rounded-full"
              >
                Let's Talk
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
