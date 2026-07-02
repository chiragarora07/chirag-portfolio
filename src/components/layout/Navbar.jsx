import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#"
          className="text-2xl md:text-3xl font-extrabold text-blue-500"
        >
          Chirag.
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">

          <li><a href="#about" className="hover:text-blue-500 transition">About</a></li>
          <li><a href="#skills" className="hover:text-blue-500 transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-500 transition">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>

          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 transition px-5 py-2 rounded-lg text-white"
          >
            Resume
          </a>

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-slate-900 border-t border-slate-800 flex flex-col">

          <a
            href="#about"
            onClick={closeMenu}
            className="px-6 py-4 hover:bg-slate-800"
          >
            About
          </a>

          <a
            href="#skills"
            onClick={closeMenu}
            className="px-6 py-4 hover:bg-slate-800"
          >
            Skills
          </a>

          <a
            href="#projects"
            onClick={closeMenu}
            className="px-6 py-4 hover:bg-slate-800"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={closeMenu}
            className="px-6 py-4 hover:bg-slate-800"
          >
            Contact
          </a>

          <a
            href="/resume.pdf"
            download
            onClick={closeMenu}
            className="m-4 text-center bg-blue-600 rounded-lg py-3 hover:bg-blue-700 transition"
          >
            Download Resume
          </a>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;
