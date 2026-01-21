import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useRef } from "react";
import {
  FaReact,
  FaCode,
  FaLayerGroup,
  FaRocket,
  FaCogs,
} from "react-icons/fa";

/* 🔹 Floating background icons */
const floatingIcons = [
  { Icon: FaReact, x: "10%", y: "20%", size: 42, speed: 1 },
  { Icon: FaCode, x: "85%", y: "15%", size: 34, speed: 0.7 },
  { Icon: FaLayerGroup, x: "70%", y: "95%", size: 38, speed: 1.1 },
  { Icon: FaRocket, x: "15%", y: "80%", size: 36, speed: 0.9 },
  { Icon: FaCogs, x: "50%", y: "45%", size: 30, speed: 0.6 },
];

const Projects = () => {
  const { primary } = useTheme();
  const sectionRef = useRef(null);

  /* 🔥 SECTION-BASED SCROLL */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.8,
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 bg-white overflow-hidden  text-gray-900 dark:bg-black dark:text-gray-100"
    >
      {/* 🌊 PARALLAX ICONS */}
      {floatingIcons.map((item, index) => {
        const y = useTransform(
          smoothProgress,
          [0, 1],
          [0, -200 * item.speed]
        );

        return (
          <motion.div
            key={index}
            className="absolute pointer-events-none opacity-20"
            style={{
              left: item.x,
              top: item.y,
              y,
              color: primary,
            }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        );
      })}

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          My Projects
        </motion.h2>
       <p className="text-gray-500 text-center mb-6">Tap to view the live preview</p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
