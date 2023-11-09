// frontend/components/LandingPage.tsx
import React, { FC, RefObject, useContext } from "react";
import { ThemeContext, ThemeUpdateContext } from "./ThemeContext";
import useThemeStyles from "../hooks/useThemeStyles";
import styles from "./LandingPage.module.css";


interface LandingPageProps {
  aboutRef: RefObject<HTMLDivElement>;
}

const LandingPage: FC<LandingPageProps> = ({ aboutRef }) => {
  const darkTheme = useContext(ThemeContext);
  const { textClass, nameClass } = useThemeStyles();

  const handleContinue = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main
      style={{
        height: "100vh",
        position: "relative",
      }}
      className="flex flex-col items-center justify-center w-full"
    >

      {/* Intro Lines */}
      <div
        style={{ fontSize: "48px", fontWeight: "bold" }}
        className={`text-4xl font-semibold mb-4 text-center intro-line ${textClass}`}
      >
        <div>
          Hey, I'm{" "}
          <span className={darkTheme ? styles.nameDark : styles.nameLight}>
            Cameron
          </span>
          . 👋
        </div>
      </div>
      <div
        style={{ fontSize: "48px", fontWeight: "bold" }}
        className={`text-4xl font-semibold mb-4 text-center intro-line ${textClass}`}
      >
        <div>I'm a Software Engineer.</div>
      </div>

      <button
        onClick={handleContinue}
        className={`${styles.customButton} ${
          darkTheme ? styles.customButtonDark : styles.customButtonLight
        }`}
      >
        Continue to site <span className="arrow right"></span>
      </button>
      <div className="absolute bottom-4 right-4 space-x-4">
        <a
          href="https://www.linkedin.com/in/cameron-sivo-68a721224/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`fa fa-linkedin fa-2x ${
              darkTheme ? styles.socialDark : styles.socialLight
            }`}
          ></i>
        </a>
        <a
          href="https://github.com/csiv23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            className={`fa fa-github fa-2x ${
              darkTheme ? styles.socialDark : styles.socialLight
            }`}
          ></i>
        </a>
      </div>
    </main>
  );
};

export default LandingPage;
