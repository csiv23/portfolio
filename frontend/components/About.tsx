// frontend/components/About.tsx

import React, { forwardRef } from "react";

import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiReact,
  SiPostgresql,
  SiFlask,
  SiLinux,
} from "react-icons/si";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-container bg-white dark:bg-gray-800 p-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        About Me
      </h2>
      <div className="flex items-center">
        <img
          src="/profile-picture.jpeg"
          alt="Profile"
          className="w-32 h-32 rounded-full mr-8"
        />
        <p className="text-lg text-gray-700 dark:text-gray-200">
          I'm a Computer Science graduate with a focus on full-stack
          development. Based in Boston, I'm deeply committed to the craft of
          coding, from the logic of back-end to the finesse of front-end design.
          My driving force is a strong work ethic and the relentless pursuit of
          improvement. Let's build something exceptional together.
        </p>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Skills & Technologies
        </h3>
        <div className="flex flex-wrap gap-4 text-3xl">
          <SiPython />
          <SiJavascript />
          <SiHtml5 />
          <SiCss3 />
          <SiGit />
          <SiReact />
          <SiPostgresql />
          <SiFlask />
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
