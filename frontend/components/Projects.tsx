import React, { FC, useContext } from "react";
import useThemeStyles from "..//hooks/useThemeStyles";
import { ThemeContext } from "./ThemeContext";
import styles from "./projects.module.css"; // Import your CSS module here

type Project = {
  name: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  link?: string;
};

const Projects: FC = () => {
  const { textClass } = useThemeStyles();
  const darkTheme = useContext(ThemeContext);

  const projects: Project[] = [
    {
      name: "Portfolio Website",
      description:
        "My portfolio website built using Next.js. This portfolio serves as a comprehensive showcase of my skills in web development. It features a dynamic UI, responsive design, and is highly optimized for performance.",
      imageSrc: "/images/zengen.png",
      technologies: ["Next.js", "Tailwind"],
      link: "https://github.com/csiv23/portfolio",
    },
    {
      name: "ZenGen",
      description:
        "A personalized meditation app leveraging Text-to-Speech for customized guidance. Built with React and Flask, it features dynamic ChatGPT content generation and cross-platform compatibility.",
      imageSrc: "/images/zengen.png",
      technologies: ["React", "Create React App", "Flask"],
      link: "https://github.com/csiv23/ZenGen",
    },
    {
      name: "MangaMatch",
      description:
        "A book recommendation platform utilizing a one-hot encoding and cosine similarity algorithm for tailored suggestions across various genres and themes.",
      imageSrc: "/images/zengen.png", // Placeholder image source
      technologies: ["Express.js", "Node.js", "MongoDB", "React.js"],
      link: "https://github.com/csiv23/MangaMatch",
    },
    {
      name: "Persistent Badge Database",
      description:
        "Enhanced an open-source virtual meeting space with a persistent database for user profiles and a badge system to showcase player achievements.",
      imageSrc: "/images/coveytown.png", // Placeholder image source
      technologies: ["Typescript", "React.js", "PostgreSQL", "Postman"],
      link: "https://github.com/neu-cs4530/spring-23-team-513",
    },
  ];

  return (
    <div className={`text-center w-full ${styles.projectsContainer}`}>
      <h2 className={`text-3xl font-semibold mb-12 ${textClass}`}>PROJECTS</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={`${styles.projectCard} ${darkTheme ? styles.projectCardDark : ""}`}>
            <img src={project.imageSrc} alt={project.name} className={styles.projectImage} />
            <h3 className={`text-2xl font-semibold ${textClass} ${styles.projectName}`}>{project.name}</h3>
            <p className={`${textClass} ${styles.projectDescription}`}>{project.description}</p>
            <div className={`flex justify-center space-x-2 ${textClass}`}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={`${textClass} ${styles.technologyTag}`}>{tech}</span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={`fa fa-github fa-2x ${textClass} ${styles.githubLink}`}>
                {/* Icon content */}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;