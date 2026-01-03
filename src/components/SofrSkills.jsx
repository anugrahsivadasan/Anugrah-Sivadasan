import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { softSkill } from "../data/softskill";

const SoftSkills = () => {
  const { primary } = useTheme();

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
      {/* CENTERED HEADING */}
      <div className=" text-center mb-16">
        {/* <p className="text-sm tracking-widest text-gray-400 mb-2">
          ✳ ALL SKILLS
        </p> */}
       <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Other Skills
        </motion.h2>
        </div>
      </div>

      {/* SKILLS LIST */}
      <div className="flex flex-wrap justify-center gap-8">
        {softSkill.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <motion.div
              key={index}
              className="flex items-center gap-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ backgroundColor: primary }}
              >
                <Icon size={22} className="text-white" />
              </div>

              <span className="text-gray-700 font-medium">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
    </section>
  );
};

export default SoftSkills;
