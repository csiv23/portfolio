import React, { forwardRef, useContext } from "react";
import useThemeStyles from "../hooks/useThemeStyles";

const About = forwardRef<HTMLDivElement>((props, ref) => {
  const { textClass } = useThemeStyles();

  return (
    <div
      ref={ref}
      id="about"
      style={{
        paddingBottom: "2vh",
        width: "90%",
        maxWidth: "1100px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "left",
      }}
      className="text-center"
    >
      <h2 className={`text-3xl font-semibold mb-8 ${textClass}`}>ABOUT ME</h2>
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
