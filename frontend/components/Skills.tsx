// frontend/components/Skills.tsx
import React, { FC } from "react";
import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiReact,
} from "react-icons/si";
import styles from "./Skills.module.css";

const Skills: FC = () => {
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
      <h2 className="text-4xl font-semibold text-white mb-8">
        Skills & Technologies
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        {skills.map((skill, index) => (
          // Fallback to empty string if styles.skill-box is not defined
          <div
            key={index}
            className={`m-2 p-2 border rounded bg-gray-700 text-white flex flex-col items-center justify-center ${
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
