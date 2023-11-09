// frontend/components/Main.tsx
import React, { useEffect, useState, useRef, useContext } from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./Navbar"; 
import styles from "./Main.module.css"; 
import { ThemeProvider, ThemeContext } from "./ThemeContext";

const Main: React.FC = () => {
  const darkTheme = useContext(ThemeContext);
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.backgroundColor = darkTheme ? "#111" : "#fff";
  }, [darkTheme]);

  return (
    <div className={darkTheme ? 'dark-theme' : 'light-theme'}>
      <Navbar /> 
      <LandingPage aboutRef={aboutRef} />
      <About ref={aboutRef} />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default Main;
