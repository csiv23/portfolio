import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";
import styles from "../components/LandingPage.module.css";

interface ThemeStyles {
  textClass: string;
  nameClass: string;
}

const useThemeStyles = (): ThemeStyles => {
  const darkTheme = useContext(ThemeContext);

  const textClass = darkTheme ? styles.textDark : styles.textLight;
  const nameClass = darkTheme ? styles.nameDark : styles.nameLight;

  return { textClass, nameClass };
};

export default useThemeStyles;
