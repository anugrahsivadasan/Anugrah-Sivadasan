import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const TimelineItem = ({ item }) => {
  const { primary } = useTheme();

  return (
    <motion.div
      className="relative pl-8 mb-8"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Timeline circle */}
      <span
        className="absolute left-0 top-1 w-4 h-4 rounded-full"
        style={{ backgroundColor: primary }}
      />

      <h3 className="text-lg font-bold">{item.role}</h3>
      <span className="text-sm text-gray-500">{item.company} | {item.year}</span>
      <p className="text-gray-600 mt-1">{item.description}</p>
    </motion.div>
  );
};

export default TimelineItem;
