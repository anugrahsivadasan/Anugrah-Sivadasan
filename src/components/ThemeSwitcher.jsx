// ThemeSwitcher.jsx
import { useState, useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";
import { FaPalette } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ThemeSwitcher = () => {
  const { setPrimary, COLORS, primary } = useTheme();
  const [open, setOpen] = useState(false);
  const [atHero, setAtHero] = useState(true);
  const wrapperRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Track hero section scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById("hero")?.offsetHeight || 0;
      setAtHero(window.scrollY < heroHeight - 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const ThemeButton = (
    <div className="relative group" ref={wrapperRef}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg"
        style={{ backgroundColor: primary }}
      >
        <FaPalette
          size={22}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Color Picker */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.25 }}
            className="flex gap-2 mt-2"
          >
            {Object.values(COLORS).map((color, i) => {
              const isActive = color === primary;
              return (
                <button
                  key={i}
                  onClick={() => {
                    setPrimary(color);
                    setOpen(false);
                  }}
                  className="w-6 h-6 rounded-full border transition-transform hover:scale-110"
                  style={{
                    backgroundColor: color,
                    boxShadow: isActive ? `0 0 12px 4px ${color}` : "none",
                  }}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <motion.div
      initial={false}
   animate={{
  top: atHero ? "50%" : "16px",
  left: "16px",
}}
className={`fixed z-50 flex items-center ${
  atHero ? "-translate-y-0" : "translate-y-0"
}`}

    >
      {ThemeButton}
    </motion.div>
  );
};

export default ThemeSwitcher;
