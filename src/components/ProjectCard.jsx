import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const ProjectCard = ({ project }) => {
  const { primary } = useTheme();

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Glow Border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl"
        style={{ backgroundColor: primary }}
      />

      {/* Image */}
      <img
        src={project.image}
        alt={project.name}
        className="relative z-10 w-full h-56 object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-[2px]"
      />

      {/* Glass Content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <div className="m-3 rounded-xl backdrop-blur-xl bg-white/10 border border-white/20 p-4 text-gray-900">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="text-sm opacity-80 mt-1">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-3">
            {project.tech.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded-md font-medium"
                style={{ backgroundColor: primary }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
