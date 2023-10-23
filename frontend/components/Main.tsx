// frontend/components/Main.tsx
import React, { useEffect, useState, useRef } from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import styles from "./Main.module.css"; // Make sure the stylesheet is named Main.module.css

const Main: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null); // Create a ref to store the DOM element

  return (
    <>
        <LandingPage aboutRef={aboutRef} />
        <About ref={aboutRef} />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
    </>
  );
};

export default Main;
