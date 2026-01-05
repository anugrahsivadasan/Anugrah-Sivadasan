import { useTheme } from "../context/ThemeContext";

const SocialButton = ({ social }) => {
  const { primary } = useTheme();
  const Icon = social.icon;

  const isEmail = social.link.startsWith("mailto:");

  return (
    <a
      href={social.link}
      target={isEmail ? undefined : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="flex items-center justify-center w-12 h-12 rounded-full shadow-md text-2xl transition transform hover:scale-110"
      style={{ backgroundColor: primary, color: "#fff" }}
      title={social.name}
    >
      <Icon className="w-6 h-6" />
    </a>
  );
};

export default SocialButton;
