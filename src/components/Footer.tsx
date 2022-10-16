import { useThemeContext } from "@/context/ThemeProvider";
import React from "react";

const Footer = () => {
  const { main } = useThemeContext();

  return (
    <footer className="flex justify-center gap-8">
      <a
        href="https://github.com/soamati"
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:text-${main}-300`}
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/matiruizsh/"
        target="_blank"
        rel="noopener noreferrer"
        className={`hover:text-${main}-300`}
      >
        LinkedIn
      </a>
    </footer>
  );
};

export default Footer;
