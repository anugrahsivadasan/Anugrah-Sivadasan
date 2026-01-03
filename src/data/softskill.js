import {
  FaUsers,
  FaLightbulb,
  FaClock,
  FaComments,
  FaBrain,
  FaTasks,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiFramer, SiGreensock } from "react-icons/si";

export const softSkill = [
  // Technical Skills
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Framer Motion", icon: SiFramer },
  { name: "Bootstrap", icon: FaBootstrap },
  { name: "GSAP", icon: SiGreensock },

  // Soft Skills
  { name: "Problem Solving", icon: FaLightbulb },
  { name: "Time Management", icon: FaClock },
  { name: "Communication", icon: FaComments },
  { name: "Critical Thinking", icon: FaBrain },
  { name: "Task Handling", icon: FaTasks },
  { name: "Team Collaboration", icon: FaUsers },
];
