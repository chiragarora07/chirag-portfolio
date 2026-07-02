import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiExpress,
  SiPostgresql,
  SiCplusplus,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-sky-500" },
  { name: "Git", icon: FaGitAlt, color: "text-red-500" },
  { name: "GitHub", icon: FaGithub, color: "text-white" },
  { name: "C++", icon: SiCplusplus, color: "text-blue-400" },
];

export default skills;