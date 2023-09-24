// frontend/components/Experience.tsx
import React, { FC } from 'react';
import styles from './Experience.module.css';

type Job = {
  company: string;
  role: string;
  duration: string;
  description: string;
};

const Experience: FC = () => {
  const jobs: Job[] = [
    {
      company: 'Company A',
      role: 'Software Engineer',
      duration: 'Jan 2020 - Present',
      description: 'Worked on various projects and technologies...',
    },
    {
      company: 'Company B',
      role: 'Junior Developer',
      duration: 'Jan 2019 - Dec 2019',
      description: 'Developed multiple features...',
    },
    // Add more jobs here
  ];

  return (
    <div style={{ backgroundColor: 'rgb(26 27 27)' }} className="text-center p-6">
      <h2 className="text-4xl font-semibold text-white">Experience</h2>
      <div className="flex flex-col items-center">
        {jobs.map((job, index) => (
          <div key={index} className={`m-2 p-2 border rounded bg-gray-700 text-white ${styles.jobBox}`}>
            <h3 className="text-2xl font-semibold">{job.company}</h3>
            <h4 className="text-xl">{job.role}</h4>
            <p className="text-base">{job.duration}</p>
            <p className="text-base">{job.description}</p>
          </div>
        ))}
      </div>
      <a href="/resume.pdf" className="text-2xl font-semibold text-white mt-4">
        View Resume
      </a>
    </div>
  );
};

export default Experience;
