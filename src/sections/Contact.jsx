import SocialButton from "../components/SocialButtons";
import { socials } from "../data/socials";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { primary } = useTheme();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        <p className="text-gray-600 mb-8">
          Interested in working together? Feel free to reach out!
        </p>

        <div className="flex justify-center gap-6 mb-8 flex-wrap">
          <a
            href="mailto:anugrahsivadasan@gmail.com"
            className="px-6 py-3 rounded-lg text-white font-medium transition hover:opacity-90"
            style={{ backgroundColor: primary }}
          >
            Hire Me
          </a>

          <a
            href="/Anugrah-Sivadasan-React-Frontend-Developer.pdf
"
            className="px-6 py-3 rounded-lg border font-medium transition hover:bg-gray-100"
            download
          >
            Download CV
          </a>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {socials.map((social, idx) => (
            <SocialButton key={idx} social={social} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
