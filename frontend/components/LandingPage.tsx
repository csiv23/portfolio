// frontend/components/LandingPage.tsx
import React, { FC, useRef } from "react";

interface LandingPageProps {
  isDarkMode: boolean;
}

const LandingPage: FC<LandingPageProps> = ({ isDarkMode }) => {
  const aboutRef = useRef<HTMLDivElement>(null); // Create a ref to store the DOM element

  const handleContinue = () => {
    // Scroll down to the About section smoothly
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
    // Logic to show header can also be added here
  };

  const bgColor = isDarkMode ? "black" : "black"; // Background color based on dark mode

  return (
    <main
      style={{ height: "100vh", backgroundColor: bgColor }}
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
          , a full-stack developer.
        </div>
      </div>
      <button
        onClick={handleContinue}
        className="px-4 py-2 border-2 border-blue-500 text-blue-500 rounded hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-300 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-300 dark:hover:text-white dark:focus:ring-blue-200"
      >
        Continue to site
      </button>
    </main>
  );
};

export default LandingPage;
