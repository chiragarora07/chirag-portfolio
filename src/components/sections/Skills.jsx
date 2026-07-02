import skills from "../../data/skills";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section id="skills" className="bg-slate-950 py-24 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 uppercase tracking-widest font-semibold">
            Skills
          </p>

          <h2 className="text-5xl font-extrabold text-white mt-3">
            Technologies I Use
          </h2>

          <p className="text-gray-400 mt-5">
            These are the technologies I use to build modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                }}
                className="bg-slate-800 rounded-2xl p-8 text-center border border-slate-700 hover:border-blue-500 transition"
              >
                <Icon
                  className={`text-6xl mx-auto ${skill.color}`}
                />

                <h3 className="mt-6 text-white font-semibold">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;