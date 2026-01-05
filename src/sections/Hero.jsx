// src/sections/Hero.jsx
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ThemeSwitcher from "../components/ThemeSwitcher";
import profileImg from "../assets/Anugrah.jpeg";
import { FaReact, FaCode, FaPalette, FaLaptopCode, FaBolt } from "react-icons/fa";

const floatingIcons = [
  { Icon: FaReact, x: "5%", y: "10%", size: 40, speed: 0.6 },
  { Icon: FaCode, x: "85%", y: "20%", size: 32, speed: 0.4 },
  { Icon: FaPalette, x: "70%", y: "70%", size: 36, speed: 0.7 },
  { Icon: FaLaptopCode, x: "20%", y: "75%", size: 40, speed: 0.5 },
  { Icon: FaBolt, x: "50%", y: "40%", size: 28, speed: 0.3 },
];

const Hero = () => {
  const { scrollY } = useScroll();

  const springConfig = { damping: 20, stiffness: 80 };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden bg-gray-50"
    >
      {/* FLOATING ICONS BACKGROUND */}
      {floatingIcons.map((item, index) => {
        const yRange = useTransform(scrollY, [0, 800], [0, 150 * item.speed]);
        const y = useSpring(yRange, springConfig);

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
              style={{ color: "var(--primary)" }}
            />
          </motion.div>
        );
      })}

      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-7xl font-bold leading-tight">
            Hi, I’m <span style={{ color: "var(--primary)" }}>Anugrah</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Frontend React Developer crafting clean and interactive web experiences.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg text-white font-medium transition hover:opacity-90"
              style={{ backgroundColor: "var(--primary)" }}
            >
              Hire Me
            </a>

            <a
              href="/Anugrah-Sivadasan-React-Resume.pdf
"
              className="px-6 py-3 rounded-lg border font-medium transition hover:bg-gray-100"
              download
            >
              Download CV
            </a>
          </div>

          <div className="mt-8">
            <ThemeSwitcher />
          </div>
        </motion.div>

        {/* RIGHT SIDE (Profile Image with Parallax) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden md:flex justify-center"
        >
          <div
            className="w-96 h-96 rounded-full flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, var(--primary), #e5e7eb)",
            }}
          >
            <img
              src={profileImg}
              alt="Profile"
              className="w-80 h-80 rounded-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
