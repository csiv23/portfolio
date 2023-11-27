import React, { FC, RefObject, useContext } from "react";
import { ThemeContext, ThemeUpdateContext } from "./ThemeContext";
import DescriptionIcon from "@mui/icons-material/Description";
import useThemeStyles from "../hooks/useThemeStyles";
import styles from "./LandingPage.module.css";

interface LandingPageProps {
  aboutRef: RefObject<HTMLDivElement>;
}

const LandingPage: FC<LandingPageProps> = ({ aboutRef }) => {
  const darkTheme = useContext(ThemeContext);
  const { textClass, nameClass } = useThemeStyles();

  const handleViewResume = () => {
    window.location.href = "/resume.pdf"; // Redirect to the resume PDF
  };

  return (
    <main
      className={`flex flex-col items-center justify-center w-full ${styles.landingPageContainer} ${styles.justifyCenter}`}
    >
      <div className={styles.aboutContainer}>
        <div
          className={`text-4xl font-semibold mb-4 text-center intro-line ${textClass} ${styles.introText}`}
        >
          Hey, I'm{" "}
          <span
            className={`${darkTheme ? styles.nameDark : styles.nameLight} ${
              styles.nameHoverEffect
            }`}
          >
            Cameron
          </span>
          . 👋
        </div>
        <div
          className={`text-4xl font-semibold mb-4 text-center intro-line ${textClass} ${styles.introText}`}
        >
          <div>
            I'm a Software{" "}
            <span className={styles.softwareEngineer}>Engineer.</span>
          </div>
        </div>
        <div className={styles.aboutDescription}>
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
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.customButton} ${
            darkTheme ? styles.customButtonDark : styles.customButtonLight
          }`}
        >
          View Resume <span className="arrow right"></span>
          <DescriptionIcon
            className={`${styles.resumeIcon} ${
              darkTheme ? styles.resumeIconDark : styles.resumeIconLight
            }`}
          />
        </a>

        <div className="mt-4 space-x-4">
          <a
            href="https://www.linkedin.com/in/cameron-sivo-68a721224/"
            target="_blank"
            rel="noopener noreferrer"
            className={`fa fa-linkedin fa-2x ${
              darkTheme ? styles.socialDark : styles.socialLight
            }`}
            style={{
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          ></a>
          <a
            href="https://github.com/csiv23"
            target="_blank"
            rel="noopener noreferrer"
            className={`fa fa-github fa-2x ${
              darkTheme ? styles.socialDark : styles.socialLight
            }`}
            style={{
              transition: "transform 0.2s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-5px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          ></a>
        </div>
      </div>
    </main>
  );
};

export default LandingPage;
