import React, { FC } from "react";
import styles from "./Experience.module.css";

type Job = {
  company: string;
  role: string;
  duration: string;
  description: string;
  technologies: string[];
};

const Experience: FC = () => {
  const jobs: Job[] = [
    {
      company: "Retail Business Services",
      role: "Data Engineer Co-op",
      duration: "June 2023 - Present",
      description:
        "Leveraging Databricks and Python to build and scale data pipelines, and automate data flows using PowerAutomate. Involved in the end-to-end data engineering process, including data sourcing, transformation, and loading (ETL).",
      technologies: ["Databricks", "Python", "PowerAutomate"],
    },
    {
      company: "Insulet Corporation",
      role: "Software Test Automation Co-op",
      duration: "Jan 2022 - July 2022",
      description:
        "Architected a Python-based automation framework to streamline the testing of OmniPod™ devices. Collaborated with a team of engineers to write rigorous test cases using pytest and unittest. Led a code refactoring initiative that resolved over 500 known issues, improving code maintainability.",
      technologies: ["Python", "pytest", "unittest"],
    },
  ];
  return (
    <div
      style={{ backgroundColor: "rgb(26, 27, 27)", paddingTop: "2vh" }}
      className="text-center w-full"
    >
      <h2 className="text-4xl font-semibold text-white mb-8">Experience</h2>
      <div className="grid grid-cols-4 gap-4 w-full">
        {jobs.map((job, index) => (
          <div
            key={index}
            className={`col-span-4 grid grid-cols-4 w-full ${styles.jobBox}`}
          >
            {/* Duration */}
            <div className="col-span-1 text-gray-400 text-lg">
              <p>{job.duration}</p>
            </div>
            {/* Details */}
            <div className="col-span-3 text-left w-full">
              <h3 className="text-2xl font-semibold text-white">{job.role}</h3>
              <h4 className="text-xl text-white">{job.company}</h4>
              <p className="text-base text-gray-400">{job.description}</p>
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
      <a 
        href="/resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-2xl underline text-blue-500 hover:text-blue-700 transition-all duration-300 ease-in-out mb-8"
      >
        View Full Resume
      </a>
    </div>
  );
};

export default Experience;
