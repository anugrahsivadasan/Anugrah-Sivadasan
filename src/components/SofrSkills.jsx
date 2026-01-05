import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { softSkill } from "../data/softskill";
import {
  FaUsers,
  FaComments,
  FaLightbulb,
  FaClock,
} from "react-icons/fa";

/* FLOATING ICONS CONFIG */
const floatingIcons = [
  { Icon: FaUsers, left: "10%", top: "30%", size: 40, depth: 90 },
  { Icon: FaComments, left: "85%", top: "25%", size: 36, depth: 70 },
  { Icon: FaLightbulb, left: "70%", top: "80%", size: 42, depth: 110 },
  { Icon: FaClock, left: "15%", top: "75%", size: 34, depth: 60 },
];

const SoftSkills = () => {
  const { primary } = useTheme();
  const sectionRef = useRef(null);

  /* 🎯 SECTION-BASED SCROLL */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  /* 🧈 SMOOTH SPRING */
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 20,
    mass: 0.6,
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-white"
    >
      {/* 🌈 PARALLAX BACKGROUND */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 25%, ${primary}22, transparent 55%),
            radial-gradient(circle at 80% 75%, ${primary}18, transparent 55%)
          `,
        }}
      />

      {/* 🧩 FLOATING ICONS */}
      {floatingIcons.map((item, index) => {
        const y = useTransform(
          smoothProgress,
          [0, 1],
          [0, -item.depth]
        );

        return (
          <motion.div
            key={index}
            className="absolute pointer-events-none opacity-[0.14]"
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Other Skills
        </motion.h2>

        {/* SKILLS LIST */}
        <div className="flex flex-wrap justify-center gap-8">
          {softSkill.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={index}
                className="flex items-center gap-4 cursor-pointer"
                whileHover={{ scale: 1.06 }}
                transition={{ type: "spring", stiffness: 280 }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center shadow-sm"
                  style={{ backgroundColor: primary }}
                >
                  <Icon size={22} className="text-white" />
                </div>

                <span className="text-gray-700 font-medium">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SoftSkills;
