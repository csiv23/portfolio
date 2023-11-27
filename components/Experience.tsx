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
      duration: "January - July 2022",
      description:
        "Architected a Python-based automation framework to streamline the testing of OmniPod™ devices. Collaborated with a team of engineers to write rigorous test cases using pytest and unittest. Led a code refactoring initiative that resolved over 500 known issues, improving code maintainability.",
      technologies: ["Python", "pytest", "unittest"],
    },
  ];

  return (
    <div 
    id = "experience"
    className={`text-center ${styles.experienceContainer}`}>
      <h2 className={`text-3xl font-semibold mb-8 ${textClass} ${styles.experienceHeader}`}>EXPERIENCE</h2>
      <div className="w-full">
        {jobs.map((job, index) => (
          <div key={index} className={`flex ${styles.jobBox} ${darkTheme ? styles.jobBoxDark : styles.jobBoxLight}`}>
            <div className={`w-1/4 ${textClass} ${styles.durationText}`}>
              <p className={styles.jobDuration}>{job.duration}</p>
            </div>
            <div className="flex-1 text-left pl-4">
              <h3 className={`text-2xl font-semibold ${textClass} ${styles.jobRole}`}>
                {job.role}
              </h3>
              <h4 className={`text-xl ${textClass} ${styles.jobCompany}`}>{job.company}</h4>
              <p className={`text-base ${textClass} ${styles.jobDescription}`}>{job.description}</p>
              <div className="mt-2 flex space-x-2">
                {job.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className={`${styles.techLabel} ${darkTheme ? styles.techLabelDark : styles.techLabelLight}`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
