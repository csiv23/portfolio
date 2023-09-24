// frontend/components/Main.tsx
import React, { useEffect, useState } from "react";
import LandingPage from './LandingPage';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';

const Main: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
      <LandingPage isDarkMode={isDarkMode} />
      <About />
      <Skills />
      <Experience />
    </>
  );
};

export default Main;
