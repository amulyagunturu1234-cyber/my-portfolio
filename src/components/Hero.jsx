import { motion } from "framer-motion";
import { personalInfo } from "../data/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gray-950">

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-purple-400 text-lg mb-2 tracking-widest uppercase"
      >
        Hello, I am
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-white mb-4"
      >
        {personalInfo.name}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="text-2xl md:text-3xl text-purple-400 font-semibold mb-6"
      >
        {personalInfo.title}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-gray-400 max-w-xl text-lg mb-8"
      >
        {personalInfo.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="flex gap-4 mb-10"
      >
        <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
          View Projects
        </a>
        <a href="#contact" className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
          Contact Me
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="flex gap-6 text-3xl text-gray-400"
      >
        <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors duration-300 hover:scale-110">
          <FaGithub />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-purple-400 transition-colors duration-300 hover:scale-110">
          <FaLinkedin />
        </a>
      </motion.div>

    </section>
  );
};

export default Hero;
