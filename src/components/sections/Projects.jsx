import { motion } from "framer-motion";
import projects from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-20 md:py-24 px-5 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-16"
        >
          <p className="text-blue-400 uppercase tracking-[0.2em] font-semibold text-sm">
            Portfolio
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-sm sm:text-base leading-7">
            Here are some of the projects I've built using React,
            Node.js, Express, and PostgreSQL.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-xl hover:border-blue-500 transition-all duration-300"
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-52 object-cover"
              />

              {/* Content */}
              <div className="p-5 sm:p-6">

                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm sm:text-base mt-3 leading-7">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/20 text-blue
