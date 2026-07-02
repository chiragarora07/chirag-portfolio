import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-900 py-24 px-6"
    >
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-white mb-6">
          Let's Connect
        </h2>

        <p className="text-gray-400 mb-12">
          I'm always open to internships, collaborations, and exciting projects.
        </p>

        <div className="flex justify-center gap-8">

          <a
            href="mailto:your@email.com"
            className="bg-slate-800 p-5 rounded-xl hover:bg-blue-600 transition"
          >
            <FaEnvelope size={28}/>
          </a>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 p-5 rounded-xl hover:bg-blue-600 transition"
          >
            <FaGithub size={28}/>
          </a>

          <a
            href="https://linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="bg-slate-800 p-5 rounded-xl hover:bg-blue-600 transition"
          >
            <FaLinkedin size={28}/>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;