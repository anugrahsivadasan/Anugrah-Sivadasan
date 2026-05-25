import { motion } from "framer-motion";

const ProjectScene = ({
  title,
  subtitle,
  description,
  images,
  gradientColor,
  index,
  link,
}) => {
  const isEven = index % 2 === 0;

  const gradients = {
    orange: "from-orange-500/20 to-transparent",
    violet: "from-violet-500/20 to-transparent",
    cyan: "from-cyan-500/20 to-transparent",
    emerald: "from-emerald-500/20 to-transparent",
    default: "from-white/10 to-transparent",
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full max-w-6xl grid md:grid-cols-2 gap-10 items-center"
      >
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -100 : 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden group"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${gradients[gradientColor]} opacity-60`}
          />

          <img
            src={images[0]}
            alt={title}
            className="w-full h-full object-cover rounded-2xl transform group-hover:scale-105 transition duration-500"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-4"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            {title}
          </h2>

          <p className="text-sm text-gray-400">
            {subtitle}
          </p>

          <p className="text-gray-300">
            {description}
          </p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition"
          >
            View Project →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectScene;