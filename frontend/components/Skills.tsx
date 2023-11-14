// frontend/components/Skills.tsx
import React, { FC, useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import useThemeStyles from "../hooks/useThemeStyles";
import styles from './Skills.module.css';

const Skills: FC = () => {
  const { textClass } = useThemeStyles();
  const darkTheme = useContext(ThemeContext);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React.js",
    "Node.js",
    "Express",
    "Next.js",
    "HTML",
    "CSS",
    "Tailwind",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Python",
    "Java",
    "Git",
    "GitHub",
    "Azure",
    "Heroku",
    "Databricks",
    "SQL",
    "Postman",
    "Jest",
    "JUnit",
    "pytest",
    "pandas",
    "seaborn",
    "matplotlib",
    "numpy",
    "unittest",
  ];

  return (
    <div
      id="skills"
      style={{
        paddingTop: "2vh",
        paddingBottom: "2vh",
        margin: "0 auto",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1100px",
      }}
      className="text-center p-6"
    >
      <h2 className={`text-3xl font-semibold mb-8 ${textClass}`}>SKILLS</h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`m-2 p-2 border rounded ${textClass} flex items-center justify-center ${
              styles.skillBox
            } ${darkTheme ? styles.skillBoxDark : styles.skillBoxLight}`}
            style={{}}
          >
            <div className="text-base">{skill}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
