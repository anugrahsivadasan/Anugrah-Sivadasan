import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import SocialButton from "../components/SocialButtons";
import { socials } from "../data/socials";
import { useTheme } from "../context/ThemeContext";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaUserTie,
} from "react-icons/fa";

/* FLOATING ICONS */
const floatingIcons = [
  { Icon: FaEnvelope, left: "12%", top: "25%", size: 38, depth: 80 },
  { Icon: FaPaperPlane, left: "85%", top: "30%", size: 34, depth: 65 },
  { Icon: FaPhoneAlt, left: "70%", top: "80%", size: 36, depth: 95 },
  { Icon: FaUserTie, left: "15%", top: "75%", size: 40, depth: 110 },
];

const Contact = () => {
  const { primary } = useTheme();
  const sectionRef = useRef(null);

  /* 🎯 SECTION SCROLL */
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
      id="contact"
      className="relative py-28 overflow-hidden bg-white text-gray-900 dark:bg-black dark:text-gray-100"
    >
      {/* 🌈 GRADIENT BACKGROUND */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, ${primary}22, transparent 55%),
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
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Interested in working together? Feel free to reach out!
        </motion.p>

        {/* CTA BUTTONS */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=anugrahsivadasan@gmail.com"
  className="px-6 py-3 rounded-lg text-white font-medium transition hover:opacity-90"
  style={{ backgroundColor: primary }}
>
  Hire Me
</a>

          <a
            href="/Anugrah-Sivadasan-React-Resume.pdf"
            className="px-6 py-3 rounded-lg border font-medium transition hover:bg-gray-100"
            download
          >
            Download CV
          </a>
        </div>

        {/* SOCIALS */}
        <div className="flex justify-center gap-4 flex-wrap">
          {socials.map((social, idx) => (
            <SocialButton key={idx} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
