import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

        <h1 className="text-2xl font-bold text-blue-500">
          Chirag.
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-300">

          <li>
            <a href="#about" className="hover:text-blue-500 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-blue-500 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-blue-500 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-blue-500 transition">
              Contact
            </a>
          </li>

          <li>
            <a
              href="/resume.pdf"
              download
              className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white"
            >
              Resume
            </a>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700">

          <a
            href="#about"
            className="block px-6 py-4 hover:bg-slate-800"
          >
            About
          </a>

          <a
            href="#skills"
            className="block px-6 py-4 hover:bg-slate-800"
          >
            Skills
          </a>

          <a
            href="#projects"
            className="block px-6 py-4 hover:bg-slate-800"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="block px-6 py-4 hover:bg-slate-800"
          >
            Contact
          </a>

        </div>
      )}
    </nav>
  );
}

export default Navbar;