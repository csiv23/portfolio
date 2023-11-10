// frontend/components/Projects.tsx
import React, { FC } from "react";
import styles from "./Projects.module.css";

type Project = {
  name: string;
  description: string;
  imageSrc: string;
  technologies: string[];
  link?: string;
};

const Projects: FC = () => {
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
  ];

  return (
    <div
      id="projects"
      style={{
        paddingTop: "2vh",
        paddingBottom: "2vh",
      }}
      className="text-center w-full"
    >
      <h2 className="text-4xl font-semibold text-white mb-8">Projects</h2>
      <div className="grid grid-cols-4 gap-4 w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`col-span-4 grid grid-cols-5 w-full ${styles.projectBox}`}
          >
            {/* Image */}
            <div className="col-span-1">
              <img
                src={project.imageSrc}
                alt={project.name}
                className={`${styles.projectImage}`}
              />
            </div>
            {/* Details */}
            <div className="col-span-4 text-left w-full">
              <a
                href={project.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold text-white"
              >
                {project.name}
              </a>
              <p className="text-base text-gray-500">{project.description}</p>
              <div className="mt-2 flex space-x-2">
                {project.technologies.map((tech, techIndex) => (
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
    </div>
  );
};

export default Projects;
