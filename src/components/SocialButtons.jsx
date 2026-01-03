import { useTheme } from "../context/ThemeContext";

const SocialButton = ({ social }) => {
  const { primary } = useTheme();
  const Icon = social.icon; // assign the component

  return (
    <a
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 rounded-full shadow-md text-2xl transition transform hover:scale-110"
      style={{ backgroundColor: primary, color: "#fff" }}
      title={social.name}
    >
      <Icon className="w-6 h-6" /> {/* Render the React icon */}
    </a>
  );
};

export default SocialButton;
