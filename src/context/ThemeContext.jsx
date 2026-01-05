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
  const [primary, setPrimary] = useState(
    localStorage.getItem("theme-color") || COLORS.indigo
  );

  useEffect(() => {
    document.documentElement.style.setProperty("--primary", primary);
    localStorage.setItem("theme-color", primary);
  }, [primary]);

  return (
    <ThemeContext.Provider value={{ primary, setPrimary, COLORS }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
