import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.span
          whileHover={{ scale: 1.1 }}
          className="text-2xl font-bold text-purple-400 cursor-pointer"
        >
          Amulya.dev
        </motion.span>

        {/* Nav Links */}
        <ul className="flex gap-8 text-gray-300">
          {["About", "Projects", "Skills", "Contact"].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1, color: "#a855f7" }}
              className="cursor-pointer hover:text-purple-400 transition-colors duration-200"
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;