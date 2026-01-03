import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import SkillBar from "../components/SkillBar";
import { skills } from "../data/skills";
import { useTheme } from "../context/ThemeContext";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

const floatingIcons = [
  { Icon: FaReact, left: "8%", top: "25%", size: 50, depth: 120 },
  { Icon: FaHtml5, left: "85%", top: "20%", size: 36, depth: 80 },
  { Icon: FaCss3Alt, left: "70%", top: "75%", size: 40, depth: 100 },
  { Icon: FaJsSquare, left: "15%", top: "80%", size: 34, depth: 70 },
];

const Skills = () => {
  const { primary } = useTheme();
  const sectionRef = useRef(null);

  /* 🎯 SECTION-BASED SCROLL */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🧈 SMOOTH SCROLL */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 20,
    mass: 0.6,
  });

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-28 overflow-hidden bg-gray-50"
    >
      {/* 🌈 PRIMARY GRADIENT BACKGROUND */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 15% 20%, ${primary}33, transparent 55%),
            radial-gradient(circle at 85% 80%, ${primary}22, transparent 55%)
          `,
        }}
      />

      {/* 🧩 SCROLL-MOVING ICONS */}
      {floatingIcons.map((item, index) => {
        const y = useTransform(
          smoothProgress,
          [0, 1],
          [0, -item.depth]
        );

        return (
          <motion.div
            key={index}
            className="absolute pointer-events-none opacity-[0.15]"
            style={{
              left: item.left,
              top: item.top,
              y,
              color: primary,
            }}
          >
            <item.Icon size={item.size} />
          </motion.div>
        );
      })}

      {/* 📦 CONTENT */}
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          My Skills
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, idx) => (
            <SkillBar key={idx} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
