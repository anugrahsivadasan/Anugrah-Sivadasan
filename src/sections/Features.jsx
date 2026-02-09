import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { features } from "../data/features";
import {
  FaMobileAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa";

/* FLOATING ICONS FOR BACKGROUND DEPTH */
const floatingIcons = [
  { Icon: FaMobileAlt, left: "8%", top: "25%", size: 42, depth: 90 },
  { Icon: FaWhatsapp, left: "90%", top: "30%", size: 36, depth: 70 },
  { Icon: FaMapMarkerAlt, left: "70%", top: "85%", size: 40, depth: 110 },
  { Icon: FaEnvelopeOpenText, left: "15%", top: "75%", size: 34, depth: 60 },
];

const FeaturesSection = () => {
  const { primary } = useTheme();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 20,
    mass: 0.6,
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-white text-gray-900 dark:bg-black dark:text-gray-100"
    >
      {/* Background Glow */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 25%, ${primary}22, transparent 55%),
            radial-gradient(circle at 80% 75%, ${primary}18, transparent 55%)
          `,
        }}
      />

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const y = useTransform(smoothProgress, [0, 1], [0, -item.depth]);

        return (
          <motion.div
            key={index}
            className="absolute pointer-events-none opacity-[0.10]"
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

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Everything Your Website Needs
        </motion.h2>

        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          I don’t just build websites. I make sure your business is ready to
          attract customers, generate enquiries, and run smoothly from day one.
        </p>

        {/* Feature List Style Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                className="flex items-start gap-6 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-xl transition duration-300 bg-white dark:bg-white/5"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {/* Icon */}
                <div
                  className="min-w-[56px] h-[56px] rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: primary }}
                >
                  <Icon size={24} className="text-white" />
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                   {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
