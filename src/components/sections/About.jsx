function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
              <span className="text-8xl">👨‍💻</span>
            </div>
          </div>

          {/* Right Side */}
          <div>

            <h3 className="text-3xl font-semibold mb-4">
              I'm Chirag Arora
            </h3>

            <p className="text-gray-300 leading-8">
              I'm <span className="text-blue-400 font-semibold">Chirag Arora</span>, a
              B.Tech Computer Science student at NIT Raipur passionate about building
              scalable web applications and solving real-world problems.

              <br /><br />

              I specialize in React, Node.js, Express.js, and PostgreSQL while
              continuously improving my Data Structures & Algorithms skills. I enjoy
              transforming ideas into fast, responsive, and user-friendly applications
              that create real value.

              <br /><br />

              I'm currently looking for internship opportunities where I can contribute,
              learn from experienced developers, and grow as a software engineer.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-blue-400 text-xl font-bold">
                  Education
                </h4>

                <p className="text-gray-400 mt-2">
                  B.Tech Computer Science
                  <br />
                  NIT Raipur
                </p>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <h4 className="text-blue-400 text-xl font-bold">
                  Location
                </h4>

                <p className="text-gray-400 mt-2">
                  Korba, Chhattisgarh
                  <br />
                  India
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;