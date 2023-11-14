import React, { FC, useContext } from "react";
import useThemeStyles from "../hooks/useThemeStyles";
import styles from "./Experience.module.css";
import { ThemeContext } from "./ThemeContext";


type Job = {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
};

const Experience: FC = () => {
  const { textClass } = useThemeStyles();
  const darkTheme = useContext(ThemeContext);

  const jobs: Job[] = [
    {
      company: "Retail Business Services",
      role: "Data Engineer Co-op",
      duration: "June - December 2023",
      description:
        "Leveraged Databricks and Python to build and scale data pipelines, and automate data flows using PowerAutomate. Involved in the end-to-end data engineering process, including data sourcing, transformation, and loading (ETL).",
      technologies: ["Databricks", "Python", "PowerAutomate"],
    },
    {
      company: "Insulet Corporation",
      role: "Software Test Automation Co-op",
      duration: "Janurary - July 2022",
      description:
        "Architected a Python-based automation framework to streamline the testing of OmniPod™ devices. Collaborated with a team of engineers to write rigorous test cases using pytest and unittest. Led a code refactoring initiative that resolved over 500 known issues, improving code maintainability.",
      technologies: ["Python", "pytest", "unittest"],
    },
  ];
  return (
    <div
      id="experience"
      style={{
        paddingTop: "2vh",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "1100px",
        flexDirection: "column",
      }}
      className="text-center w-full"
    >
      <h2 className={`text-4xl font-semibold mb-8 ${textClass}`}>Experience</h2>
      <div className="grid grid-cols-4 gap-4 w-full">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`col-span-4 grid grid-cols-4 w-full ${styles.jobBox} ${
              darkTheme ? styles.jobBoxDark : styles.jobBoxLight
            }`}
          >
            <div className={`col-span-1 text-lg ${textClass}`}>
              <p>{job.duration}</p>
            </div>
            <div className="col-span-3 text-left w-full">
              <h3 className={`text-2xl font-semibold ${textClass}`}>
                {job.role}
              </h3>
              <h4 className={`text-xl ${textClass}`}>{job.company}</h4>
              <p className={`text-base ${textClass}`}>{job.description}</p>
              <div className="mt-2 flex space-x-2">
                {job.technologies.map((tech, techIndex) => (
                  <button
                    key={techIndex}
                    className={`bg-blue-700 text-blue-300 rounded-full px-3 py-1 ${styles.techButton}`}
                  >
                    {tech}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-4 w-full">
        <div className="col-span-1 text-left">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            View Full Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Experience;
