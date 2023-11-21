import React, { FC, useContext } from "react";
import useThemeStyles from "..//hooks/useThemeStyles";
import { ThemeContext } from "./ThemeContext";

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
    <div
      id="projects"
      style={{
        paddingTop: "10vh",
        paddingBottom: "8vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1100px",
      }}
      className="text-center w-full"
    >
      <h2 className={`text-3xl font-semibold mb-12 ${textClass}`}>PROJECTS</h2>
      <div
        className="w-full"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridGap: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${project} ${textClass}`}
            style={{
              boxShadow: darkTheme
                ? "rgba(0,0,0,0.16) 0px 10px 36px 0px,rgba(0,0,0,0.06) 0px 0px 0px 1px"
                : "hsla(240,5%,41%,0.2) 0px 7px 29px 0px",
              maxWidth: "400px",
              width: "100%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "transform 0.3s ease-in-out",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "translateY(-10px)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            <img
              src={project.imageSrc}
              alt={project.name}
              style={{
                borderRadius: "0.5rem",
                marginBottom: "1rem",
                objectFit: "cover",
                width: "100%",
                height: "200px",
              }}
            />
            <h3
              className="text-2xl font-semibold"
              style={{ height: "3rem" }}
            >
              {project.name}
            </h3>
            <p
              style={{
                marginBottom: "1rem",
                height: "6rem",
                overflow: "hidden",
              }}
            >
              {project.description}
            </p>
            <div
              className="flex justify-center space-x-2"
              style={{ marginBottom: "1rem" }}
            >
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  style={{ textTransform: "uppercase", fontWeight: "bold" }}
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="fa fa-github fa-2x"
                style={{ marginBottom: "1rem" }}
              >
                {/* Icon content (if any) */}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
