import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profile from "../../assets/images/profile.png";

function Hero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden pt-24 md:pt-28 pb-16">

      {/* Background Blur */}
      <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-20 -left-20"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl bottom-0 right-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Left Side */}
        <div className="order-2 md:order-1 text-center md:text-left">

          <p className="text-blue-400 text-lg font-medium">
            👋 Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mt-3 leading-tight">
            Chirag Arora
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              2000,
              "React Developer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="h2"
            speed={40}
            repeat={Infinity}
            className="text-2xl md:text-4xl font-bold text-blue-400 mt-5"
          />

          <p className="text-gray-400 mt-6 leading-8 max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
  B.Tech CSE student at <span className="text-white font-semibold">NIT Raipur</span>
  passionate about building scalable full-stack web applications using
  <span className="text-blue-400"> React</span>,
  <span className="text-blue-400"> Node.js</span>,
  <span className="text-blue-400"> Express</span>, and
  <span className="text-blue-400"> PostgreSQL</span>.
</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center md:justify-start">

            <a
              href="#projects"
              className="bg-blue-600 px-7 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-blue-500 text-blue-400 px-7 py-3 rounded-xl hover:bg-blue-500 hover:text-white transition"
            >
              Download Resume
            </a>

          </div>

          <div className="flex gap-8 mt-10 justify-center md:justify-start text-3xl text-gray-300">

            <a href="https://github.com/chiragarora07"
               target="_blank"
               rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/chirag-arora07"
               target="_blank"
               rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:chiragarora0710@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        {/* Right Side */}
<div className="order-1 md:order-2 flex justify-center mb-10 md:mb-0">

  <div className="relative">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

    {/* Profile */}
    <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">

      <img
        src={profile}
        alt="Chirag Arora"
        className="w-full h-full object-cover rounded-full border-4 border-slate-900"
      />

    </div>

  </div>

</div>

      </div>

    </section>
  );
}

export default Hero;
