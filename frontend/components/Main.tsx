// frontend/components/Main.tsx
import React, { useEffect, useState, useRef } from "react";
import LandingPage from "./LandingPage";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";

const Main: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null); // Create a ref to store the DOM element

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDarkMode(true);
    }
  }, []);

  return (
    <>
      <LandingPage isDarkMode={isDarkMode} aboutRef={aboutRef}/>
      <div ref={aboutRef}>
        <About ref={aboutRef} />
      </div>
      <Skills />
      <Experience />
    </>
  );
};

export default Main;
