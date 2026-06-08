import { motion } from "framer-motion";
import { projects } from "../data/data";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gray-950">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            My <span className="text-purple-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/20 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-purple-600/20 text-purple-400 text-sm px-3 py-1 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                  <FaGithub /> Code
                </a>
                {project.live && (
                  <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
