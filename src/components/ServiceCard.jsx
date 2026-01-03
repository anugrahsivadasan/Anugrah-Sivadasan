import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  const { primary } = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-xl p-6 text-center cursor-pointer transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        boxShadow: hovered
          ? `0 5px 10px ${primary}`
          : `0 1px 3px ${primary}`,
      }}
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="text-4xl mb-4 inline-flex items-center justify-center p-4 rounded-full"
        style={{ backgroundColor: primary, color: "#fff" }}
      >
        <Icon size={32} />
      </div>

      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
};

export default ServiceCard;
