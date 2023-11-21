import React, { FC, useContext } from "react";
import { ThemeContext, ThemeUpdateContext } from "./ThemeContext";
import MoonIcon from "@mui/icons-material/DarkModeOutlined";
import SunIcon from "@mui/icons-material/LightModeOutlined";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);

  const scrollToSection = (sectionId: string, offset: number) => {
    return (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        const offsetTop = section.offsetTop + offset; // Use the offset here
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    };
  };

  return (
    <nav
      className={`${styles.navbar} ${
        darkTheme ? styles.navbarDark : styles.navbarLight
      }`}
    >
      <div className={styles.navLinks}>
        <a href="#top"  onClick={scrollToSection("top", -100)}>Cameron Sivo</a>
        <a href="#about" onClick={scrollToSection("about", 400)}>
          About Me
        </a>
        <a href="#skills" onClick={scrollToSection("skills", -55)}>
          Skills
        </a>
        <a href="#experience" onClick={scrollToSection("experience", -55)}>
          Experience
        </a>
        <a href="#projects" onClick={scrollToSection("projects", -55)}>
          Projects
        </a>
        <a href="#contact" onClick={scrollToSection("contact", -55)}>
          Contact
        </a>
      </div>
      <button
        onClick={toggleTheme}
        className={`${styles.themeToggleButton} ${
          darkTheme
            ? styles.themeToggleButtonDark
            : styles.themeToggleButtonLight
        }`}
      >
        {darkTheme ? <SunIcon /> : <MoonIcon />}
      </button>
    </nav>
  );
};

export default Navbar;
