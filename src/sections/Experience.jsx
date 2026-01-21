import TimelineItem from "../components/TimelineItem";
import { experience } from "../data/experience";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useRef } from "react";
import {
  FaBriefcase,
  FaGraduationCap,
  FaBuilding,
  FaBook,
  FaStar,
} from "react-icons/fa";

/* 🔹 Floating background icons */
const floatingIcons = [
  { Icon: FaBriefcase, x: "10%", y: "25%", size: 40, speed: 1 },
  { Icon: FaGraduationCap, x: "85%", y: "20%", size: 36, speed: 0.7 },
  { Icon: FaBuilding, x: "70%", y: "75%", size: 38, speed: 1.1 },
  { Icon: FaBook, x: "20%", y: "80%", size: 34, speed: 0.9 },
  { Icon: FaStar, x: "50%", y: "45%", size: 28, speed: 0.6 },
];

const Experience = () => {
  const { primary } = useTheme();
  const sectionRef = useRef(null);

  const work = experience.filter((e) => e.type === "experience");
  const education = experience.filter((e) => e.type === "education");

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
      id="experience"
      className="relative py-24 bg-gray-50 overflow-hidden text-gray-900 dark:bg-black dark:text-gray-100"
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
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Experience & Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* WORK EXPERIENCE */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Experience</h3>
            {work.map((item, idx) => (
              <TimelineItem key={idx} item={item} />
            ))}
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Education</h3>
            {education.map((item, idx) => (
              <TimelineItem key={idx} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
