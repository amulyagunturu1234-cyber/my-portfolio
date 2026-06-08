import { motion } from "framer-motion";
import { personalInfo } from "../data/data";

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="w-64 h-64 rounded-full border-4 border-purple-500 overflow-hidden shadow-lg shadow-purple-500/30">
            <img
  src="/photo.jpeg"
  alt="Amulya Gunturu"
  className="w-full h-full object-cover object-top"
/>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            About <span className="text-purple-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mb-6"></div>

          <p className="text-gray-400 text-lg leading-relaxed mb-4">
            Hi! I am <span className="text-purple-400 font-semibold">Amulya Gunturu</span>,
            a passionate Frontend Developer who loves building clean and responsive web applications.
          </p>
          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            I enjoy turning ideas into reality using HTML, CSS, JavaScript and React.
            I am always learning new technologies and improving my skills every day.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              { label: "Name", value: personalInfo.name },
              { label: "Email", value: personalInfo.email },
              { label: "Role", value: personalInfo.title },
              { label: "Status", value: "Open to Work" },
            ].map((item) => (
              <div key={item.label}>
                <span className="text-purple-400 font-semibold">{item.label}: </span>
                <span className="text-gray-300">{item.value}</span>
              </div>
            ))}
          </div>

          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-block">
            View GitHub
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
