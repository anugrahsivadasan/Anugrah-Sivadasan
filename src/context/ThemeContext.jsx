import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const COLORS = {
  indigo: "#6366f1",
  emerald: "#10b981",
  rose: "#f43f5e",
  amber: "#f59e0b",
  sky: "#0ea5e9",
  brown: "#5E3F2B",
};

export const ThemeProvider = ({ children }) => {
  /* ---------- COLOR THEME ---------- */
  const [primary, setPrimary] = useState(
    localStorage.getItem("theme-color") || COLORS.indigo
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", primary);
    localStorage.setItem("theme-color", primary);
  }, [primary]);

  /* ---------- DARK / LIGHT MODE (FIXED) ---------- */
  const [theme, setTheme] = useState(() => {
    // 1️⃣ Check localStorage first
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) return savedTheme;

    // 2️⃣ Fallback to system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Apply dark class whenever theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider
      value={{
        primary,
        setPrimary,
        COLORS,
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
