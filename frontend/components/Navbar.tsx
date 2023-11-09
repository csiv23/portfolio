// frontend/components/Navbar.tsx
import React, { FC, useContext } from "react";
import { ThemeContext, ThemeUpdateContext } from "./ThemeContext";
import MoonIcon from "@mui/icons-material/DarkModeOutlined";
import SunIcon from "@mui/icons-material/LightModeOutlined";
import styles from "./Navbar.module.css"; // Your CSS module for styling

const Navbar: FC = () => {
  const darkTheme = useContext(ThemeContext);
  const toggleTheme = useContext(ThemeUpdateContext);

  return (
    <nav
      className={`${styles.navbar} ${
        darkTheme ? styles.navbarDark : styles.navbarLight
      }`}
    >
      <div className={styles.navLinks}>
        <a href="#welcome">Welcome</a>
        <a href="#about">About Me</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
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
