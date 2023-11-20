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
        <div className={`text-lg ${textClass}`}>
          <p>
            My initial interest in software development began in high school
            when I became the lead programmer of my robotics team after being
            inspired by my older brother. This initial intrigue soon evolved
            into a profound passion, leading me to major in Computer Science at
            Northeastern University. At Northeastern, I've immersed myself in
            various aspects of technology and cultivated my leadership skills.
            More recently, I've found fulfillment in mentoring within the
            Computer Science Mentorship Organization (CoSMO), where I guide
            younger students towards achieving their goals and successes.
          </p>
          <p>
            Outside of my technical pursuits, I am deeply involved in music,
            leading several bands in Boston. I enjoy expressing myself through
            the saxophone and guitar, exploring a range of genres from funk and
            jazz to everything in-between. Additionally, I love to dedicate my
            time to sailing—a passion influenced by my upbringing in Newport,
            RI. My other interests include reading, playing fantasy football,
            experimenting with ergonomic keyboards, and staying up to date on
            the latest advancements in e-ink technology.
          </p>
          <p>
            I firmly believe in the importance of a strong work ethic and
            consistency. These principles are central to my approach to life,
            propelling me to continually seek improvement and make a meaningful
            impact in all my endeavors. At my core is a curiosity that drives me
            to learn and grow, and I am always looking for new opportunities to
            challenge myself.
          </p>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
