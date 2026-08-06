import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="
      relative
      overflow-hidden
      bg-white
      text-gray-900
      dark:bg-black
      dark:text-white
      border-t
      border-gray-200
      dark:border-white/10
      "
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-[700px]
          h-[700px]
          rounded-full
          blur-[140px]
          opacity-20
          "
          style={{
            background:
              "radial-gradient(circle, var(--primary), transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-12"
        >
          {/* LEFT */}
          <div>
            <h2
              className="text-3xl font-bold"
              style={{ color: "var(--primary)" }}
            >
              Anugrah.
            </h2>

            <p className="mt-5 leading-8 text-gray-600 dark:text-gray-400">
              Freelance web developer helping businesses in
              <span className="font-semibold"> Kannur</span>,
              <span className="font-semibold"> Ernakulam</span>,
              <span className="font-semibold"> Kochi</span> and across
              <span className="font-semibold"> Kerala</span> build modern,
              responsive websites and performance-focused web applications.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              {[
                ["Home", "#hero"],
                ["About", "#about"],
                ["Projects", "#projects"],
                ["Skills", "#skills"],
                ["Contact", "#contact"],
              ].map(([title, href]) => (
                <li key={title}>
                  <a
                    href={href}
                    className="hover:text-[var(--primary)] transition"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div>
            <h3 className="text-xl font-semibold mb-5">Let's Connect</h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Available for freelance projects and full-time opportunities.
            </p>

            <div className="flex gap-5 text-2xl">
              <a
                href="mailto:anugrah.web.dev@gmail.com"
                className="hover:text-[var(--primary)] transition"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/anugrahsivadasan"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--primary)] transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/anugrah-sivadasan/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--primary)] transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/anugrah.web?igsh=ODd2emVsdDV0bHV4"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[var(--primary)] transition"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-300 dark:border-white/10 my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {year} Anugrah Sivadasan. All Rights Reserved.
          </p>

          <p className="text-sm text-gray-500 text-center md:text-right">
            Web Developer • Kerala • Kannur • Ernakulam • Kochi • India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
