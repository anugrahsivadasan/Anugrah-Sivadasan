import ServiceCard from "../components/ServiceCard";
import { services } from "../data/services";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useRef } from "react";
import {
  FaCode,
  FaPaintBrush,
  FaMobileAlt,
  FaRocket,
  FaCogs,
} from "react-icons/fa";

/* 🔹 Floating background icons */
const floatingIcons = [
  { Icon: FaCode, x: "12%", y: "25%", size: 38, speed: 1 },
  { Icon: FaPaintBrush, x: "80%", y: "20%", size: 34, speed: 0.8 },
  { Icon: FaMobileAlt, x: "20%", y: "75%", size: 36, speed: 1.1 },
  { Icon: FaRocket, x: "75%", y: "70%", size: 40, speed: 0.9 },
  { Icon: FaCogs, x: "50%", y: "45%", size: 30, speed: 0.6 },
];

const Services = () => {
  const { primary } = useTheme();
  const sectionRef = useRef(null);

  /* 🎯 SECTION-BASED SCROLL */
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
      id="services"
      className="relative py-24 bg-gray-50 overflow-hidden text-gray-900 dark:bg-black dark:text-gray-100"
    >
      {/* 🌊 PARALLAX ICONS */}
      {floatingIcons.map((item, index) => {
        const y = useTransform(
          smoothProgress,
          [0, 1],
          [0, -180 * item.speed]
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
          transition={{ duration: 0.9 }}
        >
          My Services
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
