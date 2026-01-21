import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

/* ---------- Theme Toggle (FIXED, NOT REMOVED) ---------- */
const ThemeToggle = () => {
  const { theme, toggleTheme, primary} = useTheme();
  const isDark = theme === "dark";

  return (
      <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      style={{
        background: isDark
          ? `linear-gradient(to right, ${primary}, #000)` // dark mode: primary → black
          : `linear-gradient(to right, ${primary}, #fff)`, // light mode: primary → white
      }}
      className={`
        relative flex items-center w-16 h-8
        rounded-full p-1 cursor-pointer
        transition-all duration-500 ease-in-out
        hover:scale-110 shadow-lg
      `}
    >
      {/* Sliding circle */}
      <div
        className={`
          flex items-center justify-center
          w-7 h-7 rounded-full
          bg-white dark:bg-gray-900
          shadow-md transform transition-transform duration-500
          ${isDark ? "translate-x-8" : "translate-x-0"}
        `}
      >
        {/* Icons inside circle */}
        {isDark ? (
          <Sun size={18} className="text-yellow-400" />
        ) : (
          <Moon size={18} className="text-gray-800 dark:text-gray-200" />
        )}
      </div>
    </button>

  );
};
/* ------------------------------------------------------ */

const NAV_ITEMS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const { primary } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      NAV_ITEMS.forEach((item) => {
        const section = document.querySelector(item.href);
        if (
          section &&
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(item.name);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed w-full bg-white dark:bg-black shadow-md z-40">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <a href="#hero" className="text-xl font-bold" style={{ color: primary }}>
          Anugrah Sivadasan
        </a>

        {/* EXISTING DESKTOP NAV (UNCHANGED) */}
        <ul className="hidden md:flex gap-6 dark:text-white">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`transition ${
                  active === item.name ? "font-semibold underline" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* 🔹 ADDED TOGGLE (DESKTOP) – nothing removed */}
        <div className="hidden md:block">
          <ThemeToggle />
        </div>

        <button
          className="md:hidden font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* EXISTING MOBILE MENU (UNCHANGED) */}
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 shadow-md px-6 py-4 flex flex-col gap-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`block transition ${
                  active === item.name ? "font-semibold underline" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}

          {/* 🔹 ADDED TOGGLE (MOBILE) – nothing removed */}
          <ThemeToggle />
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
