import React, { FC } from "react";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiReact,
} from "react-icons/si";
import useThemeStyles from "../hooks/useThemeStyles";
import styles from "./Skills.module.css";

const Skills: FC = () => {
  const { textClass } = useThemeStyles(); 

  const skills = [
    { name: "Python", icon: <SiPython /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "Git", icon: <SiGit /> },
    { name: "React", icon: <SiReact /> },
  ];

  return (
    <div
      id="skills"
      style={{ paddingTop: "2vh", paddingBottom: "2vh" }}
      className="text-center p-6"
    >
      <h2 className={`text-4xl font-semibold mb-8 ${textClass}`}>
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={`m-2 p-2 border rounded bg-gray-700 ${textClass} flex flex-col items-center justify-center ${
              styles["skill-box"] || ""
            }`}
          >
            <div className="text-4xl">{skill.icon}</div>
            <div className="text-base">{skill.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
