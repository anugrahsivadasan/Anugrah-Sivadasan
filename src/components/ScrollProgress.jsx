import { motion, useScroll } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const { primary } = useTheme();

  return (
    <motion.div
      className="fixed top-16 left-0 right-0 h-[3px] z-[9999] origin-left"
      style={{
        scaleX: scrollYProgress,
        backgroundColor: primary,
      }}
    />
  );
};

export default ScrollProgress;
