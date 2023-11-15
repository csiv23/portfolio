import React, { FC } from "react";
import useThemeStyles from "..//hooks/useThemeStyles";
import styles from "./Projects.module.css";

type Project = {
  name: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  link?: string;
};

const Projects: FC = () => {
  const { textClass } = useThemeStyles();
  const projects: Project[] = [
    {
      name: "Portfolio Website",
      description:
        "My portfolio website built using Next.js. This portfolio serves as a comprehensive showcase of my skills in web development. It features a dynamic UI, responsive design, and is highly optimized for performance.",
      imageSrc: "/images/zengen.png",
      technologies: ["Next.js", "Tailwind"],
      link: "https://github.com/yourusername/portfolio",
    },
    {
      name: "ZenGen - Customized Meditation App",
      description:
        "ZenGen is a customized meditation app that offers a personalized guided experience. Utilizing Text-to-Speech technology, the app provides real-time guidance tailored to your selected preferences for length, focus, and method of meditation. The app is built using React on the frontend and Flask on the backend. It features dynamic content generation through ChatGPT, in-browser playback, and is designed for cross-platform compatibility.",
      imageSrc: "/images/zengen.png",
      technologies: ["React", "Create React App", "Flask"],
      link: "https://github.com/yourusername/chat-app",
    },
    {
      name: "MangaMatch Recommendation Engine",
      description:
        "Engineered a book recommendation platform aimed at helping readers discover series based on individual preferences. Implemented a recommendation algorithm utilizing one-hot encoding and cosine similarity for nuanced comparisons across book genres and themes. Designed an optimal batch processing mechanism, employing dynamic batch sizes for expedited computation and improved engine performance.",
      imageSrc: "/images/zengen.png", // Placeholder image source
      technologies: ["Express.js", "Node.js", "MongoDB", "React.js"],
      link: "https://github.com/yourusername/mangamatch",
    },
    {
      name: "Covey.Town Persistent Badge Database",
      description:
        "Developed additional features for Covey.Town, an open-source virtual meeting space for simultaneous video calls. Coordinated with 3 teammates to implement a persistent database to allow users to register and save a profile. Integrated a badge system to allow users to publicly display accomplishments to other players.",
      imageSrc: "/images/zengen.png", // Placeholder image source
      technologies: ["Typescript", "React.js", "PostgreSQL", "Postman"],
      link: "https://github.com/yourusername/coveytown",
    },
  ];


  return (
    <div
      id="projects"
      style={{
        paddingTop: "2vh",
        paddingBottom: "8vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "1100px",
      }}
      className="text-center w-full"
    >
      <h2 className={`text-4xl font-semibold mb-8 ${textClass}`}>Projects</h2>
      <div className="w-full" style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "2rem"
      }}>
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`${styles.project} ${textClass}`}
            style={{ 
              boxShadow: "hsla(240,5%,41%,0.2) 0px 7px 29px 0px",
              maxWidth: "400px",
              width: "100%",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              transition: "transform 0.3s ease-in-out"
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = "translateY(-10px)"}
            onMouseOut={(e) => e.currentTarget.style.transform = "translateY(0)"}
          >
            <img 
              src={project.imageSrc} 
              alt={project.name} 
              style={{ 
                width: "100%", 
                borderRadius: "0.5rem", 
                marginBottom: "1rem", 
                objectFit: "cover" 
              }} 
            />
            <h3 className="text-2xl font-semibold" style={{ marginBottom: "1rem", height: "3rem" }}>{project.name}</h3>
            <p style={{ marginBottom: "1rem", height: "6rem", overflow: "hidden" }}>{project.description}</p>
            <div className="flex justify-center space-x-2" style={{ marginBottom: "1rem" }}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} style={{ textTransform: "uppercase", fontWeight: "bold" }}>
                  {tech}
                </span>
              ))}
            </div>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="fa fa-github fa-2x" style={{ marginBottom: "1rem" }}>
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