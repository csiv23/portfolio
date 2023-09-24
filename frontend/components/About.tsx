// frontend/components/About.tsx

import React, { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div ref={ref} className="about-container bg-white dark:bg-gray-800 p-8">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">About Me</h2>
      <div className="flex items-center">
        <img src="/profile-picture.jpg" alt="Profile" className="w-32 h-32 rounded-full mr-8" />
        <div>
          <p className="text-lg text-gray-700 dark:text-gray-200">
            Hello, I'm Cameron Sivo, a passionate full-stack developer based in Somewhere, USA.
          </p>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            I enjoy creating innovative solutions that make people's lives easier. With a strong foundation in both front-end and back-end technologies, I can take a project from concept to deployment.
          </p>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Skills</h3>
        <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
          <li>JavaScript & TypeScript</li>
          <li>React & Next.js</li>
          <li>Python & FastAPI</li>
          <li>Database Management</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;
