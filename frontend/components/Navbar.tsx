import React, { FC, useContext, useState } from "react";
import { ThemeContext, ThemeUpdateContext } from "./ThemeContext";
import MoonIcon from "@mui/icons-material/DarkModeOutlined";
import SunIcon from "@mui/icons-material/LightModeOutlined";
import styles from "./Navbar.module.css";

const Navbar: FC = () => {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    return () => {
      const section = document.getElementById(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth",
        });
        setIsNavOpen(false); // Close the menu after clicking a link
      }
    };
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav
      className={`${styles.navbar} ${
        darkTheme ? styles.navbarDark : styles.navbarLight
      }`}
    >
      <button className={styles.navbarToggle} onClick={toggleNav}>
        {isNavOpen ? "×" : "☰"}
      </button>
      <div
        className={`${styles.navLinks} ${isNavOpen ? styles.navOpen : ""} ${
          darkTheme ? styles.navOpenDark : styles.navOpenLight
        }`}
      >
        <a
          className={darkTheme ? styles.nameDark : styles.nameLight}
          href="#top"
          onClick={scrollToSection("top")}
        >
          Cameron Sivo
        </a>

        <a href="#about" onClick={scrollToSection("about")}>
          About Me
        </a>
        <a href="#skills" onClick={scrollToSection("skills")}>
          Skills
        </a>
        <a href="#experience" onClick={scrollToSection("experience")}>
          Experience
        </a>
        <a href="#projects" onClick={scrollToSection("projects")}>
          Projects
        </a>
        <a href="#contact" onClick={scrollToSection("contact")}>
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
