import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import styles from "../components/LandingPage.module.css";

interface ThemeStyles {
  textClass: string;
  nameClass: string;
}

const useThemeStyles = (): ThemeStyles => {
  const darkTheme = useContext(ThemeContext);

  const textClass = darkTheme ? styles.textLight : styles.textDark;
  const nameClass = darkTheme ? styles.nameLight : styles.nameDark;

  return { textClass, nameClass };
};

export default useThemeStyles;
