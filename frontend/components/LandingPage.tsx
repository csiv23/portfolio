// frontend/components/LandingPage.tsx
import React, { FC, RefObject } from "react";

interface LandingPageProps {
  isDarkMode: boolean;
  aboutRef: RefObject<HTMLDivElement>;
}

const LandingPage: FC<LandingPageProps> = ({ isDarkMode, aboutRef }) => {
  const handleContinue = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const bgColor = isDarkMode ? "black" : "black"; // Background color based on dark mode

  return (
    <main
      style={{
        height: "100vh",
        backgroundColor: bgColor,
        position: "relative",
      }} // Added position: "relative"
      className="flex flex-col items-center justify-center w-full"
    >
      {/* Landing Page Content */}
      <div className="text-4xl font-semibold text-gray-800 dark:text-gray-100 mb-4 text-center">
        <div>Nice to meet you,</div>
        <div>
          I'm{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Cameron Sivo
          </span>
          , a software engineer.
        </div>
      </div>
      <button
        onClick={handleContinue}
        className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-300 dark:hover:text-white dark:focus:ring-blue-200"
      >
        Continue to site
      </button>
      {/* Social Icons */}
      <div className="absolute bottom-4 right-4 space-x-4">
        <a
          href="https://www.linkedin.com/in/cameron-sivo-68a721224/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin fa-2x text-white hover:text-gray-400"></i>
        </a>
        <a
          href="https://github.com/csiv23"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github fa-2x text-gray-800 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-200"></i>
        </a>
      </div>
    </main>
  );
};

export default LandingPage;
