// frontend/components/About.tsx

import React, { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div 
      ref={ref} 
      style={{ backgroundColor: "rgb(26, 27, 27)",  paddingBottom: "2vh" }} 
      className="text-center"
    >
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
    </div>
  );
});

About.displayName = "About";

export default About;
