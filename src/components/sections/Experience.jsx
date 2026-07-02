import { motion } from "framer-motion";

const timeline = [
  {
    year: "2025",
    title: "Started B.Tech CSE",
    desc: "Started my Computer Science journey at NIT Raipur.",
  },
  {
    year: "2025",
    title: "Learned Full Stack Development",
    desc: "Built projects using React, Node.js, Express and PostgreSQL.",
  },
  {
    year: "2026",
    title: "Built HireFlow",
    desc: "Developed an AI-powered recruitment platform.",
  },
];

function Experience() {
  return (
    <section id="experience" className="bg-slate-950 py-24 px-6">
      <div className="max-w-5xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-white mb-16"
        >
          Experience
        </motion.h2>

        <div className="relative border-l-2 border-blue-500 ml-4">

          {timeline.map((item) => (
            <div key={item.title} className="mb-12 ml-8">

              <div className="absolute -left-[10px] w-5 h-5 bg-blue-500 rounded-full"></div>

              <h3 className="text-xl font-bold text-white">
                {item.title}
              </h3>

              <p className="text-blue-400 mb-2">
                {item.year}
              </p>

              <p className="text-gray-400">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;