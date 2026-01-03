import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const SkillBar = ({ skill }) => {
  const { primary } = useTheme();

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="font-medium">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>

      <div className="w-full h-4 bg-gray-200 rounded-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-4 rounded-full"
          style={{ backgroundColor: primary }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
