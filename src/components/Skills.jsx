import { motion } from "framer-motion";
import { skills } from "../data/data";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen px-6 py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        {/* Skills List */}
        <div className="flex flex-col gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Skill Name and Percentage */}
              <div className="flex justify-between mb-2">
                <span className="text-white font-semibold text-lg">
                  {skill.name}
                </span>
                <span className="text-purple-400 font-semibold">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-800 rounded-full h-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-purple-600 to-purple-400 h-3 rounded-full shadow-lg shadow-purple-500/30"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Icons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            Technologies I work with
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS", "Git", "GitHub"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 text-purple-400 px-6 py-3 rounded-full border border-purple-500/30 hover:border-purple-500 hover:bg-purple-600/20 transition-all duration-300 cursor-default"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;