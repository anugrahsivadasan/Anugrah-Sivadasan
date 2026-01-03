// src/sections/About.jsx
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { aboutMe } from "../data/about";
import profileImg from "../assets/Anugrah.jpeg";
import {
  FaReact,
  FaCode,
  FaPalette,
  FaLaptopCode,
  FaBolt,
} from "react-icons/fa";

const floatingIcons = [
  { Icon: FaReact, x: "10%", y: "20%", size: 42, speed: 0.6 },
  { Icon: FaCode, x: "80%", y: "15%", size: 32, speed: 0.4 },
  { Icon: FaPalette, x: "70%", y: "70%", size: 36, speed: 0.7 },
  { Icon: FaLaptopCode, x: "20%", y: "75%", size: 40, speed: 0.5 },
  { Icon: FaBolt, x: "50%", y: "40%", size: 28, speed: 0.3 },
];

const About = () => {
  const { primary } = useTheme();
  const { scrollY } = useScroll();

  // Smooth scroll animation using spring
  const springConfig = { damping: 20, stiffness: 80 };

  return (
    <section id="about" className="relative py-32 overflow-hidden bg-gray-50">
      
      {/* FLOATING ICONS BACKGROUND */}
      {floatingIcons.map((item, index) => {
        // Map scrollY to vertical movement
        const yRange = useTransform(scrollY, [0, 1000], [0, 150 * item.speed]);
        const y = useSpring(yRange, springConfig); // smooth spring animation

        return (
          <motion.div
            key={index}
            className="absolute opacity-20"
            style={{
              left: item.x,
              top: item.y,
              y,
            }}
          >
            <item.Icon
              size={item.size}
              style={{ color: primary }}
            />
          </motion.div>
        );
      })}

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        {/* IMAGE */}
        <motion.img
          src={profileImg}
          alt="Profile"
          className="w-56 h-56 rounded-full object-cover bg-white"
          style={{ boxShadow: `0 20px 80px ${primary}` }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* TEXT CARD */}
        <motion.div
          className="flex-1 bg-white/80 backdrop-blur-md p-8 rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: primary }}
          >
            {aboutMe.title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {aboutMe.description}
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
