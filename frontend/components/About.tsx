import React, { forwardRef, useContext } from "react";
import useThemeStyles from "../hooks/useThemeStyles"; // Import your custom hook

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const { textClass } = useThemeStyles(); // Get classes from your custom hook

  return (
    <div
      ref={ref}
      id="about"
      style={{ paddingBottom: "2vh" }}
      className="text-center"
    >
      <h2 className={`text-3xl font-bold mb-4 ${textClass}`}>About Me</h2>
      <div className="flex items-center">
        <img
          src="/profile-picture.jpeg"
          alt="Profile"
          className="w-32 h-32 rounded-full mr-8"
        />
        <p className={`text-lg ${textClass}`}>
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
