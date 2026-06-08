import { motion } from "framer-motion";
import { personalInfo } from "../data/data";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-gray-950">
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
            Get In <span className="text-purple-400">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg">
            Feel free to reach out for collaborations or just a friendly hello!
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            {
              icon: <FaEnvelope className="text-3xl" />,
              label: "Email",
              value: personalInfo.email,
              href: `mailto:${personalInfo.email}`,
            },
            {
              icon: <FaGithub className="text-3xl" />,
              label: "GitHub",
              value: "amulyagunturu1234-cyber",
              href: personalInfo.github,
            },
            {
              icon: <FaLinkedin className="text-3xl" />,
              label: "LinkedIn",
              value: "Amulya Gunturu",
              href: personalInfo.linkedin,
            },
          ].map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-gray-900 border border-gray-800 hover:border-purple-500 rounded-2xl p-8 flex flex-col items-center gap-4 text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <span className="text-purple-400">{item.icon}</span>
              <span className="text-white font-semibold text-lg">{item.label}</span>
              <span className="text-gray-400 text-sm break-all">{item.value}</span>
            </motion.a>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            Designed & Built by{" "}
            <span className="text-purple-400 font-semibold">Amulya Gunturu</span>{" "}
            © 2024
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;