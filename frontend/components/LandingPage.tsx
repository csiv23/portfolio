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

  const handleViewResume = () => {
    window.location.href = '/resume.pdf'; // Redirect to the resume PDF
  };

  return (
    <main
      id="top"
      style={{
        height: "100vh",
        maxWidth: "700px",
        width: "90%",
        margin: "0 auto",
      }}
      className="flex flex-col items-center justify-center w-full"
    >
      <div
        id="about"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{ fontSize: "48px", fontWeight: "bold" }}
          className={`text-4xl font-semibold mb-4 text-center intro-line ${textClass}`}
        >
          Hey, I'm{" "}
          <span className={darkTheme ? styles.nameDark : styles.nameLight}>
            Cameron
          </span>
          . 👋
        </div>
        <div
          style={{ fontSize: "48px", fontWeight: "bold" }}
          className={`text-4xl font-semibold mb-4 text-center intro-line ${textClass}`}
        >
          <div>I'm a Software Engineer.</div>
        </div>
        <div id="about-description" style={{ paddingTop: "5px" }}>
          <p className={`text-lg ${textClass}`}>
            I'm a Computer Science graduate from Northeastern University with a
            focus on full-stack development. Based in Boston, I'm deeply
            committed to the craft of coding, from the logic of back-end to the
            finesse of front-end design. My driving force is a strong work ethic
            and the relentless pursuit of improvement. Let's build something
            exceptional together.
          </p>
        </div>
        <a
        href="/resume.pdf" // Link to your resume PDF
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer"
        className={`${styles.customButton} ${
          darkTheme ? styles.customButtonDark : styles.customButtonLight
        }`}
      >
        View Resume <span className="arrow right"></span>
      </a>
      </div>

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
